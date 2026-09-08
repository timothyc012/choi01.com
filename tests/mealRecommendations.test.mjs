import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {generateCatalog,parseCsv} from '../scripts/generate-meal-offers.mjs';
const context=vm.createContext({window:{}});
const root=new URL('../public/mohemeokji/',import.meta.url);
for(const f of ['ontology-recipe-details.js','meal-package-prices.js','meal-planner-recipe-data.js','meal-shopping.js','meal-recommendations.js']) {
  vm.runInContext(fs.readFileSync(new URL(f,root),'utf8'),context);
}
const engine=context.window.MealRecommendations;
const meal=(id, primary, family, extra={})=>({id,sourceRecipeId:id,title:id,time:20,tags:[],sale:primary,missing:[],recommendationProfile:{primaryIngredients:primary,family,method:'stirfry'},...extra});
const price={priceCents:100,pack:'500 g'};
const fixtureCatalog=generateCatalog(parseCsv(fs.readFileSync(new URL('../public/offers/supermarket_food_offers_2026-09-07.csv',import.meta.url),'utf8')),'/offers/supermarket_food_offers_2026-09-07.csv').packageCatalog;

test('each source recipe has explicit editorial main-ingredient and variety metadata',()=>{
  for(const recipe of context.window.ontologyRecipeDetails){
    const info=recipe.recommendationProfile;
    assert.ok(info.primaryIngredients.length>0,recipe.title);
    assert.ok(info.primaryIngredients.every(name=>[...recipe.sale,...recipe.missing].includes(name)),recipe.title);
    assert.ok(info.family && info.method,recipe.title);
    assert.ok(['main','side','breakfast'].includes(info.kind),recipe.title);
  }
});

test('discounted named main ingredient beats incidental vegetable and seasoning matches',()=>{
  const curry=meal('curry',['닭가슴살캔'],'chicken',{sale:['당근','마늘','쌀'],missing:['닭가슴살캔']});
  const potato=meal('potato',['감자'],'potato');
  const result=engine.rank([curry,potato],{catalog:{당근:price,마늘:price,쌀:price,감자:price},history:[],date:'2026-09-08'});
  assert.equal(result[0].id,'potato');
  assert.equal(engine.explain(curry,{당근:price,마늘:price}).mainOffers.length,0);
});

test('a varied week does not repeat source IDs, exceed two per family, or place families consecutively when alternatives exist',()=>{
  const pool=Array.from({length:12},(_,i)=>meal('c'+i,['닭고기'],'chicken'));
  pool.push(...Array.from({length:3},(_,i)=>meal('p'+i,['감자'],'potato')),...Array.from({length:3},(_,i)=>meal('n'+i,['파스타'],'pasta')),meal('v',['당근'],'carrot'));
  const result=engine.sequence(pool,{catalog:{닭고기:price,감자:price,파스타:price,당근:price},date:'2026-09-08',history:[]},7);
  assert.equal(result.length,7);
  assert.equal(new Set(result.map(m=>m.sourceRecipeId)).size,7);
  for(const family of ['chicken','potato','pasta','carrot']) assert.ok(result.filter(m=>m.recommendationProfile.family===family).length<=2);
  for(let i=1;i<result.length;i++)assert.notEqual(result[i].recommendationProfile.family,result[i-1].recommendationProfile.family);
});

test('eaten source IDs are demoted across stores for 14 days, future/expired/corrupt records are ignored',()=>{
  const one=meal('one',['감자'],'potato'),two=meal('two',['감자'],'potato');
  const recent=[{sourceRecipeId:'one',family:'potato',method:'stirfry',date:'2026-09-07',moment:'저녁'}];
  assert.equal(engine.rank([one,two],{catalog:{감자:price},history:recent,date:'2026-09-08'})[0].id,'two');
  assert.equal(engine.restoreHistory(JSON.stringify([{...recent[0],date:'2026-08-01'}, {...recent[0],date:'2026-09-10'},{}]),'2026-09-08').length,0);
  const next=engine.recordMeal(recent,two,'2026-09-07','저녁');
  assert.equal(next.length,1);
  assert.equal(next[0].sourceRecipeId,'two');
});

test('limited pools remain usable without fabricating seven recipes',()=>{
  const one=meal('one',['감자'],'potato');
  assert.equal(engine.sequence([one],{catalog:{},history:[],date:'2026-09-08'},7).length,1);
});

test('store menu membership requires a current main-ingredient offer, not incidental matches',()=>{
  const chicken=meal('chicken',['닭고기'],'chicken',{sale:['닭고기','마늘'],missing:[]});
  const salmon=meal('salmon',['연어'],'salmon');
  const noodles=meal('noodles',['파스타'],'pasta');
  assert.deepEqual([...engine.available([chicken,salmon,noodles],{catalog:{연어:price,마늘:price}})].map(m=>m.id),['salmon']);
  assert.equal(engine.sequence([chicken],{catalog:{마늘:price},date:'2026-09-08',requireMainOffer:true},7).length,0);
  assert.equal(engine.current([chicken],{catalog:{마늘:price},date:'2026-09-08',requireMainOffer:true}),null);
});

test('weekly fixture generates genuinely different store sets and keeps side-only shortages honest',()=>{
  const options=store=>({catalog:context.window.MealShopping.currentCatalog(fixtureCatalog['44369'],'2026-09-08')[store],requireMainOffer:true,date:'2026-09-08'});
  const menus=store=>engine.available(context.window.createMealRecipes(store),options(store));
  const netto=menus('Netto'),lidl=menus('Lidl'),rewe=menus('REWE'),aldi=menus('ALDI Nord');
  assert.ok(netto.some(r=>r.sourceRecipeId==='6965953'));
  assert.ok(!lidl.some(r=>r.sourceRecipeId==='6965953'));
  assert.ok(lidl.some(r=>r.sourceRecipeId==='6831097'));
  assert.ok(!netto.some(r=>r.sourceRecipeId==='6831097'));
  assert.ok(lidl.some(r=>r.sourceRecipeId==='1973163'));
  assert.ok(!netto.some(r=>r.sourceRecipeId==='1973163'));
  assert.ok(netto.some(r=>r.sourceRecipeId==='1483080'));
  assert.ok(!lidl.some(r=>r.sourceRecipeId==='1483080'));
  assert.ok(rewe.some(r=>r.sourceRecipeId==='7032812'));
  assert.deepEqual(aldi.map(r=>r.sourceRecipeId).join(','),'6700719');
  assert.equal(engine.current(context.window.createMealRecipes('ALDI Nord'),options('ALDI Nord')),null);
  assert.equal(engine.sequence(context.window.createMealRecipes('REWE'),{...options('REWE'),mealOnly:true},7).length,2);
  for(const store of ['Netto','Lidl','REWE','ALDI Nord']) {
    assert.ok(menus(store).every(r=>engine.explain(r,options(store).catalog).mainOffers.length>0));
  }
});

test('automatic lunch/dinner does not fill a meal slot with a side dish or breakfast snack',()=>{
  const main=meal('main',['닭고기'],'chicken');
  const side=meal('side',['당근'],'carrot',{recommendationProfile:{primaryIngredients:['당근'],family:'carrot',method:'salad',kind:'side'}});
  const breakfast=meal('fruit',['포도'],'fruit',{tags:['아침'],recommendationProfile:{primaryIngredients:['포도'],family:'fruit',method:'cold',kind:'breakfast'}});
  const result=engine.sequence([side,breakfast,main],{catalog:{당근:price,포도:price},history:[],date:'2026-09-08',mealOnly:true},7);
  assert.equal(result.length,1);assert.equal(result[0].id,'main');
  const history=[{sourceRecipeId:'main',family:'chicken',method:'stirfry',date:'2026-09-07',moment:'저녁'}];
  const options={catalog:{당근:price,포도:price},history,date:'2026-09-08'};
  assert.equal(engine.current([side,breakfast,main],options).id,'main');
  assert.equal(engine.current([side,breakfast,main],options,'side').id,'side');
  assert.equal(engine.current([side,breakfast],options),null);
});

test('actual 44369 Netto top recommendation has a discounted main and never maps canned breast to tenderloin',()=>{
  const catalog=fixtureCatalog['44369'].Netto;
  assert.ok(catalog['닭안심']);
  assert.equal(catalog['닭고기'],undefined);
  const pool=context.window.createMealRecipes('Netto');
  const result=engine.sequence(pool,{catalog,history:[],date:'2026-09-08',mealOnly:true},7);
  assert.notEqual(result[0].sourceRecipeId,'6856968');
  assert.ok(engine.explain(result[0],catalog).mainOffers.length>0);
  assert.ok(result.filter(m=>m.recommendationProfile.family==='chicken').length<=2);
  assert.ok(result.every(m=>m.recommendationProfile.kind==='main'));
  const rawChicken=pool.find(m=>m.sourceRecipeId==='6842456');
  assert.equal(engine.explain(rawChicken,catalog).mainOffers.length,0);
  assert.equal(engine.explain(rawChicken,catalog).substitutionNotes.length,1);
  const canned=pool.find(m=>m.sourceRecipeId==='6871908');
  assert.equal(engine.explain(canned,catalog).substitutionNotes.length,0);
});
