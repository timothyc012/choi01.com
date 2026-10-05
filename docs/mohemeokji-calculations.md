# Recipe nutrition and purchase evidence

`scripts/enrich-meal-calculations.mjs` calculates evidence from already reviewed local JSON inputs. It does not fetch a website, infer an ingredient alias, approve a source, change a database, publish a snapshot, or overwrite a registry. Its output is a **new private directory**. The normal weekly compilation and approval process still determines what can be published. Exact calculations are the default; the owner's explicitly enabled estimate policy can also use reviewed reference conversions and disclosed proxy-food scenarios.

The calculator has no built-in food or price catalog. The values in `tests/mealCalculations.test.mjs` are deliberately synthetic fixtures, not nutrition or price facts to publish.

## Run

```sh
node scripts/enrich-meal-calculations.mjs \
  --registry /private/tmp/reviewed-registry.json \
  --recipes /private/tmp/current-candidates.json \
  --foods /private/tmp/reviewed-food-records.json \
  --mappings /private/tmp/reviewed-ingredient-mappings.json \
  --prices /private/tmp/reviewed-branch-prices.json \
  --contexts /private/tmp/purchase-contexts.json \
  --output-dir /private/tmp/new-meal-calculation-review
```

`--registry`, `--recipes`, `--foods`, `--mappings`, and `--output-dir` are required. Prices and contexts are optional; without them, no complete basket is generated. The output parent must exist, and the output directory must not exist. Resolved paths containing `public`, `.git`, or `.aws` are rejected, including paths that reach those directories through a parent symlink. Files use mode `0600` inside a `0700` directory.

Add `--allow-estimated-nutrition` to opt into reviewed estimated nutrition. The library equivalent is `enrichMealRegistry({...,allowEstimatedNutrition:true})`; nonboolean flags are rejected. `calculateRecipeNutrition()` continues to require exact measured inputs. `calculateEstimatedRecipeNutrition()` first returns that same exact result when it is complete, and otherwise tries only the explicitly reviewed estimate paths below.

Outputs are `calculation-audit.json` and `recipe-publication-registry.json`. Inputs remain unchanged. The audit and new registry retain complete, estimated (when enabled), partial, and unknown nutrition for approved entries that match the current source recipe hash. Partial coverage and missing labels can therefore be displayed without presenting an incomplete sum as a full meal total. Only complete scoped basket evidence enters the new registry. Old `nutritionFacts`, `basketFacts`, and `basketEvidenceByContext` are cleared before recalculation so that a missing current source cannot retain an earlier completion claim.

## Inputs

All catalogs use `schemaVersion:1`. Source review is an upstream responsibility: `reviewed:true`, a nonempty `reviewedBy`, and a real `reviewedAt` date are required on each used food record, mapping, and price. A hash pins the exact reviewed source bytes; the calculator never manufactures a review receipt or checks an unavailable source by treating its label as proof.

### Current recipes

`--recipes` accepts `{schemaVersion:1,candidates:[...]}` or `{schemaVersion:1,recipes:[...]}`. Recipe fields follow the existing candidate contract:

| Field | Meaning |
| --- | --- |
| `sourceRecipeId` | Original recipe identifier |
| `sourceUrl` | HTTPS recipe source |
| `title`, `author` | Current source facts included in the content hash |
| `sourceServingText` | A single explicit positive integer such as `2인분` |
| `ingredients` | Every source ingredient, including seasoning, with unique positive integer `ordinal`, `ingredient` (or `label`), and `quantity` |
| `steps` | Current source steps with `ordinal`, `name`, and `instruction` where available |

The calculator recomputes `sourceContentHash(recipe)` with the same canonical source-fact function as the publication selector. A supplied old `sourceContentHash` does not replace this calculation. If `sourceServings` is present, it must agree with `sourceServingText`. Ranges, omitted servings, and guessed servings remain unknown. Listed ingredients are never silently dropped because a seasoning seems small or a source calls it optional.

### Food records

`--foods` is `{schemaVersion:1,records:[...]}`. Each used record requires:

| Field | Required value |
| --- | --- |
| `foodId`, `version`, `preparation` | Exact nonempty identifiers; preparation is not inferred from a generic name |
| `sourceURL`, `sourceSha256` | HTTPS source and its lowercase 64-character SHA-256 |
| `basis` | `{amount:100,unit:'g',portion:'edible'}` |
| `reviewed`, `reviewedBy`, `reviewedAt` | Upstream review receipt |
| `nutrients` | `kcal`, `proteinGrams`, `fiberGrams`, `sodiumMg`, all on the stated 100g edible basis |

Each nutrient is a measurement object:

| Status | Representation | Calculation |
| --- | --- | --- |
| `numeric` | `{status:'numeric',value:12.3,origin:'source method or origin'}` | Known nonnegative finite value |
| `logical-zero` | `{status:'logical-zero',value:0,origin:'source logical-zero marker'}` | Known source-backed zero |
| `trace` | `{status:'trace',value:null,origin:'source trace marker',upperBound:...}` | Preserved as trace; no exact total |
| `missing` | `{status:'missing',value:null,origin:'source missing marker'}` | Unknown; no exact total |

An optional nonnegative finite `upperBound` is retained for trace values. A trace is never changed to zero. A numeric value without an origin, a negative/nonfinite value, or a zero marker with a nonzero value is invalid. Per-portion, per-100ml, and as-purchased basis records cannot be silently treated as 100g edible records.

### Ingredient mappings

`--mappings` is `{schemaVersion:1,mappings:[...],recipeReviews:[...]}`. Each source ingredient needs one exact reviewed mapping:

```text
sourceRecipeId, sourceContentHash, ingredientOrdinal,
ingredientLabel, quantityText,
foodId, foodVersion, foodSourceSha256, preparation,
matchType:'exact', grams,
purchaseAmount:{amount,unit:'g'|'ml'},
quantityEvidence:{method,sourceURL,sourceSha256,...},
reviewed:true, reviewedBy, reviewedAt
```

`ingredientLabel` and `quantityText` must equal the current source ingredient fields; whitespace/name aliases do not substitute for an exact review. `foodId`, `foodVersion`, `foodSourceSha256`, and `preparation` must identify exactly one reviewed record. Competing mappings or duplicate matching food records are unresolved.

`quantityEvidence.method:'source-quantity'` accepts only a single explicit metric amount, for example `100g`, `0.5kg`, or `100ml`. The evidence URL and hash must equal the current recipe URL and content hash. Grams must equal the explicit source mass. A purchase amount must equal the explicit source mass or volume. There is no tablespoon, piece, range, or density conversion in this path.

`quantityEvidence.method:'reviewed-measurement'` requires a separate reviewed measurement source URL/hash and explicit evidence fields `grams` and/or `purchaseAmount`. The corresponding mapping fields must equal those recorded measurements. This supports a measured edible weight or purchase quantity without putting an assumed spoon/piece weight in the calculator. A volume purchase amount can price a volume pack, but it cannot produce nutrients without separately evidenced grams. Missing quantities stay unknown.

Each recipe additionally needs exactly one explicit **whole-source ingredient inventory review** in `recipeReviews`:

```text
sourceRecipeId, sourceContentHash, sourceURL, sourceSha256,
reviewed:true, reviewedBy, reviewedAt,
complete:true, stepIngredientsChecked:true,
ingredientOrdinals:[every current source ingredient ordinal]
```

The source URL and both hash fields must match the current recipe, and the ordinal list must match the complete source ingredient list. This is a human/source review receipt, not an automatically generated claim that a text heuristic found every ingredient. A step can introduce protein or another ingredient absent from the source's ingredient table. The reviewer must resolve such a source inventory before setting `complete:true`. Without this receipt the calculator retains partial known sums and never enables complete nutrition/basket modes. The existing `unquantifiedActionIngredients` heuristic additionally blocks known unlisted or unquantified oil/seasoning; it is not treated as proof that all ingredients were found.

The receipt may explicitly identify a separately prepared accompaniment in `exclusions:[{ingredientLabel,stepOrdinals,disclosure}]`. Its label cannot be a required listed ingredient, and its step numbers must exist in the current recipe. This never removes any listed ingredient from calculation. Nutrition output `calculationScope:{disclosures,excludedAccompaniments}` retains only the public disclosure, label, and step numbers. For example, a pork recipe can state that a separately prepared cucumber salad is excluded; its numbers must not be described as nutrition of that accompanying dish or the whole meal set. Private notes and actor names are not copied into this scope.

### Optional reviewed nutrition estimates

Estimates still need the current source hash, exact ingredient ordinal/label/quantity, reviewed food record with a 100g edible basis, all four usable nutrients, a complete ingredient inventory receipt, and known source servings. The estimate option never treats `약간`, a missing nutrient, or a trace marker as an implicit zero.

A mapping can use `matchType:'equivalent'` only with a reviewed `equivalence` object containing `basis`, `variationNote`, `sourceURL`, `sourceSha256`, and the usual review receipt. Its source hash must match the selected food record's source hash. The basis describes the specific food proxy; the variation note explains differences whose numerical error has not been measured. The lineage records `mappingStatus:'equivalent'`, and the public assumptions identify the proxy instead of describing it as an exact food match.

An unmeasured piece, spoon, or volume may use a mapping's `quantityConversion`:

```text
kind:'official-reference', referenceName,
sourceURL, sourceSha256, reviewed:true, reviewedBy, reviewedAt,
ingredientLabel, foodId, foodVersion, foodSourceSha256, preparation,
sourceAmount, sourceUnitLabel, referenceAmount, referenceUnitLabel,
edibleGrams:{central,min,max}, basis, rangeBasis
```

The conversion must identify the exact mapped ingredient and food/preparation. `sourceAmount` and `sourceUnitLabel` must parse the current source quantity exactly, including simple fractions. `referenceAmount` is positive; the named reference must document its own edible mass and scenario bounds. The final ingredient mass scales by `sourceAmount/referenceAmount`. `central`, `min`, and `max` must be finite, nonnegative, ordered `min <= central <= max`, with a positive reference central mass. A single stated reference can use a point scenario; it does not justify an invented universal percentage error. Different reference sizes may supply explicit lower/upper scenarios. Unit names are not mapped through an automatic generic alias table.

The explicitly approved first-party Semie example additionally supports `kind:'published-recipe-scenario'`. It requires the reviewed `semie.cooking` source, `pointScenario:true`, point masses (`min=central=max`), and a nonempty `unquantifiedUncertainty` list. It is exposed as `published-recipe-quantity-scenario` with method `published-recipe-scenario`, not as a government reference conversion. A manufacturer's recipe quantity transferred to another recipe is a chosen model; actual stalk size and trimming differences remain unbounded. No arbitrary blog weights are accepted by this published-scenario path. These quantities do not modify basket purchase mass or yield.

A reviewed food nutrient may use `status:'range'` with `central`, `min`, `max`, `origin`, `rangeBasis`, a source URL/hash, and its own review receipt. The range source hash must match the reviewed food source. All nutrient bounds are on the same 100g edible basis. Missing or trace values stay unknown unless a separately reviewed numeric range or explicit user scenario establishes usable bounds.

For an explicitly supplied owner assumption, `userQuantityScenario` accepts `edibleGrams:{central,min,max}`, while `nutrientScenarios.<field>` accepts `valuesPer100g:{central,min,max}`. They require `authorized:true`, `providedBy`, `providedAt`, a visible `label`, and exact recipe/ingredient scope fields. The user receipt's `sourceSha256` hashes this canonical JSON body:

```text
{sourceRecipeId,sourceContentHash,ingredientOrdinal,ingredientLabel,
 quantityText,nutrient:null|nutrientField,label,
 edibleGrams:range|null,valuesPer100g:range|null}
```

Changing the numeric bounds, recipe, original ingredient quantity, or nutrient invalidates the receipt. The calculator does not create or authorize this statement. An unknown amount such as `약간` remains unknown until the owner supplies that specific labelled assumption. Names and private authorization details remain in the private lineage, not the public assumption objects.

### Branch prices and contexts

`--prices` is `{schemaVersion:1,prices:[...]}`. Every selected offer or ordinary price requires:

```text
priceId, kind:'offer'|'ordinary', currency:'EUR',
postcode, store, branchId, validFrom, validThrough,
foodId, foodVersion, foodSourceSha256, preparation,
priceCents, pack:{amount,unit:'g'|'ml'}, conditions:'',
sourceURL, sourceSha256, reviewed:true, reviewedBy, reviewedAt
```

Offer prices additionally require `autoPriceEligible:true`. Ordinary prices have the same evidence, identity, branch, and date requirements as offers. Nonempty conditions block automatic price calculation, including app/card prices. Cents must be nonnegative safe integers, and packs must have a numeric positive finite mass/volume. No count-based pack, range, generic shelf price, other branch price, other currency, or guessed pack is substituted.

`--contexts` is `{schemaVersion:1,contexts:[{postcode,store,branchId,date,targetServings},...]}`. All five fields must match exactly; `date` is a real ISO date and `targetServings` is an integer from 1 through 1000. Duplicate contexts are rejected. Price validity includes both endpoints.

Required purchase amounts are scaled by `targetServings/sourceServings`. Repeated ingredients with the same exact food identity, preparation, and unit are summed before rounding to whole packs. Decimal amounts use rational arithmetic until pack rounding, avoiding an extra pack caused by floating-point error. When several eligible packs exist, the lowest whole-pack purchase subtotal wins with deterministic `priceId` tie-breaking. A duplicated price ID is ambiguous and is not selected.

## Results and compiler integration

`nutritionFacts` has:

```text
schemaVersion:1, calculationVersion:'reviewed-ingredient-calculation-v1',
source:'reviewed-food-record-calculation-v1', basis:'ingredient-inputs',
sourceRecipeId, sourceContentHash, sourceURL, sourceServings,
status:'complete'|'partial'|'unknown',
knownTotals:{kcal,proteinGrams,fiberGrams,sodiumMg},
perServing:{kcal,proteinGrams,fiberGrams,sodiumMg}|null,
inventoryReview, coverage, missingIngredients, components,
missingIngredientOrdinals, missingNutrients, issues, lineage,
calculationSha256
```

Only all-ingredient, all-four-nutrient, exact measured-mass coverage with known original servings is `complete`. An incomplete result retains known contributions for inspection; a total with no known contribution for that nutrient is `null`. Partial and unknown results always have `perServing:null` and must not enable nutrition or diet modes. They remain in the new registry so the UI can display what is missing.

`coverage` is `{resolvedIngredientCount,totalIngredientCount,inventoryReviewed}`. `missingIngredients` is an array of `{ingredientOrdinal:number|null,ingredientLabel,reason}`. Unlisted step ingredients count as unresolved; the inventory review flag reflects the explicit receipt validation.

Every nutrition output includes public-safe `components`, one per source ingredient and any detected unlisted ingredient:

```text
{ingredientOrdinal:number|null,ingredientLabel,quantityText:string|null,
 grams:number|null,gramsRange:{min,max}|null,
 per100g:{kcal:number|null,proteinGrams:number|null,
          fiberGrams:number|null,sodiumMg:number|null},
 per100gRange:{kcal:{min,max}|null,proteinGrams:{min,max}|null,
              fiberGrams:{min,max}|null,sodiumMg:{min,max}|null},
 foodMatchType:'exact'|'equivalent'|null}
```

These components independently validate the reviewed food mapping, even when source mass is unknown. Unknown food records produce four `null` nutrient values; source logical zeros remain genuine zeros. Missing source nutrients remain `null`, including when a separate user nutrient assumption was used in an estimated total. The UI may recompute a local **user-input estimate** after explicit gram edits only when every required component and all four source nutrients are usable and the inventory was reviewed. Gram input cannot fill a missing food or sodium/fiber value. The original calculation and its hash stay unchanged.

An enabled, fully covered estimated result uses `status:'estimated'`, `source:'reviewed-estimated-food-calculation-v1'`, and `calculationVersion:'reviewed-estimated-ingredient-calculation-v1'`. It adds:

```text
perServing:{kcal,proteinGrams,fiberGrams,sodiumMg},
perServingRange:{eachNutrient:{min,max}},
centralScenarioPerServing:{kcal,proteinGrams,fiberGrams,sodiumMg},
uncertaintyKind:'reviewed-scenario-interval', uncertaintyNote,
assumptionsComplete:true, assumptions, unquantifiedUncertainty
```

The per-serving display value is the midpoint of the supplied lower/upper scenarios. The original reference's central scenario is retained separately; with asymmetric bounds these values can differ. Nonnegative ingredient-mass and nutrient bounds propagate into whole-recipe lower/upper sums, then divide by source servings. Bounds describe only the reviewed or owner-supplied scenarios. They are not statistical confidence intervals, a measured total error bound, or proof that an equivalent product or cooked dish has that exact nutrition. Every food proxy and reference-portion variation is listed as unquantified uncertainty. Overflowing arithmetic is reported as incomplete evidence rather than emitted as an infinite value.

Every public assumption uses this uniform whitelist, without private reviewer/owner names:

```text
{ingredientOrdinal,ingredientLabel,quantityText,kind,method,basis,
 sourceURL:string|null,sourceSha256:string|null,referenceName:string|null,
 grams:{central,min,max}|null,nutrient:string|null,
 valuesPer100g:{central,min,max}|null,
 sourceAmount:number|null,sourceUnitLabel:string|null,
 referenceAmount:number|null,referenceUnitLabel:string|null,
 matchType:'exact'|'equivalent',foodId,foodVersion,foodSourceSha256,
 preparation,foodProxyBasis:string|null}
```

Kinds are `official-quantity-conversion`, `published-recipe-quantity-scenario`, `user-quantity-scenario`, `equivalent-food`, `source-nutrient-range`, and `user-nutrient-scenario`. `grams` is the final original-recipe ingredient mass after reference scaling. A user scenario has a null source URL and its sealed structured-statement hash. The private lineage separately retains the source review and user authorization receipts. `unquantifiedUncertainty` entries contain only ingredient ordinal/label, a kind, and a descriptive limitation.

The basis is **ingredient inputs**, not measured nutrition of the cooked dish. Cooking yield, moisture changes, nutrient retention, and an individual's diet target are not established by these calculations. The ranking policy can compare evidence-backed per-serving inputs; it cannot claim that a user's nutritional needs have been fulfilled.

`basketEvidenceByContext` is an array on each enriched registry entry. Each element has:

```text
schemaVersion:1, calculationVersion:'reviewed-ingredient-calculation-v1',
source:'reviewed-branch-price-calculation-v1', basis:'whole-packs-no-pantry',
sourceRecipeId, sourceContentHash, sourceURL, sourceServings,
postcode, store, branchId, date, targetServings, currency:'EUR',
sourceCoverage:'complete'|'incomplete',
costStatus:'complete'|'partial'|'unknown', knownSubtotalCents,
savingsStatus:'unavailable', unknownItemKeys, quantityCheckKeys,
inventoryReview, items, issues, lineage, calculationSha256
```

Only complete entries go into the registry array; the private audit retains all contexts. The compiler must select a matching source hash, postcode, store, branch, purchase date, and serving count, then expose only an explicit public whitelist as `basketFacts`. A fact for 44369 on Monday and two servings cannot be reused as a fact for another branch, date, or six servings. The basket covers purchased whole packs with no pantry deduction; no savings percentage is asserted without a separately reviewed normal-price basis.

Every resolved lineage row retains the original recipe identifier/hash/URL, ingredient ordinal/label/quantity, measured grams or purchase amount, food identifier/version/preparation/source URL/hash/basis, nutrient values and origins, and review receipt. Selected basket items also retain price source/hash/date/pack/count. Public exports should whitelist needed provenance fields and never copy a raw source body or private filesystem path.

Each `calculationSha256` hashes canonical JSON excluding that field. The CLI audit additionally includes input logical names, basenames, and file hashes, then reseals the complete audit. Running the same reviewed inputs twice yields identical output bytes. Source approval and weekly publishing approval remain separate gates.

## Verification

```sh
node --test tests/mealCalculations.test.mjs
```

The tests cover complete and partial nutrition, missing seasoning and step oil, trace versus logical zero, incorrect food basis, source/food/hash/preparation drift, unknown servings/grams, branch/date/identity/currency scope, ordinary prices, conditional prices, exact whole-pack arithmetic, repeated ingredients, and exclusive private CLI outputs. Fixtures are never installed as a reviewed production catalog.
