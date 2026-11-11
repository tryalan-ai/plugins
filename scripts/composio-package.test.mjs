import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { COMPOSIO_PACKAGES, checkComposioServer } from './composio-contract.mjs';
const root = fileURLToPath(new URL('..', import.meta.url));
const json = path => JSON.parse(readFileSync(resolve(root, path), 'utf8'));
const marketplace = json('.cursor-plugin/marketplace.json');

test('all 16 personal backend registry tuples have one complete marketplace package', () => {
  assert.equal(COMPOSIO_PACKAGES.length, 16);
  assert.equal(new Set(COMPOSIO_PACKAGES.map(([name]) => name)).size, 16);
  for (const [name, slug] of COMPOSIO_PACKAGES) {
    const entries = marketplace.plugins.filter(entry => entry.name === name);
    assert.equal(entries.length, 1, name);
    const entry = entries[0];
    assert.equal(entry.source, `plugins/${name}`);
    const manifest = json(`${entry.source}/.cursor-plugin/plugin.json`);
    assert.equal(manifest.name, name);
    assert.equal(manifest.description, entry.description);
    assert.match(manifest.version, /^\d+\.\d+\.\d+$/);
    assert.equal(manifest.author.name, 'Alan');
    assert.equal(manifest.license, 'MIT');
    assert.equal(manifest.repository, 'https://github.com/tryalan-ai/plugins');
    assert.ok(manifest.homepage.startsWith('https://'));
    assert.ok(manifest.keywords.includes('personal'));
    assert.ok(existsSync(resolve(root, entry.source, manifest.logo)));
    const mcp = json(`${entry.source}/${manifest.mcpServers}`);
    assert.deepEqual(mcp, { mcpServers: { [name]: {
      type: 'http', url: 'https://connect.composio.dev/mcp',
      managedAuth: 'composio_session', composioToolkit: slug,
    } } });
    assert.equal(checkComposioServer(name, name, mcp.mcpServers[name]), undefined);
    const readme = readFileSync(resolve(root, entry.source, 'README.md'), 'utf8');
    assert.match(readme, /personal OAuth/);
    assert.match(readme, /tenant administrator consent/);
    assert.match(readme, /not been verified end to end/);
  }
  assert.equal(json('plugins/clickup/.cursor-plugin/plugin.json').version, '1.0.1');
});

test('managed contract rejects unknown, crossed, incomplete and credential-bearing declarations', () => {
  const valid = { type: 'http', url: 'https://connect.composio.dev/mcp', managedAuth: 'composio_session', composioToolkit: 'gmail' };
  for (const [name, key, server] of [
    ['unknown', 'unknown', valid], ['gmail', 'outlook', valid],
    ['gmail', 'gmail', { ...valid, composioToolkit: 'outlook' }],
    ['gmail', 'gmail', { ...valid, managedAuth: undefined }],
    ['gmail', 'gmail', { ...valid, url: 'https://example.com' }],
    ['gmail', 'gmail', { ...valid, headers: { Authorization: 'secret' } }],
  ]) assert.ok(checkComposioServer(name, key, server));
});
