import crypto from 'node:crypto';
import {canonicalJson} from './meal-snapshot-schema.mjs';

export const nutrientFields=['kcal','proteinGrams','fiberGrams','sodiumMg'];
export const assumptionFields=['ingredientOrdinal','ingredientLabel','quantityText','kind','method','basis','sourceURL','sourceSha256','referenceName','grams','nutrient','valuesPer100g','sourceAmount','sourceUnitLabel','referenceAmount','referenceUnitLabel','matchType','foodId','foodVersion','foodSourceSha256','preparation','foodProxyBasis'];
export const componentFields=['ingredientOrdinal','ingredientLabel','quantityText','grams','gramsRange','per100g','per100gRange','foodMatchType'];
const pick=(object,fields)=>Object.fromEntries(fields.filter(field=>object?.[field]!==undefined).map(field=>[field,object[field]]));
const nullablePick=(object,fields)=>object===null?null:pick(object,fields);
const nutrientRanges=(object)=>Object.fromEntries(nutrientFields.filter(field=>object?.[field]!==undefined).map(field=>[field,nullablePick(object[field],['min','max'])]));
export function validCalculationHash(facts,recipe) {
  if(!facts||facts.schemaVersion!==1||facts.sourceRecipeId!==recipe.sourceRecipeId||facts.sourceContentHash!==recipe.sourceContentHash||!Array.isArray(facts.lineage)||!Array.isArray(facts.issues))return false;
  const {calculationSha256,...body}=facts;
  return /^[a-f0-9]{64}$/.test(calculationSha256||'')&&calculationSha256===crypto.createHash('sha256').update(canonicalJson(body)).digest('hex');
}
export function publicNutritionFacts(facts,recipe) {
  if(!validCalculationHash(facts,recipe)||!['complete','estimated','partial','unknown'].includes(facts.status))return null;
  const result=pick(facts,['status','source','sourceServings','sourceRecipeId','sourceContentHash','basis','perServing','calculationSha256','knownTotals','coverage','missingIngredients']);
  if(facts.perServing!==undefined)result.perServing=nullablePick(facts.perServing,nutrientFields);
  if(facts.knownTotals!==undefined)result.knownTotals=nullablePick(facts.knownTotals,nutrientFields);
  if(facts.coverage)result.coverage=pick(facts.coverage,['resolvedIngredientCount','totalIngredientCount','inventoryReviewed']);
  if(facts.missingIngredients)result.missingIngredients=facts.missingIngredients.map(value=>pick(value,['ingredientOrdinal','ingredientLabel','reason']));
  if(facts.calculationScope)result.calculationScope={disclosures:facts.calculationScope.disclosures,excludedAccompaniments:facts.calculationScope.excludedAccompaniments.map(value=>pick(value,['ingredientLabel','stepOrdinals','disclosure']))};
  result.sources=[...new Map(facts.lineage.filter(line=>line.foodId).map(line=>[line.foodId+'|'+line.foodSourceSha256,{foodId:line.foodId,version:line.foodVersion,preparation:line.preparation,sourceURL:line.foodSourceURL,sourceSha256:line.foodSourceSha256}])).values()];
  if(facts.components) result.components=facts.components.map(component=>({...pick(component,componentFields),gramsRange:nullablePick(component.gramsRange,['min','max']),per100g:pick(component.per100g,nutrientFields),per100gRange:nutrientRanges(component.per100gRange)}));
  if(facts.status==='estimated') {
    Object.assign(result,pick(facts,['perServingRange','centralScenarioPerServing','uncertaintyKind','assumptionsComplete']));
    result.perServingRange=nutrientRanges(facts.perServingRange);
    if(facts.centralScenarioPerServing)result.centralScenarioPerServing=pick(facts.centralScenarioPerServing,nutrientFields);
    result.assumptions=(facts.assumptions||[]).map(assumption=>({...pick(assumption,assumptionFields),grams:nullablePick(assumption.grams,['central','min','max']),valuesPer100g:nullablePick(assumption.valuesPer100g,['central','min','max'])}));
    result.unquantifiedUncertainty=(facts.unquantifiedUncertainty||[]).map(value=>typeof value==='string'?value:pick(value,['ingredientOrdinal','ingredientLabel','kind','description']));
  }
  return result;
}
