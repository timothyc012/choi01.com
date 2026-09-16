#!/usr/bin/env node
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';

import {compileMealWeek} from './compile-meal-week.mjs';
import {parseCsv,parseCsvTable,renderMealPackagePrices} from './generate-meal-offers.mjs';
import {canonicalJson} from './lib/meal-snapshot-schema.mjs';
import {inspectWeek} from './prepare-meal-week.mjs';
import {verifyMealSnapshot} from './verify-meal-snapshot.mjs';

const DIGEST=/^[a-f0-9]{64}$/;
const RECEIPT_BODY_FIELDS=new Set(['schemaVersion','kind','status','releaseMode','weekStart','snapshotId','manifestPath','manifestSha256','sourceFileName','sourceSha256','coverageFileName','coverageSha256','dataTreeSha256']);
const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
const jsonBytes=(value)=>Buffer.from(canonicalJson(value)+'\n');
const posix=(value)=>value.split(path.sep).join('/');

function walk(root,current='',result=[]) {
  for(const entry of fs.readdirSync(path.join(root,current),{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))) {
    const relative=path.join(current,entry.name);
    if(entry.isDirectory()) walk(root,relative,result);
    else if(entry.isFile()) result.push(relative);
  }
  return result;
}

export function treeDigest(root) {
  const entries=walk(root).map((relative)=>({path:posix(relative),sha256:sha256(fs.readFileSync(path.join(root,relative)))}));
  return sha256(canonicalJson(entries));
}

function receiptBody(options) {
  const csvBytes=fs.readFileSync(options.csvPath);
  const coverageBytes=fs.readFileSync(options.coveragePath);
  return {
    schemaVersion:1,
    kind:'mohemeokji-weekly-release',
    status:'awaiting-approval',
    releaseMode:options.releaseMode,
    weekStart:options.weekStart,
    snapshotId:options.snapshotId,
    manifestPath:options.manifestPath,
    manifestSha256:options.manifestSha256,
    sourceFileName:path.basename(options.csvPath),
    sourceSha256:sha256(csvBytes),
    coverageFileName:path.basename(options.coveragePath),
    coverageSha256:sha256(coverageBytes),
    dataTreeSha256:treeDigest(options.dataDir),
  };
}

function validateReceiptBody(body) {
  if(!body||typeof body!=='object'||Array.isArray(body)||Object.keys(body).length!==RECEIPT_BODY_FIELDS.size||Object.keys(body).some((key)=>!RECEIPT_BODY_FIELDS.has(key))) throw new Error('release receipt fields are invalid');
  if(body.schemaVersion!==1||body.kind!=='mohemeokji-weekly-release'||body.status!=='awaiting-approval'||!['bootstrap','rollover','correction'].includes(body.releaseMode)) throw new Error('release receipt contract is invalid');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(body.weekStart||'')||!DIGEST.test(body.snapshotId||'')||!DIGEST.test(body.manifestSha256||'')||!DIGEST.test(body.sourceSha256||'')||!DIGEST.test(body.coverageSha256||'')||!DIGEST.test(body.dataTreeSha256||'')) throw new Error('release receipt identity is invalid');
  if(!/^[A-Za-z0-9._-]{1,200}\.csv$/.test(body.sourceFileName||'')) throw new Error('sourceFileName is invalid');
  if(!/^[A-Za-z0-9._-]{1,200}\.csv$/.test(body.coverageFileName||'')) throw new Error('coverageFileName is invalid');
  const expectedManifest=`snapshots/${body.weekStart}/${body.snapshotId}/manifest.json`;
  if(body.manifestPath!==expectedManifest) throw new Error('manifestPath does not match the release identity');
}

export function buildApprovalReceipt(options) {
  if(!['bootstrap','rollover','correction'].includes(options.releaseMode)) throw new Error('releaseMode is invalid');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(options.weekStart||'')||!DIGEST.test(options.snapshotId||'')||!DIGEST.test(options.manifestSha256||'')) throw new Error('release identity is invalid');
  const body=receiptBody(options);
  validateReceiptBody(body);
  return {...body,approvalDigest:sha256(canonicalJson(body))};
}

export function verifyApprovalReceipt({receipt,csvPath,coveragePath,dataDir,approvalDigest=null}) {
  if(!receipt||typeof receipt!=='object'||Array.isArray(receipt)) throw new Error('release receipt is invalid');
  const {approvalDigest:sealed,...body}=receipt;
  if(!DIGEST.test(sealed||'')||sha256(canonicalJson(body))!==sealed) throw new Error('approval digest does not match the release receipt');
  validateReceiptBody(body);
  if(approvalDigest!==null&&approvalDigest!==sealed) throw new Error('provided approval digest does not match the release receipt');
  if(path.basename(csvPath)!==receipt.sourceFileName||sha256(fs.readFileSync(csvPath))!==receipt.sourceSha256) throw new Error('source CSV digest does not match the release receipt');
  if(path.basename(coveragePath)!==receipt.coverageFileName||sha256(fs.readFileSync(coveragePath))!==receipt.coverageSha256) throw new Error('coverage CSV digest does not match the release receipt');
  if(treeDigest(dataDir)!==receipt.dataTreeSha256) throw new Error('data tree digest does not match the release receipt');
  return {valid:true,approvalDigest:sealed};
}

export function inspectCoverage(offerRows,coverageRows,weekStart) {
  const allowed=new Set(['수집완료','일부수집','미공개','접근실패','지점없음']);
  const errors=[];
  const expected=new Map();
  for(const row of offerRows) {
    const key=[row['우편번호'],row['체인'],row['지점']].join('|');
    expected.set(key,(expected.get(key)||0)+1);
  }
  const seen=new Set();
  for(const [index,row] of coverageRows.entries()) {
    const label=`coverage record ${index+2}`;
    const key=[row['실제우편번호'],row['체인'],row['지점']].join('|');
    if(row['대상주간']!==weekStart) errors.push(`${label} has the wrong target week`);
    if(!/^https:\/\//.test(row['확인한URL']||'')) errors.push(`${label} requires an HTTPS evidence URL`);
    if(!allowed.has(row['상태'])) errors.push(`${label} has an invalid status`);
    if(seen.has(key)) errors.push(`${label} duplicates a branch coverage row`);
    seen.add(key);
    const count=Number(row['수집상품수']);
    if(!Number.isSafeInteger(count)||count<0) errors.push(`${label} has an invalid product count`);
    else if(expected.has(key)&&count!==expected.get(key)) errors.push(`${label} product count does not match the reviewed CSV`);
    const totalPages=row['원문페이지수']===''?null:Number(row['원문페이지수']);
    const checkedPages=row['확인페이지수']===''?null:Number(row['확인페이지수']);
    if(totalPages!==null&&(!Number.isSafeInteger(totalPages)||totalPages<1)) errors.push(`${label} has an invalid source page count`);
    if(checkedPages!==null&&(!Number.isSafeInteger(checkedPages)||checkedPages<0||totalPages!==null&&checkedPages>totalPages)) errors.push(`${label} has an invalid checked page count`);
    if(row['상태']==='수집완료'&&totalPages!==null&&checkedPages!==totalPages) errors.push(`${label} cannot claim complete collection with unchecked pages`);
  }
  for(const key of expected.keys()) if(!seen.has(key)) errors.push(`coverage is missing reviewed CSV branch ${key}`);
  return {valid:errors.length===0,errors,branches:seen.size,statuses:Object.fromEntries([...coverageRows.reduce((all,row)=>all.set(row['상태'],(all.get(row['상태'])||0)+1),new Map())].sort())};
}

function compileOptions(options,outputDir,auditOutputPath) {
  return {
    outputDir,csvPath:options.csvPath,db:options.db||'01ontology',tenant:options.tenant||'recipe-full',
    registry:options.registry,registryPath:options.registryPath,
    weekStart:options.weekStart,collectionTimestamp:options.collectionTimestamp,
    policyVersion:options.policyVersion||'selection-v1',candidateReport:options.candidateReport,
    releaseMode:options.releaseMode,previousManifestPath:options.previousManifestPath,
    auditOutputPath,discoveryTarget:options.discoveryTarget??240,
  };
}

export async function prepareWeeklyRelease(options) {
  const stagingDir=path.resolve(options.stagingDir||'');
  if(!options.csvPath||!options.coveragePath||!options.weekStart||!options.releaseMode||!options.registryPath&&!options.registry) throw new Error('csvPath, coveragePath, weekStart, releaseMode, stagingDir, and registry are required');
  if(!options.stagingDir||fs.existsSync(stagingDir)) throw new Error('stagingDir must be a new directory');
  if(['rollover','correction'].includes(options.releaseMode)&&!options.previousManifestPath) throw new Error(`${options.releaseMode} requires previousManifestPath`);
  const csvBytes=fs.readFileSync(options.csvPath);
  const coverageBytes=fs.readFileSync(options.coveragePath);
  const rows=parseCsv(csvBytes.toString('utf8'));
  const preflight=inspectWeek(rows,options.weekStart);
  if(preflight.errors.length) throw new Error('weekly CSV preflight failed: '+preflight.errors.map((entry)=>entry.issue).join('; '));
  const coverageRows=parseCsvTable(coverageBytes.toString('utf8'),['대상주간','수집시각','요청우편번호','실제우편번호','체인','지점ID','지점','확인한URL','상태','수집상품수','누락이유','원문페이지수','확인페이지수']);
  const coverage=inspectCoverage(rows,coverageRows,options.weekStart);
  if(!coverage.valid) throw new Error('weekly coverage validation failed: '+coverage.errors.join('; '));

  fs.mkdirSync(path.join(stagingDir,'input'),{recursive:true});
  fs.mkdirSync(path.join(stagingDir,'private'),{recursive:true});
  const sourceCopy=path.join(stagingDir,'input',path.basename(options.csvPath));
  const coverageCopy=path.join(stagingDir,'input',path.basename(options.coveragePath));
  fs.writeFileSync(sourceCopy,csvBytes);
  fs.writeFileSync(coverageCopy,coverageBytes);
  const dataDir=path.join(stagingDir,'data');
  const twinDir=path.join(stagingDir,'private','twin-data');
  const releaseOptions={...options,collectionTimestamp:options.collectionTimestamp||rows.map((row)=>row['수집시각']).filter(Boolean).sort().at(-1)};
  const first=await compileMealWeek(compileOptions(releaseOptions,dataDir,path.join(stagingDir,'private','review-queue.json')));
  await compileMealWeek(compileOptions(releaseOptions,twinDir,path.join(stagingDir,'private','review-queue-twin.json')));
  const previousPath=first.previousSnapshot?.manifestPath||null;
  const verification=verifyMealSnapshot({
    snapshotDir:dataDir,twinSnapshotDir:twinDir,releaseMode:options.releaseMode,
    previousManifestPath:previousPath,
  });
  const current=JSON.parse(fs.readFileSync(path.join(dataDir,'current.json'),'utf8'));
  const receipt=buildApprovalReceipt({
    releaseMode:options.releaseMode,weekStart:first.weekStart,snapshotId:first.snapshotId,
    manifestPath:current.manifestPath,manifestSha256:current.manifestSha256,
    csvPath:sourceCopy,coveragePath:coverageCopy,dataDir,
  });
  fs.writeFileSync(path.join(stagingDir,'release-receipt.json'),jsonBytes(receipt));
  fs.writeFileSync(path.join(stagingDir,'preflight.json'),jsonBytes({...preflight,sourceSha256:sha256(csvBytes),coverage}));
  return {receipt,verification,stagingDir};
}

function replaceDirectory(source,target) {
  const parent=path.dirname(target);
  fs.mkdirSync(parent,{recursive:true});
  const next=path.join(parent,`.${path.basename(target)}.next-${process.pid}`);
  const previous=path.join(parent,`.${path.basename(target)}.previous-${process.pid}`);
  if(fs.existsSync(next)||fs.existsSync(previous)) throw new Error('publish staging path already exists');
  fs.cpSync(source,next,{recursive:true,errorOnExist:true});
  let movedPrevious=false;
  try {
    if(fs.existsSync(target)) { fs.renameSync(target,previous); movedPrevious=true; }
    fs.renameSync(next,target);
    if(movedPrevious) fs.rmSync(previous,{recursive:true,force:true});
  } catch(error) {
    if(fs.existsSync(next)) fs.rmSync(next,{recursive:true,force:true});
    if(movedPrevious&&!fs.existsSync(target)&&fs.existsSync(previous)) fs.renameSync(previous,target);
    throw error;
  }
}

function writeAtomic(target,bytes) {
  fs.mkdirSync(path.dirname(target),{recursive:true});
  const temporary=target+`.next-${process.pid}`;
  fs.writeFileSync(temporary,bytes);
  fs.renameSync(temporary,target);
}

export function publishWeeklyRelease(options) {
  const stagingDir=path.resolve(options.stagingDir||'');
  const receiptPath=path.join(stagingDir,'release-receipt.json');
  const receipt=JSON.parse(fs.readFileSync(receiptPath,'utf8'));
  const csvPath=path.join(stagingDir,'input',receipt.sourceFileName);
  const coveragePath=path.join(stagingDir,'input',receipt.coverageFileName);
  const dataDir=path.join(stagingDir,'data');
  verifyApprovalReceipt({receipt,csvPath,coveragePath,dataDir,approvalDigest:options.approvalDigest});
  const current=JSON.parse(fs.readFileSync(path.join(dataDir,'current.json'),'utf8'));
  if(current.snapshotId!==receipt.snapshotId||current.manifestPath!==receipt.manifestPath||current.manifestSha256!==receipt.manifestSha256) throw new Error('current pointer does not match the approved receipt');
  const manifest=JSON.parse(fs.readFileSync(path.join(dataDir,current.manifestPath),'utf8'));
  verifyMealSnapshot({snapshotDir:dataDir,releaseMode:receipt.releaseMode,previousManifestPath:manifest.previousSnapshot?.manifestPath||null});

  const repoRoot=path.resolve(options.repoRoot||path.join(path.dirname(fileURLToPath(import.meta.url)),'..'));
  const publicDataDir=path.resolve(options.publicDataDir||path.join(repoRoot,'public/mohemeokji/data'));
  const publicOffersDir=path.resolve(options.publicOffersDir||path.join(repoRoot,'public/offers'));
  const packagePricesPath=path.resolve(options.packagePricesPath||path.join(repoRoot,'public/mohemeokji/meal-package-prices.js'));
  const publicCsvPath=path.join(publicOffersDir,receipt.sourceFileName);
  const publicCoveragePath=path.join(publicOffersDir,receipt.coverageFileName);
  const rows=parseCsv(fs.readFileSync(csvPath,'utf8'));
  const priceBytes=Buffer.from(renderMealPackagePrices(rows,'/offers/'+receipt.sourceFileName));
  replaceDirectory(dataDir,publicDataDir);
  writeAtomic(publicCsvPath,fs.readFileSync(csvPath));
  writeAtomic(publicCoveragePath,fs.readFileSync(coveragePath));
  writeAtomic(packagePricesPath,priceBytes);
  if(options.syncPages!==false) {
    execFileSync(process.execPath,['scripts/sync-meal-pages.mjs'],{cwd:repoRoot,stdio:'inherit'});
    execFileSync(process.execPath,['scripts/sync-meal-pages.mjs','--check'],{cwd:repoRoot,stdio:'inherit'});
  }
  return {published:true,snapshotId:receipt.snapshotId,weekStart:receipt.weekStart,approvalDigest:receipt.approvalDigest};
}

function parseArgs(argv) {
  const command=argv.shift();
  if(command==='prepare') {
    const options={csvPath:argv.shift(),db:'01ontology',tenant:'recipe-full',registryPath:'data/mohemeokji/recipe-publication-registry.json',releaseMode:null,candidateReportPath:null};
    for(let index=0;index<argv.length;index++) {
      const value=argv[index];
      if(value==='--week-start') options.weekStart=argv[++index];
      else if(value==='--staging-dir') options.stagingDir=argv[++index];
      else if(value==='--coverage') options.coveragePath=argv[++index];
      else if(value==='--database') options.db=argv[++index];
      else if(value==='--tenant') options.tenant=argv[++index];
      else if(value==='--registry') options.registryPath=argv[++index];
      else if(value==='--candidate-report') options.candidateReportPath=argv[++index];
      else if(value==='--previous-manifest') options.previousManifestPath=argv[++index];
      else if(value==='--bootstrap') options.releaseMode='bootstrap';
      else if(value==='--rollover') options.releaseMode='rollover';
      else if(value==='--correction') options.releaseMode='correction';
      else throw new Error('Unknown argument: '+value);
    }
    if(options.candidateReportPath) options.candidateReport=JSON.parse(fs.readFileSync(path.resolve(options.candidateReportPath),'utf8'));
    return {command,options};
  }
  if(command==='publish') {
    const options={stagingDir:argv.shift()};
    for(let index=0;index<argv.length;index++) {
      if(argv[index]==='--approval') options.approvalDigest=argv[++index];
      else throw new Error('Unknown argument: '+argv[index]);
    }
    return {command,options};
  }
  throw new Error('Usage: mohemeokji-weekly-release.mjs prepare INPUT.csv --coverage COVERAGE.csv --week-start YYYY-MM-DD --staging-dir NEW_DIR [--candidate-report REPORT.json] (--bootstrap | --rollover --previous-manifest FILE | --correction --previous-manifest FILE) | publish STAGING_DIR --approval SHA256');
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const {command,options}=parseArgs(process.argv.slice(2));
    const result=command==='prepare'?await prepareWeeklyRelease(options):publishWeeklyRelease(options);
    console.log(JSON.stringify(result,null,2));
  } catch(error) {
    console.error(error.stack||error);
    process.exitCode=1;
  }
}
