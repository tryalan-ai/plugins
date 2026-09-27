# Alan Plugins

The curated plugin marketplace for [Alan](https://tryalan.ai). Alan syncs this repository, pinned to a commit, and lists every plugin here under **Settings → Plugins → Marketplace**.

A plugin bundles remote MCP servers and skills. Installing one makes its skills available to your agents and routes its MCP tools through Alan's gateway, so credentials stay in Alan and every coding agent (Claude Code, Codex, OpenCode, Cursor and others) gets the same tools, in the cloud and on your machine.

## Plugins

| Plugin | Connects with | What it adds |
| --- | --- | --- |
| Linear | OAuth | Issues, projects and comments |
| Notion | OAuth | Pages and databases |
| Atlassian | OAuth | Jira issues and Confluence pages |
| Sentry | OAuth | Issues, events and releases |
| PostHog | OAuth | Insights, feature flags and experiments |
| Vercel | OAuth | Projects, deployments and build logs |
| Supabase | OAuth | Projects, SQL and logs |
| Neon | OAuth | Postgres projects, branches and queries |
| Stripe | OAuth | Customers, payments and subscriptions |
| Figma | OAuth | Files, frames and design context |
| Canva | OAuth | Designs |
| Miro | OAuth | Boards |
| GitHub | Personal access token | Repositories, issues and pull requests |
| Hugging Face | None | Models, datasets, Spaces and papers |
| Cloudflare Docs | None | Cloudflare developer documentation |
| Docs Research | None | Context7 library docs and DeepWiki repository wikis, plus the `library-docs` skill |

OAuth plugins use each provider's dynamic client registration. Figma and Canva may only accept approved OAuth clients; if connecting fails with a registration error, the provider has not enabled Alan yet.

## Layout

```
.cursor-plugin/marketplace.json          # the list Alan syncs
plugins/<name>/.cursor-plugin/plugin.json
plugins/<name>/mcp.json                  # remote MCP servers
plugins/<name>/skills/<skill>/SKILL.md   # optional skills
```

This is the Cursor plugin format, which Alan reads alongside Claude Code plugins and Agent Plugins 1.0.

## Adding a plugin

See [CONTRIBUTING.md](CONTRIBUTING.md). Run `node scripts/validate.mjs` before opening a pull request; CI runs the same check.

## Using a different marketplace in Alan

Alan reads `PLUGIN_DEFAULT_MARKETPLACES` (`owner/repo@ref`, comma-separated). Organization admins can also add their own GitHub marketplaces from the Plugins page.
