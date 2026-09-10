const asKeys = (value) => Array.isArray(value)
  ? [...new Set(value.filter((entry) => typeof entry === 'string' && entry))]
  : [];

export function basketReadiness(basket = {}) {
  const unknownItemKeys = asKeys(basket.unknownItemKeys);
  const quantityCheckKeys = asKeys(basket.quantityCheckKeys);
  const knownSubtotalCents = Number.isSafeInteger(basket.knownSubtotalCents) && basket.knownSubtotalCents >= 0
    ? basket.knownSubtotalCents : 0;
  const status = ['complete', 'partial', 'unknown'].includes(basket.costStatus)
    ? basket.costStatus
    : (unknownItemKeys.length || quantityCheckKeys.length ? 'unknown' : 'complete');
  return {
    ready: status === 'complete' && !unknownItemKeys.length && !quantityCheckKeys.length,
    status,
    knownSubtotalCents,
    unknownItemKeys,
    quantityCheckKeys,
    savingsStatus: basket.savingsStatus === 'complete' ? 'complete' : 'unavailable'
  };
}

export function nutritionReadiness(recipe = {}) {
  const facts = recipe.nutritionFacts;
  const perServing = facts?.perServing;
  const required = ['kcal', 'proteinGrams', 'fiberGrams', 'sodiumMg'];
  const complete = facts?.status === 'complete'
    && typeof facts.source === 'string' && facts.source.trim().length > 0
    && Number.isFinite(facts.sourceServings) && facts.sourceServings > 0
    && perServing && required.every((field) => Number.isFinite(perServing[field]) && perServing[field] >= 0);
  return {
    ready: Boolean(complete),
    status: complete ? 'complete' : 'unknown',
    sourceServings: complete ? facts.sourceServings : null,
    perServing: complete ? Object.fromEntries(required.map((field) => [field, perServing[field]])) : null,
    source: complete ? facts.source : null
  };
}
