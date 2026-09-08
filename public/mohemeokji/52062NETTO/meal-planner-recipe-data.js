/* Instantiate source records only for the selected store. The full source pool
   supports saved plans; available menus are filtered against current branch offers. */
(function () {
  const details = window.ontologyRecipeDetails || [];
  const storeSlug = (store) => store.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  window.createMealRecipes = (store) => details.map((detail) => ({
    ...detail,
    id: storeSlug(store) + '-recipe-' + detail.sourceRecipeId,
    store,
    filter: [detail.cuisine].concat(detail.filters || []),
    tags: detail.tags.slice(),
    sale: detail.sale.slice(),
    missing: detail.missing.slice(),
    requiredAmounts: Object.fromEntries(Object.entries(detail.requiredAmounts || {}).map(([name, value]) => [name, { ...value }])),
    detailIngredients: detail.detailIngredients.slice(),
    steps: detail.steps.slice()
  }));
}());
