import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const root = new URL('../public/mohemeokji/', import.meta.url);
const context = vm.createContext({ window: {} });
for (const file of ['meal-shopping.js', 'meal-package-prices.js']) {
  vm.runInContext(fs.readFileSync(new URL(file, root), 'utf8'), context);
}
const { basket, parsePrice, keyFor, summary, amount, addToList, listProgress, restoreState, serializeState } = context.window.MealShopping;
const catalog = context.window.mealPackagePrices;
const rice = {
  store: 'Netto', sale: ['닭고기', '파프리카', '토마토', '양파'],
  missing: ['쌀', '마늘', '간장', '기름']
};

test('charges full packages and distinguishes missing prices from a complete total', () => {
  const cart = basket([rice], { catalog });
  assert.equal(cart.totalCents, 1256); // 7.99 + 1.79 + 1.49 + 1.29, not the old 2.11 portion cost
  assert.equal(cart.unknownCount, 4);
  assert.equal(cart.items.find((item) => item.name === '닭고기').pack, '1 kg');
  assert.equal(summary(cart), '확인된 재료 12,56€ · 미확인 4종');
});

test('includes additional ingredients and multiplies whole package counts', () => {
  const prices = Object.fromEntries(rice.missing.map((name) => [keyFor('Netto', name), 199]));
  const cart = basket([rice], { catalog, prices, quantities: { 'Netto:닭고기': 2 } });
  assert.equal(cart.totalCents, 2851);
  assert.equal(cart.unknownCount, 0);
  assert.equal(summary(cart), '구매 합계 28,51€');
});

test('merges shared ingredients once across meals and normalizes cooked rice to rice', () => {
  const cart = basket([rice, rice, { store: 'Netto', sale: ['토마토'], missing: ['밥', '쌀'] }], { catalog });
  assert.equal(cart.items.length, 8);
  assert.equal(cart.totalCents, 1256);
  assert.equal(cart.unknownCount, 4);
  const resized = basket([rice, rice], { catalog, quantities: { 'Netto:토마토': 3 } });
  assert.equal(resized.totalCents, 1554);
});

test('pantry items are excluded from totals and missing price counts without losing prices', () => {
  const pantry = new Set(['Netto:닭고기', ...rice.missing.map((name) => keyFor('Netto', name))]);
  const cart = basket([rice], { catalog, pantry });
  assert.equal(cart.totalCents, 457);
  assert.equal(cart.unknownCount, 0);
  assert.equal(cart.purchaseCount, 3);
  assert.equal(cart.items[0].priceCents, 799);
  assert.equal(basket([rice], { catalog }).totalCents, 1256);
});

test('does not borrow another store price or call unknown prices zero euros', () => {
  const cart = basket([{ ...rice, store: 'EDEKA' }], { catalog });
  assert.equal(cart.unknownCount, 8);
  assert.equal(amount(cart), '가격 확인 필요');
  assert.equal(summary(cart), '가격 미확인 8종');
  const mixed = basket([rice, { ...rice, store: 'EDEKA' }], { catalog });
  assert.equal(mixed.items.length, 16);
  assert.equal(mixed.unknownCount, 12);
});

test('clearing a price keeps it unknown, explicit zero is valid, empty basket is zero', () => {
  const cart = basket([rice], { catalog, prices: { 'Netto:닭고기': null, 'Netto:쌀': 0 } });
  assert.equal(cart.unknownCount, 4);
  assert.equal(cart.totalCents, 457);
  assert.equal(summary(basket([])), '구매할 재료 없음 · 0,00€');
});

test('accepts euro comma/dot decimals and rejects invalid currency and fractional quantities', () => {
  assert.equal(parsePrice(' 1,99 '), 199);
  assert.equal(parsePrice('7.99'), 799);
  assert.equal(parsePrice('0'), 0);
  for (const value of ['', '-1', '1.999', 'NaN', 'Infinity', '1e3', '1,2,3']) {
    assert.equal(parsePrice(value), null, value);
  }
  for (const quantity of [0, -1, 1.5, 1000, NaN]) {
    assert.equal(basket([rice], { catalog, quantities: { 'Netto:닭고기': quantity } }).totalCents, 1256);
  }
});

test('every catalog price and pack matches its referenced source row', () => {
  for (const offer of Object.values(catalog.Netto)) {
    const file = new URL('../public' + offer.source, import.meta.url);
    const row = fs.readFileSync(file, 'utf8').split(/\r?\n/)[offer.sourceRow - 1].split(',');
    assert.equal(offer.product, row[1]);
    assert.equal(offer.priceCents, parsePrice(row[2].replace('€', '')));
    assert.equal(offer.pack, row[4]);
  }
});

test('all four entry pages use the same shopping implementation and contain no portion costs', () => {
  const canonical = fs.readFileSync(new URL('index.html', root), 'utf8');
  for (const path of ['', '44369DONETTO/', '40468DNETTO/', '40474DEDEKA/']) {
    const html = fs.readFileSync(new URL(path + 'index.html', root), 'utf8');
    assert.equal(html, canonical);
    assert.doesNotMatch(html, /1인분|\bcost:/);
    new vm.Script(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
    const recipes = vm.createContext({ window: {} });
    vm.runInContext(fs.readFileSync(new URL(path + 'meal-planner-recipe-data.js', root), 'utf8'), recipes);
    for (const meal of recipes.window.expandedMealExtras) {
      assert.ok(Array.isArray(meal.sale));
      assert.ok(Array.isArray(meal.missing));
      assert.ok(Array.isArray(meal.steps));
      assert.equal('cost' in meal, false);
    }
  }
});

test('adds only missing ingredients and does not duplicate shared ingredients on repeated adds', () => {
  const cart = basket([rice], { catalog, pantry: new Set(['Netto:닭고기', 'Netto:쌀']) });
  const list = addToList([], cart);
  assert.equal(list.length, 6);
  assert.equal(list.some((item) => item.name === '닭고기' || item.name === '쌀'), false);
  assert.equal(addToList(list, cart).length, 6);
  assert.ok(list.some((item) => item.name === '간장' && item.priceCents === null));
});

test('checking purchases reduces remaining costs and unchecking restores them', () => {
  const list = addToList([], basket([rice], { catalog }));
  list.find((item) => item.name === '닭고기').completed = true;
  list.find((item) => item.name === '쌀').completed = true;
  const progress = listProgress(list);
  assert.equal(progress.completedCount, 2);
  assert.equal(progress.remainingCount, 6);
  assert.equal(progress.totalCents, 457);
  assert.equal(progress.unknownCount, 3);
  list.forEach((item) => { item.completed = false; });
  assert.equal(listProgress(list).totalCents, 1256);
  list.forEach((item) => { item.completed = true; });
  assert.equal(listProgress(list).remainingCount, 0);
  assert.equal(listProgress(list).totalCents, 0);
});

test('re-adding preserves completed checks unless more packages are needed; pantry items leave the list', () => {
  const cart = basket([rice], { catalog });
  const list = addToList([], cart);
  list[0].completed = true;
  assert.equal(addToList(list, cart)[0].completed, true);
  const larger = addToList(list, basket([rice], { catalog, quantities: { 'Netto:닭고기': 2 } }));
  assert.equal(larger[0].quantity, 2);
  assert.equal(larger[0].completed, false);
  const stocked = addToList(list, basket([rice], { catalog, pantry: new Set(['Netto:닭고기']) }));
  assert.equal(stocked.some((item) => item.name === '닭고기'), false);
});

test('round-trips pantry, custom prices, quantities, and checked purchases through browser storage', () => {
  const state = restoreState(null);
  state.pantry.add('Netto:쌀');
  state.prices['Netto:마늘'] = 199;
  state.quantities.week = { 'Netto:닭고기': 2 };
  state.list = addToList([], basket([rice], { catalog, pantry: state.pantry }));
  state.list[0].completed = true;
  const restored = restoreState(serializeState(state));
  assert.equal(restored.pantry.has('Netto:쌀'), true);
  assert.equal(restored.prices['Netto:마늘'], 199);
  assert.equal(restored.quantities.week['Netto:닭고기'], 2);
  assert.equal(restored.list.length, 7);
  assert.equal(restored.list[0].completed, true);
});

test('corrupt storage cannot break the list or restore invalid, duplicate, or owned entries', () => {
  assert.equal(restoreState('{broken').list.length, 0);
  const list = addToList([], basket([rice], { catalog }));
  const restored = restoreState(JSON.stringify({
    version: 1, pantry: ['Netto:닭고기'],
    list: [list[0], list[1], list[1], { ...list[2], quantity: -1 }, { ...list[3], priceCents: '1.29' }]
  }));
  assert.equal(restored.list.length, 1);
  assert.equal(restored.list[0].name, '파프리카');
});
