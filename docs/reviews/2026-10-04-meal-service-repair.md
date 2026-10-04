# Meal service repair and calculation integration

The active browser previously combined retired static recipes with current store recipes, ignored global dietary constraints, and used a different pool from MCP. This revision uses the hash-pinned snapshot and its discovery catalog, with a shared checked-in eligibility policy. Historical snapshot bytes are not rewritten.

## Behavior

- Exclude fresh herbs previously retired by the owner, reject butter/Butternut collisions and explicit mushroom species mismatches. Explicit unreviewed, held and rejected CSV rows cannot become automatic prices.
- Apply vegetarian and excluded-ingredient preferences to the library, automatic plan, recommendations and replacements. Persist conditions across location changes; keep manual choices but report conflicts.
- Automatic recommendations require a valid main-ingredient offer on the selected shopping date. General recipes remain available for deliberate manual planning. Cold soups and several identifiable accompaniments are excluded from automatic meal slots.
- Keep saved recommendation modes instead of silently falling back. Nutrition and diet can use a separate approved general-recipe catalog when discount-linked recipes lack calculations; general recipes do not claim a store discount. Missing basket evidence keeps the price mode unavailable.
- Compute nutrition from reviewed food records and current ingredient quantities. The owner's estimate policy also allows explicitly reviewed reference conversions and food equivalents. Show ingredient coverage, disclosed assumptions and scenario ranges; these ranges are not statistical error bounds or proof that personal nutritional needs are met. Missing food data and unquantified ingredients remain visible.
- Scale clearly stated quantities from source servings. Piece/spoon conversion is allowed only through the reviewed calculation policy, never an invented gram default. Users may enter a measured quantity locally and see a distinct user-input estimate. Missing source servings cannot produce a target-serving purchase quantity. Parse German hyphenated pack labels while leaving ranges unresolved.
- Select whole-pack price evidence by exact branch, date and serving count. Pantry checkboxes remove owned items from shopping; they do not model household inventory quantity. Unknown purchase quantities and prices remain explicitly incomplete.
- Public calculation exports use an explicit whitelist, sealed calculation hashes and bounded provenance. Preserve the distinction between recipe source quantities and selected-serving quantities in details.
- Repair pipeline staging ownership, require an explicit matching approval digest for publication, and distinguish PDF processing/extraction from explicit page review. Blank text pages do not count as reviewed.

## UI

Shared shopping date, people, diet and exclusion controls; shorter recipe cards with expandable provenance; calendar on the left and recipe library on the right at desktop widths. Mobile Menu now exposes the recipe library (its parent was previously hidden), with Plan and Shop tabs retained. The existing drag/drop and button-based placement remain.

## Validation

- On 2026-10-05, all 423 website tests passed in a separate release checkout based on production commit `9f7fa5fb7c8a98b6a92213bf4a5950d925c922c8` with exactly 55 hashed meal source overlays. The normal production build passed with its unchanged 54-file Canvas vendor guard, as did TypeScript, six-route synchronization and diff checks. Logs and the overlay manifest are retained privately with the release evidence.
- The PR branch includes the later main merge `e2ea625`, whose 18 preexisting Canvas vendor differences still fail that guard. The successful isolated build is **not** a successful build of the PR branch or latest main. No vendor guard, vendor fingerprint, dependency or unrelated Canvas source was changed for the meal build.
- Regression tests cover real September 21 snapshot data, vegetarian/excluded ingredients, quantity scaling, pantry exclusion, pumpkin identity, held rows, mushroom species, PDF empty pages and successful pipeline preparation.
- Browser checks at 1280×900, 390×844 and 320×844; observed no document-level horizontal overflow on mobile. Real in-app browsing confirmed shared conditions and source-only detail behavior.
- Local MCP replay uses the same source bytes and returns 69 candidates for 44369 Netto on September 21, matching the website's automatic pool count. It is not an assertion about the deployed remote MCP runtime.

## Release boundary

Code, calculation inputs and the next weekly snapshot are prepared for review. No recipe DB modification, website production deployment, or remote MCP deployment has been performed. Current published CSVs and the `current.json` pointer remain unchanged; the next snapshot is private and requires owner approval of its exact release digest.

The MCP companion must be released with the matching website policy because its policy-hash check rejects mismatched versions. The running MCP image has a newer 24-tool baseline; deploy only the reviewed meal overlay on that baseline and verify every existing tool remains. Do not replace it with this branch's older full image or wheel. Recipe source purging has a separate maintenance PR and approval boundary. See [calculation contracts](../mohemeokji-calculations.md) and [read-only recipe source setup](../mohemeokji-recipe-source.md).
