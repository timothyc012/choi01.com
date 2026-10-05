import {mealPolicy} from './meal-policy.mjs';
import {validRecipeSourceUrl} from './meal-snapshot-schema.mjs';
import {PUBLICATION_APPROVAL_METHOD,PUBLICATION_VALIDATION_VERSION,sourceContentHash,sourceOfferRisk,unquantifiedActionIngredients,representsUnknownActionIngredient} from './select-store-recipes.mjs';
import {publicNutritionFacts,validCalculationHash,nutrientFields,assumptionFields,componentFields} from './public-meal-calculations.mjs';
import {nutritionReadiness} from './meal-ranking-facts.mjs';

const digest=/^[a-f0-9]{64}$/;
const nonempty=(value)=>typeof value==='string'&&value.trim().length>0;
const clean=(value)=>String(value??'').normalize('NFKC').replace(/\s+/g,'');
const pick=(value,fields)=>Object.fromEntries(fields.filter(field=>value?.[field]!==undefined).map(field=>[field,value[field]]));
const positive=(value)=>Number.isFinite(value)&&value>0;
const close=(left,right)=>Number.isFinite(left)&&Number.isFinite(right)&&Math.abs(left-right)<1e-7*Math.max(1,Math.abs(left),Math.abs(right));
const korean=(value)=>nonempty(value)&&/[가-힣]/u.test(value)&&!/<[^>]+>/u.test(value);
const validRange=(range,central)=>Number.isFinite(range?.min)&&range.min>=0&&Number.isFinite(range.max)&&range.max>=range.min&&central>=range.min&&central<=range.max;
const idOf=(candidate)=>String(candidate?.sourceRecipeId??candidate?.recipeId??'');

function nutritionEvidenceReady(candidate,entry) {
  const facts=entry.nutritionFacts,id=String(candidate.sourceRecipeId??candidate.recipeId),hash=sourceContentHash(candidate);
  if(!validCalculationHash(facts,{sourceRecipeId:id,sourceContentHash:hash})||!['complete','estimated'].includes(facts.status)||facts.sourceURL!==candidate.sourceUrl||facts.basis!=='ingredient-inputs')return false;
  if(!Array.isArray(facts.issues)||facts.issues.length||['missingIngredients','missingIngredientOrdinals','missingNutrients'].some(key=>!Array.isArray(facts[key])||facts[key].length))return false;
  const review=facts.inventoryReview,ingredients=candidate.ingredients,ordinals=ingredients.map(item=>item.ordinal);
  if(review?.reviewed!==true||review.complete!==true||review.stepIngredientsChecked!==true||review.sourceRecipeId!==id||review.sourceContentHash!==hash||review.sourceSha256!==hash||review.sourceURL!==candidate.sourceUrl||JSON.stringify(review.ingredientOrdinals)!==JSON.stringify(ordinals))return false;
  if(facts.coverage?.inventoryReviewed!==true||facts.coverage.totalIngredientCount!==ingredients.length||facts.coverage.resolvedIngredientCount!==ingredients.length)return false;
  if(!Array.isArray(facts.components)||facts.components.length!==ingredients.length||facts.lineage.length!==ingredients.length||facts.components.some(value=>!value)||facts.lineage.some(value=>!value))return false;
  if(facts.sourceServings!==mealPolicy.recipeQuantities({sourceServingText:candidate.sourceServingText}).sourceServings)return false;
  if(facts.calculationScope&&(!Array.isArray(facts.calculationScope.disclosures)||!Array.isArray(facts.calculationScope.excludedAccompaniments)))return false;
  if(facts.status==='estimated'&&(!Array.isArray(facts.assumptions)||facts.assumptions.some(value=>!ordinals.includes(value.ingredientOrdinal)||clean(value.ingredientLabel)!==clean(ingredients[value.ingredientOrdinal-1].ingredient??ingredients[value.ingredientOrdinal-1].label)||!nonempty(value.kind)||!nonempty(value.method)||!nonempty(value.basis)||!/^https:\/\//.test(value.sourceURL||'')||!digest.test(value.sourceSha256||''))))return false;
  const totals=Object.fromEntries(nutrientFields.map(field=>[field,0])),minimums={...totals},maximums={...totals};
  for(const ingredient of ingredients) {
    const component=facts.components.find(item=>item.ingredientOrdinal===ingredient.ordinal),line=facts.lineage.find(item=>item.ingredientOrdinal===ingredient.ordinal);
    if(!component||!line||clean(component.ingredientLabel)!==clean(ingredient.ingredient??ingredient.label)||clean(line.ingredientLabel)!==clean(component.ingredientLabel)||clean(component.quantityText)!==clean(ingredient.quantity)||clean(line.quantityText)!==clean(ingredient.quantity))return false;
    if(!positive(component.grams)||!close(component.grams,line.grams)||!['exact','equivalent'].includes(component.foodMatchType)||component.foodMatchType!==line.mappingStatus||(facts.status==='complete'&&line.mappingStatus!=='exact'))return false;
    if(facts.status==='estimated'&&!validRange(component.gramsRange,component.grams))return false;
    if(line.sourceRecipeId!==id||line.sourceContentHash!==hash||line.recipeSourceURL!==candidate.sourceUrl||line.mappingReview?.reviewed!==true||line.foodReview?.reviewed!==true||!nonempty(line.foodId)||!nonempty(line.foodVersion)||!nonempty(line.preparation)||!/^https:\/\//.test(line.foodSourceURL||'')||!digest.test(line.foodSourceSha256||'')||line.foodBasis?.amount!==100||line.foodBasis.unit!=='g'||line.foodBasis.portion!=='edible')return false;
    for(const field of nutrientFields) {
      const value=component.per100g?.[field];
      if(!Number.isFinite(value)||value<0||!close(value,line.nutrients?.[field]?.value))return false;
      totals[field]+=component.grams*value/100;
      if(facts.status==='estimated'){
        const range=component.per100gRange?.[field];
        if(!validRange(range,value))return false;
        minimums[field]+=component.gramsRange.min*range.min/100;
        maximums[field]+=component.gramsRange.max*range.max/100;
      }
    }
  }
  if(!nutritionReadiness({nutritionFacts:publicNutritionFacts(facts,{sourceRecipeId:id,sourceContentHash:hash})}).ready)return false;
  const central=facts.status==='estimated'?facts.centralScenarioPerServing:facts.perServing;
  return nutrientFields.every(field=>close(central?.[field],totals[field]/facts.sourceServings)
    &&close(facts.knownTotals?.[field],facts.perServing[field]*facts.sourceServings)
    &&(facts.status!=='estimated'||(close(facts.perServingRange[field].min,minimums[field]/facts.sourceServings)&&close(facts.perServingRange[field].max,maximums[field]/facts.sourceServings))));
}

function publicFacts(facts,recipe) {
  const result=publicNutritionFacts(facts,recipe);
  for(const key of ['perServing','knownTotals','centralScenarioPerServing'])if(result[key])result[key]=pick(result[key],nutrientFields);
  if(result.perServingRange)result.perServingRange=Object.fromEntries(nutrientFields.map(field=>[field,pick(result.perServingRange[field],['min','max'])]));
  if(result.coverage)result.coverage=pick(result.coverage,['resolvedIngredientCount','totalIngredientCount','inventoryReviewed']);
  result.components=(result.components||[]).map(value=>({ ...pick(value,componentFields),per100g:pick(value.per100g,nutrientFields),...(value.gramsRange?{gramsRange:pick(value.gramsRange,['min','max'])}:{}),...(value.per100gRange?{per100gRange:Object.fromEntries(nutrientFields.map(field=>[field,pick(value.per100gRange[field],['min','max'])]))}:{})}));
  if(result.assumptions)result.assumptions=result.assumptions.map(value=>({...pick(value,assumptionFields),...(value.grams?{grams:pick(value.grams,['central','min','max'])}:{}),...(value.valuesPer100g?{valuesPer100g:pick(value.valuesPer100g,['central','min','max'])}:{})}));
  return result;
}

function sourceGate(candidate,entry) {
  if(!candidate||typeof candidate!=='object')return 'invalid-source-metadata';
  const id=idOf(candidate);
  if(!/^\d{1,20}$/.test(id)||!validRecipeSourceUrl(candidate.sourceUrl,id))return 'invalid-source-url';
  if(!nonempty(candidate.title)||!nonempty(candidate.author))return 'missing-source-metadata';
  if(!Array.isArray(candidate.ingredients)||candidate.ingredients.length<2||candidate.ingredients.some((item,index)=>!item||item.ordinal!==index+1||!nonempty(item.ingredient??item.label)))return 'incomplete-ingredients';
  if(!Array.isArray(candidate.steps)||candidate.steps.length<3||candidate.steps.some((step,index)=>!step||step.ordinal!==index+1||!nonempty(step.instruction)))return 'incomplete-steps';
  if(!mealPolicy.recipeAllowed(candidate))return 'retired-ingredient';
  if(entry?.approved!==true)return 'unapproved-paraphrase';
  if(entry.sourceContentHash!==sourceContentHash(candidate))return 'stale-source-hash';
  if(String(entry.sourceRecipeId)!==id)return 'registry-source-mismatch';
  if((entry.sourceUrl!==undefined&&entry.sourceUrl!==candidate.sourceUrl)||(entry.sourceURL!==undefined&&entry.sourceURL!==candidate.sourceUrl))return 'registry-source-url-mismatch';
  if(entry.approvalMethod!==PUBLICATION_APPROVAL_METHOD||entry.validationVersion!==PUBLICATION_VALIDATION_VERSION||!nonempty(entry.transformVersion))return 'unvalidated-editorial-transform';
  if(!korean(entry.title)||!Array.isArray(entry.detailIngredients)||entry.detailIngredients.length<2||entry.detailIngredients.some(value=>!korean(value))||!Array.isArray(entry.steps)||entry.steps.length<3||entry.steps.some(value=>!korean(value)))return 'incomplete-korean-paraphrase';
  if(unquantifiedActionIngredients(candidate).some(ingredient=>!representsUnknownActionIngredient(entry.detailIngredients,ingredient)))return 'unrepresented-action-ingredient';
  const risk=sourceOfferRisk(candidate,[],new Map());
  if(risk)return risk;
  return nutritionEvidenceReady(candidate,entry)?null:'nutrition-not-ready';
}

function publicDetail(candidate,entry) {
  const sourceRecipeId=String(candidate.sourceRecipeId??candidate.recipeId),sourceHash=sourceContentHash(candidate),profile=entry.recommendationProfile||{};
  const labels=candidate.ingredients.map(item=>item.ingredient??item.label);
  const meat=/^(?:돼지(?:고기)?\s*(?:목살|삼겹살|앞다리살|뒷다리살)?|삼겹살|목살|소고기|쇠고기|닭(?:고기|가슴살|다리살|안심)?|연어|새우|오리(?:고기)?|양고기)/u;
  const proteinLabels=labels.filter(label=>meat.test(label));
  const primaryIngredients=(proteinLabels.length?proteinLabels:labels.filter(label=>(profile.primaryIngredients||[]).some(primary=>clean(primary)===clean(label)))).map(clean);
  const recommendationProfile={primaryIngredients:[...new Set(primaryIngredients)].sort(),family:nonempty(profile.family)?profile.family:'other',method:nonempty(profile.method)?profile.method:'other',kind:mealPolicy.mealKind({title:entry.title,recommendationProfile:profile}),...(profile.filters?.includes('vegetarian')?{filters:['vegetarian']}:{})};
  const detail={schemaVersion:1,sourceRecipeId,sourceContentHash:sourceHash,sourceTitle:candidate.title,sourceUrl:candidate.sourceUrl,sourceAuthor:candidate.author,sourceServingText:candidate.sourceServingText,sourceTimeText:candidate.profile?.cookTimeText??candidate.sourceTimeText??null,rating:candidate.rating??null,ratingNumber:Number.isFinite(candidate.ratingNumber)?candidate.ratingNumber:null,reviewCount:Number.isInteger(candidate.reviewCount)?candidate.reviewCount:null,title:entry.title,detailIngredients:entry.detailIngredients.slice(),steps:entry.steps.slice(),recommendationProfile,transformVersion:entry.transformVersion};
  const quantities=mealPolicy.recipeQuantities(detail);
  Object.assign(detail,{sourceServings:quantities.sourceServings,requiredAmounts:quantities.requiredAmounts,nutritionFacts:publicFacts(entry.nutritionFacts,detail)});
  return detail;
}

/** Only the existing owner-reviewed transform registry can contribute to this catalog. */
export function buildNutritionGoalCatalog({candidateReport,registry}) {
  const entries=Object.entries(registry?.recipes||{}).filter(([key,entry])=>entry&&key===[entry.sourceRecipeId,entry.sourceContentHash,entry.transformVersion].join('|')).map(([,entry])=>entry);
  const candidates=Array.isArray(candidateReport?.candidates)?candidateReport.candidates:[],ids=new Map(),heldForReview=[],details=[],recipes=[];
  for(const candidate of candidates){const id=idOf(candidate);ids.set(id,(ids.get(id)||0)+1);}
  for(const id of [...ids.keys()].sort()) {
    const candidate=candidates.find(value=>idOf(value)===id);
    let hash=null;
    if(candidate&&Array.isArray(candidate.ingredients)&&candidate.ingredients.every(value=>value&&typeof value==='object')&&Array.isArray(candidate.steps)&&candidate.steps.every(value=>value&&typeof value==='object'))hash=sourceContentHash(candidate);
    const entry=entries.find(value=>String(value.sourceRecipeId)===id&&value.sourceContentHash===hash)||entries.find(value=>String(value.sourceRecipeId)===id);
    const reason=ids.get(id)>1?'duplicate-source-id':sourceGate(candidate,entry);
    if(reason){heldForReview.push({sourceRecipeId:id,reason});continue;}
    const detail=publicDetail(candidate,entry);details.push(detail);
    recipes.push({...pick(detail,['sourceRecipeId','sourceContentHash','title','sourceTimeText','sourceServings','requiredAmounts','detailIngredients','recommendationProfile','nutritionFacts']),saleLinked:false,automaticMealEligible:detail.recommendationProfile.kind==='main'});
  }
  return {catalog:{schemaVersion:1,catalogVersion:'nutrition-general-v1',scope:'nutrition-general',recipes},details,privateReview:{heldForReview,candidateCount:ids.size,publishedCount:recipes.length,automaticMealCount:recipes.filter(recipe=>recipe.automaticMealEligible).length}};
}
