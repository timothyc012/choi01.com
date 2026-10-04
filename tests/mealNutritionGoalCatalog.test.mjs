import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {canonicalJson} from '../scripts/lib/meal-snapshot-schema.mjs';
import {sourceContentHash} from '../scripts/lib/select-store-recipes.mjs';
import {buildNutritionGoalCatalog} from '../scripts/lib/nutrition-goal-catalog.mjs';

const sha=(value)=>crypto.createHash('sha256').update(canonicalJson(value)).digest('hex');
const sign=(facts)=>{delete facts.calculationSha256;facts.calculationSha256=sha(facts);return facts;};
function fixture({id='1001',status='complete',title='감자 볶음밥'}={}) {
  const candidate={sourceRecipeId:id,title,sourceUrl:'https://www.10000recipe.com/recipe/'+id,author:'원문 저자',sourceServingText:'2인분',profile:{cookTimeText:'20분'},ratingNumber:4.9,reviewCount:10,
    ingredients:[{ordinal:1,ingredient:'감자',quantity:'200g'},{ordinal:2,ingredient:'밥',quantity:'200g'}],
    steps:[{ordinal:1,instruction:'감자를 잘게 썬다.'},{ordinal:2,instruction:'밥과 감자를 볶는다.'},{ordinal:3,instruction:'접시에 담는다.'}]};
  const hash=sourceContentHash(candidate),values={kcal:100,proteinGrams:2,fiberGrams:1,sodiumMg:5};
  const facts={schemaVersion:1,status,source:'reviewed-food-calculation',basis:'ingredient-inputs',sourceRecipeId:id,sourceContentHash:hash,sourceURL:candidate.sourceUrl,sourceServings:2,
    perServing:{kcal:200,proteinGrams:4,fiberGrams:2,sodiumMg:10},knownTotals:{kcal:400,proteinGrams:8,fiberGrams:4,sodiumMg:20},issues:[],missingIngredients:[],missingIngredientOrdinals:[],missingNutrients:[],
    inventoryReview:{reviewed:true,complete:true,stepIngredientsChecked:true,sourceRecipeId:id,sourceContentHash:hash,sourceSha256:hash,sourceURL:candidate.sourceUrl,ingredientOrdinals:[1,2]},
    coverage:{resolvedIngredientCount:2,totalIngredientCount:2,inventoryReviewed:true},
    components:candidate.ingredients.map(item=>({ingredientOrdinal:item.ordinal,ingredientLabel:item.ingredient,quantityText:item.quantity,grams:200,per100g:{...values},foodMatchType:'exact'})),
    lineage:candidate.ingredients.map(item=>({sourceRecipeId:id,sourceContentHash:hash,recipeSourceURL:candidate.sourceUrl,ingredientOrdinal:item.ordinal,ingredientLabel:item.ingredient,quantityText:item.quantity,grams:200,mappingStatus:'exact',mappingReview:{reviewed:true},foodReview:{reviewed:true},foodId:'food-'+item.ordinal,foodVersion:'4.0',preparation:'cooked',foodSourceURL:'https://blsdb.de/download',foodSourceSha256:'f'.repeat(64),foodBasis:{amount:100,unit:'g',portion:'edible'},nutrients:Object.fromEntries(Object.entries(values).map(([key,value])=>[key,{status:'numeric',value}]))}))};
  if(status==='estimated'){
    Object.assign(facts,{assumptionsComplete:true,uncertaintyKind:'reviewed-scenario-interval',assumptions:[{ingredientOrdinal:1,ingredientLabel:'감자',quantityText:'200g',kind:'official-quantity-conversion',method:'official-reference',basis:'공식 분량 예시',sourceURL:'https://example.org/reference',sourceSha256:'a'.repeat(64)}],perServingRange:Object.fromEntries(Object.entries(facts.perServing).map(([key,value])=>[key,{min:value,max:value}])),centralScenarioPerServing:{...facts.perServing}});
    for(const component of facts.components)Object.assign(component,{gramsRange:{min:200,max:200},per100gRange:Object.fromEntries(Object.entries(values).map(([key,value])=>[key,{min:value,max:value}]))});
  }
  const entry={sourceRecipeId:id,sourceContentHash:hash,transformVersion:'ko-paraphrase-v1',approved:true,approvalMethod:'owner-authorized-editorial-transform',validationVersion:'source-facts-v2',title,detailIngredients:['감자 200g','밥 200g'],steps:['감자를 작게 썬다.','밥과 감자를 익힌다.','접시에 담아 낸다.'],recommendationProfile:{primaryIngredients:['감자'],family:'rice',method:'stir-fry',kind:'main'},nutritionFacts:sign(facts)};
  return {candidate,entry};
}
function build(items) {
  return buildNutritionGoalCatalog({candidateReport:{candidates:items.map(item=>item.candidate)},registry:{recipes:Object.fromEntries(items.map(({entry})=>[[entry.sourceRecipeId,entry.sourceContentHash,entry.transformVersion].join('|'),entry]))}});
}

test('complete and explicitly reviewed estimated nutrition become general goal recipes',()=>{
  const result=build([fixture(),fixture({id:'1002',status:'estimated'})]);
  assert.equal(result.catalog.scope,'nutrition-general');
  assert.equal(result.catalog.catalogVersion,'nutrition-general-v1');
  assert.equal(result.catalog.recipes.length,2);
  for(const recipe of result.catalog.recipes){assert.equal(recipe.saleLinked,false);assert.equal(recipe.automaticMealEligible,true);assert.equal(recipe.offerIds,undefined);}
  assert.equal(result.details[0].sourceUrl,'https://www.10000recipe.com/recipe/1001');
  assert.equal(result.details[0].sourceServings,2);
  assert.deepEqual(result.privateReview.heldForReview,[]);
});

test('unapproved, stale, wrong source URLs and empty Korean transforms stay private',()=>{
  for(const [mutate,reason] of [
    [item=>item.entry.approved=false,'unapproved-paraphrase'],
    [item=>item.candidate.title+=' 변경','stale-source-hash'],
    [item=>item.candidate.sourceUrl='https://www.10000recipe.com/recipe/999','invalid-source-url'],
    [item=>item.entry.sourceURL='https://www.10000recipe.com/recipe/999','registry-source-url-mismatch'],
    [item=>item.entry.steps[0]='','incomplete-korean-paraphrase'],
    [item=>item.entry.steps[0]='Raw source instruction','incomplete-korean-paraphrase'],
  ]){const item=fixture();mutate(item);const result=build([item]);assert.equal(result.catalog.recipes.length,0);assert.equal(result.privateReview.heldForReview[0].reason,reason);assert.equal(result.catalog.heldForReview,undefined);}
});

test('partial and unknown nutrient sums never enter the goal catalog',()=>{
  for(const status of ['partial','unknown']){const result=build([fixture({status})]);assert.equal(result.catalog.recipes.length,0);assert.equal(result.privateReview.heldForReview[0].reason,'nutrition-not-ready');}
});

test('whole source inventory, calculation hash and reviewed components are required',()=>{
  for(const mutate of [
    item=>item.entry.nutritionFacts.inventoryReview.complete=false,
    item=>item.entry.nutritionFacts.components.pop(),
    item=>item.entry.nutritionFacts.lineage[0].foodReview.reviewed=false,
    item=>item.entry.nutritionFacts.components[0].ingredientLabel='양파',
    item=>item.entry.nutritionFacts.components[0].per100g.kcal=999,
  ]){const item=fixture();mutate(item);sign(item.entry.nutritionFacts);assert.equal(build([item]).catalog.recipes.length,0);}
  const badHash=fixture();badHash.entry.nutritionFacts.calculationSha256='0'.repeat(64);assert.equal(build([badHash]).catalog.recipes.length,0);
  const wrongTotals=fixture();wrongTotals.entry.nutritionFacts.knownTotals.kcal=999;sign(wrongTotals.entry.nutritionFacts);assert.equal(build([wrongTotals]).catalog.recipes.length,0);
  const wrongRange=fixture({status:'estimated'});wrongRange.entry.nutritionFacts.perServingRange.kcal.max=999;sign(wrongRange.entry.nutritionFacts);assert.equal(build([wrongRange]).catalog.recipes.length,0);
});

test('duplicate source IDs fail closed instead of publishing ambiguous details',()=>{
  const result=build([fixture(),fixture()]);
  assert.equal(result.catalog.recipes.length,0);
  assert.equal(result.privateReview.heldForReview[0].reason,'duplicate-source-id');
});

test('malformed source and component entries fail closed without crashing compilation',()=>{
  assert.equal(buildNutritionGoalCatalog({candidateReport:{candidates:[null]},registry:{recipes:{invalid:null}}}).catalog.recipes.length,0);
  for(const field of ['components','lineage']){const item=fixture();item.entry.nutritionFacts[field][0]=null;sign(item.entry.nutritionFacts);assert.equal(build([item]).catalog.recipes.length,0);}
  for(const field of ['ingredients','steps']){const item=fixture();item.candidate[field][0]=null;assert.equal(build([item]).catalog.recipes.length,0);}
});

test('public details keep source facts and approved paraphrases while removing raw bodies and actors',()=>{
  const item=fixture({status:'estimated'});
  item.candidate.rawInstructions='private original';item.candidate.images=['private image'];item.entry.approvedBy='private owner';item.entry.rawBody='private source';
  item.entry.nutritionFacts.inventoryReview.reviewedBy='private reviewer';item.entry.nutritionFacts.assumptions[0].reviewedBy='private reviewer';item.entry.nutritionFacts.perServingRange.kcal.reviewedBy='private reviewer';sign(item.entry.nutritionFacts);
  const result=build([item]);const text=JSON.stringify(result.catalog)+JSON.stringify(result.details);
  assert.equal(result.details[0].sourceTitle,item.candidate.title);assert.equal(result.details[0].sourceAuthor,item.candidate.author);assert.deepEqual(result.details[0].steps,item.entry.steps);
  assert.ok(!text.includes('private'));assert.ok(!text.includes('approvedBy'));assert.ok(!text.includes('reviewedBy'));
});

test('ready side recipes have public details but cannot be auto selected for lunch or dinner',()=>{
  const item=fixture({title:'감자 샐러드'});item.entry.recommendationProfile.kind='side';
  const result=build([item]);assert.equal(result.catalog.recipes.length,1);assert.equal(result.details.length,1);assert.equal(result.catalog.recipes[0].automaticMealEligible,false);assert.equal(result.catalog.recipes[0].recommendationProfile.kind,'side');
});

test('general pork recipe uses the actual pork cuts rather than an incidental fruit discount profile',()=>{
  const item=fixture({title:'사과 채소 목살·삼겹살 수육'}),labels=['돼지고기 목살','돼지고기 삼겹살'];
  for(const [index,ingredient] of item.candidate.ingredients.entries())ingredient.ingredient=labels[index];
  item.candidate.steps=[{ordinal:1,instruction:'목살과 삼겹살을 손질한다.'},{ordinal:2,instruction:'돼지고기를 속까지 완전히 익힌다.'},{ordinal:3,instruction:'고기를 썰어 접시에 낸다.'}];
  const hash=sourceContentHash(item.candidate);item.entry.sourceContentHash=hash;item.entry.detailIngredients=labels.map(label=>label+' 200g');item.entry.recommendationProfile.primaryIngredients=['사과'];
  const facts=item.entry.nutritionFacts;facts.sourceContentHash=hash;facts.inventoryReview.sourceContentHash=hash;facts.inventoryReview.sourceSha256=hash;
  for(const field of ['components','lineage'])for(const [index,value] of facts[field].entries()){value.ingredientLabel=labels[index];if(field==='lineage')value.sourceContentHash=hash;}
  sign(facts);
  const result=build([item]);assert.equal(result.catalog.recipes.length,1);assert.deepEqual(result.catalog.recipes[0].recommendationProfile.primaryIngredients,['돼지고기목살','돼지고기삼겹살']);assert.equal(result.catalog.recipes[0].saleLinked,false);
  assert.deepEqual(item.entry.recommendationProfile.primaryIngredients,['사과']);
});
