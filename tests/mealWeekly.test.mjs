import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCsv, generateCatalog, cents } from '../scripts/generate-meal-offers.mjs';

const header = ['수집시각','체인','지점','우편번호','행사기간','상품명','상품정보','행사가격','앱가격','출처','도시','가격적용단위','할인조건'];
const row = (overrides = {}) => ({ 수집시각:'2026-09-13T09:00:00+02:00', 체인:'Lidl', 지점:'Teststr. 1, 10115 Berlin', 우편번호:'10115', 행사기간:'14.09.2026-19.09.2026', 상품명:'Combino Spaghetti', 상품정보:'500 g', 행사가격:'0.99', 앱가격:'0.79', 출처:'https://www.lidl.de/', 도시:'Berlin', ...overrides });
const csv = (records) => '\uFEFF' + [header, ...records.map((r) => header.map((k) => r[k] || ''))].map((values) => values.map((v) => '"' + v.replaceAll('"', '""') + '"').join(',')).join('\r\n');

test('BOM and quoted commas preserve timestamp and branch text', () => {
  const parsed = parseCsv(csv([row()]));
  assert.equal(parsed[0]['수집시각'], row()['수집시각']);
  assert.equal(parsed[0]['지점'], row()['지점']);
  assert.throws(() => parseCsv(csv([row()]) + ',extra'), /field count/);
  assert.throws(() => parseCsv(csv([row()]).slice(0, -1)), /unterminated/);
  assert.throws(() => parseCsv(csv([row()]).replace('"Combino Spaghetti"','"Past"a')), /Malformed/);
});

test('next-week new postcode and missing historical default store work without source edits', () => {
  const {packageCatalog, meta} = generateCatalog([row(), row({우편번호:'44369', 지점:'Dortmund branch'})], '/offers/next.csv');
  assert.deepEqual(Object.keys(meta.areas), ['10115', '44369']);
  assert.equal(meta.areas['10115'].label, '10115 · Berlin');
  assert.equal(meta.areas['44369'].chain, 'Lidl');
  assert.equal(meta.areas['44369'].path, '44369DONETTO');
  assert.equal(packageCatalog['10115'].Lidl['파스타'].priceCents, 99);
  assert.equal(meta.collectedAt, row()['수집시각']);
});

test('unconditional price never falls back to an app-only price or malformed prefix', () => {
  for (const invalid of ['', '1.99 EUR', '1.2.3', '1e3', '-1', '1.234']) assert.equal(cents(invalid), null);
  const {packageCatalog} = generateCatalog([row({행사가격:''}), row({상품명:'Hähnchenbrustfilet',행사가격:'2.99',할인조건:'앱 쿠폰'})], '/offers/next.csv');
  assert.deepEqual(packageCatalog['10115'].Lidl, {});
  const minimum = generateCatalog([row({최소구매수량:'5',할인조건:'5개 이상 구매'})],'/offers/next.csv');
  assert.deepEqual(minimum.packageCatalog['10115'].Lidl,{});
});

test('same-chain branches cannot silently borrow one another’s prices', () => {
  assert.throws(() => generateCatalog([row(),row({지점:'Different branch'})], '/offers/next.csv'), /Multiple branches/);
});

test('explicit selling basis overrides descriptive marketing text', () => {
  const {packageCatalog} = generateCatalog([row({상품정보:'Klasse I | 500 g | 1.98/kg',가격적용단위:'500 g'})], '/offers/next.csv');
  assert.equal(packageCatalog['10115'].Lidl['파스타'].pack, '500 g');
  assert.equal(packageCatalog['10115'].Lidl['파스타'].evidenceUrl, 'https://www.lidl.de/');
});
