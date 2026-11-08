# GitHub Copilot repository instructions

Before planning, editing, generating code, or answering repository-specific implementation questions, read and follow `/AGENTS.md` as the primary operating contract for this repository.

Then read the files that `AGENTS.md` identifies for the task, especially the latest lesson summary and `skills/elasticsearch-learning/SKILL.md` for course changes.

Important repository rules:
- use `pnpm`, never npm or yarn;
- use TypeScript + `tsx`, never nodemon;
- preserve Elasticsearch on host port 8200 and Kibana on host port 4009;
- keep Steps 1-7 in the existing cumulative Kibana file;
- from Step 8 onward create a new summary file and a new Kibana file for each lesson;
- keep examples explicit and educational rather than over-abstracted;
- run `pnpm typecheck` after TypeScript changes.

If these instructions conflict with a more specific applicable repository instruction, follow the more specific instruction while still preserving the learning-course rules in `/AGENTS.md`.
