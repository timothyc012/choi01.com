import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import vm from 'node:vm';

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
});
