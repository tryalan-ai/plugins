# Deploy personal Composio integrations

Configure the managed Alan backend and its project key before publishing these packages as usable integrations. A successful OAuth consent flow alone does not prove that Alan can select or execute tools for the resulting account.

## Project key permissions

The `COMPOSIO_PROJECT_API_KEY` must belong to the same Composio project as the toolkit auth configurations and have these scoped permissions:

| Resource | Required permission | Purpose |
| --- | --- | --- |
| Session management | Write | Create managed tool sessions and authorization links |
| Session tool execution | Write | Execute the selected allowlisted tools through a session |
| Connected accounts | Read | List connected accounts for deterministic account selection |

Connected accounts Read is a separate requirement: Session management and Session tool execution permissions alone do not authorize `GET /api/v3.1/connected_accounts`. A scoped key can create a session or complete OAuth yet return HTTP 403 on that list request. Treat that response as a deployment permission blocker; correct the receiving deployment's key scopes and retry. Never treat a denied list request as an empty result or bypass it with an unfiltered/default account. Broader connected-account write, refresh, delete or revoke permissions are not needed for account discovery.

See Composio's [project API key permission reference](https://docs.composio.dev/reference/authenticating-to-composio/project-api-key-permissions). Keep the project key in deployment secret storage; never place it in a plugin, agent environment, log or committed file.

## Per-toolkit auth configurations

Set each enabled toolkit's auth configuration in the same deployment and project as the key. Missing or blank configuration blocks that toolkit; another toolkit's configuration is not a fallback.

| Package | Toolkit slug | Deployment variable |
| --- | --- | --- |
| confluence | `confluence` | `COMPOSIO_CONFLUENCE_AUTH_CONFIG_ID` |
| clickup | `clickup` | `COMPOSIO_CLICKUP_AUTH_CONFIG_ID` |
| asana | `asana` | `COMPOSIO_ASANA_AUTH_CONFIG_ID` |
| google-meet | `googlemeet` | `COMPOSIO_GOOGLEMEET_AUTH_CONFIG_ID` |
| gmail | `gmail` | `COMPOSIO_GMAIL_AUTH_CONFIG_ID` |
| google-drive | `googledrive` | `COMPOSIO_GOOGLEDRIVE_AUTH_CONFIG_ID` |
| google-docs | `googledocs` | `COMPOSIO_GOOGLEDOCS_AUTH_CONFIG_ID` |
| google-sheets | `googlesheets` | `COMPOSIO_GOOGLESHEETS_AUTH_CONFIG_ID` |
| google-slides | `googleslides` | `COMPOSIO_GOOGLESLIDES_AUTH_CONFIG_ID` |
| google-calendar | `googlecalendar` | `COMPOSIO_GOOGLECALENDAR_AUTH_CONFIG_ID` |
| outlook | `outlook` | `COMPOSIO_OUTLOOK_AUTH_CONFIG_ID` |
| onedrive | `one_drive` | `COMPOSIO_ONE_DRIVE_AUTH_CONFIG_ID` |
| sharepoint | `share_point` | `COMPOSIO_SHARE_POINT_AUTH_CONFIG_ID` |
| excel | `excel` | `COMPOSIO_EXCEL_AUTH_CONFIG_ID` |
| microsoft-word | `microsoft_word` | `COMPOSIO_MICROSOFT_WORD_AUTH_CONFIG_ID` |

## Deterministic personal account selection

These packages support Personal connections only; team-shared connections are deferred. List accounts for the exact Alan user principal, toolkit slug and configured auth configuration, restricted to **PRIVATE** accounts with **ACTIVE** status. Validate those same identities on the returned records. Exactly one eligible account is required before session creation or tool execution, and the session must be pinned to that account. Never fall back to a provider default account, a shared/public account, another user, another toolkit or another auth configuration.

Zero eligible accounts requires personal connection or reconnection. Multiple eligible accounts fail closed: resolve the ambiguity before trying again rather than choosing the first result. A previously pinned account that is missing, inactive or no longer eligible must also fail closed; it cannot silently switch to a different account.

## Rollout checks

Verify the receiving deployment's key can list the filtered accounts without 403, then verify personal consent, exactly-one account selection, an allowed tool call, reconnect and revocation behavior. Work or school accounts may require tenant administrator consent and licensing; Personal describes Alan connection ownership rather than universal consumer-account support. Package validation and session minting do not establish live provider execution. Respect each package's documented allowlist and keep team-shared connections disabled.
