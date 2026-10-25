# Vendor access

Most vendors in this marketplace let Alan register itself and accept Alan's callback, so users only click Connect. The vendors below cannot be listed that way yet. Each needs a one-time action by Alan (admin@tryalan.ai), not by each customer.

Alan's callbacks:

- Production: `https://api.tryalan.ai/public/mcp-connections/oauth/callback`
- Staging: `https://staging-api.tryalan.ai/public/mcp-connections/oauth/callback`
- Local: `http://127.0.0.1:8400/public/mcp-connections/oauth/callback`

Results come from `scripts/probe-auth.mjs`, run on 2026-10-25 against the production callback. Gmail, Google Calendar, Google Drive, Canva and Figma were removed from the marketplace on that date; add them back once the action below is done and `probe-auth.mjs` reports `direct`.

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
| Discord | `https://mcp.discord.com` | Discord | Discord developer application |
| Checkly | `https://api.checklyhq.com/mcp` | Checkly | Checkly OAuth app |
| Chargebee | `https://mcp.chargebee.com` | Chargebee | Chargebee OAuth app |
| Hygraph | `https://mcp.hygraph.com/mcp/` | Hygraph | Hygraph OAuth app |
| Arize | `https://api.arize.com/mcp` | Arize | Arize OAuth app |
| Xero | `https://mcp.xero.com` | Xero | Xero developer app |
| YouTrack | `https://mcp.youtrack.cloud` | JetBrains | JetBrains Hub OAuth app |
| Lindy | `https://mcp.lindy.ai` | Lindy | Lindy OAuth app |
| Pitch | `https://mcp.pitch.com` | Pitch | Pitch OAuth app |

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
| Avoma | "redirect_uri host is not on the allowed list" | Avoma support |
| Qase | "The selected redirect_uris is invalid" | Qase support |
| RunPod | "redirect_uri is not allowed" | RunPod support |
| Retool | Authorize endpoint returns `404` for Alan's client | Retool support |
| Asana (`mcp.asana.com/mcp`) | "One or more redirect URIs are not allowed" | Asana developer support; the v2 endpoint needs an Alan app instead |
| Gamma | "redirect_uri not allowed" | Gamma support |
| Semrush | Redirect URI not allowed | Semrush support |
| Salesloft | "redirect_uris must belong to an allowed domain" | Salesloft support |
| Upwork | Redirect URIs rejected | Upwork support |
| IFTTT | "redirect_uris are not authorized" | IFTTT support |
| Float | Redirect URI rejected | Float support |
| Buffer, Instantly | Public client registration refused | Vendor support |
| Relevance AI | Loopback redirects only | A desktop loopback callback would work |
| Sprout Social | Authorize request rejected | Vendor support |

## Needs investigation

| Vendor | Observation | Next step |
| --- | --- | --- |
| New Relic | Authorize page reports a missing required parameter | Retry with explicit scopes |
| Semgrep | Rejects the `resource` parameter (`invalid_target`) | Check whether Alan can omit `resource` for this issuer |
| Convex | Issues an authorization code without a login | Confirm what account the token grants before listing |
| Render, Smartsheet, Wrike | No OAuth metadata; Cursor configures them with API-key headers | Confirm header format, then list as API-key plugins |
| Weights & Biases, Langfuse, Tinybird, SonarQube Cloud, Appsmith, Kinde, Optimizely, Rippling | `401` with no usable OAuth metadata | Confirm API-key header format |
| Gong | Registration requires a `scope`, which Alan's registration does not send | Send the resource's advertised scopes during dynamic registration |
| Browserbase, Firecrawl, Greptile, LambdaTest, PromptLayer, Courier, Zenhub | Initialize and tool listing work without auth, but the tools act on an account | Confirm how each expects its API key before listing |
| Ahrefs, QuickBooks | Bot protection answered the probe's authorize request; a real browser may pass | Connect once from a browser |
| TinyFish | Rate limited during the probe | Retry |
| Copper, Freshdesk | `401` with no OAuth metadata | Confirm API-key header format |

## Claude connector directory (2026-10-25)

Checked against Alan's production callback. Connectors hosted on `claude.com` or on Claude-specific paths are Anthropic's own and are not listed in Alan.

- **Rejected Alan's callback or registration (41):** Adobe Experience Manager, Adobe Journey Optimizer, Adobe Marketing Agent, Adobe for creativity, Ahrefs, Airwallex Developer, Alma, Base44, Candid, Canva, Coupler.io, Datasite, DevRev, Figma, Gamma, GovTribe, Harness.io, IFTTT, Intercom, Klarity, LSEG, LegalZoom, Local Falcon, Lorikeet, Lusha, MSCI, Moody's, Omni Analytics, PitchBook Premium, Polar Analytics, Quartr, Semrush, SignNow, SurveyMonkey, Tango, Third Bridge, Trimble SketchUp, Tropic, Verisk XactRestore, Yardi Virtuoso, ZoomInfo.
- **Need an Alan OAuth app (31):** Asana, Autodesk Product Help, Bigdata.com, Box, D&B Risk Analytics, DocuSeal, Docusign, Dovetail, Everlaw, FMP, G2, Gmail, Google Calendar, Google Cloud BigQuery, Google Compute Engine, Google Drive, Guidepoint, Harvey, Instacart, Owkin, PagerDuty, Shopify, Slack, Solve Intelligence, Spotify, Thumbtack, Uber, Uber Eats, Verisk Underwriting Intelligence, Xero, Zoom for Claude.
- **No OAuth metadata; likely API key (13):** Audible, Benevity, Booking.com, DirectBooker, Expedia, Glovo, ICE Data Services, Intuit QuickBooks, Intuit TurboTax, Learning Commons Knowledge Graph, Resy, StubHub, Wyndham Hotels and Resorts.

## No hosted MCP server found

Snyk, ElevenLabs, Loom and Microsoft 365 (Outlook, Teams, SharePoint, OneDrive) had no reachable hosted server at the URLs tried. Cursor serves Microsoft 365 through its own gateway, which does not work from Alan.
