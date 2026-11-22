# Elasticsearch Learning Repo

Hands-on Elasticsearch course using:
- Elasticsearch 8.17.1
- Kibana 8.17.1
- Node.js 22+
- TypeScript
- `pnpm`
- `tsx` for development/watch mode
- `envalid` for typed environment validation
- GitHub Copilot repository instructions and `AGENTS.md`

## Local ports

| Service | URL |
| --- | --- |
| Node API | http://localhost:3000 |
| Elasticsearch | http://localhost:8200 |
| Kibana | http://localhost:4009 |

Kibana Dev Tools:
`http://localhost:4009/app/dev_tools#/console`

## Start

```bash
cp .env.example .env
pnpm install
pnpm infra:up
pnpm dev
```

Verify:

```bash
curl http://localhost:3000/health
curl http://localhost:3000/health/es
curl http://localhost:8200
```

## Useful scripts

```bash
pnpm dev
pnpm start
pnpm typecheck
pnpm infra:up
pnpm infra:down
pnpm infra:restart
pnpm infra:logs
```

`pnpm dev` uses `tsx watch`; this repo intentionally does not use nodemon.

Environment variables are loaded from `.env` with `dotenv` and parsed/validated centrally in `src/config/env.ts` with `envalid`.

## Learning structure

```text
es-learning/
├── src/
│   ├── config/
│   │   ├── elasticsearch.ts
│   │   └── env.ts
│   └── index.ts
├── kibana/
│   └── steps-01-07.kibana
├── summaries/
│   ├── step-01.md
│   ├── ...
│   └── step-07.md
├── .github/
│   ├── AI-ORIENTATION.md
│   ├── copilot-instructions.md
│   ├── instructions/
│   │   └── course-files.instructions.md
│   └── skills/
│       └── elasticsearch-learning/
│           └── SKILL.md
├── AGENTS.md
└── docker-compose.yml
```

AI-specific guidance (Copilot instructions, path-specific instructions, skills, and AI orientation) lives under `.github/`. Keep the repository `AGENTS.md` at the root; frontend and backend projects may have their own `AGENTS.md` files at their project roots.

### Kibana rule
Steps 1-7 are consolidated in `kibana/steps-01-07.kibana` because they establish the current learning database state.

Run the full file top-to-bottom to rebuild the course data through Step 7. To reset directly to the current Step 7 baseline, run the complete Step 5 section; it deletes and recreates only the `movies` index with its explicit mapping and learning documents.

Starting with Step 8, every new lesson gets a separate Kibana file:

```text
kibana/step-08.kibana
kibana/step-09.kibana
...
```

### Summary rule
Every step always gets its own summary:

```text
summaries/step-01.md
summaries/step-02.md
...
```

## Current learning position
Completed through **Step 7 — `match` vs `term`**.

Next: **Step 8 — `bool`: `must`, `should`, `filter`, `must_not`**.

## AI / Copilot
Read `AGENTS.md` for the repository operating contract and `.github/AI-ORIENTATION.md` for how Copilot instructions, path-specific instructions, and the learning skill fit together.
