# Source and runtime checks

## Recipe extraction

Inspect the configured `01ontology-open` project's `packs/recipe/README.md`, object views, importer and runtime connection. Source records may be in PostgreSQL or a cold JSONL archive; verify what is actually used. A README's historical counts do not verify the current DB. Read connection identifiers without printing passwords. Confirm database name, tenant/corpus and sample Recipe/IngredientQuantity/CookingStep identities before selecting recipes.

The 2026-09-08 audit compared the 30 website recipes against the earlier `recipe-full` export and spot-checked original web pages. A URL ending in a recipe ID proves identity linkage, not instruction fidelity or product suitability. Keep source-author/title/ID, servings, difficulty, ingredient labels, ordered cooking steps, source time, and extraction timestamp. Do not assert all metadata was externally verified when only an export was compared.

Later that day, 13 source-backed recipes were added for tenderloin, salmon, mince, banana and yogurt coverage, bringing the archive to 43. They were compared with a fresh read-only DB export, not all re-fetched from the original website. After checking the configured database and tenant, export selected IDs with `psql -X -qAt -v ON_ERROR_STOP=1 -v recipe_ids=ID,ID -d VERIFIED_DATABASE -f scripts/export-meal-recipes.sql`. Do not assume source snippets, catalogue size or a minimum step count proves completeness.

For every selected dish: align shopping identities with both the ingredient table and required steps; separate optional additions; carry gram/ml quantities only when unambiguous; preserve cooked/canned qualifiers. Keep source time separate from estimated ready-to-eat time. Show resting/marinating/chilling instructions. If source instructions are missing, don't invent a three-line recipe: use another source-complete record or link with a clear unavailable-detail state.

## Test scenarios

1. CSV fixtures: next Monday instead of previous week, new postcode not in historical list, missing historical default chain, UTF-8 BOM, invalid prices, app-only prices, multiple same-chain branches, duplicate rows, missing evidence warnings.
2. Source checks: prepared chicken not mapped to raw meat; chicken stock excluded from vegetarian recommendations; source and estimate time labels; no Parmesan certification inferred from dish name; complete sauce ingredients and optional side dishes.
3. Quantities: 300 g needed at €/100 g yields three selling units; 1.3 kg at 1 kg/pack yields two packs; two 1.3 kg meals yield three packs; mixed known/unknown quantity and 150/200 g variants show manual-check state. Individual recipe additions are idempotent max counts; combine recipes through the weekly basket to sum requirements.
4. Persistence: toggle lunch/dinner after editing; save, switch supermarket, return, reload. On a new CSV snapshot, pantry and checklist checks remain while stale manually entered prices/old selling-unit overrides are invalidated. Legacy storage must not silently disappear. Cross-store shared household inventory is not implemented.
5. Routing: existing paths with/without slash, valid/invalid query combinations, a postcode with one chain, a newly added postcode. One chain's source/period/prices must never be attributed to another.
6. Real browser: desktop and explicitly set 390px mobile viewport; open detail, pantry checkbox, add/check/uncheck groceries; store selection updates products/prices; restored state survives reload. Capture screenshots and console logs. Use a local static server for mutable QA so no real user checklist is changed.
7. Deploy: stage only related files, confirm remote commit, compare deployed HTML plus all changed script hashes, then a read-only production smoke test. Report any locked-screen or access failure honestly.
8. Recommendations: chicken-canned curry cannot outrank discounted-main alternatives just because rice/garlic/carrot match. Check week family counts and adjacency; side dishes stay out of automatic meals even when all mains have eaten history. Selecting a meal must not create eaten history. Clicking `먹었어요` must change subsequent ranking, persist across store changes, allow cancelling today's entry, and expire after 14 days. Distinguish breast from tenderloin in both the visible offer explanation and basket.
9. Store membership: compare eligible source IDs, not just first-card order. Every visible/automatic recipe needs a currently valid defining ingredient in that store. For the pinned September 7 CSV, 44369 Netto has 21, Lidl 11, REWE 5 and ALDI Nord 1 eligible menus; REWE has two automatic mains, ALDI Nord none. Next week's counts must follow its actual data. Verify no duplicate/self alternative buttons in small pools, truthful empty-state prices/buttons, and saved recipes remain accessible with a no-current-discount label when excluded from the new list.

## Scope gaps to surface

- A static curated catalog is not a live search over all recipe-full records. Missing meal variety should drive source-backed additions, not duplicate IDs or renamed dishes.
- Ordinary-price estimates, unknown serving weights and real-time shelf availability are unavailable unless separately collected.
- Household pantry quantity, shared inventory across stores and scaling recipes by servings require additional state and quantity logic.
- Date filters invalidate expired offers on page load; a tab left open across midnight needs a refresh.
- Strict CSV preflight is a data-structure gate; human/source comparison is still necessary for price truth, ingredient suitability, rights and dietary claims.
