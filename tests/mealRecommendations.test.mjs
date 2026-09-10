import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {generateCatalog,parseCsv} from '../scripts/generate-meal-offers.mjs';
import {basketReadiness,nutritionReadiness} from '../scripts/lib/meal-ranking-facts.mjs';
const context=vm.createContext({window:{}});
const root=new URL('../public/mohemeokji/',import.meta.url);
for(const f of ['ontology-recipe-details.js','meal-package-prices.js','meal-planner-recipe-data.js','meal-shopping.js','meal-recommendations.js']) {
  vm.runInContext(fs.readFileSync(new URL(f,root),'utf8'),context);
}
const engine=context.window.MealRecommendations;
const meal=(id, primary, family, extra={})=>({id,sourceRecipeId:id,title:id,time:20,tags:[],sale:primary,missing:[],recommendationProfile:{primaryIngredients:primary,family,method:'stirfry'},...extra});
const price={priceCents:100,pack:'500 g'};
const fixtureCatalog=generateCatalog(parseCsv(fs.readFileSync(new URL('../public/offers/supermarket_food_offers_2026-09-07.csv',import.meta.url),'utf8')),'/offers/supermarket_food_offers_2026-09-07.csv').packageCatalog;
const rankingPolicy=JSON.parse(fs.readFileSync(new URL('../scripts/data/nutrition-policy.json',import.meta.url),'utf8'));

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

test('the lead recommendation favors an offer that is distinctive to the selected store',()=>{
  const common=meal('common',['닭가슴살'],'chicken');
  const distinctive=meal('distinctive',['소고기등심'],'beef');
  const catalog={닭가슴살:price,소고기등심:price};
  const ranked=engine.rank([common,distinctive],{catalog,date:'2026-09-08',offerFrequency:{닭가슴살:3,소고기등심:1}});
  assert.equal(ranked[0].id,'distinctive');
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
  assert.equal(engine.sequence(context.window.createMealRecipes('REWE'),{...options('REWE'),mealOnly:true},7).length,3);
  for(const store of ['Netto','Lidl','REWE','ALDI Nord']) {
    assert.ok(menus(store).every(r=>engine.explain(r,options(store).catalog).mainOffers.length>0));
  }
});

test('EDEKA menus come from its exact offer products and include store-specific DB recipe matches',()=>{
  const options=(postcode,store)=>({catalog:context.window.MealShopping.currentCatalog(fixtureCatalog[postcode],'2026-09-08')[store],requireMainOffer:true,date:'2026-09-08'});
  const menus=(postcode,store)=>engine.available(context.window.createMealRecipes(store),options(postcode,store));
  const duesseldorf=menus('40474','EDEKA'),aachen=menus('52064','EDEKA'),aldi=menus('52064','ALDI SÜD');
  assert.ok(duesseldorf.some(r=>r.sourceRecipeId==='7015227'));
  assert.ok(!aachen.some(r=>r.sourceRecipeId==='7015227'));
  assert.ok(aachen.some(r=>r.sourceRecipeId==='7020528'));
  assert.ok(aachen.some(r=>r.sourceRecipeId==='7030595'));
  assert.ok(!duesseldorf.some(r=>r.sourceRecipeId==='7020528'));
  assert.ok(aldi.some(r=>r.sourceRecipeId==='7021280'));
  assert.ok(!aachen.some(r=>r.sourceRecipeId==='7021280'));
  assert.notDeepEqual(duesseldorf.map(r=>r.sourceRecipeId),aachen.map(r=>r.sourceRecipeId));
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
  assert.equal(catalog['닭가슴살'],undefined);
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

test('value mode rejects unknown package prices and quantities instead of ranking them as zero',()=>{
  const candidate=meal('partial',['닭고기'],'chicken',{store:'Netto'});
  const unknownPrice={costStatus:'unknown',knownSubtotalCents:0,unknownItemKeys:['Netto:닭고기'],quantityCheckKeys:[],savingsStatus:'unavailable'};
  const unknownQuantity={costStatus:'partial',knownSubtotalCents:799,unknownItemKeys:[],quantityCheckKeys:['Netto:닭고기'],savingsStatus:'unavailable'};
  assert.deepEqual(basketReadiness(unknownPrice),{ready:false,status:'unknown',knownSubtotalCents:0,unknownItemKeys:['Netto:닭고기'],quantityCheckKeys:[],savingsStatus:'unavailable'});
  assert.equal(engine.evaluateRecipeForMode(candidate,{catalog:{닭고기:price},requireMainOffer:true,basketFor:()=>unknownPrice},'value').eligible,false);
  assert.equal(engine.evaluateRecipeForMode(candidate,{catalog:{닭고기:price},requireMainOffer:true,basketFor:()=>unknownQuantity},'value').eligible,false);
});

test('value mode rejects a complete-labelled basket whose known subtotal is absent or invalid',()=>{
  const candidate=meal('invalid-subtotal',['닭고기'],'chicken',{store:'Netto'});
  for(const knownSubtotalCents of [null,undefined,-1,1.5,'0']) {
    const basket={costStatus:'complete',knownSubtotalCents,unknownItemKeys:[],quantityCheckKeys:[],savingsStatus:'unavailable'};
    assert.equal(basketReadiness(basket).ready,false,String(knownSubtotalCents));
    assert.equal(engine.evaluateRecipeForMode(candidate,{catalog:{닭고기:price},requireMainOffer:true,basketFor:()=>basket},'value').eligible,false,String(knownSubtotalCents));
  }
});

test('a complete basket remains value-ready when same-product normal price is unavailable',()=>{
  const candidate=meal('complete',['닭고기'],'chicken',{store:'Netto'});
  const complete={costStatus:'complete',knownSubtotalCents:799,unknownItemKeys:[],quantityCheckKeys:[],savingsStatus:'unavailable'};
  const result=engine.evaluateRecipeForMode(candidate,{catalog:{닭고기:price},requireMainOffer:true,basketFor:()=>complete},'value');
  assert.equal(result.eligible,true);
  assert.equal(result.readiness.cost,'complete');
  assert.equal(result.readiness.savings,'unavailable');
  assert.equal(result.scoreComponents.knownSubtotalCents,799);
});

test('snapshot value mode requires compiler-proven full basket coverage, not priced primary ingredients alone',()=>{
  const primaryOnly=meal('primary-only',['닭고기'],'chicken',{store:'Netto',sourceServings:2,requiredAmounts:{닭고기:{amount:300,unit:'g'}}});
  const calculatedPrimary={costStatus:'complete',knownSubtotalCents:799,unknownItemKeys:[],quantityCheckKeys:[],savingsStatus:'unavailable'};
  const context={catalog:{닭고기:price},requireMainOffer:true,requireCompilerBasketFacts:true,targetServings:2,basketFor:()=>calculatedPrimary};
  assert.equal(engine.evaluateRecipeForMode(primaryOnly,context,'value').eligible,false);
  const proven={...primaryOnly,basketFacts:{...calculatedPrimary,sourceCoverage:'complete',targetServings:2}};
  assert.equal(engine.evaluateRecipeForMode(proven,context,'value').eligible,true);
  assert.equal(engine.evaluateRecipeForMode({...proven,basketFacts:{...proven.basketFacts,targetServings:4}},context,'value').eligible,false);
});

test('nutrition and diet reject recipes without complete sourced serving nutrients',()=>{
  const candidate=meal('nutrition-partial',['닭고기'],'chicken',{store:'Netto',nutritionFacts:{source:'verified',sourceServings:2,perServing:{kcal:400,proteinGrams:30}}});
  assert.equal(nutritionReadiness(candidate).ready,false);
  for(const mode of ['nutrition','diet']) {
    const result=engine.evaluateRecipeForMode(candidate,{catalog:{닭고기:price},requireMainOffer:true},mode);
    assert.equal(result.eligible,false);
    assert.equal(result.readiness.nutrition,'unknown');
    assert.ok(result.reasons.some((reason)=>reason.includes('영양')));
  }
});

test('all recommendation modes retain exact main-offer, main-meal, and store gates',()=>{
  const side=meal('side',['닭고기'],'chicken',{store:'Netto',recommendationProfile:{primaryIngredients:['닭고기'],family:'chicken',method:'stirfry',kind:'side'}});
  const wrongStore=meal('wrong-store',['닭고기'],'chicken',{store:'EDEKA'});
  const noOffer=meal('no-offer',['연어'],'salmon',{store:'Netto'});
  const complete={costStatus:'complete',knownSubtotalCents:799,unknownItemKeys:[],quantityCheckKeys:[],savingsStatus:'unavailable'};
  for(const mode of ['balanced','value','nutrition','diet']) {
    const context={catalog:{닭고기:price},requireMainOffer:true,store:'Netto',mealOnly:true,basketFor:()=>complete};
    assert.equal(engine.evaluateRecipeForMode(side,context,mode).eligible,false,mode+' side');
    assert.equal(engine.evaluateRecipeForMode(wrongStore,context,mode).eligible,false,mode+' store');
    assert.equal(engine.evaluateRecipeForMode(noOffer,context,mode).eligible,false,mode+' offer');
  }
});

test('selected-branch automatic candidates require exact branch provenance',()=>{
  const branchless=meal('branchless',['닭고기'],'chicken',{store:'Netto'});
  const exact=meal('exact',['닭고기'],'chicken',{store:'Netto',branchId:'branch-a'});
  const context={catalog:{닭고기:price},requireMainOffer:true,store:'Netto',branchId:'branch-a',mealOnly:true};
  assert.equal(engine.evaluateRecipeForMode(branchless,context,'balanced').eligible,false);
  assert.equal(engine.evaluateRecipeForMode(exact,context,'balanced').eligible,true);
});

test('preference corruption falls back safely and valid values round trip',()=>{
  assert.deepEqual(JSON.parse(JSON.stringify(engine.restorePreferences('{broken'))),{mode:'balanced',targetServings:2});
  assert.deepEqual(JSON.parse(JSON.stringify(engine.restorePreferences(JSON.stringify({mode:'medical',targetServings:0})))),{mode:'balanced',targetServings:2});
  const stored=engine.serializePreferences({mode:'diet',targetServings:6});
  assert.deepEqual(JSON.parse(JSON.stringify(engine.restorePreferences(stored))),{mode:'diet',targetServings:6});
});

test('next candidate skips dismissed, used, ineligible, and keeps deterministic pool order',()=>{
  const pool=[meal('a',['닭고기'],'chicken',{store:'Netto'}),meal('b',['닭고기'],'chicken',{store:'Netto'}),meal('side',['닭고기'],'chicken',{store:'Netto',recommendationProfile:{primaryIngredients:['닭고기'],family:'chicken',method:'cold',kind:'side'}}),meal('c',['닭고기'],'chicken',{store:'Netto'})];
  const result=engine.nextCandidate(pool,{dismissedRecipeIds:['a'],usedRecipeIds:['b'],mode:'balanced',context:{catalog:{닭고기:price},requireMainOffer:true,store:'Netto',mealOnly:true}});
  assert.equal(result.id,'c');
  assert.equal(engine.nextCandidate(pool,{dismissedRecipeIds:['a','c'],usedRecipeIds:['b'],mode:'balanced',context:{catalog:{닭고기:price},requireMainOffer:true,store:'Netto',mealOnly:true}}),null);
});

test('ready modes order by transparent cost and nutrient facts while keeping diversity sequencing',()=>{
  const cheap=meal('cheap',['닭고기'],'chicken',{store:'Netto'});
  const costly=meal('costly',['닭고기'],'chicken',{store:'Netto'});
  const base={catalog:{닭고기:price},requireMainOffer:true,store:'Netto',mealOnly:true,date:'2026-09-08',basketFor:(candidate)=>({costStatus:'complete',knownSubtotalCents:candidate.id==='cheap'?500:900,unknownItemKeys:[],quantityCheckKeys:[],savingsStatus:'unavailable'})};
  assert.equal(engine.rankForMode([costly,cheap],base,'value')[0].id,'cheap');
  const protein=meal('protein',['닭고기'],'chicken',{store:'Netto',nutritionFacts:{status:'complete',source:'verified',sourceServings:2,perServing:{kcal:500,proteinGrams:40,fiberGrams:5,sodiumMg:300}}});
  const light=meal('light',['닭고기'],'chicken',{store:'Netto',nutritionFacts:{status:'complete',source:'verified',sourceServings:2,perServing:{kcal:300,proteinGrams:20,fiberGrams:4,sodiumMg:250}}});
  assert.equal(engine.rankForMode([light,protein],base,'nutrition')[0].id,'protein');
  assert.equal(engine.rankForMode([protein,light],base,'diet')[0].id,'light');
});

test('nutrition policy weights every complete nutrient dimension and explains the active policy',()=>{
  assert.deepEqual(rankingPolicy.modes.nutrition.weights,{kcal:20,proteinGrams:30,fiberGrams:30,sodiumMg:20});
  assert.deepEqual(rankingPolicy.modes.diet.weights,{kcal:40,proteinGrams:30,fiberGrams:20,sodiumMg:10});
  const recipe=(id,perServing)=>meal(id,['닭고기'],id,{store:'Netto',nutritionFacts:{status:'complete',source:'verified',sourceServings:2,perServing}});
  const baseFacts={kcal:400,proteinGrams:20,fiberGrams:4,sodiumMg:300};
  const context={catalog:{닭고기:price},requireMainOffer:true,store:'Netto',mealOnly:true,rankingPolicy};
  for(const [mode,field,better,worse] of [
    ['nutrition','kcal',300,500],['nutrition','proteinGrams',30,10],['nutrition','fiberGrams',8,2],['nutrition','sodiumMg',200,500],
    ['diet','kcal',300,500],['diet','proteinGrams',30,10],['diet','fiberGrams',8,2],['diet','sodiumMg',200,500]
  ]) {
    const worseRecipe=recipe('a-worse-'+mode+'-'+field,{...baseFacts,[field]:worse});
    const betterRecipe=recipe('z-better-'+mode+'-'+field,{...baseFacts,[field]:better});
    assert.equal(engine.rankForMode([worseRecipe,betterRecipe],context,mode)[0].id,betterRecipe.id,mode+' '+field);
  }
  const explained=engine.evaluateRecipeForMode(recipe('explained',baseFacts),context,'nutrition');
  assert.ok(explained.reasons.some((reason)=>reason.includes('열량 20%')&&reason.includes('단백질 30%')&&reason.includes('식이섬유 30%')&&reason.includes('나트륨 20%')));
});

test('fourteen-slot sequencing keeps the family cap until exhausted and records relaxation',()=>{
  const pool=[];
  for(const family of ['a','b','c','d','e'])for(let index=0;index<3;index++)pool.push(meal(family+index,['닭고기'],family,{store:'Netto'}));
  const result=engine.sequence(pool,{catalog:{닭고기:price},date:'2026-09-08'},14);
  const firstTen=result.slice(0,10);
  for(const family of ['a','b','c','d','e'])assert.ok(firstTen.filter((candidate)=>candidate.recommendationProfile.family===family).length<=2);
  for(let index=1;index<result.length;index++)assert.notEqual(result[index].recommendationProfile.family,result[index-1].recommendationProfile.family);
  assert.ok(result.relaxations.some((entry)=>entry.code==='family-cap'&&entry.at>=10));
});
