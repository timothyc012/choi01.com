import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';

import {verifyMealSnapshot} from '../scripts/verify-meal-snapshot.mjs';

const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
const json=(value)=>Buffer.from(JSON.stringify(value)+'\n');

function writeFixture({locations=2,mutate}={}) {
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-verify-'));
  const snapshotId='a'.repeat(64);
  const snapshotRoot=`snapshots/2026-09-07/${snapshotId}`;
  const files=new Map();
  const manifestLocations=[];
  const coverageLocations=[];
  const recipeIndex=[];
  for(let index=0;index<locations;index++) {
    const postcode=String(52064+index);
    const store=index%2?'Netto':'EDEKA';
    const branchId=`branch-${index}`;
    const id=`${postcode}-${store.toLowerCase()}-${branchId}`;
    const offerId=String(index+1).padStart(64,'b');
    const sourceRecipeId=String(7000000+index);
    const detail={schemaVersion:1,sourceRecipeId,sourceContentHash:String(index+1).padStart(64,'c'),sourceTitle:`원문 ${index}`,sourceUrl:`https://www.10000recipe.com/recipe/${sourceRecipeId}`,sourceAuthor:'작성자',title:`메뉴 ${index}`,detailIngredients:['재료 100g','소금 1g'],steps:['씻는다.','익힌다.','담는다.'],recommendationProfile:{kind:'main'}};
    const detailBytes=json(detail);
    const detailHash=sha256(detailBytes);
    const detailPath=`${snapshotRoot}/recipes/${sourceRecipeId}.${detailHash}.json`;
    files.set(detailPath,detailBytes);
    recipeIndex.push({sourceRecipeId,path:detailPath,sha256:detailHash,sourceContentHash:detail.sourceContentHash});
    const location={schemaVersion:1,snapshotId,weekStart:'2026-09-07',id,postcode,store,branch:`지점 ${index}`,branchId,
      offers:[{offerId,postcode,chain:store,branchId,productDe:`Produkt ${index}`,pack:'500 g',priceCents:499,validFrom:'2026-09-07',validThrough:'2026-09-13',autoPriceEligible:true,identity:{ingredientId:'감자',species:'plant',cut:'whole',processingState:'raw',form:'whole',composition:'potato'}}],
      recipes:[{sourceRecipeId,offerIds:[offerId],detailPath,detailSha256:detailHash,recommendationProfile:{kind:'main'}}],
      coverage:{target:48,published:1,eligible:1,heldForReviewCount:0,zeroCandidateOfferIds:[],sparse:true},warnings:[]};
    const locationPath=`${snapshotRoot}/locations/${id}.json`;
    files.set(locationPath,json(location));
    manifestLocations.push({id,postcode,store,branch:location.branch,branchId,path:locationPath,recipeCount:1});
    coverageLocations.push({locationId:id,postcode,store,branchId,target:48,published:1,eligible:1,heldForReviewCount:0,zeroCandidateOfferIds:[],sparse:true});
  }
  const coveragePath=`${snapshotRoot}/coverage.json`;
  const recipeIndexPath=`${snapshotRoot}/recipes/index.json`;
  files.set(coveragePath,json({schemaVersion:1,snapshotId,locations:coverageLocations,zeroCandidateIdentities:[],zeroCandidateOfferIds:[]}));
  files.set(recipeIndexPath,json({schemaVersion:1,snapshotId,recipes:recipeIndex}));
  const fileHashes=Object.fromEntries([...files].map(([relative,bytes])=>[relative,sha256(bytes)]));
  const manifest={schemaVersion:1,snapshotId,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1',tenant:'recipe-full',locations:manifestLocations,coveragePath,recipeIndexPath,fileHashes};
  mutate?.({manifest,files,manifestLocations,coverageLocations,snapshotId,snapshotRoot});
  for(const [relative,bytes] of files) {
    const target=path.join(root,relative);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);
  }
  const manifestPath=`${snapshotRoot}/manifest.json`;
  const manifestBytes=json(manifest);
  const target=path.join(root,manifestPath);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,manifestBytes);
  fs.writeFileSync(path.join(root,'current.json'),json({schemaVersion:1,snapshotId,weekStart:'2026-09-07',collectionTimestamp:manifest.collectionTimestamp,manifestPath,manifestSha256:sha256(manifestBytes)}));
  return {root,manifestPath,manifest};
}

test('rejects a current pointer with a missing or hash-mismatched manifest',()=>{
  const missing=writeFixture();
  fs.unlinkSync(path.join(missing.root,missing.manifestPath));
  assert.throws(()=>verifyMealSnapshot({snapshotDir:missing.root}),/manifest/i);

  const mismatch=writeFixture();
  const currentPath=path.join(mismatch.root,'current.json');
  const current=JSON.parse(fs.readFileSync(currentPath,'utf8'));
  current.manifestSha256='0'.repeat(64);
  fs.writeFileSync(currentPath,json(current));
  assert.throws(()=>verifyMealSnapshot({snapshotDir:mismatch.root}),/manifest hash/i);
});

test('rejects missing artifacts, cross-store offer borrowing, and oversized selected assets',()=>{
  const missing=writeFixture();
  const locationPath=missing.manifest.locations[0].path;
  fs.unlinkSync(path.join(missing.root,locationPath));
  assert.throws(()=>verifyMealSnapshot({snapshotDir:missing.root}),/artifact|location/i);

  const borrowed=writeFixture({mutate({manifest,files}){
    const first=JSON.parse(files.get(manifest.locations[0].path));
    const second=JSON.parse(files.get(manifest.locations[1].path));
    first.recipes[0].offerIds=[second.offers[0].offerId];
    files.set(manifest.locations[0].path,json(first));
    manifest.fileHashes=Object.fromEntries([...files].map(([relative,bytes])=>[relative,sha256(bytes)]));
  }});
  assert.throws(()=>verifyMealSnapshot({snapshotDir:borrowed.root}),/borrow/i);

  const oversized=writeFixture();
  assert.throws(()=>verifyMealSnapshot({snapshotDir:oversized.root,assetBudgets:{locationBytes:10}}),/budget/i);
});

test('rejects source lineage that disagrees with the recipe index even when hashes are recomputed',()=>{
  const fixture=writeFixture({locations:1});
  const manifestPath=path.join(fixture.root,fixture.manifestPath);
  const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
  const indexPath=path.join(fixture.root,manifest.recipeIndexPath);
  const index=JSON.parse(fs.readFileSync(indexPath,'utf8'));
  const indexed=index.recipes[0];
  const detailPath=path.join(fixture.root,indexed.path);
  const detail=JSON.parse(fs.readFileSync(detailPath,'utf8'));
  detail.sourceRecipeId='wrong-source';
  const detailBytes=json(detail);
  fs.writeFileSync(detailPath,detailBytes);
  indexed.sha256=sha256(detailBytes);
  manifest.fileHashes[indexed.path]=indexed.sha256;
  const indexBytes=json(index);
  fs.writeFileSync(indexPath,indexBytes);
  manifest.fileHashes[manifest.recipeIndexPath]=sha256(indexBytes);
  const locationRef=manifest.locations[0];
  const locationPath=path.join(fixture.root,locationRef.path);
  const location=JSON.parse(fs.readFileSync(locationPath,'utf8'));
  location.recipes[0].detailSha256=indexed.sha256;
  const locationBytes=json(location);
  fs.writeFileSync(locationPath,locationBytes);
  manifest.fileHashes[locationRef.path]=sha256(locationBytes);
  const manifestBytes=json(manifest);
  fs.writeFileSync(manifestPath,manifestBytes);
  const currentPath=path.join(fixture.root,'current.json');
  const current=JSON.parse(fs.readFileSync(currentPath,'utf8'));
  current.manifestSha256=sha256(manifestBytes);
  fs.writeFileSync(currentPath,json(current));
  assert.throws(()=>verifyMealSnapshot({snapshotDir:fixture.root}),/source lineage/i);
});

test('checks every location and reports all four modes without inventing unavailable facts',()=>{
  const fixture=writeFixture({locations:11});
  const report=verifyMealSnapshot({snapshotDir:fixture.root});
  assert.equal(report.locationsChecked,11);
  assert.equal(report.errors.length,0);
  assert.equal(report.schema.valid,true);
  assert.equal(report.lineage.tenant,'recipe-full');
  for(const location of report.locations) {
    assert.equal(location.modeReadiness.balanced.eligible,1);
    assert.deepEqual(location.modeReadiness.value,{eligible:0,status:'unavailable',reason:'complete basket price evidence absent'});
    assert.equal(location.modeReadiness.nutrition.status,'unavailable');
    assert.equal(location.modeReadiness.diet.status,'unavailable');
    assert.equal(location.browserInitialAssets.some((entry)=>entry.includes('review-queue')||entry.endsWith('.csv')),false);
    assert.equal(location.browserInitialAssets.filter((entry)=>entry.includes('/locations/')).length,1);
  }
});

test('validates a supplied previous snapshot as an independent rollback target',()=>{
  const current=writeFixture();
  const previous=writeFixture();
  const report=verifyMealSnapshot({snapshotDir:current.root,previousSnapshotDir:previous.root});
  assert.equal(report.rollback.valid,true);

  fs.unlinkSync(path.join(previous.root,'current.json'));
  assert.throws(()=>verifyMealSnapshot({snapshotDir:current.root,previousSnapshotDir:previous.root}),/rollback/i);
});

test('real published output loads only the selected location before a detail is opened',async()=>{
  const publicRoot=path.resolve(new URL('../public/mohemeokji/',import.meta.url).pathname);
  const dataRoot=path.join(publicRoot,'data');
  const context=vm.createContext({window:{},TextEncoder,TextDecoder,crypto:crypto.webcrypto});
  vm.runInContext(fs.readFileSync(path.join(publicRoot,'meal-data-loader.js'),'utf8'),context);
  const calls=[];
  const fetcher=async(url)=>{
    calls.push(url);
    const prefix='/mohemeokji/data/';
    if(!url.startsWith(prefix)) return {ok:false,status:404,async arrayBuffer(){return new ArrayBuffer(0);}};
    const target=path.resolve(dataRoot,url.slice(prefix.length));
    if(!target.startsWith(dataRoot+path.sep)||!fs.existsSync(target)) return {ok:false,status:404,async arrayBuffer(){return new ArrayBuffer(0);}};
    const bytes=fs.readFileSync(target);
    return {ok:true,status:200,async arrayBuffer(){return bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);}};
  };
  const loader=context.window.MealDataLoader;
  const current=JSON.parse(fs.readFileSync(path.join(dataRoot,'current.json'),'utf8'));
  const manifest=await loader.loadCurrentSnapshot(fetcher);
  const selected=manifest.locations.find((location)=>location.recipeCount>0);
  const location=await loader.loadLocationSnapshot(manifest,selected,fetcher);
  assert.deepEqual(calls,[`/mohemeokji/data/current.json`,`/mohemeokji/data/${current.manifestPath}`,`/mohemeokji/data/${selected.path}`]);
  assert.equal(calls.some((url)=>url.includes('review-queue')||url.endsWith('.csv')),false);
  assert.equal(calls.filter((url)=>url.includes('/locations/')).length,1);
  const detail=await loader.loadRecipeDetail(location,location.recipes[0].sourceRecipeId,fetcher);
  assert.equal(detail.sourceRecipeId,location.recipes[0].sourceRecipeId);
  assert.equal(calls.filter((url)=>url.includes('/locations/')).length,1);
  assert.equal(calls.at(-1),`/mohemeokji/data/${location.recipes[0].detailPath}`);
});
