#!/usr/bin/env node
/**
 * End-to-end weekly pipeline coordinator.
 *
 * Stages:
 *   official CSV + coverage -> temporary SQLite -> recipe snapshot prepare
 *   -> ontology approval draft -> publish -> seven-day cleanup.
 *
 * The SQLite database and ontology draft are private staging artifacts. They are
 * intentionally not copied into public/ and expire seven days after creation.
 */
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

import {parseCsv} from './generate-meal-offers.mjs';
import {prepareWeeklyRelease,publishWeeklyRelease,verifyApprovalReceipt} from './mohemeokji-weekly-release.mjs';

const TTL_DAYS=7;
const PIPELINE_SCHEMA=1;
const ISO_DATE=/^\d{4}-\d{2}-\d{2}$/;
const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
const jsonBytes=(value)=>Buffer.from(JSON.stringify(value,null,2)+'\n');
const nowIso=()=>new Date().toISOString();
const expiresAt=(createdAt)=>new Date(new Date(createdAt).getTime()+TTL_DAYS*86400000).toISOString();
const sql=(value)=>`'${String(value??'').replaceAll("'","''")}'`;

function assertDate(value,name) {
  if(!ISO_DATE.test(value||'')) throw new Error(`${name} must be YYYY-MM-DD`);
}
function assertFresh(manifest) {
  if(!manifest||manifest.schemaVersion!==PIPELINE_SCHEMA) throw new Error('pipeline manifest is invalid');
  if(new Date(manifest.expiresAt).getTime()<=Date.now()) throw new Error('pipeline staging has expired; cleanup and prepare again');
}
function sqliteAvailable() {
  try { execFileSync('sqlite3',['-version'],{stdio:'ignore'}); return true; }
  catch { return false; }
}
function createTempDatabase(dbPath,{runId,createdAt,expireAt,rows,candidateReport}) {
  if(!sqliteAvailable()) throw new Error('sqlite3 is required for temporary release storage');
  const statements=[
    'PRAGMA journal_mode=DELETE;',
    'PRAGMA foreign_keys=ON;',
    'CREATE TABLE pipeline_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);',
    'CREATE TABLE offers (row_id INTEGER PRIMARY KEY, postcode TEXT NOT NULL, chain TEXT NOT NULL, product TEXT NOT NULL, validity TEXT, payload_json TEXT NOT NULL);',
    'CREATE TABLE recipe_candidates (source_recipe_id TEXT PRIMARY KEY, payload_json TEXT NOT NULL);',
    'CREATE TABLE review_decisions (source_recipe_id TEXT PRIMARY KEY, decision TEXT NOT NULL, note TEXT, decided_at TEXT);',
    'CREATE TABLE ontology_drafts (draft_id TEXT PRIMARY KEY, status TEXT NOT NULL, expires_at TEXT NOT NULL, payload_json TEXT NOT NULL);',
    `INSERT INTO pipeline_meta(key,value) VALUES ('schemaVersion','${PIPELINE_SCHEMA}'),('runId',${sql(runId)}),('createdAt',${sql(createdAt)}),('expiresAt',${sql(expireAt)}),('status','staged');`,
  ];
  for(const [index,row] of rows.entries()) {
    statements.push(`INSERT INTO offers(row_id,postcode,chain,product,validity,payload_json) VALUES (${index+1},${sql(row['우편번호'])},${sql(row['체인'])},${sql(row['상품명'])},${sql(row['행사기간'])},${sql(JSON.stringify(row))});`);
  }
  for(const candidate of candidateReport?.candidates||[]) {
    const id=String(candidate.sourceRecipeId??candidate.recipeId??'');
    if(id) statements.push(`INSERT INTO recipe_candidates(source_recipe_id,payload_json) VALUES (${sql(id)},${sql(JSON.stringify(candidate))});`);
  }
  fs.mkdirSync(path.dirname(dbPath),{recursive:true});
  execFileSync('sqlite3',[dbPath],{input:statements.join('\n')+'\n',encoding:'utf8'});
}
function updateTempStatus(dbPath,status) {
  if(!fs.existsSync(dbPath)||!sqliteAvailable()) return;
  execFileSync('sqlite3',[dbPath],{input:`UPDATE pipeline_meta SET value=${sql(status)} WHERE key='status';\n`,encoding:'utf8'});
}
function readPipelineManifest(stagingDir) {
  return JSON.parse(fs.readFileSync(path.join(stagingDir,'pipeline-manifest.json'),'utf8'));
}
function writePipelineManifest(stagingDir,manifest) {
  fs.writeFileSync(path.join(stagingDir,'pipeline-manifest.json'),jsonBytes(manifest));
}
function writeOntologyDraft(stagingDir,{manifest,receipt}) {
  const draft={
    schemaVersion:1,
    kind:'mohemeokji-weekly-ontology-draft',
    status:'awaiting-review',
    runId:manifest.runId,
    weekStart:manifest.weekStart,
    snapshotId:receipt.snapshotId,
    approvalDigest:receipt.approvalDigest,
    sourceSha256:receipt.sourceSha256,
    coverageSha256:receipt.coverageSha256,
    expiresAt:manifest.expiresAt,
    actionType:'recipe.publish_weekly_meal_snapshot',
    websiteOrigin:'https://choi01.com/mohemeokji/',
    privateOnly:true,
  };
  fs.writeFileSync(path.join(stagingDir,'private','ontology-draft.json'),jsonBytes(draft));
  return draft;
}

export async function preparePipeline(options) {
  const stagingDir=path.resolve(options.stagingDir);
  if(!options.csvPath||!options.coveragePath||!options.weekStart||!options.stagingDir) throw new Error('csv, coverage, week-start, and staging-dir are required');
  assertDate(options.weekStart,'week-start');
  if(fs.existsSync(stagingDir)) throw new Error('staging-dir must be new');
  const createdAt=nowIso();
  const expireAt=expiresAt(createdAt);
  const csvBytes=fs.readFileSync(options.csvPath);
  const coverageBytes=fs.readFileSync(options.coveragePath);
  const rows=parseCsv(csvBytes.toString('utf8'));
  if(!rows.length) throw new Error('CSV contains no offer rows');
  const runId=sha256(Buffer.concat([csvBytes,coverageBytes,Buffer.from(options.weekStart+'|'+createdAt)]));
  fs.mkdirSync(path.join(stagingDir,'private'),{recursive:true});
  fs.mkdirSync(path.join(stagingDir,'input'),{recursive:true});
  fs.copyFileSync(options.csvPath,path.join(stagingDir,'input',path.basename(options.csvPath)));
  fs.copyFileSync(options.coveragePath,path.join(stagingDir,'input',path.basename(options.coveragePath)));
  const candidateReport=options.candidateReportPath?JSON.parse(fs.readFileSync(options.candidateReportPath,'utf8')):null;
  const dbPath=path.join(stagingDir,'private','release-staging.sqlite');
  createTempDatabase(dbPath,{runId,createdAt,expireAt,rows,candidateReport});
  const prepared=await prepareWeeklyRelease({
    csvPath:path.join(stagingDir,'input',path.basename(options.csvPath)),
    coveragePath:path.join(stagingDir,'input',path.basename(options.coveragePath)),
    weekStart:options.weekStart,
    stagingDir,
    db:options.database||'01ontology',
    tenant:options.tenant||'recipe-full',
    registryPath:options.registryPath||'data/mohemeokji/recipe-publication-registry.json',
    releaseMode:options.releaseMode,
    previousManifestPath:options.previousManifestPath,
    candidateReport,
  });
  const receipt=prepared.receipt;
  const manifest={
    schemaVersion:PIPELINE_SCHEMA,
    kind:'mohemeokji-weekly-pipeline',
    status:'awaiting-ontology-review',
    runId,createdAt,expiresAt:expireAt,ttlDays:TTL_DAYS,
    weekStart:options.weekStart,
    sourceFile:path.basename(options.csvPath),
    coverageFile:path.basename(options.coveragePath),
    sourceSha256:receipt.sourceSha256,
    coverageSha256:receipt.coverageSha256,
    snapshotId:receipt.snapshotId,
    approvalDigest:receipt.approvalDigest,
    temporaryDatabase:'private/release-staging.sqlite',
    ontologyDraft:'private/ontology-draft.json',
    cleanupPolicy:'delete after expiresAt; never publish private staging files',
  };
  writePipelineManifest(stagingDir,manifest);
  const ontologyDraft=writeOntologyDraft(stagingDir,{manifest,receipt});
  return {manifest,ontologyDraft,receipt,verification:prepared.verification};
}

export function verifyPipeline(stagingDir) {
  const root=path.resolve(stagingDir);
  const manifest=readPipelineManifest(root);
  assertFresh(manifest);
  const receipt=JSON.parse(fs.readFileSync(path.join(root,'release-receipt.json'),'utf8'));
  const csvPath=path.join(root,'input',receipt.sourceFileName);
  const coveragePath=path.join(root,'input',receipt.coverageFileName);
  const dataDir=path.join(root,'data');
  const verified=verifyApprovalReceipt({receipt,csvPath,coveragePath,dataDir,approvalDigest:manifest.approvalDigest});
  return {valid:true,status:manifest.status,runId:manifest.runId,expiresAt:manifest.expiresAt,snapshotId:manifest.snapshotId,approvalDigest:verified.approvalDigest};
}

export function publishPipeline(stagingDir,approvalDigest) {
  const root=path.resolve(stagingDir);
  const manifest=readPipelineManifest(root);
  assertFresh(manifest);
  if(manifest.status!=='approved'&&manifest.status!=='awaiting-ontology-review') throw new Error(`pipeline status ${manifest.status} cannot publish`);
  const result=publishWeeklyRelease({stagingDir:root,approvalDigest:approvalDigest||manifest.approvalDigest});
  manifest.status='published';
  manifest.publishedAt=nowIso();
  writePipelineManifest(root,manifest);
  updateTempStatus(path.join(root,manifest.temporaryDatabase),'published');
  return {...result,runId:manifest.runId,expiresAt:manifest.expiresAt};
}

export function cleanupExpired(rootDir) {
  const root=path.resolve(rootDir);
  if(!fs.existsSync(root)) return {removed:[],kept:[]};
  const removed=[],kept=[];
  for(const entry of fs.readdirSync(root,{withFileTypes:true})) {
    if(!entry.isDirectory()) continue;
    const dir=path.join(root,entry.name);
    const marker=path.join(dir,'pipeline-manifest.json');
    if(!fs.existsSync(marker)) continue;
    try {
      const manifest=JSON.parse(fs.readFileSync(marker,'utf8'));
      if(new Date(manifest.expiresAt).getTime()<=Date.now()) { fs.rmSync(dir,{recursive:true,force:true}); removed.push(entry.name); }
      else kept.push({name:entry.name,expiresAt:manifest.expiresAt,status:manifest.status});
    } catch { kept.push({name:entry.name,status:'invalid-manifest'}); }
  }
  return {removed,kept};
}

function args(argv) {
  const command=argv.shift();
  const out={command};
  if(command==='prepare') {
    out.csvPath=argv.shift();
    for(let i=0;i<argv.length;i++) {
      const value=argv[i];
      if(value==='--coverage') out.coveragePath=argv[++i];
      else if(value==='--week-start') out.weekStart=argv[++i];
      else if(value==='--staging-dir') out.stagingDir=argv[++i];
      else if(value==='--database') out.database=argv[++i];
      else if(value==='--tenant') out.tenant=argv[++i];
      else if(value==='--registry') out.registryPath=argv[++i];
      else if(value==='--candidate-report') out.candidateReportPath=argv[++i];
      else if(value==='--previous-manifest') out.previousManifestPath=argv[++i];
      else if(value==='--rollover') out.releaseMode='rollover';
      else if(value==='--correction') out.releaseMode='correction';
      else if(value==='--bootstrap') out.releaseMode='bootstrap';
      else throw new Error('unknown argument: '+value);
    }
  } else if(command==='publish') { out.stagingDir=argv.shift(); out.approvalDigest=argv[0]==='--approval'?argv[1]:null; }
  else if(command==='verify') out.stagingDir=argv.shift();
  else if(command==='cleanup') out.rootDir=argv.shift();
  else throw new Error('usage: prepare|verify|publish|cleanup');
  return out;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const options=args(process.argv.slice(2));
    let result;
    if(options.command==='prepare') result=await preparePipeline(options);
    else if(options.command==='verify') result=verifyPipeline(options.stagingDir);
    else if(options.command==='publish') result=publishPipeline(options.stagingDir,options.approvalDigest);
    else result=cleanupExpired(options.rootDir);
    console.log(JSON.stringify(result,null,2));
  } catch(error) { console.error(error.stack||error); process.exitCode=1; }
}
