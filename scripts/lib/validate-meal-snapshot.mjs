import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
const digest=/^[a-f0-9]{64}$/;
const SCHEMAS={
  current:['schemaVersion','snapshotId','weekStart','collectionTimestamp','manifestPath','manifestSha256'],
  manifest:['schemaVersion','snapshotId','weekStart','collectionTimestamp','policyVersion','tenant','source','locations','coveragePath','recipeIndexPath','fileHashes','previousSnapshot'],
  source:['inputLogicalName','csvSha256','database','tenant','discoverySha256','discoveryAlgorithm'],
  previous:['snapshotId','manifestPath','manifestSha256'],
  manifestLocation:['id','postcode','store','branch','branchId','path','recipeCount'],
  coverage:['schemaVersion','snapshotId','locations','identityStats','overflow','zeroCandidateIdentities','zeroCandidateOfferIds'],
  coverageLocation:['locationId','postcode','store','branchId','target','published','eligible','heldForReviewCount','heldReasonCounts','uncoveredOfferIds','sparse','relaxations','zeroCandidateOfferIds','warnings'],
  recipeIndex:['schemaVersion','snapshotId','recipes'],indexEntry:['sourceRecipeId','path','sha256','sourceContentHash'],
  location:['schemaVersion','snapshotId','weekStart','id','postcode','store','branch','branchId','offers','recipes','coverage','warnings'],
  offer:['offerId','postcode','chain','branchId','evidenceUrl','validFrom','validThrough','productDe','pack','priceCents','normalPriceCents','conditions','autoPriceEligible','identity'],
  identity:['ingredientId','species','cut','processingState','form','composition'],
  recipeRef:['sourceRecipeId','offerIds','offerIdentityKeys','primaryIngredientIds','recommendationProfile','qualityScore','qualityFacts','detailPath','detailSha256'],
  profile:['primaryIngredients','family','method','kind'],quality:['adjustedRating','popularity','completeness','priorStrength','globalMean'],
  locationCoverage:['target','published','eligible','heldForReviewCount','heldReasonCounts','uncoveredOfferIds','sparse','relaxations','zeroCandidateOfferIds'],
  warning:['code','published','target','added','cap'],
  detail:['schemaVersion','sourceRecipeId','sourceContentHash','sourceTitle','sourceUrl','sourceAuthor','sourceServingText','rating','ratingNumber','reviewCount','title','detailIngredients','steps','recommendationProfile','transformVersion'],
};

function allowOnly(value,allowed,prefix,errors) {
  if(!value||typeof value!=='object'||Array.isArray(value)) return;
  for(const key of Object.keys(value)) if(!allowed.includes(key)) errors.push(`unknown public field ${prefix}.${key}`);
}

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

function findForbiddenKey(value,trail='') {
  if(!value||typeof value!=='object') return null;
  if(Array.isArray(value)&&value.some((entry)=>entry&&typeof entry==='object'&&!Array.isArray(entry)&&'recipeId' in entry&&'reason' in entry&&'locationIds' in entry)) return `${trail||'root'} (review queue payload)`;
  for(const [key,child] of Object.entries(value)) {
    const current=trail?trail+'.'+key:key;
    if(['instruction','instructionText','sourceImage','sourceImages','imageUrl','images','html','reviewQueue','heldForReview','recipeCandidates','candidateReport','candidateId','recipeId','locationIds','rawText','ingredients','matches'].includes(key)) return `${current}${/review|heldForReview|recipeCandidates|candidateReport|candidateId|recipeId|locationIds|rawText/i.test(key)?' (review queue payload)':''}`;
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

function collectRetainedFiles(root,pointer,result,seen=new Set()) {
  if(!pointer||seen.has(pointer.manifestPath)) return;
  seen.add(pointer.manifestPath);
  const target=safePath(root,pointer.manifestPath);
  if(!target||!fs.existsSync(target)) return;
  let manifest;
  try { manifest=JSON.parse(fs.readFileSync(target,'utf8')); }
  catch { return; }
  result.add(pointer.manifestPath);
  for(const relative of Object.keys(manifest.fileHashes||{})) result.add(relative);
  collectRetainedFiles(root,manifest.previousSnapshot,result,seen);
}

export function validateMealSnapshotDirectory(outputDir,options={}) {
  const errors=[];
  const currentPath=path.join(outputDir,'current.json');
  let current=options.current||null;
  if(!current) {
    if(!fs.existsSync(currentPath)) return {valid:false,errors:['current.json is missing']};
    if(fs.lstatSync(currentPath).isSymbolicLink()) return {valid:false,errors:['current.json must not be a symbolic link']};
    try { current=JSON.parse(fs.readFileSync(currentPath,'utf8')); }
    catch { return {valid:false,errors:['current.json is invalid JSON']}; }
  }
  allowOnly(current,SCHEMAS.current,'current',errors);
  if(current.schemaVersion!==1) errors.push('current.schemaVersion must be 1');
  if(!digest.test(current.snapshotId||'')) errors.push('current.snapshotId must be a SHA-256 digest');
  if(!digest.test(current.manifestSha256||'')) errors.push('current.manifestSha256 must be a SHA-256 digest');
  const manifestPath=safePath(outputDir,current.manifestPath);
  if(!manifestPath||!fs.existsSync(manifestPath)) errors.push('current.manifestPath is missing or unsafe');
  else if(containsSymbolicLink(outputDir,current.manifestPath)) errors.push('current.manifestPath must not contain a symbolic link');
  if(errors.length) return {valid:false,errors};
  const manifestBytes=fs.readFileSync(manifestPath);
  if(sha256(manifestBytes)!==current.manifestSha256) errors.push('manifest hash does not match current pointer');
  let manifest;
  try { manifest=JSON.parse(manifestBytes.toString('utf8')); }
  catch { errors.push('manifest is invalid JSON'); return {valid:false,errors}; }
  allowOnly(manifest,SCHEMAS.manifest,'manifest',errors);
  if(manifest.snapshotId!==current.snapshotId) errors.push('manifest snapshotId does not match current pointer');
  if(manifest.schemaVersion!==1) errors.push('manifest.schemaVersion must be 1');
  if(!manifest.fileHashes||typeof manifest.fileHashes!=='object'||Array.isArray(manifest.fileHashes)) errors.push('manifest.fileHashes must be an object');
  if('reviewQueuePath' in manifest||Object.keys(manifest.fileHashes||{}).some((relative)=>relative.includes('review-queue'))) errors.push('public snapshot must not contain a review queue');
  if(!manifest.source||typeof manifest.source!=='object') errors.push('manifest source lineage is required');
  else {
    allowOnly(manifest.source,SCHEMAS.source,'manifest.source',errors);
    if(typeof manifest.source.inputLogicalName!=='string'||!manifest.source.inputLogicalName||path.basename(manifest.source.inputLogicalName)!==manifest.source.inputLogicalName) errors.push('manifest CSV lineage logical name is invalid');
    if(!digest.test(manifest.source.csvSha256||'')) errors.push('manifest CSV lineage SHA-256 is invalid');
    if(typeof manifest.source.database!=='string'||!manifest.source.database) errors.push('manifest database lineage is invalid');
    if(manifest.source.tenant!==manifest.tenant) errors.push('manifest tenant lineage does not match');
    if(!digest.test(manifest.source.discoverySha256||'')||manifest.source.discoveryAlgorithm!=='canonical-candidate-report-v1') errors.push('manifest discovery lineage is invalid');
  }
  const retainedFiles=new Set();
  if(manifest.previousSnapshot!==undefined) {
    const previous=manifest.previousSnapshot;
    collectRetainedFiles(outputDir,previous,retainedFiles);
    allowOnly(previous,SCHEMAS.previous,'manifest.previousSnapshot',errors);
    if(!previous||typeof previous!=='object'||previous.snapshotId===manifest.snapshotId) errors.push('previous snapshot must identify a different retained snapshot');
    else if(!digest.test(previous.snapshotId||'')||!digest.test(previous.manifestSha256||'')) errors.push('previous snapshot pointer is invalid');
    else {
      const previousPath=safePath(outputDir,previous.manifestPath);
      if(!previousPath||!fs.existsSync(previousPath)) errors.push('previous snapshot manifest is missing or unsafe');
      else if(containsSymbolicLink(outputDir,previous.manifestPath)) errors.push('previous snapshot manifest must not contain a symbolic link');
      else {
        const previousBytes=fs.readFileSync(previousPath);
        if(sha256(previousBytes)!==previous.manifestSha256) errors.push('previous snapshot manifest hash mismatch');
        else {
          try {
            const previousManifest=JSON.parse(previousBytes.toString('utf8'));
            if(previousManifest.snapshotId!==previous.snapshotId) errors.push('previous snapshotId does not match retained manifest');
            const nested=validateMealSnapshotDirectory(outputDir,{current:{schemaVersion:1,snapshotId:previous.snapshotId,weekStart:previousManifest.weekStart,collectionTimestamp:previousManifest.collectionTimestamp,manifestPath:previous.manifestPath,manifestSha256:previous.manifestSha256},allowUnlisted:true});
            for(const error of nested.errors) errors.push('previous snapshot: '+error);
            retainedFiles.add(previous.manifestPath);
            for(const [relative,expected] of Object.entries(previousManifest.fileHashes||{})) {
              const target=safePath(outputDir,relative);
              if(!target||!fs.existsSync(target)) errors.push('previous snapshot artifact is missing or unsafe: '+relative);
              else if(containsSymbolicLink(outputDir,relative)) errors.push('previous snapshot artifact must not contain a symbolic link: '+relative);
              else if(!digest.test(expected)||sha256(fs.readFileSync(target))!==expected) errors.push('previous snapshot artifact hash mismatch: '+relative);
              retainedFiles.add(relative);
            }
          } catch { errors.push('previous snapshot manifest is invalid JSON'); }
        }
      }
    }
  }
  const parsedArtifacts=new Map();
  for(const [relative,expected] of Object.entries(manifest.fileHashes||{})) {
    const target=safePath(outputDir,relative);
    if(!target||!fs.existsSync(target)) { errors.push('listed artifact is missing or unsafe: '+relative); continue; }
    if(containsSymbolicLink(outputDir,relative)) { errors.push('listed artifact must not contain a symbolic link: '+relative); continue; }
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
  else {
    allowOnly(coverage,SCHEMAS.coverage,'coverage',errors);
    coverage.locations.forEach((entry,index)=>allowOnly(entry,SCHEMAS.coverageLocation,`coverage.locations[${index}]`,errors));
  }
  const recipeIndex=declare('recipeIndexPath',manifest.recipeIndexPath)?parsedArtifacts.get(manifest.recipeIndexPath):null;
  if(!recipeIndex||!Array.isArray(recipeIndex.recipes)) errors.push('recipeIndexPath does not contain a recipe index');
  else allowOnly(recipeIndex,SCHEMAS.recipeIndex,'recipeIndex',errors);
  const recipesById=new Map();
  for(const [index,recipe] of (recipeIndex?.recipes||[]).entries()) {
    const prefix=`recipeIndex.recipes[${index}]`;
    if(!recipe||typeof recipe!=='object') { errors.push(`${prefix} must be an object`); continue; }
    const sourceRecipeId=typeof recipe.sourceRecipeId==='string'?recipe.sourceRecipeId:'';
    if(!sourceRecipeId||recipesById.has(sourceRecipeId)) errors.push(`${prefix}.sourceRecipeId must be present and unique`);
    else recipesById.set(sourceRecipeId,recipe);
    allowOnly(recipe,SCHEMAS.indexEntry,prefix,errors);
    if(declare(`${prefix}.path`,recipe.path)) {
      if(!digest.test(recipe.sha256||'')||manifest.fileHashes[recipe.path]!==recipe.sha256) errors.push(`${prefix}.sha256 must match the manifest hash`);
    }
  }
  const locationKeys=new Set();
  if(!Array.isArray(manifest.locations)||manifest.locations.length===0) errors.push('manifest.locations must be a non-empty array');
  for(const [locationIndex,location] of (Array.isArray(manifest.locations)?manifest.locations:[]).entries()) {
    const prefix=`locations[${locationIndex}]`;
    allowOnly(location,SCHEMAS.manifestLocation,prefix,errors);
    const key=[location.postcode,location.store,location.branchId].join('|');
    if(locationKeys.has(key)) errors.push('duplicate location boundary: '+key);
    locationKeys.add(key);
    const locationDeclared=declare(`${prefix}.path`,location.path);
    const locationArtifact=locationDeclared?parsedArtifacts.get(location.path):null;
    if(!locationArtifact||!Array.isArray(locationArtifact.recipes)) { errors.push(`${prefix}.path does not contain a location snapshot`); continue; }
    allowOnly(locationArtifact,SCHEMAS.location,`${prefix}.artifact`,errors);
    allowOnly(locationArtifact.coverage,SCHEMAS.locationCoverage,`${prefix}.artifact.coverage`,errors);
    for(const [warningIndex,warning] of (locationArtifact.warnings||[]).entries()) allowOnly(warning,SCHEMAS.warning,`${prefix}.artifact.warnings[${warningIndex}]`,errors);
    if(locationArtifact.postcode!==location.postcode||locationArtifact.store!==location.store||locationArtifact.branchId!==location.branchId) errors.push(`${prefix}.path location boundary does not match manifest`);
    for(const [offerIndex,offer] of (Array.isArray(locationArtifact.offers)?locationArtifact.offers:[]).entries()) {
      allowOnly(offer,SCHEMAS.offer,`${prefix}.offers[${offerIndex}]`,errors);
      allowOnly(offer.identity,SCHEMAS.identity,`${prefix}.offers[${offerIndex}].identity`,errors);
      if(offer.postcode!==location.postcode||offer.chain!==location.store||offer.branchId!==location.branchId) errors.push(`${prefix}.offers[${offerIndex}] offer boundary does not match owning location`);
    }
    for(const [recipeIndexInLocation,recipeRef] of locationArtifact.recipes.entries()) {
      const refPrefix=`${prefix}.recipes[${recipeIndexInLocation}]`;
      if(!recipeRef||typeof recipeRef!=='object') { errors.push(`${refPrefix} must be an object`); continue; }
      allowOnly(recipeRef,SCHEMAS.recipeRef,refPrefix,errors);
      allowOnly(recipeRef.recommendationProfile,SCHEMAS.profile,`${refPrefix}.recommendationProfile`,errors);
      allowOnly(recipeRef.qualityFacts,SCHEMAS.quality,`${refPrefix}.qualityFacts`,errors);
      if(declare(`${refPrefix}.detailPath`,recipeRef.detailPath)) {
        if(!digest.test(recipeRef.detailSha256||'')||manifest.fileHashes[recipeRef.detailPath]!==recipeRef.detailSha256) errors.push(`${refPrefix}.detailSha256 must match the manifest hash`);
      }
      const indexed=recipesById.get(recipeRef.sourceRecipeId);
      if(!indexed||indexed.path!==recipeRef.detailPath||indexed.sha256!==recipeRef.detailSha256) errors.push(`${refPrefix} must match the recipe index`);
    }
  }
  for(const [sourceRecipeId,indexed] of recipesById) {
    const detail=parsedArtifacts.get(indexed.path);
    allowOnly(detail,SCHEMAS.detail,`recipes.${sourceRecipeId}`,errors);
    allowOnly(detail?.recommendationProfile,SCHEMAS.profile,`recipes.${sourceRecipeId}.recommendationProfile`,errors);
  }
  const coverageLocationKeys=new Set((coverage?.locations||[]).map((location)=>[location.postcode,location.store,location.branchId].join('|')));
  if(locationKeys.size!==coverageLocationKeys.size||[...locationKeys].some((key)=>!coverageLocationKeys.has(key))) errors.push('manifest.locations must match coverage locations');
  for(const relative of Object.keys(manifest.fileHashes||{})) if(!reachable.has(relative)) errors.push('hash table contains an unreachable artifact: '+relative);
  const allowedFiles=new Set(['current.json',current.manifestPath,...Object.keys(manifest.fileHashes||{}),...retainedFiles]);
  if(!options.allowUnlisted) for(const relative of outputFiles(outputDir)) if(!allowedFiles.has(relative)) errors.push('unlisted output file: '+relative);
  return {valid:errors.length===0,errors};
}
