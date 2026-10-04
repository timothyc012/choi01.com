import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {offerIdentityKey} from '../find-store-recipe-candidates.mjs';
import {validRecipeSourceUrl} from './meal-snapshot-schema.mjs';
import {nutritionReadiness,basketReadiness} from './meal-ranking-facts.mjs';
import {assumptionFields,componentFields,nutrientFields} from './public-meal-calculations.mjs';
import {mealPolicy} from './meal-policy.mjs';

const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
const digest=/^[a-f0-9]{64}$/;
const SCHEMAS={
  current:['schemaVersion','snapshotId','weekStart','collectionTimestamp','manifestPath','manifestSha256'],
  manifest:['schemaVersion','snapshotId','weekStart','collectionTimestamp','policyVersion','tenant','source','locations','coveragePath','recipeIndexPath','discoveryCatalogPath','nutritionCatalogPath','fileHashes','previousSnapshot'],
  source:['inputLogicalName','csvSha256','database','tenant','discoverySha256','discoveryAlgorithm'],
  previous:['snapshotId','manifestPath','manifestSha256','mode'],
  manifestLocation:['id','postcode','store','branch','branchId','path','recipeCount'],
  coverage:['schemaVersion','snapshotId','locations','identityStats','overflow','zeroCandidateIdentities','zeroCandidateOfferIds'],
  coverageLocation:['locationId','postcode','store','branchId','target','published','eligible','heldForReviewCount','heldReasonCounts','uncoveredOfferIds','sparse','relaxations','zeroCandidateOfferIds','warnings'],
  recipeIndex:['schemaVersion','snapshotId','recipes'],indexEntry:['sourceRecipeId','path','sha256','sourceContentHash'],
  location:['schemaVersion','snapshotId','weekStart','id','postcode','store','branch','branchId','sourceCoverage','offers','recipes','coverage','warnings'],
  offer:['offerId','postcode','chain','branchId','evidenceUrl','validFrom','validThrough','productDe','pack','priceCents','normalPriceCents','conditions','autoPriceEligible','identity'],
  identity:['ingredientId','species','cut','processingState','form','composition'],
  recipeRef:['sourceTimeText','sourceServings','requiredAmounts','detailIngredients','nutritionFacts','basketFacts','sourceRecipeId','title','offerIds','offerIdentityKeys','primaryIngredientIds','recommendationProfile','qualityScore','qualityFacts','detailPath','detailSha256'],
  profile:['primaryIngredients','family','method','kind','filters'],quality:['adjustedRating','popularity','completeness','priorStrength','globalMean'],
  locationCoverage:['target','published','eligible','heldForReviewCount','heldReasonCounts','uncoveredOfferIds','sparse','relaxations','zeroCandidateOfferIds'],
  warning:['code','published','target','added','cap'],
  detail:['sourceTimeText','sourceServings','requiredAmounts','nutritionFacts','basketFacts','schemaVersion','sourceRecipeId','sourceContentHash','sourceTitle','sourceUrl','sourceAuthor','sourceServingText','rating','ratingNumber','reviewCount','title','detailIngredients','steps','recommendationProfile','transformVersion'],
  discovery:['schemaVersion','catalogVersion','snapshotId','weekStart','source','recipeCount','recipes','coverage','exclusionCounts','limitation'],
  discoverySource:['database','tenant','candidateReportSha256'],
  discoveryRecipe:['sourceTimeText','sourceRecipeId','title','sourceUrl','sourceAuthor','sourceServingText','ingredients','recommendationProfile','dietaryFilters','locations','detailStatus'],
  discoveryLocation:['postcode','store','branchId'],
};

function allowOnly(value,allowed,prefix,errors) {
  if(!value||typeof value!=='object'||Array.isArray(value)) return;
  for(const key of Object.keys(value)) if(!allowed.includes(key)) errors.push(`unknown public field ${prefix}.${key}`);
}

function calculationFacts(recipe,detail,prefix,errors,location,weekStart) {
  const nutrition=recipe?.nutritionFacts;
  if(nutrition!==undefined) {
    allowOnly(nutrition,['status','source','sourceServings','sourceRecipeId','sourceContentHash','basis','perServing','calculationSha256','sources','knownTotals','coverage','missingIngredients','components','perServingRange','centralScenarioPerServing','uncertaintyKind','assumptionsComplete','assumptions','unquantifiedUncertainty','calculationScope'],prefix+'.nutritionFacts',errors);
    allowOnly(nutrition?.perServing,['kcal','proteinGrams','fiberGrams','sodiumMg'],prefix+'.nutritionFacts.perServing',errors);
    if(!['complete','estimated','partial','unknown'].includes(nutrition.status)||(['complete','estimated'].includes(nutrition.status)?!nutritionReadiness(recipe).ready:nutrition.perServing!==null)||nutrition.sourceRecipeId!==detail?.sourceRecipeId||nutrition.sourceContentHash!==detail?.sourceContentHash||nutrition.sourceServings!==detail?.sourceServings||nutrition.basis!=='ingredient-inputs'||!digest.test(nutrition.calculationSha256||''))errors.push(prefix+' has invalid or stale nutrition calculation');
    if(!Array.isArray(nutrition?.sources)||['complete','estimated'].includes(nutrition.status)&&!nutrition.sources.length) errors.push(prefix+' nutrition sources are required');
    else for(const source of nutrition.sources) {
      allowOnly(source,['foodId','version','preparation','sourceURL','sourceSha256'],prefix+'.nutritionFacts.sources',errors);
      if(!source||['foodId','version','preparation'].some(key=>typeof source[key]!=='string'||!source[key])||!digest.test(source.sourceSha256||'')||!/^https:\/\//.test(source.sourceURL||'')) errors.push(prefix+' has invalid nutrient source');
    }
    if(nutrition.coverage!==undefined) {
      allowOnly(nutrition.coverage,['resolvedIngredientCount','totalIngredientCount','inventoryReviewed'],prefix+'.nutritionFacts.coverage',errors);
      if(!Number.isSafeInteger(nutrition.coverage.resolvedIngredientCount)||nutrition.coverage.resolvedIngredientCount<0||!Number.isSafeInteger(nutrition.coverage.totalIngredientCount)||nutrition.coverage.totalIngredientCount<1||nutrition.coverage.resolvedIngredientCount>nutrition.coverage.totalIngredientCount||typeof nutrition.coverage.inventoryReviewed!=='boolean')errors.push(prefix+' has invalid nutrition coverage');
      if(['complete','estimated'].includes(nutrition.status)&&nutrition.coverage.inventoryReviewed!==true)errors.push(prefix+' nutrition inventory is not reviewed');
    }
    for(const missing of nutrition.missingIngredients||[])allowOnly(missing,['ingredientOrdinal','ingredientLabel','reason'],prefix+'.nutritionFacts.missingIngredients',errors);
    for(const component of nutrition.components||[]) {
      allowOnly(component,componentFields,prefix+'.nutritionFacts.components',errors);
      allowOnly(component.per100g,nutrientFields,prefix+'.nutritionFacts.components.per100g',errors);
      allowOnly(component.per100gRange,nutrientFields,prefix+'.nutritionFacts.components.per100gRange',errors);
      for(const key of nutrientFields) {
        if(component.per100g?.[key]!==null&&(!Number.isFinite(component.per100g?.[key])||component.per100g[key]<0))errors.push(prefix+' has invalid food component nutrient');
        if(component.per100gRange?.[key]!==null)allowOnly(component.per100gRange?.[key],['min','max'],prefix+'.nutritionFacts.components.per100gRange.'+key,errors);
      }
      if(component.gramsRange!==null)allowOnly(component.gramsRange,['min','max'],prefix+'.nutritionFacts.components.gramsRange',errors);
    }
    for(const assumption of nutrition.assumptions||[]) {
      allowOnly(assumption,assumptionFields,prefix+'.nutritionFacts.assumptions',errors);
      if(assumption.grams!==null)allowOnly(assumption.grams,['central','min','max'],prefix+'.nutritionFacts.assumptions.grams',errors);
      if(assumption.valuesPer100g!==null)allowOnly(assumption.valuesPer100g,['central','min','max'],prefix+'.nutritionFacts.assumptions.valuesPer100g',errors);
    }
    for(const uncertainty of nutrition.unquantifiedUncertainty||[])if(typeof uncertainty!=='string')allowOnly(uncertainty,['ingredientOrdinal','ingredientLabel','kind','description'],prefix+'.nutritionFacts.unquantifiedUncertainty',errors);
    if(nutrition.calculationScope) {
      const scope=nutrition.calculationScope;
      allowOnly(scope,['disclosures','excludedAccompaniments'],prefix+'.nutritionFacts.calculationScope',errors);
      if(!Array.isArray(scope.disclosures)||scope.disclosures.some(value=>typeof value!=='string')||!Array.isArray(scope.excludedAccompaniments))errors.push(prefix+' has invalid nutrition calculation scope');
      else for(const value of scope.excludedAccompaniments) {
        allowOnly(value,['ingredientLabel','stepOrdinals','disclosure'],prefix+'.nutritionFacts.calculationScope.excludedAccompaniments',errors);
        if(typeof value.ingredientLabel!=='string'||typeof value.disclosure!=='string'||!Array.isArray(value.stepOrdinals)||value.stepOrdinals.some(ordinal=>!Number.isSafeInteger(ordinal)||ordinal<1))errors.push(prefix+' has invalid excluded accompaniment disclosure');
      }
    }
    if(nutrition.status==='estimated')for(const field of nutrientFields) {
      allowOnly(nutrition.perServingRange?.[field],['min','max'],prefix+'.nutritionFacts.perServingRange.'+field,errors);
    }
  }
  const basket=recipe?.basketFacts;
  if(basket!==undefined) {
    allowOnly(basket,['sourceCoverage','costStatus','postcode','store','branchId','date','targetServings','sourceRecipeId','sourceContentHash','calculationSha256','knownSubtotalCents','unknownItemKeys','quantityCheckKeys','savingsStatus','items'],prefix+'.basketFacts',errors);
    if(!location||basket?.sourceCoverage!=='complete'||!basketReadiness(basket).ready||basket.sourceRecipeId!==detail?.sourceRecipeId||basket.sourceContentHash!==detail?.sourceContentHash||!digest.test(basket.calculationSha256||'')||basket.postcode!==location.postcode||basket.store!==location.store||basket.branchId!==location.branchId||basket.date!==weekStart||basket.targetServings!==2)errors.push(prefix+' has invalid or unscoped basket calculation');
    if(!Array.isArray(basket?.items)||!basket.items.length)errors.push(prefix+' basket items are required');
    else {
      let sum=0;const keys=new Set();
      for(const item of basket.items) {
        allowOnly(item,['key','name','pantryKeys','pack','requiredAmount','priceCents','quantity','subtotalCents','quantityComplete','sourceURL','sourceSha256','validFrom','validThrough'],prefix+'.basketFacts.items',errors);
        allowOnly(item?.pack,['amount','unit'],prefix+'.basketFacts.items.pack',errors);
        allowOnly(item?.requiredAmount,['amount','unit'],prefix+'.basketFacts.items.requiredAmount',errors);
        if(typeof item?.name!=='string'||!item.name||!Array.isArray(item.pantryKeys)||!item.pantryKeys.length||item.pantryKeys.some(key=>typeof key!=='string'||!key.startsWith(basket.store+':'))||!Number.isFinite(item.pack?.amount)||item.pack.amount<=0||!['g','ml'].includes(item.pack?.unit)||!Number.isFinite(item.requiredAmount?.amount)||item.requiredAmount.amount<=0||item.requiredAmount.unit!==item.pack.unit)errors.push(prefix+' has invalid basket quantity or pantry mapping');
        if(!item||keys.has(item.key)||typeof item.key!=='string'||!item.key||!Number.isSafeInteger(item.priceCents)||item.priceCents<0||!Number.isSafeInteger(item.quantity)||item.quantity<1||item.quantityComplete!==true||!Number.isSafeInteger(item.subtotalCents)||item.subtotalCents!==item.priceCents*item.quantity||!digest.test(item.sourceSha256||'')||!/^https:\/\//.test(item.sourceURL||'')||!/^\d{4}-\d{2}-\d{2}$/.test(item.validFrom||'')||!/^\d{4}-\d{2}-\d{2}$/.test(item.validThrough||'')||basket.date<item.validFrom||basket.date>item.validThrough) errors.push(prefix+' has invalid basket item');
        keys.add(item?.key);sum+=item?.subtotalCents||0;
      }
      if(!Number.isSafeInteger(sum)||sum!==basket.knownSubtotalCents)errors.push(prefix+' basket subtotal does not match its items');
    }
  }
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

function findForbiddenKey(value,trail='',allowedKeys=new Set()) {
  if(!value||typeof value!=='object') return null;
  if(Array.isArray(value)&&value.some((entry)=>entry&&typeof entry==='object'&&!Array.isArray(entry)&&'recipeId' in entry&&'reason' in entry&&'locationIds' in entry)) return `${trail||'root'} (review queue payload)`;
  for(const [key,child] of Object.entries(value)) {
    const current=trail?trail+'.'+key:key;
    if(!allowedKeys.has(key)&&['instruction','instructionText','sourceImage','sourceImages','imageUrl','images','html','reviewQueue','heldForReview','recipeCandidates','candidateReport','candidateId','recipeId','locationIds','rawText','ingredients','matches'].includes(key)) return `${current}${/review|heldForReview|recipeCandidates|candidateReport|candidateId|recipeId|locationIds|rawText/i.test(key)?' (review queue payload)':''}`;
    const nested=findForbiddenKey(child,current,allowedKeys);
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
    else if(previous.mode!==undefined&&!['rollover','correction'].includes(previous.mode)) errors.push('previous snapshot mode is invalid');
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
            if(previous.mode==='correction'&&previousManifest.weekStart!==manifest.weekStart) errors.push('correction previous snapshot must be from the same week');
            if(previous.mode==='rollover'&&previousManifest.weekStart>=manifest.weekStart) errors.push('rollover previous snapshot must be from an earlier week');
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
        const forbidden=findForbiddenKey(json,'',relative.includes('/recipes/discovery.')?new Set(['ingredients']):new Set());
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
  if(manifest.discoveryCatalogPath!==undefined) declare('discoveryCatalogPath',manifest.discoveryCatalogPath);
  if(manifest.nutritionCatalogPath!==undefined)declare('nutritionCatalogPath',manifest.nutritionCatalogPath);
  const coverage=parsedArtifacts.get(manifest.coveragePath);
  if(!coverage||!Array.isArray(coverage.locations)) errors.push('coveragePath does not contain location coverage');
  else {
    allowOnly(coverage,SCHEMAS.coverage,'coverage',errors);
    coverage.locations.forEach((entry,index)=>allowOnly(entry,SCHEMAS.coverageLocation,`coverage.locations[${index}]`,errors));
  }
  const recipeIndex=declare('recipeIndexPath',manifest.recipeIndexPath)?parsedArtifacts.get(manifest.recipeIndexPath):null;
  if(!recipeIndex||!Array.isArray(recipeIndex.recipes)) errors.push('recipeIndexPath does not contain a recipe index');
  else allowOnly(recipeIndex,SCHEMAS.recipeIndex,'recipeIndex',errors);
  const discovery=manifest.discoveryCatalogPath===undefined?null:parsedArtifacts.get(manifest.discoveryCatalogPath);
  if(manifest.discoveryCatalogPath!==undefined&&!discovery) errors.push('discoveryCatalogPath does not contain a discovery catalog');
  else if(discovery) {
    allowOnly(discovery,SCHEMAS.discovery,'discovery',errors);
    allowOnly(discovery.source,SCHEMAS.discoverySource,'discovery.source',errors);
    if(discovery.schemaVersion!==1||discovery.catalogVersion!=='exploration-v1'||discovery.snapshotId!==manifest.snapshotId||discovery.weekStart!==manifest.weekStart) errors.push('discovery catalog identity does not match manifest');
    if(discovery.recipeCount!==discovery.recipes.length||discovery.recipes.length>1000) errors.push('discovery recipeCount is invalid');
    if(discovery.source?.candidateReportSha256!==manifest.source?.discoverySha256) errors.push('discovery source lineage does not match manifest');
    if(!new RegExp(`^snapshots/${manifest.weekStart}/${manifest.snapshotId}/recipes/discovery\\.([a-f0-9]{64})\\.json$`).test(manifest.discoveryCatalogPath||'')||manifest.fileHashes?.[manifest.discoveryCatalogPath]!==manifest.discoveryCatalogPath?.match(/discovery\.([a-f0-9]{64})\.json$/)?.[1]) errors.push('discoveryCatalogPath must include its manifest hash');
    const ids=new Set();
    discovery.recipes.forEach((recipe,index)=>{
      const prefix=`discovery.recipes[${index}]`;
      allowOnly(recipe,SCHEMAS.discoveryRecipe,prefix,errors);
      allowOnly(recipe?.recommendationProfile,SCHEMAS.profile,`${prefix}.recommendationProfile`,errors);
      if(!/^\d{1,20}$/.test(recipe?.sourceRecipeId||'')||ids.has(recipe.sourceRecipeId)) errors.push(`${prefix}.sourceRecipeId must be present and unique`);
      else ids.add(recipe.sourceRecipeId);
      if(recipe?.sourceUrl!==`https://www.10000recipe.com/recipe/${recipe?.sourceRecipeId}`) errors.push(`${prefix}.sourceUrl must match the approved recipe host and id`);
      if(!Array.isArray(recipe?.ingredients)||recipe.ingredients.length<2||recipe.ingredients.some((value)=>typeof value!=='string'||!value.trim())) errors.push(`${prefix}.ingredients must contain public ingredient lines`);
      if(recipe?.recommendationProfile?.kind!=='main'||!Array.isArray(recipe?.recommendationProfile?.primaryIngredients)||!recipe.recommendationProfile.primaryIngredients.length) errors.push(`${prefix}.recommendationProfile must describe a main meal`);
      if(!Array.isArray(recipe?.dietaryFilters)||recipe.dietaryFilters.some((value)=>value!=='vegetarian')) errors.push(`${prefix}.dietaryFilters is invalid`);
      if(!Array.isArray(recipe?.locations)||!recipe.locations.length) errors.push(`${prefix}.locations must be non-empty`);
      else recipe.locations.forEach((location,locationIndex)=>{
        allowOnly(location,SCHEMAS.discoveryLocation,`${prefix}.locations[${locationIndex}]`,errors);
        if(!location||['postcode','store','branchId'].some((key)=>typeof location[key]!=='string'||!location[key])) errors.push(`${prefix}.locations[${locationIndex}] is invalid`);
      });
      if(recipe?.detailStatus!=='source-link-only') errors.push(`${prefix}.detailStatus is invalid`);
    });
  }
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
    if(locationArtifact?.sourceCoverage!==undefined) {
      const source=locationArtifact.sourceCoverage;
      allowOnly(source,['status','collectedProducts','sourcePageCount','checkedPageCount','evidenceURL','note'],`${prefix}.artifact.sourceCoverage`,errors);
      if(!['수집완료','일부수집','미수집','미공개','접근실패','지점없음'].includes(source?.status)||!Number.isSafeInteger(source?.collectedProducts)||source.collectedProducts<0||!/^https:\/\//.test(source?.evidenceURL||'')||typeof source?.note!=='string')errors.push(prefix+' has invalid source coverage');
      if(source?.sourcePageCount!==null&&(!Number.isSafeInteger(source?.sourcePageCount)||source.sourcePageCount<1)||source?.checkedPageCount!==null&&(!Number.isSafeInteger(source?.checkedPageCount)||source.checkedPageCount<0||source.sourcePageCount===null||source.checkedPageCount>source.sourcePageCount))errors.push(prefix+' has invalid source page coverage');
      if(source?.status==='수집완료'&&source.sourcePageCount!==null&&source.checkedPageCount!==source.sourcePageCount)errors.push(prefix+' claims full collection with unchecked pages');
      if(['미수집','미공개','접근실패','지점없음'].includes(source?.status)&&((locationArtifact.offers||[]).length||source.collectedProducts))errors.push(prefix+' mixes unavailable source with current offers');
    }
    allowOnly(locationArtifact.coverage,SCHEMAS.locationCoverage,`${prefix}.artifact.coverage`,errors);
    for(const [warningIndex,warning] of (locationArtifact.warnings||[]).entries()) allowOnly(warning,SCHEMAS.warning,`${prefix}.artifact.warnings[${warningIndex}]`,errors);
    if(locationArtifact.postcode!==location.postcode||locationArtifact.store!==location.store||locationArtifact.branchId!==location.branchId) errors.push(`${prefix}.path location boundary does not match manifest`);
    for(const [offerIndex,offer] of (Array.isArray(locationArtifact.offers)?locationArtifact.offers:[]).entries()) {
      allowOnly(offer,SCHEMAS.offer,`${prefix}.offers[${offerIndex}]`,errors);
      allowOnly(offer.identity,SCHEMAS.identity,`${prefix}.offers[${offerIndex}].identity`,errors);
      if(offer.postcode!==location.postcode||offer.chain!==location.store||offer.branchId!==location.branchId) errors.push(`${prefix}.offers[${offerIndex}] offer boundary does not match owning location`);
    }
    const offersById=new Map((locationArtifact.offers||[]).map((offer)=>[offer.offerId,offer]));
    for(const [recipeIndexInLocation,recipeRef] of locationArtifact.recipes.entries()) {
      const refPrefix=`${prefix}.recipes[${recipeIndexInLocation}]`;
      if(!recipeRef||typeof recipeRef!=='object') { errors.push(`${refPrefix} must be an object`); continue; }
      allowOnly(recipeRef,SCHEMAS.recipeRef,refPrefix,errors);
      allowOnly(recipeRef.recommendationProfile,SCHEMAS.profile,`${refPrefix}.recommendationProfile`,errors);
      allowOnly(recipeRef.qualityFacts,SCHEMAS.quality,`${refPrefix}.qualityFacts`,errors);
      const primary=new Set(Array.isArray(recipeRef.recommendationProfile?.primaryIngredients)?recipeRef.recommendationProfile.primaryIngredients:[]);
      const scopedPrimary=[...new Set((Array.isArray(recipeRef.offerIds)?recipeRef.offerIds:[]).map((offerId)=>offersById.get(offerId)?.identity?.ingredientId).filter((ingredientId)=>primary.has(ingredientId)))].sort();
      const declaredPrimary=[...new Set(Array.isArray(recipeRef.primaryIngredientIds)?recipeRef.primaryIngredientIds:[])].sort();
      if(!options.allowUnlisted&&(!scopedPrimary.length||JSON.stringify(scopedPrimary)!==JSON.stringify(declaredPrimary))) errors.push(`${refPrefix} primary ingredients must match a scoped exact offer`);
      const scopedIdentityKeys=[...new Set((Array.isArray(recipeRef.offerIds)?recipeRef.offerIds:[]).map((offerId)=>offersById.get(offerId)).filter((offer)=>offer&&primary.has(offer.identity?.ingredientId)).map((offer)=>offerIdentityKey(offer.identity)))].sort();
      const declaredIdentityKeys=[...new Set(Array.isArray(recipeRef.offerIdentityKeys)?recipeRef.offerIdentityKeys:[])].sort();
      if(!options.allowUnlisted&&JSON.stringify(scopedIdentityKeys)!==JSON.stringify(declaredIdentityKeys)) errors.push(`${refPrefix} canonical offer identity keys must match referenced offers`);
      if(declare(`${refPrefix}.detailPath`,recipeRef.detailPath)) {
        if(!digest.test(recipeRef.detailSha256||'')||manifest.fileHashes[recipeRef.detailPath]!==recipeRef.detailSha256) errors.push(`${refPrefix}.detailSha256 must match the manifest hash`);
      }
      const indexed=recipesById.get(recipeRef.sourceRecipeId);
      if(!indexed||indexed.path!==recipeRef.detailPath||indexed.sha256!==recipeRef.detailSha256) errors.push(`${refPrefix} must match the recipe index`);
      const detail=parsedArtifacts.get(recipeRef.detailPath);
      calculationFacts(recipeRef,detail,refPrefix,errors,location,manifest.weekStart);
      for(const field of ['sourceTimeText','sourceServings','requiredAmounts','nutritionFacts'])if(recipeRef[field]!==undefined&&JSON.stringify(recipeRef[field])!==JSON.stringify(detail?.[field]))errors.push(`${refPrefix}.${field} must match its approved detail`);
      if(typeof recipeRef.title!=='string'||!recipeRef.title.trim()||recipeRef.title!==detail?.title) errors.push(`${refPrefix}.title must match its approved detail title`);
    }
  }
  for(const [sourceRecipeId,indexed] of recipesById) {
    const detail=parsedArtifacts.get(indexed.path);
    allowOnly(detail,SCHEMAS.detail,`recipes.${sourceRecipeId}`,errors);
    allowOnly(detail?.recommendationProfile,SCHEMAS.profile,`recipes.${sourceRecipeId}.recommendationProfile`,errors);
    calculationFacts(detail,detail,`recipes.${sourceRecipeId}`,errors);
    if(!validRecipeSourceUrl(detail?.sourceUrl,sourceRecipeId)) errors.push(`recipes.${sourceRecipeId}.sourceUrl must match the approved recipe host and id`);
  }
  if(manifest.nutritionCatalogPath!==undefined) {
    const catalog=parsedArtifacts.get(manifest.nutritionCatalogPath);
    allowOnly(catalog,['schemaVersion','catalogVersion','scope','snapshotId','weekStart','recipes'],'nutritionCatalog',errors);
    if(!catalog||catalog.schemaVersion!==1||catalog.catalogVersion!=='nutrition-general-v1'||catalog.scope!=='nutrition-general'||catalog.snapshotId!==manifest.snapshotId||catalog.weekStart!==manifest.weekStart||!Array.isArray(catalog.recipes))errors.push('nutrition catalog identity is invalid');
    if(!new RegExp(`^snapshots/${manifest.weekStart}/${manifest.snapshotId}/recipes/nutrition\\.([a-f0-9]{64})\\.json$`).test(manifest.nutritionCatalogPath)||manifest.fileHashes[manifest.nutritionCatalogPath]!==manifest.nutritionCatalogPath.match(/nutrition\.([a-f0-9]{64})\.json$/)?.[1])errors.push('nutrition catalog path must include its manifest hash');
    const seen=new Set();
    for(const recipe of catalog?.recipes||[]) {
      const prefix='nutritionCatalog.recipes.'+recipe?.sourceRecipeId;
      allowOnly(recipe,['sourceRecipeId','sourceContentHash','title','sourceTimeText','sourceServings','requiredAmounts','detailIngredients','recommendationProfile','nutritionFacts','saleLinked','automaticMealEligible','sourceUrl','sourceAuthor','sourceServingText','detailPath','detailSha256','offerIds','primaryIngredientIds'],prefix,errors);
      const indexed=recipesById.get(recipe?.sourceRecipeId),detail=parsedArtifacts.get(indexed?.path);
      if(!recipe||seen.has(recipe.sourceRecipeId)||!indexed||!detail||recipe.detailPath!==indexed.path||recipe.detailSha256!==indexed.sha256||recipe.sourceContentHash!==detail.sourceContentHash||!validRecipeSourceUrl(recipe.sourceUrl,recipe.sourceRecipeId)||recipe.saleLinked!==false||!Array.isArray(recipe.offerIds)||recipe.offerIds.length||!Array.isArray(recipe.primaryIngredientIds)||recipe.primaryIngredientIds.length)errors.push(prefix+' is not an approved unlinked recipe detail');
      seen.add(recipe?.sourceRecipeId);
      for(const field of ['title','recommendationProfile','nutritionFacts','sourceServingText','sourceServings','requiredAmounts','detailIngredients'])if(JSON.stringify(recipe?.[field])!==JSON.stringify(detail?.[field]))errors.push(prefix+'.'+field+' must match the approved detail');
      if(!nutritionReadiness(recipe).ready||recipe.automaticMealEligible!==(mealPolicy.mealKind(recipe)==='main'))errors.push(prefix+' has incomplete nutrition or wrong meal classification');
    }
  }
  const coverageLocationKeys=new Set((coverage?.locations||[]).map((location)=>[location.postcode,location.store,location.branchId].join('|')));
  if(locationKeys.size!==coverageLocationKeys.size||[...locationKeys].some((key)=>!coverageLocationKeys.has(key))) errors.push('manifest.locations must match coverage locations');
  for(const relative of Object.keys(manifest.fileHashes||{})) if(!reachable.has(relative)) errors.push('hash table contains an unreachable artifact: '+relative);
  const allowedFiles=new Set(['current.json',current.manifestPath,...Object.keys(manifest.fileHashes||{}),...retainedFiles]);
  if(!options.allowUnlisted) for(const relative of outputFiles(outputDir)) if(!allowedFiles.has(relative)) errors.push('unlisted output file: '+relative);
  return {valid:errors.length===0,errors};
}
