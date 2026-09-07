import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const root = new URL('../public/mohemeokji/', import.meta.url);
const context = vm.createContext({ window: {} });
for (const file of ['meal-shopping.js', 'meal-package-prices.js']) {
  vm.runInContext(fs.readFileSync(new URL(file, root), 'utf8'), context);
}
const shopping = context.window.MealShopping;
const sourceCatalog = context.window.mealPackagePricesByArea;
const sourceMeta = context.window.mealOfferMeta;

const fixtureCatalog = {
  Netto: {
    '닭고기': { priceCents: 799, pack: '1 kg' },
    '파프리카': { priceCents: 179, pack: '500 g' },
    '토마토': { priceCents: 149, pack: '500 g' },
    '양파': { priceCents: 129, pack: '2 kg' },
    '쌀': { priceCents: 199, pack: '500 g' },
    '마늘': { priceCents: 129, pack: '150 g' }
  }
};
const rice = {
  store: 'Netto', sale: ['닭고기', '파프리카', '토마토', '양파'],
  missing: ['쌀', '마늘', '간장', '기름']
};

function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') { cell += '"'; i += 1; }
      else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"' && cell === '') quoted = true;
    else if (char === ',') { row.push(cell); cell = ''; }
    else if (char === '\n') { row.push(cell.replace(/\r$/, '')); rows.push(row); row = []; cell = ''; }
    else cell += char;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [header, ...body] = rows;
  return body.filter((values) => values.some(Boolean)).map((values) => Object.fromEntries(header.map((key, i) => [key.replace(/^\uFEFF/, ''), values[i] || ''])));
}

test('charges full packages and distinguishes missing prices from a complete total', () => {
  const cart = shopping.basket([rice], { catalog: fixtureCatalog });
  assert.equal(cart.totalCents, 1584);
  assert.equal(cart.unknownCount, 2);
  assert.equal(cart.items.find((item) => item.name === '닭고기').pack, '1 kg');
  assert.equal(shopping.summary(cart), '확인된 재료 15,84€ · 미확인 2종');
});

test('includes additional ingredients and multiplies whole package counts', () => {
  const prices = Object.fromEntries(rice.missing.map((name) => [shopping.keyFor('Netto', name), 199]));
  const cart = shopping.basket([rice], { catalog: fixtureCatalog, prices, quantities: { 'Netto:닭고기': 2 } });
  assert.equal(cart.totalCents, 2851);
  assert.equal(cart.unknownCount, 0);
  assert.equal(shopping.summary(cart), '구매 합계 28,51€');
});

test('merges shared ingredients once across meals and normalizes cooked rice to rice', () => {
  const cart = shopping.basket([rice, rice, { store: 'Netto', sale: ['토마토'], missing: ['밥', '쌀'] }], { catalog: fixtureCatalog });
  assert.equal(cart.items.length, 8);
  assert.equal(cart.totalCents, 1584);
  assert.equal(cart.unknownCount, 2);
  const resized = shopping.basket([rice, rice], { catalog: fixtureCatalog, quantities: { 'Netto:토마토': 3 } });
  assert.equal(resized.totalCents, 1882);
});

test('pantry items are excluded from totals and missing price counts without losing prices', () => {
  const pantry = new Set(['Netto:닭고기', ...rice.missing.map((name) => shopping.keyFor('Netto', name))]);
  const cart = shopping.basket([rice], { catalog: fixtureCatalog, pantry });
  assert.equal(cart.totalCents, 457);
  assert.equal(cart.unknownCount, 0);
  assert.equal(cart.purchaseCount, 3);
  assert.equal(cart.items[0].priceCents, 799);
  assert.equal(shopping.basket([rice], { catalog: fixtureCatalog }).totalCents, 1584);
});

test('does not borrow another store price or call unknown prices zero euros', () => {
  const cart = shopping.basket([{ ...rice, store: 'EDEKA' }], { catalog: fixtureCatalog });
  assert.equal(cart.unknownCount, 8);
  assert.equal(shopping.amount(cart), '가격 확인 필요');
  assert.equal(shopping.summary(cart), '가격 미확인 8종');
  const mixed = shopping.basket([rice, { ...rice, store: 'EDEKA' }], { catalog: fixtureCatalog });
  assert.equal(mixed.items.length, 16);
  assert.equal(mixed.unknownCount, 10);
});

test('clearing a price keeps it unknown, explicit zero is valid, empty basket is zero', () => {
  const cart = shopping.basket([rice], { catalog: fixtureCatalog, prices: { 'Netto:닭고기': null, 'Netto:쌀': 0 } });
  assert.equal(cart.unknownCount, 3);
  assert.equal(cart.totalCents, 586);
  assert.equal(shopping.summary(shopping.basket([])), '구매할 재료 없음 · 0,00€');
});

test('accepts euro comma/dot decimals and rejects invalid currency and fractional quantities', () => {
  assert.equal(shopping.parsePrice(' 1,99 '), 199);
  assert.equal(shopping.parsePrice('7.99'), 799);
  assert.equal(shopping.parsePrice('0'), 0);
  for (const value of ['', '-1', '1.999', 'NaN', 'Infinity', '1e3', '1,2,3']) assert.equal(shopping.parsePrice(value), null, value);
  for (const quantity of [0, -1, 1.5, 1000, NaN]) {
    assert.equal(shopping.basket([rice], { catalog: fixtureCatalog, quantities: { 'Netto:닭고기': quantity } }).totalCents, 1584);
  }
});

test('generated catalog covers five postcodes and points to the exact row in the new CSV', () => {
  const source = parseCsv(fs.readFileSync(new URL('../public/offers/supermarket_food_offers_2026-09-07.csv', import.meta.url), 'utf8'));
  assert.deepEqual(Object.keys(sourceCatalog).sort(), ['40468', '40474', '44369', '52062', '52064']);
  for (const [area, profile] of Object.entries(sourceMeta.profiles)) {
    const catalog = sourceCatalog[area][profile.chain];
    assert.ok(Object.keys(catalog).length > 0, area);
    for (const offer of Object.values(catalog)) {
      const row = source[offer.sourceRow - 2];
      assert.equal(row['상품명'].replace(/\s+/g, ' ').trim(), offer.product, offer.ingredient);
      assert.equal(Math.round(Number(row['행사가격'].replace(',', '.')) * 100), offer.priceCents, offer.ingredient);
      assert.equal(offer.source, '/offers/supermarket_food_offers_2026-09-07.csv');
      assert.ok(offer.pack.length > 0);
    }
  }
  assert.equal(sourceCatalog['44369'].Netto['빵'].product, 'Kürbiskernbrot');
  assert.equal('토마토' in sourceCatalog['52064'].EDEKA, false);
});

test('new profiles preserve branch, date, count, and default store metadata', () => {
  assert.equal(sourceMeta.profiles['52062'].chain, 'Netto');
  assert.equal(sourceMeta.profiles['52064'].chain, 'EDEKA');
  assert.equal(sourceMeta.profiles['52062'].offerCount, '174행');
  assert.equal(sourceMeta.profiles['52064'].offerCount, '26행');
  assert.match(sourceMeta.profiles['52062'].branch, /Peterstr\. 50/);
  assert.match(sourceMeta.profiles['52064'].branch, /Schillerstraße/);
  assert.equal(sourceMeta.areas['52062'].path, '52062NETTO');
  assert.equal(sourceMeta.areas['52064'].path, '52064EDEKA');
});

test('all six entry pages are identical and use current recipes without portion costs', () => {
  const paths = ['', '44369DONETTO/', '40468DNETTO/', '40474DEDEKA/', '52062NETTO/', '52064EDEKA/'];
  const canonical = fs.readFileSync(new URL('index.html', root), 'utf8');
  for (const path of paths) {
    const html = fs.readFileSync(new URL(path + 'index.html', root), 'utf8');
    assert.equal(html, canonical, path);
    assert.doesNotMatch(html, /1인분|\bcost:/);
    assert.match(html, /52062 · Aachen · Netto/);
    assert.match(html, /52064 · Aachen · EDEKA/);
    new vm.Script(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
    const recipes = vm.createContext({ window: {} });
    vm.runInContext(fs.readFileSync(new URL(path + 'meal-planner-recipe-data.js', root), 'utf8'), recipes);
    assert.equal(recipes.window.expandedMealExtras.length, 24);
    for (const meal of recipes.window.expandedMealExtras) assert.equal('cost' in meal, false);
  }
});

test('shopping detail resolves the active area profile before rendering its source', () => {
  const html = fs.readFileSync(new URL('index.html', root), 'utf8');
  const renderShopping = html.match(/function renderShopping\(\) \{([\s\S]*?)\n      \}\n      function renderShoppingSummary/);
  assert.ok(renderShopping);
  assert.match(renderShopping[1], /const profile = profiles\[activeArea\];/);
  assert.match(renderShopping[1], /profile\.source/);
});

test('adds only missing ingredients and does not duplicate shared ingredients on repeated adds', () => {
  const cart = shopping.basket([rice], { catalog: fixtureCatalog, pantry: new Set(['Netto:닭고기', 'Netto:쌀']) });
  const list = shopping.addToList([], cart);
  assert.equal(list.length, 6);
  assert.equal(list.some((item) => item.name === '닭고기' || item.name === '쌀'), false);
  assert.equal(shopping.addToList(list, cart).length, 6);
  assert.ok(list.some((item) => item.name === '간장' && item.priceCents === null));
});

test('checking purchases reduces remaining costs and unchecking restores them', () => {
  const list = shopping.addToList([], shopping.basket([rice], { catalog: fixtureCatalog }));
  list.find((item) => item.name === '닭고기').completed = true;
  list.find((item) => item.name === '쌀').completed = true;
  const progress = shopping.listProgress(list);
  assert.equal(progress.completedCount, 2);
  assert.equal(progress.remainingCount, 6);
  assert.equal(progress.totalCents, 586);
  assert.equal(progress.unknownCount, 2);
  list.forEach((item) => { item.completed = false; });
  assert.equal(shopping.listProgress(list).totalCents, 1584);
  list.forEach((item) => { item.completed = true; });
  assert.equal(shopping.listProgress(list).remainingCount, 0);
  assert.equal(shopping.listProgress(list).totalCents, 0);
});

test('re-adding preserves completed checks unless more packages are needed; pantry items leave the list', () => {
  const cart = shopping.basket([rice], { catalog: fixtureCatalog });
  const list = shopping.addToList([], cart);
  list[0].completed = true;
  assert.equal(shopping.addToList(list, cart)[0].completed, true);
  const larger = shopping.addToList(list, shopping.basket([rice], { catalog: fixtureCatalog, quantities: { 'Netto:닭고기': 2 } }));
  assert.equal(larger[0].quantity, 2);
  assert.equal(larger[0].completed, false);
  const stocked = shopping.addToList(list, shopping.basket([rice], { catalog: fixtureCatalog, pantry: new Set(['Netto:닭고기']) }));
  assert.equal(stocked.some((item) => item.name === '닭고기'), false);
});

test('round-trips pantry, custom prices, quantities, and checked purchases through browser storage', () => {
  const state = shopping.restoreState(null);
  state.pantry.add('Netto:쌀');
  state.prices['Netto:마늘'] = 199;
  state.quantities.week = { 'Netto:닭고기': 2 };
  state.list = shopping.addToList([], shopping.basket([rice], { catalog: fixtureCatalog, pantry: state.pantry }));
  state.list[0].completed = true;
  const restored = shopping.restoreState(shopping.serializeState(state));
  assert.equal(restored.pantry.has('Netto:쌀'), true);
  assert.equal(restored.prices['Netto:마늘'], 199);
  assert.equal(restored.quantities.week['Netto:닭고기'], 2);
  assert.equal(restored.list.length, 7);
  assert.equal(restored.list[0].completed, true);
});

test('corrupt storage cannot break the list or restore invalid, duplicate, or owned entries', () => {
  assert.equal(shopping.restoreState('{broken').list.length, 0);
  const list = shopping.addToList([], shopping.basket([rice], { catalog: fixtureCatalog }));
  const restored = shopping.restoreState(JSON.stringify({
    version: 1, pantry: ['Netto:닭고기'],
    list: [list[0], list[1], list[1], { ...list[2], quantity: -1 }, { ...list[3], priceCents: '1.29' }]
  }));
  assert.equal(restored.list.length, 1);
  assert.equal(restored.list[0].name, '파프리카');
});
