#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

import {validateMealSnapshotDirectory} from './lib/validate-meal-snapshot.mjs';

const DIGEST=/^[a-f0-9]{64}$/;
export const DEFAULT_ASSET_BUDGETS=Object.freeze({
  currentBytes:16*1024,
  manifestBytes:2*1024*1024,
  locationBytes:1024*1024,
  detailBytes:256*1024,
  selectedInitialBytes:3*1024*1024,
});

const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
const posix=(value)=>value.split(path.sep).join('/');

function safePath(root,relative) {
  if(typeof relative!=='string'||!relative||path.isAbsolute(relative)) return null;
  const resolved=path.resolve(root,relative);
  return resolved.startsWith(path.resolve(root)+path.sep)?resolved:null;
}

function containsSymbolicLink(root,relative) {
  let cursor=path.resolve(root);
  for(const part of String(relative||'').split('/')) {
    cursor=path.join(cursor,part);
    if(fs.existsSync(cursor)&&fs.lstatSync(cursor).isSymbolicLink()) return true;
  }
  return false;
}

function readJson(root,relative,label,errors) {
  const target=safePath(root,relative);
  if(!target||!fs.existsSync(target)) { errors.push(`${label} is missing or unsafe: ${relative}`); return null; }
  if(containsSymbolicLink(root,relative)) { errors.push(`${label} must not contain a symbolic link: ${relative}`); return null; }
  try { return JSON.parse(fs.readFileSync(target,'utf8')); }
  catch { errors.push(`${label} is invalid JSON: ${relative}`); return null; }
}

function byteSize(root,relative) {
  const target=safePath(root,relative);
  return target&&fs.existsSync(target)?fs.statSync(target).size:null;
}

function compareTrees(left,right) {
  const walk=(root,current='',result=[])=>{
    for(const entry of fs.readdirSync(path.join(root,current),{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))) {
      const relative=path.join(current,entry.name);
      if(entry.isDirectory()) walk(root,relative,result);
      else if(entry.isFile()) result.push(posix(relative));
    }
    return result;
  };
  const leftFiles=walk(left),rightFiles=walk(right);
  if(JSON.stringify(leftFiles)!==JSON.stringify(rightFiles)) return {status:'mismatch',reason:'file lists differ'};
  for(const relative of leftFiles) {
    if(!fs.readFileSync(path.join(left,relative)).equals(fs.readFileSync(path.join(right,relative)))) return {status:'mismatch',reason:`bytes differ: ${relative}`};
  }
  return {status:'identical',filesCompared:leftFiles.length};
}

function completeCost(recipe) {
  const fact=recipe?.costFacts||recipe?.basketFacts||recipe?.basket;
  return fact?.costStatus==='complete'&&Number.isSafeInteger(fact.knownSubtotalCents)
    &&!(fact.unknownItemKeys||[]).length&&!(fact.quantityCheckKeys||[]).length;
}

function completeNutrition(recipe) {
  const facts=recipe?.nutritionFacts;
  const per=facts?.perServing;
  return facts?.status==='complete'&&Number.isFinite(facts.sourceServings)&&facts.sourceServings>0
    &&['kcal','proteinGrams','fiberGrams','sodiumMg'].every((field)=>Number.isFinite(per?.[field])&&per[field]>=0);
}

function readiness(recipes) {
  const balanced=recipes.length;
  const value=recipes.filter(completeCost).length;
  const nutrition=recipes.filter(completeNutrition).length;
  const entry=(eligible,total,reason)=>eligible
    ? {eligible,status:'available',reason:null}
    : {eligible:0,status:'unavailable',reason};
  return {
    balanced:{eligible:balanced,status:balanced?'available':'unavailable',reason:balanced?null:'no approved exact-offer recipes'},
    value:entry(value,recipes.length,'complete basket price evidence absent'),
    nutrition:entry(nutrition,recipes.length,'complete measured nutrient evidence absent'),
    diet:entry(nutrition,recipes.length,'complete measured nutrient evidence absent'),
  };
}

function verifyOne(snapshotDir,assetBudgets) {
  const root=path.resolve(snapshotDir);
  const errors=[];
  const warnings=[];
  const schema=validateMealSnapshotDirectory(root);
  errors.push(...schema.errors);
  const current=readJson(root,'current.json','current pointer',errors);
  if(!current) return {schema:{valid:false,errors:schema.errors},errors,warnings,locations:[],locationsChecked:0};
  const manifest=readJson(root,current.manifestPath,'manifest',errors);
  const currentBytes=byteSize(root,'current.json');
  const manifestBytes=byteSize(root,current.manifestPath);
  if(!manifest) return {schema:{valid:false,errors:schema.errors},errors,warnings,locations:[],locationsChecked:0};
  if('reviewQueuePath' in manifest||Object.keys(manifest.fileHashes||{}).some((relative)=>relative.includes('review-queue'))) errors.push('public snapshot must not contain a review queue');
  const manifestTarget=safePath(root,current.manifestPath);
  if(!DIGEST.test(current.manifestSha256||'')||sha256(fs.readFileSync(manifestTarget))!==current.manifestSha256) errors.push('manifest hash does not match current pointer');
  if(!current.weekStart||current.weekStart!==manifest.weekStart) errors.push('source lineage weekStart is missing or inconsistent');
  if(!current.collectionTimestamp||current.collectionTimestamp!==manifest.collectionTimestamp) errors.push('source lineage collectionTimestamp is missing or inconsistent');
  if(typeof manifest.tenant!=='string'||!manifest.tenant) errors.push('source lineage tenant is missing');
  if(typeof manifest.policyVersion!=='string'||!manifest.policyVersion) errors.push('source lineage policyVersion is missing');
  const source=manifest.source;
  if(!source||typeof source!=='object') errors.push('source lineage is missing');
  else {
    if(typeof source.inputLogicalName!=='string'||!source.inputLogicalName||path.basename(source.inputLogicalName)!==source.inputLogicalName) errors.push('CSV lineage logical name is invalid');
    if(!DIGEST.test(source.csvSha256||'')) errors.push('CSV lineage SHA-256 is invalid');
    if(typeof source.database!=='string'||!source.database) errors.push('database lineage is invalid');
    if(source.tenant!==manifest.tenant) errors.push('tenant lineage does not match manifest');
    if(!DIGEST.test(source.discoverySha256||'')||source.discoveryAlgorithm!=='canonical-candidate-report-v1') errors.push('discovery lineage is invalid');
  }
  const budgets={...DEFAULT_ASSET_BUDGETS,...assetBudgets};
  if(currentBytes>budgets.currentBytes) errors.push(`asset budget exceeded: current.json ${currentBytes} > ${budgets.currentBytes}`);
  if(manifestBytes>budgets.manifestBytes) errors.push(`asset budget exceeded: manifest ${manifestBytes} > ${budgets.manifestBytes}`);
  const coverage=readJson(root,manifest.coveragePath,'coverage',errors);
  const recipeIndex=readJson(root,manifest.recipeIndexPath,'recipe index',errors);
  const indexedRecipes=new Map();
  for(const entry of recipeIndex?.recipes||[]) {
    const detail=readJson(root,entry.path,'recipe detail',errors);
    if(!detail) continue;
    if(detail.sourceRecipeId!==entry.sourceRecipeId||detail.sourceContentHash!==entry.sourceContentHash) errors.push(`source lineage mismatch: ${entry.sourceRecipeId}`);
    if(!DIGEST.test(detail.sourceContentHash||'')) errors.push(`source lineage hash is invalid: ${entry.sourceRecipeId}`);
    if(typeof detail.sourceTitle!=='string'||!detail.sourceTitle||typeof detail.sourceUrl!=='string'||!detail.sourceUrl||typeof detail.sourceAuthor!=='string'||!detail.sourceAuthor) errors.push(`source lineage metadata is incomplete: ${entry.sourceRecipeId}`);
    indexedRecipes.set(entry.sourceRecipeId,entry);
  }
  const coverageByKey=new Map((coverage?.locations||[]).map((entry)=>[[entry.postcode,entry.store,entry.branchId].join('|'),entry]));
  const locations=[];
  for(const reference of Array.isArray(manifest.locations)?manifest.locations:[]) {
    const location=readJson(root,reference.path,'location artifact',errors);
    if(!location) continue;
    const key=[reference.postcode,reference.store,reference.branchId].join('|');
    const locationSize=byteSize(root,reference.path);
    if(locationSize>budgets.locationBytes) errors.push(`asset budget exceeded: location ${reference.path} ${locationSize} > ${budgets.locationBytes}`);
    if(location.postcode!==reference.postcode||location.store!==reference.store||location.branchId!==reference.branchId) errors.push(`location boundary mismatch: ${reference.id}`);
    if(reference.recipeCount!==location.recipes.length) errors.push(`location recipe count mismatch: ${reference.id}`);
    const coverageEntry=coverageByKey.get(key);
    if(!coverageEntry) errors.push(`coverage is missing location: ${reference.id}`);
    else if(coverageEntry.published!==location.recipes.length) errors.push(`coverage recipe count mismatch: ${reference.id}`);
    const offerIds=new Set((location.offers||[]).map((offer)=>offer.offerId));
    for(const offer of location.offers||[]) if(offer.postcode!==reference.postcode||offer.chain!==reference.store||offer.branchId!==reference.branchId) errors.push(`offer boundary mismatch: ${reference.id} offer ${offer.offerId}`);
    for(const recipe of location.recipes||[]) {
      if(!(recipe.offerIds||[]).length) errors.push(`recipe has no exact store offer: ${reference.id} recipe ${recipe.sourceRecipeId}`);
      for(const offerId of recipe.offerIds||[]) if(!offerIds.has(offerId)) errors.push(`cross-store offer borrow: ${reference.id} recipe ${recipe.sourceRecipeId} offer ${offerId}`);
      if(!indexedRecipes.has(recipe.sourceRecipeId)) errors.push(`location recipe is absent from source lineage index: ${reference.id} recipe ${recipe.sourceRecipeId}`);
      const detailSize=byteSize(root,recipe.detailPath);
      if(detailSize>budgets.detailBytes) errors.push(`asset budget exceeded: detail ${recipe.detailPath} ${detailSize} > ${budgets.detailBytes}`);
    }
    const browserInitialAssets=['current.json',current.manifestPath,reference.path];
    const initialBytes=browserInitialAssets.reduce((sum,relative)=>sum+(byteSize(root,relative)||0),0);
    if(initialBytes>budgets.selectedInitialBytes) errors.push(`asset budget exceeded: selected initial ${reference.id} ${initialBytes} > ${budgets.selectedInitialBytes}`);
    if(browserInitialAssets.some((relative)=>relative.endsWith('.csv')||relative.includes('review-queue'))) errors.push(`browser initial assets include private publication input: ${reference.id}`);
    if(browserInitialAssets.filter((relative)=>relative.includes('/locations/')).length!==1) errors.push(`browser initial assets include unrelated locations: ${reference.id}`);
    const modeReadiness=readiness(location.recipes||[]);
    if(modeReadiness.value.status==='unavailable'||modeReadiness.nutrition.status==='unavailable') warnings.push(`${reference.id}: evidence-limited recommendation modes are unavailable`);
    locations.push({id:reference.id,postcode:reference.postcode,store:reference.store,branchId:reference.branchId,offerCount:(location.offers||[]).length,recipeCount:(location.recipes||[]).length,zeroCandidateOfferCount:(coverageEntry?.zeroCandidateOfferIds||[]).length,sparse:coverageEntry?.sparse===true,assetBytes:{location:locationSize,selectedInitial:initialBytes,largestDetail:Math.max(0,...(location.recipes||[]).map((recipe)=>byteSize(root,recipe.detailPath)||0))},modeReadiness,browserInitialAssets});
  }
  const expectedKeys=new Set((manifest.locations||[]).map((entry)=>[entry.postcode,entry.store,entry.branchId].join('|')));
  for(const key of coverageByKey.keys()) if(!expectedKeys.has(key)) errors.push(`coverage contains an unrelated location: ${key}`);
  return {
    schema:{valid:schema.valid,errors:schema.errors},
    manifestHash:{expected:current.manifestSha256,actual:manifestTarget?sha256(fs.readFileSync(manifestTarget)):null,valid:manifestTarget?sha256(fs.readFileSync(manifestTarget))===current.manifestSha256:false},
    lineage:{snapshotId:manifest.snapshotId,weekStart:manifest.weekStart,collectionTimestamp:manifest.collectionTimestamp,tenant:manifest.tenant,database:source?.database||null,inputLogicalName:source?.inputLogicalName||null,policyVersion:manifest.policyVersion,sourceRecordsChecked:indexedRecipes.size,csvSha256:source?.csvSha256||null,dbExportSha256:source?.discoverySha256||null,discoveryAlgorithm:source?.discoveryAlgorithm||null},
    assetBudgets:budgets,assetSizes:{current:currentBytes,manifest:manifestBytes},
    zeroCandidateIdentities:coverage?.zeroCandidateIdentities||[],zeroCandidateOfferIds:coverage?.zeroCandidateOfferIds||[],
    locations,locationsChecked:locations.length,errors:[...new Set(errors)],warnings:[...new Set(warnings)],
  };
}

export function verifyMealSnapshot({snapshotDir,previousSnapshotDir=null,previousManifestPath=null,releaseMode=null,twinSnapshotDir=null,assetBudgets={}}) {
  if(!snapshotDir) throw new Error('snapshotDir is required');
  const root=path.resolve(snapshotDir);
  const report=verifyOne(root,assetBudgets);
  report.twoBuildComparison=twinSnapshotDir?compareTrees(root,path.resolve(twinSnapshotDir)):{status:'not-provided'};
  if(report.twoBuildComparison.status==='mismatch') report.errors.push(`twin build mismatch: ${report.twoBuildComparison.reason}`);
  report.rollback={provided:false,valid:null,snapshotId:null};
  if(releaseMode==='bootstrap') {
    const current=JSON.parse(fs.readFileSync(path.join(root,'current.json'),'utf8'));
    const manifest=JSON.parse(fs.readFileSync(path.join(root,current.manifestPath),'utf8'));
    if(previousSnapshotDir||previousManifestPath||manifest.previousSnapshot) report.errors.push('bootstrap release must not claim a previous snapshot');
    report.rollback={mode:'bootstrap',provided:false,valid:true,strategy:'app-assets-and-git'};
  } else if(['rollover','correction'].includes(releaseMode)) {
    if(previousSnapshotDir) report.errors.push('external previous snapshot is not valid release proof');
    const current=JSON.parse(fs.readFileSync(path.join(root,'current.json'),'utf8'));
    const manifest=JSON.parse(fs.readFileSync(path.join(root,current.manifestPath),'utf8'));
    if(previousManifestPath===current.manifestPath) report.errors.push('previous snapshot must be different from current snapshot');
    const pointer=manifest.previousSnapshot;
    if(!previousManifestPath||path.isAbsolute(previousManifestPath)||!safePath(root,previousManifestPath)) report.errors.push(`${releaseMode} requires a retained previous manifest path inside the release data root`);
    else if(!pointer||pointer.manifestPath!==previousManifestPath) report.errors.push(`${releaseMode} previous manifest does not match the retained pointer`);
    else {
      const previous=readJson(root,previousManifestPath,'previous snapshot manifest',report.errors);
      const bytesPath=safePath(root,previousManifestPath);
      if(previous&&bytesPath) {
        const actual=sha256(fs.readFileSync(bytesPath));
        if(actual!==pointer.manifestSha256) report.errors.push('rollback manifest hash mismatch');
        if(previous.snapshotId!==pointer.snapshotId||previous.snapshotId===manifest.snapshotId) report.errors.push('previous snapshot must be different from current snapshot');
        if(releaseMode==='correction'&&(pointer.mode!=='correction'||previous.weekStart!==manifest.weekStart)) report.errors.push('correction requires a same-week previous snapshot with correction mode');
        if(releaseMode==='rollover'&&(pointer.mode!==undefined&&pointer.mode!=='rollover'||previous.weekStart>=manifest.weekStart)) report.errors.push('rollover requires an earlier-week previous snapshot');
        report.rollback={mode:releaseMode,provided:true,valid:report.errors.length===0,snapshotId:previous.snapshotId,manifestPath:previousManifestPath};
      }
    }
  } else if(previousSnapshotDir) {
    const previous=verifyOne(previousSnapshotDir,assetBudgets);
    const different=previous.lineage?.snapshotId!==report.lineage?.snapshotId;
    report.rollback={provided:true,valid:previous.errors.length===0&&different,snapshotId:previous.lineage?.snapshotId||null,errors:previous.errors};
    if(!different) report.errors.push('rollback snapshot must be different from current snapshot');
    if(!report.rollback.valid) report.errors.push('rollback snapshot is invalid: '+previous.errors.join('; '));
  } else if(releaseMode!==null) {
    report.errors.push('release mode must be bootstrap, rollover, or correction');
  }
  report.valid=report.errors.length===0;
  if(!report.valid) {
    const error=new Error(report.errors.join('; '));
    error.report=report;
    throw error;
  }
  return report;
}

function parseArgs(argv) {
  const options={snapshotDir:null,previousManifestPath:null,twinSnapshotDir:null,releaseMode:null};
  for(let index=0;index<argv.length;index++) {
    const value=argv[index];
    if(!options.snapshotDir&&!value.startsWith('--')) options.snapshotDir=value;
    else if(value==='--previous') options.previousManifestPath=argv[++index];
    else if(value==='--twin') options.twinSnapshotDir=argv[++index];
    else if(value==='--bootstrap') options.releaseMode='bootstrap';
    else if(value==='--rollover') options.releaseMode='rollover';
    else if(value==='--correction') options.releaseMode='correction';
    else throw new Error('Unknown argument: '+value);
  }
  if(!options.snapshotDir||!options.releaseMode) throw new Error('Usage: node scripts/verify-meal-snapshot.mjs SNAPSHOT_DIR [--twin DIR] (--bootstrap | --rollover --previous RETAINED_MANIFEST.json | --correction --previous RETAINED_MANIFEST.json)');
  return options;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  try { console.log(JSON.stringify(verifyMealSnapshot(parseArgs(process.argv.slice(2))),null,2)); }
  catch(error) { console.error(JSON.stringify(error.report||{valid:false,errors:[error.message]},null,2)); process.exitCode=1; }
}
