# Vendor access

Most vendors in this marketplace let Alan register itself and accept Alan's callback, so users only click Connect. The vendors below cannot be listed that way yet. Each needs a one-time action by Alan (admin@tryalan.ai), not by each customer.

Alan's callbacks:

- Production: `https://api.tryalan.ai/public/mcp-connections/oauth/callback`
- Staging: `https://staging-api.tryalan.ai/public/mcp-connections/oauth/callback`
- Local: `http://127.0.0.1:8400/public/mcp-connections/oauth/callback`

Results come from `scripts/probe-auth.mjs`, run on 2026-10-25 against the production callback.

## Needs an Alan OAuth app

Create one app per vendor (per environment where noted), then add it to Alan's `MCP_OAUTH_CLIENTS`, keyed by the issuer.

| Vendor | MCP server | Issuer | Where to register |
| --- | --- | --- | --- |
| Gmail, Google Calendar, Google Drive, BigQuery | `*mcp.googleapis.com` | `https://accounts.google.com` | Google Cloud OAuth client marked "Use this client for an AI-powered agent"; Workspace Developer Preview ([setup](google-workspace.md)) |
| Canva | `https://api.canva.com/connect/v1/mcp` | `https://www.canva.com` | Canva Developer Portal app with Canva MCP enabled; public apps are reviewed by Canva |
| Slack | `https://mcp.slack.com/mcp` | `https://mcp.slack.com` | Slack app, published to the Slack Marketplace or internal |
| HubSpot | `https://mcp.hubspot.com` | `https://mcp.hubspot.com` | HubSpot MCP Auth App |
| Asana | `https://mcp.asana.com/v2/mcp` | `https://app.asana.com` | Asana developer console app |
| Zoom | `https://mcp.zoom.us/mcp/zoom/streamable` | `https://zoom.us` | Zoom Marketplace app |
| Box | `https://mcp.box.com` | `https://api.box.com` | Box developer console app |
| DocuSign | `https://mcp.docusign.com/mcp` | `https://account.docusign.com` | DocuSign developer app |
| PagerDuty | `https://mcp.pagerduty.com/mcp` | `https://app.pagerduty.com` | PagerDuty app, or an API-key variant (confirm header format) |

## Needs vendor approval

These vendors only accept clients on their own allowlist. Apply as Alan with the callbacks above.

| Vendor | What the server returned | Path |
| --- | --- | --- |
| Figma | Registration `403` | Figma MCP catalog waitlist |
| Intercom | "Redirect URI is not in the allowlist, reach out" | Contact Intercom developer support |
| Dropbox | "Only pre-registered MCP trusted partners are allowed" | Dropbox partner request |
| Square | "Domain not in allowlist" | Square developer support |
| Plane | Redirect URI rejected | Plane support |
| BrowserStack | Only localhost, claude.ai or cursor:// redirects | BrowserStack partnership; a desktop loopback callback would also work |
| CircleCI | Only loopback (`127.0.0.1`) redirects | A desktop loopback callback in Alan would work without approval |

## Needs investigation

| Vendor | Observation | Next step |
| --- | --- | --- |
| New Relic | Authorize page reports a missing required parameter | Retry with explicit scopes |
| Semgrep | Rejects the `resource` parameter (`invalid_target`) | Check whether Alan can omit `resource` for this issuer |
| Convex | Issues an authorization code without a login | Confirm what account the token grants before listing |
| Render, Smartsheet, Wrike | No OAuth metadata; Cursor configures them with API-key headers | Confirm header format, then list as API-key plugins |
| Weights & Biases, Langfuse, Tinybird, SonarQube Cloud | `401` with no OAuth metadata | Confirm API-key header format |

## No hosted MCP server found

Upstash, Snyk, ElevenLabs, Loom and Microsoft 365 (Outlook, Teams, SharePoint, OneDrive) had no reachable hosted server at the URLs tried. Cursor serves Microsoft 365 through its own gateway, which does not work from Alan.
