# Meal shopping totals

All six HTML entry pages share `meal-shopping.js`, `meal-package-prices.js`, and
the 07.09.2026 recipe data. Existing postcode/store paths remain valid, while
the page presents a postcode selector followed by the supermarkets found under
that postcode in the CSV. The source archive currently contains 52 recipes.
Each supermarket shows only dishes whose defining ingredients have a current
offer in that postcode/store, so menu membership and counts vary by location.
Run `node scripts/sync-meal-pages.mjs` after changing shared assets or the
canonical HTML. It synchronizes legacy entry pages and content-hashed asset URLs.

Prices are whole selling-unit prices, represented as integer euro cents.
The catalog links every postcode/store record to its exact row in
`public/offers/supermarket_food_offers_2026-09-07.csv`. It is a weekly snapshot,
not a live offer feed. Generated metadata groups the available supermarkets
under each postcode and keeps the legacy route's store first as the default.
The selected combination is represented as `?postcode=...&store=...`.

Both the `sale` and `missing` ingredient lists enter the basket. Unknown prices
remain unknown, with an explicit incomplete subtotal. Users can enter prices,
change package counts, and exclude ingredients they already own. Price and
pantry changes apply across the current page; package counts belong to each
recipe basket or the weekly basket. These settings and the shopping checklist
are saved in localStorage per postcode and supermarket, with validation when
restored. Lunch and dinner plans are independent. When the CSV snapshot changes,
pantry/checks persist but old manual prices and unit overrides are invalidated.
Storage failures leave the page usable and show that changes cannot be saved.

Use the recipe or weekly drawer to add missing ingredients to the checklist.
Owned ingredients are excluded and removed from an existing checklist. Repeated
adds merge by store/ingredient and keep the larger package count, preserving
completed checks unless the required package count increases. Purchasing checks
can be undone; completed rows remain visible separately and do not contribute
to the remaining shopping cost. Individual rows can be removed for a new trip.

Recipe cards use measured ingredient quantities from `01ontology`'s
`recipe-full` corpus. When a recipe weight or volume and a selling-unit size are
comparable, the basket calculates the sufficient package count and sums those
requirements across the week. Qualitative, piece-based, or missing units start
at one package and remain editable. Cooked rice (`밥`) is grouped with rice
(`쌀`) for purchasing. Removing the old portion prices also removes them from
recommendation ranking.

Run `node scripts/generate-meal-offers.mjs public/offers/supermarket_food_offers_2026-09-07.csv public/mohemeokji/meal-package-prices.js` to refresh the catalog, then
`node --test tests/mealShopping.test.mjs` from the repository root.

For a new weekly CSV, run the non-publishing preflight first:
`node scripts/prepare-meal-week.mjs INPUT.csv --week-start YYYY-MM-DD --output-dir NEW_DIRECTORY`.
Review the resulting audit before replacing published files. Invalid rows fail
before writing. Conditional offers are archived but excluded from automatic totals.
Current prices are filtered by each item's validity dates in Europe/Berlin.

The selected static recipe catalog is not a live search over the entire ontology.
Source timing metadata and estimated ready-to-eat times are identified separately.
Recommendations use `meal-recommendations.js` and editorial
`recommendationProfile` fields (named primary ingredients, family, cooking method,
and main/side/breakfast role). A current primary-ingredient offer is required for
visible menus and automatic meals; incidental garlic or carrot matches cannot
qualify an unrelated dish. Automatic weekly selection prefers at most two
of one family and avoids consecutive repeats when another family is available;
it relaxes that constraint only when the remaining pool cannot satisfy it.
Eligible sides and breakfast snacks remain in the manual library, outside automatic
meals. A short main-meal pool leaves days empty; snack-only stores show an explicit
no-main-meal state. Stores with the same offers can legitimately share menus.
`createMealRecipes(store)` creates the selected store's source archive. Saved plans
resolve against that archive, including dishes no longer discounted, which are
labelled as having no current primary-ingredient offer.

`먹었어요` records one source recipe per date and lunch/dinner slot for 14 days.
The browser-local history is shared across stores using source IDs; selecting
or planning a recipe alone does not record consumption. Today's record can be
cancelled in its recipe drawer. No earlier meals are inferred. Saved plans are
preserved; the auto-plan button applies the new recommendation policy.
Netto's `Hähnchen-Innenfilet` uses the distinct `닭안심` offer key. Breast recipes
do not qualify through tenderloin. The new tenderloin recipes use their actual
source cut. A recipe combining equal weights of pork and beef mince can use an
explicit 50/50 mixed offer; pure pork mince uses the separate `돼지다짐육` key.

After verifying the configured ontology database and tenant, selected source
recipes can be exported without DB writes using `scripts/export-meal-recipes.sql`
with psql's `recipe_ids` variable. The 13 additions were compared with the live
`recipe-full` export on 2026-09-08, including quantities and ordered source steps.
Nine further records were added after matching exact EDEKA/ALDI/REWE offer forms
such as pork tenderloin, pork neck, rib-eye, blueberries, apples, tomatoes,
peppers and processed cheese slices.

Weekly refreshes now make the offer-to-recipe lookup explicit:
`node scripts/find-store-recipe-candidates.mjs INPUT.csv --output REPORT.json --database VERIFIED_DATABASE --limit 5`.
The read-only report groups exact offer products and `recipe-full` candidates by
postcode/store. It is a review queue, not permission to publish candidates without
checking cut, preparation state, quantities and ordered source steps. Menu cards
show the exact matched product, selling unit and price. When several stores really
discount the same ingredient, recipes can overlap; the lead recommendation favors
an eligible offer that is less common among the stores available in that postcode.

See the maintained [weekly skill](../../docs/skills/mohemeokji-weekly/SKILL.md) and
[2026-09-08 audit](../../docs/mohemeokji-audit-2026-09-08.md) for source requirements,
tested behavior, collection prompt and remaining feature limits.
