import test from 'node:test';
import assert from 'node:assert/strict';
import { canonicalJson, validateSnapshot } from '../scripts/lib/meal-snapshot-schema.mjs';

const offer = {
  offerId: 'a'.repeat(64),
  postcode: '10115',
  chain: 'Lidl',
  branchId: 'teststr-1-10115-berlin',
  sourceRow: 2,
  evidenceUrl: 'https://www.lidl.de/',
  validFrom: '2026-09-14',
  validThrough: '2026-09-19',
  productDe: 'Schweinefilet lang',
  pack: '500 g',
  priceCents: 499,
  normalPriceCents: null,
  conditions: '',
  autoPriceEligible: true,
  identity: {
    ingredientId: '돼지안심',
    species: 'pork',
    cut: 'tenderloin',
    processingState: 'raw',
    form: 'whole-cut',
    composition: 'pork'
  }
};

test('canonical JSON sorts object keys without changing array order', () => {
  assert.equal(canonicalJson({ z: 1, a: [{ b: 2, a: 1 }] }), '{"a":[{"a":1,"b":2}],"z":1}');
});

test('validates a snapshot with exact offer identity and rejects incomplete offers', () => {
  const snapshot = { schemaVersion: 1, snapshotId: 'b'.repeat(64), offers: [offer] };
  assert.deepEqual(validateSnapshot(snapshot), { valid: true, errors: [] });

  const invalid = structuredClone(snapshot);
  delete invalid.offers[0].identity.processingState;
  assert.deepEqual(validateSnapshot(invalid), {
    valid: false,
    errors: ['offers[0].identity.processingState is required']
  });
});

test('rejects null and scalar offer identities', () => {
  const snapshot = { schemaVersion: 1, snapshotId: 'b'.repeat(64), offers: [offer] };
  for (const identity of [null, '돼지안심']) {
    const invalid = structuredClone(snapshot);
    invalid.offers[0].identity = identity;
    assert.equal(validateSnapshot(invalid).valid, false);
  }
});
