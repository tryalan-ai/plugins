import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve, sep } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));
const readJson = (path) => JSON.parse(readFileSync(resolve(root, path), "utf8"));
const catalog = readJson(".cursor-plugin/marketplace.json");

test("Figma resolves from the marketplace to an upgradable repository package", () => {
  const entries = catalog.plugins.filter((entry) => entry.name === "figma");
  assert.equal(entries.length, 1, "Figma must have one canonical marketplace entry");
  const entry = entries[0];
  assert.equal(entry.source, "plugins/figma");
  const manifest = readJson(`${entry.source}/.cursor-plugin/plugin.json`);
  assert.equal(manifest.name, entry.name);
  assert.equal(manifest.description, entry.description);
  // The API bundle shipped 1.0.0. A higher version lets installed copies upgrade.
  const version = /^(\d+)\.(\d+)\.(\d+)$/.exec(manifest.version);
  assert.ok(version, "package needs a stable semantic version");
  assert.ok(Number(version[1]) > 1 || (Number(version[1]) === 1 &&
    (Number(version[2]) > 0 || Number(version[3]) > 0)), "repository package must upgrade bundled 1.0.0");

  const packageRoot = resolve(root, entry.source);
  const readAsset = (path) => {
    const absolute = resolve(packageRoot, path);
    assert.ok(absolute.startsWith(`${packageRoot}${sep}`), "asset must stay in the package");
    return readFileSync(absolute, "utf8");
  };
  assert.match(readAsset(manifest.logo), /<svg\b/);
  const mcp = JSON.parse(readAsset(manifest.mcpServers));
  // This declarative placeholder is resolved by Alan, which owns account sessions.
  assert.deepEqual(mcp, { mcpServers: { figma: {
    type: "http",
    url: "https://connect.composio.dev/mcp",
    managedAuth: "composio_session",
  } } });
});
