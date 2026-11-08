# AGENTS.md — Repository Operating Instructions

This repository is an incremental Elasticsearch learning project. AI coding agents, including GitHub Copilot, must preserve the course structure and make changes in a way that is easy to study later.

## 1. Read order
Before making changes:
1. Read this `AGENTS.md`.
2. Read `README.md` for project commands and architecture.
3. Read the latest file in `summaries/` to understand the current lesson boundary.
4. Read `skills/elasticsearch-learning/SKILL.md` when adding or modifying course material.
5. Read the relevant Kibana file before changing Elasticsearch data, mappings, or queries.

## 2. Stack and constraints
- Package manager: `pnpm` only.
- Runtime: Node.js 22+.
- Language: TypeScript with strict typing.
- Development runner: `tsx`; do not introduce `nodemon`.
- Elasticsearch: 8.17.1 locally.
- Kibana: 8.17.1 locally.
- Local Elasticsearch URL: `http://localhost:8200`.
- Local Kibana URL: `http://localhost:4009`.
- Local Elasticsearch security is intentionally disabled for this learning repo.

## 3. Course file rules
### Summaries
Every learning step gets its own summary:
- `summaries/step-01.md`
- `summaries/step-02.md`
- ...

Each summary must contain:
- step title;
- main concepts;
- important distinctions / common mistakes;
- Elasticsearch endpoints or query shapes worth remembering.

Never combine multiple steps into one summary file.

### Kibana scripts
Historical Steps 1-7 are intentionally consolidated in:
- `kibana/steps-01-07.kibana`

For every new step from Step 8 onward, create exactly one new file:
- `kibana/step-08.kibana`
- `kibana/step-09.kibana`
- ...

A new Kibana file must:
- contain the commands needed for that step;
- keep the learning data in a state compatible with that lesson;
- be safe to understand and rerun section-by-section;
- include comments explaining destructive operations;
- prefer deterministic IDs for learning examples where useful.

Do not append Step 8+ queries to `steps-01-07.kibana`.

## 4. Elasticsearch learning principles
- Teach Elasticsearch REST / Kibana Dev Tools first.
- Add Node.js client equivalents after the Elasticsearch behavior is understood.
- Do not hide Elasticsearch behavior behind abstractions during a lesson.
- Explicitly distinguish `_id` metadata from user fields.
- Explicitly distinguish `_source` from indexed terms.
- Explicitly distinguish full-text queries from term-level queries.
- Prefer explicit mappings in durable examples.
- When introducing a new concept, include a runnable example and at least one useful counterexample when appropriate.

## 5. TypeScript rules
- Keep Elasticsearch client creation centralized in `src/config/elasticsearch.ts`.
- Keep environment loading, validation, and parsing in `src/config/env.ts`.
- Use `envalid` validators for environment configuration; do not read `process.env` directly outside `src/config/env.ts`.
- Use ESM imports.
- Avoid `any`; prefer Elasticsearch client types or explicit domain types.
- Do not duplicate constants such as the Elasticsearch node URL.
- Run `pnpm typecheck` after TypeScript changes.

## 6. Docker rules
- Keep Elasticsearch exposed on host port `8200`.
- Keep Kibana exposed on host port `4009`.
- Keep Elasticsearch/Kibana versions aligned.
- Do not enable local auth/TLS unless a future lesson specifically teaches security.
- Do not remove the named Elasticsearch data volume without explaining that it deletes persisted local learning data.

## 7. Definition of done for a new learning step
For Step N >= 8, a complete lesson change normally includes:
1. `summaries/step-NN.md`.
2. `kibana/step-NN.kibana` when the step contains Elasticsearch commands.
3. Node/TypeScript code only if that step intentionally introduces application-side usage.
4. README update if commands, architecture, or prerequisites changed.
5. `pnpm typecheck` passes when TypeScript changed.

## 8. Do not over-engineer
This is a learning repository. Prefer small, explicit examples over framework layers, dependency injection, generic repositories, or elaborate architecture unless a lesson specifically teaches those concepts.
