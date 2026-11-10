# Figma

Install from Marketplace, open Figma under Installed and choose Connect for your personal Figma account. Connected tools appear in MCP with the same per-tool controls as other connectors.

This connector currently exposes read-only Figma tools through Composio. It does not provide canvas creation or editing. Accounts and file permissions remain personal.

Deployment requires Alan's managed Composio session support plus COMPOSIO_PROJECT_API_KEY and COMPOSIO_FIGMA_AUTH_CONFIG_ID. Keep these credentials in deployment secret storage; they never belong in the plugin manifest or agent environment. Land the corresponding Alan changes before enabling this entry in a deployment.

Validated in local Electron with real personal OAuth and an Alan managed run calling current-user, file metadata and page nodes. Live refresh and revocation remain rollout checks.
