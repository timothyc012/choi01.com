# Meal service repair, first iteration

The active browser previously combined retired static recipes with current store recipes, ignored global dietary constraints, and used a different pool from MCP. This revision uses the hash-pinned snapshot and its discovery catalog, with a shared checked-in eligibility policy. Historical snapshot bytes are not rewritten.

## Behavior

- Exclude fresh herbs previously retired by the owner, reject butter/Butternut collisions and explicit mushroom species mismatches. Explicit unreviewed, held and rejected CSV rows cannot become automatic prices.
- Apply vegetarian and excluded-ingredient preferences to the library, automatic plan, recommendations and replacements. Persist conditions across location changes; keep manual choices but report conflicts.
- Automatic recommendations require a valid main-ingredient offer on the selected shopping date. General recipes remain available for deliberate manual planning. Cold soups and several identifiable accompaniments are excluded from automatic meal slots.
- Keep saved recommendation modes instead of silently falling back. Show why price or nutrient data is insufficient. Existing published data still has no complete nutrient/basket evidence; enabling measured nutrition recommendations requires sourced data, not merely this UI change.
- Scale clearly stated quantities from source servings. Keep ambiguous labels explicitly marked; never invent grams for pieces or spoons. Missing source servings cannot produce a target-serving purchase quantity. Parse German hyphenated pack labels while leaving ranges unresolved.
- Preserve calculation fields in future snapshot compilation. Current historical details are normalized when opened.
- Repair pipeline staging ownership, require an explicit matching approval digest for publication, and distinguish PDF processing/extraction from explicit page review. Blank text pages do not count as reviewed.

## UI

Shared shopping date, people, diet and exclusion controls; shorter recipe cards with expandable provenance; calendar on the left and recipe library on the right at desktop widths. Mobile Menu now exposes the recipe library (its parent was previously hidden), with Plan and Shop tabs retained. The existing drag/drop and button-based placement remain.

## Validation

- 332 tests passed across the whole website suite.
- Production build, TypeScript check, six-route synchronization and diff whitespace checks passed.
- Regression tests cover real September 21 snapshot data, vegetarian/excluded ingredients, quantity scaling, pantry exclusion, pumpkin identity, held rows, mushroom species, PDF empty pages and successful pipeline preparation.
- Browser checks at 1280×900, 390×844 and 320×844; observed no document-level horizontal overflow on mobile. Real in-app browsing confirmed shared conditions and source-only detail behavior.
- Local MCP replay uses the same source bytes and returns 69 candidates for 44369 Netto on September 21, matching the website's automatic pool count. It is not an assertion about the deployed remote MCP runtime.

## Release boundary

This is a code/UI preview, not a newly published weekly snapshot. No recipe DB modification, website production deployment, or remote MCP deployment was performed. Source archives and the current.json pointer are unchanged. The MCP companion must be released together with the matching website policy because its policy-hash check intentionally rejects mismatched versions. Latest weekly offers, fully sourced nutrition, quantity-based shared pantry inventory and universal dish taxonomy remain separate follow-ups.
