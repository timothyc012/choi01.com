import crypto from 'node:crypto';
import {JSDOM} from 'jsdom';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {generateCatalog} from '../scripts/generate-meal-offers.mjs';
const context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(new URL('../public/mohemeokji/meal-recommendations.js',import.meta.url),'utf8'),context);
const engine=context.window.MealRecommendations;
const row={수집시각:'2026-10-04T20:00:00+02:00',체인:'Netto',지점:'Rahmer Str. 8',우편번호:'44369',행사기간:'05.10.2026-10.10.2026',상품명:'Butter',상품정보:'250 g',행사가격:'1.99',출처:'https://example.com/flyer',검토상태:'verified'};
const meal={id:'a',sourceRecipeId:'1',title:'연어 조림',sale:['연어'],missing:[],tags:[],detailIngredients:['연어 200g','간장 1T'],recommendationProfile:{primaryIngredients:['연어'],family:'salmon',method:'braise',kind:'main'}};
test('pumpkin and held offers cannot supply butter prices',()=>{
 assert.equal(generateCatalog([{...row,상품명:'Butternut Kürbis'}],'test').offersByIdentity.length,0);
 for(const status of ['held','미검토','rejected']) assert.equal(generateCatalog([{...row,검토상태:status}],'test').offersByIdentity.length,0);
 assert.equal(generateCatalog([row],'test').offersByIdentity.length,1);
});
test('dietary and exclusion constraints govern all recommendation modes',()=>{
 assert.equal(engine.evaluateRecipeForMode(meal,{dietary:'vegetarian'},'balanced').eligible,false);
 assert.equal(engine.evaluateRecipeForMode(meal,{excludeIngredients:['간장']},'balanced').eligible,false);
});
test('retired fresh herbs stay out while wasabi remains usable',()=>{
 assert.equal(engine.recipeAllowed({...meal,title:'냉이 목살 볶음밥',detailIngredients:['냉이 70g']}),false);
 assert.equal(engine.recipeAllowed({...meal,detailIngredients:['고추냉이 2g']}),true);
});
test('cold soup is not a complete automatic meal',()=>{
 assert.equal(engine.evaluateRecipeForMode({...meal,title:'오이미역냉국'}, {mealOnly:true},'balanced').eligible,false);
});
test('known units scale without inventing spoon or piece weights',()=>{
 const facts=engine.recipeQuantities({sourceServingText:'2인분',detailIngredients:['연어 200g','양파 1/2개','물 100ml','간장 1.5T','소금 약간']},6);
 assert.equal(facts.sourceServings,2); assert.equal(facts.requiredAmounts['연어'].amount,600);
 assert.equal(facts.requiredAmounts['물'].amount,300); assert.equal(facts.requiredAmounts['양파'],undefined);
 assert.ok(facts.labels.includes('양파 1.5개')); assert.ok(facts.labels.includes('간장 4.5T'));
 assert.ok(facts.unquantified.includes('소금 약간'));
});
test('an explicit mushroom species cannot match another species offer',()=>{
 const o={productDe:'Champignons weiß',identity:{ingredientId:'버섯'}};
 assert.equal(engine.offerMatchesRecipe(o,{title:'새송이버섯 구이',detailIngredients:['새송이버섯 200g']}),false);
 assert.equal(engine.offerMatchesRecipe(o,{title:'양송이 구이',detailIngredients:['양송이버섯 200g']}),true);
});

test('real snapshot UI applies shared conditions, scales amounts and adds only missing ingredients',async t=>{
 const root=new URL('../public/mohemeokji/',import.meta.url);
 const dom=new JSDOM(fs.readFileSync(new URL('index.html',root),'utf8'),{url:'http://localhost/mohemeokji/?postcode=44369&store=Netto%20Marken-Discount&date=2026-09-21',runScripts:'outside-only',pretendToBeVisual:true});t.after(()=>dom.window.close());
 const w=dom.window;w.TextDecoder=TextDecoder;w.TextEncoder=TextEncoder;Object.defineProperty(w,'crypto',{value:crypto.webcrypto});w.HTMLElement.prototype.scrollIntoView=()=>{};
 w.fetch=async url=>{const bytes=fs.readFileSync(new URL(url.replace('/mohemeokji/',''),root));return {ok:true,arrayBuffer:async()=>new Uint8Array(bytes).buffer};};
 for(const file of ['meal-shopping.js','meal-nutrition-policy.js','meal-recommendations.js','meal-verified-evidence.js','meal-data-loader.js','meal-planner-recipe-data.js']) w.eval(fs.readFileSync(new URL(file,root),'utf8'));
 const runtime=await w.MealRecipeData.startSnapshotApp();assert.notEqual(runtime.status,'unavailable',runtime.error?.stack);
 assert.equal(runtime.location.offers.some(o=>/Butternut/.test(o.productDe)),false);
 assert.equal(w.document.querySelector('#menuList').textContent.includes('냉이 목살'),false);
 const diet=w.document.querySelector('#dietaryChoice');diet.value='vegetarian';diet.dispatchEvent(new w.Event('change'));
 const policy=w.MealRecommendations;
 assert.ok(runtime.weeklyPlanMeals().length>0);
 assert.ok(runtime.weeklyPlanMeals().every(m=>policy.matchesConditions(m,{dietary:'vegetarian'})));
 w.document.querySelector('#excludeIngredients').value='토마토';w.document.querySelector('#applyConditions').click();
 await new Promise(resolve=>setTimeout(resolve,20));
 assert.ok(runtime.weeklyPlanMeals().every(m=>policy.matchesConditions(m,{dietary:'vegetarian',excludeIngredients:['토마토']})));
 // Inspect a real source-only recipe with measured pasta: 280 g for 3 servings => 560 g for 6.
 diet.value='any';w.document.querySelector('#excludeIngredients').value='';w.document.querySelector('#applyConditions').click();
 const serving=w.document.querySelector('#targetServings');serving.value='6';serving.dispatchEvent(new w.Event('change'));
 const meal=await runtime.openDetail('netto-marken-discount-recipe-1032061');assert.ok(meal);
 assert.match(w.document.querySelector('#scaledIngredients').textContent,/파스타면 560g/);
 const owned=w.document.querySelector('#detailIngredients [data-shopping-key]');assert.ok(owned);owned.checked=true;owned.dispatchEvent(new w.Event('change',{bubbles:true}));
 w.document.querySelector('#addShoppingItems').click();assert.ok(runtime.shoppingState.list.length>0);
 assert.equal(runtime.shoppingState.list.some(item=>item.key===owned.dataset.shoppingKey),false);
});

test('German selling packs calculate summed measured requirements',()=>{
 const c=vm.createContext({window:{}});vm.runInContext(fs.readFileSync(new URL('../public/mohemeokji/meal-shopping.js',import.meta.url),'utf8'),c);
 const basket=c.window.MealShopping.basket([{id:'a',store:'Netto',sale:['연어'],missing:[],requiredAmounts:{연어:{amount:600,unit:'g'}}}],{catalog:{Netto:{연어:{priceCents:599,pack:'400-g-Packung'}}}});
 assert.equal(basket.items[0].quantity,2);assert.equal(basket.items[0].quantityNeedsCheck,false);
 const range=c.window.MealShopping.basket([{id:'a',store:'Netto',sale:['연어'],missing:[],requiredAmounts:{연어:{amount:600,unit:'g'}}}],{catalog:{Netto:{연어:{priceCents:599,pack:'300-400 g'}}}});
 assert.equal(range.items[0].quantityNeedsCheck,true);
});

test('unknown source servings cannot yield a purchase quantity for six people',()=>{
 const value=engine.recipeQuantities({detailIngredients:['연어 200g']},6);
 assert.equal(value.scalable,false);assert.deepEqual(Object.keys(value.requiredAmounts),[]);
});
