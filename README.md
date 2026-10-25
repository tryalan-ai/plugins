# Alan Plugins

The curated plugin marketplace for [Alan](https://tryalan.ai). Alan syncs this repository, pinned to a commit, and lists every plugin here under **Settings → Plugins → Marketplace**.

A plugin bundles remote MCP servers and skills. Installing one makes its skills available to your agents and routes its MCP tools through Alan's gateway, so credentials stay in Alan and every coding agent (Claude Code, Codex, OpenCode, Cursor and others) gets the same tools, in the cloud and on your machine.

## Plugins

251 plugins in 23 categories.

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
| Railway | OAuth | Manage Railway projects, services, deployments and logs |
| Vercel | OAuth | Inspect Vercel projects, deployments and build logs |
| Vultr | OAuth | Manage Vultr instances, Kubernetes clusters, databases and DNS |

### Databases and backend

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Algolia | OAuth | Manage Algolia indices, records and search settings, and run queries |
| Appwrite | OAuth | Manage Appwrite projects, databases, storage, functions and users |
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

### Analytics and experiments

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Amplitude | OAuth | Query Amplitude charts, events, cohorts and experiments |
| Contentsquare | OAuth | Experience analytics platform for digital businesses |
| Flagsmith | OAuth | Create and update Flagsmith feature flags, segments and environments |
| GrowthBook | OAuth | Manage GrowthBook feature flags and experiments and read results |
| LaunchDarkly | OAuth | Create, inspect and update LaunchDarkly feature flags and targeting |
| Mixpanel | OAuth | Query Mixpanel events, funnels and reports |
| PostHog | OAuth | Query PostHog insights, feature flags and experiments |
| Statsig | OAuth | Manage Statsig gates, experiments and dynamic configs |
| ThoughtSpot Spotter | OAuth | Your AI data analyst, from question to trusted insights |

### Developer APIs

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Knock | OAuth | Manage Knock notification workflows, templates and messages |
| Loops | OAuth | Manage Loops contacts, transactional email and campaigns |
| Mux | OAuth | Manage Mux video assets, live streams and playback data |
| Novu | OAuth | Manage Novu notification workflows, subscribers and messages |
| Resend | OAuth | Send transactional email and manage Resend domains, templates and contacts |
| Twilio | None | Build powerful communications and customer engagement |

### AI and memory

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Baseten | OAuth | Deploy and manage Baseten model endpoints and inspect their status |
| Braintrust | OAuth | Query Braintrust experiments, datasets, logs and evals for LLM apps |
| Dust | OAuth | Run Dust agents and search your company's connected knowledge |
| fal | OAuth | Discover and run fal generative models for images, video and audio |
| HeyGen | OAuth | Create and manage HeyGen AI avatar videos |
| mem0 | OAuth | Store and retrieve persistent agent memories with mem0 |
| Replicate | OAuth | Search and run Replicate models and inspect predictions |
| Runway | OAuth | Generate images and video with Runway models |
| Supermemory | OAuth | Save and search long-term memories and documents across your tools with Supermemory |
| Synthesia | OAuth | Create and manage Synthesia AI videos and templates |
| Zep | OAuth | Search Zep knowledge graphs and long-term memory for users and agents |

### Docs and research

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Aiera | OAuth | Live events, filings, company publications, and more |
| Apify | OAuth | Run Apify Actors to scrape websites and collect web data |
| AWS Knowledge | None | Search AWS documentation, API references and architecture guidance |
| CB Insights | OAuth | Predictive intelligence on private companies |
| Cloudflare Docs | None | Search Cloudflare's developer documentation |
| Consensus | OAuth | Explore scientific research |
| Daloopa | OAuth | Financial fundamental data and KPIs with hyperlinks |
| Docs Research | None | Up-to-date library documentation and repository wikis, with a skill for choosing between them |
| Exa | OAuth | Search the web and code with Exa for current documentation and examples |
| FactSet AI-Ready Data | OAuth | Access institutional-quality financial data and analytics |
| GitBook | OAuth | Search and update GitBook spaces, pages and documentation |
| GitMCP | None | Read documentation and code from any public GitHub repository |
| GraphOS MCP Tools | None | Search Apollo docs, specs, and best practices |
| Hugging Face | None | Search models, datasets, Spaces and papers on Hugging Face |
| IBISWorld | OAuth | Financials, risk data and analysis on 50,000 industries |
| Microsoft Learn | None | Search Microsoft Learn documentation and code samples for Azure, .NET and Microsoft 365 |
| Mintlify | OAuth | Search and update Mintlify documentation sites |
| Morningstar | OAuth | Up-to-date investment and market insights |
| Perplexity | OAuth | Search the web with Perplexity for cited, current answers |
| pg-aiguide | None | Search pg and Tiger docs, learn database skills |
| Qdrant Docs | None | Search Qdrant vector database documentation |
| Redis Docs | None | Search Redis documentation and get answers about Redis commands and patterns |
| S&P Global | OAuth | Query a range of S&P Global datasets |
| Scholar Gateway | OAuth | Enhance responses with scholarly research and citations |
| Scite | OAuth | Evidence-based answers grounded in research |
| Tavily | OAuth | Search and extract web content with Tavily for current information |
| Wolfram | None | Inject precise, real-time computation and knowledge |

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
| Egnyte | OAuth | Securely access and analyze Egnyte content |
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
| Akiflow | OAuth | Manage Akiflow tasks, time blocks and calendar |
| Cal.com | OAuth | Check availability and manage Cal.com bookings and event types |
| Calendly | OAuth | Check availability and manage Calendly event types and bookings |
| Everhour | OAuth | Track and report time in Everhour across projects and tasks |
| Harvest | OAuth | Track time and review projects, invoices and reports in Harvest |
| Jotform | OAuth | Create Jotform forms and read their submissions |
| LILT | OAuth | High-quality translation with human verification |
| Lumin | OAuth | Manage documents, send signature requests, and convert Markdown to PDF |
| PandaDoc | OAuth | Create and track PandaDoc documents, templates and contracts |
| Process Street | OAuth | Explore and update your Process Street data |
| Send | OAuth | Create shareable documents, one-pagers, and decks |
| Superhuman Mail | OAuth | The most productive email app ever, for Gmail & Outlook |
| Tally | OAuth | Create Tally forms and read their submissions |
| Typeform | OAuth | Create Typeform forms and read their responses |
| Udemy Business | OAuth | Search and explore skill-building resources |

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
| Gainsight (Staircase AI) | OAuth | Power AI Workflows with Customer Context |
| Plain | OAuth | Search and update Plain support threads, customers and labels |
| Pylon | OAuth | Search and update Pylon support issues, accounts and knowledge base |
| Unthread | OAuth | Manage and automate your support tickets |
| Zendesk | OAuth | Search and update Zendesk tickets to turn customer issues into engineering work |

### Sales and CRM

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Affinity | OAuth | Search Affinity relationships, organizations, deals and notes |
| Amplemarket | OAuth | Find leads and manage Amplemarket sequences and accounts |
| Apollo | OAuth | Search Apollo contacts and companies and manage sequences |
| Attio | OAuth | Search and update Attio companies, people, deals and notes |
| Clarify | OAuth | Query your CRM. Create records. Ask anything |
| Clay | OAuth | Enrich companies and people and work with Clay tables |
| Close | OAuth | Search and update Close leads, contacts, opportunities and activities |
| Common Room | OAuth | Your GTM Copilot |
| Crossbeam | OAuth | Explore partner data and ecosystem insights in Claude |
| Day AI | OAuth | Know everything about your prospects & customers with CRMx |
| folk | OAuth | Search and update folk contacts, companies and pipelines |
| Harmonic | OAuth | Discover, research, and enrich companies and people |
| lemlist | OAuth | Manage lemlist campaigns, leads and outreach sequences |
| Outreach | OAuth | Read and manage Outreach prospects, sequences and activity |
| Smartlead | OAuth | Manage Smartlead cold email campaigns, leads and analytics |
| Sybill | OAuth | Ask AI about your sales calls, deals & pipeline |
| Twenty | OAuth | Search and update Twenty CRM people, companies and opportunities |

### Marketing

| Plugin | Connects with | What it does |
| --- | --- | --- |
| AirOps | OAuth | Craft content that wins AI search |
| beehiiv | OAuth | Manage beehiiv newsletter posts, subscribers and analytics |
| Bitly | OAuth | Shorten links, generate QR Codes, and track performance |
| Customer.io | OAuth | Read Customer.io campaigns, segments and customer activity |
| Intuit Mailchimp | OAuth | Create marketing campaigns |
| Klaviyo | OAuth | Read Klaviyo campaigns, flows, segments and performance |
| MailerLite | OAuth | Manage MailerLite subscribers, groups and campaigns |
| Meltwater | OAuth | Search Meltwater media coverage, mentions and social listening |
| Motion Creative Analytics | OAuth | Analyze your Meta ad creative & competitor ad libraries |
| Peec AI | OAuth | Analyze your brand's visibility across LLMs |
| Profound | OAuth | Track how your brand appears in AI search answers with Profound |
| Similarweb | OAuth | Research website traffic, rankings and competitors with Similarweb |
| Supermetrics Marketing Analytics | OAuth | Google Ads, Facebook Ads & 200+ marketing platforms |
| Windsor.ai | OAuth | Connect Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads + 320 more |

### Payments and finance

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Brex | OAuth | Review Brex expenses, cards, budgets and transactions |
| Carta | OAuth | The connected ERP for private capital |
| Digits | OAuth | Track and analyze your finances with Digits |
| GoCardless | None | Build GoCardless payment API integrations |
| Mercury | OAuth | Search, analyze and understand your finances on Mercury |
| Paddle | OAuth | Manage Paddle products, prices, customers, subscriptions and transactions |
| PayPal | OAuth | Access PayPal payments platform |
| Ramp | OAuth | Search, access, and analyze your Ramp financial data |
| Razorpay | OAuth | Turn Claude into your Razorpay Dashboard Assistant |
| Rillet | OAuth | Query your live GL and financials in plain English |
| Stripe | OAuth | Look up Stripe customers, payments and subscriptions |

### HR and recruiting

| Plugin | Connects with | What it does |
| --- | --- | --- |
| Ashby | OAuth | Search Ashby jobs, candidates and interview pipelines |
| Greenhouse | OAuth | Search Greenhouse jobs, candidates, applications and interviews |
| Gusto | OAuth | Read Gusto employees, payroll and time-off information |
| Juicebox | OAuth | Search for candidates and manage talent pipelines with Juicebox |
| Metaview | OAuth | The AI platform for recruiting |
| Shapes | OAuth | Analyse your live people data, right in Claude |
| Workable | OAuth | Search Workable jobs, candidates and hiring stages |

### Legal

| Plugin | Connects with | What it does |
| --- | --- | --- |
| CourtListener | OAuth | Legal research across millions of court records |
| Definely | OAuth | Structured contract review tools for legal teams |
| Descrybe Legal Engine | OAuth | Ground your work in clean, structured U.S. primary law |
| iManage Work | OAuth | Governed knowledge. AI ready |
| Legal Data Hunter | OAuth | Search 23M+ legal docs in 160+ jurisdictions |
| Midpage Legal Research | OAuth | Conduct legal research and create work product |

### Life sciences

| Plugin | Connects with | What it does |
| --- | --- | --- |
| AdisInsight | OAuth | Pharmaceutical drug & clinical trial intelligence |
| BioRender | OAuth | Search for and use scientific templates and icons |
| Medidata | OAuth | Clinical trial software and site ranking tools |
| Open Targets | None | Drug target discovery and prioritisation platform |
| Synapse.org | OAuth | Search and metadata tools for Synapse scientific data |

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
