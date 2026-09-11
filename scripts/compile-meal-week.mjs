#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';

import {parseCsv,generateCatalog} from './generate-meal-offers.mjs';
import {buildStoreCandidateReport,discoverStoreRecipeCandidates} from './find-store-recipe-candidates.mjs';
import {canonicalJson} from './lib/meal-snapshot-schema.mjs';
import {selectStoreRecipes} from './lib/select-store-recipes.mjs';
import {validateMealSnapshotDirectory} from './lib/validate-meal-snapshot.mjs';

const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
const jsonBytes=(value)=>Buffer.from(canonicalJson(value)+'\n');
const slug=(value)=>String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'store';

function readRegistry(registry,registryPath) {
  if(registry) return registry;
  if(!registryPath) throw new Error('registry or registryPath is required');
  return JSON.parse(fs.readFileSync(registryPath,'utf8'));
}

function locationId(location) {
  return `${location.postcode}-${slug(location.store)}-${String(location.branchId).replace(/^branch-/,'')}`;
}

function publicOffer(offer) {
  return {
    offerId:offer.offerId,postcode:offer.postcode,chain:offer.chain,branchId:offer.branchId,
    evidenceUrl:offer.evidenceUrl??null,validFrom:offer.validFrom,validThrough:offer.validThrough,
    productDe:offer.productDe,pack:offer.pack,priceCents:offer.priceCents,
    normalPriceCents:offer.normalPriceCents??null,conditions:offer.conditions??'',
    autoPriceEligible:offer.autoPriceEligible===true,identity:offer.identity,
  };
}

function detailRecipe(recipe) {
  return {
    schemaVersion:1,sourceRecipeId:recipe.sourceRecipeId,sourceContentHash:recipe.sourceContentHash,
    sourceTitle:recipe.sourceTitle,sourceUrl:recipe.sourceUrl,sourceAuthor:recipe.sourceAuthor,
    sourceServingText:recipe.sourceServingText,rating:recipe.rating,ratingNumber:recipe.ratingNumber,
    reviewCount:recipe.reviewCount,title:recipe.title,detailIngredients:recipe.detailIngredients,
    steps:recipe.steps,recommendationProfile:recipe.recommendationProfile,transformVersion:recipe.transformVersion,
  };
}

function discoveryProvenance(candidateReport) {
  const candidates=[...(candidateReport.candidates||[])].sort((left,right)=>String(left.sourceRecipeId??left.recipeId).localeCompare(String(right.sourceRecipeId??right.recipeId)));
  const locations=[...(candidateReport.locations||[])].map((location)=>({
    postcode:location.postcode,store:location.store,branchId:location.branchId,
    offers:[...(location.offers||[])].map((offer)=>({offerId:offer.offerId,recipeCandidateIds:[...(offer.recipeCandidateIds||[])].map(String).sort()})).sort((a,b)=>a.offerId.localeCompare(b.offerId)),
  })).sort((a,b)=>[a.postcode,a.store,a.branchId].join('|').localeCompare([b.postcode,b.store,b.branchId].join('|')));
  return {candidates,locations,identityStats:candidateReport.identityStats||{},overflow:candidateReport.overflow||{},zeroCandidateIdentities:[...(candidateReport.zeroCandidateIdentities||[])].sort(),zeroCandidateOfferIds:[...(candidateReport.zeroCandidateOfferIds||[])].sort()};
}

function sourceMetadata({candidateReport,csvPath,db,tenant}) {
  const inputLogicalName=path.basename(csvPath||candidateReport.input||'');
  const csvSha256=csvPath?sha256(fs.readFileSync(csvPath)):candidateReport.csvSha256;
  const database=typeof candidateReport.database==='string'&&candidateReport.database?candidateReport.database:(typeof db==='string'?db:null);
  if(!inputLogicalName||!digest(csvSha256)||!database||!tenant) throw new Error('Complete source lineage is required: input logical name, CSV SHA-256, database, and tenant');
  return {inputLogicalName,csvSha256,database,tenant,discoverySha256:sha256(canonicalJson(discoveryProvenance(candidateReport))),discoveryAlgorithm:'canonical-candidate-report-v1'};
}

function digest(value) { return typeof value==='string'&&/^[a-f0-9]{64}$/.test(value); }

function retainedSnapshot(previousManifestPath,nextWeekStart,mode) {
  if(!previousManifestPath) throw new Error(`${mode} requires --previous-manifest`);
  const manifestFile=path.resolve(previousManifestPath);
  let manifest;
  try { manifest=JSON.parse(fs.readFileSync(manifestFile,'utf8')); }
  catch { throw new Error('Previous snapshot manifest is missing or invalid'); }
  if(!digest(manifest.snapshotId)||!/^\d{4}-\d{2}-\d{2}$/.test(manifest.weekStart||'')) throw new Error('Previous snapshot identity is invalid');
  if(mode==='rollover'&&manifest.weekStart>=nextWeekStart) throw new Error('Previous snapshot must be from an earlier week');
  if(mode==='correction'&&manifest.weekStart!==nextWeekStart) throw new Error('Correction previous snapshot must be from the same week');
  const relative=path.join('snapshots',manifest.weekStart,manifest.snapshotId,'manifest.json');
  if(!manifestFile.endsWith(path.sep+relative)) throw new Error('Previous snapshot manifest path does not match its identity');
  const root=manifestFile.slice(0,-relative.length-1);
  const validation=validateMealSnapshotDirectory(root);
  if(!validation.valid) throw new Error('Previous snapshot is invalid: '+validation.errors.join('; '));
  const current=JSON.parse(fs.readFileSync(path.join(root,'current.json'),'utf8'));
  if(current.manifestPath!==relative.split(path.sep).join('/')||current.snapshotId!==manifest.snapshotId||current.manifestSha256!==sha256(fs.readFileSync(manifestFile))) throw new Error('Previous snapshot must be the validated current pointer');
  const files=new Map();
  const seen=new Set();
  const collect=(manifestPath,expectedHash,expectedId)=>{
    if(seen.has(manifestPath)) throw new Error('Previous snapshot chain contains a cycle');
    seen.add(manifestPath);
    const target=path.join(root,manifestPath);
    const bytes=fs.readFileSync(target);
    if(sha256(bytes)!==expectedHash) throw new Error('Previous snapshot manifest hash mismatch');
    const entry=JSON.parse(bytes.toString('utf8'));
    if(entry.snapshotId!==expectedId) throw new Error('Previous snapshot identity mismatch');
    files.set(manifestPath,bytes);
    for(const [artifact,hash] of Object.entries(entry.fileHashes||{})) {
      const artifactBytes=fs.readFileSync(path.join(root,artifact));
      if(sha256(artifactBytes)!==hash) throw new Error('Previous snapshot artifact hash mismatch: '+artifact);
      files.set(artifact,artifactBytes);
    }
    if(entry.previousSnapshot) collect(entry.previousSnapshot.manifestPath,entry.previousSnapshot.manifestSha256,entry.previousSnapshot.snapshotId);
  };
  const manifestPath=relative.split(path.sep).join('/');
  const manifestSha256=sha256(fs.readFileSync(manifestFile));
  collect(manifestPath,manifestSha256,manifest.snapshotId);
  return {pointer:{snapshotId:manifest.snapshotId,manifestPath,manifestSha256,mode},files};
}

function buildFiles({candidateReport,registry,weekStart,collectionTimestamp,policyVersion,source,previousSnapshot,retainedFiles}) {
  const locations=[];
  const coverageLocations=[];
  const details=new Map();
  const reviewQueue=new Map();
  for(const location of [...candidateReport.locations].sort((a,b)=>
    [a.postcode,a.store,a.branchId].join('|').localeCompare([b.postcode,b.store,b.branchId].join('|'))
  )) {
    const store={postcode:location.postcode,chain:location.store,branchId:location.branchId};
    const candidateIds=new Set(location.offers.flatMap((offer)=>offer.recipeCandidateIds||[]).map(String));
    const candidates=(candidateReport.candidates||[]).filter((candidate)=>candidateIds.has(String(candidate.sourceRecipeId??candidate.recipeId)));
    const selection=selectStoreRecipes({store,offers:location.offers,candidates,registry});
    const id=locationId(location);
    const refs=selection.recipes.map((recipe)=>{
      details.set(recipe.sourceRecipeId,detailRecipe(recipe));
      return {
        sourceRecipeId:recipe.sourceRecipeId,offerIds:recipe.offerIds,offerIdentityKeys:recipe.offerIdentityKeys,
        primaryIngredientIds:recipe.primaryIngredientIds,recommendationProfile:recipe.recommendationProfile,
        qualityScore:recipe.qualityScore,qualityFacts:recipe.qualityFacts,
      };
    });
    const zeroCandidateOfferIds=location.offers.filter((offer)=>(offer.recipeCandidateIds||[]).length===0).map((offer)=>offer.offerId).sort();
    const heldReasonCounts=Object.fromEntries(Object.entries(selection.coverage.heldForReview.reduce((counts,entry)=>{
      counts[entry.reason]=(counts[entry.reason]||0)+1;
      return counts;
    },{})).sort());
    const coverage={
      target:selection.coverage.target,published:selection.coverage.published,eligible:selection.coverage.eligible,
      heldForReviewCount:selection.coverage.heldForReview.length,heldReasonCounts,
      uncoveredOfferIds:selection.coverage.uncoveredOfferIds,sparse:selection.coverage.sparse,
      relaxations:selection.coverage.relaxations,zeroCandidateOfferIds,
    };
    selection.coverage.heldForReview.forEach((entry)=>{
      const key=entry.recipeId+'|'+entry.reason;
      if(!reviewQueue.has(key)) reviewQueue.set(key,{...entry,locationIds:[]});
      reviewQueue.get(key).locationIds.push(id);
    });
    locations.push({id,postcode:location.postcode,store:location.store,branch:location.branch,branchId:location.branchId,offers:location.offers.map(publicOffer).sort((a,b)=>a.offerId.localeCompare(b.offerId)),recipes:refs,coverage,warnings:selection.warnings});
    coverageLocations.push({locationId:id,postcode:location.postcode,store:location.store,branchId:location.branchId,...coverage,warnings:selection.warnings});
  }
  const reviewQueueEntries=[...reviewQueue.values()].map((entry)=>({...entry,locationIds:[...new Set(entry.locationIds)].sort()}))
    .sort((a,b)=>[a.recipeId,a.reason].join('|').localeCompare([b.recipeId,b.reason].join('|')));
  const publicDetailHashes=Object.fromEntries([...details].sort(([a],[b])=>a.localeCompare(b)).map(([sourceRecipeId,detail])=>[sourceRecipeId,sha256(jsonBytes(detail))]));
  const seed={schemaVersion:1,weekStart,collectionTimestamp,policyVersion,tenant:candidateReport.tenant,source,locations,coverageLocations,publicDetailHashes,...(previousSnapshot?{previousSnapshot}:{})};
  const snapshotId=sha256(canonicalJson(seed));
  const snapshotRoot=`snapshots/${weekStart}/${snapshotId}`;
  const files=new Map();
  const recipeIndex=[];
  for(const [sourceRecipeId,detail] of [...details].sort(([a],[b])=>a.localeCompare(b))) {
    const bytes=jsonBytes(detail);
    const contentHash=sha256(bytes);
    const relative=`${snapshotRoot}/recipes/${sourceRecipeId}.${contentHash}.json`;
    files.set(relative,bytes);
    recipeIndex.push({sourceRecipeId,path:relative,sha256:contentHash,sourceContentHash:detail.sourceContentHash});
  }
  for(const location of locations) {
    location.recipes=location.recipes.map((recipe)=>{
      const detail=recipeIndex.find((entry)=>entry.sourceRecipeId===recipe.sourceRecipeId);
      return {...recipe,detailPath:detail.path,detailSha256:detail.sha256};
    });
    files.set(`${snapshotRoot}/locations/${location.id}.json`,jsonBytes({schemaVersion:1,snapshotId,weekStart,...location}));
  }
  const coveragePath=`${snapshotRoot}/coverage.json`;
  const recipeIndexPath=`${snapshotRoot}/recipes/index.json`;
  files.set(coveragePath,jsonBytes({schemaVersion:1,snapshotId,locations:coverageLocations,identityStats:candidateReport.identityStats||{},overflow:candidateReport.overflow||{},zeroCandidateIdentities:candidateReport.zeroCandidateIdentities||[],zeroCandidateOfferIds:(candidateReport.zeroCandidateOfferIds||[]).slice().sort()}));
  files.set(recipeIndexPath,jsonBytes({schemaVersion:1,snapshotId,recipes:recipeIndex}));
  const manifestLocations=locations.map((location)=>({id:location.id,postcode:location.postcode,store:location.store,branch:location.branch,branchId:location.branchId,path:`${snapshotRoot}/locations/${location.id}.json`,recipeCount:location.recipes.length}));
  const fileHashes=Object.fromEntries([...files].sort(([a],[b])=>a.localeCompare(b)).map(([relative,bytes])=>[relative,sha256(bytes)]));
  const manifest={schemaVersion:1,snapshotId,weekStart,collectionTimestamp,policyVersion,tenant:candidateReport.tenant,source,locations:manifestLocations,coveragePath,recipeIndexPath,fileHashes,...(previousSnapshot?{previousSnapshot}:{})};
  const manifestPath=`${snapshotRoot}/manifest.json`;
  const manifestBytes=jsonBytes(manifest);
  const current={schemaVersion:1,snapshotId,weekStart,collectionTimestamp,manifestPath,manifestSha256:sha256(manifestBytes)};
  return {snapshotId,manifest,current,manifestPath,manifestBytes,files,retainedFiles:retainedFiles||new Map(),reviewQueueBytes:jsonBytes({schemaVersion:1,snapshotId,recipes:reviewQueueEntries})};
}

function compareBuilds(left,right) {
  if(left.manifestPath!==right.manifestPath||!left.manifestBytes.equals(right.manifestBytes)||jsonBytes(left.current).compare(jsonBytes(right.current))!==0) throw new Error('Deterministic twin build mismatch');
  if(!left.reviewQueueBytes.equals(right.reviewQueueBytes)) throw new Error('Deterministic private review queue mismatch');
  const leftRetained=[...left.retainedFiles].sort(([a],[b])=>a.localeCompare(b));
  const rightRetained=[...right.retainedFiles].sort(([a],[b])=>a.localeCompare(b));
  if(leftRetained.length!==rightRetained.length||leftRetained.some(([name,bytes],index)=>name!==rightRetained[index][0]||!bytes.equals(rightRetained[index][1]))) throw new Error('Deterministic retained snapshot mismatch');
  const leftFiles=[...left.files].sort(([a],[b])=>a.localeCompare(b));
  const rightFiles=[...right.files].sort(([a],[b])=>a.localeCompare(b));
  if(leftFiles.length!==rightFiles.length) throw new Error('Deterministic twin build file count mismatch');
  for(let index=0;index<leftFiles.length;index++) if(leftFiles[index][0]!==rightFiles[index][0]||!leftFiles[index][1].equals(rightFiles[index][1])) throw new Error('Deterministic twin build mismatch: '+leftFiles[index][0]);
}

function writeBuild(outputDir,build) {
  if(fs.existsSync(outputDir)&&fs.readdirSync(outputDir).length) throw new Error('Output directory must be empty: '+outputDir);
  for(const [relative,bytes] of build.retainedFiles) {
    const target=path.join(outputDir,relative);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);
  }
  for(const [relative,bytes] of build.files) {
    const target=path.join(outputDir,relative);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);
  }
  const manifestTarget=path.join(outputDir,build.manifestPath);fs.mkdirSync(path.dirname(manifestTarget),{recursive:true});fs.writeFileSync(manifestTarget,build.manifestBytes);
  fs.writeFileSync(path.join(outputDir,'current.json'),jsonBytes(build.current));
}

function directoryFiles(root,current='',result=[]) {
  for(const entry of fs.readdirSync(path.join(root,current),{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))) {
    const relative=path.join(current,entry.name);
    if(entry.isDirectory()) directoryFiles(root,relative,result);
    else if(entry.isFile()) result.push(relative);
  }
  return result;
}

function compareDirectories(left,right) {
  const leftFiles=directoryFiles(left),rightFiles=directoryFiles(right);
  if(canonicalJson(leftFiles)!==canonicalJson(rightFiles)) throw new Error('Deterministic staging file list mismatch');
  for(const relative of leftFiles) if(!fs.readFileSync(path.join(left,relative)).equals(fs.readFileSync(path.join(right,relative)))) throw new Error('Deterministic staging byte mismatch: '+relative);
}

export async function compileMealWeek(options) {
  const {outputDir,db='01ontology',tenant='recipe-full',policyVersion='selection-v1'}=options;
  if(!outputDir) throw new Error('outputDir is required');
  const registry=readRegistry(options.registry,options.registryPath);
  let candidateReport=options.candidateReport;
  let collectionTimestamp=options.collectionTimestamp;
  let weekStart=options.weekStart;
  if(!candidateReport) {
    if(!options.csvPath) throw new Error('csvPath or candidateReport is required');
    const rows=parseCsv(fs.readFileSync(options.csvPath,'utf8'));
    const generated=generateCatalog(rows,'/offers/'+path.basename(options.csvPath));
    const discovery=await discoverStoreRecipeCandidates({offers:generated.offersByIdentity,db,tenant,perIdentityLimit:500,totalLimit:5000});
    candidateReport=buildStoreCandidateReport({packageCatalog:generated.packageCatalog,offersByIdentity:generated.offersByIdentity,meta:generated.meta,candidates:discovery.candidates,input:options.csvPath,database:typeof db==='string'?db:'injected',tenant,discovery});
    collectionTimestamp=collectionTimestamp||generated.meta.collectedAt;
    weekStart=weekStart||generated.offersByIdentity.map((offer)=>offer.validFrom).sort()[0];
  }
  if(!/^\d{4}-\d{2}-\d{2}$/.test(weekStart||'')) throw new Error('weekStart must be YYYY-MM-DD');
  if(!collectionTimestamp) throw new Error('collectionTimestamp is required for deterministic output');
  const publicOutputDir=path.resolve(outputDir);
  const auditTarget=options.auditOutputPath?path.resolve(options.auditOutputPath):null;
  if(auditTarget&&(auditTarget===publicOutputDir||auditTarget.startsWith(publicOutputDir+path.sep))) throw new Error('Private audit output must be outside the public snapshot directory');
  if(auditTarget&&fs.existsSync(auditTarget)) throw new Error('Private audit output must not already exist: '+auditTarget);
  const source=sourceMetadata({candidateReport,csvPath:options.csvPath,db,tenant});
  const releaseMode=options.releaseMode||'bootstrap';
  if(!['bootstrap','rollover','correction'].includes(releaseMode)) throw new Error('releaseMode must be bootstrap, rollover, or correction');
  if(releaseMode==='bootstrap'&&options.previousManifestPath) throw new Error('Bootstrap must not include a previous manifest');
  const previous=releaseMode!=='bootstrap'?retainedSnapshot(options.previousManifestPath,weekStart,releaseMode):null;
  const input={candidateReport:structuredClone(candidateReport),registry:structuredClone(registry),weekStart,collectionTimestamp,policyVersion,source,previousSnapshot:previous?.pointer||null,retainedFiles:previous?.files||new Map()};
  const first=buildFiles(input);
  const second=buildFiles(structuredClone(input));
  compareBuilds(first,second);
  const stageA=fs.mkdtempSync(path.join(os.tmpdir(),'meal-compile-a-'));
  const stageB=fs.mkdtempSync(path.join(os.tmpdir(),'meal-compile-b-'));
  try {
    writeBuild(stageA,first);
    writeBuild(stageB,second);
    compareDirectories(stageA,stageB);
    for(const stage of [stageA,stageB]) {
      const validation=validateMealSnapshotDirectory(stage);
      if(!validation.valid) throw new Error('Compiled snapshot validation failed: '+validation.errors.join('; '));
    }
    writeBuild(publicOutputDir,first);
    if(auditTarget) {
      fs.mkdirSync(path.dirname(auditTarget),{recursive:true});
      fs.writeFileSync(auditTarget,first.reviewQueueBytes);
    }
  } finally {
    fs.rmSync(stageA,{recursive:true,force:true});
    fs.rmSync(stageB,{recursive:true,force:true});
  }
  return first.manifest;
}

function parseArgs(argv) {
  const args={csvPath:null,outputDir:null,db:'01ontology',tenant:'recipe-full',policyVersion:'selection-v1',registryPath:null,weekStart:null,auditOutputPath:null,releaseMode:null,previousManifestPath:null};
  for(let index=0;index<argv.length;index++) {
    const value=argv[index];
    if(!args.csvPath&&!value.startsWith('--')) args.csvPath=value;
    else if(value==='--output-dir') args.outputDir=argv[++index];
    else if(value==='--database') args.db=argv[++index];
    else if(value==='--tenant') args.tenant=argv[++index];
    else if(value==='--registry') args.registryPath=argv[++index];
    else if(value==='--policy-version') args.policyVersion=argv[++index];
    else if(value==='--week-start') args.weekStart=argv[++index];
    else if(value==='--audit-output') args.auditOutputPath=argv[++index];
    else if(value==='--bootstrap') args.releaseMode='bootstrap';
    else if(value==='--rollover') args.releaseMode='rollover';
    else if(value==='--correction') args.releaseMode='correction';
    else if(value==='--previous-manifest') args.previousManifestPath=argv[++index];
    else throw new Error('Unknown argument: '+value);
  }
  if(!args.csvPath||!args.outputDir||!args.registryPath||!args.releaseMode) throw new Error('Usage: node scripts/compile-meal-week.mjs INPUT.csv --output-dir DIR --database DB --tenant TENANT --registry REGISTRY.json (--bootstrap | --rollover --previous-manifest MANIFEST.json | --correction --previous-manifest MANIFEST.json) [--audit-output PRIVATE.json]');
  if(['rollover','correction'].includes(args.releaseMode)&&!args.previousManifestPath) throw new Error(`--${args.releaseMode} requires --previous-manifest`);
  return args;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  compileMealWeek(parseArgs(process.argv.slice(2))).then((manifest)=>console.log(JSON.stringify({snapshotId:manifest.snapshotId,locations:manifest.locations.length,recipes:manifest.locations.reduce((sum,location)=>sum+location.recipeCount,0)}))).catch((error)=>{console.error(error.stack||error);process.exitCode=1;});
}
