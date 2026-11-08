# AI Orientation — GitHub Copilot in This Repository

This repository uses layered AI instructions so Copilot can work with the same course rules across chat, edits, and agent-style tasks.

## Instruction layers
1. `/AGENTS.md` — primary repository operating contract.
2. `/.github/copilot-instructions.md` — repository-wide Copilot instructions; it explicitly directs Copilot to `AGENTS.md`.
3. `/.github/instructions/course-files.instructions.md` — path-specific rules for course artifacts.
4. `/skills/elasticsearch-learning/SKILL.md` — repeatable workflow for adding Elasticsearch lessons.

## Expected Copilot behavior
When asked, for example, "add Step 8", Copilot should:
- read `AGENTS.md`;
- inspect the latest summary;
- read the Elasticsearch learning skill;
- create `summaries/step-08.md`;
- create `kibana/step-08.kibana`;
- update TypeScript only if the lesson requires Node-side code;
- keep the repo runnable and type-safe.

## Why both Copilot instructions and AGENTS.md?
`AGENTS.md` is the human-readable, tool-agnostic repository contract. `.github/copilot-instructions.md` is GitHub Copilot's repository-wide instruction entry point and tells Copilot to treat `AGENTS.md` as the source of truth for the project workflow.
