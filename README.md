# Alan Plugins

The curated plugin marketplace for [Alan](https://tryalan.ai). Alan syncs this repository, pinned to a commit, and lists every plugin here under **Settings → Plugins → Marketplace**.

A plugin bundles remote MCP servers and skills. Installing one makes its skills available to your agents and routes its MCP tools through Alan's gateway, so credentials stay in Alan and every coding agent (Claude Code, Codex, OpenCode, Cursor and others) gets the same tools, in the cloud and on your machine.

## Plugins

208 plugins in 21 categories, focused on engineering, product and company tools.

### Code and CI

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Bitrise | OAuth | Inspect Bitrise mobile CI apps, builds, workflows and artifacts |
| Buildkite | OAuth | Inspect Buildkite pipelines, builds, jobs and logs |
| Depot | OAuth | Inspect Depot container builds, caches and CI runners |
| Expo | OAuth | Manage Expo projects, EAS builds, updates and submissions |
| GitHub | Personal access token | Work with GitHub repositories, issues and pull requests using a personal access token |
| GitLab | OAuth | Search GitLab projects, issues, merge requests and pipelines |
| Namespace | OAuth | Inspect Namespace CI runners, builds and development environments |

### Cloud and infrastructure

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Cloudflare | OAuth | Manage Cloudflare Workers, KV, R2 and D1, read Workers logs and inspect builds |
| DigitalOcean | OAuth | Manage DigitalOcean apps, droplets, databases and other resources |
| Heroku | OAuth | Manage Heroku apps, dynos, add-ons and logs |
| Namecheap | OAuth | Search, register and manage Namecheap domains and DNS |
| Netlify | OAuth | Create and deploy Netlify sites and inspect deploys and settings |
| Porkbun | OAuth | Search, register and manage Porkbun domains and DNS |
| Porter | OAuth | Manage Porter applications, deployments and clusters |
| Pulumi | OAuth | Search Pulumi stacks and cloud resources and run Pulumi Copilot queries |
| Qovery | OAuth | Manage Qovery environments, services and deployments |
| QuickNode | OAuth | Manage QuickNode blockchain endpoints, usage and add-ons |
| Railway | OAuth | Manage Railway projects, services, deployments and logs |
| Val Town | OAuth | Create and run Val Town vals, scripts and HTTP endpoints |
| Vercel | OAuth | Inspect Vercel projects, deployments and build logs |
| Vultr | OAuth | Manage Vultr instances, Kubernetes clusters, databases and DNS |

### Databases and backend

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Algolia | OAuth | Manage Algolia indices, records and search settings, and run queries |
| Appwrite | OAuth | Manage Appwrite projects, databases, storage, functions and users |
| Atlan | OAuth | Search the Atlan data catalog for assets, lineage, owners and glossary terms |
| Clerk | OAuth | Manage Clerk users, organizations, sessions and auth settings |
| ClickHouse Cloud | OAuth | Query ClickHouse Cloud services and inspect schemas |
| Descope | OAuth | Manage Descope users, tenants, flows and auth configuration |
| MongoDB Atlas | OAuth | Explore MongoDB Atlas clusters, collections and schemas and run queries |
| MotherDuck | OAuth | Query MotherDuck and DuckDB databases with SQL |
| Neon | OAuth | Manage Neon Postgres projects, branches and queries |
| PlanetScale | OAuth | Manage PlanetScale databases, branches and deploy requests, and run queries |
| Prisma | OAuth | Manage Prisma Postgres databases, migrations and backups |
| Sanity | OAuth | Query and update Sanity content, schemas and datasets |
| Stytch | OAuth | Manage your Stytch Project |
| Supabase | OAuth | Manage Supabase projects, run SQL and read logs |
| Turso | OAuth | Manage Turso databases and groups and run SQL queries |
| Upstash | OAuth | Manage Upstash Redis, QStash and Vector databases |
| WorkOS | OAuth | Manage WorkOS organizations, SSO connections, directories and users |

### Observability and incidents

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Axiom | OAuth | Query Axiom datasets and logs with APL |
| Better Stack | OAuth | Search Better Stack logs, uptime monitors and incidents |
| Cronitor | OAuth | Inspect Cronitor cron job, heartbeat and uptime monitors and their incidents |
| Datadog | OAuth | Query Datadog logs, metrics, traces, monitors and incidents |
| Grafana | OAuth | Search Grafana dashboards, query data sources and review alerts |
| Honeycomb | OAuth | Query Honeycomb traces, events and SLOs to debug production behaviour |
| incident.io | OAuth | Read and update incident.io incidents, alerts and follow-ups |
| LogRocket | OAuth | Search LogRocket sessions, errors and user-experience issues |
| Monte Carlo | OAuth | Data & AI observability |
| Rootly | OAuth | Investigate Rootly incidents, alerts and on-call schedules |
| Sentry | OAuth | Investigate Sentry issues, events and releases |
| Sumo Logic | OAuth | Search Sumo Logic logs, metrics and security signals |

### Testing and QA

| Plugin | Connects with | What it does |
| --- | --- | --- |
| BugHerd | OAuth | Read and update BugHerd website feedback and bug tasks |
| Chromatic | OAuth | Review Chromatic visual test builds, changes and Storybook components |
| Cypress Cloud | OAuth | Review Cypress Cloud test runs, failures, flaky tests and recordings |
| Jam | OAuth | Read Jam bug reports with console logs, network requests and repro steps |
| mabl | OAuth | Run and review mabl automated tests, plans and results |
| Meticulous | OAuth | Review Meticulous visual regression test runs and replays |
| Momentic | OAuth | Create and run Momentic AI end-to-end tests and review results |
| Postman | OAuth | Work with Postman workspaces, collections, environments and API specs |
| Sauce Labs | OAuth | Review Sauce Labs test jobs, devices, builds and results |
| Userback | OAuth | Read Userback user feedback, bug reports and session replays |

### Security and compliance

| Plugin | Connects with | What it does |
| --- | --- | --- |
| DeepSource | OAuth | Review DeepSource code-quality and security issues across repositories |
| Drata | OAuth | Review Drata compliance controls, tests, evidence and policies |
| Ketryx | OAuth | Search and explore regulated software lifecycle data |
| Socket | OAuth | Check open-source dependencies for supply-chain risk, vulnerabilities and licences |
| Strix | OAuth | Run Strix AI security tests and review vulnerability findings |
| Vanta | OAuth | Review Vanta compliance tests, controls, vulnerabilities and evidence |

### Analytics and experiments

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Amplitude | OAuth | Query Amplitude charts, events, cohorts and experiments |
| Confidence | OAuth | Manage Confidence feature flags and experiments |
| Contentsquare | OAuth | Experience analytics platform for digital businesses |
| Flagsmith | OAuth | Create and update Flagsmith feature flags, segments and environments |
| FullStory | OAuth | Search FullStory sessions, user journeys and frustration signals |
| GrowthBook | OAuth | Manage GrowthBook feature flags and experiments and read results |
| Hex | OAuth | Query data and work with Hex projects, notebooks and apps |
| LaunchDarkly | OAuth | Create, inspect and update LaunchDarkly feature flags and targeting |
| Mixpanel | OAuth | Query Mixpanel events, funnels and reports |
| Pendo | OAuth | Query Pendo product usage, guides and feedback |
| PostHog | OAuth | Query PostHog insights, feature flags and experiments |
| Statsig | OAuth | Manage Statsig gates, experiments and dynamic configs |
| ThoughtSpot Spotter | OAuth | Your AI data analyst, from question to trusted insights |

### Developer APIs

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Knock | OAuth | Manage Knock notification workflows, templates and messages |
| Loops | OAuth | Manage Loops contacts, transactional email and campaigns |
| Mapbox | OAuth | Use Mapbox geocoding, directions, maps and location search |
| Mux | OAuth | Manage Mux video assets, live streams and playback data |
| Novu | OAuth | Manage Novu notification workflows, subscribers and messages |
| Resend | OAuth | Send transactional email and manage Resend domains, templates and contacts |
| Swagger | OAuth | Design, document and govern APIs with SmartBear Swagger |
| Twilio | None | Build powerful communications and customer engagement |

### AI and memory

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Baseten | OAuth | Deploy and manage Baseten model endpoints and inspect their status |
| Braintrust | OAuth | Query Braintrust experiments, datasets, logs and evals for LLM apps |
| Dust | OAuth | Run Dust agents and search your company's connected knowledge |
| fal | OAuth | Discover and run fal generative models for images, video and audio |
| mem0 | OAuth | Store and retrieve persistent agent memories with mem0 |
| Replicate | OAuth | Search and run Replicate models and inspect predictions |
| Supermemory | OAuth | Save and search long-term memories and documents across your tools with Supermemory |
| Zep | OAuth | Search Zep knowledge graphs and long-term memory for users and agents |

### Docs and research

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Apify | OAuth | Run Apify Actors to scrape websites and collect web data |
| AWS Knowledge | None | Search AWS documentation, API references and architecture guidance |
| Cloudflare Docs | None | Search Cloudflare's developer documentation |
| Daloopa | OAuth | Financial fundamental data and KPIs with hyperlinks |
| Docs Research | None | Up-to-date library documentation and repository wikis, with a skill for choosing between them |
| Exa | OAuth | Search the web and code with Exa for current documentation and examples |
| GitBook | OAuth | Search and update GitBook spaces, pages and documentation |
| GitMCP | None | Read documentation and code from any public GitHub repository |
| GraphOS MCP Tools | None | Search Apollo docs, specs, and best practices |
| Hugging Face | None | Search models, datasets, Spaces and papers on Hugging Face |
| Microsoft Learn | None | Search Microsoft Learn documentation and code samples for Azure, .NET and Microsoft 365 |
| Mintlify | OAuth | Search and update Mintlify documentation sites |
| Perplexity | OAuth | Search the web with Perplexity for cited, current answers |
| pg-aiguide | None | Search pg and Tiger docs, learn database skills |
| Qdrant Docs | None | Search Qdrant vector database documentation |
| Redis Docs | None | Search Redis documentation and get answers about Redis commands and patterns |
| S&P Global | OAuth | Query a range of S&P Global datasets |
| Tavily | OAuth | Search and extract web content with Tavily for current information |
| Wolfram | None | Inject precise, real-time computation and knowledge |
| You.com | OAuth | Search the web and news with You.com for current, cited results |

### Design

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Builder.io | OAuth | Read and update Builder.io content, pages and design components |
| Eraser | OAuth | Generate, manage, and update Eraser diagrams and files |
| Excalidraw | None | Create Excalidraw diagrams and sketches |
| Framer | OAuth | Read and edit Framer projects, pages and CMS content |
| Lucid | OAuth | Search and create Lucidchart and Lucidspark diagrams and documents |
| Magic Patterns | OAuth | Discuss and iterate on Magic Patterns designs |
| Miro | OAuth | Read and add content on Miro boards |
| Mobbin | OAuth | Search Mobbin's library of real app screens and flows for UI reference |
| Spline | OAuth | Create and edit Spline 3D scenes and assets |
| tldraw | None | Let Claude sketch, draw, and diagram with you |
| UXPin | OAuth | Read UXPin designs, prototypes and design-system components |
| Webflow | OAuth | Manage Webflow sites, pages, CMS collections and content |
| Whimsical | OAuth | Create and read Whimsical flowcharts, wireframes, mind maps and docs |
| Wix | OAuth | Manage Wix sites, pages, content and business apps |
| WordPress.com | OAuth | Secure AI access to manage your WordPress.com sites |

### Project and product management

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Atlassian | OAuth | Work with Jira issues and Confluence pages |
| Basecamp | OAuth | Read and update Basecamp projects, to-dos, messages and schedules |
| ClickUp | OAuth | Find, create and update ClickUp tasks, lists and docs |
| Enterpret | OAuth | Get answers from unified feedback of your customers |
| Featurebase | OAuth | Read and update Featurebase feedback, roadmap and changelog posts |
| Linear | OAuth | Find, create and update Linear issues, projects and comments |
| monday.com | OAuth | Read and update monday.com boards, items and updates |
| Productboard | OAuth | Read Productboard features, insights and roadmaps |
| Productive | OAuth | Manage Productive projects, tasks, time and budgets |
| Shortcut | OAuth | Find, create and update Shortcut stories, epics and iterations |
| Todoist | OAuth | Find, create, update and complete Todoist tasks and manage projects |
| Trello | OAuth | Find, create and move Trello cards, lists and boards |

### Knowledge and notes

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Capacities | OAuth | Search and create objects and notes in Capacities |
| Coda | OAuth | Read and update Coda docs, pages and tables |
| Craft | OAuth | Read and update Craft documents and spaces |
| Evernote | OAuth | Search and create Evernote notes and notebooks |
| Guru | OAuth | Search and update team knowledge in Guru cards and collections |
| Heptabase | OAuth | Search Heptabase cards, whiteboards and journals |
| Mem | OAuth | Search and create notes in Mem |
| Notion | OAuth | Search, read and edit Notion pages and databases |
| Nuclino | OAuth | Search and update Nuclino workspaces, items and collections |
| Readwise | OAuth | Search Readwise highlights and Reader documents |
| Slab | OAuth | Search and update Slab posts and topics |
| Slite | OAuth | Search and update Slite notes and knowledge base |
| Voicenotes | OAuth | Search and create Voicenotes recordings, transcripts and notes |

### Meetings

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Circleback | OAuth | Search Circleback meeting notes, decisions and action items |
| Fathom | OAuth | Search Fathom meeting recordings, summaries and action items |
| Fellow.ai | OAuth | Chat with your meetings to uncover actionable insights |
| Fireflies | OAuth | Search Fireflies meeting transcripts, summaries and action items |
| Grain | OAuth | Put your meetings to work |
| Granola | OAuth | Search Granola meeting notes and transcripts for decisions and requirements |
| Krisp | OAuth | Search Krisp meeting notes, transcripts and action items |
| Otter | OAuth | Search Otter meeting transcripts and summaries |
| Plaud | OAuth | Search Plaud recordings, transcripts and summaries |
| Read AI | OAuth | Bring your meetings into Claude |
| Supernormal | OAuth | Search Supernormal meeting notes, summaries and action items |
| tl;dv | OAuth | Search tl;dv meeting recordings, notes and highlights |

### Productivity

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Airtable | OAuth | Read and update Airtable bases, tables and records |
| Calendly | OAuth | Check availability and manage Calendly event types and bookings |
| Jotform | OAuth | Create Jotform forms and read their submissions |
| Typeform | OAuth | Create Typeform forms and read their responses |

### Automation

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Activepieces | OAuth | Run Activepieces flows and actions across connected apps |
| CData Connect AI | OAuth | Managed MCP platform for 350 sources |
| Jentic | OAuth | One connection to access all your tools securely |
| Make | OAuth | Run and manage Make scenarios across connected apps |
| Zapier | Your Zapier account | Run actions in thousands of apps through your own Zapier account |

### Customer support

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Plain | OAuth | Search and update Plain support threads, customers and labels |
| Pylon | OAuth | Search and update Pylon support issues, accounts and knowledge base |
| Unthread | OAuth | Manage and automate your support tickets |
| Zendesk | OAuth | Search and update Zendesk tickets to turn customer issues into engineering work |

### Sales and CRM

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Amplemarket | OAuth | Find leads and manage Amplemarket sequences and accounts |
| Apollo | OAuth | Search Apollo contacts and companies and manage sequences |
| Attio | OAuth | Search and update Attio companies, people, deals and notes |
| Clay | OAuth | Enrich companies and people and work with Clay tables |
| Outreach | OAuth | Read and manage Outreach prospects, sequences and activity |

### Marketing

| Plugin | Connects with | What it does |
| --- | --- | --- |
| beehiiv | OAuth | Manage beehiiv newsletter posts, subscribers and analytics |
| Customer.io | OAuth | Read Customer.io campaigns, segments and customer activity |
| Klaviyo | OAuth | Read Klaviyo campaigns, flows, segments and performance |
| MailerLite | OAuth | Manage MailerLite subscribers, groups and campaigns |
| Meltwater | OAuth | Search Meltwater media coverage, mentions and social listening |
| Peec AI | OAuth | Analyze your brand's visibility across LLMs |
| Profound | OAuth | Track how your brand appears in AI search answers with Profound |
| Similarweb | OAuth | Research website traffic, rankings and competitors with Similarweb |
| Supermetrics Marketing Analytics | OAuth | Google Ads, Facebook Ads & 200+ marketing platforms |
| Windsor.ai | OAuth | Connect Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads + 320 more |

### Payments and finance

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Brex | OAuth | Review Brex expenses, cards, budgets and transactions |
| GoCardless | None | Build GoCardless payment API integrations |
| Mercury | OAuth | Search, analyze and understand your finances on Mercury |
| Paddle | OAuth | Manage Paddle products, prices, customers, subscriptions and transactions |
| PayPal | OAuth | Access PayPal payments platform |
| Ramp | OAuth | Search, access, and analyze your Ramp financial data |
| Razorpay | OAuth | Turn Claude into your Razorpay Dashboard Assistant |
| Stripe | OAuth | Look up Stripe customers, payments and subscriptions |

### HR and recruiting

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Ashby | OAuth | Search Ashby jobs, candidates and interview pipelines |
| Greenhouse | OAuth | Search Greenhouse jobs, candidates, applications and interviews |
| Gusto | OAuth | Read Gusto employees, payroll and time-off information |
| Juicebox | OAuth | Search for candidates and manage talent pipelines with Juicebox |
| Workable | OAuth | Search Workable jobs, candidates and hiring stages |

OAuth plugins use provider discovery and either dynamic registration or an administrator-registered client. Every OAuth plugin listed here was checked with `scripts/probe-auth.mjs` to accept Alan's production callback. Vendors that still need an Alan OAuth app or partner approval, including Google Workspace, Canva and Figma, are tracked in [docs/vendor-access.md](docs/vendor-access.md) and return to the marketplace once they work.

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
