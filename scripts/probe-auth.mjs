#!/usr/bin/env node
// Checks that each MCP server's OAuth flow accepts Alan's callback, not just that discovery works.
// Usage: node scripts/probe-auth.mjs [name url ...]   (defaults to every server in the marketplace)
// Servers without client ID metadata document support get one dynamic client registration named "Alan".
import { createHash, randomBytes } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const API = (process.env.ALAN_API_BASE_URL ?? "https://api.tryalan.ai").replace(/\/$/, "");
const REDIRECT = `${API}/public/mcp-connections/oauth/callback`;
const CLIENT_METADATA = `${API}/public/mcp-connections/oauth/client-metadata.json`;
const REJECTION =
  /invalid[ _-]?redirect|redirect[_ ]ur[il].{0,40}(not|invalid|mismatch|allowed|match)|unauthorized_client|invalid_client|client.{0,20}(not (found|allowed|registered|authorized)|is not)|not an approved|not on the allowlist/i;
const INITIALIZE = JSON.stringify({
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "alan-probe", version: "1" } },
});

const timeout = (ms) => AbortSignal.timeout(ms);

async function getJson(url) {
  try {
    const response = await fetch(url, { signal: timeout(10_000) });
    return response.ok ? await response.json() : null;
  } catch {
    return null;
  }
}

async function authorizationServerMetadata(issuer) {
  const url = new URL(issuer);
  const path = url.pathname.replace(/\/$/, "");
  const base = issuer.replace(/\/$/, "");
  for (const candidate of [
    `${url.origin}/.well-known/oauth-authorization-server${path}`,
    `${url.origin}/.well-known/openid-configuration${path}`,
    `${base}/.well-known/openid-configuration`,
    `${base}/.well-known/oauth-authorization-server`,
  ]) {
    const metadata = await getJson(candidate);
    if (metadata?.authorization_endpoint) return metadata;
  }
  return null;
}

async function authorize(metadata, clientId, scopes, resource) {
  const challenge = createHash("sha256").update(randomBytes(32).toString("base64url")).digest("base64url");
  const query = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: REDIRECT,
    code_challenge: challenge,
    code_challenge_method: "S256",
    state: randomBytes(32).toString("base64url"),
    resource,
  });
  if (scopes?.length) query.set("scope", scopes.join(" "));
  const response = await fetch(`${metadata.authorization_endpoint}?${query}`, {
    redirect: "manual",
    signal: timeout(15_000),
  });
  const location = response.headers.get("location") ?? "";
  const redirected = response.status >= 300 && response.status < 400;
  const body = redirected ? "" : (await response.text()).slice(0, 20_000);
  if (/[?&]error=/.test(location)) {
    return { ok: false, detail: `redirected with ${new URL(location, metadata.authorization_endpoint).searchParams.get("error")}` };
  }
  if (response.status >= 400) {
    return { ok: false, detail: `HTTP ${response.status} ${REJECTION.exec(body)?.[0] ?? body.replace(/\s+/g, " ").slice(0, 80)}` };
  }
  if (REJECTION.test(body)) return { ok: false, detail: `page says "${REJECTION.exec(body)[0]}"` };
  return { ok: true, detail: `HTTP ${response.status}` };
}

async function probe(name, serverUrl) {
  const result = { name, url: serverUrl };
  try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json, text/event-stream" },
      body: INITIALIZE,
      signal: timeout(15_000),
    });
    const url = new URL(serverUrl);
    const hinted = /resource_metadata="([^"]+)"/.exec(response.headers.get("www-authenticate") ?? "")?.[1];
    const resourceMetadata =
      (hinted && (await getJson(hinted))) ||
      (await getJson(`${url.origin}/.well-known/oauth-protected-resource${url.pathname.replace(/\/$/, "")}`)) ||
      (await getJson(`${url.origin}/.well-known/oauth-protected-resource`));
    if (response.status === 200 && !resourceMetadata) return { ...result, verdict: "no-auth" };
    if (response.status >= 500 || (response.status >= 400 && ![401, 403].includes(response.status) && !resourceMetadata)) {
      return { ...result, verdict: "unreachable", detail: `HTTP ${response.status}` };
    }
    const metadata = await authorizationServerMetadata(resourceMetadata?.authorization_servers?.[0] ?? url.origin);
    if (!metadata) {
      return { ...result, verdict: response.status === 200 ? "no-auth" : "api-key-or-unknown", detail: `HTTP ${response.status}` };
    }
    const scopes = resourceMetadata?.scopes_supported;
    const resource = resourceMetadata?.resource ?? serverUrl;
    result.issuer = metadata.issuer;
    if (metadata.client_id_metadata_document_supported) {
      const outcome = await authorize(metadata, CLIENT_METADATA, scopes, resource);
      if (outcome.ok) return { ...result, verdict: "direct", method: "client-metadata", detail: outcome.detail };
    }
    if (!metadata.registration_endpoint) return { ...result, verdict: "needs-app" };
    const registration = await fetch(metadata.registration_endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        client_name: "Alan",
        client_uri: "https://tryalan.ai",
        redirect_uris: [REDIRECT],
        grant_types: ["authorization_code", "refresh_token"],
        response_types: ["code"],
        token_endpoint_auth_method: "none",
      }),
      signal: timeout(15_000),
    });
    if (!registration.ok) {
      const text = (await registration.text()).replace(/\s+/g, " ").slice(0, 160);
      return { ...result, verdict: "gated", method: "registration", detail: `HTTP ${registration.status} ${text}` };
    }
    const outcome = await authorize(metadata, (await registration.json()).client_id, scopes, resource);
    return { ...result, verdict: outcome.ok ? "direct" : "gated", method: "registration", detail: outcome.detail };
  } catch (error) {
    return { ...result, verdict: "unreachable", detail: error.cause?.code ?? error.message };
  }
}

function marketplaceServers() {
  const marketplace = JSON.parse(readFileSync(join(ROOT, ".cursor-plugin/marketplace.json"), "utf8"));
  return marketplace.plugins.flatMap((entry) => {
    const manifest = JSON.parse(readFileSync(join(ROOT, entry.source, ".cursor-plugin/plugin.json"), "utf8"));
    const mcp = JSON.parse(readFileSync(join(ROOT, entry.source, manifest.mcpServers ?? "mcp.json"), "utf8"));
    return Object.entries(mcp.mcpServers ?? {})
      .filter(([, server]) => server.url && !server.headers)
      .map(([key, server]) => [`${entry.name}/${key}`, server.url]);
  });
}

const args = process.argv.slice(2);
const targets = args.length ? args.reduce((pairs, value, index) => (index % 2 ? pairs : [...pairs, [value, args[index + 1]]]), []) : marketplaceServers();
const results = [];
for (let index = 0; index < targets.length; index += 8) {
  results.push(...(await Promise.all(targets.slice(index, index + 8).map(([name, url]) => probe(name, url)))));
}
for (const result of results) {
  console.log(`${result.verdict.padEnd(18)} ${result.name.padEnd(36)} ${result.detail ?? ""}`);
}
const failures = results.filter((result) => ["gated", "unreachable"].includes(result.verdict));
process.exitCode = failures.length ? 1 : 0;
