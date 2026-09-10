import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import {compileMealWeek} from '../scripts/compile-meal-week.mjs';
import {sourceContentHash} from '../scripts/lib/select-store-recipes.mjs';
import {validateMealSnapshotDirectory} from '../scripts/lib/validate-meal-snapshot.mjs';

const identity={ingredientId:'닭가슴살',species:'chicken',cut:'breast',processingState:'raw',form:'fillet',composition:'chicken'};
const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');

function rewriteJson(file,value) {
  const bytes=Buffer.from(JSON.stringify(value,null,2)+'\n');
  fs.writeFileSync(file,bytes);
  return sha256(bytes);
}

function readSnapshot(outputDir) {
  const currentPath=path.join(outputDir,'current.json');
  const current=JSON.parse(fs.readFileSync(currentPath,'utf8'));
  const manifestPath=path.join(outputDir,current.manifestPath);
  const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
  return {currentPath,current,manifestPath,manifest};
}

function rewriteManifest({currentPath,current,manifestPath,manifest}) {
  current.manifestSha256=rewriteJson(manifestPath,manifest);
  rewriteJson(currentPath,current);
}

function fixture() {
  const offer={offerId:'offer-a',postcode:'52064',chain:'EDEKA',branchId:'branch-a',sourceRow:2,evidenceUrl:'https://example.com/offer',validFrom:'2026-09-07',validThrough:'2026-09-13',productDe:'Hähnchenbrustfilet',pack:'500 g',priceCents:599,normalPriceCents:null,conditions:'',autoPriceEligible:true,identity};
  const candidate={
    recipeId:'7000001',sourceRecipeId:'7000001',title:'raw title',sourceUrl:'https://www.10000recipe.com/recipe/7000001',author:'author',rating:'4.9',ratingNumber:4.9,reviewCount:100,sourceServingText:'2인분',
    ingredients:[{ordinal:1,ingredient:'닭가슴살',quantity:'300g'},{ordinal:2,ingredient:'소금',quantity:'1t'}],
    steps:[1,2,3].map((ordinal)=>({ordinal,instruction:'DO NOT PUBLISH RAW '+ordinal})),
    matches:[{offerId:'offer-a',relation:'exact-ingredient',ingredientId:'닭가슴살',ingredientLabel:'닭가슴살'}],
    recommendationProfile:{primaryIngredients:['닭가슴살'],family:'chicken',method:'stirfry',kind:'main'},
  };
  const registryEntry={sourceRecipeId:'7000001',sourceContentHash:sourceContentHash(candidate),transformVersion:'ko-paraphrase-v1',approved:true,title:'닭가슴살 볶음',detailIngredients:['닭가슴살 300g','소금 1t'],steps:['닭가슴살을 손질한다.','팬에서 속까지 익힌다.','간을 맞춰 담는다.'],recommendationProfile:candidate.recommendationProfile};
  const registry={schemaVersion:1,recipes:{
    [['7000001',registryEntry.sourceContentHash,registryEntry.transformVersion].join('|')]:registryEntry,
  }};
  const candidateReport={
    tenant:'recipe-full',locations:[{postcode:'52064',store:'EDEKA',branch:'Aachen',branchId:'branch-a',offers:[{...offer,recipeCandidateIds:['7000001']}]}],
    candidates:[candidate],zeroCandidateOfferIds:[],identityStats:{},overflow:{},zeroCandidateIdentities:[],
  };
  return {offer,candidate,registry,candidateReport};
}

test('compiled output is byte-identical, hash-valid, and contains no raw source instructions or images',async(t)=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-snapshot-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const a=path.join(root,'a');
  const b=path.join(root,'b');
  const data=fixture();
  const options={candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'};
  const first=await compileMealWeek({...options,outputDir:a});
  const second=await compileMealWeek({...options,outputDir:b});
  assert.equal(first.snapshotId,second.snapshotId);
  const relativeFiles=(dir)=>fs.readdirSync(dir,{recursive:true,withFileTypes:true}).filter((entry)=>entry.isFile()).map((entry)=>path.relative(dir,path.join(entry.parentPath,entry.name))).sort();
  assert.deepEqual(relativeFiles(a),relativeFiles(b));
  for(const file of relativeFiles(a)) assert.deepEqual(fs.readFileSync(path.join(a,file)),fs.readFileSync(path.join(b,file)),file);
  const validation=validateMealSnapshotDirectory(a);
  assert.deepEqual(validation,{valid:true,errors:[]});
  const bytes=relativeFiles(a).map((file)=>fs.readFileSync(path.join(a,file),'utf8')).join('\n');
  assert.equal(bytes.includes('DO NOT PUBLISH RAW'),false);
  assert.equal(/sourceImage|imageUrl|"images"/.test(bytes),false);
});

test('current pointer resolves an immutable manifest and every listed artifact hash',async(t)=>{
  const outputDir=fs.mkdtempSync(path.join(os.tmpdir(),'meal-pointer-'));
  t.after(()=>fs.rmSync(outputDir,{recursive:true,force:true}));
  const data=fixture();
  const manifest=await compileMealWeek({outputDir,candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const current=JSON.parse(fs.readFileSync(path.join(outputDir,'current.json'),'utf8'));
  assert.equal(current.snapshotId,manifest.snapshotId);
  assert.match(current.manifestPath,/^snapshots\/2026-09-07\/[a-f0-9]{64}\/manifest\.json$/);
  assert.match(current.manifestSha256,/^[a-f0-9]{64}$/);
  assert.equal(validateMealSnapshotDirectory(outputDir).valid,true);
});

test('validator rejects an unsafe or unhashed declared manifest artifact path',async(t)=>{
  const outputDir=fs.mkdtempSync(path.join(os.tmpdir(),'meal-unsafe-manifest-'));
  t.after(()=>fs.rmSync(outputDir,{recursive:true,force:true}));
  const data=fixture();
  await compileMealWeek({outputDir,candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const snapshot=readSnapshot(outputDir);
  snapshot.manifest.coveragePath='../outside-coverage.json';
  rewriteManifest(snapshot);
  const validation=validateMealSnapshotDirectory(outputDir);
  assert.equal(validation.valid,false);
  assert.ok(validation.errors.some((error)=>error.includes('coveragePath')));
});

test('validator rejects unsafe, missing-hash recipe details even when container hashes are recomputed',async(t)=>{
  const outputDir=fs.mkdtempSync(path.join(os.tmpdir(),'meal-unsafe-detail-'));
  t.after(()=>fs.rmSync(outputDir,{recursive:true,force:true}));
  const data=fixture();
  await compileMealWeek({outputDir,candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const snapshot=readSnapshot(outputDir);
  const locationRef=snapshot.manifest.locations[0];
  const locationPath=path.join(outputDir,locationRef.path);
  const location=JSON.parse(fs.readFileSync(locationPath,'utf8'));
  location.recipes[0].detailPath='../outside-recipe.json';
  delete location.recipes[0].detailSha256;
  snapshot.manifest.fileHashes[locationRef.path]=rewriteJson(locationPath,location);
  rewriteManifest(snapshot);
  const validation=validateMealSnapshotDirectory(outputDir);
  assert.equal(validation.valid,false);
  assert.ok(validation.errors.some((error)=>error.includes('detailPath')||error.includes('detailSha256')));
});

test('validator rejects a recomputed manifest that silently omits all locations',async(t)=>{
  const outputDir=fs.mkdtempSync(path.join(os.tmpdir(),'meal-missing-locations-'));
  t.after(()=>fs.rmSync(outputDir,{recursive:true,force:true}));
  const data=fixture();
  await compileMealWeek({outputDir,candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const snapshot=readSnapshot(outputDir);
  const removedLocationPath=snapshot.manifest.locations[0].path;
  snapshot.manifest.locations=[];
  delete snapshot.manifest.fileHashes[removedLocationPath];
  rewriteManifest(snapshot);
  const validation=validateMealSnapshotDirectory(outputDir);
  assert.equal(validation.valid,false);
  assert.ok(validation.errors.some((error)=>error.includes('locations')||error.includes('unlisted output file')));
});

test('zero-candidate stores stay empty with explicit coverage instead of cross-store backfill',async(t)=>{
  const outputDir=fs.mkdtempSync(path.join(os.tmpdir(),'meal-empty-'));
  t.after(()=>fs.rmSync(outputDir,{recursive:true,force:true}));
  const data=fixture();
  data.candidateReport.locations.push({postcode:'44369',store:'NETTO',branch:'Dortmund',branchId:'branch-b',offers:[{...data.offer,offerId:'offer-b',postcode:'44369',chain:'NETTO',branchId:'branch-b',recipeCandidateIds:[]}]});
  data.candidateReport.zeroCandidateOfferIds=['offer-b'];
  const manifest=await compileMealWeek({outputDir,candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const emptyLocation=manifest.locations.find((location)=>location.postcode==='44369');
  const location=JSON.parse(fs.readFileSync(path.join(outputDir,emptyLocation.path),'utf8'));
  assert.deepEqual(location.recipes,[]);
  assert.equal(location.coverage.zeroCandidateOfferIds.includes('offer-b'),true);
  assert.equal(location.coverage.sparse,true);
});

test('large unapproved queues stay out of the location payload',async(t)=>{
  const outputDir=fs.mkdtempSync(path.join(os.tmpdir(),'meal-lean-location-'));
  t.after(()=>fs.rmSync(outputDir,{recursive:true,force:true}));
  const data=fixture();
  const rejected=Array.from({length:1000},(_,index)=>({
    ...data.candidate,
    recipeId:'held-'+index,sourceRecipeId:'held-'+index,title:'held '+index,
  }));
  data.candidateReport.candidates=rejected;
  data.candidateReport.locations[0].offers[0].recipeCandidateIds=rejected.map((candidate)=>candidate.recipeId);
  const manifest=await compileMealWeek({outputDir,candidateReport:data.candidateReport,registry:{schemaVersion:1,recipes:{}},weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const locationPath=manifest.locations[0].path;
  const location=JSON.parse(fs.readFileSync(path.join(outputDir,locationPath),'utf8'));
  assert.equal('heldForReview' in location.coverage,false);
  assert.equal(location.coverage.heldForReviewCount,1000);
  assert.ok(fs.statSync(path.join(outputDir,locationPath)).size<60*1024);
});
