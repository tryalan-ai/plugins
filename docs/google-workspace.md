# Google Workspace preview setup

Gmail, Google Calendar and Google Drive connect directly to Google's official MCP servers. These catalog entries require administrator setup and are not ready-to-use account connections by themselves.

## Prerequisites

- Access to the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview).
- A Google Cloud project with the relevant product and MCP APIs enabled, following [Google's setup guide](https://developers.google.com/workspace/guides/configure-mcp-servers).
- An Alan API version that requests Google offline access and consent and starts OAuth even when Google's tool listing is public.

| Plugin | MCP endpoint | Services to enable |
| --- | --- | --- |
| Gmail | `https://gmailmcp.googleapis.com/mcp/v1` | `gmail.googleapis.com`, `gmailmcp.googleapis.com` |
| Google Calendar | `https://calendarmcp.googleapis.com/mcp/v1` | `calendar-json.googleapis.com`, `calendarmcp.googleapis.com` |
| Google Drive | `https://drivemcp.googleapis.com/mcp/v1` | `drive.googleapis.com`, `drivemcp.googleapis.com` |

## Configure Alan's OAuth client

1. Configure the OAuth consent screen in Google Auth Platform. For an external app in testing, add the intended test users; follow Google's verification requirements before broader distribution.
2. Create a **Web application** OAuth client and select **Use this client for an AI-powered agent**, as required by Google's MCP setup instructions.
3. Register the callback for the target Alan deployment:

   ```text
   <API_PUBLIC_BASE_URL>/public/mcp-connections/oauth/callback
   ```

   Use the actual externally reachable API origin. The public API URL configured in Alan must match the registered callback exactly; do not use Cursor's or another client's callback.

4. Merge the Google client into the existing `MCP_OAUTH_CLIENTS` JSON in Alan's secret-managed deployment configuration. Preserve other provider entries:

   ```json
   {
     "https://accounts.google.com": {
       "client_id": "<GOOGLE_CLIENT_ID>",
       "client_secret": "<GOOGLE_CLIENT_SECRET>"
     }
   }
   ```

   The issuer comes from Google's protected-resource metadata. Alan normalizes its trailing slash. Never commit real values to this repository or place them in `mcp.json`.

5. Roll out the configuration and compatible Alan API version through the normal deployment process.

Alan requests `access_type=offline` and `prompt=consent` during explicit Google connect/reconnect so a previously authorized account can receive a refresh token. The gateway stores tokens encrypted and refreshes them server-side; the coding agent does not receive Google credentials.

## Connect an account

Install a Google plugin from **Settings → Plugins → Marketplace**, choose the appropriate personal/team scope, then connect and complete Google consent. Each plugin/server has its own connection today; installing multiple Google plugins does not create one shared Google account connection.

Review the requested scopes on Google's consent screen. Tool access also depends on preview enrollment, enabled APIs, organization policy and the signed-in user's permissions.

## Verify before rollout

- Connect each product through Alan and confirm its tools appear in an Alan-managed run.
- Run a read against disposable test data and a bounded reversible write, then read the result back.
- Confirm an expired access token refreshes without a new sign-in.
- Revoke access and verify Alan asks the user to reconnect.
- Check personal/team isolation and both local and cloud managed runs.

Public endpoint probes are not authenticated validation. These entries do not bundle Cursor authoring skills because those instructions may refer to tools from Cursor's separate gateway.

## Troubleshooting

- **Client registration fails:** confirm `MCP_OAUTH_CLIENTS`, the discovered issuer, registered callback and enabled APIs.
- **Repeated sign-in after token expiry:** use an Alan version with offline-access support and reconnect with consent to obtain a refresh token.
- **Connected without a Google sign-in:** update Alan. Google's `initialize` and `tools/list` respond publicly, so a successful probe alone cannot establish account access.
- **Permission or preview errors:** check Google's preview requirements, app audience and Workspace administrator policy.

See the [Gmail](https://developers.google.com/workspace/gmail/api/guides/configure-mcp-server), [Calendar](https://developers.google.com/workspace/calendar/api/guides/configure-mcp-server), and [Drive](https://developers.google.com/workspace/drive/api/guides/configure-mcp-server) setup guides for current provider requirements.
