# Meal shopping totals

All six HTML entry pages share `meal-shopping.js`, `meal-package-prices.js`, and
the 07.09.2026 recipe data. Existing postcode/store paths remain valid, while
the page presents a postcode selector followed by the supermarkets found under
that postcode in the CSV. Each selected supermarket has 30 recipes across
Korean, Asian, Western, vegetarian, quick, and breakfast categories.
Keep the entry pages and their recipe-data copies identical; the regression
test checks this until the pages have a shared rendering pipeline.

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
restored. Storage
failures leave the page usable and show that changes cannot be saved.

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
