# 모해먹지 완성 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build deterministic store-specific weekly recipe snapshots from `recipe-full`, rank them by verified goals, and replace the long-page planner with linked Plan and Shop workspaces.

**Architecture:** Weekly build scripts transform validated offers into immutable per-store snapshot files. The browser loads only the selected store snapshot, applies local pantry/history/preferences, and keeps auto and manual meal slots distinct. The UI consumes structured evidence and ranking facts instead of inferring eligibility from a global 52-recipe archive.

**Tech Stack:** Node.js ESM build scripts, PostgreSQL `01ontology` read-only exports, static HTML/CSS/JavaScript, Node test runner, browser QA.

**Spec:** `docs/superpowers/specs/2026-09-10-mohemeokji-complete-design.md`

## Global Constraints

- Keep every public recipe traceable to `recipe-full` source ID, title, author, URL, ordered ingredient labels/quantities, and approved Korean paraphrase.
- Exact primary offer identity, store/branch scope, validity period, cut, species, processing state, form, and composition are eligibility gates; substitutions cannot qualify or price a recipe.
- Never expose raw source steps, source images, partial totals as complete prices, unknown values as zero, or estimated nutrition as precise medical advice.
- The browser never queries PostgreSQL or live retailer APIs. It loads only immutable static snapshot files.
- Preserve manual meal choices, explicit manual empties, pantry state, and checklist completion across snapshots. Refresh only auto-origin slots.
- Maintain all existing legacy paths and generated entry-page byte equality.
- Work only in this isolated worktree. Do not stage Canvas, Cloudflare, package-lock, or unrelated files.
- Use Europe/Berlin for week boundaries and preserve the existing Sunday Aside schedule.

---

## File Structure

| Path | Responsibility |
|---|---|
| `scripts/data/ingredient-identities.json` | Canonical identity constraints for offer and recipe matching. |
| `scripts/lib/meal-snapshot-schema.mjs` | Snapshot IDs, canonical serialization, validation, manifest hashes. |
| `scripts/lib/select-store-recipes.mjs` | Deterministic quality/diversity selection from exported candidates. |
| `scripts/compile-meal-week.mjs` | Stages offer snapshot, DB candidates, selected recipes, manifest, and current pointer. |
| `scripts/export-store-recipe-candidates.sql` | Read-only exact-identity candidate export with numeric step ordering. |
| `scripts/lib/meal-ranking-facts.mjs` | Serving, price-comparability, nutrition-completeness, and mode fact contracts. |
| `scripts/data/nutrition-policy.json` | Versioned non-clinical nutrient targets and sources. |
| `data/mohemeokji/recipe-publication-registry.json` | Approved public paraphrase keyed by recipe ID plus source hash. |
| `public/mohemeokji/meal-data-loader.js` | Loads current manifest, selected location, and recipe details lazily. |
| `public/mohemeokji/meal-recommendations.js` | Eligibility, mode scoring, structured reasons, next-candidate selection. |
| `public/mohemeokji/meal-shopping.js` | Serving scaling, basket comparability, marginal cost, state v2 migration. |
| `public/mohemeokji/index.html` | Source bar, Plan/Shop contexts, mode controls, 14 slots, evidence UI. |
| `tests/mealSnapshot*.test.mjs` | Snapshot contract, selection, rights, runtime loading, and state migration tests. |

## Task 1: Canonical offer identity and snapshot contracts

**Files:**

- Create: `scripts/data/ingredient-identities.json`
- Create: `scripts/lib/meal-snapshot-schema.mjs`
- Create: `tests/offerIdentity.test.mjs`
- Create: `tests/mealSnapshotSchema.test.mjs`
- Modify: `scripts/generate-meal-offers.mjs`
- Modify: `tests/mealWeekly.test.mjs`

**Interfaces:**

- Produces `createOfferIdentity(row): OfferIdentity | null`, `createOfferId(row, sourceSha): string`, `canonicalJson(value): string`, `validateSnapshot(snapshot): ValidationResult`.
- `OfferIdentity` has `ingredientId`, `species`, `cut`, `processingState`, `form`, and `composition`.
- Later tasks consume `offersByIdentity[]`; they must not select an arbitrary first row for a Korean ingredient key.

- [ ] **Step 1: Write failing identity tests**

```js
test('keeps tenderloin, neck, loin, topside, breast, tenderloin, salmon and smoked salmon distinct',()=>{
  assert.notDeepEqual(createOfferIdentity(porkTenderloin),createOfferIdentity(porkNeck));
  assert.notDeepEqual(createOfferIdentity(rawChickenBreast),createOfferIdentity(chickenTenderloin));
  assert.notDeepEqual(createOfferIdentity(rawSalmon),createOfferIdentity(smokedSalmon));
});

test('does not select a second valid offer by array order',()=>{
  const snapshot=generateOfferSnapshot(twoValidPorkOffers);
  assert.equal(snapshot.offers.length,2);
  assert.notEqual(snapshot.offers[0].offerId,snapshot.offers[1].offerId);
});
```

- [ ] **Step 2: Run the new tests and verify they fail because the contract does not exist**

Run: `node --test tests/offerIdentity.test.mjs tests/mealWeekly.test.mjs`

Expected: failure for missing identity/snapshot exports.

- [ ] **Step 3: Define identity data and minimal contract implementation**

```js
export function createOfferId(row, sourceSha) {
  return sha256(canonicalJson({
    sourceSha, postcode:row['우편번호'], chain:chainName(row['체인']),
    branch:row['지점'], sourceRow:row.__sourceRow,
    product:compact(row['상품명']), variant:compact(row['변형정보']),
    validFrom:parsePeriod(row['행사기간']).validFrom,
    validThrough:parsePeriod(row['행사기간']).validThrough
  }));
}
```

Keep all valid identity-resolved offers in `offersByIdentity`. Retain `preferredPricingOfferId` only for existing basket totals.

- [ ] **Step 4: Run contract tests and existing weekly tests**

Run: `node --test tests/offerIdentity.test.mjs tests/mealSnapshotSchema.test.mjs tests/mealWeekly.test.mjs`

Expected: all pass.

- [ ] **Step 5: Commit**

```bash
git add scripts/data/ingredient-identities.json scripts/lib/meal-snapshot-schema.mjs scripts/generate-meal-offers.mjs tests/offerIdentity.test.mjs tests/mealSnapshotSchema.test.mjs tests/mealWeekly.test.mjs
git commit -m "feat(meal): add canonical offer identity contracts"
```

## Task 2: Exact DB discovery and publication candidate export

**Files:**

- Create: `scripts/export-store-recipe-candidates.sql`
- Modify: `scripts/find-store-recipe-candidates.mjs`
- Modify: `scripts/find-store-recipe-candidates.sql`
- Modify: `scripts/export-meal-recipes.sql`
- Modify: `tests/storeRecipeCandidates.test.mjs`
- Create: `tests/mealRecipeExport.test.mjs`

**Interfaces:**

- Produces `discoverStoreRecipeCandidates({offers, db, tenant, perIdentityLimit:500, totalLimit:5000})`.
- Candidate output includes `recipeId`, source metadata, rating string and parsed number, `reviewCount`, source serving text, ordered ingredient quantities, ordered step metadata, and `matches[]` containing exact `offerId` plus relation.
- Candidate eligibility requires identity matching; title terms only add ranking evidence.

- [ ] **Step 1: Write failing discovery tests**

```js
test('a title mention alone does not qualify a candidate',()=>{
  assert.equal(matchCandidate(titleOnlyChicken,rawChickenOffer),null);
});

test('candidate export orders source steps by numeric stepNumber',()=>{
  assert.deepEqual(exported.steps.map(step=>step.ordinal),[1,2,3]);
});

test('per-identity overflow is recorded instead of silently truncating',()=>{
  assert.equal(result.overflow['닭가슴살'].total,501);
  assert.equal(result.overflow['닭가슴살'].returned,500);
});
```

- [ ] **Step 2: Run the new tests and verify red**

Run: `node --test tests/storeRecipeCandidates.test.mjs tests/mealRecipeExport.test.mjs`

Expected: missing discovery/ordered-export behavior fails.

- [ ] **Step 3: Implement read-only discovery**

Use `BEGIN READ ONLY` and a local statement timeout. Query candidate IDs and metadata first, then fetch full facts for the selected union. Read rating from the stored string property with numeric validation, never from an unrelated typed column. Record `total`, `returned`, and overflow per identity.

- [ ] **Step 4: Verify against the supplied weekly CSV**

Run: `node scripts/find-store-recipe-candidates.mjs public/offers/supermarket_food_offers_2026-09-07.csv --output /tmp/mohemeokji-candidates.json --database 01ontology --limit 500`

Expected: output groups candidates by real postcode/store/product and reports zero-candidate and overflow state.

- [ ] **Step 5: Run discovery tests**

Run: `node --test tests/storeRecipeCandidates.test.mjs tests/mealRecipeExport.test.mjs`

Expected: all pass.

- [ ] **Step 6: Commit**

```bash
git add scripts/export-store-recipe-candidates.sql scripts/find-store-recipe-candidates.mjs scripts/find-store-recipe-candidates.sql scripts/export-meal-recipes.sql tests/storeRecipeCandidates.test.mjs tests/mealRecipeExport.test.mjs
git commit -m "feat(meal): discover exact store recipe candidates"
```

## Task 3: Deterministic selection and reviewed weekly snapshot compiler

**Files:**

- Create: `scripts/lib/select-store-recipes.mjs`
- Create: `scripts/lib/validate-meal-snapshot.mjs`
- Create: `scripts/compile-meal-week.mjs`
- Create: `data/mohemeokji/recipe-publication-registry.json`
- Create: `tests/mealSnapshotSelection.test.mjs`
- Create: `tests/mealSnapshotRights.test.mjs`
- Modify: `scripts/prepare-meal-week.mjs`
- Modify: `docs/skills/mohemeokji-weekly/SKILL.md`

**Interfaces:**

- `selectStoreRecipes({store, offers, candidates, policy}): {recipes, coverage, warnings}`
- `compileMealWeek({csvPath, outputDir, db, tenant, policyVersion, registryPath}): Manifest`
- Public recipe requires `rights.approved === true`, a matching source hash, exact offer match, and source completeness.

- [ ] **Step 1: Write failing selection tests**

```js
test('Bayesian review scoring demotes a 5.0 recipe with one review below a 4.9 recipe with 400 reviews',()=>{
  assert.equal(rankByQuality([thinFiveStar,provenFourNine])[0].recipeId,'proven');
});

test('selection covers distinct offer identities before filling extra chicken recipes',()=>{
  const selected=selectStoreRecipes(fixture);
  assert.ok(selected.recipes.some(r=>r.primaryIngredientIds.includes('소고기등심')));
});

test('unapproved or source-hash-stale paraphrases cannot enter a public snapshot',()=>{
  assert.equal(selected.recipes.some(r=>r.recipeId==='stale'),false);
});
```

- [ ] **Step 2: Run tests and verify red**

Run: `node --test tests/mealSnapshotSelection.test.mjs tests/mealSnapshotRights.test.mjs`

Expected: missing selector/compiler behavior fails.

- [ ] **Step 3: Implement quality and diversity selection**

Use the spec weights: adjusted rating 65%, log-scaled review popularity 25%, source completeness 10%. Set prior strength to the discovery population review-count median. Select up to 48 recipes per store with 36 main, 6 breakfast, and 6 side caps; cover each qualifying main offer with up to two recipes first; then enforce source ID, title, identity, family, method, author, and per-primary-identity caps.

- [ ] **Step 4: Implement immutable output**

Write `current.json`, week/snapshot `manifest.json`, `coverage.json`, per-location files, recipe index, and content-hashed recipe detail files. Canonically sort all arrays/keys, use supplied collection/export timestamps only, write twice to separate staging directories, and fail if bytes differ.

- [ ] **Step 5: Seed the registry from the existing 52 reviewed records**

Store only approved paraphrase text, source ID, transform version, and source hash. Newly selected records without approval remain in the review report and cannot publish.

- [ ] **Step 6: Shadow compile the current fixture**

Run: `node scripts/compile-meal-week.mjs public/offers/supermarket_food_offers_2026-09-07.csv --output-dir /tmp/mohemeokji-shadow --database 01ontology --tenant recipe-full --registry data/mohemeokji/recipe-publication-registry.json`

Expected: 11 isolated location files, a complete manifest, candidate coverage, and no raw source instruction text in public output.

- [ ] **Step 7: Run compiler tests**

Run: `node --test tests/mealSnapshotSchema.test.mjs tests/mealSnapshotSelection.test.mjs tests/mealSnapshotRights.test.mjs`

Expected: all pass.

- [ ] **Step 8: Commit**

```bash
git add scripts/lib/select-store-recipes.mjs scripts/lib/validate-meal-snapshot.mjs scripts/compile-meal-week.mjs data/mohemeokji/recipe-publication-registry.json scripts/prepare-meal-week.mjs docs/skills/mohemeokji-weekly/SKILL.md tests/mealSnapshotSelection.test.mjs tests/mealSnapshotRights.test.mjs
git commit -m "feat(meal): compile reviewed store recipe snapshots"
```

## Task 4: Runtime snapshot loader and state-v2 migration

**Files:**

- Create: `public/mohemeokji/meal-data-loader.js`
- Modify: `public/mohemeokji/meal-planner-recipe-data.js`
- Modify: `public/mohemeokji/meal-shopping.js`
- Modify: `public/mohemeokji/index.html`
- Modify: `scripts/sync-meal-pages.mjs`
- Create: `tests/mealSnapshotRuntime.test.mjs`
- Modify: `tests/mealShopping.test.mjs`

**Interfaces:**

- `loadCurrentSnapshot(fetcher): Promise<SnapshotManifest>`
- `loadLocationSnapshot(manifest, {postcode, store, branchId}, fetcher): Promise<LocationSnapshot>`
- `restorePlansV2(serialized, context): {plans, migrated, stale}`
- Slot contract: `{recipeId, origin:'auto'|'manual', dismissedRecipeIds:string[]}`.

- [ ] **Step 1: Write failing runtime and migration tests**

```js
test('loads only the selected location and opens recipe details by sourceRecipeId',async()=>{
  const loaded=await loadLocationSnapshot(manifest,{postcode:'52064',store:'EDEKA',branchId:'vieler'},fetcher);
  assert.equal(loaded.recipes.length,48);
  assert.equal(fetcher.calls.includes('/data/.../locations/44369/...'),false);
});

test('migrates legacy slots to manual and refreshes only auto slots after snapshot rollover',()=>{
  const restored=restorePlansV2(legacyPlan,newSnapshotContext);
  assert.equal(restored.plans['저녁'].mon.origin,'manual');
  assert.equal(restored.plans['저녁'].tue.recipeId,newAutoId);
});
```

- [ ] **Step 2: Run tests and verify red**

Run: `node --test tests/mealSnapshotRuntime.test.mjs tests/mealShopping.test.mjs`

Expected: loader and state-v2 APIs are absent.

- [ ] **Step 3: Implement lazy static loading**

Keep legacy data path behind a temporary `?snapshot=legacy` fallback. Default to `current.json`, then location data, then recipe details on drawer open. Do not fetch the audit CSV, other stores, or database data in the browser.

- [ ] **Step 4: Implement state v2**

Mark list additions, drag/drop, accepted meals, clears, and explicit removals as manual. Mark auto-plan and X replacement slots as auto. Preserve manual old recipe detail through retained recipe shards. Invalidate only snapshot-bound prices/packs/quantity overrides.

- [ ] **Step 5: Run runtime tests**

Run: `node --test tests/mealSnapshotRuntime.test.mjs tests/mealShopping.test.mjs`

Expected: all pass.

- [ ] **Step 6: Commit**

```bash
git add public/mohemeokji/meal-data-loader.js public/mohemeokji/meal-planner-recipe-data.js public/mohemeokji/meal-shopping.js public/mohemeokji/index.html scripts/sync-meal-pages.mjs tests/mealSnapshotRuntime.test.mjs tests/mealShopping.test.mjs
git commit -m "feat(meal): load store snapshots and migrate saved plans"
```

## Task 5: Goal-aware recommendation facts and modes

**Files:**

- Create: `scripts/lib/meal-ranking-facts.mjs`
- Create: `scripts/data/nutrition-policy.json`
- Modify: `public/mohemeokji/meal-recommendations.js`
- Modify: `public/mohemeokji/meal-shopping.js`
- Modify: `public/mohemeokji/index.html`
- Modify: `tests/mealRecommendations.test.mjs`
- Modify: `tests/mealShopping.test.mjs`

**Interfaces:**

- `evaluateRecipeForMode(recipe, context, mode): {eligible, scoreComponents, reasons, readiness}`
- Modes: `balanced`, `value`, `nutrition`, `diet`.
- Basket returns `costStatus:'complete'|'partial'|'unknown'`, `knownSubtotalCents`, `unknownItemKeys`, `quantityCheckKeys`, `savingsStatus`.

- [ ] **Step 1: Write failing mode tests**

```js
test('value mode excludes a recipe with unknown package price instead of treating it as zero',()=>{
  assert.equal(evaluateRecipeForMode(partialPriceRecipe,ctx,'value').eligible,false);
});

test('nutrition and diet reject incomplete nutrient quantities',()=>{
  assert.equal(evaluateRecipeForMode(partialNutritionRecipe,ctx,'nutrition').eligible,false);
  assert.equal(evaluateRecipeForMode(partialNutritionRecipe,ctx,'diet').eligible,false);
});

test('replacing a weekly slot skips dismissed and already used recipes',()=>{
  assert.equal(nextCandidate(pool,{dismissedRecipeIds:['a'],usedRecipeIds:['b']}).recipeId,'c');
});
```

- [ ] **Step 2: Run mode tests and verify red**

Run: `node --test tests/mealRecommendations.test.mjs tests/mealShopping.test.mjs`

Expected: mode/readiness/next-candidate APIs fail.

- [ ] **Step 3: Implement complete-data gates and score components**

Keep current exact-offer, main-only, history, family, and method gates for every mode. `value` compares only complete target-serving package baskets; `nutrition` and `diet` require source servings plus complete kcal/protein/fiber/sodium evidence. Render factual reasons, never a synthetic score or silent balanced fallback.

- [ ] **Step 4: Add accessible persisted controls**

Add a native radio group for `균형`, `가성비`, `영양`, `다이어트` and a 1–6 serving select defaulting to 2. Store `choi01-recommendation-preferences-v1`. Mode/serving changes clear unaccepted recommendation state and refresh auto slots only.

- [ ] **Step 5: Implement slot X replacement**

The action adds the current ID to that slot’s maximum-20 dismissed list, finds the next mode-eligible recipe excluding used/dismissed IDs, replaces the slot as `origin:'auto'`, and recalculates totals. When no candidate remains, it leaves the slot empty with an explicit message. Provide a distinct `비우기` action.

- [ ] **Step 6: Run recommendation and shopping tests**

Run: `node --test tests/mealRecommendations.test.mjs tests/mealShopping.test.mjs`

Expected: all pass.

- [ ] **Step 7: Commit**

```bash
git add scripts/lib/meal-ranking-facts.mjs scripts/data/nutrition-policy.json public/mohemeokji/meal-recommendations.js public/mohemeokji/meal-shopping.js public/mohemeokji/index.html tests/mealRecommendations.test.mjs tests/mealShopping.test.mjs
git commit -m "feat(meal): add goal-aware recommendation modes"
```

## Task 6: Plan and Shop workspace redesign

**Files:**

- Modify: `public/mohemeokji/index.html`
- Create: `tests/mealPlannerUi.test.mjs`
- Modify: `tests/mealShopping.test.mjs`
- Modify: `scripts/sync-meal-pages.mjs`

**Interfaces:**

- Top-level context `plan | shop`.
- Plan has `SourceBar`, `GoalSelector`, `RecipeLedger`, `WeekPlanner`, `PantryEditor`.
- Shop has `ShoppingProgress`, grouped unchecked items, and completed items.
- Meal slots expose button paths for add, replace, remove, and detail; drag/drop remains optional.

- [ ] **Step 1: Write failing structural and accessibility tests**

```js
test('planner exposes fourteen named meal slots and a keyboard replacement action',()=>{
  assert.match(html,/월요일 점심 메뉴 칸/);
  assert.match(html,/일요일 저녁 메뉴 칸/);
  assert.match(html,/다음 후보 보기/);
});

test('mode controls are a labelled radio group and filters expose aria-pressed',()=>{
  assert.match(html,/role="radiogroup"/);
  assert.match(html,/aria-pressed/);
});
```

- [ ] **Step 2: Run tests and verify red**

Run: `node --test tests/mealPlannerUi.test.mjs tests/mealShopping.test.mjs`

Expected: existing one-column planner lacks 14-slot and accessible mode controls.

- [ ] **Step 3: Implement Plan context**

Build a desktop recipe ledger plus 7×2 week table. On mobile, expose persistent `메뉴`, `식단`, `장보기` navigation with one primary task per screen. Show German product, pack, price, branch/week, source status, mode reason, cost completeness, and nutrition completeness on every acted-on recipe.

- [ ] **Step 4: Implement Shop context**

Make shopping a focused checklist with large check controls, remaining count/cost, grouped items, and a collapsed completed section. Keep edits connected to the same plan and pantry state.

- [ ] **Step 5: Implement complete state presentation**

Cover loading, zero recipes, limited pool, partial evidence, expired snapshot, old saved plan, corrupt storage, zero search results, and no-next-candidate without hiding facts or borrowing another store’s data.

- [ ] **Step 6: Run UI tests and sync check**

Run: `node --test tests/mealPlannerUi.test.mjs tests/mealShopping.test.mjs && node scripts/sync-meal-pages.mjs --check`

Expected: all pass and six entry pages are byte-identical.

- [ ] **Step 7: Commit**

```bash
git add public/mohemeokji/index.html tests/mealPlannerUi.test.mjs tests/mealShopping.test.mjs scripts/sync-meal-pages.mjs public/mohemeokji/40468DNETTO public/mohemeokji/40474DEDEKA public/mohemeokji/44369DONETTO public/mohemeokji/52062NETTO public/mohemeokji/52064EDEKA
git commit -m "feat(meal): separate planning and shopping workspaces"
```

## Task 7: End-to-end evidence, performance, weekly handoff, and release

**Files:**

- Create: `tests/mealSnapshotE2E.test.mjs`
- Create: `scripts/verify-meal-snapshot.mjs`
- Modify: `docs/skills/mohemeokji-weekly/SKILL.md`
- Modify: `docs/skills/mohemeokji-weekly/references/verification.md`
- Modify: `docs/skills/mohemeokji-weekly/references/aside-prompt.md`
- Modify: `public/mohemeokji/README.md`

**Interfaces:**

- `verifyMealSnapshot({snapshotDir, previousSnapshotDir}): VerificationReport`.
- Report includes schema, manifest hash, source lineage, two-build comparison, all location counts, zero-candidate offers, asset sizes, and errors.

- [ ] **Step 1: Write failing end-to-end verification tests**

```js
test('rejects a snapshot when current.json points to a missing or hash-mismatched artifact',()=>{
  assert.throws(()=>verifyMealSnapshot(brokenSnapshot),/manifest hash/);
});

test('checks every manifest location and mode without borrowing another store',()=>{
  const report=verifyMealSnapshot(fixture);
  assert.equal(report.locationsChecked,11);
  assert.equal(report.errors.length,0);
});
```

- [ ] **Step 2: Run tests and verify red**

Run: `node --test tests/mealSnapshotE2E.test.mjs`

Expected: verification API is absent.

- [ ] **Step 3: Implement verifier and weekly runbook**

Verify snapshot schema/lineage/bytes, offer and recipe counts, asset budget, legacy route synchronization, and previous-snapshot rollback pointer. Update Aside collection to collect `coverage.csv` and same-product normal prices when available without inventing them.

- [ ] **Step 4: Run full repository verification**

Run: `npm test && npm run build && npm run typecheck && node scripts/sync-meal-pages.mjs --check`

Expected: all pass.

- [ ] **Step 5: Browser QA and production promotion**

Run local browser checks at `1280×900`, `390×844`, and `320×844` for all 11 locations, four modes, lunch/dinner, X replacement, saved-plan rollover, pantry and shopping flow. Compare deployed bytes before switching `current.json`; preserve the previous two snapshots for pointer rollback.

- [ ] **Step 6: Commit**

```bash
git add tests/mealSnapshotE2E.test.mjs scripts/verify-meal-snapshot.mjs docs/skills/mohemeokji-weekly public/mohemeokji/README.md
git commit -m "test(meal): verify weekly snapshot release evidence"
```

## Plan Self-Review

- Spec coverage: Tasks 1–3 implement exact identity, broad discovery, candidate quality, paraphrase approval, snapshots, and deterministic compilation. Tasks 4–6 implement runtime loading, state migration, modes, serving scaling, X replacement, and the Plan/Shop UI. Task 7 implements weekly operations, evidence, browser QA, performance, and rollback.
- Placeholder scan: no unresolved markers, deferred implementation references, or unnamed interfaces remain.
- Interface consistency: Task 1 produces identities/snapshot validation; Task 2 consumes identities and produces candidates; Task 3 produces location/recipe snapshots; Task 4 loads snapshots/state; Task 5 ranks loaded recipe facts; Task 6 renders the state; Task 7 verifies all artifacts.

## Execution Strategy

Execute Tasks 1–7 with Subagent-Driven Development in this worktree. Tasks remain sequential because later tasks consume the contracts and artifacts produced by earlier tasks. Use one implementer and one task review per task, then a whole-branch review before merge.
