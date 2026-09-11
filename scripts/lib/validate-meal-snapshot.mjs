import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
const digest=/^[a-f0-9]{64}$/;

function safePath(root,relative) {
  if(typeof relative!=='string'||!relative||path.isAbsolute(relative)) return null;
  const resolved=path.resolve(root,relative);
  return resolved.startsWith(path.resolve(root)+path.sep)?resolved:null;
}

function findForbiddenKey(value,trail='') {
  if(!value||typeof value!=='object') return null;
  for(const [key,child] of Object.entries(value)) {
    const current=trail?trail+'.'+key:key;
    if(['instruction','instructionText','sourceImage','sourceImages','imageUrl','images','html'].includes(key)) return current;
    const nested=findForbiddenKey(child,current);
    if(nested) return nested;
  }
  return null;
}

function outputFiles(root,current='',result=[]) {
  for(const entry of fs.readdirSync(path.join(root,current),{withFileTypes:true})) {
    const relative=path.join(current,entry.name);
    if(entry.isDirectory()) outputFiles(root,relative,result);
    else result.push(relative.split(path.sep).join('/'));
  }
  return result;
}

export function validateMealSnapshotDirectory(outputDir) {
  const errors=[];
  const currentPath=path.join(outputDir,'current.json');
  if(!fs.existsSync(currentPath)) return {valid:false,errors:['current.json is missing']};
  let current;
  try { current=JSON.parse(fs.readFileSync(currentPath,'utf8')); }
  catch { return {valid:false,errors:['current.json is invalid JSON']}; }
  if(current.schemaVersion!==1) errors.push('current.schemaVersion must be 1');
  if(!digest.test(current.snapshotId||'')) errors.push('current.snapshotId must be a SHA-256 digest');
  if(!digest.test(current.manifestSha256||'')) errors.push('current.manifestSha256 must be a SHA-256 digest');
  const manifestPath=safePath(outputDir,current.manifestPath);
  if(!manifestPath||!fs.existsSync(manifestPath)) errors.push('current.manifestPath is missing or unsafe');
  if(errors.length) return {valid:false,errors};
  const manifestBytes=fs.readFileSync(manifestPath);
  if(sha256(manifestBytes)!==current.manifestSha256) errors.push('manifest hash does not match current pointer');
  let manifest;
  try { manifest=JSON.parse(manifestBytes.toString('utf8')); }
  catch { errors.push('manifest is invalid JSON'); return {valid:false,errors}; }
  if(manifest.snapshotId!==current.snapshotId) errors.push('manifest snapshotId does not match current pointer');
  if(manifest.schemaVersion!==1) errors.push('manifest.schemaVersion must be 1');
  if(!manifest.fileHashes||typeof manifest.fileHashes!=='object'||Array.isArray(manifest.fileHashes)) errors.push('manifest.fileHashes must be an object');
  if('reviewQueuePath' in manifest||Object.keys(manifest.fileHashes||{}).some((relative)=>relative.includes('review-queue'))) errors.push('public snapshot must not contain a review queue');
  const parsedArtifacts=new Map();
  for(const [relative,expected] of Object.entries(manifest.fileHashes||{})) {
    const target=safePath(outputDir,relative);
    if(!target||!fs.existsSync(target)) { errors.push('listed artifact is missing or unsafe: '+relative); continue; }
    if(!digest.test(expected)||sha256(fs.readFileSync(target))!==expected) errors.push('artifact hash mismatch: '+relative);
    if(relative.endsWith('.json')) {
      try {
        const json=JSON.parse(fs.readFileSync(target,'utf8'));
        parsedArtifacts.set(relative,json);
        const forbidden=findForbiddenKey(json);
        if(forbidden) errors.push(`forbidden public source field ${forbidden}: ${relative}`);
      } catch { errors.push('artifact is invalid JSON: '+relative); }
    }
  }
  const reachable=new Set();
  const declare=(field,relative)=>{
    const target=safePath(outputDir,relative);
    if(!target) { errors.push(`${field} is missing or unsafe`); return false; }
    if(!manifest.fileHashes?.[relative]) { errors.push(`${field} is absent from hash table: ${relative}`); return false; }
    reachable.add(relative);
    return true;
  };
  for(const field of ['coveragePath','recipeIndexPath']) declare(field,manifest[field]);
  const coverage=parsedArtifacts.get(manifest.coveragePath);
  if(!coverage||!Array.isArray(coverage.locations)) errors.push('coveragePath does not contain location coverage');
  const recipeIndex=declare('recipeIndexPath',manifest.recipeIndexPath)?parsedArtifacts.get(manifest.recipeIndexPath):null;
  if(!recipeIndex||!Array.isArray(recipeIndex.recipes)) errors.push('recipeIndexPath does not contain a recipe index');
  const recipesById=new Map();
  for(const [index,recipe] of (recipeIndex?.recipes||[]).entries()) {
    const prefix=`recipeIndex.recipes[${index}]`;
    if(!recipe||typeof recipe!=='object') { errors.push(`${prefix} must be an object`); continue; }
    const sourceRecipeId=typeof recipe.sourceRecipeId==='string'?recipe.sourceRecipeId:'';
    if(!sourceRecipeId||recipesById.has(sourceRecipeId)) errors.push(`${prefix}.sourceRecipeId must be present and unique`);
    else recipesById.set(sourceRecipeId,recipe);
    if(declare(`${prefix}.path`,recipe.path)) {
      if(!digest.test(recipe.sha256||'')||manifest.fileHashes[recipe.path]!==recipe.sha256) errors.push(`${prefix}.sha256 must match the manifest hash`);
    }
  }
  const locationKeys=new Set();
  if(!Array.isArray(manifest.locations)||manifest.locations.length===0) errors.push('manifest.locations must be a non-empty array');
  for(const [locationIndex,location] of (Array.isArray(manifest.locations)?manifest.locations:[]).entries()) {
    const prefix=`locations[${locationIndex}]`;
    const key=[location.postcode,location.store,location.branchId].join('|');
    if(locationKeys.has(key)) errors.push('duplicate location boundary: '+key);
    locationKeys.add(key);
    const locationDeclared=declare(`${prefix}.path`,location.path);
    const locationArtifact=locationDeclared?parsedArtifacts.get(location.path):null;
    if(!locationArtifact||!Array.isArray(locationArtifact.recipes)) { errors.push(`${prefix}.path does not contain a location snapshot`); continue; }
    if(locationArtifact.postcode!==location.postcode||locationArtifact.store!==location.store||locationArtifact.branchId!==location.branchId) errors.push(`${prefix}.path location boundary does not match manifest`);
    for(const [recipeIndexInLocation,recipeRef] of locationArtifact.recipes.entries()) {
      const refPrefix=`${prefix}.recipes[${recipeIndexInLocation}]`;
      if(!recipeRef||typeof recipeRef!=='object') { errors.push(`${refPrefix} must be an object`); continue; }
      if(declare(`${refPrefix}.detailPath`,recipeRef.detailPath)) {
        if(!digest.test(recipeRef.detailSha256||'')||manifest.fileHashes[recipeRef.detailPath]!==recipeRef.detailSha256) errors.push(`${refPrefix}.detailSha256 must match the manifest hash`);
      }
      const indexed=recipesById.get(recipeRef.sourceRecipeId);
      if(!indexed||indexed.path!==recipeRef.detailPath||indexed.sha256!==recipeRef.detailSha256) errors.push(`${refPrefix} must match the recipe index`);
    }
  }
  const coverageLocationKeys=new Set((coverage?.locations||[]).map((location)=>[location.postcode,location.store,location.branchId].join('|')));
  if(locationKeys.size!==coverageLocationKeys.size||[...locationKeys].some((key)=>!coverageLocationKeys.has(key))) errors.push('manifest.locations must match coverage locations');
  for(const relative of Object.keys(manifest.fileHashes||{})) if(!reachable.has(relative)) errors.push('hash table contains an unreachable artifact: '+relative);
  const allowedFiles=new Set(['current.json',current.manifestPath,...Object.keys(manifest.fileHashes||{})]);
  for(const relative of outputFiles(outputDir)) if(!allowedFiles.has(relative)) errors.push('unlisted output file: '+relative);
  return {valid:errors.length===0,errors};
}
