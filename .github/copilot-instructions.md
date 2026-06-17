# Copilot Instructions for shared-contracts

This repository is the shared source of truth for cross-repo contracts in the SDLC demo.

## Load order
1. Read `.github/instructions/global-engineering-standards.md`.
2. If the task changes schemas, validation, or shared examples, also read `.github/instructions/contracts-rules.md` when present.
3. Read the GitHub issue body and follow its task-specific constraints.

## Repo intent
- Keep shared contracts explicit, stable, and easy for every repo to consume.
- Treat this repo as a coordination point, not a dumping ground for service logic.
- Prefer additive evolution and documented versioning over breaking churn.

## Architecture guardrails
- A contract change is a cross-repo event.
- Keep examples, schema intent, and validation rules aligned.
- Avoid product-specific branching inside shared artifacts.

## Safety boundaries
- Do not change contract meaning casually to satisfy one repo.
- Do not merge incompatible naming or shape changes without updating dependent issues.
- Escalate if a contract change needs repo-wide sequencing or migration planning.
