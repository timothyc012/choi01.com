import crypto from 'node:crypto';
import {canonicalJson} from './meal-snapshot-schema.mjs';
import {sourceContentHash,unquantifiedActionIngredients} from './select-store-recipes.mjs';

export const CALCULATION_VERSION='reviewed-ingredient-calculation-v1';
export const ESTIMATED_CALCULATION_VERSION='reviewed-estimated-ingredient-calculation-v1';
export const NUTRIENTS=['kcal','proteinGrams','fiberGrams','sodiumMg'];
const digest=(value)=>crypto.createHash('sha256').update(canonicalJson(value)).digest('hex');
const text=(value)=>typeof value==='string'&&value.trim().length>0;
const hash=(value)=>typeof value==='string'&&/^[a-f0-9]{64}$/.test(value);
const positive=(value)=>typeof value==='number'&&Number.isFinite(value)&&value>0;
const money=(value)=>Number.isSafeInteger(value)&&value>=0;
const rounded=(value)=>Number(value.toFixed(9));
const scaledNutrient=(grams,value)=>grams>=value?grams/100*value:value/100*grams;
const midpoint=(range)=>range.min/2+range.max/2;
const PUBLISHED_SCENARIO_SOURCE_HOSTS=new Set(['semie.cooking']);
function date(value) {
  if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed=new Date(value+'T00:00:00Z');
  return Number.isFinite(parsed.getTime())&&parsed.toISOString().slice(0,10)===value;
}
function https(value) {
  try { const url=new URL(value);return url.protocol==='https:'&&!url.username&&!url.password; }
  catch { return false; }
}
const reviewed=(value)=>value?.reviewed===true&&text(value.reviewedBy)&&date(value.reviewedAt);
const review=(value)=>({reviewed:value.reviewed===true,reviewedBy:value.reviewedBy??null,reviewedAt:value.reviewedAt??null});
function catalog(value,key) {
  if(value?.schemaVersion!==1||!Array.isArray(value[key])) throw new Error(`${key} must be a schemaVersion 1 catalog array`);
  return value[key];
}
function explicitSourceAmount(quantity) {
  const match=/^\s*(\d+(?:\.\d+)?)\s*(kg|g|ml|l)\s*$/i.exec(String(quantity??''));
  if(!match||!positive(Number(match[1]))) return null;
  const unit=match[2].toLowerCase(),factor=['kg','l'].includes(unit)?1000:1;
  return {amount:Number(match[1])*factor,unit:['g','kg'].includes(unit)?'g':'ml'};
}
function sourceServings(recipe) {
  const match=/^\s*([1-9]\d*)\s*인분\s*$/u.exec(String(recipe.sourceServingText??''));
  const value=match?Number(match[1]):null;
  if(!Number.isSafeInteger(value)||value>1000) return null;
  return recipe.sourceServings===undefined||recipe.sourceServings===value?value:null;
}
function recipeBasis(recipe) {
  if(!recipe||!text(String(recipe.sourceRecipeId??recipe.recipeId??''))||!https(recipe.sourceUrl)) throw new Error('Recipe requires its sourceRecipeId and HTTPS sourceUrl');
  const ingredients=Array.isArray(recipe.ingredients)?recipe.ingredients:[];
  const seen=new Set(),issues=[];
  for(const ingredient of ingredients) {
    if(!Number.isSafeInteger(ingredient.ordinal)||ingredient.ordinal<1||seen.has(ingredient.ordinal)||!text(ingredient.ingredient??ingredient.label)) issues.push({ingredientOrdinal:ingredient.ordinal??null,reason:'invalid-source-ingredient'});
    seen.add(ingredient.ordinal);
  }
  if(!ingredients.length) issues.push({ingredientOrdinal:null,reason:'missing-source-ingredients'});
  const invalidIngredients=issues.length>0;
  const unlistedIngredients=unquantifiedActionIngredients(recipe);
  for(const ingredientLabel of unlistedIngredients) issues.push({ingredientOrdinal:null,ingredientLabel,reason:'unlisted-or-unquantified-action-ingredient'});
  const stepOrdinals=(recipe.steps??[]).map((step)=>step.ordinal).filter((ordinal)=>Number.isSafeInteger(ordinal)&&ordinal>0);
  return {sourceRecipeId:String(recipe.sourceRecipeId??recipe.recipeId),sourceContentHash:sourceContentHash(recipe),sourceURL:recipe.sourceUrl,sourceServings:sourceServings(recipe),ingredients,issues,invalidIngredients,unlistedIngredients,stepOrdinals};
}
function recordFor(mapping,records) {
  const matches=records.filter((record)=>record.foodId===mapping.foodId&&record.version===mapping.foodVersion&&record.sourceSha256===mapping.foodSourceSha256&&record.preparation===mapping.preparation);
  if(matches.length!==1) return {record:null,reason:matches.length?'ambiguous-food-record':'food-record-mismatch'};
  const record=matches[0];
  if(!reviewed(record)||!text(record.foodId)||!text(record.version)||!text(record.preparation)||!https(record.sourceURL)||!hash(record.sourceSha256)) return {record:null,reason:'unreviewed-food-record'};
  if(record.basis?.amount!==100||record.basis.unit!=='g'||record.basis.portion!=='edible') return {record:null,reason:'food-nutrient-basis-mismatch'};
  return {record,reason:null};
}
function inventoryReview(basis,mappings) {
  const reviews=Array.isArray(mappings.recipeReviews)?mappings.recipeReviews:[];
  const current=reviews.filter((entry)=>String(entry.sourceRecipeId)===basis.sourceRecipeId&&entry.sourceContentHash===basis.sourceContentHash);
  if(current.length!==1) return {value:null,reason:current.length?'ambiguous-ingredient-inventory-review':'ingredient-inventory-review-missing'};
  const entry=current[0],ordinals=basis.ingredients.map((ingredient)=>ingredient.ordinal).sort((a,b)=>a-b);
  if(!reviewed(entry)||entry.complete!==true||entry.stepIngredientsChecked!==true||entry.sourceURL!==basis.sourceURL||entry.sourceSha256!==basis.sourceContentHash||!Array.isArray(entry.ingredientOrdinals)||entry.ingredientOrdinals.length!==ordinals.length||canonicalJson(entry.ingredientOrdinals.slice().sort((a,b)=>a-b))!==canonicalJson(ordinals)) return {value:null,reason:'ingredient-inventory-review-mismatch'};
  const exclusions=entry.exclusions??[];
  if(!Array.isArray(exclusions)||exclusions.some((item)=>!item||!text(item.ingredientLabel)||!text(item.disclosure)||basis.ingredients.some((ingredient)=>(ingredient.ingredient??ingredient.label)===item.ingredientLabel)||!Array.isArray(item.stepOrdinals)||!item.stepOrdinals.length||new Set(item.stepOrdinals).size!==item.stepOrdinals.length||item.stepOrdinals.some((ordinal)=>!basis.stepOrdinals.includes(ordinal)))) return {value:null,reason:'ingredient-inventory-exclusion-invalid'};
  const scopedExclusions=exclusions.map((item)=>({ingredientLabel:item.ingredientLabel,stepOrdinals:item.stepOrdinals.slice().sort((a,b)=>a-b),disclosure:item.disclosure}));
  return {value:{...review(entry),sourceRecipeId:basis.sourceRecipeId,sourceContentHash:basis.sourceContentHash,sourceURL:entry.sourceURL,sourceSha256:entry.sourceSha256,complete:true,stepIngredientsChecked:true,ingredientOrdinals:ordinals,exclusions:scopedExclusions},reason:null};
}
function calculationScopeFor(inventory) {
  const excludedAccompaniments=inventory.value?.exclusions??[];
  return {disclosures:[...new Set(excludedAccompaniments.map((item)=>item.disclosure))],excludedAccompaniments};
}
function mappingFor(ingredient,basis,mappings,records) {
  const sameOrdinal=mappings.filter((mapping)=>String(mapping.sourceRecipeId)===basis.sourceRecipeId&&mapping.ingredientOrdinal===ingredient.ordinal);
  const current=sameOrdinal.filter((mapping)=>mapping.sourceContentHash===basis.sourceContentHash);
  if(current.length!==1) return {mapping:null,record:null,reason:current.length?'ambiguous-ingredient-mapping':sameOrdinal.length?'source-hash-mismatch':'unmapped-ingredient'};
  const mapping=current[0];
  if(!reviewed(mapping)||mapping.matchType!=='exact') return {mapping:null,record:null,reason:'unreviewed-or-inexact-mapping'};
  if(mapping.ingredientLabel!==(ingredient.ingredient??ingredient.label)||mapping.quantityText!==(ingredient.quantity??null)) return {mapping:null,record:null,reason:'source-ingredient-mismatch'};
  const evidence=mapping.quantityEvidence;
  if(!evidence||!https(evidence.sourceURL)||!hash(evidence.sourceSha256)||!['source-quantity','reviewed-measurement'].includes(evidence.method)) return {mapping:null,record:null,reason:'quantity-evidence-missing'};
  if(evidence.method==='source-quantity'&&(evidence.sourceURL!==basis.sourceURL||evidence.sourceSha256!==basis.sourceContentHash)) return {mapping:null,record:null,reason:'quantity-evidence-mismatch'};
  const result=recordFor(mapping,records);
  return {mapping:result.record?mapping:null,record:result.record,reason:result.reason};
}
function measuredGrams(mapping,ingredient) {
  if(!positive(mapping?.grams)) return null;
  const evidence=mapping.quantityEvidence;
  if(evidence.method==='reviewed-measurement') return evidence.grams===mapping.grams?mapping.grams:null;
  const amount=explicitSourceAmount(ingredient.quantity);
  return amount?.unit==='g'&&amount.amount===mapping.grams?mapping.grams:null;
}
function purchaseAmount(mapping,ingredient) {
  if(!mapping) return null;
  const supplied=mapping.purchaseAmount;
  const amount=supplied??(positive(mapping.grams)?{amount:mapping.grams,unit:'g'}:null);
  if(!amount||!positive(amount.amount)||!['g','ml'].includes(amount.unit)) return null;
  const expected=mapping.quantityEvidence.method==='source-quantity'?explicitSourceAmount(ingredient.quantity):mapping.quantityEvidence.purchaseAmount;
  return expected?.amount===amount.amount&&expected?.unit===amount.unit?{amount:amount.amount,unit:amount.unit}:null;
}
function nutrient(value) {
  const status=value?.status??'missing';
  const origin=text(value?.origin)?value.origin:null;
  const numeric=origin&&((status==='numeric'&&typeof value.value==='number'&&Number.isFinite(value.value)&&value.value>=0)||(status==='logical-zero'&&value.value===0));
  return {status:numeric?status:['missing','trace'].includes(status)?status:'invalid',value:numeric?value.value:null,origin,
    ...(status==='trace'&&typeof value?.upperBound==='number'&&Number.isFinite(value.upperBound)&&value.upperBound>=0?{upperBound:value.upperBound}:{}),
  };
}
function lineFor(ingredient,basis,mapping,record,reason) {
  return {
    sourceRecipeId:basis.sourceRecipeId,sourceContentHash:basis.sourceContentHash,recipeSourceURL:basis.sourceURL,
    ingredientOrdinal:ingredient.ordinal,ingredientLabel:ingredient.ingredient??ingredient.label,quantityText:ingredient.quantity??null,
    mappingStatus:reason?'unresolved':mapping?.matchType??'exact',reason:reason??null,
    ...(mapping?{mappingReview:review(mapping),quantityEvidence:{...mapping.quantityEvidence},grams:mapping.grams??null}:{}),
    ...(record?{foodId:record.foodId,foodVersion:record.version,preparation:record.preparation,foodSourceURL:record.sourceURL,foodSourceSha256:record.sourceSha256,foodBasis:{...record.basis},foodReview:review(record)}:{}),
  };
}
function sealed(value) { return {...value,calculationSha256:digest(value)}; }
function coverageFor(basis,inventory,lineage,estimated=false) {
  const resolved=(line)=>!line.reason&&(estimated?Boolean(line.gramsRange):positive(line.grams))&&NUTRIENTS.every((key)=>estimated?Boolean(line.nutrients[key]?.range):line.nutrients[key]?.value!==null);
  return {coverage:{resolvedIngredientCount:lineage.filter(resolved).length,totalIngredientCount:basis.ingredients.length+basis.unlistedIngredients.length,inventoryReviewed:Boolean(inventory.value)},
    missingIngredients:lineage.filter((line)=>!resolved(line)).map((line)=>({ingredientOrdinal:line.ingredientOrdinal,ingredientLabel:line.ingredientLabel,reason:line.reason??'nutrient-value-missing'})),
  };
}
function componentsFor(basis,mappings,records,lineage) {
  const components=basis.ingredients.map((ingredient)=>{
    const found=basis.invalidIngredients?{mapping:null,record:null}:estimatedMappingFor(ingredient,basis,mappings,records);
    const line=lineage.find((entry)=>entry.ingredientOrdinal===ingredient.ordinal);
    const grams=found.record&&typeof line?.grams==='number'&&Number.isFinite(line.grams)&&line.grams>=0?line.grams:null;
    const gramsRange=grams===null?null:line.gramsRange?{min:line.gramsRange.min,max:line.gramsRange.max}:{min:grams,max:grams};
    const values=Object.fromEntries(NUTRIENTS.map((key)=>{
      const raw=found.record?.nutrients?.[key],known=nutrient(raw);
      if(known.value!==null) return [key,{value:known.value,range:{min:known.value,max:known.value}}];
      const range=bounded(raw);
      const reviewedRange=raw?.status==='range'&&range&&text(raw.origin)&&text(raw.rangeBasis)&&reviewed(raw)&&https(raw.sourceURL)&&raw.sourceSha256===found.record?.sourceSha256;
      return [key,reviewedRange?{value:midpoint(range),range:{min:range.min,max:range.max}}:{value:null,range:null}];
    }));
    return {ingredientOrdinal:ingredient.ordinal,ingredientLabel:ingredient.ingredient??ingredient.label,quantityText:ingredient.quantity??null,grams,gramsRange,
      per100g:Object.fromEntries(NUTRIENTS.map((key)=>[key,values[key].value])),per100gRange:Object.fromEntries(NUTRIENTS.map((key)=>[key,values[key].range])),foodMatchType:found.mapping?.matchType??null,
    };
  });
  for(const ingredientLabel of basis.unlistedIngredients) components.push({ingredientOrdinal:null,ingredientLabel,quantityText:null,grams:null,gramsRange:null,per100g:Object.fromEntries(NUTRIENTS.map((key)=>[key,null])),per100gRange:Object.fromEntries(NUTRIENTS.map((key)=>[key,null])),foodMatchType:null});
  return components;
}

export function calculateRecipeNutrition({recipe,foodCatalog,mappings}) {
  const records=catalog(foodCatalog,'records'),links=catalog(mappings,'mappings'),basis=recipeBasis(recipe);
  const inventory=inventoryReview(basis,mappings);
  const knownTotals=Object.fromEntries(NUTRIENTS.map((key)=>[key,0]));
  const counts=Object.fromEntries(NUTRIENTS.map((key)=>[key,0]));
  const missingIngredientOrdinals=[],missingNutrients=[],issues=basis.issues.slice(),lineage=[];
  if(!basis.sourceServings) issues.push({ingredientOrdinal:null,reason:'source-servings-unknown'});
  if(inventory.reason) issues.push({ingredientOrdinal:null,reason:inventory.reason});
  for(const ingredient of basis.ingredients) {
    const found=basis.invalidIngredients?{mapping:null,record:null,reason:'invalid-source-ingredients'}:mappingFor(ingredient,basis,links,records);
    const grams=measuredGrams(found.mapping,ingredient);
    const reason=found.reason??(!grams?'ingredient-grams-unknown':null);
    const line=lineFor(ingredient,basis,found.mapping,found.record,reason);
    line.grams=grams;
    line.nutrients=Object.fromEntries(NUTRIENTS.map((key)=>[key,nutrient(found.record?.nutrients?.[key])]));
    lineage.push(line);
    if(reason) {
      missingIngredientOrdinals.push(ingredient.ordinal);issues.push({ingredientOrdinal:ingredient.ordinal,reason});continue;
    }
    for(const key of NUTRIENTS) {
      const measurement=line.nutrients[key];
      if(measurement.value===null) missingNutrients.push({ingredientOrdinal:ingredient.ordinal,nutrient:key,status:measurement.status});
      else {
        const next=knownTotals[key]+scaledNutrient(grams,measurement.value);
        if(!Number.isFinite(next)) {missingNutrients.push({ingredientOrdinal:ingredient.ordinal,nutrient:key,status:'arithmetic-invalid'});line.reason??='nutrient-arithmetic-invalid';}
        else {knownTotals[key]=next;counts[key]+=1;}
      }
    }
  }
  for(const key of NUTRIENTS) knownTotals[key]=counts[key]?rounded(knownTotals[key]):null;
  for(const ingredientLabel of basis.unlistedIngredients) lineage.push({sourceRecipeId:basis.sourceRecipeId,sourceContentHash:basis.sourceContentHash,recipeSourceURL:basis.sourceURL,ingredientOrdinal:null,ingredientLabel,quantityText:null,mappingStatus:'unresolved',reason:'unlisted-or-unquantified-action-ingredient',grams:null,nutrients:Object.fromEntries(NUTRIENTS.map((key)=>[key,nutrient(null)]))});
  const complete=basis.ingredients.length>0&&!issues.length&&!missingNutrients.length&&NUTRIENTS.every((key)=>counts[key]===basis.ingredients.length);
  return sealed({schemaVersion:1,calculationVersion:CALCULATION_VERSION,source:'reviewed-food-record-calculation-v1',basis:'ingredient-inputs',
    sourceRecipeId:basis.sourceRecipeId,sourceContentHash:basis.sourceContentHash,sourceURL:basis.sourceURL,sourceServings:basis.sourceServings,
    status:complete?'complete':Object.values(counts).some((count)=>count>0)?'partial':'unknown',knownTotals,
    perServing:complete?Object.fromEntries(NUTRIENTS.map((key)=>[key,rounded(knownTotals[key]/basis.sourceServings)])):null,
    inventoryReview:inventory.value,calculationScope:calculationScopeFor(inventory),missingIngredientOrdinals,missingNutrients,issues,lineage,components:componentsFor(basis,links,records,lineage),...coverageFor(basis,inventory,lineage),
  });
}

function bounded(value,allowZero=true) {
  return value&&['central','min','max'].every((key)=>typeof value[key]==='number'&&Number.isFinite(value[key])&&value[key]>=0)
    &&value.min<=value.central&&value.central<=value.max&&(allowZero||value.central>0)?{central:value.central,min:value.min,max:value.max}:null;
}
function sourceCount(quantity,unitLabel) {
  if(!text(unitLabel)) return null;
  const escaped=unitLabel.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const match=new RegExp('^\\s*(\\d+(?:\\.\\d+)?)(?:\\s*/\\s*(\\d+(?:\\.\\d+)?))?\\s*'+escaped+'\\s*$','u').exec(String(quantity??''));
  const amount=match?Number(match[1])/(match[2]?Number(match[2]):1):null;
  return positive(amount)?amount:null;
}
function scenarioBody(value) {
  return {sourceRecipeId:value.sourceRecipeId,sourceContentHash:value.sourceContentHash,ingredientOrdinal:value.ingredientOrdinal,ingredientLabel:value.ingredientLabel,quantityText:value.quantityText,nutrient:value.nutrient,label:value.label,edibleGrams:value.edibleGrams??null,valuesPer100g:value.valuesPer100g??null};
}
function approvedScenario(value,ingredient,basis,key=null) {
  return value?.authorized===true&&text(value.providedBy)&&date(value.providedAt)&&text(value.label)&&hash(value.sourceSha256)
    &&value.sourceRecipeId===basis.sourceRecipeId&&value.sourceContentHash===basis.sourceContentHash&&value.ingredientOrdinal===ingredient.ordinal
    &&value.ingredientLabel===(ingredient.ingredient??ingredient.label)&&value.quantityText===(ingredient.quantity??null)&&value.nutrient===key
    &&digest(scenarioBody(value))===value.sourceSha256;
}
function assumptionFor(ingredient,mapping,kind,overrides={}) {
  return {ingredientOrdinal:ingredient.ordinal,ingredientLabel:ingredient.ingredient??ingredient.label,quantityText:ingredient.quantity??null,
    kind,method:null,basis:null,sourceURL:null,sourceSha256:null,referenceName:null,grams:null,nutrient:null,valuesPer100g:null,
    sourceAmount:null,sourceUnitLabel:null,referenceAmount:null,referenceUnitLabel:null,
    matchType:mapping.matchType,foodId:mapping.foodId,foodVersion:mapping.foodVersion,foodSourceSha256:mapping.foodSourceSha256,preparation:mapping.preparation,
    foodProxyBasis:mapping.matchType==='equivalent'?mapping.equivalence?.basis??null:null,...overrides,
  };
}
function estimatedMappingFor(ingredient,basis,mappings,records) {
  const sameOrdinal=mappings.filter((mapping)=>String(mapping.sourceRecipeId)===basis.sourceRecipeId&&mapping.ingredientOrdinal===ingredient.ordinal);
  const current=sameOrdinal.filter((mapping)=>mapping.sourceContentHash===basis.sourceContentHash);
  if(current.length!==1) return {mapping:null,record:null,reason:current.length?'ambiguous-ingredient-mapping':sameOrdinal.length?'source-hash-mismatch':'unmapped-ingredient'};
  const mapping=current[0];
  if(!reviewed(mapping)||!['exact','equivalent'].includes(mapping.matchType)) return {mapping:null,record:null,reason:'unreviewed-or-inexact-mapping'};
  if(mapping.ingredientLabel!==(ingredient.ingredient??ingredient.label)||mapping.quantityText!==(ingredient.quantity??null)) return {mapping:null,record:null,reason:'source-ingredient-mismatch'};
  const found=recordFor(mapping,records);
  if(!found.record) return {mapping:null,record:null,reason:found.reason};
  if(mapping.matchType==='equivalent') {
    const equivalence=mapping.equivalence;
    if(!reviewed(equivalence)||!text(equivalence.basis)||!text(equivalence.variationNote)||!https(equivalence.sourceURL)||equivalence.sourceSha256!==found.record.sourceSha256) return {mapping:null,record:null,reason:'food-equivalence-evidence-missing'};
  }
  return {mapping,record:found.record,reason:null};
}
function estimatedGrams(ingredient,basis,mapping) {
  const evidence=mapping.quantityEvidence;
  if(evidence&&https(evidence.sourceURL)&&hash(evidence.sourceSha256)&&['source-quantity','reviewed-measurement'].includes(evidence.method)
    &&(evidence.method!=='source-quantity'||(evidence.sourceURL===basis.sourceURL&&evidence.sourceSha256===basis.sourceContentHash))) {
    const grams=measuredGrams(mapping,ingredient);
    if(positive(grams)) return {range:{central:grams,min:grams,max:grams},assumption:null,reason:null};
  }
  if(mapping.quantityConversion) {
    const conversion=mapping.quantityConversion,range=bounded(conversion.edibleGrams,false);
    const published=conversion.kind==='published-recipe-scenario';
    const sourceKindValid=conversion.kind==='official-reference'||(published&&https(conversion.sourceURL)&&PUBLISHED_SCENARIO_SOURCE_HOSTS.has(new URL(conversion.sourceURL).hostname)&&conversion.pointScenario===true&&Array.isArray(conversion.unquantifiedUncertainty)&&conversion.unquantifiedUncertainty.length>0&&conversion.unquantifiedUncertainty.every(text)&&range&&range.min===range.central&&range.max===range.central);
    const valid=sourceKindValid&&reviewed(conversion)&&text(conversion.referenceName)&&text(conversion.basis)&&text(conversion.rangeBasis)
      &&https(conversion.sourceURL)&&hash(conversion.sourceSha256)&&conversion.ingredientLabel===(ingredient.ingredient??ingredient.label)
      &&['foodId','foodVersion','foodSourceSha256','preparation'].every((key)=>conversion[key]===mapping[key])
      &&positive(conversion.sourceAmount)&&sourceCount(ingredient.quantity,conversion.sourceUnitLabel)===conversion.sourceAmount
      &&positive(conversion.referenceAmount)&&text(conversion.referenceUnitLabel)&&range;
    if(!valid) return {range:null,assumption:null,reason:'official-quantity-conversion-invalid'};
    const ratio=conversion.sourceAmount/conversion.referenceAmount;
    const scaled=bounded(Object.fromEntries(['central','min','max'].map((key)=>[key,range[key]*ratio])),false);
    if(!scaled) return {range:null,assumption:null,reason:'official-quantity-conversion-invalid'};
    return {range:scaled,reason:null,assumption:assumptionFor(ingredient,mapping,published?'published-recipe-quantity-scenario':'official-quantity-conversion',{method:conversion.kind,basis:conversion.basis+'; '+conversion.rangeBasis,sourceURL:conversion.sourceURL,sourceSha256:conversion.sourceSha256,referenceName:conversion.referenceName,grams:scaled,sourceAmount:conversion.sourceAmount,sourceUnitLabel:conversion.sourceUnitLabel,referenceAmount:conversion.referenceAmount,referenceUnitLabel:conversion.referenceUnitLabel})};
  }
  const scenario=mapping.userQuantityScenario,range=bounded(scenario?.edibleGrams);
  if(scenario) {
    if(!approvedScenario(scenario,ingredient,basis)||!range) return {range:null,assumption:null,reason:'user-quantity-scenario-invalid'};
    return {range,reason:null,assumption:assumptionFor(ingredient,mapping,'user-quantity-scenario',{method:'user-scenario',basis:scenario.label,sourceSha256:scenario.sourceSha256,referenceName:'Explicit user scenario',grams:range})};
  }
  return {range:null,assumption:null,reason:'ingredient-grams-unknown'};
}
function estimatedNutrient(ingredient,basis,mapping,record,key) {
  const raw=record.nutrients?.[key],known=nutrient(raw);
  if(known.value!==null) return {measurement:{...known,range:{central:known.value,min:known.value,max:known.value}},assumption:null};
  const range=bounded(raw);
  if(raw?.status==='range'&&range&&text(raw.origin)&&text(raw.rangeBasis)&&reviewed(raw)&&https(raw.sourceURL)&&raw.sourceSha256===record.sourceSha256) {
    return {measurement:{status:'range',value:null,origin:raw.origin,range},assumption:assumptionFor(ingredient,mapping,'source-nutrient-range',{method:'reviewed-source-range',basis:raw.rangeBasis,sourceURL:raw.sourceURL,sourceSha256:raw.sourceSha256,referenceName:raw.origin,nutrient:key,valuesPer100g:range})};
  }
  const scenario=mapping.nutrientScenarios?.[key],userRange=bounded(scenario?.valuesPer100g);
  if(scenario&&approvedScenario(scenario,ingredient,basis,key)&&userRange) return {measurement:{status:'user-scenario',value:null,origin:scenario.label,range:userRange},assumption:assumptionFor(ingredient,mapping,'user-nutrient-scenario',{method:'user-scenario',basis:scenario.label,sourceSha256:scenario.sourceSha256,referenceName:'Explicit user scenario',nutrient:key,valuesPer100g:userRange})};
  return {measurement:{...known,range:null},assumption:null};
}

export function calculateEstimatedRecipeNutrition(options) {
  const strict=calculateRecipeNutrition(options);
  if(strict.status==='complete') return strict;
  const {recipe,foodCatalog,mappings}=options;
  const records=catalog(foodCatalog,'records'),links=catalog(mappings,'mappings'),basis=recipeBasis(recipe),inventory=inventoryReview(basis,mappings);
  const totals=Object.fromEntries(NUTRIENTS.map((key)=>[key,{central:0,min:0,max:0}])),counts=Object.fromEntries(NUTRIENTS.map((key)=>[key,0]));
  const lineage=[],assumptions=[],unquantifiedUncertainty=[],issues=basis.issues.slice(),missingIngredientOrdinals=[],missingNutrients=[];
  if(!basis.sourceServings) issues.push({ingredientOrdinal:null,reason:'source-servings-unknown'});
  if(inventory.reason) issues.push({ingredientOrdinal:null,reason:inventory.reason});
  for(const ingredient of basis.ingredients) {
    const found=basis.invalidIngredients?{mapping:null,record:null,reason:'invalid-source-ingredients'}:estimatedMappingFor(ingredient,basis,links,records);
    const grams=found.mapping?estimatedGrams(ingredient,basis,found.mapping):{range:null,assumption:null,reason:found.reason};
    const reason=found.reason??grams.reason,line=lineFor(ingredient,basis,found.mapping,found.record,reason);
    line.grams=grams.range?.central??null;line.gramsRange=grams.range;line.nutrients={};
    if(grams.assumption) {
      assumptions.push(grams.assumption);
      if(['official-quantity-conversion','published-recipe-quantity-scenario'].includes(grams.assumption.kind)) {
        line.quantityConversionReview={...review(found.mapping.quantityConversion),sourceURL:found.mapping.quantityConversion.sourceURL,sourceSha256:found.mapping.quantityConversion.sourceSha256};
        const descriptions=grams.assumption.kind==='published-recipe-quantity-scenario'?found.mapping.quantityConversion.unquantifiedUncertainty:['Actual product size, spoon filling, density or preparation may differ from the named reference beyond supplied scenarios.'];
        for(const description of descriptions) unquantifiedUncertainty.push({ingredientOrdinal:ingredient.ordinal,ingredientLabel:ingredient.ingredient??ingredient.label,kind:grams.assumption.kind==='published-recipe-quantity-scenario'?'published-recipe-portion-variation':'reference-portion-variation',description});
      } else line.quantityScenarioAuthorization={authorized:true,providedBy:found.mapping.userQuantityScenario.providedBy,providedAt:found.mapping.userQuantityScenario.providedAt,sourceSha256:found.mapping.userQuantityScenario.sourceSha256};
    }
    if(found.mapping?.matchType==='equivalent') {
      const equivalence=found.mapping.equivalence;
      line.foodEquivalenceReview={...review(equivalence),sourceURL:equivalence.sourceURL,sourceSha256:equivalence.sourceSha256};
      assumptions.push(assumptionFor(ingredient,found.mapping,'equivalent-food',{method:'reviewed-food-equivalence',basis:equivalence.basis,sourceURL:equivalence.sourceURL,sourceSha256:equivalence.sourceSha256,referenceName:'Reviewed food proxy',grams:grams.range}));
      unquantifiedUncertainty.push({ingredientOrdinal:ingredient.ordinal,ingredientLabel:ingredient.ingredient??ingredient.label,kind:'food-equivalence',description:equivalence.variationNote});
    }
    if(reason){missingIngredientOrdinals.push(ingredient.ordinal);issues.push({ingredientOrdinal:ingredient.ordinal,reason});}
    for(const key of NUTRIENTS) {
      const result=found.mapping?estimatedNutrient(ingredient,basis,found.mapping,found.record,key):{measurement:{...nutrient(null),range:null},assumption:null};
      line.nutrients[key]=result.measurement;
      if(result.assumption) {
        assumptions.push(result.assumption);
        if(result.assumption.kind==='source-nutrient-range') {
          const raw=found.record.nutrients[key];
          line.nutrientEvidenceReviews??={};line.nutrientEvidenceReviews[key]={...review(raw),sourceURL:raw.sourceURL,sourceSha256:raw.sourceSha256};
        } else {
          const scenario=found.mapping.nutrientScenarios[key];
          line.nutrientScenarioAuthorizations??={};line.nutrientScenarioAuthorizations[key]={authorized:true,providedBy:scenario.providedBy,providedAt:scenario.providedAt,sourceSha256:scenario.sourceSha256};
        }
      }
      if(reason) continue;
      if(!result.measurement.range) {missingNutrients.push({ingredientOrdinal:ingredient.ordinal,nutrient:key,status:result.measurement.status});continue;}
      const next=Object.fromEntries(['central','min','max'].map((bound)=>[bound,totals[key][bound]+scaledNutrient(grams.range[bound],result.measurement.range[bound])]));
      if(!bounded(next)) {missingNutrients.push({ingredientOrdinal:ingredient.ordinal,nutrient:key,status:'arithmetic-invalid'});line.reason??='nutrient-scenario-arithmetic-invalid';}
      else {totals[key]=next;counts[key]+=1;}
    }
    lineage.push(line);
  }
  for(const ingredientLabel of basis.unlistedIngredients) lineage.push({sourceRecipeId:basis.sourceRecipeId,sourceContentHash:basis.sourceContentHash,recipeSourceURL:basis.sourceURL,ingredientOrdinal:null,ingredientLabel,quantityText:null,mappingStatus:'unresolved',reason:'unlisted-or-unquantified-action-ingredient',grams:null,gramsRange:null,nutrients:Object.fromEntries(NUTRIENTS.map((key)=>[key,{...nutrient(null),range:null}]))});
  const arithmeticValid=NUTRIENTS.every((key)=>bounded(totals[key]));
  if(!arithmeticValid) issues.push({ingredientOrdinal:null,reason:'nutrient-scenario-arithmetic-invalid'});
  const covered=basis.ingredients.length>0&&!issues.length&&!missingNutrients.length&&NUTRIENTS.every((key)=>counts[key]===basis.ingredients.length);
  const estimated=covered&&assumptions.length>0;
  return sealed({schemaVersion:1,calculationVersion:ESTIMATED_CALCULATION_VERSION,source:'reviewed-estimated-food-calculation-v1',basis:'ingredient-inputs',sourceRecipeId:basis.sourceRecipeId,sourceContentHash:basis.sourceContentHash,sourceURL:basis.sourceURL,sourceServings:basis.sourceServings,
    status:estimated?'estimated':Object.values(counts).some((count)=>count>0)?'partial':'unknown',
    knownTotals:Object.fromEntries(NUTRIENTS.map((key)=>[key,counts[key]?rounded(midpoint(totals[key])):null])),
    perServing:estimated?Object.fromEntries(NUTRIENTS.map((key)=>[key,rounded(midpoint(totals[key])/basis.sourceServings)])):null,
    perServingRange:estimated?Object.fromEntries(NUTRIENTS.map((key)=>[key,{min:rounded(totals[key].min/basis.sourceServings),max:rounded(totals[key].max/basis.sourceServings)}])):null,
    centralScenarioPerServing:estimated?Object.fromEntries(NUTRIENTS.map((key)=>[key,rounded(totals[key].central/basis.sourceServings)])):null,
    uncertaintyKind:'reviewed-scenario-interval',uncertaintyNote:'Bounds describe only supplied quantity and nutrient scenarios; proxy-food variation and cooking yield/retention are not measured error bounds.',assumptionsComplete:estimated,assumptions,unquantifiedUncertainty,
    inventoryReview:inventory.value,calculationScope:calculationScopeFor(inventory),missingIngredientOrdinals,missingNutrients,issues,lineage,components:componentsFor(basis,links,records,lineage),...coverageFor(basis,inventory,lineage,true),
  });
}

function scope(context) {
  if(!context||!/^\d{5}$/.test(context.postcode??'')||!text(context.store)||!text(context.branchId)||!date(context.date)||!Number.isSafeInteger(context.targetServings)||context.targetServings<1||context.targetServings>1000) throw new Error('Basket requires exact postcode, store, branchId, date and integer targetServings (1–1000)');
  return {postcode:context.postcode,store:context.store,branchId:context.branchId,date:context.date,targetServings:context.targetServings};
}
function usablePrice(price,mapping,context,unit) {
  return reviewed(price)&&text(price.priceId)&&['offer','ordinary'].includes(price.kind)
    &&price.postcode===context.postcode&&price.store===context.store&&price.branchId===context.branchId
    &&date(price.validFrom)&&date(price.validThrough)&&price.validFrom<=context.date&&price.validThrough>=context.date
    &&price.foodId===mapping.foodId&&price.foodVersion===mapping.foodVersion&&price.preparation===mapping.preparation&&price.foodSourceSha256===mapping.foodSourceSha256
    &&https(price.sourceURL)&&hash(price.sourceSha256)&&price.currency==='EUR'&&money(price.priceCents)
    &&typeof price.conditions==='string'&&price.conditions.trim()===''
    &&(price.kind==='ordinary'||price.autoPriceEligible===true)
    &&positive(price.pack?.amount)&&price.pack.unit===unit;
}
// Decimal source/pack amounts and integer serving ratios remain rational until
// ceil, so 0.1 + 0.2 cannot accidentally require an extra 0.3-unit pack.
function fraction(value) {
  const [coefficient,exponentText='0']=String(value).toLowerCase().split('e');
  const [whole,decimal='']=coefficient.split('.');
  const exponent=Number(exponentText)-decimal.length;
  const numerator=BigInt(whole+decimal);
  return exponent>=0?{numerator:numerator*10n**BigInt(exponent),denominator:1n}:{numerator,denominator:10n**BigInt(-exponent)};
}
function addFraction(left,right) {
  return {numerator:left.numerator*right.denominator+right.numerator*left.denominator,denominator:left.denominator*right.denominator};
}
function packCountFor(group,packAmount,context,basis) {
  const pack=fraction(packAmount);
  const numerator=group.sourceAmount.numerator*BigInt(context.targetServings)*pack.denominator;
  const denominator=group.sourceAmount.denominator*BigInt(basis.sourceServings)*pack.numerator;
  const count=(numerator+denominator-1n)/denominator;
  return count<=BigInt(Number.MAX_SAFE_INTEGER)?Number(count):null;
}
export function calculateRecipeBasket({recipe,foodCatalog,mappings,priceCatalog,context}) {
  const records=catalog(foodCatalog,'records'),links=catalog(mappings,'mappings'),prices=catalog(priceCatalog,'prices');
  const basis=recipeBasis(recipe),location=scope(context),groups=new Map(),issues=basis.issues.slice(),lineage=[],unknownItemKeys=[],quantityCheckKeys=[];
  const inventory=inventoryReview(basis,mappings);
  const ratio=basis.sourceServings?location.targetServings/basis.sourceServings:null;
  if(!ratio) issues.push({ingredientOrdinal:null,reason:'source-servings-unknown'});
  if(inventory.reason){issues.push({ingredientOrdinal:null,reason:inventory.reason});unknownItemKeys.push('recipe-inventory');quantityCheckKeys.push('recipe-inventory');}
  for(const ingredientLabel of basis.unlistedIngredients) {
    const key='action-ingredient-'+encodeURIComponent(ingredientLabel);unknownItemKeys.push(key);quantityCheckKeys.push(key);
    lineage.push({sourceRecipeId:basis.sourceRecipeId,sourceContentHash:basis.sourceContentHash,recipeSourceURL:basis.sourceURL,ingredientOrdinal:null,ingredientLabel,quantityText:null,mappingStatus:'unresolved',reason:'unlisted-or-unquantified-action-ingredient',purchaseAmount:null});
  }
  for(const ingredient of basis.ingredients) {
    const found=basis.invalidIngredients?{mapping:null,record:null,reason:'invalid-source-ingredients'}:mappingFor(ingredient,basis,links,records);
    const amount=purchaseAmount(found.mapping,ingredient);
    const reason=found.reason??(!amount||!ratio?'purchase-quantity-unknown':null);
    const line=lineFor(ingredient,basis,found.mapping,found.record,reason);
    line.purchaseAmount=amount;lineage.push(line);
    if(reason) {
      const key=`ingredient-${ingredient.ordinal}`;unknownItemKeys.push(key);quantityCheckKeys.push(key);issues.push({ingredientOrdinal:ingredient.ordinal,reason});continue;
    }
    const key=[found.mapping.foodId,found.mapping.foodVersion,found.mapping.foodSourceSha256,found.mapping.preparation,amount.unit].join('|');
    if(!groups.has(key)) groups.set(key,{key,mapping:found.mapping,unit:amount.unit,amount:0,sourceAmount:{numerator:0n,denominator:1n},ingredientOrdinals:[]});
    const group=groups.get(key);group.amount+=amount.amount*ratio;group.sourceAmount=addFraction(group.sourceAmount,fraction(amount.amount));group.ingredientOrdinals.push(ingredient.ordinal);
  }
  let knownSubtotalCents=0;
  const items=[];
  for(const group of groups.values()) {
    const eligible=prices.filter((price)=>usablePrice(price,group.mapping,location,group.unit)).map((price)=>({price,packCount:packCountFor(group,price.pack.amount,location,basis)}))
      .filter(({price,packCount})=>Number.isSafeInteger(packCount)&&packCount>0&&money(packCount*price.priceCents))
      .sort((a,b)=>a.packCount*a.price.priceCents-b.packCount*b.price.priceCents||a.price.priceId.localeCompare(b.price.priceId));
    // Two records under one priceId are ambiguous, even if one would be cheaper.
    const chosen=eligible.find(({price})=>prices.filter((entry)=>entry.priceId===price.priceId).length===1);
    const item={key:group.key,foodId:group.mapping.foodId,foodVersion:group.mapping.foodVersion,foodSourceSha256:group.mapping.foodSourceSha256,preparation:group.mapping.preparation,ingredientOrdinals:group.ingredientOrdinals,requiredAmount:{amount:rounded(group.amount),unit:group.unit},priceId:null,pack:null,packCount:null,priceCents:null,subtotalCents:null};
    if(!chosen||!money(knownSubtotalCents+chosen.packCount*chosen.price.priceCents)) {
      unknownItemKeys.push(group.key);issues.push({ingredientOrdinals:group.ingredientOrdinals,reason:'verified-price-or-pack-missing'});
    } else {
      const {price,packCount}=chosen;
      Object.assign(item,{priceId:price.priceId,kind:price.kind,pack:{...price.pack},packCount,priceCents:price.priceCents,subtotalCents:packCount*price.priceCents,sourceURL:price.sourceURL,sourceSha256:price.sourceSha256,validFrom:price.validFrom,validThrough:price.validThrough,priceReview:review(price)});
      knownSubtotalCents+=item.subtotalCents;
    }
    items.push(item);
  }
  const complete=basis.ingredients.length>0&&!issues.length&&!unknownItemKeys.length&&!quantityCheckKeys.length&&items.length>0;
  return sealed({schemaVersion:1,calculationVersion:CALCULATION_VERSION,source:'reviewed-branch-price-calculation-v1',basis:'whole-packs-no-pantry',
    sourceRecipeId:basis.sourceRecipeId,sourceContentHash:basis.sourceContentHash,sourceURL:basis.sourceURL,sourceServings:basis.sourceServings,...location,
    sourceCoverage:complete?'complete':'incomplete',costStatus:complete?'complete':items.some((item)=>item.subtotalCents!==null)?'partial':'unknown',
    currency:'EUR',knownSubtotalCents,savingsStatus:'unavailable',inventoryReview:inventory.value,unknownItemKeys,quantityCheckKeys,items,issues,lineage,
  });
}

export function enrichMealRegistry({registry,recipes,foodCatalog,mappings,priceCatalog={schemaVersion:1,prices:[]},contexts=[],allowEstimatedNutrition=false}) {
  if(typeof allowEstimatedNutrition!=='boolean') throw new Error('allowEstimatedNutrition must be an explicit boolean');
  if(registry?.schemaVersion!==1||!registry.recipes||Array.isArray(registry.recipes)||!Array.isArray(recipes)||!Array.isArray(contexts)) throw new Error('Registry, recipes and contexts contract is invalid');
  const contextKeys=contexts.map((context)=>canonicalJson(scope(context)));
  if(new Set(contextKeys).size!==contextKeys.length) throw new Error('Duplicate basket context');
  const updated=structuredClone(registry),audit=[];
  const seen=new Set();
  for(const entry of Object.values(updated.recipes)) {delete entry.nutritionFacts;delete entry.basketFacts;delete entry.basketEvidenceByContext;}
  for(const recipe of recipes) {
    const basis=recipeBasis(recipe),identity=basis.sourceRecipeId+'|'+basis.sourceContentHash;
    if(seen.has(identity)) throw new Error('Duplicate current source recipe: '+identity);
    seen.add(identity);
    const nutritionFacts=(allowEstimatedNutrition?calculateEstimatedRecipeNutrition:calculateRecipeNutrition)({recipe,foodCatalog,mappings});
    const basketEvidenceByContext=contexts.map((context)=>calculateRecipeBasket({recipe,foodCatalog,mappings,priceCatalog,context}));
    const matching=Object.values(updated.recipes).filter((entry)=>entry.approved===true&&String(entry.sourceRecipeId)===basis.sourceRecipeId&&entry.sourceContentHash===basis.sourceContentHash);
    for(const entry of matching) {
      entry.nutritionFacts=nutritionFacts;
      const complete=basketEvidenceByContext.filter((facts)=>facts.sourceCoverage==='complete');
      if(complete.length) entry.basketEvidenceByContext=complete;
    }
    audit.push({sourceRecipeId:basis.sourceRecipeId,sourceContentHash:basis.sourceContentHash,registryMatches:matching.length,nutritionFacts,basketEvidenceByContext});
  }
  return {registry:updated,audit:sealed({schemaVersion:1,calculationVersion:CALCULATION_VERSION,estimatePolicy:allowEstimatedNutrition?'enabled-reviewed-scenarios':'strict-only',recipes:audit})};
}
