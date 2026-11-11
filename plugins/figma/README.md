# Figma

Install from Marketplace, open Figma under Installed and choose Connect. Connected tools appear in MCP with the same per-tool controls as other connectors.

This connector currently exposes read-only Figma tools through Composio. It does not provide canvas creation or editing. On Alan versions with scope selection, Personal uses your connection and Team uses a separate admin-authorized connection. Sessions default to Personal. Scope availability depends on the deployed backend version; file access follows the selected connection's permissions.

This repository is the source for the plugin manifest, MCP declaration and logo. Version 1.0.1 upgrades the former API-bundled 1.0.0 package while keeping the `figma` identity. Alan resolves `managedAuth: composio_session` to the selected account scope at runtime.

Deployment requires Alan's managed Composio session support plus COMPOSIO_PROJECT_API_KEY and COMPOSIO_FIGMA_AUTH_CONFIG_ID. Keep these credentials in deployment secret storage; they never belong in the plugin manifest or agent environment.

Publish this package and marketplace entry before deploying the Alan API change that removes the bundled fallback. After deployment, sync the Alan marketplace and verify Figma's effective source repository is `tryalan-ai/plugins` and source path is `plugins/figma`. For a package in its marketplace's own repository, the database `sourceRepository` remains null and the effective repository comes from the marketplace. Existing installations should see 1.0.1 as an update. Verify Connect and a read-only tool call through Alan using a personal account.

Historical evidence from the prior API-bundled connector: local Electron testing used real personal OAuth and an Alan managed run calling current-user, file metadata and page nodes. This does not establish live validation of the repository package. Package-based Connect, tool calls, refresh and revocation remain rollout checks.
