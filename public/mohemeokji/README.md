# Meal shopping totals

All six HTML entry pages share `meal-shopping.js`, `meal-package-prices.js`, and
the 07.09.2026 recipe data. They cover the existing Düsseldorf/Dortmund routes
plus `52062NETTO` and `52064EDEKA` in Aachen.
Each representative store now has 30 current-week recipes across Korean,
Asian, Western, vegetarian, quick, and breakfast categories.
Keep the entry pages and their recipe-data copies identical; the regression
test checks this until the pages have a shared rendering pipeline.

Prices are whole selling-unit prices, represented as integer euro cents.
The catalog links each selected store record to its exact row in
`public/offers/supermarket_food_offers_2026-09-07.csv`. It is a weekly snapshot,
not a live offer feed. The page keeps the representative store for each postal
code: Netto for 44369, 40468, and 52062; EDEKA for 40474 and 52064. Other
chains in the export remain in the source CSV for later store-selector work.

Both the `sale` and `missing` ingredient lists enter the basket. Unknown prices
remain unknown, with an explicit incomplete subtotal. Users can enter prices,
change package counts, and exclude ingredients they already own. Price and
pantry changes apply across the current page; package counts belong to each
recipe basket or the weekly basket. These settings and the shopping checklist
are saved in localStorage per area, with validation when restored. Storage
failures leave the page usable and show that changes cannot be saved.

Use the recipe or weekly drawer to add missing ingredients to the checklist.
Owned ingredients are excluded and removed from an existing checklist. Repeated
adds merge by store/ingredient and keep the larger package count, preserving
completed checks unless the required package count increases. Purchasing checks
can be undone; completed rows remain visible separately and do not contribute
to the remaining shopping cost. Individual rows can be removed for a new trip.

Recipe cards have no measured ingredient quantities. Each basket therefore
starts with one selling unit per distinct store/ingredient, including shared
weekly ingredients. Users must adjust weekly quantities for multiple meals;
the app does not claim one pack is sufficient for the week. Cooked rice (`밥`)
is grouped with rice (`쌀`) for purchasing. Removing the old portion prices also
removes them from recommendation ranking.

Run `node scripts/generate-meal-offers.mjs public/offers/supermarket_food_offers_2026-09-07.csv public/mohemeokji/meal-package-prices.js` to refresh the catalog, then
`node --test tests/mealShopping.test.mjs` from the repository root.
