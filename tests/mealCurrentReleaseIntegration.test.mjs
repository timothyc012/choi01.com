import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import test from 'node:test';
import {JSDOM} from 'jsdom';

const root=new URL('../public/mohemeokji/',import.meta.url);
const bytesAt=(relative)=>fs.readFileSync(new URL(relative,root));
const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
const current=JSON.parse(bytesAt('data/current.json'));
const manifestBytes=bytesAt('data/'+current.manifestPath);
const manifest=JSON.parse(manifestBytes);

async function openCurrentLocation(t,postcode,store) {
 const reference=manifest.locations.find(location=>location.postcode===postcode&&location.store===store);
 assert.ok(reference,'current release retains '+postcode+' '+store);
 const params=new URLSearchParams({postcode,store,branch:reference.branchId,date:current.weekStart});
 const dom=new JSDOM(bytesAt('index.html').toString(),{url:'http://localhost/mohemeokji/?'+params,runScripts:'outside-only',pretendToBeVisual:true});
 t.after(()=>dom.window.close());
 const w=dom.window,requests=[];
 w.TextDecoder=TextDecoder;w.TextEncoder=TextEncoder;
 Object.defineProperty(w,'crypto',{value:crypto.webcrypto});
 w.HTMLElement.prototype.scrollIntoView=()=>{};
 // No pointer or source overrides: the shipped loader checks the actual current bytes.
 w.fetch=async url=>{
  assert.ok(url.startsWith('/mohemeokji/data/'),url);
  requests.push(url);
  const bytes=bytesAt(url.slice('/mohemeokji/'.length));
  return {ok:true,arrayBuffer:async()=>new Uint8Array(bytes).buffer};
 };
 for(const file of ['meal-shopping.js','meal-nutrition-policy.js','meal-recommendations.js','meal-verified-evidence.js','meal-data-loader.js','meal-planner-recipe-data.js'])w.eval(bytesAt(file).toString());
 const runtime=await w.MealRecipeData.startSnapshotApp();
 assert.notEqual(runtime.status,'unavailable',runtime.error?.stack);
 return {w,runtime,requests,reference};
}

test('current release uses its hash-pinned week and retains the three requested store branches',async t=>{
 assert.equal(sha256(manifestBytes),current.manifestSha256);
 assert.equal(manifest.snapshotId,current.snapshotId);
 assert.equal(manifest.weekStart,current.weekStart);
 t.diagnostic('actual current release: '+current.weekStart+' / '+current.snapshotId);
 for(const [postcode,store] of [['44369','Netto Marken-Discount'],['40474','EDEKA'],['40489','Lidl']])await t.test(postcode+' '+store,async t=>{
  const {w,runtime,requests,reference}=await openCurrentLocation(t,postcode,store);
  assert.equal(runtime.manifest.snapshotId,current.snapshotId);
  assert.equal(runtime.manifest.weekStart,current.weekStart);
  assert.equal(runtime.location.postcode,postcode);
  assert.equal(runtime.location.store,store);
  assert.equal(runtime.location.branchId,reference.branchId);
  assert.equal(w.document.querySelector('#postcodeSelect').value,postcode);
  assert.equal(w.document.querySelector('#storeSelect').value,store);
  assert.equal(w.document.querySelector('#mealDate').value,current.weekStart);
  assert.ok(requests.includes('/mohemeokji/data/current.json'));
  assert.ok(requests.includes('/mohemeokji/data/'+current.manifestPath));
  assert.ok(requests.includes('/mohemeokji/data/'+reference.path));
  const locationBytes=bytesAt('data/'+reference.path);
  assert.equal(sha256(locationBytes),manifest.fileHashes[reference.path]);
  const sourceLocation=JSON.parse(locationBytes);
  const sourceOffers=new Map(sourceLocation.offers.map(offer=>[offer.offerId,offer]));
  assert.ok(runtime.location.offers.length>0,'current date has verified branch offers');
  for(const offer of runtime.location.offers) {
   assert.ok(sourceOffers.has(offer.offerId),'offer belongs to this selected branch');
   assert.equal(offer.postcode,postcode);assert.equal(offer.chain,store);assert.equal(offer.branchId,reference.branchId);
   assert.ok(offer.validFrom<=current.weekStart&&current.weekStart<=offer.validThrough,'offer is active on the selected shopping date');
  }
  const activeIds=new Set(runtime.location.offers.map(offer=>offer.offerId));
  assert.ok(runtime.recipes.length>0,'current release supplies real recipe choices');
  assert.ok(Number(w.document.querySelector('#menuCount').textContent)>0);
  for(const recipe of runtime.recipes) {
   assert.equal(recipe.store,store);assert.equal(recipe.branchId,reference.branchId);
   for(const offer of recipe.matchedOffers)assert.ok(activeIds.has(offer.offerId),'recipe must not borrow an inactive or foreign offer');
  }
 });
});

test('current EDEKA source quantities scale to six people and pantry ownership removes salmon from shopping',async t=>{
 const {w,runtime,requests}=await openCurrentLocation(t,'40474','EDEKA');
 const sourceRecipeId='6831097';
 const reference=runtime.location.recipes.find(recipe=>recipe.sourceRecipeId===sourceRecipeId);
 assert.ok(reference,'the actual current release contains the reviewed salmon recipe');
 const detailBytes=bytesAt('data/'+reference.detailPath);
 assert.equal(sha256(detailBytes),reference.detailSha256);
 const sourceDetail=JSON.parse(detailBytes);
 assert.equal(sourceDetail.sourceServingText,'2인분');
 assert.ok(sourceDetail.detailIngredients.includes('연어 200g'));
 assert.ok(sourceDetail.detailIngredients.includes('물 100ml'));
 const servings=w.document.querySelector('#targetServings');
 servings.value='6';servings.dispatchEvent(new w.Event('change'));
 const meal=await runtime.openDetail('edeka-recipe-'+sourceRecipeId);
 assert.ok(meal);
 assert.ok(requests.includes('/mohemeokji/data/'+reference.detailPath));
 assert.equal(w.document.querySelector('#recipeSource').href,'https://www.10000recipe.com/recipe/'+sourceRecipeId);
 assert.match(w.document.querySelector('#scaledIngredients').textContent,/연어 600g/);
 assert.match(w.document.querySelector('#scaledIngredients').textContent,/물 300ml/);
 assert.match(w.document.querySelector('#recipeStepsBasis').textContent,/원문 2인분 기준.*선택한 6인분.*환산 목록/);
 const owned=w.document.querySelector('#detailIngredients [data-shopping-key="EDEKA:연어"]');
 assert.ok(owned,'the detail drawer exposes the actual salmon pantry choice');
 assert.match(owned.closest('li').textContent,/필요 600g/);
 w.document.querySelector('#addShoppingItems').click();
 assert.ok(runtime.shoppingState.list.some(item=>item.key==='EDEKA:연어'),'unowned salmon is on the real shopping list');
 owned.checked=true;owned.dispatchEvent(new w.Event('change',{bubbles:true}));
 assert.equal(runtime.shoppingState.pantry.has('EDEKA:연어'),true);
 assert.equal(runtime.shoppingState.list.some(item=>item.key==='EDEKA:연어'),false);
 assert.ok(runtime.shoppingState.list.length>0,'other missing ingredients remain on the list');
 assert.match(w.document.querySelector('#detailIngredients [data-shopping-key="EDEKA:연어"]').closest('li').textContent,/구매 제외/);
 const saved=JSON.parse(w.localStorage.getItem(runtime.shoppingStorageKey));
 assert.ok(saved.pantry.includes('EDEKA:연어'),'pantry ownership is saved in this branch scope');
 assert.equal(sha256(bytesAt('data/'+reference.detailPath)),reference.detailSha256,'local servings and pantry do not mutate source evidence');
});
