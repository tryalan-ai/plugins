#!/usr/bin/env node
// Validates the marketplace the way Alan imports it. No dependencies, so CI needs only Node.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const NAME = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const SECRET_REFERENCE = /\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}/g;
// Cursor-hosted proxies authenticate against Cursor accounts and never work from Alan.
const BLOCKED_HOSTS = ["api.cursor.com"];
const errors = [];

function fail(where, message) {
  errors.push(`${where}: ${message}`);
}

function readJson(path, where) {
  try {
    return JSON.parse(readFileSync(join(ROOT, path), "utf8"));
  } catch (error) {
    fail(where, `${path} is missing or not valid JSON (${error.message})`);
    return undefined;
  }
}

function checkServer(where, key, server) {
  if (!NAME.test(key.toLowerCase())) fail(where, `server key "${key}" should be lowercase kebab-case`);
  if (server.command) {
    fail(where, `server "${key}" is stdio; Alan serves remote (http) servers only`);
    return;
  }
  let url;
  try {
    url = new URL(server.url);
  } catch {
    fail(where, `server "${key}" has no valid url`);
    return;
  }
  if (url.protocol !== "https:") fail(where, `server "${key}" must use https`);
  if (url.username || url.password) fail(where, `server "${key}" url must not carry credentials`);
  if (SECRET_REFERENCE.test(server.url)) fail(where, `server "${key}" puts a secret in the url; use a header`);
  SECRET_REFERENCE.lastIndex = 0;
  if (BLOCKED_HOSTS.includes(url.hostname)) fail(where, `server "${key}" uses ${url.hostname}`);
  for (const [header, value] of Object.entries(server.headers ?? {})) {
    const literal = value.replace(SECRET_REFERENCE, "");
    if (/bearer\s+\S{8,}|token\s+\S{8,}/i.test(literal)) {
      fail(where, `header "${header}" looks like a literal credential; use \${NAME}`);
    }
  }
}

function checkSkills(where, pluginDir) {
  const skillsDir = join(ROOT, pluginDir, "skills");
  if (!existsSync(skillsDir)) return 0;
  let count = 0;
  for (const entry of readdirSync(skillsDir)) {
    const skillPath = join(skillsDir, entry, "SKILL.md");
    if (!statSync(join(skillsDir, entry)).isDirectory()) continue;
    if (!existsSync(skillPath)) {
      fail(where, `skills/${entry} has no SKILL.md`);
      continue;
    }
    const text = readFileSync(skillPath, "utf8");
    const frontmatter = /^---\n([\s\S]*?)\n---/.exec(text)?.[1] ?? "";
    const name = /^name:\s*(.+)$/m.exec(frontmatter)?.[1]?.trim();
    const description = /^description:\s*(.+)$/m.exec(frontmatter)?.[1]?.trim();
    if (name !== entry) fail(where, `skills/${entry}/SKILL.md name must be "${entry}"`);
    if (!description || description.length > 1024) {
      fail(where, `skills/${entry}/SKILL.md needs a description under 1024 characters`);
    }
    count += 1;
  }
  return count;
}

const marketplace = readJson(".cursor-plugin/marketplace.json", "marketplace");
const seen = new Set();
let servers = 0;
let skills = 0;
for (const entry of marketplace?.plugins ?? []) {
  const where = `plugin ${entry.name}`;
  if (!NAME.test(entry.name ?? "")) fail(where, "name must be lowercase kebab-case");
  if (seen.has(entry.name)) fail(where, "duplicate name");
  seen.add(entry.name);
  if (typeof entry.source !== "string" || entry.source !== `plugins/${entry.name}`) {
    fail(where, `source must be "plugins/${entry.name}"`);
    continue;
  }
  const manifest = readJson(`${entry.source}/.cursor-plugin/plugin.json`, where);
  if (!manifest) continue;
  if (manifest.name !== entry.name) fail(where, "manifest name differs from marketplace entry");
  for (const field of ["displayName", "description", "version", "license", "category"]) {
    if (!manifest[field]) fail(where, `manifest is missing ${field}`);
  }
  if (manifest.description !== entry.description) {
    fail(where, "marketplace description differs from the manifest");
  }
  const mcp = readJson(`${entry.source}/${manifest.mcpServers ?? "mcp.json"}`, where);
  for (const [key, server] of Object.entries(mcp?.mcpServers ?? {})) {
    checkServer(where, key, server);
    servers += 1;
  }
  skills += checkSkills(where, entry.source);
}

for (const directory of readdirSync(join(ROOT, "plugins"))) {
  if (!seen.has(directory)) fail(`plugins/${directory}`, "is not listed in the marketplace");
}

if (errors.length > 0) {
  console.error(errors.map((error) => `✗ ${error}`).join("\n"));
  process.exit(1);
}
console.log(`✓ ${seen.size} plugins, ${servers} MCP servers, ${skills} skills`);
