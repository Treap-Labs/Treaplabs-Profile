# Agent Instructions

## Commit Every Change

- Commit after each completed task that changes repository files.
- Treat all related edits for one user request as a single task-level commit unless the user explicitly requests a different grouping.
- Verify the task as appropriate before committing. Do not mark work complete or commit known-broken changes.
- Before committing, inspect `git status` and the relevant diff.
- Stage and commit only files changed for the current task. Never include unrelated changes made by the user or another agent.
- Use a concise commit message that describes the completed task and follows the repository's existing commit style.
- Do not amend, rewrite, squash, or force-push commits unless the user explicitly requests it.
- If a task produces no repository changes, do not create an empty commit.
