import assert from 'node:assert/strict';
import test from 'node:test';

import { deriveMealPageState, parseMealIndex, parseMealSnapshot } from '../src/meal/meal-data.ts';

const indexPayload = {
  schema_version: '1.0',
  generated_at: '2026-08-27T10:00:00Z',
  areas: [
    { city: 'Dortmund', postcode: '44369', data_url: './44369.json' },
    { city: 'Düsseldorf', postcode: '40489', data_url: './40489.json' },
  ],
};

test('meal index exposes exactly the configured area choices', () => {
  const index = parseMealIndex(indexPayload);

  assert.deepEqual(index.areas.map(({ city, postcode }) => [city, postcode]), [
    ['Dortmund', '44369'],
    ['Düsseldorf', '40489'],
  ]);
});

test('current snapshot keeps prices and grounded meals', () => {
  const snapshot = parseMealSnapshot(snapshotPayload());
  const state = deriveMealPageState(snapshot, new Date('2026-08-27T12:00:00Z'));

  assert.equal(state.kind, 'available');
  assert.equal(state.offers.length, 1);
  assert.equal(state.meals[0].matched_offer_ingredients[0], '토마토');
});

test('expired Sunday snapshot hides prices and shows recipe-only notice', () => {
  const snapshot = parseMealSnapshot(snapshotPayload());
  const state = deriveMealPageState(snapshot, new Date('2026-08-30T12:00:00Z'));

  assert.equal(state.kind, 'between-weeks');
  assert.deepEqual(state.offers, []);
  assert.deepEqual(state.meals, []);
});

test('malformed external JSON fails closed', () => {
  assert.throws(
    () => parseMealSnapshot({ schema_version: '1.0', postcode: '<script>' }),
    /private meal snapshot/i,
  );
});

function snapshotPayload() {
  return {
    schema_version: '1.0',
    city: 'Dortmund',
    postcode: '44369',
    week_key: '2026-W35',
    generated_at: '2026-08-27T10:00:00Z',
    valid_from: '2026-08-24',
    valid_until: '2026-08-29',
    availability: 'available',
    between_weeks: false,
    retailer_status: [],
    offers: [
      {
        retailer: 'REWE',
        product_name: 'Tomaten',
        ingredient_name: '토마토',
        price_eur: 1.49,
        quantity: '500 g',
        source_url: 'https://www.rewe.de/angebote/nationale-angebote/',
        valid_until: '2026-08-29',
      },
    ],
    meals: [
      {
        recipe_id: 'tomato-pasta',
        title: '토마토 파스타',
        detail_mode: 'curated',
        matched_offer_ingredients: ['토마토'],
        missing_ingredients: ['파스타'],
        estimated_cost_eur: 2.24,
        retailers: ['REWE'],
        steps: ['면을 삶는다.', '토마토와 버무린다.'],
      },
    ],
    shopping_list: [],
    sources: ['https://www.rewe.de/angebote/nationale-angebote/'],
  };
}
