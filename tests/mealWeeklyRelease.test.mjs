import {preparePipeline,publishPipeline} from '../scripts/mohemeokji-weekly-pipeline.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import {
  buildApprovalReceipt,
  prepareWeeklyRelease,
  publishWeeklyRelease,
  treeDigest,
  verifyApprovalReceipt,
} from '../scripts/mohemeokji-weekly-release.mjs';
import {generateCatalog,parseCsv} from '../scripts/generate-meal-offers.mjs';

const weeklyCsv=[
  ['수집시각','체인','지점','우편번호','도시','행사기간','상품명','상품정보','행사가격','출처','가격적용단위','할인조건','최소구매수량'],
  ['2026-09-13T20:00:00+02:00','ALDI Nord','Filiale A','44369','Dortmund','14.09.2026-20.09.2026','Champignons','500 g','1.99','https://example.com/offer','500 g','없음','1'],
].map((row)=>row.join(',')).join('\n')+'\n';
const fixtureCatalog=generateCatalog(parseCsv(weeklyCsv),'/offers/offers.csv');
const fixtureOffer=fixtureCatalog.offersByIdentity[0];
const weeklyCoverage=[
  ['대상주간','수집시각','요청우편번호','실제우편번호','체인','지점ID','지점','확인한URL','상태','수집상품수','누락이유','원문페이지수','확인페이지수'],
  ['2026-09-14','2026-09-13T20:00:00+02:00','44369','44369','ALDI Nord',fixtureOffer.branchId,'Filiale A','https://example.com/offer','수집완료','1','','1','1'],
].map((row)=>row.join(',')).join('\n')+'\n';

function candidateReport() {
  const offer=fixtureOffer;
  const profile=fixtureCatalog.meta.profiles[offer.postcode][offer.chain];
  return {
    input:'offers.csv',csvSha256:'f'.repeat(64),database:'fixture-db',tenant:'recipe-full',
    candidates:[{
      sourceRecipeId:'7000001',recipeId:'7000001',title:'버섯 두부 덮밥',
      sourceUrl:'https://www.10000recipe.com/recipe/7000001',author:'작성자',sourceServingText:'2인분',
      ingredients:[{ordinal:1,ingredient:'버섯',label:'버섯 200g',quantity:'200g'},{ordinal:2,ingredient:'두부',label:'두부 1모',quantity:'1모'}],
      steps:[{ordinal:1,name:null,instruction:'손질한다.'},{ordinal:2,name:null,instruction:'익힌다.'},{ordinal:3,name:null,instruction:'담는다.'}],
      matches:[{offerId:offer.offerId,relation:'exact-ingredient',ingredientId:'버섯',ingredientLabel:'버섯',titleEvidence:true}],
    }],
    locations:[{postcode:offer.postcode,store:offer.chain,branch:profile.branch,branchId:profile.branchId,offers:[{...offer,recipeCandidateIds:['7000001']}]}],
    identityStats:{},overflow:{},zeroCandidateIdentities:[],zeroCandidateOfferIds:[],
  };
}

test('weekly release receipt seals the CSV and complete public data tree',t=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-release-receipt-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const dataDir=path.join(root,'data');
  fs.mkdirSync(path.join(dataDir,'snapshots'),{recursive:true});
  fs.writeFileSync(path.join(dataDir,'current.json'),'current\n');
  fs.writeFileSync(path.join(dataDir,'snapshots','artifact.json'),'artifact\n');
  const csvPath=path.join(root,'offers.csv');
  fs.writeFileSync(csvPath,'offers\n');
  const coveragePath=path.join(root,'coverage.csv');
  fs.writeFileSync(coveragePath,'coverage\n');

  const receipt=buildApprovalReceipt({
    releaseMode:'rollover',weekStart:'2026-09-14',snapshotId:'a'.repeat(64),
    manifestPath:'snapshots/2026-09-14/'+('a'.repeat(64))+'/manifest.json',
    manifestSha256:'b'.repeat(64),csvPath,coveragePath,dataDir,
  });

  assert.match(receipt.approvalDigest,/^[a-f0-9]{64}$/);
  assert.equal(verifyApprovalReceipt({receipt,csvPath,coveragePath,dataDir}).valid,true);
  fs.appendFileSync(path.join(dataDir,'snapshots','artifact.json'),'tampered\n');
  assert.throws(()=>verifyApprovalReceipt({receipt,csvPath,coveragePath,dataDir}),/data tree digest/i);
});

test('approval digest cannot be reused after receipt fields change',t=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-release-approval-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const dataDir=path.join(root,'data');
  fs.mkdirSync(dataDir);
  fs.writeFileSync(path.join(dataDir,'current.json'),'current\n');
  const csvPath=path.join(root,'offers.csv');
  fs.writeFileSync(csvPath,'offers\n');
  const coveragePath=path.join(root,'coverage.csv');
  fs.writeFileSync(coveragePath,'coverage\n');
  const receipt=buildApprovalReceipt({
    releaseMode:'bootstrap',weekStart:'2026-09-14',snapshotId:'a'.repeat(64),
    manifestPath:'snapshots/2026-09-14/'+('a'.repeat(64))+'/manifest.json',
    manifestSha256:'b'.repeat(64),csvPath,coveragePath,dataDir,
  });

  assert.throws(()=>verifyApprovalReceipt({receipt:{...receipt,weekStart:'2026-09-21'},csvPath,coveragePath,dataDir}),/approval digest/i);
  assert.throws(()=>buildApprovalReceipt({
    releaseMode:'bootstrap',weekStart:'2026-09-14',snapshotId:'a'.repeat(64),
    manifestPath:'../../outside.json',manifestSha256:'b'.repeat(64),csvPath,coveragePath,dataDir,
  }),/manifestPath/i);
  fs.appendFileSync(coveragePath,'tampered\n');
  assert.throws(()=>verifyApprovalReceipt({receipt,csvPath,coveragePath,dataDir}),/coverage CSV digest/i);
});

test('prepare command creates verified twin snapshots and no public mutation',async t=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-release-prepare-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const csvPath=path.join(root,'offers.csv');
  const coveragePath=path.join(root,'coverage.csv');
  const stagingDir=path.join(root,'staging');
  const untouched=path.join(root,'public-marker');
  fs.writeFileSync(csvPath,weeklyCsv);
  fs.writeFileSync(coveragePath,weeklyCoverage);
  fs.writeFileSync(untouched,'untouched');

  const result=await prepareWeeklyRelease({
    csvPath,coveragePath,stagingDir,weekStart:'2026-09-14',releaseMode:'bootstrap',
    registry:{schemaVersion:1,recipes:{}},candidateReport:candidateReport(),
  });

  assert.equal(result.verification.valid,true);
  assert.equal(result.verification.twoBuildComparison.status,'identical');
  assert.equal(result.receipt.status,'awaiting-approval');
  assert.equal(fs.readFileSync(untouched,'utf8'),'untouched');
  assert.equal(fs.existsSync(path.join(stagingDir,'release-receipt.json')),true);

  await assert.rejects(prepareWeeklyRelease({
    csvPath,stagingDir:path.join(root,'missing-coverage'),weekStart:'2026-09-14',releaseMode:'bootstrap',
    registry:{schemaVersion:1,recipes:{}},candidateReport:candidateReport(),
  }),/coveragePath/i);
});

test('pipeline prepare reaches approval wait and refuses implicit publication',async t=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-pipeline-prepare-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
 const csvPath=path.join(root,'offers.csv'),coveragePath=path.join(root,'coverage.csv'),stagingDir=path.join(root,'staging');
 fs.writeFileSync(csvPath,weeklyCsv);fs.writeFileSync(coveragePath,weeklyCoverage);
 const result=await preparePipeline({csvPath,coveragePath,stagingDir,weekStart:'2026-09-14',releaseMode:'bootstrap',registry:{schemaVersion:1,recipes:{}},candidateReport:candidateReport()});
 assert.equal(result.manifest.status,'awaiting-ontology-review');assert.equal(result.verification.twoBuildComparison.status,'identical');
 assert.throws(()=>publishPipeline(stagingDir),/Explicit owner-approved digest/);
});

test('direct publication requires an explicit exact owner-approved digest before public mutation',async t=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-release-publish-approval-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const csvPath=path.join(root,'offers.csv');
  const coveragePath=path.join(root,'coverage.csv');
  const stagingDir=path.join(root,'staging');
  fs.writeFileSync(csvPath,weeklyCsv);
  fs.writeFileSync(coveragePath,weeklyCoverage);
  const {receipt}=await prepareWeeklyRelease({
    csvPath,coveragePath,stagingDir,weekStart:'2026-09-14',releaseMode:'bootstrap',
    registry:{schemaVersion:1,recipes:{}},candidateReport:candidateReport(),
  });
  const dataDir=path.join(stagingDir,'data');
  const stagedCsv=path.join(stagingDir,'input',receipt.sourceFileName);
  const stagedCoverage=path.join(stagingDir,'input',receipt.coverageFileName);
  // Read-only inspection remains available without claiming owner approval.
  assert.equal(verifyApprovalReceipt({receipt,csvPath:stagedCsv,coveragePath:stagedCoverage,dataDir}).valid,true);

  function publicTarget(name) {
    const repoRoot=path.join(root,name);
    const publicDataDir=path.join(repoRoot,'public/mohemeokji/data');
    const publicOffersDir=path.join(repoRoot,'public/offers');
    const packagePricesPath=path.join(repoRoot,'public/mohemeokji/meal-package-prices.js');
    fs.mkdirSync(publicDataDir,{recursive:true});
    fs.mkdirSync(publicOffersDir,{recursive:true});
    fs.writeFileSync(path.join(publicDataDir,'current.json'),'previous data\n');
    fs.writeFileSync(path.join(publicOffersDir,receipt.sourceFileName),'previous offers\n');
    fs.writeFileSync(path.join(publicOffersDir,receipt.coverageFileName),'previous coverage\n');
    fs.writeFileSync(packagePricesPath,'previous prices\n');
    return {stagingDir,repoRoot,publicDataDir,publicOffersDir,packagePricesPath,syncPages:false};
  }
  const invalidApprovals=[
    ['missing',{},/Explicit owner-approved digest/],
    ['undefined',{approvalDigest:undefined},/Explicit owner-approved digest/],
    ['null',{approvalDigest:null},/Explicit owner-approved digest/],
    ['empty',{approvalDigest:''},/Explicit owner-approved digest/],
    ['short',{approvalDigest:'a'.repeat(63)},/Explicit owner-approved digest/],
    ['invalid-hex',{approvalDigest:'g'.repeat(64)},/Explicit owner-approved digest/],
    ['uppercase',{approvalDigest:receipt.approvalDigest.toUpperCase()},/Explicit owner-approved digest/],
    ['array',{approvalDigest:[receipt.approvalDigest]},/Explicit owner-approved digest/],
    ['wrong',{approvalDigest:(receipt.approvalDigest[0]==='0'?'1':'0')+receipt.approvalDigest.slice(1)},/provided approval digest does not match/],
  ];
  for(const [name,approval,error] of invalidApprovals) await t.test(name,()=>{
    const target=publicTarget(name);
    const before=treeDigest(target.repoRoot);
    assert.throws(()=>publishWeeklyRelease({...target,...approval}),error);
    assert.equal(treeDigest(target.repoRoot),before,'rejected publication must preserve every public file');
  });
  await t.test('valid exact digest publishes the verified release',()=>{
    const target=publicTarget('approved');
    const result=publishWeeklyRelease({...target,approvalDigest:receipt.approvalDigest});
    assert.equal(result.published,true);
    assert.equal(result.approvalDigest,receipt.approvalDigest);
    assert.equal(treeDigest(target.publicDataDir),receipt.dataTreeSha256);
    assert.deepEqual(fs.readFileSync(path.join(target.publicOffersDir,receipt.sourceFileName)),fs.readFileSync(stagedCsv));
    assert.deepEqual(fs.readFileSync(path.join(target.publicOffersDir,receipt.coverageFileName)),fs.readFileSync(stagedCoverage));
    assert.notEqual(fs.readFileSync(target.packagePricesPath,'utf8'),'previous prices\n');
  });
});
