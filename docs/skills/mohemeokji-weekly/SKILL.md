---
name: mohemeokji-weekly
description: Update Choi01 모해먹지 from a weekly supermarket CSV, verify postcode/store offers and recipe-full recipe provenance, test shopping and meal persistence, and prepare an authorized deployment. Use for 다음 주 모해먹지 갱신, 할인 CSV 반영, or the Aside weekly handoff.
---

# 모해먹지 주간 갱신

Work in the user's `choi01.com` checkout. Find it via the current workspace or saved projects; do not assume a machine-specific path. The canonical page lives in `public/mohemeokji/index.html`. Discover current status and relevant instructions before editing. Preserve unrelated Canvas/Cloudflare work.

## Inputs and collection

Ask for an input CSV only when no file is available. Read [the Aside prompt](references/aside-prompt.md) when setting up or reviewing collection. Sunday collection targets the **following Monday–Sunday**, using Europe/Berlin for both week boundaries and timestamps. Never infer 09:00 versus 21:00 from “9시”; retain the existing scheduler or ask before changing it. Do not create duplicate automations. A user describing Aside's schedule is not asking this skill to create another scheduler.

The website contains imported snapshots, not live store prices. `행사가격` is an unconditional offer price; `앱가격` and its conditions stay separate. Do not silently substitute a member/coupon price. Keep actual branch postcode separate from requested search postcode; a nearby 52064 branch must not become a fictitious 52062 branch.

## Validate before publishing

Use the governed release command as the canonical entry point. It validates the
CSV, performs two complete compiles, compares every byte,
verifies the retained rollback chain, and writes an immutable approval receipt.
Without a supplied candidate report each compile performs read-only discovery. A supplied `--candidate-report` reuses that reviewed input for both compiles; do not call this two independent live DB discoveries. It never changes `public/` during `prepare`:

```sh
npm run meal:release -- prepare INPUT.csv --coverage COVERAGE.csv --week-start YYYY-MM-DD --staging-dir NEW_STAGING_DIRECTORY --database VERIFIED_DATABASE --tenant recipe-full --registry data/mohemeokji/recipe-publication-registry.json --rollover --previous-manifest CURRENT_PUBLIC_MANIFEST.json
```

When a fresh read-only candidate report has already been reviewed, pass `--candidate-report PRIVATE_REPORT.json`; it is sealed into snapshot lineage and is never copied into public data. An enriched registry may also use `--nutrition-candidates PRIVATE_CURRENT_SOURCE_EXPORT.jsonl` as described in the calculation reference.

Use `--bootstrap` only for the first immutable release. Use `--correction` with
the current same-week manifest for a same-week correction. The staging directory
contains `data/`, a private twin under `private/twin-data/`, two private review
queues, `preflight.json`, the untouched CSV, and `release-receipt.json`. Keep the
entire staging directory outside `public/` and out of git.

Keep the pending approval record, release receipt, every evidence file referenced by that receipt, and the execution result in a durable private artifact root resolved from the canonical checkout. The root must be outside `public/`, outside any scratch worktree or `/tmp` directory, and covered by an explicit `.gitignore` rule; verify the rule with `git check-ignore` before writing. Record the exact path and SHA-256 of each referenced artifact. `/tmp` and `/private/tmp` are for throwaway previews and tests only. Never repoint a sealed receipt or plan to a newly generated file, or silently replace missing evidence after approval.

Review the preflight warnings, store coverage, private queues, registry changes,
and source evidence before requesting publication approval. The receipt's
`approvalDigest` seals the offer CSV and coverage CSV hashes, complete public
data tree, snapshot pointer, and release mode. Coverage must include every actual
branch present in the offer CSV with the exact row count. A PDF or digital flyer
may be marked `수집완료` only when every source page was checked; first-page or
selected-page extraction is `일부수집` with source and checked page counts. PDF download, text extraction or OCR completion alone is not page review. Empty text pages need actual visual/OCR review and page-level evidence. Record unpublished, inaccessible and uncollected branches explicitly; do not copy last week's products into the new week.
When the connected action registry actually exposes the recipe action, preview and submit using pack `recipe`, action `recipe.publish_weekly_meal_snapshot`, and inputs `{"receipt": <release-receipt.json>, "website_origin": "https://choi01.com/mohemeokji/"}`. The implementation declares workflow `recipe.weekly_mohemeokji_release`; verify that it is registered before claiming a workflow submission. A submitted workflow must pause in the approval queue and resume only after the owner approves that exact digest. If the connected profile lacks the publication action, prepare privately with the CLI and report the concrete receipt/digest for owner approval; do not invent a tool call or install extra tools just to perform a weekly refresh. No web publication, MCP activation or external release-package transfer occurs before exact owner approval.

Discover the connected `@02Ontology` tool list and action capabilities before selecting a publication route. If the fixed `meal_release_preview/submit/approve/resume` wrappers are actually exposed, use their governed sequence; otherwise inspect the available `action_prepare/approve/execute/verify` contract. The current generic personal-action tools are not interchangeable recipe-publication wrappers: use them for this action only if their connected schema explicitly supports it; otherwise use the private CLI preparation/approval route above. Do not claim a wrapper is installed merely because its code exists. `meal_release_status` is read-only. The last confirmed operating profile had 24 tools (2026-10-04), including unrelated study, Bible, calendar and personal actions. That count is an observation, not a permanent profile specification: preserve every name, authentication contract and runtime module in the freshly recorded live baseline.

After approval, publish exactly the sealed staging directory:

```sh
npm run meal:release -- publish NEW_STAGING_DIRECTORY --approval APPROVED_SHA256
```

`publish` rechecks the receipt, CSV, full data tree, snapshot hashes, rollback
chain, and approval digest before replacing the generated public data, copying
the dated CSV, regenerating `meal-package-prices.js`, and syncing all existing
routes. Any change to the sealed CSVs, receipt body or public data tree invalidates the approved digest. Private review queues, preflight reports and the twin tree are not automatically covered by that publication digest. Always supply `--approval` from recorded owner approval; CLI acceptance itself does not establish authorization. This updates the
repository only; continue through tests, commit, push, Cloudflare deployment and
production verification below.

The snapshot manifest's optional `discoveryCatalogPath` is the shared website/MCP
contract. New releases must contain a content-hashed
`recipes/discovery.<sha256>.json` entry listed in `fileHashes`. 02Ontology fetches
and verifies this remote artifact, so the website and MCP expose the same
exploration catalog. The checked-in MCP discovery file is legacy fallback for
older snapshots only; do not mix its old recipes into a newer snapshot if the pinned artifact is missing or fails verification. New calculated releases also pin `nutritionCatalogPath` to a hashed `recipes/nutrition.<sha256>.json` file in `fileHashes`. It contains only currently approved source/hash-matched nutrition recipes, never the whole unreviewed DB. Do not rebuild or redeploy the MCP package for ordinary weekly data changes when its policy contract still matches.

Before any 02Ontology deployment, record the live plugin tool names and count.
After deployment the tool list must be a superset of that baseline. Never deploy
an older release that removes unrelated personal, calendar, or action tools.
Verify `meal_recommend` with `limit: 20`, a second page using `offset`, vegetarian
and exclusion filters, nutrition/diet general-versus-discount evidence, detail serving scaling, and a tampered/unavailable-source case. When changing runtime code, use the recorded live image as the release base and apply only the reviewed meal modules/assets; a branch's older full wheel/image can remove newer authentication or unrelated tools. Preserve all bundled engine, runner and policy provenance hashes; a policy mismatch must remain visible until compatible versions are activated.

The lower-level commands below remain diagnosis and repair tools. Do not mix
their output manually into a prepared release or bypass the approval receipt.

Before preparing, compare the newest reviewed week with the previous week by
requested postcode, actual branch postcode and chain. A sudden unexplained drop is a collection regression to investigate, even when the retained rows are valid. Compare with the prior coverage branch inventory, including 44369 Netto, 40474 EDEKA and 40489 Lidl; keep zero rows and their actual reason visible rather than manufacturing continuity. Recipe-compatible counts and all collected food counts are separate measures.

Run from the repo root, replacing placeholders with verified paths and the intended Monday:

```sh
node scripts/prepare-meal-week.mjs INPUT.csv --week-start YYYY-MM-DD --output-dir NEW_STAGING_DIRECTORY
```

On success this creates an untouched CSV copy, generated catalog and `audit.json` **only in a new staging directory**. Validation errors are printed to stderr with exit code 1 and no staging files; capture stderr when retaining failure evidence. It rejects malformed CSV, previous-week-only rows, duplicates, missing source/timestamp, malformed prices, or multiple branches hidden under one postcode/chain. It does not establish that an offer is true; resolve warnings against its evidence before publication. Inspect every new/changed matched product and report coverage by postcode/store, not just total rows. Conditional price-only rows and unmatchable products may remain in the archive without being included in totals.

Review every matched product's actual food, preparation and physical form against its official source. CSV/hash/schema checks alone do not establish ingredient identity: butter cakes and ham are not butter, juice is not fresh produce, hot-smoked Stremellachs is not raw salmon, and small rolls cannot price a recipe requiring a hollowed large loaf. Use the shared `MealRecommendations` predicate through the canonical generator; keep uncertain products in the raw archive rather than relabelling them. Preserve public `productInfo` evidence. After a mapper change, regenerate the candidate report from the same CSV; the compiler rejects stale, missing, duplicated or altered offer mappings. Verify web/MCP and shopping projections, including stored choices, with the same predicate.

Separate coupon/multi-buy price conditions from general stock or household-purchase notices. Keep the latter in source evidence, and do not invent a minimum purchase condition. Complete basket cost requires supporting product, identity, quantity and source bindings; an opaque subtotal or matching calculation hash is insufficient. Individual verified offer prices may remain readable while full basket cost is unavailable.

After verifying the actual recipe database and tenant, create the store-specific recipe review queue from the same CSV. Read `docs/mohemeokji-recipe-source.md` in the website repo for the private `MOHEMEOKJI_RECIPE_SOURCE_CONFIG` adapter; pass `--database` explicitly because legacy CLI defaults can still name the retired combined database:

```sh
node scripts/find-store-recipe-candidates.mjs INPUT.csv --output NEW_STAGING_DIRECTORY/recipe-candidates.json --database VERIFIED_DATABASE --tenant recipe-full --limit 500 --total-limit 5000
```

This is the required bridge from store offer research to `recipe-full`. It groups each exact product and its source row with candidate recipes under the actual postcode/store. It runs a read-only transaction. Treat zero-candidate offers as an explicit coverage gap. The output is a review queue, not an auto-publish artifact: select and export source records only after checking that the ingredient is defining, the raw/cooked form and cut match, and the recipe has usable quantities and steps.

After reviewing or updating `data/mohemeokji/recipe-publication-registry.json`, compile the immutable public snapshot into a new empty directory:

```sh
node scripts/compile-meal-week.mjs INPUT.csv --output-dir NEW_SNAPSHOT_DIRECTORY --database VERIFIED_DATABASE --tenant recipe-full --registry data/mohemeokji/recipe-publication-registry.json --audit-output PRIVATE_REVIEW_QUEUE.json --bootstrap
```

The compiler selects separately for every postcode, chain, and branch. It publishes at most 48 recipes per location, keeps sparse and zero-candidate locations explicit, and writes `current.json`, the immutable manifest, location shards, recipe index, content-hashed recipe details, and coverage. The review queue is never part of the public manifest or public directory; request it only with `--audit-output` to a path outside the public snapshot root. The compiler rejects a private audit path nested under the public output. It runs an internal twin build and stops if the bytes differ. Run two complete database-backed compilations into separate new directories and verify their complete file trees:

```sh
node scripts/compile-meal-week.mjs INPUT.csv --output-dir TWIN_A --database VERIFIED_DATABASE --tenant recipe-full --registry data/mohemeokji/recipe-publication-registry.json --audit-output PRIVATE_A.json --bootstrap
node scripts/compile-meal-week.mjs INPUT.csv --output-dir TWIN_B --database VERIFIED_DATABASE --tenant recipe-full --registry data/mohemeokji/recipe-publication-registry.json --audit-output PRIVATE_B.json --bootstrap
node scripts/verify-meal-snapshot.mjs TWIN_A --twin TWIN_B --bootstrap
```

After the bootstrap release, replace `--bootstrap` in both compiler commands with `--rollover --previous-manifest CURRENT_PUBLIC_DATA/snapshots/PREVIOUS_WEEK/PREVIOUS_ID/manifest.json`. The compiler validates that manifest through its current pointer, requires an earlier week, copies its hash-pinned tree into each new output, and writes the same `previousSnapshot` pointer into both new manifests. Do not assemble rollover metadata by hand.

The verifier checks the pointer and every artifact hash, CSV and read-only discovery hashes, exact location and offer boundaries, coverage and recipe references, zero-candidate facts, four-mode readiness, lazy browser asset sets, symlinks, hidden review-queue payloads, and asset budgets. Price mode needs a complete branch/date/serving-specific basket and a valid defining offer. Nutrition/diet may use approved complete or explicitly reviewed estimated nutrition, including the separately pinned general nutrition catalog. Partial or unknown nutrient sums do not qualify. A mode with no eligible evidence is unavailable; it cannot silently fall back to balanced. Do not move `current.json` into production if either compile, validation, twin comparison, or verifier fails.

Registry approval is tied to `sourceRecipeId`, current `sourceContentHash`, and `transformVersion`. An existing recipe ID or broad ingredient overlap is not approval. When source ingredients or instructions change, the old hash becomes stale and the recipe remains in the review queue until its Korean paraphrase is reviewed again. The public output may contain the approved Korean paraphrase, but never raw source instructions, source images, HTML, or unapproved text.

Generator data shape: `mealPackagePricesByArea[postcode][store][ingredient]`; `mealOfferMeta.profiles[postcode][store]`; `stores[postcode]`; `areas[postcode]`. New postcode selectors are generated at runtime. Legacy routes remain valid. Current UI has one branch per postcode/chain: if two branches appear, stop that combination and implement/select an explicit branch rather than blending prices. The parser intentionally fails closed here.

Check raw/cooked/canned food, cut/species, cheese type and processed-food name collisions. Leberkäse is not cheese; Apfeltasche is not an apple; Buttermilch is not butter; a meat-filled bread roll is not plain bread; tomato sauce is not fresh tomato. Never price cooked chicken using raw chicken or replace mozzarella with grill cheese. Do not add aliases solely to increase sale counts. Exact product forms matter more than matching numbers.

Use explicit `가격적용단위` to distinguish one pack, per 100 g, per kg and multi-buy. Do not convert variant ranges (150/200 g, 113–150 g), tablespoons, pieces or unspecified quantities into fabricated shopping weights. Per-weight quotations such as `je 100 g` or `pro kg` are not fixed packages; show a purchase-weight check. Nutrition-only reference conversions have a separate reviewed provenance contract; they do not establish a pack quantity or purchase yield. Unresolved rows visibly require a quantity check. Offers are used as current prices only within their per-product validity dates. Sunday uploads for next week must not be called current Sunday discounts.

## Recipes

Review counts must be checked against the same recipe's own feedback section. The 2026-09-11 audit found that the ontology crawler's whole-page rating regex can import another recommended recipe's count. A populated `recipe-full.reviewCount` is therefore not verification. Run `node scripts/verify-meal-reviews.mjs --data-root NEW_STAGING_DIRECTORY/data --csv INPUT.csv --output PRIVATE_VERIFIED_REVIEWS.json` against the staged snapshot before publication. It records canonical recipe identity, detail hash, source response hash and check time for that snapshot. Keep the raw evidence private; after approval use the reviewed browser evidence projection and route sync, without changing sealed snapshot bytes. Display confirmed counts (including zero) and `리뷰 수 미확인` for absent or conflicting values. Comments, view counts, photo-review counts and rating counts are separate measurements. Do not use unverified ontology values to claim popular or highly reviewed recommendations. See `docs/mohemeokji-recommendation-audit-2026-09-11.md` for the pending candidate-selection repair.

For candidate reselection, use only the source evidence map with `scripts/select-meal-publication-expansion.mjs`; a verified cooking-review count of at least one is the minimum, and larger verified counts improve ranking. Never substitute the DB count when the source page is missing or conflicting. `scripts/lib/main-ingredient-gate.mjs` requires the exact offer to be a defining source ingredient: a later fruit, vegetable, dairy or seasoning match cannot override an earlier protein, and later non-protein matches need title evidence. A stale ontology profile is held for review instead of being published. For a targeted verified candidate promotion, run `scripts/promote-verified-candidates.mjs` with the candidate report, source evidence, and reviewed editorial overrides, then compile a same-week correction that retains the prior manifest. Keep candidate evidence and promotion audit files outside the public snapshot payload.

The UI distinguishes collected CSV rows from recipe-compatible products. One compatible product does not mean the store has only one sale. Check source collection completeness separately; the 2026-09-07 ALDI Nord CSV contains 10 rows from one secondary article, of which only one product passes the ingredient mapper.

Read [recipe and application checks](references/verification.md). Discover the active containers/connections and verify database, tenant and sample Recipe/IngredientQuantity/CookingStep rows before querying. The last confirmed `recipe-full` corpus was in the q6 personal database `onto_personal`; the old combined `01ontology` DB was retired and the company DB is separate. These are dated observations, not connection defaults. Repository names, old `.env` ports and historical import receipts do not prove the active source. Use the reviewed read-only adapter and tenant-scoped current `fact` relationships (`superseded_by IS NULL`); do not fall back to a nonexistent `triples` table or stale assertions. No import, DB modification or source purge belongs to ordinary weekly discovery.

Use actual source recipe IDs, titles, authors, quantities, ordered steps and URLs. The active website/MCP contract is the current manifest, location shards and hash-pinned detail/discovery/nutrition catalogs. Legacy `ontology-recipe-details.js` and `meal-planner-recipe-data.js` are compatibility artifacts, not a second active recipe pool. IDs derive from sourceRecipeId, never array position. Do not claim the entire DB is searchable from the website: the website serves a selected static subset. Review which new sale ingredients lack menu coverage; select additional relevant source recipes where needed, without an arbitrary 30-recipe cap or duplicating one dish under new titles.

Preserve source quantity labels and distinguish source servings from selected servings. Scale unambiguous numeric count/g/ml quantities only from a single explicit source serving count; missing/conflicting servings, ranges, `약간` and zero denominators remain unknown. Preserve `sourceTimeText`; mark editorial duration estimates through `timeBasis`. Account for marinating/resting/chilling and ingredient preparation state. Paraphrase instructions accurately; do not paste source images or long verbatim instructions. Include essential ingredients used only in steps, with their source-step provenance. Label optional accompaniments as optional. Do not invent temperatures to make instructions look detailed. Dietary flags require evidence from all ingredients and the actual product.

Every selected recipe also needs editorial `recommendationProfile`: `primaryIngredients` (exact ingredient keys that define the dish), `family`, `method`, and `kind` (`main`, `side`, `breakfast`). Do not classify chicken curry's rice/garlic as its defining discounted protein. `meal-recommendations.js` prioritizes main-ingredient offers, varies family/method, keeps sides out of automatic meals, and demotes explicitly recorded eaten recipes for 14 days across stores. Never infer consumption from a plan or reset eaten history during a CSV update. `Hähnchen-Innenfilet` is a separate `닭안심` offer; breast recipes may show a candidate note but must not automatically charge that price as an exact breast match.

Balanced and price automatic meals require a **currently valid primary-ingredient offer for the selected postcode/store** (`requireMainOffer`). Nutrition/diet may also select approved complete/estimated general nutrition recipes from the pinned catalog; label these `sale_linked=false` and show missing purchase price honestly. General approved recipes may be selected manually without claiming a discount. Dietary/exclusion/retired-source rules apply to the library, manual placement, drag/drop, replacement and every automatic mode. Sorting a shared library differently is insufficient. Saved-plan restoration may retain old accessible dishes with no-current-discount/conflict labels; it must not resurrect them into active eligible results. Never force seven meals when fewer qualify; snack-only coverage needs an explicit empty main-meal state. Identical valid offers may legitimately produce overlapping lists. Preserve the CSV `상품명` as the German original name apart from whitespace normalization and show it with the Korean ingredient, selling unit and price in the lead recommendation, every menu card and the expandable recipe-linked offer directory (`lang="de"` on the original name). This makes legitimate overlap auditable. Within a postcode, the lead recommendation may prefer a valid ingredient offered by fewer of the selectable stores; this must never make an ineligible recipe visible. Report each store's eligible menu count and automatic-main count, then seek source-backed recipes for uncovered sale ingredients.

Use `scripts/export-meal-recipes.sql` for read-only source export after verifying the database/tenant. Pass selected source IDs through psql's `recipe_ids` variable. Compare source labels, quantities, metadata and ordered instructions before adding records. Preserve naturally short, complete recipes; do not pad a two-ingredient snack to an arbitrary five steps. Distinguish plain from flavored yogurt, raw breast from tenderloin, pork tenderloin/neck/loin/topside from generic pork, rib-eye from generic beef, processed slices from other cheese, and pure pork mince from verified 50/50 pork/beef blends.

## Calculations and source disposal

For nutrition enrichment, read [calculation and disposal boundaries](references/calculation-and-disposal.md) and `docs/mohemeokji-calculations.md` in the website repo. The owner has enabled sourced estimates with assumptions and uncertainty disclosed. This does not turn partial coverage into a complete total or prove a person's nutritional needs are met. Original-source disposal is a separately scoped owner maintenance operation, not a side effect of a weekly CSV refresh.

## Apply and verify

Run candidate QA **before** requesting the exact digest approval. Public-path tests must see the proposed week, not the unchanged published week: create an isolated private candidate checkout/static preview with the reviewed app code and a copy of the sealed `data/` tree, dated CSV and corresponding generated browser evidence/prices. Keep the original repo public tree and sealed staging bytes untouched. Diagnostic generators may prepare that private QA copy; they do not publish it or replace the immutable receipt. Record its code base and compare candidate asset/data hashes, especially when an unrelated latest-main build is blocked. Do not describe a production-base overlay build as a passing latest-main build.

Run the following in that candidate checkout, then run the browser matrix against its actual static paths:

```sh
node scripts/sync-meal-pages.mjs
node scripts/sync-meal-pages.mjs --check
node --test tests/mealSnapshotE2E.test.mjs tests/mealShopping.test.mjs tests/mealWeekly.test.mjs tests/mealWeekPreflight.test.mjs tests/mealRecommendations.test.mjs
npm test
npm run build
npm run typecheck
git diff --check
```

After these checks and the browser matrix pass, report the concrete sealed receipt for exact owner approval. After approval, publish through `meal:release publish` above, compare the resulting bytes with the tested candidate and run route/diff checks. Never manually mix new output into the original public tree before that gate.

The sync command copies canonical HTML/recipe wrapper to existing routes and changes asset URLs by content hash. Do not edit six pages independently or keep last week's cache key. Regression fixtures for known bad products remain pinned to the historical CSV; tests of the current catalog must use its actual source file rather than comparing next week's prices to last week.

Browser QA must use the available CUA browser tool against the real static paths. Vite may serve the homepage for `/mohemeokji/`; use the existing static preview or a temporary `python3 -m http.server PORT --bind 127.0.0.1 --directory public` and close it afterward. Capture `1280×900`, `390×844`, and `320×844` screenshots and console/network evidence. Cover all manifest locations and one complete store plus a sparse/zero store in depth: four modes, lunch and dinner, X replacement and explicit clear, Plan/Shop/mobile navigation, detail/source failure, pantry, checklist, reload, and saved-plan rollover. Initial snapshot data loading is limited to `current.json`, the pinned manifest and selected location; the hashed discovery/nutrition catalogs load only when needed, and details remain lazy. The browser must not request CSV, private evidence/review queues or unrelated location shards. Never claim mobile QA from one desktop screenshot. If CUA is unavailable or the Mac is locked, record the precise blocker and leave the release gate failed; do not substitute raw Playwright/CDP or bypass the lock.

Promote only after the twin compile, verifier, full test/build/typecheck/sync checks, and CUA matrix pass. The first release is an explicit bootstrap and records app-asset/git rollback because no earlier immutable snapshot exists. On later rollovers, retain the previous two immutable snapshot trees and declare the immediately previous manifest in the new manifest's `previousSnapshot` pointer. The retained path must be inside the same deployable data root and its snapshot ID must differ:

```sh
node scripts/verify-meal-snapshot.mjs NEW_DATA_ROOT --twin TWIN_B --bootstrap
node scripts/verify-meal-snapshot.mjs NEW_DATA_ROOT --twin TWIN_B --rollover --previous snapshots/PREVIOUS_WEEK/PREVIOUS_ID/manifest.json
```

An external directory or the current manifest itself is not rollover proof. After deployment, compare the deployed `current.json`, manifest, selected location, and changed app asset bytes with the committed files, then perform a read-only production smoke test. Rollback means restoring the verified retained pointer; do not delete or rewrite immutable snapshot files.

Existing feature limits: pantry is scoped per postcode/store, and adding separate recipes to a checklist takes the larger pack count to avoid duplicate additions; weekly basket selection sums measured needs. Source-serving scaling supports only known unambiguous quantities. A user-entered gram scenario is stored locally by recipe/source hash and changes nutrition only; it does not change cooking quantities, shopping, published MCP facts or a DB. Do not claim cross-store stock inventory, partial pantry quantities, a complete receipt total with unknown prices, live DB search or all grocery needs fulfilled.

Commit/push/deploy only when the current task authorizes them (existing authorization counts). Stage only related paths. Do not directly deploy a dirty build containing unrelated work. Verify the deployed HTML and every changed asset against the committed bytes, then perform production read-only smoke checks. Report actual successful checks and unresolved limits; HTTP 200 or matching source IDs alone do not prove a recipe or price correct.
