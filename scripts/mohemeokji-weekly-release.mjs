#!/usr/bin/env node
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';

import {compileMealWeek} from './compile-meal-week.mjs';
import {parseCsv,renderMealPackagePrices} from './generate-meal-offers.mjs';
import {canonicalJson} from './lib/meal-snapshot-schema.mjs';
import {inspectWeek} from './prepare-meal-week.mjs';
import {verifyMealSnapshot} from './verify-meal-snapshot.mjs';

const DIGEST=/^[a-f0-9]{64}$/;
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
    dataTreeSha256:treeDigest(options.dataDir),
  };
}

export function buildApprovalReceipt(options) {
  if(!['bootstrap','rollover','correction'].includes(options.releaseMode)) throw new Error('releaseMode is invalid');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(options.weekStart||'')||!DIGEST.test(options.snapshotId||'')||!DIGEST.test(options.manifestSha256||'')) throw new Error('release identity is invalid');
  const body=receiptBody(options);
  return {...body,approvalDigest:sha256(canonicalJson(body))};
}

export function verifyApprovalReceipt({receipt,csvPath,dataDir,approvalDigest=null}) {
  if(!receipt||typeof receipt!=='object'||Array.isArray(receipt)) throw new Error('release receipt is invalid');
  const {approvalDigest:sealed,...body}=receipt;
  if(!DIGEST.test(sealed||'')||sha256(canonicalJson(body))!==sealed) throw new Error('approval digest does not match the release receipt');
  if(approvalDigest!==null&&approvalDigest!==sealed) throw new Error('provided approval digest does not match the release receipt');
  if(receipt.schemaVersion!==1||receipt.kind!=='mohemeokji-weekly-release'||receipt.status!=='awaiting-approval') throw new Error('release receipt contract is invalid');
  if(path.basename(csvPath)!==receipt.sourceFileName||sha256(fs.readFileSync(csvPath))!==receipt.sourceSha256) throw new Error('source CSV digest does not match the release receipt');
  if(treeDigest(dataDir)!==receipt.dataTreeSha256) throw new Error('data tree digest does not match the release receipt');
  return {valid:true,approvalDigest:sealed};
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
  if(!options.csvPath||!options.weekStart||!options.releaseMode||!options.registryPath&&!options.registry) throw new Error('csvPath, weekStart, releaseMode, stagingDir, and registry are required');
  if(!options.stagingDir||fs.existsSync(stagingDir)) throw new Error('stagingDir must be a new directory');
  if(['rollover','correction'].includes(options.releaseMode)&&!options.previousManifestPath) throw new Error(`${options.releaseMode} requires previousManifestPath`);
  const csvBytes=fs.readFileSync(options.csvPath);
  const rows=parseCsv(csvBytes.toString('utf8'));
  const preflight=inspectWeek(rows,options.weekStart);
  if(preflight.errors.length) throw new Error('weekly CSV preflight failed: '+preflight.errors.map((entry)=>entry.issue).join('; '));

  fs.mkdirSync(path.join(stagingDir,'input'),{recursive:true});
  fs.mkdirSync(path.join(stagingDir,'private'),{recursive:true});
  const sourceCopy=path.join(stagingDir,'input',path.basename(options.csvPath));
  fs.writeFileSync(sourceCopy,csvBytes);
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
    csvPath:sourceCopy,dataDir,
  });
  fs.writeFileSync(path.join(stagingDir,'release-receipt.json'),jsonBytes(receipt));
  fs.writeFileSync(path.join(stagingDir,'preflight.json'),jsonBytes({...preflight,sourceSha256:sha256(csvBytes)}));
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
  const dataDir=path.join(stagingDir,'data');
  verifyApprovalReceipt({receipt,csvPath,dataDir,approvalDigest:options.approvalDigest});
  const current=JSON.parse(fs.readFileSync(path.join(dataDir,'current.json'),'utf8'));
  if(current.snapshotId!==receipt.snapshotId||current.manifestPath!==receipt.manifestPath||current.manifestSha256!==receipt.manifestSha256) throw new Error('current pointer does not match the approved receipt');
  const manifest=JSON.parse(fs.readFileSync(path.join(dataDir,current.manifestPath),'utf8'));
  verifyMealSnapshot({snapshotDir:dataDir,releaseMode:receipt.releaseMode,previousManifestPath:manifest.previousSnapshot?.manifestPath||null});

  const repoRoot=path.resolve(options.repoRoot||path.join(path.dirname(fileURLToPath(import.meta.url)),'..'));
  const publicDataDir=path.resolve(options.publicDataDir||path.join(repoRoot,'public/mohemeokji/data'));
  const publicOffersDir=path.resolve(options.publicOffersDir||path.join(repoRoot,'public/offers'));
  const packagePricesPath=path.resolve(options.packagePricesPath||path.join(repoRoot,'public/mohemeokji/meal-package-prices.js'));
  const publicCsvPath=path.join(publicOffersDir,receipt.sourceFileName);
  const rows=parseCsv(fs.readFileSync(csvPath,'utf8'));
  const priceBytes=Buffer.from(renderMealPackagePrices(rows,'/offers/'+receipt.sourceFileName));
  replaceDirectory(dataDir,publicDataDir);
  writeAtomic(publicCsvPath,fs.readFileSync(csvPath));
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
    const options={csvPath:argv.shift(),db:'01ontology',tenant:'recipe-full',registryPath:'data/mohemeokji/recipe-publication-registry.json',releaseMode:null};
    for(let index=0;index<argv.length;index++) {
      const value=argv[index];
      if(value==='--week-start') options.weekStart=argv[++index];
      else if(value==='--staging-dir') options.stagingDir=argv[++index];
      else if(value==='--database') options.db=argv[++index];
      else if(value==='--tenant') options.tenant=argv[++index];
      else if(value==='--registry') options.registryPath=argv[++index];
      else if(value==='--previous-manifest') options.previousManifestPath=argv[++index];
      else if(value==='--bootstrap') options.releaseMode='bootstrap';
      else if(value==='--rollover') options.releaseMode='rollover';
      else if(value==='--correction') options.releaseMode='correction';
      else throw new Error('Unknown argument: '+value);
    }
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
  throw new Error('Usage: mohemeokji-weekly-release.mjs prepare INPUT.csv --week-start YYYY-MM-DD --staging-dir NEW_DIR (--bootstrap | --rollover --previous-manifest FILE | --correction --previous-manifest FILE) | publish STAGING_DIR --approval SHA256');
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
