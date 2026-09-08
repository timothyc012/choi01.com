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

Run from the repo root, replacing placeholders with verified paths and the intended Monday:

```sh
node scripts/prepare-meal-week.mjs INPUT.csv --week-start YYYY-MM-DD --output-dir NEW_STAGING_DIRECTORY
```

On success this creates an untouched CSV copy, generated catalog and `audit.json` **only in a new staging directory**. Validation errors are printed to stderr with exit code 1 and no staging files; capture stderr when retaining failure evidence. It rejects malformed CSV, previous-week-only rows, duplicates, missing source/timestamp, malformed prices, or multiple branches hidden under one postcode/chain. It does not establish that an offer is true; resolve warnings against its evidence before publication. Inspect every new/changed matched product and report coverage by postcode/store, not just total rows. Conditional price-only rows and unmatchable products may remain in the archive without being included in totals.

Generator data shape: `mealPackagePricesByArea[postcode][store][ingredient]`; `mealOfferMeta.profiles[postcode][store]`; `stores[postcode]`; `areas[postcode]`. New postcode selectors are generated at runtime. Legacy routes remain valid. Current UI has one branch per postcode/chain: if two branches appear, stop that combination and implement/select an explicit branch rather than blending prices. The parser intentionally fails closed here.

Check raw/cooked/canned food, cut/species, cheese type and processed-food name collisions. Leberkäse is not cheese; Apfeltasche is not an apple; Buttermilch is not butter; a meat-filled bread roll is not plain bread; tomato sauce is not fresh tomato. Never price cooked chicken using raw chicken or replace mozzarella with grill cheese. Do not add aliases solely to increase sale counts. Exact product forms matter more than matching numbers.

Use explicit `가격적용단위` to distinguish one pack, per 100 g, per kg and multi-buy. Do not convert variant ranges (150/200 g, 113–150 g), tablespoons, pieces or unspecified quantities into fabricated weights. Such rows must visibly require a quantity check. Offers are used as current prices only within their per-product validity dates. Sunday uploads for next week must not be called current Sunday discounts.

## Recipes

Read [recipe and application checks](references/verification.md). Locate the configured `01ontology-open` project/connection and verify its actual database/tenant before querying. Historically the local backing DB was named `01ontology` and the source corpus `recipe-full`; these are observations, not guarantees. Do not assume a repo name is a database name. Use read-only search/export, without importing or modifying the ontology DB.

Use actual source recipe IDs, titles, authors, quantities, ordered steps and URLs. Curated website records live in `ontology-recipe-details.js`; store variants are generated in `meal-planner-recipe-data.js`. IDs derive from sourceRecipeId, never array position. Do not claim the entire DB is searchable from the website: the website serves a selected static subset. Review which new sale ingredients lack menu coverage; select additional relevant source recipes where needed, without an arbitrary 30-recipe cap or duplicating one dish under new titles.

Preserve source quantity labels. Missing quantities remain missing. Preserve `sourceTimeText`; mark editorial duration estimates through `timeBasis`. Account for marinating/resting/chilling and ingredient preparation state. Paraphrase instructions accurately; do not paste source images or long verbatim instructions. Include essential ingredients used only in steps, with their source-step provenance. Label optional accompaniments as optional. Do not invent temperatures to make instructions look detailed. Dietary flags require evidence from all ingredients and the actual product.

Every selected recipe also needs editorial `recommendationProfile`: `primaryIngredients` (exact ingredient keys that define the dish), `family`, `method`, and `kind` (`main`, `side`, `breakfast`). Do not classify chicken curry's rice/garlic as its defining discounted protein. `meal-recommendations.js` prioritizes main-ingredient offers, varies family/method, keeps sides out of automatic meals, and demotes explicitly recorded eaten recipes for 14 days across stores. Never infer consumption from a plan or reset eaten history during a CSV update. `Hähnchen-Innenfilet` is a separate `닭안심` offer; breast recipes may show a candidate note but must not automatically charge that price as an exact breast match.

## Apply and verify

After evidence review, copy the dated CSV to `public/offers/` and regenerate:

```sh
node scripts/generate-meal-offers.mjs public/offers/INPUT.csv public/mohemeokji/meal-package-prices.js
node scripts/sync-meal-pages.mjs
node scripts/sync-meal-pages.mjs --check
node --test tests/mealShopping.test.mjs tests/mealWeekly.test.mjs tests/mealWeekPreflight.test.mjs tests/mealRecommendations.test.mjs
npm test
npm run build
npm run typecheck
```

The sync command copies canonical HTML/recipe wrapper to existing routes and changes asset URLs by content hash. Do not edit six pages independently or keep last week's cache key. Regression fixtures for known bad products remain pinned to the historical CSV; tests of the current catalog must use its actual source file rather than comparing next week's prices to last week.

Browser QA must exercise the real static paths. Vite may serve the homepage for `/mohemeokji/`; use the existing static preview or a temporary `python3 -m http.server PORT --bind 127.0.0.1 --directory public` and close it afterward. Test all postcode/store options, legacy routes, invalid query fallback, recipe details/source link, independent lunch/dinner plans, switching stores and reloading saved state, pantry exclusion, check/uncheck and next-week stale-price invalidation. Inspect both 390px mobile and desktop screenshots and console logs. Never claim mobile QA from one desktop screenshot. If the Mac is locked, report that UI verification is blocked; do not bypass the lock.

Existing feature limits: pantry is scoped per postcode/store, and adding separate recipes to a checklist takes the larger pack count to avoid duplicate additions; weekly basket selection is the supported way to sum measured needs. Do not claim cross-store stock inventory, partial pantry quantities, serving scaling, a complete receipt total with unknown prices, live DB search or all grocery needs fulfilled.

Commit/push/deploy only when the current task authorizes them (existing authorization counts). Stage only related paths. Do not directly deploy a dirty build containing unrelated work. Verify the deployed HTML and every changed asset against the committed bytes, then perform production read-only smoke checks. Report actual successful checks and unresolved limits; HTTP 200 or matching source IDs alone do not prove a recipe or price correct.
