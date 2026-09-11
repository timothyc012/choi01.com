import test from 'node:test';
import assert from 'node:assert/strict';
import { createOfferIdentity, createOfferId, generateOfferSnapshot } from '../scripts/generate-meal-offers.mjs';

const row = (overrides = {}) => ({
  수집시각: '2026-09-13T09:00:00+02:00',
  체인: 'Lidl',
  지점: 'Teststr. 1, 10115 Berlin',
  우편번호: '10115',
  행사기간: '14.09.2026-19.09.2026',
  상품명: 'Schweinefilet lang',
  상품정보: '500 g',
  행사가격: '4.99',
  출처: 'https://www.lidl.de/',
  ingredient: '돼지안심',
  ...overrides
});

test('keeps tenderloin, neck, breast, chicken tenderloin, salmon, and smoked salmon distinct', () => {
  const porkTenderloin = row({ ingredient: '돼지안심' });
  const porkNeck = row({ ingredient: '돼지목살', 상품명: 'Schweine-Nackensteaks' });
  const rawChickenBreast = row({ ingredient: '닭가슴살', 상품명: 'Hähnchenbrustfilet' });
  const chickenTenderloin = row({ ingredient: '닭안심', 상품명: 'Hähnchen-Innenfilet' });
  const rawSalmon = row({ ingredient: '연어', 상품명: 'Lachsfilet' });
  const smokedSalmon = row({ ingredient: '훈제연어', 상품명: 'Räucherlachs' });

  assert.notDeepEqual(createOfferIdentity(porkTenderloin), createOfferIdentity(porkNeck));
  assert.notDeepEqual(createOfferIdentity(rawChickenBreast), createOfferIdentity(chickenTenderloin));
  assert.notDeepEqual(createOfferIdentity(rawSalmon), createOfferIdentity(smokedSalmon));
});

test('keeps each valid pork offer instead of selecting a second offer by array order', () => {
  const sourceSha = 'a'.repeat(64);
  const snapshot = generateOfferSnapshot([
    row({ __sourceRow: 2, ingredient: '돼지안심' }),
    row({ __sourceRow: 3, ingredient: '돼지목살', 상품명: 'Schweine-Nackensteaks' })
  ], sourceSha);

  assert.equal(snapshot.offers.length, 2);
  assert.notEqual(snapshot.offers[0].offerId, snapshot.offers[1].offerId);
  assert.deepEqual(snapshot.offers.map((offer) => offer.identity.ingredientId).sort(), ['돼지목살', '돼지안심']);
});

test('derives an offer ID from source lineage and stable identifying fields', () => {
  const sourceSha = 'b'.repeat(64);
  const original = row({ __sourceRow: 2, 변형정보: '500 g' });
  const sameOfferWithWhitespace = row({ __sourceRow: 2, 상품명: '  Schweinefilet   lang ', 변형정보: ' 500 g ' });
  const nextRow = row({ __sourceRow: 3, 변형정보: '500 g' });

  assert.equal(createOfferId(original, sourceSha), createOfferId(sameOfferWithWhitespace, sourceSha));
  assert.notEqual(createOfferId(original, sourceSha), createOfferId(nextRow, sourceSha));
});
