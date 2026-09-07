/* Store-specific menu records derived from the recipe-full source IDs. */
(function () {
  const details = window.ontologyRecipeDetails || [];
  const stores = ['Netto', 'EDEKA'];

  window.expandedMealExtras = stores.flatMap((store) => details.map((detail) => ({
    ...detail,
    id: store.toLowerCase() + '-recipe-' + detail.sourceRecipeId,
    store,
    filter: [detail.cuisine].concat(detail.filters || []),
    tags: detail.tags.slice(),
    sale: detail.sale.slice(),
    missing: detail.missing.slice(),
    requiredAmounts: Object.fromEntries(Object.entries(detail.requiredAmounts || {}).map(([name, value]) => [name, { ...value }])),
    detailIngredients: detail.detailIngredients.slice(),
    steps: detail.steps.slice()
  })));
}());
