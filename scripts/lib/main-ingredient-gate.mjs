const clean = (value) => String(value ?? '').normalize('NFKC').replace(/\s+/g, '').trim();

const PROTEIN_PATTERN = /닭|돼지|소고기|쇠고기|소·돼지|다짐육|연어|참치|훈제연어|생선|새우|오징어|문어|양고기/u;

function sameIngredient(left, right) {
  const a = clean(left).replaceAll('돼지고기', '돼지').replaceAll('닭고기', '닭');
  const b = clean(right).replaceAll('돼지고기', '돼지').replaceAll('닭고기', '닭');
  return a === b || a.includes(b) || b.includes(a);
}

export function ingredientLabelsMatch(left, right) {
  return sameIngredient(left, right);
}

function ingredientIndex(candidate, label) {
  const ingredients = Array.isArray(candidate?.ingredients) ? candidate.ingredients : [];
  const index = ingredients.findIndex((item) => sameIngredient(item?.ingredient ?? item?.label, label));
  return index < 0 ? null : index;
}

function proteinIndex(candidate) {
  const ingredients = Array.isArray(candidate?.ingredients) ? candidate.ingredients : [];
  const index = ingredients.findIndex((item) => PROTEIN_PATTERN.test(String(item?.ingredient ?? item?.label ?? '')));
  return index < 0 ? null : index;
}

/**
 * Keep only exact offer matches that can define the dish. A later fruit,
 * vegetable, dairy or seasoning match cannot override an earlier protein.
 * A later non-protein match also needs explicit title evidence; otherwise it
 * is treated as an incidental ingredient.
 */
export function definingOfferLinks(candidate, links = []) {
  const protein = proteinIndex(candidate);
  const annotated = links.map((link) => ({
    ...link,
    ingredientIndex: ingredientIndex(candidate, link?.match?.ingredientLabel ?? link?.offer?.identity?.ingredientId),
  }));
  const eligible = annotated.filter((link) => {
    if (link.ingredientIndex === null) return false;
    const label = link?.offer?.identity?.ingredientId ?? link?.match?.ingredientLabel ?? '';
    const isProtein = PROTEIN_PATTERN.test(String(label));
    if (protein !== null && !isProtein && link.ingredientIndex > protein) return false;
    if (link.ingredientIndex > 0 && link?.match?.titleEvidence !== true) return false;
    return true;
  });
  if (!eligible.length) return [];
  const first = Math.min(...eligible.map((link) => link.ingredientIndex));
  return eligible.filter((link) => link.ingredientIndex === first);
}

export function definingIngredientIds(candidate, links = []) {
  return [...new Set(definingOfferLinks(candidate, links)
    .map((link) => link?.offer?.identity?.ingredientId)
    .filter(Boolean))].sort();
}

export function sourceProfileMatches(candidate, links = [], profile = {}) {
  const expected = definingIngredientIds(candidate, links);
  const actual = [...new Set(Array.isArray(profile?.primaryIngredients) ? profile.primaryIngredients.filter(Boolean) : [])].sort();
  return JSON.stringify(expected) === JSON.stringify(actual);
}
