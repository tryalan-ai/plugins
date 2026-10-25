# Contributing a plugin

1. Create `plugins/<name>/` where `<name>` is lowercase kebab-case.
2. Add `.cursor-plugin/plugin.json`:

   ```json
   {
     "name": "<name>",
     "displayName": "Readable Name",
     "version": "1.0.0",
     "description": "One sentence: what an agent can do with it.",
     "author": { "name": "Alan" },
     "homepage": "https://vendor.example",
     "repository": "https://github.com/tryalan-ai/plugins",
     "license": "MIT",
     "category": "project-management",
     "keywords": ["..."],
     "mcpServers": "./mcp.json"
   }
   ```

3. Add `mcp.json` with the vendor's hosted MCP server:

   ```json
   { "mcpServers": { "<name>": { "type": "http", "url": "https://mcp.vendor.example/mcp" } } }
   ```

   - Remote `https` servers only. Alan does not run stdio servers yet.
   - Never commit a credential. If the server needs a key, reference it as a header: `"headers": { "Authorization": "Bearer ${VENDOR_API_KEY}" }`. Alan asks the user for `VENDOR_API_KEY` and stores it encrypted.
   - Prefer servers that support OAuth dynamic client registration; those connect with one click.
   - For providers that require a registered OAuth app, document administrator setup and Alan's callback. Client credentials belong in Alan's deployment configuration, not in a Cursor-specific `auth` block that Alan does not import.
   - Do not use `api.cursor.com/rest-mcp/*` servers. They authenticate against Cursor accounts.

4. Optional skills go in `skills/<skill>/SKILL.md`, with `name` equal to the directory and a `description` that says when to use it. Set `"skills": "./skills/"` in the manifest.
5. Add the plugin to `.cursor-plugin/marketplace.json` with `"source": "plugins/<name>"` and the same description as the manifest.
6. Run `node scripts/validate.mjs`.
7. Run `node scripts/probe-auth.mjs <name> <url>` for each OAuth server. It must report `direct` or `no-auth`: discovery alone passed for Canva while its authorize step rejected Alan's callback. Vendors that report `needs-app` or `gated` go in [docs/vendor-access.md](docs/vendor-access.md), not the marketplace, until Alan has an app or approval.

Before listing a server, check `initialize`, `tools/list`, and its OAuth protected-resource metadata. A `200` response proves discovery works, not that tools can access account data anonymously: Google's servers expose public tool listings but require user OAuth for account operations. Record preview/registration requirements and validate an authenticated tool call before claiming the connector works end to end.
