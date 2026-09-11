import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeCandidateExport, parseRating } from '../scripts/find-store-recipe-candidates.mjs';

test('candidate export orders source steps by numeric stepNumber', () => {
  const exported = normalizeCandidateExport({
    recipeId: 'recipe-steps',
    rating: '4.9',
    ingredients: [
      { ordinal: '10', ingredient: '소금', quantity: '약간' },
      { ordinal: '2', ingredient: '양파', quantity: '1개' },
      { ordinal: '1', ingredient: '닭가슴살', quantity: '300g' },
    ],
    steps: [
      { ordinal: '10', instruction: '완성한다.' },
      { ordinal: '2', instruction: '굽는다.' },
      { ordinal: '1', instruction: '손질한다.' },
    ],
  });

  assert.deepEqual(exported.steps.map((step) => step.ordinal), [1, 2, 10]);
  assert.deepEqual(exported.ingredients.map((ingredient) => ingredient.ordinal), [1, 2, 10]);
});

test('candidate export parses only a complete numeric rating string', () => {
  assert.deepEqual(parseRating('4.90'), { rating: '4.90', ratingNumber: 4.9 });
  assert.deepEqual(parseRating('4.9점'), { rating: '4.9점', ratingNumber: null });
  assert.deepEqual(parseRating('4.'), { rating: '4.', ratingNumber: null });
  assert.deepEqual(parseRating(''), { rating: '', ratingNumber: null });
});

test('candidate export preserves a missing source step number for later quality gates', () => {
  const exported=normalizeCandidateExport({recipeId:'missing-step-number',steps:[{ordinal:null,name:'unknown',instruction:'손질한다.'}]});
  assert.equal(exported.steps[0].ordinal,null);
});

test('candidate export keeps missing counts unknown instead of coercing them to zero', () => {
  const exported=normalizeCandidateExport({recipeId:'missing-counts',rating:null,reviewCount:null,stepCount:null,ingredientCount:null,measuredIngredientCount:null});
  assert.equal(exported.rating,null);
  assert.equal(exported.ratingNumber,null);
  assert.equal(exported.reviewCount,null);
  assert.equal(exported.stepCount,null);
  assert.equal(exported.ingredientCount,null);
  assert.equal(exported.measuredIngredientCount,null);
});

test('candidate export preserves source metadata, serving text, quantities, and step metadata', () => {
  const exported = normalizeCandidateExport({
    recipeId: 'recipe-complete',
    sourceRecipeId: '7020528',
    title: '닭 요리',
    sourceUrl: 'https://example.com/recipe',
    author: '요리사',
    rating: '4.8',
    reviewCount: '123',
    stepCount: '1',
    ingredientCount: '1',
    measuredIngredientCount: '1',
    sourceServingText: '2인분',
    ingredients: [{ ordinal: '1', label: '닭가슴살 300g', ingredient: '닭가슴살', quantity: '300g' }],
    steps: [{ ordinal: '1', name: 'step-1', instruction: '손질한다.' }],
  });

  assert.deepEqual(exported, {
    recipeId: 'recipe-complete',
    sourceRecipeId: '7020528',
    title: '닭 요리',
    sourceUrl: 'https://example.com/recipe',
    author: '요리사',
    rating: '4.8',
    ratingNumber: 4.8,
    reviewCount: 123,
    stepCount: 1,
    ingredientCount: 1,
    measuredIngredientCount: 1,
    sourceServingText: '2인분',
    ingredients: [{ ordinal: 1, label: '닭가슴살 300g', ingredient: '닭가슴살', quantity: '300g' }],
    steps: [{ ordinal: 1, name: 'step-1', instruction: '손질한다.' }],
    matches: [],
  });
});
