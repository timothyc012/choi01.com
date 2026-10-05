# Calculation and original-source boundaries

Read this when enriching nutrition, explaining an unavailable mode, or handling an explicit source-disposal request. Ordinary weekly publication does not install a schema, promote nutrition data to the ontology DB, or delete source records.

## Reviewed calculations

Use the website repo's `docs/mohemeokji-calculations.md` and actual CLI. The enrichment command reads reviewed local JSON inputs and creates a new private output; it never fetches, approves, publishes or writes a DB:

```sh
node scripts/enrich-meal-calculations.mjs \
  --registry PRIVATE_REVIEWED_REGISTRY.json \
  --recipes PRIVATE_CURRENT_RECIPES.json \
  --foods PRIVATE_REVIEWED_FOODS.json \
  --mappings PRIVATE_REVIEWED_MAPPINGS.json \
  --allow-estimated-nutrition \
  --output-dir NEW_PRIVATE_CALCULATION_DIRECTORY
```

Optional `--prices` and `--contexts` need exact branch, date, preparation, source and target-serving evidence. A missing price must remain unknown. Test fixtures are not food or price facts. Output directories must be new and outside public/git/cloud-credential paths; keep source catalogs, reviewer identities and raw lineage private.

- Match each mapping to the current recipe content hash, ingredient ordinal, original label/quantity and exact food version/preparation. Verify the whole ingredient inventory, including required ingredients introduced in cooking steps. Optional accompaniment exclusions require explicit source-backed scope and visible disclosure.
- Food records need a reviewed source URL/hash and a 100g edible basis. BLS source parsing is not evidence of DB ingestion: confirm the active DB before claiming nutrition is stored there. Preserve numeric origin, missing, trace and logical-zero markers; missing/trace values are not zero. Raw/cooked, whole/juice, generic oil/olive oil and edible/as-purchased weights cannot be silently substituted.
- An estimate may use a specifically reviewed official quantity conversion or disclosed food equivalent. Retain reference name, exact source bytes/hash, preparation, scaling basis and scenario bounds. RDA/USDA/FAO references are not universal gram defaults. A separately approved first-party published recipe point scenario remains a model with unquantified stalk/trim/cooking uncertainty; do not call it an official conversion table or invent a percentage error.
- Quantity scenario minima/maxima are not statistical confidence intervals, and they do not quantify every food-proxy or cooking uncertainty. Show these limits beside the numbers. Calculations describe ingredient-input totals, not necessarily consumed nutrients or an individual's full dietary requirement.
- Only source/hash-matched `complete` or reviewed `estimated` all-ingredient/four-nutrient results with known source servings qualify for nutrition/diet. `partial` and `unknown` retain visible gaps but must not enable these modes. Do not carry old complete calculations into a missing-current-source result.

Use the enriched staged registry with the normal weekly compiler. If approved goal recipes are not in the current offer-derived candidate report, pass their fresh JSONL source export through `--nutrition-candidates PRIVATE_CURRENT_SOURCE_EXPORT.jsonl` to `meal:release prepare` (or `compile-meal-week.mjs`). The compiler revalidates registry approval, current content hash, complete inventory and calculation lineage before writing the hashed `nutritionCatalogPath`. Balanced/price still require an active exact defining offer; general nutrition recipes have no invented offer or price. Sides remain manual-only.

The web detail's user-entered gram scenario is local state scoped to recipe ID and source hash. It scales with selected/source servings and must disclose user inputs separately. It does not alter original cooking quantities, purchase quantities, source mappings, MCP facts or a DB; a missing food/nutrient record cannot be repaired by entering grams alone.

## Exact source subset disposal

Only use this branch when the owner explicitly requests original data disposal. Read the reviewed 02Ontology maintenance docs and inspect the currently available implementation before running anything:

- `docs/operations/recipe-source-purge.md`
- `scripts/prepare_apply_recipe_source_purge.py`
- `scripts/prepare_apply_recipe_source_files.py`

Review each recipe's own ingredient/step evidence. Fresh-herb words in review-author labels or unrelated recommendations are crawler contamination, not evidence to delete an ordinary recipe. Preserve shared ingredients/authors/tools/tags, and hold unresolved sources. Do not delete the `recipe-full` tenant or the whole recipe pack to remove a subset.

Prepare a bounded plan for the actual active physical PostgreSQL cluster/database and fixed tenant. The typed owner maintenance schema is separate from runtime permissions and requires explicit owner authorization before installation. Keep assertion protections and runtime grants intact; do not disable triggers, change replication role, or bypass immutability with ad hoc DELETE.

The bound plan's exact digest authorizes only the sealed IDs, owned closure and row/source fingerprints. Schema installation, DB apply and original-file cleanup are distinct operations. Require the owner's exact bound-plan approval before DB apply; an older inventory digest or general deletion request cannot supply that gate. A DB receipt is not proof that original files or graph mirrors are gone.

File/archive cleanup has its own new prepared plan and cleanup digest. Every mutating file command requires both exact source-plan and cleanup approvals. Preserve all unselected row bytes/order and archive members; pause source writers. `apply` retains rollback originals, so completion is provisional. `finalize` irreversibly removes only the verified batch's rollback copies and must remain within its explicit approval scope. Check mirror tombstone acknowledgment and read back target absence before reporting graph completion. Unlisted processed dumps, remote copies, backups, Git history and unresolved sources remain separately inventoried work; do not call a bounded DB/file operation complete historical erasure.
