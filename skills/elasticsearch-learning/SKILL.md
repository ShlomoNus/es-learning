# Skill: Elasticsearch Learning Step Maintainer

## Purpose
Use this skill whenever adding, revising, or validating a lesson in this repository.

## Inputs
A lesson number and the Elasticsearch concept being taught.

## Workflow
1. Read `/AGENTS.md`.
2. Read the immediately previous summary so the lesson builds on known concepts.
3. Decide the minimum Elasticsearch state needed for the lesson.
4. For Step 8+, create or update `kibana/step-NN.kibana` with runnable Kibana Dev Tools requests.
5. Create or update `summaries/step-NN.md` with the durable concepts and endpoints/query shapes to remember.
6. Add Node.js code only when the lesson explicitly moves from REST/Kibana into application usage.
7. If TypeScript changes, run `pnpm typecheck`.
8. Keep examples deterministic, small, and explain why each query behaves as it does.

## Kibana lesson checklist
- Commands are valid Kibana Dev Tools syntax.
- Mapping assumptions are explicit.
- Destructive commands are commented.
- Data setup is sufficient for the queries that follow.
- Examples demonstrate both correct behavior and common mistakes when useful.
- The file can be read top-to-bottom as a lesson artifact.

## Summary checklist
Include:
- title;
- main points;
- mental model;
- common mistake(s);
- endpoints or query shapes to remember.

## Current course boundary
Steps 1-7 already exist.
The next new lesson is Step 8: `bool` query with `must`, `should`, `filter`, and `must_not`.
