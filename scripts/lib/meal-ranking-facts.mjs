import fs from 'node:fs';

export const nutritionPolicy = JSON.parse(fs.readFileSync(new URL('../data/nutrition-policy.json', import.meta.url), 'utf8'));

const asKeys = (value) => Array.isArray(value)
  ? [...new Set(value.filter((entry) => typeof entry === 'string' && entry))]
  : [];

export function basketReadiness(basket = {}) {
  const unknownItemKeys = asKeys(basket.unknownItemKeys);
  const quantityCheckKeys = asKeys(basket.quantityCheckKeys);
  const subtotalValid = Number.isSafeInteger(basket.knownSubtotalCents) && basket.knownSubtotalCents >= 0;
  const knownSubtotalCents = subtotalValid ? basket.knownSubtotalCents : null;
  const status = subtotalValid && ['complete', 'partial', 'unknown'].includes(basket.costStatus)
    ? basket.costStatus
    : 'unknown';
  return {
    ready: subtotalValid && status === 'complete' && !unknownItemKeys.length && !quantityCheckKeys.length,
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
  const estimated=facts?.status==='estimated'&&facts.assumptionsComplete===true&&facts.uncertaintyKind==='reviewed-scenario-interval'&&Array.isArray(facts.assumptions)&&facts.assumptions.length>0
    &&required.every(field=>Number.isFinite(facts.perServingRange?.[field]?.min)&&facts.perServingRange[field].min>=0&&Number.isFinite(facts.perServingRange[field].max)&&facts.perServingRange[field].max>=facts.perServingRange[field].min&&perServing?.[field]>=facts.perServingRange[field].min&&perServing[field]<=facts.perServingRange[field].max);
  const complete = (facts?.status === 'complete'||estimated)
    && typeof facts.source === 'string' && facts.source.trim().length > 0
    && Number.isFinite(facts.sourceServings) && facts.sourceServings > 0
    && perServing && required.every((field) => Number.isFinite(perServing[field]) && perServing[field] >= 0);
  return {
    ready: Boolean(complete),
    status: complete ? facts.status : 'unknown',
    sourceServings: complete ? facts.sourceServings : null,
    perServing: complete ? Object.fromEntries(required.map((field) => [field, perServing[field]])) : null,
    source: complete ? facts.source : null
  };
}
