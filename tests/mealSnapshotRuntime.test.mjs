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
    locations:[
      {id:'52064-edeka-branch-a',postcode:'52064',store:'EDEKA',branchId:'branch-a',path:locationPath,recipeCount:1},
      {id:'44369-netto-branch-b',postcode:'44369',store:'Netto',branchId:'branch-b',path:otherPath,recipeCount:0}
    ],
    fileHashes:{
      [locationPath]:sha256(location),[detailPath]:sha256(detail),[otherPath]:sha256('{}'),
      'snapshots/2026-09-07/snapshot-a/coverage.json':sha256('{}'),
      'snapshots/2026-09-07/snapshot-a/recipes/index.json':sha256('{}')
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
  assert.equal('reviewQueuePath' in manifest,false);
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

test('loads a retained manual recipe through its saved hash-pinned detail reference',async()=>{
  const loader=loadRuntime();
  const body=JSON.stringify({schemaVersion:1,sourceRecipeId:'8000001',title:'지난주 수동 메뉴'});
  const path='snapshots/2026-08-31/old-snapshot/recipes/8000001.hash.json';
  const calls=[];
  const fetcher=async(url)=>{calls.push(url);return url==='/mohemeokji/data/'+path?response(body):response('',false);};
  const detail=await loader.loadRecipeDetailReference({sourceRecipeId:'8000001',detailPath:path,detailSha256:sha256(body)},fetcher);
  assert.equal(detail.title,'지난주 수동 메뉴');
  assert.deepEqual(calls,['/mohemeokji/data/'+path]);
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

test('legacy recipe runtime stays disabled while snapshot refs remain detail-lazy', () => {
  const {api}=loadRecipeData();
  assert.equal(api.legacyEnabled('?postcode=52064'),false);
  assert.equal(api.legacyEnabled('?snapshot=legacy'),false);
  assert.equal(api.legacyEnabled('?snapshot=current'),false);
  const summaries=api.fromSnapshotLocation({store:'EDEKA',recipes:[{
    sourceRecipeId:'7000001',detailPath:'snapshots/week/id/recipes/7000001.hash.json',detailSha256:'a'.repeat(64),
    title:'승인된 닭가슴살 볶음',offerIds:['offer-a'],primaryIngredientIds:['닭가슴살'],recommendationProfile:{kind:'main'}
  }]});
  assert.equal(summaries.length,1);
  assert.equal(summaries[0].sourceRecipeId,'7000001');
  assert.equal(summaries[0].title,'승인된 닭가슴살 볶음');
  assert.equal('steps' in summaries[0],false);
  assert.equal('detailIngredients' in summaries[0],false);
  const catalog=api.offerCatalogFromSnapshot({offers:[{
    offerId:'offer-a',chain:'EDEKA',identity:{ingredientId:'닭가슴살'},productDe:'Hähnchenbrustfilet',pack:'500 g',priceCents:599,normalPriceCents:799,
    validFrom:'2026-09-07',validThrough:'2026-09-13',evidenceUrl:'https://example.com/offer'
  }]});
  assert.equal(catalog['닭가슴살'].product,'Hähnchenbrustfilet');
  assert.equal(catalog['닭가슴살'].priceCents,599);
  assert.equal(catalog['닭가슴살'].normalPriceCents,799);
  const duplicateLocation={store:'EDEKA',offers:[
    {offerId:'offer-rib',identity:{ingredientId:'소고기등심'},productDe:'Rib-Eye',pack:'300 g',priceCents:699},
    {offerId:'offer-entrecote',identity:{ingredientId:'소고기등심'},productDe:'Entrecôte',pack:'300 g',priceCents:799}
  ],recipes:[
    {sourceRecipeId:'1',title:'립아이 스테이크',offerIds:['offer-rib','offer-entrecote'],preferredPricingOfferId:'offer-rib',primaryIngredientIds:['소고기등심'],recommendationProfile:{}},
    {sourceRecipeId:'2',title:'등심 채소구이',offerIds:['offer-entrecote'],primaryIngredientIds:['소고기등심'],recommendationProfile:{}},
    {sourceRecipeId:'3',title:'등심 덮밥',offerIds:['offer-rib','offer-entrecote'],primaryIngredientIds:['소고기등심'],recommendationProfile:{}}
  ]};
  const duplicateCatalog=api.offerCatalogFromSnapshot(duplicateLocation);
  const duplicateRecipes=api.fromSnapshotLocation(duplicateLocation);
  assert.deepEqual(Object.keys(duplicateCatalog.offersById).sort(),['offer-entrecote','offer-rib']);
  assert.equal(duplicateCatalog['소고기등심'].offerId,'offer-entrecote');
  assert.equal(duplicateRecipes[0].matchedOffers.length,2);
  assert.equal(duplicateRecipes[0].offerCatalog['소고기등심'].offerId,'offer-rib');
  assert.equal(duplicateRecipes[1].matchedOffers[0].productDe,'Entrecôte');
  assert.equal(duplicateRecipes[2].offerCatalog['소고기등심'].offerId,'offer-entrecote');
  assert.deepEqual(duplicateRecipes.map((recipe)=>recipe.title),['립아이 스테이크','등심 채소구이','등심 덮밥']);
  assert.equal(api.safeRecipeSourceUrl('https://www.10000recipe.com/recipe/7000001','7000001'),'https://www.10000recipe.com/recipe/7000001');
  assert.equal(api.safeRecipeSourceUrl('javascript:alert(1)','7000001'),null);
  assert.equal(api.safeRecipeSourceUrl('https://evil.example/recipe/7000001','7000001'),null);
  assert.equal(api.safeRecipeSourceUrl('https://www.10000recipe.com/recipe/other','7000001'),null);
});

test('manifest-only selection maps every direct route and chooses the first branch deterministically',()=>{
  const {api}=loadRecipeData();
  const locations=[
    {postcode:'40468',store:'Netto',branchId:'branch-a'},
    {postcode:'40474',store:'EDEKA',branchId:'branch-a'},
    {postcode:'44369',store:'Netto',branchId:'branch-b'},
    {postcode:'44369',store:'Netto',branchId:'branch-a'},
    {postcode:'52062',store:'Netto',branchId:'branch-a'},
    {postcode:'52064',store:'EDEKA',branchId:'branch-a'}
  ];
  for(const [pathname,postcode,store] of [
    ['/mohemeokji/40468DNETTO/','40468','Netto'],['/mohemeokji/40474DEDEKA/','40474','EDEKA'],
    ['/mohemeokji/44369DONETTO/','44369','Netto'],['/mohemeokji/52062NETTO/','52062','Netto'],
    ['/mohemeokji/52064EDEKA/','52064','EDEKA']
  ]) {
    const selected=api.selectSnapshotLocation(locations,new URLSearchParams(),pathname);
    assert.equal(selected.activeArea,postcode,pathname);
    assert.equal(selected.activeStore,store,pathname);
  }
  assert.equal(api.selectSnapshotLocation(locations,new URLSearchParams(),'/mohemeokji/44369DONETTO/').activeBranch.branchId,'branch-a');
  const branchless=JSON.stringify({version:2,activeArea:'44369',activeStore:'Netto',plans:{}});
  assert.equal(api.acceptLegacyScopedPayload(branchless,{area:'44369',store:'Netto',branchId:'branch-b',branchCount:2}),null);
  const exact=JSON.stringify({version:2,activeArea:'44369',activeStore:'Netto',activeBranchId:'branch-b',plans:{}});
  assert.equal(api.acceptLegacyScopedPayload(exact,{area:'44369',store:'Netto',branchId:'branch-b',branchCount:2}),exact);
  assert.equal(api.acceptLegacyScopedPayload(exact,{area:'44369',store:'Netto',branchId:'branch-a',branchCount:2}),null);
});

test('unavailable snapshot disables inert controls and exposes safe retry recovery',async()=>{
  const dom=new JSDOM(fs.readFileSync(new URL('index.html',root),'utf8'),{url:'https://choi01.com/mohemeokji/?postcode=52064&store=EDEKA&branch=branch-a',runScripts:'outside-only'});
  dom.window.MealDataLoader={loadCurrentSnapshot:async()=>{throw new Error('broken pointer');}};
  dom.window.MealShopping={};
  dom.window.MealRecommendations={};
  dom.window.eval(fs.readFileSync(new URL('meal-planner-recipe-data.js',root),'utf8'));
  const runtime=await dom.window.MealRecipeData.startSnapshotApp();
  assert.equal(runtime.status,'unavailable');
  for(const selector of ['#autoPlan','#clearPlan','#savePlan','#acceptToday','#nextRecommendation','#todayShopping','#prepareShopping','#targetServings','input[name="recommendationMode"]','#manualPick','#shoppingList','#markEaten','#eatFromDetail','#addFromDetail','#addShoppingItems','#menuSearch','.filter','[data-moment]','#postcodeSelect','#storeSelect','#branchSelect']) {
    assert.equal(dom.window.document.querySelector(selector).disabled,true,selector);
  }
  const recovery=dom.window.document.getElementById('snapshotRecovery');
  assert.equal(recovery.hidden,false);
  assert.ok(recovery.querySelector('[data-retry-snapshot]'));
  const legacyParams=new URL(recovery.querySelector('a').href).searchParams;
  assert.equal(legacyParams.get('snapshot'),null);
  assert.equal(legacyParams.get('postcode'),'52064');
  assert.equal(legacyParams.get('store'),'EDEKA');
  assert.equal(legacyParams.get('branch'),'branch-a');
  dom.window.close();
});

test('legacy query is explicitly unavailable and does not load an unvalidated archive',async()=>{
  const dom=new JSDOM(fs.readFileSync(new URL('index.html',root),'utf8'),{url:'https://choi01.com/mohemeokji/?snapshot=legacy',runScripts:'outside-only'});
  let loads=0;
  dom.window.MealDataLoader={loadCurrentSnapshot:async()=>{loads++;throw new Error('must not load');}};
  dom.window.MealShopping={};dom.window.MealRecommendations={};
  dom.window.eval(fs.readFileSync(new URL('meal-planner-recipe-data.js',root),'utf8'));
  const runtime=await dom.window.MealRecipeData.startSnapshotApp();
  assert.equal(runtime.status,'unavailable');
  assert.equal(loads,0);
  assert.match(dom.window.document.getElementById('sourceStatus').textContent,/지난 자료.*제공하지 않습니다/);
  assert.equal(new URL(dom.window.document.getElementById('legacySnapshotLink').href).searchParams.get('snapshot'),null);
  dom.window.close();
});

test('non-legacy bootstrap uses snapshot-only location and branch, rerenders summaries, rolls shopping state, and lazily opens detail', async () => {
  const detailPath='snapshots/2026-09-07/snapshot-new/recipes/9000001.detail.json';
  const detail=JSON.stringify({
    schemaVersion:1,sourceRecipeId:'9000001',title:'새 지점 닭가슴살 볶음',sourceTitle:'원문 제목',sourceAuthor:'작성자',
    sourceUrl:'https://www.10000recipe.com/recipe/9000001',sourceServingText:'2인분',detailIngredients:['닭 가슴살 300g','소금 1t','올리브유 1큰술'],steps:['손질한다.','익힌다.','담는다.']
  });
  const badCurrentPath='snapshots/2026-09-07/snapshot-new/recipes/9000002.bad.json';
  const badCurrent='{bad json';
  const slowCurrentPath='snapshots/2026-09-07/snapshot-new/recipes/9000003.slow.json';
  const slowCurrent=JSON.stringify({schemaVersion:1,sourceRecipeId:'9000003',title:'느린 현재 메뉴',detailIngredients:['감자 1개'],steps:['씻는다.','익힌다.','담는다.']});
  const slowFailPath='snapshots/2026-09-07/snapshot-new/recipes/9000004.slow-fail.json';
  const slowFailExpected=JSON.stringify({schemaVersion:1,sourceRecipeId:'9000004',title:'느리게 실패할 메뉴'});
  const locationPath='snapshots/2026-09-07/snapshot-new/locations/99999-neuemarkt-branch-b.json';
  const offer={offerId:'offer-new',chain:'NeueMarkt',branchId:'branch-b',identity:{ingredientId:'닭가슴살'},productDe:'Hähnchenbrustfilet',pack:'500 g',priceCents:599,validFrom:'2026-09-07',validThrough:'2026-09-13',evidenceUrl:'https://example.com/offer-new'};
  const sameIdentityAlternative={...offer,offerId:'offer-other',productDe:'Hähnchenbrust Innenfilet',priceCents:799};
  const reference={sourceRecipeId:'9000001',detailPath,detailSha256:sha256(detail),offerIds:['offer-new','offer-other'],preferredPricingOfferId:'offer-new',primaryIngredientIds:['닭가슴살'],recommendationProfile:{primaryIngredients:['닭가슴살'],family:'chicken',method:'stirfry',kind:'main'},qualityScore:0.9};
  const badReference={...reference,sourceRecipeId:'9000002',detailPath:badCurrentPath,detailSha256:sha256(badCurrent)};
  const slowReference={...reference,sourceRecipeId:'9000003',detailPath:slowCurrentPath,detailSha256:sha256(slowCurrent)};
  const slowFailReference={...reference,sourceRecipeId:'9000004',detailPath:slowFailPath,detailSha256:sha256(slowFailExpected)};
  const locationBody=JSON.stringify({schemaVersion:1,snapshotId:'snapshot-new',weekStart:'2026-09-07',id:'99999-neuemarkt-branch-b',postcode:'99999',store:'NeueMarkt',branch:'Second branch',branchId:'branch-b',offers:[offer,sameIdentityAlternative],coverage:{sparse:false},warnings:[],recipes:[reference,badReference,slowReference,slowFailReference]});
  const otherLocationPath='snapshots/2026-09-07/snapshot-new/locations/99999-neuemarkt-branch-a.json';
  const support={
    coveragePath:'snapshots/2026-09-07/snapshot-new/coverage.json',
    recipeIndexPath:'snapshots/2026-09-07/snapshot-new/recipes/index.json'
  };
  const manifestPath='snapshots/2026-09-07/snapshot-new/manifest.json';
  const fileHashes={
    [locationPath]:sha256(locationBody),[otherLocationPath]:sha256('{}'),[detailPath]:sha256(detail),[badCurrentPath]:sha256(badCurrent),[slowCurrentPath]:sha256(slowCurrent),[slowFailPath]:sha256(slowFailExpected),
    [support.coveragePath]:sha256('{}'),[support.recipeIndexPath]:sha256('{}')
  };
  const manifestBody=JSON.stringify({schemaVersion:1,snapshotId:'snapshot-new',weekStart:'2026-09-07',...support,fileHashes,locations:[
    {id:'99999-neuemarkt-branch-a',postcode:'99999',store:'NeueMarkt',branch:'First branch',branchId:'branch-a',path:otherLocationPath,recipeCount:0},
    {id:'99999-neuemarkt-branch-b',postcode:'99999',store:'NeueMarkt',branch:'Second branch',branchId:'branch-b',path:locationPath,recipeCount:4}
  ]});
  const currentBody=JSON.stringify({schemaVersion:1,snapshotId:'snapshot-new',weekStart:'2026-09-07',manifestPath,manifestSha256:sha256(manifestBody)});
  const archivedDetailPath='snapshots/2026-08-31/snapshot-old/recipes/8000001.hash.json';
  const archivedDetail=JSON.stringify({schemaVersion:1,sourceRecipeId:'8000001',title:'지난주 수동 메뉴',detailIngredients:['감자 2개'],steps:['씻는다.','익힌다.','담는다.']});
  const archivedSamePath='snapshots/2026-08-31/snapshot-old/recipes/9000001.oldhash.json';
  const archivedSameDetail=JSON.stringify({schemaVersion:1,sourceRecipeId:'9000001',title:'지난주 같은 ID 메뉴',detailIngredients:['양파 1개'],steps:['썬다.','익힌다.','담는다.']});
  const badArchivedPath='snapshots/2026-08-31/snapshot-old/recipes/7000001.badhash.json';
  const bodies=new Map([
    ['/mohemeokji/data/current.json',currentBody],['/mohemeokji/data/'+manifestPath,manifestBody],
    ['/mohemeokji/data/'+locationPath,locationBody],['/mohemeokji/data/'+detailPath,detail],['/mohemeokji/data/'+badCurrentPath,badCurrent],['/mohemeokji/data/'+slowCurrentPath,slowCurrent],['/mohemeokji/data/'+archivedDetailPath,archivedDetail],['/mohemeokji/data/'+archivedSamePath,archivedSameDetail]
  ]);
  const calls=[];
  const dom=new JSDOM(fs.readFileSync(new URL('index.html',root),'utf8'),{url:'https://choi01.com/mohemeokji/?postcode=99999&store=NeueMarkt&branch=branch-b',runScripts:'outside-only',pretendToBeVisual:true});
  assert.equal([...dom.window.document.querySelectorAll('script[src]')].some((script)=>/ontology-recipe-details|meal-package-prices/.test(script.src)),false);
  Object.defineProperty(dom.window,'crypto',{value:crypto.webcrypto});
  dom.window.TextEncoder=TextEncoder;
  dom.window.TextDecoder=TextDecoder;
  let resolveSlow;
  let resolveSlowFail;
  dom.window.fetch=async(url)=>{calls.push(url);if(url==='/mohemeokji/data/'+slowCurrentPath)return new Promise((resolve)=>{resolveSlow=()=>resolve(response(slowCurrent));});if(url==='/mohemeokji/data/'+slowFailPath)return new Promise((resolve)=>{resolveSlowFail=()=>resolve(response('{corrupt'));});return bodies.has(url)?response(bodies.get(url)):response('',false);};
  dom.window.scrollTo=()=>{};
  dom.window.localStorage.setItem('choi01-shopping-v1:99999:NeueMarkt',JSON.stringify({version:1,snapshot:'snapshot-old',activeArea:'99999',activeStore:'NeueMarkt',activeBranchId:'branch-b',pantry:['NeueMarkt:소금'],prices:{'NeueMarkt:닭가슴살':123},quantities:{week:{'NeueMarkt:닭가슴살':2}},list:[{key:'NeueMarkt:후추',name:'후추',store:'NeueMarkt',pack:'1통',quantity:1,priceCents:199,completed:true}]}));
  dom.window.localStorage.setItem('choi01-today-meal-plan:99999:NeueMarkt',JSON.stringify({version:2,snapshotId:'snapshot-old',activeArea:'99999',activeStore:'NeueMarkt',activeBranchId:'branch-b',plans:{저녁:{mon:{recipeId:'neuemarkt-recipe-8000001',origin:'manual',dismissedRecipeIds:['old-dismissal']},tue:{recipeId:'neuemarkt-recipe-cross',origin:'manual',dismissedRecipeIds:[]},wed:{recipeId:'neuemarkt-recipe-bad',origin:'manual',dismissedRecipeIds:[]}},점심:{mon:{recipeId:'neuemarkt-recipe-9000001',origin:'manual',dismissedRecipeIds:[]}}},archivedDetails:{
    'neuemarkt-recipe-8000001':{sourceRecipeId:'8000001',title:'지난주 수동 메뉴',detailPath:archivedDetailPath,detailSha256:sha256(archivedDetail),area:'99999',store:'NeueMarkt',branchId:'branch-b',snapshotId:'snapshot-old'},
    'neuemarkt-recipe-9000001':{sourceRecipeId:'9000001',title:'지난주 같은 ID 메뉴',detailPath:archivedSamePath,detailSha256:sha256(archivedSameDetail),area:'99999',store:'NeueMarkt',branchId:'branch-b',snapshotId:'snapshot-old'},
    'neuemarkt-recipe-cross':{sourceRecipeId:'6000001',title:'다른 지점 메뉴',detailPath:badArchivedPath,detailSha256:'1'.repeat(64),area:'11111',store:'Other',branchId:'branch-x',snapshotId:'snapshot-old'},
    'neuemarkt-recipe-bad':{sourceRecipeId:'7000001',title:'깨진 보관 메뉴',detailPath:badArchivedPath,detailSha256:'2'.repeat(64),area:'99999',store:'NeueMarkt',branchId:'branch-b',snapshotId:'snapshot-old'}
  }}));
  dom.window.localStorage.setItem('choi01-today-meal-plan:99999:NeueMarkt:branch-b','{malformed');
  dom.window.localStorage.setItem('choi01-recommendation-preferences-v1',JSON.stringify({mode:'diet',targetServings:2}));
  for(const file of ['meal-data-loader.js','meal-planner-recipe-data.js','meal-shopping.js','meal-nutrition-policy.js','meal-recommendations.js']) dom.window.eval(fs.readFileSync(new URL(file,root),'utf8'));
  dom.window.eval(dom.window.document.querySelector('script[data-workspace-controller]').textContent);
  dom.window.HTMLElement.prototype.scrollIntoView=()=>{};
  const inline=[...dom.window.document.querySelectorAll('script:not([src])')].at(-1).textContent;
  dom.window.eval(inline);
  const runtime=await dom.window.mealSnapshotReady;
  assert.equal(runtime.status,'ready');
  const slots=[...dom.window.document.querySelectorAll('#weekGrid .slot')];
  assert.equal(slots.length,14);
  assert.equal(slots[0].getAttribute('aria-label'),'월요일 점심 메뉴 칸');
  assert.equal(slots.at(-1).getAttribute('aria-label'),'일요일 저녁 메뉴 칸');
  assert.equal(slots.every((slot)=>slot.querySelector('[data-replace-slot], [data-clear-slot], [data-pick-slot]')),true);
  assert.ok(dom.window.document.querySelector('#pantryList [data-pantry-key]'));
  const plansBeforeNavigation=JSON.stringify(runtime.plans);
  dom.window.document.querySelector('[data-context-target="shop"]').click();
  assert.equal(dom.window.document.querySelector('[data-context="shop"]').hidden,false);
  dom.window.document.querySelector('[data-context-target="plan"]').click();
  assert.equal(JSON.stringify(runtime.plans),plansBeforeNavigation);
  dom.window.document.getElementById('manualPick').click();
  assert.equal(dom.window.document.getElementById('week').hidden,false);
  const modeRadios=[...dom.window.document.querySelectorAll('input[name="recommendationMode"]')];
  assert.deepEqual(modeRadios.map((input)=>input.value),['balanced','value','nutrition','diet']);
  assert.equal(modeRadios.every((input)=>input.type==='radio'),true);
  assert.equal(dom.window.document.getElementById('targetServings').options.length,6);
  const lunchControl=dom.window.document.querySelector('[data-moment="점심"]');
  const dinnerControl=dom.window.document.querySelector('[data-moment="저녁"]');
  assert.equal(lunchControl.getAttribute('aria-pressed'),'false');
  assert.equal(dinnerControl.getAttribute('aria-pressed'),'true');
  lunchControl.click();
  assert.equal(lunchControl.classList.contains('active'),true);
  assert.equal(lunchControl.getAttribute('aria-pressed'),'true');
  assert.equal(dinnerControl.classList.contains('active'),false);
  assert.equal(dinnerControl.getAttribute('aria-pressed'),'false');
  dinnerControl.click();
  assert.equal(modeRadios.find((input)=>input.value==='diet').checked,true);
  assert.equal(Object.values(runtime.plans).flatMap((plan)=>Object.values(plan)).filter((slot)=>slot.origin==='auto').every((slot)=>slot.recipeId===null),true);
  assert.equal(runtime.plans.저녁.mon.recipeId,'neuemarkt-recipe-8000001');
  assert.match(dom.window.document.getElementById('modeReadiness').textContent,/영양 근거/);
  modeRadios.find((input)=>input.value==='balanced').click();
  assert.equal(JSON.parse(dom.window.localStorage.getItem('choi01-recommendation-preferences-v1')).mode,'balanced');
  assert.match(dom.window.document.getElementById('planStatus').textContent,/후보 4개.*자동 식단 3칸/);
  const balancedAutoIds=Object.values(runtime.plans).flatMap((plan)=>Object.values(plan)).filter((slot)=>slot.origin==='auto'&&slot.recipeId).map((slot)=>slot.recipeId);
  assert.equal(new Set(balancedAutoIds).size,balancedAutoIds.length);
  const compilerBasket=(key,priceCents)=>({sourceCoverage:'complete',targetServings:2,items:[{key,priceCents,quantity:1,subtotalCents:priceCents,quantityComplete:true}],savingsStatus:'unavailable'});
  runtime.recipes[0].basketFacts=compilerBasket('NeueMarkt:닭가슴살',150);
  runtime.recipes[1].basketFacts=compilerBasket('NeueMarkt:후추',100);
  modeRadios.find((input)=>input.value==='value').click();
  assert.match(dom.window.document.getElementById('todayReason').textContent,/구매 합계 100센트/);
  const pantryInput=dom.window.document.createElement('input');
  pantryInput.type='checkbox';pantryInput.checked=true;pantryInput.dataset.shoppingKey='NeueMarkt:닭가슴살';pantryInput.dataset.shoppingField='owned';
  dom.window.document.getElementById('detailIngredients').append(pantryInput);
  pantryInput.dispatchEvent(new dom.window.Event('change',{bubbles:true}));
  assert.match(dom.window.document.getElementById('todayReason').textContent,/구매 합계 0센트/);
  assert.equal(runtime.plans.저녁.mon.recipeId,'neuemarkt-recipe-8000001');
  runtime.shoppingState.pantry.delete('NeueMarkt:닭가슴살');
  runtime.recipes[0].basketFacts=null;runtime.recipes[1].basketFacts=null;
  modeRadios.find((input)=>input.value==='balanced').click();
  const plansBeforeMode=JSON.parse(JSON.stringify(runtime.plans));
  const manualBeforeMode=runtime.plans.저녁.mon.recipeId;
  modeRadios.find((input)=>input.value==='diet').click();
  assert.equal(JSON.parse(dom.window.localStorage.getItem('choi01-recommendation-preferences-v1')).mode,'diet');
  assert.equal(runtime.plans.저녁.mon.recipeId,manualBeforeMode);
  assert.match(dom.window.document.getElementById('modeReadiness').textContent,/영양 근거/);
  modeRadios.find((input)=>input.value==='balanced').click();
  assert.equal(JSON.parse(dom.window.localStorage.getItem('choi01-recommendation-preferences-v1')).mode,'balanced');
  runtime.recipes[0].nutritionFacts={status:'complete',source:'verified nutrition source',sourceServings:2,perServing:{kcal:410,proteinGrams:32,fiberGrams:6,sodiumMg:380}};
  modeRadios.find((input)=>input.value==='nutrition').click();
  assert.match(dom.window.document.getElementById('todayReason').textContent,/410 kcal.*단백질 32 g.*식이섬유 6 g.*나트륨 380 mg/);
  runtime.recipes[0].nutritionFacts=null;
  modeRadios.find((input)=>input.value==='balanced').click();
  dom.window.document.querySelector('[data-moment="점심"]').click();
  const replaceButton=[...dom.window.document.querySelectorAll('[data-replace-slot]')].find((button)=>runtime.plans[button.dataset.replaceMoment][button.dataset.replaceSlot].origin==='auto');
  assert.ok(replaceButton);
  const replaceMoment=replaceButton.dataset.replaceMoment;
  const replaceDay=replaceButton.dataset.replaceSlot;
  const beforeReplace=runtime.plans[replaceMoment][replaceDay].recipeId;
  replaceButton.click();
  assert.equal(runtime.plans[replaceMoment][replaceDay].origin,'auto');
  assert.ok(runtime.plans[replaceMoment][replaceDay].dismissedRecipeIds.includes(beforeReplace));
  assert.notEqual(runtime.plans[replaceMoment][replaceDay].recipeId,beforeReplace);
  if(runtime.plans[replaceMoment][replaceDay].recipeId===null)assert.match(dom.window.document.getElementById('planStatus').textContent,/남은 다음 후보/);
  const clearButton=dom.window.document.querySelector('[data-clear-slot]');
  assert.ok(clearButton);
  const servings=dom.window.document.getElementById('targetServings');
  servings.value='4';servings.dispatchEvent(new dom.window.Event('change',{bubbles:true}));
  assert.equal(JSON.parse(dom.window.localStorage.getItem('choi01-recommendation-preferences-v1')).targetServings,4);
  assert.equal(runtime.plans.저녁.mon.recipeId,manualBeforeMode);
  assert.notEqual(runtime.plans[replaceMoment][replaceDay].recipeId,beforeReplace);
  const persistedSlot=Object.entries(runtime.plans.점심).find(([,slot])=>slot.origin==='auto'&&slot.recipeId);
  assert.ok(persistedSlot);
  runtime.plans.점심[persistedSlot[0]].recipeId=null;
  dom.window.document.getElementById('autoPlan').click();
  const savedAutoPlan=JSON.parse(dom.window.localStorage.getItem(runtime.planStorageKey));
  assert.equal(savedAutoPlan.plans.점심[persistedSlot[0]].recipeId,runtime.plans.점심[persistedSlot[0]].recipeId);
  dom.window.document.getElementById('clearPlan').click();
  const savedClearPlan=JSON.parse(dom.window.localStorage.getItem(runtime.planStorageKey));
  assert.equal(Object.values(savedClearPlan.plans.점심).every((slot)=>slot.origin==='manual'&&slot.recipeId===null),true);
  for(const moment of Object.keys(plansBeforeMode))runtime.plans[moment]=plansBeforeMode[moment];
  dom.window.document.querySelector('[data-moment="저녁"]').click();
  assert.equal(runtime.location.postcode,'99999');
  assert.equal(runtime.location.branchId,'branch-b');
  assert.equal(dom.window.document.getElementById('postcodeSelect').value,'99999');
  assert.equal(dom.window.document.getElementById('branchSelect').value,'branch-b');
  assert.equal(dom.window.document.getElementById('menuCount').textContent,'4');
  assert.match(dom.window.document.getElementById('menuList').textContent,/닭가슴살/);
  assert.match(dom.window.document.getElementById('menuList').textContent,/Hähnchenbrustfilet.*Hähnchenbrust Innenfilet/);
  assert.match(dom.window.document.getElementById('menuList').textContent,/500 g.*5,99€.*Second branch.*2026-09-07.*할인 근거/s);
  assert.ok(dom.window.document.querySelector('[data-add-menu]'));
  const search=dom.window.document.getElementById('menuSearch');
  search.value='없는 검색어';search.dispatchEvent(new dom.window.Event('input',{bubbles:true}));
  assert.doesNotMatch(dom.window.document.getElementById('menuList').textContent,/닭가슴살 활용/);
  search.value='닭가슴살';search.dispatchEvent(new dom.window.Event('input',{bubbles:true}));
  assert.match(dom.window.document.getElementById('menuList').textContent,/닭가슴살 활용/);
  dom.window.document.querySelector('[data-moment="점심"]').click();
  assert.match(dom.window.document.getElementById('weekGrid').textContent,/닭가슴살/);
  dom.window.document.querySelector('[data-moment="저녁"]').click();
  const activeClear=dom.window.document.querySelector('[data-clear-slot]');
  assert.match(activeClear.textContent,/비우기/);
  assert.equal(dom.window.document.getElementById('totalCost').textContent,'확인된 금액 5,99€ · 수량 확인');
  assert.equal(runtime.weekBasket().items[0].product,'Hähnchenbrustfilet');
  assert.equal(runtime.weekBasket().items[0].priceCents,599);
  assert.equal(runtime.shoppingState.prices['NeueMarkt:닭가슴살'],undefined);
  assert.equal(runtime.shoppingState.pantry.has('NeueMarkt:소금'),true);
  assert.equal(runtime.shoppingState.list[0].completed,true);
  assert.equal(runtime.shoppingState.list[0].priceCents,null);
  assert.equal(runtime.plans.저녁.mon.recipeId,'neuemarkt-recipe-8000001');
  assert.deepEqual([...runtime.plans.저녁.mon.dismissedRecipeIds],[]);
  assert.equal(JSON.parse(dom.window.localStorage.getItem('choi01-today-meal-plan:99999:NeueMarkt:branch-b')).version,2);
  assert.equal(JSON.parse(dom.window.localStorage.getItem('choi01-shopping-v1:99999:NeueMarkt:branch-b')).pantry[0],'NeueMarkt:소금');
  assert.deepEqual(calls,[
    '/mohemeokji/data/current.json','/mohemeokji/data/'+manifestPath,'/mohemeokji/data/'+locationPath
  ]);
  runtime.plans.저녁.thu={recipeId:'neuemarkt-recipe-9000001',origin:'auto',dismissedRecipeIds:[]};
  for(const plan of Object.values(runtime.plans)) for(const slot of Object.values(plan)) {
    if(!['neuemarkt-recipe-9000001','neuemarkt-recipe-8000001'].includes(slot.recipeId)) slot.recipeId=null;
    else slot.origin='auto';
  }
  runtime.plans.저녁.mon.origin='manual';
  assert.equal(Object.values(runtime.plans).flatMap((plan)=>Object.values(plan)).length,14);
  assert.equal(runtime.weeklyPlanMeals().length,2);
  dom.window.HTMLElement.prototype.scrollIntoView=()=>{};
  dom.window.document.getElementById('prepareShopping').click();
  await new Promise((resolve)=>setTimeout(resolve,50));
  assert.match(dom.window.document.getElementById('groceryPending').textContent,/식용유.*가격 미확인/);
  assert.match(dom.window.document.getElementById('groceryPending').textContent,/감자.*가격 미확인/);
  assert.equal(dom.window.document.querySelectorAll('[data-grocery-key="NeueMarkt:닭가슴살"]').length,1);
  assert.equal(dom.window.document.querySelector('[data-grocery-key="NeueMarkt:닭 가슴살"]'),null);
  dom.window.document.querySelectorAll('[data-grocery-remove]').forEach((button)=>button.click());
  dom.window.document.getElementById('acceptToday').click();
  assert.ok(Object.values(runtime.plans.저녁).filter((slot)=>slot.origin==='manual').length>=1);
  assert.equal(dom.window.document.getElementById('markEaten').disabled,true);
  const detailOpener=dom.window.document.getElementById('todayShopping');
  detailOpener.focus();detailOpener.click();
  await new Promise((resolve)=>setTimeout(resolve,0));
  assert.equal(dom.window.document.getElementById('detailTitle').textContent,'새 지점 닭가슴살 볶음');
  assert.equal(dom.window.document.getElementById('recipeSource').href,'https://www.10000recipe.com/recipe/9000001');
  assert.equal(dom.window.document.getElementById('recipeSource').hidden,false);
  assert.match(dom.window.document.getElementById('detailIngredients').textContent,/닭가슴살.*Hähnchenbrustfilet/);
  assert.match(dom.window.document.getElementById('detailIngredients').textContent,/닭가슴살.*5,99€.*수량 확인/s);
  assert.match(dom.window.document.getElementById('shoppingSource').textContent,/example.com|할인 근거/);
  assert.equal(dom.window.document.getElementById('shoppingTotal').textContent,'확인된 금액 5,99€ · 수량 확인');
  assert.equal(calls.filter((url)=>url===('/mohemeokji/data/'+detailPath)).length,1);
  assert.equal(dom.window.document.activeElement,dom.window.document.getElementById('closeDetail'));
  dom.window.document.getElementById('detailDrawer').dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));
  assert.equal(dom.window.document.getElementById('detailDrawer').classList.contains('open'),false);
  assert.equal(dom.window.document.activeElement,detailOpener);
  detailOpener.click();await new Promise((resolve)=>setTimeout(resolve,0));
  modeRadios.find((input)=>input.value==='diet').click();
  assert.equal(dom.window.document.getElementById('detailDrawer').classList.contains('open'),false);
  assert.equal(dom.window.document.getElementById('addShoppingItems').disabled,true);
  assert.equal(dom.window.document.getElementById('eatFromDetail').disabled,true);
  modeRadios.find((input)=>input.value==='balanced').click();
  await runtime.openDetail('neuemarkt-recipe-9000001');
  dom.window.document.getElementById('addShoppingItems').click();
  let grocery=dom.window.document.querySelector('[data-grocery-key="NeueMarkt:닭가슴살"]');
  assert.ok(grocery);
  assert.match(dom.window.document.getElementById('groceryPending').textContent,/식용유.*가격 미확인/);
  grocery.checked=true;grocery.dispatchEvent(new dom.window.Event('change',{bubbles:true}));
  assert.match(dom.window.document.getElementById('groceryCompleted').textContent,/닭가슴살/);
  const savedAfterCheck=dom.window.localStorage.getItem(runtime.shoppingStorageKey);
  assert.equal(JSON.parse(savedAfterCheck).list.find((item)=>item.key==='NeueMarkt:닭가슴살').completed,true);
  grocery=dom.window.document.querySelector('[data-grocery-key="NeueMarkt:닭가슴살"]');
  grocery.checked=false;grocery.dispatchEvent(new dom.window.Event('change',{bubbles:true}));
  assert.match(dom.window.document.getElementById('groceryPending').textContent,/닭가슴살/);
  const owned=dom.window.document.querySelector('[data-shopping-field="owned"]');
  owned.checked=true;owned.dispatchEvent(new dom.window.Event('change',{bubbles:true}));
  assert.equal(runtime.shoppingState.pantry.has('NeueMarkt:닭가슴살'),true);
  assert.equal(JSON.parse(dom.window.localStorage.getItem(runtime.shoppingStorageKey)).pantry.includes('NeueMarkt:닭가슴살'),true);
  assert.equal(dom.window.document.querySelector('[data-grocery-key="NeueMarkt:닭가슴살"]'),null);
  const pantryRerenderClear=dom.window.document.querySelector('[data-clear-slot]');
  assert.ok(pantryRerenderClear);
  pantryRerenderClear.click();
  assert.equal(runtime.plans[pantryRerenderClear.dataset.clearMoment][pantryRerenderClear.dataset.clearSlot].origin,'manual');
  const ownedAgain=dom.window.document.querySelector('[data-shopping-field="owned"]');
  ownedAgain.checked=false;ownedAgain.dispatchEvent(new dom.window.Event('change',{bubbles:true}));
  assert.equal(JSON.parse(dom.window.localStorage.getItem(runtime.shoppingStorageKey)).pantry.includes('NeueMarkt:닭가슴살'),false);
  dom.window.document.getElementById('addShoppingItems').click();
  dom.window.document.querySelector('[data-grocery-remove="NeueMarkt:닭가슴살"]').click();
  assert.equal(dom.window.document.querySelector('[data-grocery-key="NeueMarkt:닭가슴살"]'),null);
  assert.equal(JSON.parse(dom.window.localStorage.getItem(runtime.shoppingStorageKey)).list.some((item)=>item.key==='NeueMarkt:닭가슴살'),false);
  await runtime.openDetail('neuemarkt-recipe-8000001');
  assert.equal(dom.window.document.getElementById('detailTitle').textContent,'지난주 수동 메뉴');
  assert.equal(dom.window.document.getElementById('recipeSource').hasAttribute('href'),false);
  assert.equal(dom.window.document.getElementById('recipeSource').hidden,true);
  assert.equal(dom.window.document.getElementById('addFromDetail').disabled,true);
  assert.equal(calls.at(-1),'/mohemeokji/data/'+archivedDetailPath);
  dom.window.document.getElementById('eatFromDetail').click();
  const todayId=['sun','mon','tue','wed','thu','fri','sat'][new Date().getDay()];
  assert.equal(runtime.plans.저녁[todayId].recipeId,'neuemarkt-recipe-8000001');
  await runtime.openDetail('neuemarkt-recipe-9000001');
  assert.equal(dom.window.document.getElementById('detailTitle').textContent,'새 지점 닭가슴살 볶음');
  await runtime.openDetail('neuemarkt-recipe-9000001',true);
  assert.equal(dom.window.document.getElementById('detailTitle').textContent,'지난주 같은 ID 메뉴');
  assert.equal(calls.filter((url)=>url==='/mohemeokji/data/'+detailPath).length,1);
  assert.equal(calls.filter((url)=>url==='/mohemeokji/data/'+archivedSamePath).length,1);
  await assert.rejects(runtime.openDetail('neuemarkt-recipe-cross',true),/scope mismatch/);
  dom.window.document.getElementById('closeDetail').click();
  dom.window.document.getElementById('nextRecommendation').click();
  dom.window.document.getElementById('todayShopping').click();
  await new Promise((resolve)=>setTimeout(resolve,50));
  assert.equal(dom.window.document.getElementById('detailDrawer').classList.contains('open'),true);
  assert.equal(dom.window.document.getElementById('addShoppingItems').disabled,true);
  assert.equal(dom.window.document.getElementById('eatFromDetail').disabled,true);
  assert.match(dom.window.document.getElementById('detailIntro').textContent,/검증하지 못했습니다/);
  assert.equal(dom.window.document.getElementById('detailIngredients').textContent,'');
  assert.equal(dom.window.document.getElementById('detailSteps').textContent,'');
  assert.equal(dom.window.document.getElementById('recipeAmounts').textContent,'');
  assert.equal(dom.window.document.getElementById('recipeProvenance').textContent,'');
  assert.equal(dom.window.document.getElementById('shoppingSource').textContent,'');
  assert.equal(dom.window.document.getElementById('shoppingTitle').textContent,'');
  assert.equal(dom.window.document.getElementById('recipeSource').hasAttribute('href'),false);
  const staleModeDetail=runtime.requestDetail('neuemarkt-recipe-9000004');
  await new Promise((resolve)=>setTimeout(resolve,0));
  modeRadios.find((input)=>input.value==='diet').click();
  resolveSlowFail();
  await staleModeDetail;
  assert.equal(dom.window.document.getElementById('detailDrawer').classList.contains('open'),false);
  modeRadios.find((input)=>input.value==='balanced').click();
  const slowOne=runtime.openDetail('neuemarkt-recipe-9000003');
  const slowTwo=runtime.openDetail('neuemarkt-recipe-9000003');
  await new Promise((resolve)=>setTimeout(resolve,0));
  assert.equal(calls.filter((url)=>url==='/mohemeokji/data/'+slowCurrentPath).length,1);
  await runtime.openDetail('neuemarkt-recipe-9000001');
  resolveSlow();
  await Promise.all([slowOne,slowTwo]);
  assert.equal(dom.window.document.getElementById('detailTitle').textContent,'새 지점 닭가슴살 볶음');
  dom.window.document.querySelector('[data-id="neuemarkt-recipe-9000004"]').click();
  await new Promise((resolve)=>setTimeout(resolve,0));
  await runtime.openDetail('neuemarkt-recipe-9000001');
  resolveSlowFail();
  await new Promise((resolve)=>setTimeout(resolve,50));
  assert.equal(dom.window.document.getElementById('detailTitle').textContent,'새 지점 닭가슴살 볶음');
  assert.equal(dom.window.document.getElementById('addShoppingItems').disabled,false);
  const invalidBeforeSuccess=runtime.requestDetail('neuemarkt-recipe-cross',true);
  await runtime.openDetail('neuemarkt-recipe-9000001');
  await invalidBeforeSuccess;
  assert.equal(dom.window.document.getElementById('detailTitle').textContent,'새 지점 닭가슴살 볶음');
  const invalidBeforeClose=runtime.requestDetail('neuemarkt-recipe-cross',true);
  dom.window.document.getElementById('closeDetail').click();
  await invalidBeforeClose;
  assert.equal(dom.window.document.getElementById('detailDrawer').classList.contains('open'),false);
  dom.window.document.querySelector('[data-id="neuemarkt-recipe-9000004"]').click();
  await new Promise((resolve)=>setTimeout(resolve,0));
  dom.window.document.getElementById('closeDetail').click();
  resolveSlowFail();
  await new Promise((resolve)=>setTimeout(resolve,50));
  assert.equal(dom.window.document.getElementById('detailDrawer').classList.contains('open'),false);
  dom.window.document.getElementById('clearPlan').click();
  const chosenTarget=dom.window.document.querySelector('[data-pick-slot="sun"][data-pick-moment="저녁"]');
  assert.ok(chosenTarget);
  chosenTarget.click();
  const chosenRecipe=dom.window.document.querySelector('[data-add-menu]').dataset.addMenu;
  dom.window.document.querySelector('[data-add-menu]').click();
  assert.equal(runtime.plans.저녁.sun.recipeId,chosenRecipe);
  assert.equal(runtime.plans.저녁.mon.recipeId,null);
  const disabledDom=new JSDOM(fs.readFileSync(new URL('index.html',root),'utf8'),{url:'https://choi01.com/mohemeokji/?postcode=99999&store=NeueMarkt&branch=branch-b',runScripts:'outside-only'});
  Object.defineProperty(disabledDom.window,'crypto',{value:crypto.webcrypto});
  Object.defineProperty(disabledDom.window,'localStorage',{value:{getItem(){throw new Error('denied');},setItem(){throw new Error('quota');}}});
  disabledDom.window.TextEncoder=TextEncoder;disabledDom.window.TextDecoder=TextDecoder;
  disabledDom.window.fetch=async(url)=>bodies.has(url)?response(bodies.get(url)):response('',false);
  for(const file of ['meal-data-loader.js','meal-planner-recipe-data.js','meal-shopping.js','meal-nutrition-policy.js','meal-recommendations.js']) disabledDom.window.eval(fs.readFileSync(new URL(file,root),'utf8'));
  disabledDom.window.eval([...disabledDom.window.document.querySelectorAll('script:not([src])')].at(-1).textContent);
  assert.equal((await disabledDom.window.mealSnapshotReady).status,'ready');
  disabledDom.window.close();

  const reloadDom=new JSDOM(fs.readFileSync(new URL('index.html',root),'utf8'),{url:'https://choi01.com/mohemeokji/?postcode=99999&store=NeueMarkt&branch=branch-b',runScripts:'outside-only'});
  Object.defineProperty(reloadDom.window,'crypto',{value:crypto.webcrypto});
  reloadDom.window.TextEncoder=TextEncoder;reloadDom.window.TextDecoder=TextDecoder;
  reloadDom.window.fetch=async(url)=>bodies.has(url)?response(bodies.get(url)):response('',false);
  reloadDom.window.localStorage.setItem(runtime.shoppingStorageKey,savedAfterCheck);
  for(const file of ['meal-data-loader.js','meal-planner-recipe-data.js','meal-shopping.js','meal-nutrition-policy.js','meal-recommendations.js']) reloadDom.window.eval(fs.readFileSync(new URL(file,root),'utf8'));
  reloadDom.window.eval([...reloadDom.window.document.querySelectorAll('script:not([src])')].at(-1).textContent);
  await reloadDom.window.mealSnapshotReady;
  assert.match(reloadDom.window.document.getElementById('groceryCompleted').textContent,/닭가슴살/);
  reloadDom.window.close();
  dom.window.close();
});
