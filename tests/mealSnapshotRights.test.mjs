import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import {compileMealWeek} from '../scripts/compile-meal-week.mjs';
import {sourceContentHash} from '../scripts/lib/select-store-recipes.mjs';
import {validateMealSnapshotDirectory} from '../scripts/lib/validate-meal-snapshot.mjs';
import {verifyMealSnapshot} from '../scripts/verify-meal-snapshot.mjs';
import {offerIdentityKey} from '../scripts/find-store-recipe-candidates.mjs';

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
    steps:[
      {ordinal:1,instruction:'DO NOT PUBLISH RAW 닭가슴살을 손질한다.'},
      {ordinal:2,instruction:'DO NOT PUBLISH RAW 닭가슴살을 팬에서 볶는다.'},
      {ordinal:3,instruction:'DO NOT PUBLISH RAW 닭가슴살을 속까지 완전히 익힌다.'},
    ],
    matches:[{offerId:'offer-a',relation:'exact-ingredient',ingredientId:'닭가슴살',ingredientLabel:'닭가슴살',offerIdentityKey:offerIdentityKey(identity)}],
    recommendationProfile:{primaryIngredients:['닭가슴살'],family:'chicken',method:'stirfry',kind:'main'},
  };
  const registryEntry={sourceRecipeId:'7000001',sourceContentHash:sourceContentHash(candidate),transformVersion:'ko-paraphrase-v1',approved:true,approvalMethod:'owner-authorized-editorial-transform',validationVersion:'source-facts-v2',title:'닭가슴살 볶음',detailIngredients:['닭가슴살 300g','소금 1t'],steps:['닭가슴살을 손질한다.','팬에서 속까지 익힌다.','간을 맞춰 담는다.'],recommendationProfile:candidate.recommendationProfile};
  const registry={schemaVersion:1,recipes:{
    [['7000001',registryEntry.sourceContentHash,registryEntry.transformVersion].join('|')]:registryEntry,
  }};
  const candidateReport={
    input:'fixture.csv',csvSha256:'d'.repeat(64),database:'fixture-db',tenant:'recipe-full',locations:[{postcode:'52064',store:'EDEKA',branch:'Aachen',branchId:'branch-a',offers:[{...offer,recipeCandidateIds:['7000001']}]}],
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
  assert.equal(relativeFiles(a).some((file)=>file.includes('review-queue')),false);
  const published=readSnapshot(a);
  assert.equal('reviewQueuePath' in published.manifest,false);
  assert.equal(published.manifest.source.inputLogicalName,'fixture.csv');
  assert.equal(published.manifest.source.csvSha256,'d'.repeat(64));
  assert.match(published.manifest.source.discoverySha256,/^[a-f0-9]{64}$/);
  assert.equal(published.manifest.source.database,'fixture-db');
  const location=JSON.parse(fs.readFileSync(path.join(a,published.manifest.locations[0].path),'utf8'));
  assert.equal(location.recipes[0].title,'닭가슴살 볶음');
  const bytes=relativeFiles(a).map((file)=>fs.readFileSync(path.join(a,file),'utf8')).join('\n');
  assert.equal(bytes.includes('DO NOT PUBLISH RAW'),false);
  assert.equal(/sourceImage|imageUrl|"images"/.test(bytes),false);
});

test('validator rejects a location title that differs from its hash-pinned approved detail',async(t)=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-title-integrity-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const data=fixture();
  const manifest=await compileMealWeek({outputDir:root,candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const snapshot=readSnapshot(root);
  const locationPath=path.join(root,manifest.locations[0].path);
  const location=JSON.parse(fs.readFileSync(locationPath,'utf8'));
  location.recipes[0].title='변조된 제목';
  snapshot.manifest.fileHashes[manifest.locations[0].path]=rewriteJson(locationPath,location);
  rewriteManifest(snapshot);
  assert.match(validateMealSnapshotDirectory(root).errors.join('\n'),/title.*detail/i);
});

test('approved paraphrase changes produce a new immutable snapshot identity',async(t)=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-paraphrase-identity-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const data=fixture();
  const first=await compileMealWeek({outputDir:path.join(root,'a'),candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const changed=structuredClone(data.registry);
  Object.values(changed.recipes)[0].title='닭가슴살 팬 볶음';
  const second=await compileMealWeek({outputDir:path.join(root,'b'),candidateReport:data.candidateReport,registry:changed,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  assert.notEqual(first.snapshotId,second.snapshotId);
});

test('compiler creates a verifier-ready rollover with the prior snapshot retained in-tree',async(t)=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-compiler-rollover-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const data=fixture();
  const bootstrapDir=path.join(root,'bootstrap');
  await compileMealWeek({outputDir:bootstrapDir,candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const bootstrapCurrent=JSON.parse(fs.readFileSync(path.join(bootstrapDir,'current.json'),'utf8'));
  const rolloverDir=path.join(root,'rollover');
  const rollover=await compileMealWeek({outputDir:rolloverDir,releaseMode:'rollover',previousManifestPath:path.join(bootstrapDir,bootstrapCurrent.manifestPath),candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-14',collectionTimestamp:'2026-09-13T09:00:00+02:00',policyVersion:'selection-v1'});
  assert.equal(rollover.previousSnapshot.manifestPath,bootstrapCurrent.manifestPath);
  assert.equal(fs.existsSync(path.join(rolloverDir,bootstrapCurrent.manifestPath)),true);
  const report=verifyMealSnapshot({snapshotDir:rolloverDir,releaseMode:'rollover',previousManifestPath:bootstrapCurrent.manifestPath});
  assert.equal(report.rollback.valid,true);

  const rolloverCurrent=JSON.parse(fs.readFileSync(path.join(rolloverDir,'current.json'),'utf8'));
  const thirdDir=path.join(root,'third');
  const third=await compileMealWeek({outputDir:thirdDir,releaseMode:'rollover',previousManifestPath:path.join(rolloverDir,rolloverCurrent.manifestPath),candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-21',collectionTimestamp:'2026-09-20T09:00:00+02:00',policyVersion:'selection-v1'});
  assert.equal(third.previousSnapshot.snapshotId,rollover.snapshotId);
  assert.equal(fs.existsSync(path.join(thirdDir,bootstrapCurrent.manifestPath)),true);
  assert.equal(fs.existsSync(path.join(thirdDir,rolloverCurrent.manifestPath)),true);
  const thirdReport=verifyMealSnapshot({snapshotDir:thirdDir,releaseMode:'rollover',previousManifestPath:rolloverCurrent.manifestPath});
  assert.equal(thirdReport.rollback.valid,true);

  await assert.rejects(compileMealWeek({outputDir:path.join(root,'same-week'),releaseMode:'rollover',previousManifestPath:path.join(bootstrapDir,bootstrapCurrent.manifestPath),candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T10:00:00+02:00',policyVersion:'selection-v1'}),/earlier week/i);
  const corruptRoot=path.join(root,'corrupt');
  fs.cpSync(bootstrapDir,corruptRoot,{recursive:true});
  fs.appendFileSync(path.join(corruptRoot,bootstrapCurrent.manifestPath),'corrupt');
  await assert.rejects(compileMealWeek({outputDir:path.join(root,'invalid'),releaseMode:'rollover',previousManifestPath:path.join(corruptRoot,bootstrapCurrent.manifestPath),candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-14',collectionTimestamp:'2026-09-13T09:00:00+02:00',policyVersion:'selection-v1'}),/previous snapshot/i);
});

test('compiler creates a same-week correction that retains the prior immutable snapshot',async(t)=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-compiler-correction-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const data=fixture();
  const bootstrapDir=path.join(root,'bootstrap');
  await compileMealWeek({outputDir:bootstrapDir,candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const bootstrapCurrent=JSON.parse(fs.readFileSync(path.join(bootstrapDir,'current.json'),'utf8'));
  const changed=structuredClone(data.registry);
  Object.values(changed.recipes)[0].title='교정된 닭가슴살 볶음';
  const correctionDir=path.join(root,'correction');
  const correction=await compileMealWeek({outputDir:correctionDir,releaseMode:'correction',previousManifestPath:path.join(bootstrapDir,bootstrapCurrent.manifestPath),candidateReport:data.candidateReport,registry:changed,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  assert.notEqual(correction.snapshotId,bootstrapCurrent.snapshotId);
  assert.deepEqual(correction.previousSnapshot,{snapshotId:bootstrapCurrent.snapshotId,manifestPath:bootstrapCurrent.manifestPath,manifestSha256:bootstrapCurrent.manifestSha256,mode:'correction'});
  assert.equal(fs.existsSync(path.join(correctionDir,bootstrapCurrent.manifestPath)),true);
  const report=verifyMealSnapshot({snapshotDir:correctionDir,releaseMode:'correction',previousManifestPath:bootstrapCurrent.manifestPath});
  assert.deepEqual(report.rollback,{mode:'correction',provided:true,valid:true,snapshotId:bootstrapCurrent.snapshotId,manifestPath:bootstrapCurrent.manifestPath});
  await assert.rejects(compileMealWeek({outputDir:path.join(root,'wrong-week'),releaseMode:'correction',previousManifestPath:path.join(bootstrapDir,bootstrapCurrent.manifestPath),candidateReport:data.candidateReport,registry:changed,weekStart:'2026-09-14',collectionTimestamp:'2026-09-13T09:00:00+02:00',policyVersion:'selection-v1'}),/same week/i);
});

test('writes held recipe IDs only to an explicitly separate private audit file',async(t)=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-private-audit-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const outputDir=path.join(root,'public');
  const auditOutputPath=path.join(root,'private','review-queue.json');
  const data=fixture();
  data.candidateReport.candidates=[{...data.candidate,recipeId:'held-1',sourceRecipeId:'held-1',title:'held'}];
  data.candidateReport.locations[0].offers[0].recipeCandidateIds=['held-1'];
  await compileMealWeek({outputDir,auditOutputPath,candidateReport:data.candidateReport,registry:{schemaVersion:1,recipes:{}},weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const audit=JSON.parse(fs.readFileSync(auditOutputPath,'utf8'));
  assert.deepEqual(audit.recipes.map((entry)=>entry.recipeId),['held-1']);
  assert.equal(fs.readdirSync(outputDir,{recursive:true}).some((entry)=>String(entry).includes('review-queue')),false);
});

test('rejects a private audit path under the public root before writing public files',async(t)=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-nested-audit-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const outputDir=path.join(root,'public');
  const data=fixture();
  await assert.rejects(compileMealWeek({outputDir,auditOutputPath:path.join(outputDir,'review-queue.json'),candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'}),/outside the public snapshot/i);
  assert.equal(fs.existsSync(path.join(outputDir,'current.json')),false);
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

test('validator rejects any public review queue reference',async(t)=>{
  const outputDir=fs.mkdtempSync(path.join(os.tmpdir(),'meal-public-queue-'));
  t.after(()=>fs.rmSync(outputDir,{recursive:true,force:true}));
  const data=fixture();
  await compileMealWeek({outputDir,candidateReport:data.candidateReport,registry:data.registry,weekStart:'2026-09-07',collectionTimestamp:'2026-09-06T09:00:00+02:00',policyVersion:'selection-v1'});
  const snapshot=readSnapshot(outputDir);
  snapshot.manifest.reviewQueuePath='snapshots/private/review-queue.json';
  rewriteManifest(snapshot);
  const validation=validateMealSnapshotDirectory(outputDir);
  assert.equal(validation.valid,false);
  assert.ok(validation.errors.some((error)=>/review queue/i.test(error)));
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
