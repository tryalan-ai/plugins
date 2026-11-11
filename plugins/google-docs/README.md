# Google Docs

Search, read and create Google Docs documents and insert text.

Install from Marketplace, open the installed plugin and choose Connect. Authorize your own provider account using personal OAuth through Alan and Composio. This package supports Personal connections only; team-shared connections are deferred. A work or school account may require tenant administrator consent and provider licensing. Personal describes the Alan connection owner, not a promise that every consumer account supports this service. Access follows the connected account permissions.

Only the backend toolkit allowlist is exposed. Text insertion is supported; general document batch editing is unavailable. This is an individual app integration; it does not expose an entire office suite.

## Deployment and validation

Requires Alan managed toolkit sessions, `COMPOSIO_PROJECT_API_KEY` and `COMPOSIO_GOOGLEDOCS_AUTH_CONFIG_ID` in deployment secret storage. Alan resolves `managedAuth: composio_session` and `composioToolkit: googledocs` at runtime; credentials do not belong in this package. Missing provider configuration prevents connection.

Package and registry checks do not establish live OAuth or provider execution. Personal consent, account selection, an allowed tool call, reconnect and revocation remain rollout checks. This package has not been verified end to end with a live account.

Logo source: https://logos.composio.dev/api/googledocs (Composio toolkit asset).
