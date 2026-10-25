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
| Gmail (Preview) | Google OAuth; administrator setup | Messages, labels and drafts |
| Google Calendar (Preview) | Google OAuth; administrator setup | Calendars, availability and events |
| Google Drive (Preview) | Google OAuth; administrator setup | File search, metadata, content and creation |
| Todoist | OAuth | Tasks, projects and completion |
| Braintrust | OAuth | Query Braintrust experiments, datasets, logs and evals for LLM apps |
| Replicate | OAuth | Search and run Replicate models and inspect predictions |
| Amplitude | OAuth | Query Amplitude charts, events, cohorts and experiments |
| Mixpanel | OAuth | Query Mixpanel events, funnels and reports |
| Zapier | OAuth (your Zapier account) | Run actions in thousands of apps through your own Zapier account |
| Attio | OAuth | Search and update Attio companies, people, deals and notes |
| ClickHouse Cloud | OAuth | Query ClickHouse Cloud services and inspect schemas |
| MongoDB Atlas | OAuth | Explore MongoDB Atlas clusters, collections and schemas and run queries |
| MotherDuck | OAuth | Query MotherDuck and DuckDB databases with SQL |
| PlanetScale | OAuth | Manage PlanetScale databases, branches and deploy requests, and run queries |
| Prisma | OAuth | Manage Prisma Postgres databases, migrations and backups |
| Cloudflare | OAuth | Manage Cloudflare Workers, KV, R2 and D1, read Workers logs and inspect builds |
| Heroku | OAuth | Manage Heroku apps, dynos, add-ons and logs |
| Netlify | OAuth | Create and deploy Netlify sites and inspect deploys and settings |
| Railway | OAuth | Manage Railway projects, services, deployments and logs |
| Excalidraw | None | Create Excalidraw diagrams and sketches |
| Framer | OAuth | Read and edit Framer projects, pages and CMS content |
| Lucid | OAuth | Search and create Lucidchart and Lucidspark diagrams and documents |
| Webflow | OAuth | Manage Webflow sites, pages, CMS collections and content |
| Buildkite | OAuth | Inspect Buildkite pipelines, builds, jobs and logs |
| GitLab | OAuth | Search GitLab projects, issues, merge requests and pipelines |
| Resend | OAuth | Send transactional email and manage Resend domains, templates and contacts |
| AWS Knowledge | None | Search AWS documentation, API references and architecture guidance |
| GitMCP | None | Read documentation and code from any public GitHub repository |
| Microsoft Learn | None | Search Microsoft Learn documentation and code samples for Azure, .NET and Microsoft 365 |
| LaunchDarkly | OAuth | Create, inspect and update LaunchDarkly feature flags and targeting |
| Statsig | OAuth | Manage Statsig gates, experiments and dynamic configs |
| Rootly | OAuth | Investigate Rootly incidents, alerts and on-call schedules |
| incident.io | OAuth | Read and update incident.io incidents, alerts and follow-ups |
| Pulumi | OAuth | Search Pulumi stacks and cloud resources and run Pulumi Copilot queries |
| Guru | OAuth | Search and update team knowledge in Guru cards and collections |
| Circleback | OAuth | Search Circleback meeting notes, decisions and action items |
| Fathom | OAuth | Search Fathom meeting recordings, summaries and action items |
| Fireflies | OAuth | Search Fireflies meeting transcripts, summaries and action items |
| Granola | OAuth | Search Granola meeting notes and transcripts for decisions and requirements |
| Otter | OAuth | Search Otter meeting transcripts and summaries |
| Axiom | OAuth | Query Axiom datasets and logs with APL |
| Better Stack | OAuth | Search Better Stack logs, uptime monitors and incidents |
| Datadog | OAuth | Query Datadog logs, metrics, traces, monitors and incidents |
| Grafana | OAuth | Search Grafana dashboards, query data sources and review alerts |
| Honeycomb | OAuth | Query Honeycomb traces, events and SLOs to debug production behaviour |
| Productboard | OAuth | Read Productboard features, insights and roadmaps |
| Airtable | OAuth | Read and update Airtable bases, tables and records |
| Coda | OAuth | Read and update Coda docs, pages and tables |
| ClickUp | OAuth | Find, create and update ClickUp tasks, lists and docs |
| Shortcut | OAuth | Find, create and update Shortcut stories, epics and iterations |
| Trello | OAuth | Find, create and move Trello cards, lists and boards |
| monday.com | OAuth | Read and update monday.com boards, items and updates |
| Exa | OAuth | Search the web and code with Exa for current documentation and examples |
| Socket | OAuth | Check open-source dependencies for supply-chain risk, vulnerabilities and licences |
| Zendesk | OAuth | Search and update Zendesk tickets to turn customer issues into engineering work |
| Postman | OAuth | Work with Postman workspaces, collections, environments and API specs |

OAuth plugins use provider discovery and either dynamic registration or an administrator-registered client. Every OAuth plugin listed here was checked to accept Alan's production callback; vendors that still need an Alan OAuth app or partner approval are tracked in [docs/vendor-access.md](docs/vendor-access.md). The Google plugins require [Google Workspace preview access and an Alan OAuth client](docs/google-workspace.md). Figma and Canva may only accept approved OAuth clients; if connecting fails with a registration error, the provider has not enabled Alan yet.

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
