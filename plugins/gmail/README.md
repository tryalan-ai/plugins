# Gmail (Preview)

Search and read Gmail messages, manage labels and create drafts. Requires Google Workspace Developer Preview access.

Connects directly to Google's hosted MCP server at `https://gmailmcp.googleapis.com/mcp/v1`.

## Setup

Follow the [Google Workspace setup guide](../../docs/google-workspace.md) before connecting. An Alan administrator must configure a Google OAuth client; users then install this plugin in **Settings → Plugins → Marketplace** and complete Google sign-in.

Preview access and enabled product/MCP APIs are required. Installing the plugin does not grant access to the preview or to files, messages or calendars the user cannot access.

## Provider documentation

- [Official setup and prerequisites](https://developers.google.com/workspace/gmail/api/guides/configure-mcp-server)

Tool names and capabilities come from the connected server.
