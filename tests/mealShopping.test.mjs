import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {generateCatalog, parseCsv as readCsv} from '../scripts/generate-meal-offers.mjs';

const root = new URL('../public/mohemeokji/', import.meta.url);
const context = vm.createContext({ window: {} });
for (const file of ['meal-shopping.js', 'meal-package-prices.js']) {
  vm.runInContext(fs.readFileSync(new URL(file, root), 'utf8'), context);
}
const shopping = context.window.MealShopping;
const sourceCatalog = context.window.mealPackagePricesByArea;
const sourceMeta = context.window.mealOfferMeta;
const baseline = generateCatalog(readCsv(fs.readFileSync(new URL('../public/offers/supermarket_food_offers_2026-09-07.csv', import.meta.url), 'utf8')), '/offers/supermarket_food_offers_2026-09-07.csv');

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


test('charges full packages and distinguishes missing prices from a complete total', () => {
  const cart = shopping.basket([rice], { catalog: fixtureCatalog });
  assert.equal(cart.totalCents, 1584);
  assert.equal(cart.unknownCount, 2);
  assert.equal(cart.items.find((item) => item.name === '닭고기').pack, '1 kg');
  assert.equal(shopping.summary(cart), '확인된 금액 15,84€ · 가격 미확인 2종 · 수량 확인 8종');
});

test('includes additional ingredients and multiplies whole package counts', () => {
  const prices = Object.fromEntries(rice.missing.map((name) => [shopping.keyFor('Netto', name), 199]));
  const cart = shopping.basket([rice], { catalog: fixtureCatalog, prices, quantities: { 'Netto:닭고기': 2 } });
  assert.equal(cart.totalCents, 2851);
  assert.equal(cart.unknownCount, 0);
  assert.equal(shopping.summary(cart), '확인된 금액 28,51€ · 수량 확인 7종');
});

test('ambiguous pack sizes and partially measured weekly ingredients require a check', () => {
  const meal = {store:'Netto',sale:['닭고기'],missing:[],requiredAmounts:{닭고기:{amount:300,unit:'g'}}};
  for (const pack of ['113 g – 150 g','je 150/200 g','0 g','3.99 / kg']) {
    const result = shopping.basket([meal], {catalog:{Netto:{닭고기:{priceCents:99,pack}}}});
    assert.equal(result.items[0].quantityNeedsCheck, true, pack);
    assert.ok(Number.isFinite(result.totalCents));
  }
  const mixed = shopping.basket([meal,{...meal,requiredAmounts:{}}],{catalog:fixtureCatalog});
  assert.equal(mixed.items[0].quantityCalculated,false);
  assert.equal(mixed.quantityCheckCount,1);
  const repeated = shopping.basket([{...meal, missing:['닭고기']}], {catalog:fixtureCatalog});
  assert.equal(repeated.items[0].requiredAmount.amount,300);
});

test('weekly rollover preserves pantry/checks but invalidates old prices and unit overrides', () => {
  const state = shopping.restoreState(null);
  state.pantry.add('Netto:소금');
  state.prices['Netto:닭고기']=100;
  state.quantities.week={'Netto:닭고기':8};
  state.list=shopping.addToList([],shopping.basket([rice],{catalog:fixtureCatalog}));
  state.list[0].completed=true;
  state.list[0].quantity=8;
  state.list[0].quantityNeedsCheck=false;
  const saved=shopping.serializeState(state,'week-a');
  const same=shopping.restoreState(saved,'week-a');
  assert.equal(same.prices['Netto:닭고기'],100);
  const next=shopping.restoreState(saved,'week-b');
  assert.equal(next.pantry.has('Netto:소금'),true);
  assert.equal(next.list[0].completed,true);
  assert.equal(next.list[0].priceCents,null);
  assert.equal(next.list[0].quantity,1);
  assert.equal(next.list[0].quantityNeedsCheck,true);
  assert.equal(Object.keys(next.prices).length,0);
  assert.equal(Object.keys(next.quantities).length,0);
});

test('derives sufficient package counts from recipe weights and sums weekly needs', () => {
  const weightedMeal = {
    store: 'Netto', sale: ['닭고기'], missing: [],
    requiredAmounts: { '닭고기': { amount: 1300, unit: 'g' } }
  };
  const oneMeal = shopping.basket([weightedMeal], { catalog: fixtureCatalog });
  assert.equal(oneMeal.items[0].quantity, 2);
  assert.equal(oneMeal.items[0].subtotalCents, 1598);
  assert.equal(oneMeal.items[0].requiredLabel, '1.3 kg 필요');
  const twoMeals = shopping.basket([weightedMeal, weightedMeal], { catalog: fixtureCatalog });
  assert.equal(twoMeals.items[0].quantity, 3);
  assert.equal(twoMeals.items[0].subtotalCents, 2397);
  const overridden = shopping.basket([weightedMeal], { catalog: fixtureCatalog, quantities: { 'Netto:닭고기': 4 } });
  assert.equal(overridden.items[0].quantity, 4);
});

test('merges shared ingredients once across meals and normalizes cooked rice to rice', () => {
  const cart = shopping.basket([rice, rice, { store: 'Netto', sale: ['토마토'], missing: ['밥', '쌀'] }], { catalog: fixtureCatalog });
  assert.equal(cart.items.length, 8);
  assert.equal(cart.totalCents, 1584);
  assert.equal(cart.unknownCount, 2);
  const resized = shopping.basket([rice, rice], { catalog: fixtureCatalog, quantities: { 'Netto:토마토': 3 } });
  assert.equal(resized.totalCents, 1882);
});

test('canonicalizes cooking-oil and melted-butter aliases into single shopping rows',()=>{
  const meal={store:'Netto',sale:[],missing:['기름','식용유','올리브오일','버터','녹인버터'],requiredAmounts:{}};
  const cart=shopping.basket([meal],{catalog:{Netto:{}}});
  assert.deepEqual(Array.from(cart.items,(item)=>item.name).sort(),['버터','식용유']);
  assert.deepEqual(Array.from(cart.items,(item)=>item.key).sort(),['Netto:버터','Netto:식용유']);
  const restored=shopping.restoreState(JSON.stringify({version:1,pantry:['Netto:기름','Netto:녹인버터'],prices:{},quantities:{},list:[]}),null,{stores:['Netto']});
  assert.deepEqual([...restored.pantry].sort(),['Netto:버터','Netto:식용유']);
  assert.equal(shopping.ingredientName('식용유 약간'),'식용유');
  assert.equal(shopping.ingredientName('백설포도씨유 적당히'),'백설포도씨유');
  assert.equal(shopping.keyFor('Netto','백설포도씨유'),'Netto:식용유');
  for(const label of ['백설 카놀라유','엑스트라버진 올리브유','식용유 넉넉히','식용유 필요량','올리브유 한 바퀴','카놀라유 취향껏','해바라기유 적당한 양']) assert.equal(shopping.keyFor('Netto',shopping.ingredientName(label)),'Netto:식용유',label);
  assert.equal(shopping.keyFor('Netto','녹인 버터'),'Netto:버터');
});

test('keeps a specific oil offer price while collapsing the grocery key',()=>{
  const meal={store:'Netto',sale:[],missing:['기름','올리브유'],requiredAmounts:{},offerCatalog:{올리브유:{product:'Olivenöl',pack:'500 ml',priceCents:499,source:'https://example.test/offer'}}};
  const cart=shopping.basket([meal],{catalog:{Netto:{}}});
  assert.equal(cart.items.length,1);
  assert.equal(cart.items[0].key,'Netto:식용유');
  assert.equal(cart.items[0].product,'Olivenöl');
  assert.equal(cart.items[0].priceCents,499);
  const secondChoice={...meal,missing:['올리브유','해바라기유'],offerCatalog:{올리브유:{product:'Chosen Olivenöl',pack:'500 ml',priceCents:499,source:'https://example.test/chosen'},해바라기유:{product:'Other Öl',pack:'1 l',priceCents:299,source:'https://example.test/other'}}};
  const stable=shopping.basket([secondChoice],{catalog:{Netto:{}}});
  assert.equal(stable.items[0].product,'Chosen Olivenöl');
  assert.equal(stable.items[0].source,'https://example.test/chosen');
});

test('migrates persisted alias keys for prices quantities and shopping rows',()=>{
  const saved={version:1,pantry:[],prices:{'Netto:기름':199},quantities:{week:{'Netto:올리브유':2}},list:[{key:'Netto:녹인버터',name:'녹인버터',store:'Netto',pack:'1개',quantity:1,priceCents:299,completed:false}]};
  const restored=shopping.restoreState(JSON.stringify(saved),null,{stores:['Netto']});
  assert.equal(restored.prices['Netto:식용유'],199);
  assert.equal(restored.quantities.week['Netto:식용유'],2);
  assert.deepEqual(Array.from(restored.list,(item)=>[item.key,item.name]),[['Netto:버터','버터']]);
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

test('snapshot meals price against their concrete offer instead of another same-identity product',()=>{
  const first={store:'EDEKA',sale:['소고기등심'],missing:[],offerCatalog:{소고기등심:{offerId:'rib',product:'Rib-Eye',pack:'300 g',priceCents:699}}};
  const second={store:'EDEKA',sale:['소고기등심'],missing:[],offerCatalog:{소고기등심:{offerId:'entrecote',product:'Entrecôte',pack:'300 g',priceCents:799}}};
  assert.equal(shopping.basket([first],{catalog:{EDEKA:{}}}).items[0].priceCents,699);
  assert.equal(shopping.basket([second],{catalog:{EDEKA:{}}}).items[0].priceCents,799);
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

test('classifies recipe ingredients against the active store offer catalog', () => {
  const classified = shopping.classifyIngredients({
    sale: ['돼지고기', '김치'],
    missing: ['마늘', '김치', '밥']
  }, {
    '돼지고기': { priceCents: 349 },
    '마늘': { priceCents: 129 },
    '쌀': { priceCents: 199 }
  });
  assert.deepEqual([...classified.sale], ['돼지고기', '마늘', '쌀']);
  assert.deepEqual([...classified.missing], ['김치']);
});

test('offers expire and future Thursday offers are not counted on Monday', () => {
  const dated={Lidl:{past:{validFrom:'2026-09-01',validThrough:'2026-09-06'},now:{validFrom:'2026-09-07',validThrough:'2026-09-12'},future:{validFrom:'2026-09-10',validThrough:'2026-09-12'}}};
  assert.deepEqual(Object.keys(shopping.currentCatalog(dated,'2026-09-07').Lidl),['now']);
  assert.deepEqual(Object.keys(shopping.currentCatalog(dated,'2026-09-14').Lidl),[]);
});

test('lunch and dinner plans restore independently and legacy plans stay in their meal slot',()=>{
  const scope={area:'44369',store:'Lidl',days:['mon'],meals:[{id:'lidl-a',store:'Lidl'},{id:'lidl-b',store:'Lidl'}]};
  const payload={activeArea:scope.area,activeStore:scope.store,plans:{점심:{mon:'lidl-a'},저녁:{mon:'lidl-b'}}};
  const restored=shopping.restorePlans(JSON.stringify(payload),scope);
  assert.equal(restored.점심.mon,'lidl-a');assert.equal(restored.저녁.mon,'lidl-b');
  assert.equal(Object.keys(shopping.restorePlans(JSON.stringify(payload),{...scope,store:'REWE'})).length,0);
  const legacy=shopping.restorePlans(JSON.stringify({activeArea:scope.area,mealMoment:'점심',plan:{mon:'lidl-a'}}),scope);
  assert.equal(legacy.점심.mon,'lidl-a');assert.equal(legacy.저녁,undefined);
});

test('legacy recipe choices and explicit empty slots migrate to manual v2 slots',()=>{
  const serialized=JSON.stringify({activeArea:'52064',activeStore:'EDEKA',plans:{저녁:{mon:'known',tue:null}}});
  const restored=shopping.restorePlansV2(serialized,{days:['mon','tue'],moments:['저녁'],availableRecipeIds:['known']});
  assert.equal(restored.migrated,true);
  assert.deepEqual(JSON.parse(JSON.stringify(restored.plans)),{저녁:{
    mon:{recipeId:'known',origin:'manual',dismissedRecipeIds:[]},
    tue:{recipeId:null,origin:'manual',dismissedRecipeIds:[]}
  }});
});

test('legacy global plans never cross postcode, store, or branch scope',()=>{
  const serialized=JSON.stringify({activeArea:'44369',activeStore:'Netto',activeBranchId:'branch-a',plans:{저녁:{mon:'netto-only'}}});
  const autoPlans={저녁:{mon:{recipeId:'edeka-auto',origin:'auto',dismissedRecipeIds:[]}}};
  const restored=shopping.restorePlansV2(serialized,{area:'52064',store:'EDEKA',branchId:'branch-b',days:['mon'],moments:['저녁'],availableRecipeIds:['edeka-auto'],autoPlans});
  assert.equal(restored.plans.저녁.mon.recipeId,'edeka-auto');
  assert.equal(restored.plans.저녁.mon.origin,'auto');
  assert.equal(restored.migrated,false);
  assert.deepEqual([...restored.stale],[]);
});

test('snapshot refresh replaces auto slots only and retains unavailable manual recipes',()=>{
  const saved=JSON.stringify({version:2,plans:{저녁:{
    mon:{recipeId:'old-auto',origin:'auto',dismissedRecipeIds:['dismissed']},
    tue:{recipeId:'removed-manual',origin:'manual',dismissedRecipeIds:[]},
    wed:{recipeId:null,origin:'manual',dismissedRecipeIds:[]}
  }}});
  const restored=shopping.restorePlansV2(saved,{days:['mon','tue','wed'],moments:['저녁'],availableRecipeIds:['new-auto']});
  const refreshed=shopping.refreshAutoPlans(restored.plans,{저녁:{mon:'new-auto',tue:'wrong',wed:'wrong'}});
  assert.equal(refreshed.저녁.mon.recipeId,'new-auto');
  assert.equal(refreshed.저녁.mon.origin,'auto');
  assert.deepEqual([...refreshed.저녁.mon.dismissedRecipeIds],['dismissed']);
  assert.equal(refreshed.저녁.tue.recipeId,'removed-manual');
  assert.equal(refreshed.저녁.wed.recipeId,null);
  assert.deepEqual(JSON.parse(JSON.stringify(restored.stale)),[{moment:'저녁',day:'tue',recipeId:'removed-manual'}]);
  const sparse=shopping.restorePlansV2(saved,{days:['mon','tue','wed'],moments:['저녁'],availableRecipeIds:[]});
  assert.deepEqual(JSON.parse(JSON.stringify(sparse.stale)),[{moment:'저녁',day:'tue',recipeId:'removed-manual'}]);
});

test('snapshot rollover clears stale dismissals while preserving manual slots',()=>{
  const saved=JSON.stringify({version:2,snapshotId:'snapshot-old',plans:{저녁:{
    mon:{recipeId:'manual-choice',origin:'manual',dismissedRecipeIds:['old-dismissal']},
    tue:{recipeId:'old-auto',origin:'auto',dismissedRecipeIds:['old-dismissal']}
  }}});
  const restored=shopping.restorePlansV2(saved,{snapshotId:'snapshot-new',days:['mon','tue'],moments:['저녁'],availableRecipeIds:['manual-choice'],autoPlans:{저녁:{mon:null,tue:'new-auto'}}});
  assert.equal(restored.plans.저녁.mon.recipeId,'manual-choice');
  assert.deepEqual([...restored.plans.저녁.mon.dismissedRecipeIds],[]);
  assert.deepEqual([...restored.plans.저녁.tue.dismissedRecipeIds],[]);
});

test('a current snapshot treats a saved v2 plan without snapshot identity as changed',()=>{
  const saved=JSON.stringify({version:2,plans:{저녁:{mon:{recipeId:'old-auto',origin:'auto',dismissedRecipeIds:['old-dismissal']}}}});
  const restored=shopping.restorePlansV2(saved,{snapshotId:'snapshot-current',days:['mon'],moments:['저녁'],availableRecipeIds:['old-auto'],autoPlans:{저녁:{mon:'new-auto'}}});
  assert.equal(restored.snapshotChanged,true);
  assert.deepEqual([...restored.plans.저녁.mon.dismissedRecipeIds],[]);
});

test('v2 slot normalization keeps the 20 most recent unique dismissed recipes',()=>{
  const ids=Array.from({length:22},(_,index)=>'recipe-'+index).concat(['recipe-5','recipe-21']);
  const slot=shopping.normalizePlanSlot({recipeId:'current',origin:'auto',dismissedRecipeIds:ids});
  assert.equal(slot.dismissedRecipeIds.length,20);
  assert.equal(new Set(slot.dismissedRecipeIds).size,20);
  assert.deepEqual([...slot.dismissedRecipeIds].slice(-2),['recipe-5','recipe-21']);
});

test('basket exposes complete, partial, and unknown cost facts without calling gaps zero',()=>{
  const completeMeal={store:'Netto',sale:['닭고기'],missing:[],requiredAmounts:{닭고기:{amount:300,unit:'g'}}};
  const complete=shopping.basket([completeMeal],{catalog:fixtureCatalog});
  assert.equal(complete.costStatus,'complete');
  assert.equal(complete.knownSubtotalCents,799);
  assert.deepEqual([...complete.unknownItemKeys],[]);
  assert.deepEqual([...complete.quantityCheckKeys],[]);
  assert.equal(complete.savingsStatus,'unavailable');
  const partial=shopping.basket([rice],{catalog:fixtureCatalog});
  assert.equal(partial.costStatus,'partial');
  assert.equal(partial.knownSubtotalCents,1584);
  assert.ok(partial.unknownItemKeys.includes('Netto:간장'));
  assert.ok(partial.quantityCheckKeys.includes('Netto:닭고기'));
  const unknown=shopping.basket([{store:'EDEKA',sale:['연어'],missing:[],requiredAmounts:{연어:{amount:200,unit:'g'}}}],{catalog:{}});
  assert.equal(unknown.costStatus,'unknown');
  assert.equal(unknown.knownSubtotalCents,0);
});

test('source-quantity-unknown ingredients remain visible and cannot produce a definitive total',()=>{
  const label='우유 (원문 수량 미표기)';
  assert.equal(shopping.ingredientName(label),'우유');
  const result=shopping.basket([{store:'EDEKA',sale:[],missing:[shopping.ingredientName(label)],requiredAmounts:{}}],{catalog:{EDEKA:{우유:{priceCents:199,pack:'1 l'}}}});
  assert.equal(result.items[0].name,'우유');
  assert.equal(result.items[0].quantityNeedsCheck,true);
  assert.equal(result.costStatus,'partial');
  assert.ok(result.quantityCheckKeys.includes('EDEKA:우유'));
  assert.equal(result.knownSubtotalCents,199);
  assert.match(shopping.summary(result),/수량 확인 1종/);
  assert.doesNotMatch(shopping.summary(result),/구매 합계/);
  const list=shopping.addToList([],result);
  assert.equal(list[0].quantityNeedsCheck,true);
  const progress=shopping.listProgress(list);
  assert.equal(progress.knownSubtotalCents,199);
  assert.equal(progress.quantityCheckCount,1);
  assert.match(shopping.summary(progress),/수량 확인 1종/);
});

test('empty and all-pantry baskets keep savings unavailable without same-product normal-price evidence',()=>{
  const empty=shopping.basket([],{catalog:fixtureCatalog});
  assert.equal(empty.costStatus,'complete');
  assert.equal(empty.savingsStatus,'unavailable');
  assert.equal(empty.savingsCents,null);
  const stocked=shopping.basket([{store:'Netto',sale:['닭고기'],missing:[],requiredAmounts:{닭고기:{amount:300,unit:'g'}}}],{
    catalog:fixtureCatalog,
    pantry:new Set(['Netto:닭고기'])
  });
  assert.equal(stocked.purchaseCount,0);
  assert.equal(stocked.savingsStatus,'unavailable');
  assert.equal(stocked.savingsCents,null);
});

test('mode and serving refresh replaces auto slots only',()=>{
  const plans={저녁:{
    mon:{recipeId:'auto-old',origin:'auto',dismissedRecipeIds:['dismissed']},
    tue:{recipeId:'manual-choice',origin:'manual',dismissedRecipeIds:[]},
    wed:{recipeId:null,origin:'manual',dismissedRecipeIds:[]}
  }};
  const refreshed=shopping.refreshAutoPlans(plans,{저녁:{mon:'auto-new',tue:'wrong',wed:'wrong'}});
  assert.equal(refreshed.저녁.mon.recipeId,'auto-new');
  assert.equal(refreshed.저녁.mon.origin,'auto');
  assert.equal(refreshed.저녁.tue.recipeId,'manual-choice');
  assert.equal(refreshed.저녁.wed.recipeId,null);
});

test('X replacement records a bounded dismissal and clear is a distinct manual empty',()=>{
  const current={recipeId:'current',origin:'auto',dismissedRecipeIds:Array.from({length:20},(_,index)=>'old-'+index)};
  const replaced=shopping.replaceAutoSlot(current,'next');
  assert.equal(replaced.recipeId,'next');
  assert.equal(replaced.origin,'auto');
  assert.equal(replaced.dismissedRecipeIds.length,20);
  assert.equal(replaced.dismissedRecipeIds.at(-1),'current');
  assert.equal(replaced.dismissedRecipeIds.includes('old-0'),false);
  const exhausted=shopping.replaceAutoSlot(replaced,null);
  assert.equal(exhausted.recipeId,null);
  assert.equal(exhausted.origin,'auto');
  const cleared=shopping.clearPlanSlot(replaced);
  assert.deepEqual(JSON.parse(JSON.stringify(cleared)),{recipeId:null,origin:'manual',dismissedRecipeIds:[]});
});

test('shopping list rows keep purchase facts needed by the aisle view',()=>{
  const cart=shopping.basket([{store:'Netto',sale:['닭고기'],missing:[],requiredAmounts:{'닭고기':{amount:300,unit:'g'}},offerCatalog:{닭고기:{...fixtureCatalog.Netto.닭고기,product:'Hähnchen',source:'https://example.test/chicken'}}}],{catalog:fixtureCatalog});
  const [listed]=shopping.addToList([],cart);
  assert.equal(listed.pack,'1 kg');
  assert.equal(listed.priceCents,799);
  assert.equal(listed.completed,false);
  assert.equal(listed.product,'Hähnchen');
  assert.equal(listed.source,'https://example.test/chicken');
  const repeated=shopping.addToList([listed],cart)[0];
  assert.equal(repeated.quantity,1);
  assert.equal(repeated.quantityNeedsCheck,false);
  const uncertain=shopping.basket([{store:'Netto',sale:[],missing:['식용유'],requiredAmounts:{}}],{catalog:{Netto:{식용유:{priceCents:299,pack:'1 l',product:'Öl',source:'https://example.test/oil'}}}});
  const repeatedUncertain=shopping.addToList(shopping.addToList([],uncertain),uncertain)[0];
  assert.equal(repeatedUncertain.quantity,1);
  assert.equal(repeatedUncertain.quantityNeedsCheck,true);
});

test('sequential recipe additions aggregate structured shared packages and remain idempotent',()=>{
  const catalog={Netto:{닭고기:{priceCents:799,pack:'500 g',product:'Hähnchen',source:'https://example.test/chicken'}}};
  const meal=(id)=>({id,store:'Netto',sale:['닭고기'],missing:[],requiredAmounts:{닭고기:{amount:300,unit:'g'}}});
  const firstCart=shopping.basket([meal('recipe-a')],{catalog});
  let list=shopping.addToList([],firstCart);
  assert.equal(list[0].quantity,1);
  list=shopping.addToList(list,firstCart);
  assert.equal(list[0].quantity,1);
  list=shopping.addToList(list,shopping.basket([meal('recipe-b')],{catalog}));
  assert.equal(list[0].quantity,2);
  assert.equal(list[0].quantityNeedsCheck,false);
  const state={pantry:new Set(),prices:{},quantities:{},list};
  const restored=shopping.restoreState(shopping.serializeState(state,'week-a'),'week-a',{stores:['Netto']});
  const afterRestore=shopping.addToList(restored.list,firstCart);
  assert.equal(afterRestore[0].quantity,2);
  const duplicatePlan=shopping.basket([meal('recipe-a'),meal('recipe-a')],{catalog});
  let prepared=shopping.addToList([],duplicatePlan);
  assert.equal(prepared[0].quantity,2);
  prepared=shopping.addToList(prepared,firstCart);
  assert.equal(prepared[0].quantity,2);
  prepared=shopping.addToList(prepared,duplicatePlan);
  assert.equal(prepared[0].quantity,2);
  const legacySaved={version:1,snapshot:'week-a',pantry:[],prices:{},quantities:{},list:[{key:'Netto:닭고기',name:'닭고기',store:'Netto',pack:'500 g',product:'Hähnchen',source:'https://example.test/chicken',quantity:2,priceCents:799,quantityNeedsCheck:false,completed:false}]};
  const legacy=shopping.restoreState(JSON.stringify(legacySaved),'week-a',{stores:['Netto']});
  const legacyAfterDirect=shopping.addToList(legacy.list,firstCart)[0];
  assert.equal(legacyAfterDirect.quantity,2);
  assert.equal(legacyAfterDirect.quantityNeedsCheck,true);
});

test('current catalog covers the supplied postcodes and points to exact source rows', () => {
  const source = readCsv(fs.readFileSync(new URL('../public' + sourceMeta.source, import.meta.url), 'utf8'));
  assert.deepEqual(Object.keys(sourceCatalog).sort(), [...new Set(source.map(r=>r['우편번호']))].sort());
  for (const [area, storeProfiles] of Object.entries(sourceMeta.profiles)) {
    for (const [store, profile] of Object.entries(storeProfiles)) {
      const catalog = sourceCatalog[area][store];
      assert.ok(Object.keys(catalog).length > 0, area + ' ' + store);
      assert.equal(profile.chain, store);
      for (const offer of Object.values(catalog)) {
        const row = source[offer.sourceRow - 2];
        assert.equal(row['상품명'].replace(/\s+/g, ' ').trim(), offer.product, offer.ingredient);
        assert.equal(Math.round(Number(row['행사가격'].replace(',', '.')) * 100), offer.priceCents, offer.ingredient);
        assert.equal(offer.source, sourceMeta.source);
        assert.equal(row['우편번호'], area);
        assert.equal(row['체인'].toLowerCase(), store.toLowerCase());
        assert.ok(offer.pack.length > 0);
      }
    }
  }
});

test('historical CSV fixture groups all stores and rejects known misleading products', () => {
  const sourceMeta = baseline.meta;
  const sourceCatalog = baseline.packageCatalog;
  assert.equal(sourceCatalog['44369'].Netto['빵'].product, 'Kürbiskernbrot');
  assert.equal('토마토' in sourceCatalog['52064'].EDEKA, false);
  assert.equal('치즈' in sourceCatalog['44369']['ALDI Nord'], false);
  assert.equal('치즈' in sourceCatalog['52062'].REWE, false);
  assert.equal('사과' in sourceCatalog['44369'].Lidl, false);
  assert.doesNotMatch(sourceCatalog['52064'].Lidl['버터'].product, /Buttermilch/i);
  assert.equal('빵' in sourceCatalog['52064'].EDEKA, false);
  assert.deepEqual([...sourceMeta.stores['44369']], ['Netto', 'ALDI Nord', 'Lidl', 'REWE']);
  assert.deepEqual([...sourceMeta.stores['40468']], ['Netto']);
  assert.deepEqual([...sourceMeta.stores['40474']], ['EDEKA']);
  assert.deepEqual([...sourceMeta.stores['52062']], ['Netto', 'REWE']);
  assert.deepEqual([...sourceMeta.stores['52064']], ['EDEKA', 'ALDI SÜD', 'Lidl']);
  assert.equal(sourceMeta.profiles['52062'].Netto.offerCount, '174행');
  assert.equal(sourceMeta.profiles['52062'].REWE.offerCount, '27행');
  assert.equal(sourceMeta.profiles['52064'].EDEKA.offerCount, '26행');
  assert.equal(sourceMeta.profiles['52064'].Lidl.offerCount, '90행');
  assert.match(sourceMeta.profiles['52062'].Netto.branch, /Peterstr\. 50/);
  assert.match(sourceMeta.profiles['52064'].EDEKA.branch, /Schillerstraße/);
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
    assert.match(html, /52062 · Aachen/);
    assert.match(html, /52064 · Aachen/);
    assert.match(html, /id="postcodeSelect"/);
    assert.match(html, /id="storeSelect"/);
    assert.match(html, /할인상품 독어 원문명/);
    assert.match(html, /linkedOfferText/);
    assert.match(html, /id="offerDirectoryList"/);
    assert.match(html, /lang="de"/);
    assert.match(html, /할인 재료.*메뉴에 연결됨/);
    assert.match(html, /수집된 지점·지역 자료 기준/);
    for (const asset of ['meal-planner-recipe-data', 'meal-data-loader', 'meal-shopping']) {
      assert.ok(html.includes(asset + '.js?v='));
    }
    assert.doesNotMatch(html,/ontology-recipe-details\.js|meal-package-prices\.js/);
    assert.doesNotMatch(html,/직접 조절할 수 있습니다/);
    new vm.Script(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
    const recipes = vm.createContext({ window: {} });
    vm.runInContext(fs.readFileSync(new URL('ontology-recipe-details.js', root), 'utf8'), recipes);
    vm.runInContext(fs.readFileSync(new URL('meal-package-prices.js', root), 'utf8'), recipes);
    vm.runInContext(fs.readFileSync(new URL(path + 'meal-planner-recipe-data.js', root), 'utf8'), recipes);
    const stores = [...new Set(Object.values(sourceMeta.stores).flat())];
    const sourceCount = recipes.window.ontologyRecipeDetails.length;
    assert.equal(recipes.window.expandedMealExtras,undefined);
    const archive=stores.flatMap(store=>recipes.window.createMealRecipes(store));
    assert.equal(archive.length, stores.length * sourceCount);
    for (const meal of archive) {
      assert.equal('cost' in meal, false);
      assert.match(meal.id, new RegExp('-recipe-' + meal.sourceRecipeId + '$'));
      assert.ok(meal.detailIngredients.length >= 2, meal.title);
      assert.ok(meal.steps.length >= 3, meal.title);
      assert.match(meal.sourceUrl, /^https:\/\/www\.10000recipe\.com\/recipe\/\d+$/);
      assert.ok(meal.sourceTitle.length > 0);
      assert.equal(meal.sourceCorpus, '01ontology DB · recipe-full (01ontology-open 연동)');
      assert.ok(meal.sourceAuthor.length > 0);
      assert.ok(Number.isFinite(meal.time) && meal.time > 0);
    }
  }
});

test('ontology details expose unique source identities and preserve known ingredient corrections', () => {
  const source = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(new URL('ontology-recipe-details.js', root), 'utf8'), source);
  assert.ok(source.window.ontologyRecipeDetails.length > 0);
  assert.equal(new Set(source.window.ontologyRecipeDetails.map((recipe) => recipe.sourceRecipeId)).size, source.window.ontologyRecipeDetails.length);
  for (const recipe of source.window.ontologyRecipeDetails) {
    assert.ok(recipe.detailIngredients.length >= 2, recipe.title);
    assert.ok(recipe.steps.length >= 3, recipe.title);
    assert.match(recipe.sourceUrl, new RegExp('/recipe/' + recipe.sourceRecipeId + '$'));
    if (recipe.timeBasis === 'source') assert.equal(recipe.sourceTimeText, recipe.time+'분');
  }
  const bySourceId = Object.fromEntries(source.window.ontologyRecipeDetails.map((recipe) => [recipe.sourceRecipeId, recipe]));
  assert.equal(bySourceId['6842456'].requiredAmounts['닭가슴살'].amount, 300);
  assert.equal(bySourceId['6842456'].requiredAmounts['닭가슴살'].unit, 'g');
  assert.deepEqual([...bySourceId['6842456'].recommendationProfile.primaryIngredients],['닭가슴살']);
  assert.ok(bySourceId['1480748'].sale.includes('쌀'));
  assert.ok(bySourceId['7022427'].sale.includes('모짜렐라치즈'));
  assert.match(bySourceId['7022427'].detailIngredients.at(-1), /수량 미표기/);
  assert.ok(bySourceId['7007791'].sale.includes('익힌 닭가슴살'));
  assert.ok(!bySourceId['7007791'].sale.includes('닭고기'));
  assert.ok(bySourceId['6871908'].sale.includes('닭가슴살캔'));
  assert.ok(!bySourceId['6943215'].filters.includes('vegetarian'));
  assert.ok(bySourceId['6959935'].time >= 180);
  const currentAdditions=['7015227','7071800','7020528','7030595','7021280','7057231','6940608','6846033','7050889'];
  for(const id of currentAdditions) {
    assert.equal(bySourceId[id].sourceCheckedAt,'2026-09-08');
    assert.ok(Number.isInteger(bySourceId[id].sourceStepCount) && bySourceId[id].sourceStepCount>=3,id);
  }
  assert.deepEqual([...bySourceId['7020528'].recommendationProfile.primaryIngredients],['돼지안심']);
  assert.deepEqual([...bySourceId['7030595'].recommendationProfile.primaryIngredients],['소고기등심']);
  assert.deepEqual([...bySourceId['7021280'].recommendationProfile.primaryIngredients],['슬라이스치즈']);
  assert.deepEqual([...bySourceId['6846033'].recommendationProfile.primaryIngredients],['돼지목살']);
});

test('shopping detail resolves the active area profile before rendering its source', () => {
  // Normalise line endings first: on a Windows checkout core.autocrlf hands
  // back CRLF, and the multi-line pattern below is about the shape of the
  // source, not about how git happened to write it to disk.
  const html = fs.readFileSync(new URL('index.html', root), 'utf8').replace(/\r\n/g, '\n');
  const renderShopping = html.match(/function renderShopping\(\) \{([\s\S]*?)\n      \}\n      function renderShoppingSummary/);
  assert.ok(renderShopping);
  assert.match(html, /const profile = profiles\[activeArea\]\[activeStore\];/);
  assert.match(renderShopping[1], /profile\.source/);
  assert.match(html, /id="recipeAmounts"/);
  assert.match(html, /id="recipeSource"/);
  assert.match(html, /id="recipeProvenance"/);
});

test('location selection isolates saved plans and recognizes legacy paths without a trailing slash', () => {
  const html = fs.readFileSync(new URL('index.html', root), 'utf8');
  assert.match(html, /const pathSegments = location\.pathname\.toUpperCase\(\)\.split\("\/"\)/);
  assert.match(html, /const planStorageKey = "choi01-today-meal-plan:" \+ activeArea \+ ":" \+ activeStore/);
  assert.match(html, /localStorage\.getItem\(planStorageKey\)/);
  assert.match(html, /localStorage\.setItem\(planStorageKey/);
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

test('restores shopping state for every supermarket exposed by the active dataset', () => {
  const restored = shopping.restoreState(JSON.stringify({
    version: 1,
    pantry: ['Lidl:닭고기'],
    prices: { 'REWE:쌀': 199 },
    quantities: {},
    list: [{ key: 'ALDI SÜD:사과', name: '사과', store: 'ALDI SÜD', pack: '1 kg', quantity: 1, priceCents: 249, completed: false }]
  }));
  assert.equal(restored.pantry.has('Lidl:닭고기'), true);
  assert.equal(restored.prices['REWE:쌀'], 199);
  assert.equal(restored.list[0].store, 'ALDI SÜD');
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
