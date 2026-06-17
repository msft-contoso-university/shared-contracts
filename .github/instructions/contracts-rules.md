# Contract Rules for shared-contracts

These rules apply when changing shared schemas, event examples, validation scripts, or compatibility expectations.

## Current stack
- Shared contract repository with `contracts/` artifacts.
- Validation entrypoint in `scripts/validate.js`.
- Used as the cross-repo source of truth for shared shapes and examples.

## Contract design rules
- Treat contracts as product interfaces, not implementation details.
- Prefer additive evolution over breaking field renames or removals.
- Keep naming clear and consistent across events, payloads, and examples.

## Compatibility rules
- A contract change is not complete until impacted repos are identified.
- If a field changes meaning, document the migration path in the issue or related notes.
- Do not optimize a shared contract for one repo at the expense of the others.

## Repository rules
- Keep validation scripts simple, deterministic, and easy to run in CI.
- Store examples close to the schemas or event definitions they illustrate.
- Keep contract files reviewable; avoid generated noise unless it is necessary and documented.

## Testing and evidence
- Validate changed contracts through the repo validation entrypoint.
- Reference dependent repos or issues whenever a contract change requires coordinated updates.
