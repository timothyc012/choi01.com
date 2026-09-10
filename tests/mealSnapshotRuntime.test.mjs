import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import vm from 'node:vm';
import {JSDOM} from 'jsdom';

const root = new URL('../public/mohemeokji/', import.meta.url);

function sha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

function response(body, ok = true) {
  return {
    ok,
    status: ok ? 200 : 404,
    async arrayBuffer() { return new TextEncoder().encode(body).buffer; }
  };
}

function fixture(overrides = {}) {
  const detailPath = 'snapshots/2026-09-07/snapshot-a/recipes/7000001.detail.json';
  const detail = JSON.stringify({schemaVersion:1,sourceRecipeId:'7000001',title:'닭가슴살 볶음'});
  const locationPath = 'snapshots/2026-09-07/snapshot-a/locations/52064-edeka-branch-a.json';
  const location = JSON.stringify({
    schemaVersion:1,snapshotId:'snapshot-a',postcode:'52064',store:'EDEKA',branchId:'branch-a',
    coverage:{sparse:false},
    recipes:[{sourceRecipeId:'7000001',detailPath,detailSha256:sha256(detail)}]
  });
  const otherPath = 'snapshots/2026-09-07/snapshot-a/locations/44369-netto-branch-b.json';
  const manifestPath = 'snapshots/2026-09-07/snapshot-a/manifest.json';
  const manifestObject = {
    schemaVersion:1,snapshotId:'snapshot-a',weekStart:'2026-09-07',
    coveragePath:'snapshots/2026-09-07/snapshot-a/coverage.json',
    recipeIndexPath:'snapshots/2026-09-07/snapshot-a/recipes/index.json',
    reviewQueuePath:'snapshots/2026-09-07/snapshot-a/review-queue.json',
    locations:[
      {id:'52064-edeka-branch-a',postcode:'52064',store:'EDEKA',branchId:'branch-a',path:locationPath,recipeCount:1},
      {id:'44369-netto-branch-b',postcode:'44369',store:'Netto',branchId:'branch-b',path:otherPath,recipeCount:0}
    ],
    fileHashes:{
      [locationPath]:sha256(location),[detailPath]:sha256(detail),[otherPath]:sha256('{}'),
      'snapshots/2026-09-07/snapshot-a/coverage.json':sha256('{}'),
      'snapshots/2026-09-07/snapshot-a/recipes/index.json':sha256('{}'),
      'snapshots/2026-09-07/snapshot-a/review-queue.json':sha256('{}')
    }
  };
  Object.assign(manifestObject, overrides.manifest);
  const manifest = JSON.stringify(manifestObject);
  const currentObject = {
    schemaVersion:1,snapshotId:'snapshot-a',weekStart:'2026-09-07',manifestPath,
    manifestSha256:sha256(manifest),...overrides.current
  };
  const bodies = new Map([
    ['/mohemeokji/data/current.json', JSON.stringify(currentObject)],
    ['/mohemeokji/data/' + manifestPath, overrides.manifestBody || manifest],
    ['/mohemeokji/data/' + locationPath, overrides.locationBody || location],
    ['/mohemeokji/data/' + detailPath, overrides.detailBody || detail],
    ['/mohemeokji/data/' + otherPath, '{}']
  ]);
  const calls = [];
  const fetcher = async (url) => {
    calls.push(url);
    return bodies.has(url) ? response(bodies.get(url)) : response('', false);
  };
  return {fetcher,calls,manifestObject,currentObject,locationPath,detailPath};
}

function loadRuntime() {
  const context = vm.createContext({window:{},TextEncoder,TextDecoder,crypto:crypto.webcrypto});
  vm.runInContext(fs.readFileSync(new URL('meal-data-loader.js', root), 'utf8'), context);
  return context.window.MealDataLoader;
}

function loadRecipeData(search = '') {
  const context = vm.createContext({window:{ontologyRecipeDetails:[]},URLSearchParams});
  vm.runInContext(fs.readFileSync(new URL('meal-planner-recipe-data.js', root), 'utf8'), context);
  return {api:context.window.MealRecipeData,window:context.window,search};
}

test('fetches only current, its pinned manifest, the selected location, and one opened detail', async () => {
  const loader = loadRuntime();
  const data = fixture();
  const manifest = await loader.loadCurrentSnapshot(data.fetcher);
  const location = await loader.loadLocationSnapshot(manifest,{postcode:'52064',store:'EDEKA',branchId:'branch-a'},data.fetcher);
  assert.equal(location.recipes.length,1);
  assert.equal(data.calls.length,3);
  assert.equal(data.calls.some((url)=>url.includes('44369-netto')),false);
  assert.equal(data.calls.some((url)=>url.includes('.csv')||url.includes('review-queue')),false);
  const detail = await loader.loadRecipeDetail(location,'7000001',data.fetcher);
  assert.equal(detail.sourceRecipeId,'7000001');
  assert.deepEqual(data.calls,[
    '/mohemeokji/data/current.json',
    '/mohemeokji/data/snapshots/2026-09-07/snapshot-a/manifest.json',
    '/mohemeokji/data/snapshots/2026-09-07/snapshot-a/locations/52064-edeka-branch-a.json',
    '/mohemeokji/data/snapshots/2026-09-07/snapshot-a/recipes/7000001.detail.json'
  ]);
});

test('fails closed for corrupt pointers, mismatched manifest hashes, and unsafe artifact paths', async () => {
  const loader = loadRuntime();
  const corrupt = fixture();
  corrupt.fetcher = async () => response('{bad json');
  await assert.rejects(loader.loadCurrentSnapshot(corrupt.fetcher),/unavailable/i);

  const mismatch = fixture({current:{manifestSha256:'0'.repeat(64)}});
  await assert.rejects(loader.loadCurrentSnapshot(mismatch.fetcher),/hash/i);

  const unsafe = fixture({current:{manifestPath:'../private.json'}});
  await assert.rejects(loader.loadCurrentSnapshot(unsafe.fetcher),/unsafe/i);

  const unsafeDeclared = fixture({manifest:{coveragePath:'../private.json'}});
  await assert.rejects(loader.loadCurrentSnapshot(unsafeDeclared.fetcher),/unsafe/i);
});

test('fails closed when a selected location or opened detail does not match its pinned hash', async () => {
  const loader = loadRuntime();
  const locationMismatch = fixture({locationBody:'{}'});
  const manifest = await loader.loadCurrentSnapshot(locationMismatch.fetcher);
  await assert.rejects(loader.loadLocationSnapshot(manifest,{postcode:'52064',store:'EDEKA',branchId:'branch-a'},locationMismatch.fetcher),/hash/i);

  const detailMismatch = fixture({detailBody:'{}'});
  const secondManifest = await loader.loadCurrentSnapshot(detailMismatch.fetcher);
  const location = await loader.loadLocationSnapshot(secondManifest,{postcode:'52064',store:'EDEKA',branchId:'branch-a'},detailMismatch.fetcher);
  await assert.rejects(loader.loadRecipeDetail(location,'7000001',detailMismatch.fetcher),/hash/i);
});

test('returns an explicit sparse location without requesting legacy or another store', async () => {
  const loader = loadRuntime();
  const sparsePath='snapshots/2026-09-07/snapshot-a/locations/52064-edeka-branch-a.json';
  const sparseBody=JSON.stringify({schemaVersion:1,snapshotId:'snapshot-a',postcode:'52064',store:'EDEKA',branchId:'branch-a',coverage:{sparse:true},recipes:[]});
  const data=fixture({locationBody:sparseBody});
  data.manifestObject.fileHashes[sparsePath]=sha256(sparseBody);
  const manifestBody=JSON.stringify(data.manifestObject);
  data.currentObject.manifestSha256=sha256(manifestBody);
  const bodies=new Map([
    ['/mohemeokji/data/current.json',JSON.stringify(data.currentObject)],
    ['/mohemeokji/data/snapshots/2026-09-07/snapshot-a/manifest.json',manifestBody],
    ['/mohemeokji/data/'+sparsePath,sparseBody]
  ]);
  data.calls.length=0;
  const fetcher=async(url)=>{data.calls.push(url);return bodies.has(url)?response(bodies.get(url)):response('',false);};
  const loadedManifest=await loader.loadCurrentSnapshot(fetcher);
  const location=await loader.loadLocationSnapshot(loadedManifest,{postcode:'52064',store:'EDEKA',branchId:'branch-a'},fetcher);
  assert.equal(location.coverage.sparse,true);
  assert.equal(location.recipes.length,0);
  assert.equal(data.calls.some((url)=>url.includes('legacy')||url.includes('44369')),false);
});

test('legacy recipes are enabled only by the explicit snapshot query and snapshot refs stay detail-lazy', () => {
  const {api}=loadRecipeData();
  assert.equal(api.legacyEnabled('?postcode=52064'),false);
  assert.equal(api.legacyEnabled('?snapshot=legacy'),true);
  assert.equal(api.legacyEnabled('?snapshot=current'),false);
  const summaries=api.fromSnapshotLocation({store:'EDEKA',recipes:[{
    sourceRecipeId:'7000001',detailPath:'snapshots/week/id/recipes/7000001.hash.json',detailSha256:'a'.repeat(64),
    offerIds:['offer-a'],primaryIngredientIds:['닭가슴살'],recommendationProfile:{kind:'main'}
  }]});
  assert.equal(summaries.length,1);
  assert.equal(summaries[0].sourceRecipeId,'7000001');
  assert.equal('steps' in summaries[0],false);
  assert.equal('detailIngredients' in summaries[0],false);
  const catalog=api.offerCatalogFromSnapshot({offers:[{
    offerId:'offer-a',chain:'EDEKA',identity:{ingredientId:'닭가슴살'},productDe:'Hähnchenbrustfilet',pack:'500 g',priceCents:599,
    validFrom:'2026-09-07',validThrough:'2026-09-13',evidenceUrl:'https://example.com/offer'
  }]});
  assert.equal(catalog['닭가슴살'].product,'Hähnchenbrustfilet');
  assert.equal(catalog['닭가슴살'].priceCents,599);
  const duplicateLocation={store:'EDEKA',offers:[
    {offerId:'offer-rib',identity:{ingredientId:'소고기등심'},productDe:'Rib-Eye',pack:'300 g',priceCents:699},
    {offerId:'offer-entrecote',identity:{ingredientId:'소고기등심'},productDe:'Entrecôte',pack:'300 g',priceCents:799}
  ],recipes:[
    {sourceRecipeId:'1',offerIds:['offer-rib'],primaryIngredientIds:['소고기등심'],recommendationProfile:{}},
    {sourceRecipeId:'2',offerIds:['offer-entrecote'],primaryIngredientIds:['소고기등심'],recommendationProfile:{}}
  ]};
  const duplicateCatalog=api.offerCatalogFromSnapshot(duplicateLocation);
  const duplicateRecipes=api.fromSnapshotLocation(duplicateLocation);
  assert.deepEqual(Object.keys(duplicateCatalog.offersById).sort(),['offer-entrecote','offer-rib']);
  assert.equal(duplicateCatalog['소고기등심'],undefined);
  assert.equal(duplicateRecipes[0].matchedOffers[0].productDe,'Rib-Eye');
  assert.equal(duplicateRecipes[1].matchedOffers[0].productDe,'Entrecôte');
});

test('non-legacy bootstrap uses snapshot-only location and branch, rerenders summaries, rolls shopping state, and lazily opens detail', async () => {
  const detailPath='snapshots/2026-09-07/snapshot-new/recipes/9000001.detail.json';
  const detail=JSON.stringify({
    schemaVersion:1,sourceRecipeId:'9000001',title:'새 지점 닭가슴살 볶음',sourceTitle:'원문 제목',sourceAuthor:'작성자',
    sourceUrl:'https://www.10000recipe.com/recipe/9000001',sourceServingText:'2인분',detailIngredients:['닭가슴살 300g','소금 1t'],steps:['손질한다.','익힌다.','담는다.']
  });
  const locationPath='snapshots/2026-09-07/snapshot-new/locations/99999-neuemarkt-branch-b.json';
  const offer={offerId:'offer-new',chain:'NeueMarkt',branchId:'branch-b',identity:{ingredientId:'닭가슴살'},productDe:'Hähnchenbrustfilet',pack:'500 g',priceCents:599,validFrom:'2026-09-07',validThrough:'2026-09-13'};
  const reference={sourceRecipeId:'9000001',detailPath,detailSha256:sha256(detail),offerIds:['offer-new'],primaryIngredientIds:['닭가슴살'],recommendationProfile:{primaryIngredients:['닭가슴살'],family:'chicken',method:'stirfry',kind:'main'},qualityScore:0.9};
  const locationBody=JSON.stringify({schemaVersion:1,snapshotId:'snapshot-new',weekStart:'2026-09-07',id:'99999-neuemarkt-branch-b',postcode:'99999',store:'NeueMarkt',branch:'Second branch',branchId:'branch-b',offers:[offer],coverage:{sparse:false},warnings:[],recipes:[reference]});
  const otherLocationPath='snapshots/2026-09-07/snapshot-new/locations/99999-neuemarkt-branch-a.json';
  const support={
    coveragePath:'snapshots/2026-09-07/snapshot-new/coverage.json',
    recipeIndexPath:'snapshots/2026-09-07/snapshot-new/recipes/index.json',
    reviewQueuePath:'snapshots/2026-09-07/snapshot-new/review-queue.json'
  };
  const manifestPath='snapshots/2026-09-07/snapshot-new/manifest.json';
  const fileHashes={
    [locationPath]:sha256(locationBody),[otherLocationPath]:sha256('{}'),[detailPath]:sha256(detail),
    [support.coveragePath]:sha256('{}'),[support.recipeIndexPath]:sha256('{}'),[support.reviewQueuePath]:sha256('{}')
  };
  const manifestBody=JSON.stringify({schemaVersion:1,snapshotId:'snapshot-new',weekStart:'2026-09-07',...support,fileHashes,locations:[
    {id:'99999-neuemarkt-branch-a',postcode:'99999',store:'NeueMarkt',branch:'First branch',branchId:'branch-a',path:otherLocationPath,recipeCount:0},
    {id:'99999-neuemarkt-branch-b',postcode:'99999',store:'NeueMarkt',branch:'Second branch',branchId:'branch-b',path:locationPath,recipeCount:1}
  ]});
  const currentBody=JSON.stringify({schemaVersion:1,snapshotId:'snapshot-new',weekStart:'2026-09-07',manifestPath,manifestSha256:sha256(manifestBody)});
  const bodies=new Map([
    ['/mohemeokji/data/current.json',currentBody],['/mohemeokji/data/'+manifestPath,manifestBody],
    ['/mohemeokji/data/'+locationPath,locationBody],['/mohemeokji/data/'+detailPath,detail]
  ]);
  const calls=[];
  const dom=new JSDOM(fs.readFileSync(new URL('index.html',root),'utf8'),{url:'https://choi01.com/mohemeokji/?postcode=99999&store=NeueMarkt&branch=branch-b',runScripts:'outside-only',pretendToBeVisual:true});
  assert.equal([...dom.window.document.querySelectorAll('script[src]')].some((script)=>/ontology-recipe-details|meal-package-prices/.test(script.src)),false);
  Object.defineProperty(dom.window,'crypto',{value:crypto.webcrypto});
  dom.window.TextEncoder=TextEncoder;
  dom.window.TextDecoder=TextDecoder;
  dom.window.fetch=async(url)=>{calls.push(url);return bodies.has(url)?response(bodies.get(url)):response('',false);};
  dom.window.scrollTo=()=>{};
  dom.window.localStorage.setItem('choi01-shopping-v1:99999:NeueMarkt:branch-b',JSON.stringify({version:1,snapshot:'snapshot-old',pantry:['NeueMarkt:소금'],prices:{'NeueMarkt:닭가슴살':123},quantities:{week:{'NeueMarkt:닭가슴살':2}},list:[{key:'NeueMarkt:후추',name:'후추',store:'NeueMarkt',pack:'1통',quantity:1,priceCents:199,completed:true}]}));
  for(const file of ['meal-data-loader.js','meal-planner-recipe-data.js','meal-shopping.js','meal-recommendations.js']) dom.window.eval(fs.readFileSync(new URL(file,root),'utf8'));
  const inline=[...dom.window.document.querySelectorAll('script:not([src])')].at(-1).textContent;
  dom.window.eval(inline);
  const runtime=await dom.window.mealSnapshotReady;
  assert.equal(runtime.status,'ready');
  assert.equal(runtime.location.postcode,'99999');
  assert.equal(runtime.location.branchId,'branch-b');
  assert.equal(dom.window.document.getElementById('postcodeSelect').value,'99999');
  assert.equal(dom.window.document.getElementById('branchSelect').value,'branch-b');
  assert.equal(dom.window.document.getElementById('menuCount').textContent,'1');
  assert.match(dom.window.document.getElementById('menuList').textContent,/닭가슴살/);
  assert.match(dom.window.document.getElementById('weekGrid').textContent,/닭가슴살/);
  assert.equal(dom.window.document.getElementById('totalCost').textContent,'5,99€');
  assert.equal(runtime.shoppingState.prices['NeueMarkt:닭가슴살'],undefined);
  assert.equal(runtime.shoppingState.pantry.has('NeueMarkt:소금'),true);
  assert.equal(runtime.shoppingState.list[0].completed,true);
  assert.equal(runtime.shoppingState.list[0].priceCents,null);
  assert.deepEqual(calls,[
    '/mohemeokji/data/current.json','/mohemeokji/data/'+manifestPath,'/mohemeokji/data/'+locationPath
  ]);
  await runtime.openDetail('neuemarkt-recipe-9000001');
  assert.equal(dom.window.document.getElementById('detailTitle').textContent,'새 지점 닭가슴살 볶음');
  assert.equal(calls.at(-1),'/mohemeokji/data/'+detailPath);
  assert.equal(calls.filter((url)=>url===('/mohemeokji/data/'+detailPath)).length,1);
  dom.window.close();
});
