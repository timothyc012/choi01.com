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
 assert.equal(w.document.querySelector('[data-filter="quick"]').disabled,true);
 assert.match(w.document.querySelector('[data-filter="quick"]').textContent,/시간 미확인/);
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
 assert.match(w.document.querySelector('#recipeStepsBasis').textContent,/원문 3인분 기준.*선택한 6인분.*환산 목록/);
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

test('invalid fractions, conflicting servings and legacy estimates stay unresolved',()=>{
 const invalid=engine.recipeQuantities({sourceServingText:'2인분',detailIngredients:['소금 1/0g','양파 약간'],requiredAmounts:{양파:{amount:100,unit:'g'}}},4);
 assert.deepEqual(Object.keys(invalid.requiredAmounts),[]);
 assert.equal(invalid.unquantified.length,2);
 const conflict=engine.recipeQuantities({sourceServingText:'2인분',sourceServings:3,detailIngredients:['연어 200g']},6);
 assert.equal(conflict.scalable,false);assert.deepEqual(Object.keys(conflict.requiredAmounts),[]);
 const duplicate=engine.recipeQuantities({sourceServingText:'2인분',detailIngredients:['양파 100g','양파 0.2kg']},4);
 assert.equal(duplicate.requiredAmounts['양파'].amount,600);
});

test('source cooking times use explicit minutes and never an editorial quick tag',()=>{
 const c=vm.createContext({window:{},URLSearchParams});
 vm.runInContext(fs.readFileSync(new URL('../public/mohemeokji/meal-planner-recipe-data.js',import.meta.url),'utf8'),c);
 const api=c.window.MealRecipeData;
 assert.equal(api.sourceMinutes('15분 이내'),15);
 assert.equal(api.sourceMinutes(' 20분 '),20);
 for(const value of ['10~20분','1시간','빠르게','0분','20분 정도',null])assert.equal(api.sourceMinutes(value),null);
 const unknown=api.fromSnapshotLocation({store:'Netto',branchId:'a',offers:[],recipes:[{sourceRecipeId:'1',sourceTimeText:null,filters:['quick']}]})[0];
 assert.equal(unknown.time,null);assert.equal(unknown.filter.includes('quick'),false);
});

function estimatedNutritionFixture() {
 return {status:'estimated',source:'reviewed-food-record-calculation-v1',sourceServings:2,assumptionsComplete:true,uncertaintyKind:'reviewed-scenario-interval',perServing:{kcal:200.4,proteinGrams:20.25,fiberGrams:5.12,sodiumMg:550.65},
  perServingRange:{kcal:{min:180,max:220},proteinGrams:{min:18,max:23},fiberGrams:{min:4,max:6},sodiumMg:{min:500,max:600}},
  coverage:{inventoryReviewed:true,resolvedIngredientCount:2,totalIngredientCount:2},
  components:[{ingredientOrdinal:1,ingredientLabel:'파스타면',quantityText:'100g',grams:100,gramsRange:{min:100,max:100},per100g:{kcal:400.8,proteinGrams:40.5,fiberGrams:10.24,sodiumMg:1.3},foodMatchType:'exact'},
   {ingredientOrdinal:2,ingredientLabel:'소금',quantityText:'2g',grams:2,gramsRange:{min:2,max:2},per100g:{kcal:0,proteinGrams:0,fiberGrams:0,sodiumMg:55000},foodMatchType:'exact'}],
  assumptions:[{ingredientOrdinal:1,ingredientLabel:'양파',quantityText:'1개',kind:'user-quantity-scenario',grams:{central:80,min:60,max:100},referenceName:'중간 크기 환산',sourceURL:'https://example.test/onion-reference'}],
  sources:[{foodId:'G480100',version:'BLS 4.0',sourceURL:'https://blsdb.de/'}],unquantifiedUncertainty:[{ingredientLabel:'양파'}]};
}

test('nutrition panel separates sourced calculation, scenario range and incomplete totals safely',()=>{
 const c=vm.createContext({window:{},URLSearchParams,URL});
 vm.runInContext(fs.readFileSync(new URL('../public/mohemeokji/meal-planner-recipe-data.js',import.meta.url),'utf8'),c);
 const api=c.window.MealRecipeData,estimated=estimatedNutritionFixture();
 const dom=new JSDOM(api.nutritionPanelHtml(estimated));
 const text=dom.window.document.body.textContent;
 assert.match(text,/1인분 추정 영양/);assert.match(text,/약 200 kcal/);assert.match(text,/180 kcal ~ 220 kcal/);
 assert.match(text,/20\.3 g/);assert.match(text,/551 mg/);assert.match(text,/분량 가정 60\.0 g ~ 100\.0 g/);
 assert.match(text,/통계적 오차나 실제 제품·조리 차이의 범위가 아닙니다/);
 assert.equal(dom.window.document.querySelector('details summary').textContent,'계산 근거');
 assert.equal(dom.window.document.querySelectorAll('details a').length,2);
 const exact=api.nutritionPanelHtml({...estimated,status:'complete',assumptions:[],perServingRange:undefined});
 assert.match(exact,/확인된 재료량/);assert.doesNotMatch(exact,/시나리오 180/);
 const partial=api.nutritionPanelHtml({status:'partial',knownTotals:{kcal:100,proteinGrams:5,fiberGrams:null,sodiumMg:null},coverage:{resolvedIngredientCount:1,totalIngredientCount:3},missingIngredients:[{ingredientLabel:'소금'}],missingNutrients:[{nutrient:'sodiumMg'}]});
 assert.match(partial,/확인된 재료 1 \/ 3개/);assert.match(partial,/소금/);assert.match(partial,/미확인 성분: 나트륨/);
 assert.match(partial,/100 kcal/);assert.match(partial,/1인분 전체 영양값이 아닙니다/);
 assert.doesNotMatch(partial,/1인분 추정 영양/);
 const unknown=api.nutritionPanelHtml(null);assert.doesNotMatch(unknown,/0 kcal/);assert.doesNotMatch(unknown,/nutrition-grid/);
 const malformed=api.nutritionPanelHtml({...estimated,perServingRange:{}});assert.match(malformed,/전체 영양 계산 미완료/);assert.doesNotMatch(malformed,/약 200/);
 const noSource=api.nutritionPanelHtml({...estimated,source:null});assert.match(noSource,/전체 영양 계산 미완료/);assert.doesNotMatch(noSource,/약 200/);
 const scoped=api.nutritionPanelHtml({...estimated,calculationScope:{disclosures:['수육 본체만 계산했습니다.'],excludedAccompaniments:[{ingredientLabel:'오이탕탕이',stepOrdinals:[3],disclosure:'선택 곁들임'}],reviewedBy:'PRIVATE_ACTOR'}});
 assert.match(scoped,/nutrition-calculation-scope/);assert.match(scoped,/수육 본체만 계산했습니다/);assert.match(scoped,/계산에서 제외한 곁들임: 오이탕탕이/);
 assert.match(scoped,/식사 전체의 영양값이 아닙니다/);assert.doesNotMatch(scoped,/PRIVATE_ACTOR/);
 dom.window.close();
});

test('nutrition evidence escapes labels and exposes neither private bodies nor unsafe source links',()=>{
 const c=vm.createContext({window:{},URLSearchParams,URL});
 vm.runInContext(fs.readFileSync(new URL('../public/mohemeokji/meal-planner-recipe-data.js',import.meta.url),'utf8'),c);
 const facts=estimatedNutritionFixture();
 facts.assumptions=[{ingredientLabel:'<img src=x onerror="evil()">',quantityText:'1개 <script>evil()</script>',referenceName:'<b>출처</b>',sourceURL:'https://example.test/reference',grams:{central:10,min:5,max:15},sourceBody:'PRIVATE_RAW_BODY',privatePath:'/Users/01/.env'},
  {ingredientLabel:'후추',sourceURL:'javascript:evil()'},{ingredientLabel:'소금',sourceURL:'file:///Users/01/.env'}];
 const html=c.window.MealRecipeData.nutritionPanelHtml(facts),dom=new JSDOM(html);
 assert.equal(dom.window.document.querySelectorAll('img,script,b').length,0);
 assert.match(dom.window.document.body.textContent,/<img src=x/);
 assert.doesNotMatch(html,/PRIVATE_RAW_BODY|\/Users\/01\/|javascript:/);
 assert.equal([...dom.window.document.querySelectorAll('a')].every(link=>link.protocol==='https:'),true);
 assert.doesNotMatch(dom.window.document.body.textContent,/영양 목표를 충족합니다|건강을 보장합니다/);
 dom.window.close();
});

test('local gram calculation requires reviewed full nutrient components and scopes edits to source hash',()=>{
 const c=vm.createContext({window:{},URLSearchParams,URL});
 vm.runInContext(fs.readFileSync(new URL('../public/mohemeokji/meal-planner-recipe-data.js',import.meta.url),'utf8'),c);
 const api=c.window.MealRecipeData,facts=estimatedNutritionFixture();
 assert.equal(api.editableNutrition(facts),true);
 const edited=api.calculateEditedNutrition({...facts,calculationSha256:'c'.repeat(64)},{1:200,2:2});
 assert.equal(edited.source,'user-input-grams');assert.equal(edited.perServing.kcal,400.8);
 assert.equal(edited.localOnly,true);assert.equal(edited.calculationSha256,undefined);assert.equal(edited.knownTotals.kcal,801.6);
 assert.equal(edited.perServingRange.kcal.min,400.8);assert.equal(edited.perServingRange.kcal.max,400.8);
 assert.equal(edited.perServing.proteinGrams,40.5);assert.equal(facts.perServing.kcal,200.4);
 const partial={...facts,components:[{...facts.components[0],per100g:{...facts.components[0].per100g,kcal:null}},facts.components[1]]};
 assert.equal(api.editableNutrition(partial),false);assert.equal(api.calculateEditedNutrition(partial,{1:200,2:2}),null);
 assert.equal(api.editableNutrition({...facts,coverage:{...facts.coverage,inventoryReviewed:false}}),false);
 assert.equal(api.calculateEditedNutrition(facts,{1:200}),null);
 assert.equal(api.calculateEditedNutrition(facts,{1:200,2:-1}),null);
 const unknownMass={...facts,components:[{...facts.components[0],grams:null},facts.components[1]]};
 assert.equal(api.editableNutrition(unknownMass),true);assert.notEqual(api.calculateEditedNutrition(unknownMass,{1:200,2:2}),null);
 const meal={sourceRecipeId:'1',sourceContentHash:'a'.repeat(64)};
 assert.notEqual(api.nutritionEditStorageKey(meal),api.nutritionEditStorageKey({...meal,sourceContentHash:'b'.repeat(64)}));
 assert.equal(api.nutritionEditStorageKey({...meal,sourceContentHash:'unknown'}),null);
});

test('detail, pantry and shopping use the same scoped full basket including ordinary prices',async t=>{
 const root=new URL('../public/mohemeokji/',import.meta.url),store='Netto',branchId='branch-a',sourceRecipeId='9999001';
 const scope={postcode:'44369',store,branchId,date:'2026-10-05',targetServings:2};
 const priceItem=(name,amount,priceCents)=>({key:'food-'+name,name,pantryKeys:[store+':'+name],pack:{amount:500,unit:'g'},requiredAmount:{amount,unit:'g'},priceCents,quantity:1,subtotalCents:priceCents,quantityComplete:true,sourceURL:'https://example.test/'+encodeURIComponent(name),sourceSha256:'a'.repeat(64),validFrom:scope.date,validThrough:'2026-10-11'});
 const basketFacts={sourceCoverage:'complete',costStatus:'complete',sourceRecipeId,...scope,items:[priceItem('파스타면',100,199),priceItem('소금',2,99)]};
 const recipe={sourceRecipeId,sourceContentHash:'d'.repeat(64),title:'간단 파스타',sourceServingText:'2인분',sourceTimeText:'15분 이내',detailIngredients:['파스타면 100g','소금 2g'],primaryIngredientIds:['파스타면'],recommendationProfile:{primaryIngredients:['파스타면'],family:'pasta',method:'boil',kind:'main'},offerIds:['pasta-offer'],basketFacts,nutritionFacts:estimatedNutritionFixture(),detailPath:'test.detail.json',detailSha256:'b'.repeat(64)};
 const location={id:'44369-netto-branch-a',snapshotId:'fixture',postcode:scope.postcode,store,branchId,coverage:{sparse:false},recipes:[recipe],offers:[{offerId:'pasta-offer',identity:{ingredientId:'파스타면'},productDe:'Pasta',pack:'500 g',priceCents:199,validFrom:scope.date,validThrough:'2026-10-11',evidenceUrl:'https://example.test/pasta'}]};
 const dom=new JSDOM(fs.readFileSync(new URL('index.html',root),'utf8'),{url:'http://localhost/mohemeokji/?postcode=44369&store=Netto&date=2026-10-05',runScripts:'outside-only',pretendToBeVisual:true});t.after(()=>dom.window.close());
 const w=dom.window;w.HTMLElement.prototype.scrollIntoView=()=>{};
 for(const file of ['meal-shopping.js','meal-nutrition-policy.js','meal-recommendations.js','meal-planner-recipe-data.js'])w.eval(fs.readFileSync(new URL(file,root),'utf8'));
 w.MealDataLoader={loadCurrentSnapshot:async()=>({snapshotId:'fixture',weekStart:scope.date,source:{csvSha256:'c'.repeat(64)},locations:[{...location,recipeCount:1}]}),loadLocationSnapshot:async()=>location,loadDiscoveryCatalog:async()=>({recipes:[]}),loadRecipeDetail:async()=>({...recipe,sourceUrl:'https://www.10000recipe.com/recipe/'+sourceRecipeId,sourceTitle:'간단 파스타',steps:['파스타를 삶는다.','소금을 넣는다.']})};
 const runtime=await w.MealRecipeData.startSnapshotApp();assert.notEqual(runtime.status,'unavailable',runtime.error?.stack);
 assert.equal(w.document.querySelector('[data-filter="quick"]').disabled,false);
 w.document.querySelector('[data-filter="quick"]').click();assert.equal(w.document.querySelector('#menuCount').textContent,'1');
 const valueMode=w.document.querySelector('[name="recommendationMode"][value="value"]');valueMode.click();
 assert.equal(w.document.querySelector('#todayCost').textContent,'2,98€');
 await runtime.openDetail('netto-recipe-'+sourceRecipeId);
 assert.match(w.document.querySelector('#detailNutrition').textContent,/1인분 추정 영양.*약 200 kcal/s);
 assert.match(w.document.querySelector('#recipeMeta').textContent,/15분 이내/);
 const gramInput=w.document.querySelector('[data-nutrition-ordinal="1"]');assert.equal(gramInput.value,'100');
 gramInput.value='200';gramInput.dispatchEvent(new w.Event('input',{bubbles:true}));
 assert.match(w.document.querySelector('[data-nutrition-edit-status]').textContent,/아직 계산에 적용되지/);
 w.document.querySelector('[data-apply-nutrition-grams]').click();
 assert.match(w.document.querySelector('#detailNutrition').textContent,/입력한 중량 기준 1인분 추정.*약 401 kcal/s);
 assert.match(w.document.querySelector('#detailNutrition').textContent,/영양 계산에만 적용/);
 assert.equal(runtime.recipes[0].nutritionFacts.perServing.kcal,200.4);
 assert.match(w.document.querySelector('#scaledIngredients').textContent,/파스타면 100g/);
 const editKey=w.MealRecipeData.nutritionEditStorageKey(recipe),savedEdit=JSON.parse(w.localStorage.getItem(editKey));
 assert.equal(savedEdit.gramsByOrdinal['1'],200);assert.equal(savedEdit.sourceContentHash,recipe.sourceContentHash);
 await runtime.openDetail('netto-recipe-'+sourceRecipeId);assert.equal(w.document.querySelector('[data-nutrition-ordinal="1"]').value,'200');
 w.document.querySelector('[data-reset-nutrition-grams]').click();assert.equal(w.localStorage.getItem(editKey),null);
 assert.match(w.document.querySelector('#detailNutrition').textContent,/1인분 추정 영양.*약 200 kcal/s);
 assert.equal(w.document.querySelector('[data-nutrition-ordinal="1"]').value,'100');
 assert.equal(w.document.querySelector('#shoppingTotal').textContent,'2,98€');
 assert.match(w.document.querySelector('#detailIngredients').textContent,/소금.*0,99€/);
 assert.equal(w.document.querySelector('#shoppingSource').querySelectorAll('a').length,2);
 w.document.querySelector('#addShoppingItems').click();assert.equal(runtime.shoppingState.list.length,2);
 const owned=w.document.querySelector('[data-shopping-key="Netto:소금"]');owned.checked=true;owned.dispatchEvent(new w.Event('change',{bubbles:true}));
 assert.equal(w.document.querySelector('#shoppingTotal').textContent,'1,99€');
 assert.equal(w.document.querySelector('#todayCost').textContent,'1,99€');
 assert.equal(runtime.shoppingState.list.some(item=>item.key==='Netto:소금'),false);
 assert.equal(runtime.shoppingState.list[0].key,'Netto:파스타면');
 w.document.querySelector('#clearPlan').click();
 runtime.plans.저녁.mon=w.MealShopping.normalizePlanSlot('netto-recipe-'+sourceRecipeId,'manual');
 runtime.plans.저녁.tue=w.MealShopping.normalizePlanSlot('netto-recipe-'+sourceRecipeId,'manual');
 const week=runtime.weekBasket();assert.equal(week.costStatus,'complete');assert.equal(week.knownSubtotalCents,199);assert.equal(week.items[0].requiredAmount.amount,200);assert.equal(week.items[0].quantity,1);
 const servings=w.document.querySelector('#targetServings');servings.value='6';servings.dispatchEvent(new w.Event('change'));
 await runtime.openDetail('netto-recipe-'+sourceRecipeId);
 assert.equal(w.document.querySelector('[data-nutrition-ordinal="1"]').value,'300');
 w.document.querySelector('[data-nutrition-ordinal="1"]').value='600';w.document.querySelector('[data-apply-nutrition-grams]').click();
 assert.equal(JSON.parse(w.localStorage.getItem(editKey)).gramsByOrdinal['1'],200);
 assert.match(w.document.querySelector('#detailNutrition').textContent,/약 401 kcal/);
 recipe.sourceContentHash='e'.repeat(64);recipe.detailSha256='e'.repeat(64);runtime.recipes[0].detailSha256=recipe.detailSha256;
 await runtime.openDetail('netto-recipe-'+sourceRecipeId);
 assert.equal(w.document.querySelector('[data-nutrition-ordinal="1"]').value,'300');
 assert.match(w.document.querySelector('#detailNutrition').textContent,/약 200 kcal/);
 const partial=estimatedNutritionFixture();partial.status='partial';partial.perServing=null;partial.components[0].per100g.kcal=null;
 recipe.nutritionFacts=partial;recipe.detailSha256='f'.repeat(64);runtime.recipes[0].detailSha256=recipe.detailSha256;
 await runtime.openDetail('netto-recipe-'+sourceRecipeId);
 assert.equal(w.document.querySelector('[data-nutrition-ordinal]'),null);
 assert.match(w.document.querySelector('#detailNutrition').textContent,/누락된 영양자료는 중량 입력으로 대체하지 않습니다/);
});

test('per-weight quotes never become fictitious whole packages',()=>{
 const c=vm.createContext({window:{}});vm.runInContext(fs.readFileSync(new URL('../public/mohemeokji/meal-shopping.js',import.meta.url),'utf8'),c);
 for(const pack of ['je 100 g','pro 1 kg','ideal zum Kurzbraten, je 100 g','1 kg · 구매 중량 확인']) {
  const cart=c.window.MealShopping.basket([{id:'a',store:'EDEKA',sale:['닭가슴살'],missing:[],requiredAmounts:{닭가슴살:{amount:350,unit:'g'}}}],{catalog:{EDEKA:{닭가슴살:{priceCents:99,pack}}}});
  assert.equal(cart.items[0].quantityNeedsCheck,true,pack);assert.notEqual(cart.costStatus,'complete');
 }
});

test('fresh herb variants are blocked without treating a review author as food',()=>{
 for(const label of ['다진 냉이 50g','세발나물 한 줌','노지달래 20g'])assert.equal(engine.recipeAllowed({...meal,title:'한 끼',detailIngredients:[label]}),false,label);
 assert.equal(engine.recipeAllowed({...meal,title:'초코 케이크',detailIngredients:['밀가루 200g','♥달래♥ 5.0(7)']}),true);
 assert.equal(engine.recipeAllowed({...meal,title:'고추냉이 소스',detailIngredients:['고추냉이 2g']}),true);
 assert.equal(engine.recipeAllowed({...meal,title:'냉이 요리',detailIngredients:['냉동 냉이 50g']}),true);
});
