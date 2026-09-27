---
name: library-docs
description: Look up current documentation for a library, framework or GitHub repository before writing code against it. Use when an API may have changed since training, when a version-specific answer matters, or when you need to understand an unfamiliar repository's architecture.
---

# Library docs

Two MCP servers come with this skill. Hosts prefix their tool names (in Alan: `docs-research_context7__…` and `docs-research_deepwiki__…`); the names below are the upstream ones.

## Choose the source

| Question | Use |
| --- | --- |
| How do I call this package's API, which options exist, what changed in version N | Context7 |
| How is this repository structured, where is X implemented, why does it work this way | DeepWiki |

Prefer Context7 for anything you are about to write code against. Prefer DeepWiki for open-source repositories you need to understand rather than call.

## Context7

1. `resolve-library-id` with `libraryName` (for example `next.js`) and the user's `query`. Pick the result whose name and description match; prefer the version the project uses when several are listed.
2. `query-docs` with that `libraryId` and a specific question ("middleware matcher syntax", not "docs").

Skip step 1 only when the user already gave an ID in `/org/project` form.

## DeepWiki

Repositories are named `owner/repo`.

1. `read_wiki_structure` to see which pages exist.
2. `read_wiki_contents` for the relevant pages, or `ask_wiki_question` for a direct question.

## Using the answer

- Quote the API shape you are relying on, and say which source and version it came from.
- If the docs disagree with the code in this workspace, trust the workspace's pinned version and say so.
- If neither source covers it, say that instead of guessing.
