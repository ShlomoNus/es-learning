# AI Orientation — GitHub Copilot in This Repository

This repository keeps AI-specific guidance together under `.github/`. `AGENTS.md` files are the exception: the repository contract stays at the root, and frontend or backend projects may have their own `AGENTS.md` files at their project roots.

## Instruction layers
1. `AGENTS.md` — repository operating contract; a more specific project `AGENTS.md` applies within its scope.
2. `.github/copilot-instructions.md` — repository-wide Copilot instructions.
3. `.github/instructions/course-files.instructions.md` — path-specific rules for course artifacts.
4. `.github/skills/elasticsearch-learning/SKILL.md` — repeatable workflow for adding Elasticsearch lessons.

## Expected Copilot behavior
When asked, for example, "add Step 8", Copilot should:
- read the applicable `AGENTS.md`;
- inspect the latest summary;
- read `.github/skills/elasticsearch-learning/SKILL.md`;
- create `summaries/step-08.md`;
- create `kibana/step-08.kibana`;
- update TypeScript only if the lesson requires Node-side code;
- keep the repo runnable and type-safe.

## Why both Copilot instructions and AGENTS.md?
`AGENTS.md` is the human-readable, tool-agnostic repository contract. `.github/copilot-instructions.md` is GitHub Copilot's repository-wide instruction entry point and tells Copilot how to apply the repository and project-specific contracts.
