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

  function legacyEnabled(search = window.location?.search || '') {
    return new URLSearchParams(search).get('snapshot') === 'legacy';
  }

  function fromSnapshotLocation(location) {
    return (location?.recipes || []).map((recipe) => ({
      id: storeSlug(location.store) + '-recipe-' + recipe.sourceRecipeId,
      sourceRecipeId: recipe.sourceRecipeId,
      store: location.store,
      offerIds: Array.isArray(recipe.offerIds) ? recipe.offerIds.slice() : [],
      primaryIngredientIds: Array.isArray(recipe.primaryIngredientIds) ? recipe.primaryIngredientIds.slice() : [],
      recommendationProfile: recipe.recommendationProfile || {},
      qualityScore: recipe.qualityScore ?? null,
      qualityFacts: recipe.qualityFacts || {},
      detailPath: recipe.detailPath,
      detailSha256: recipe.detailSha256
    }));
  }

  function offerCatalogFromSnapshot(location) {
    const grouped = new Map();
    for (const offer of location?.offers || []) {
      const ingredientId = offer?.identity?.ingredientId;
      if (typeof ingredientId !== 'string' || !ingredientId) continue;
      if (!grouped.has(ingredientId)) grouped.set(ingredientId,[]);
      grouped.get(ingredientId).push(offer);
    }
    return Object.fromEntries([...grouped].filter(([,offers]) => offers.length === 1).map(([ingredientId,[offer]]) => [ingredientId,{
      offerId:offer.offerId,
      product:offer.productDe,
      pack:offer.pack,
      priceCents:offer.priceCents,
      validFrom:offer.validFrom,
      validThrough:offer.validThrough,
      source:offer.evidenceUrl || ''
    }]));
  }

  window.MealRecipeData = {legacyEnabled, fromSnapshotLocation, offerCatalogFromSnapshot};
}());
