import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import crypto from 'node:crypto';
import {canonicalJson} from '../scripts/lib/meal-snapshot-schema.mjs';
import {sourceContentHash} from '../scripts/lib/select-store-recipes.mjs';
import {calculateRecipeNutrition,calculateEstimatedRecipeNutrition,calculateRecipeBasket,enrichMealRegistry} from '../scripts/lib/recipe-calculations.mjs';

// Deliberately synthetic test facts. These are never a public nutrition/price catalog.
const review={reviewed:true,reviewedBy:'test-reviewer',reviewedAt:'2026-10-04'};
const numeric=(value)=>({status:'numeric',value,origin:'synthetic-test'});
const zero=()=>({status:'logical-zero',value:0,origin:'synthetic-test'});
function fixture() {
  const recipe={sourceRecipeId:'7',title:'양파와 소금',sourceUrl:'https://www.10000recipe.com/recipe/7',author:'test',sourceServingText:'2인분',ingredients:[{ordinal:1,ingredient:'양파',quantity:'100g'},{ordinal:2,ingredient:'소금',quantity:'5g'}],steps:[{ordinal:1,instruction:'섞는다.'}]};
  const sourceHash=sourceContentHash(recipe);
  const basis={amount:100,unit:'g',portion:'edible'};
  const records=[{...review,basis,foodId:'onion',version:'test-v1',preparation:'raw',sourceURL:'https://example.test/onion',sourceSha256:'a'.repeat(64),nutrients:{kcal:numeric(100),proteinGrams:numeric(2),fiberGrams:numeric(3),sodiumMg:numeric(10)}},{...review,basis,foodId:'salt',version:'test-v1',preparation:'raw',sourceURL:'https://example.test/salt',sourceSha256:'b'.repeat(64),nutrients:{kcal:zero(),proteinGrams:zero(),fiberGrams:zero(),sodiumMg:numeric(40000)}}];
  const mappings=recipe.ingredients.map((ingredient,index)=>({...review,sourceRecipeId:'7',sourceContentHash:sourceHash,ingredientOrdinal:ingredient.ordinal,ingredientLabel:ingredient.ingredient,quantityText:ingredient.quantity,foodId:records[index].foodId,foodVersion:records[index].version,foodSourceSha256:records[index].sourceSha256,preparation:'raw',matchType:'exact',grams:index===0?100:5,purchaseAmount:{amount:index===0?100:5,unit:'g'},quantityEvidence:{sourceURL:recipe.sourceUrl,sourceSha256:sourceHash,method:'source-quantity'}}));
  const context={postcode:'44369',store:'Netto',branchId:'branch-rahmer',date:'2026-10-05',targetServings:6};
  const prices=records.map((record,index)=>({...review,currency:'EUR',priceId:'price-'+record.foodId,kind:index===0?'offer':'ordinary',postcode:context.postcode,store:context.store,branchId:context.branchId,validFrom:'2026-10-05',validThrough:'2026-10-10',foodId:record.foodId,foodVersion:record.version,preparation:record.preparation,foodSourceSha256:record.sourceSha256,sourceURL:'https://example.test/flyer',sourceSha256:'c'.repeat(64),priceCents:index===0?199:59,pack:{amount:index===0?250:500,unit:'g'},conditions:'',autoPriceEligible:true}));
  const recipeReviews=[{...review,sourceRecipeId:'7',sourceContentHash:sourceHash,sourceURL:recipe.sourceUrl,sourceSha256:sourceHash,complete:true,stepIngredientsChecked:true,ingredientOrdinals:[1,2]}];
  return {recipe,foodCatalog:{schemaVersion:1,records},mappings:{schemaVersion:1,mappings,recipeReviews},priceCatalog:{schemaVersion:1,prices},context};
}
function updateReviewedHash(data) {
  const hash=sourceContentHash(data.recipe);
  for(const mapping of data.mappings.mappings){mapping.sourceContentHash=hash;if(mapping.quantityEvidence)mapping.quantityEvidence.sourceSha256=hash;}
  for(const inventory of data.mappings.recipeReviews){inventory.sourceContentHash=hash;inventory.sourceSha256=hash;inventory.ingredientOrdinals=data.recipe.ingredients.map(item=>item.ordinal);}
  return hash;
}
function conversionFixture() {
  const data=fixture();data.recipe.ingredients[0].quantity='1개';updateReviewedHash(data);
  const mapping=data.mappings.mappings[0];mapping.quantityText='1개';mapping.grams=null;mapping.purchaseAmount=null;delete mapping.quantityEvidence;
  mapping.quantityConversion={...review,kind:'official-reference',referenceName:'Synthetic reference fixture',sourceURL:'https://example.test/official-portion',sourceSha256:'e'.repeat(64),ingredientLabel:'양파',foodId:'onion',foodVersion:'test-v1',foodSourceSha256:'a'.repeat(64),preparation:'raw',sourceAmount:1,sourceUnitLabel:'개',referenceAmount:1,referenceUnitLabel:'medium-piece',edibleGrams:{central:110,min:70,max:150},basis:'Synthetic edible onion size reference',rangeBasis:'Synthetic small/medium/large scenarios'};
  return data;
}
function userScenario(data,ordinal,label,values,nutrient=null) {
  const ingredient=data.recipe.ingredients.find(item=>item.ordinal===ordinal);
  const body={sourceRecipeId:String(data.recipe.sourceRecipeId),sourceContentHash:sourceContentHash(data.recipe),ingredientOrdinal:ordinal,ingredientLabel:ingredient.ingredient,quantityText:ingredient.quantity??null,nutrient,label,edibleGrams:values.edibleGrams??null,valuesPer100g:values.valuesPer100g??null};
  return {...body,authorized:true,providedBy:'test-owner',providedAt:'2026-10-04',sourceSha256:crypto.createHash('sha256').update(canonicalJson(body)).digest('hex')};
}
function equivalent(mapping) {mapping.matchType='equivalent';mapping.equivalence={...review,basis:'Synthetic different onion variety proxy',variationNote:'Variety difference is not numerically bounded',sourceURL:'https://example.test/onion',sourceSha256:'a'.repeat(64)};}

test('complete nutrition includes every ingredient and uses original servings',()=>{
  const facts=calculateRecipeNutrition(fixture());
  assert.equal(facts.status,'complete');
  assert.equal(facts.basis,'ingredient-inputs');
  assert.deepEqual(facts.perServing,{kcal:50,proteinGrams:1,fiberGrams:1.5,sodiumMg:1005});
  assert.equal(facts.lineage.length,2);
  assert.equal(facts.lineage[1].nutrients.kcal.status,'logical-zero');
  assert.match(facts.calculationSha256,/^[a-f0-9]{64}$/);
});
test('missing seasoning mapping makes totals partial, never a complete per-serving total',()=>{
  const data=fixture();data.mappings.mappings.pop();
  const facts=calculateRecipeNutrition(data);
  assert.equal(facts.status,'partial');assert.equal(facts.perServing,null);
  assert.equal(facts.knownTotals.sodiumMg,10);assert.deepEqual(facts.missingIngredientOrdinals,[2]);
  assert.deepEqual(facts.components[1].per100g,{kcal:null,proteinGrams:null,fiberGrams:null,sodiumMg:null});assert.equal(facts.components[1].foodMatchType,null);
});
test('reviewed food components remain usable for explicit user gram input when source amount is unknown',()=>{
  const data=fixture();data.recipe.ingredients[1].quantity='약간';updateReviewedHash(data);const mapping=data.mappings.mappings[1];mapping.quantityText='약간';mapping.grams=null;mapping.purchaseAmount=null;delete mapping.quantityEvidence;
  const facts=calculateRecipeNutrition(data);assert.equal(facts.status,'partial');assert.equal(facts.coverage.inventoryReviewed,true);
  assert.equal(facts.components[1].grams,null);assert.deepEqual(facts.components[1].per100g,{kcal:0,proteinGrams:0,fiberGrams:0,sodiumMg:40000});assert.equal(facts.components[1].foodMatchType,'exact');
  data.foodCatalog.records[1].nutrients.sodiumMg={status:'missing',value:null,origin:'unknown-source'};
  assert.equal(calculateRecipeNutrition(data).components[1].per100g.sodiumMg,null);
  mapping.sourceContentHash='f'.repeat(64);assert.equal(calculateRecipeNutrition(data).components[1].per100g.kcal,null);
});
test('unlisted cooking oil in instructions blocks complete totals and baskets',()=>{
  const data=fixture();data.recipe.steps.push({ordinal:2,instruction:'팬에 식용유를 두르고 볶는다.'});
  updateReviewedHash(data);
  const facts=calculateRecipeNutrition(data);assert.equal(facts.status,'partial');assert.equal(facts.knownTotals.kcal,100);assert.equal(facts.perServing,null);
  assert.ok(facts.issues.some(issue=>issue.reason==='unlisted-or-unquantified-action-ingredient'));
  const basket=calculateRecipeBasket(data);assert.equal(basket.costStatus,'partial');assert.equal(basket.knownSubtotalCents,457);assert.equal(basket.sourceCoverage,'incomplete');assert.equal(basket.quantityCheckKeys.length,1);
});
test('complete source ingredient inventory requires a current explicit human review including steps',()=>{
  const data=fixture();data.mappings.recipeReviews=[];
  const nutrition=calculateRecipeNutrition(data);assert.equal(nutrition.status,'partial');assert.equal(nutrition.perServing,null);assert.equal(nutrition.knownTotals.kcal,100);
  const basket=calculateRecipeBasket(data);assert.equal(basket.sourceCoverage,'incomplete');assert.equal(basket.knownSubtotalCents,457);assert.ok(basket.unknownItemKeys.includes('recipe-inventory'));
  for(const change of [receipt=>receipt.stepIngredientsChecked=false,receipt=>receipt.ingredientOrdinals=[1],receipt=>receipt.sourceContentHash='d'.repeat(64),receipt=>receipt.reviewed=false]) {
    const data=fixture();change(data.mappings.recipeReviews[0]);assert.notEqual(calculateRecipeNutrition(data).status,'complete');
  }
});
test('new unlisted protein in steps cannot reuse a previously complete ingredient inventory review',()=>{
  const data=fixture();data.recipe.steps.push({ordinal:2,instruction:'팬에 양파와 닭가슴살을 넣고 볶는다.'});
  const hash=sourceContentHash(data.recipe);for(const mapping of data.mappings.mappings){mapping.sourceContentHash=hash;mapping.quantityEvidence.sourceSha256=hash;}
  assert.equal(calculateRecipeNutrition(data).status,'partial');assert.equal(calculateRecipeNutrition(data).perServing,null);
  assert.equal(calculateRecipeBasket(data).sourceCoverage,'incomplete');
});
test('separate accompaniment exclusion remains a visible calculation scope disclosure',()=>{
  const data=fixture();data.recipe.steps.push({ordinal:2,instruction:'별도로 준비한 오이무침을 곁들여 낸다.'});updateReviewedHash(data);
  data.mappings.recipeReviews[0].exclusions=[{ingredientLabel:'오이무침',stepOrdinals:[2],reason:'Private review notes must not be public',disclosure:'본체만 계산하며 별도의 오이무침은 영양·장보기에서 제외합니다.'}];
  const facts=calculateRecipeNutrition(data);assert.equal(facts.status,'complete');assert.deepEqual(facts.calculationScope.excludedAccompaniments[0],{ingredientLabel:'오이무침',stepOrdinals:[2],disclosure:'본체만 계산하며 별도의 오이무침은 영양·장보기에서 제외합니다.'});assert.equal(facts.calculationScope.disclosures.length,1);
});
test('inventory scope cannot exclude a required listed ingredient or nonexistent recipe step',()=>{
  for(const exclusion of [{ingredientLabel:'양파',stepOrdinals:[1],disclosure:'Drop the required onion'},{ingredientLabel:'오이무침',stepOrdinals:[99],disclosure:'Outside original recipe steps'}]) {
    const data=fixture();data.mappings.recipeReviews[0].exclusions=[exclusion];const facts=calculateRecipeNutrition(data);assert.equal(facts.status,'partial');assert.equal(facts.coverage.inventoryReviewed,false);assert.equal(facts.knownTotals.kcal,100);assert.deepEqual(facts.calculationScope.disclosures,[]);
  }
});
test('per-portion or per-100ml food records cannot masquerade as per-100g nutrients',()=>{
  for(const basis of [undefined,{amount:1,unit:'portion',portion:'edible'},{amount:100,unit:'ml',portion:'edible'},{amount:100,unit:'g',portion:'as-purchased'}]) {
    const data=fixture();data.foodCatalog.records[0].basis=basis;assert.equal(calculateRecipeNutrition(data).status,'partial');
  }
});
test('missing nutrient is different from a logical zero',()=>{
  const data=fixture();data.foodCatalog.records[0].nutrients.fiberGrams={status:'missing',value:null,origin:'synthetic-missing'};
  const facts=calculateRecipeNutrition(data);
  assert.equal(facts.status,'partial');assert.equal(facts.perServing,null);
  assert.deepEqual(facts.missingNutrients,[{ingredientOrdinal:1,nutrient:'fiberGrams',status:'missing'}]);
});
test('trace nutrient stays trace and is never converted into zero',()=>{
  const data=fixture();data.foodCatalog.records[1].nutrients.kcal={status:'trace',value:null,upperBound:0.1,origin:'synthetic-trace'};
  const facts=calculateRecipeNutrition(data);
  assert.equal(facts.status,'partial');assert.equal(facts.perServing,null);
  assert.equal(facts.lineage[1].nutrients.kcal.status,'trace');
  assert.equal(facts.lineage[1].nutrients.kcal.upperBound,0.1);
  assert.equal(facts.missingNutrients[0].status,'trace');
});
test('changing current source quantity invalidates earlier reviewed mappings',()=>{
  const data=fixture();data.recipe.ingredients[0].quantity='200g';
  const facts=calculateRecipeNutrition(data);
  assert.equal(facts.status,'unknown');assert.equal(facts.perServing,null);
  assert.deepEqual(facts.missingIngredientOrdinals,[1,2]);
  assert.ok(facts.issues.some(issue=>issue.reason==='source-hash-mismatch'));
});
test('food version/hash/preparation and ingredient ordinal cannot be matched by an alias',()=>{
  for(const change of [mapping=>mapping.foodVersion='test-v2',mapping=>mapping.foodSourceSha256='d'.repeat(64),mapping=>mapping.preparation='cooked',mapping=>mapping.matchType='equivalent',mapping=>mapping.ingredientLabel='대파',mapping=>mapping.quantityText='200g']) {
    const data=fixture();change(data.mappings.mappings[0]);
    assert.equal(calculateRecipeNutrition(data).status,'partial');
  }
});
test('unreviewed foods or amounts and unknown source servings cannot enable nutrition',()=>{
  for(const change of [data=>data.foodCatalog.records[0].reviewed=false,data=>data.mappings.mappings[0].reviewed=false,data=>data.mappings.mappings[0].grams=null,data=>data.recipe.sourceServingText='2~3인분']) {
    const data=fixture();change(data);const facts=calculateRecipeNutrition(data);
    assert.notEqual(facts.status,'complete');assert.equal(facts.perServing,null);
  }
});
test('duplicate source ordinals and competing exact mappings are rejected conservatively',()=>{
  const duplicated=fixture();duplicated.recipe.ingredients[1].ordinal=1;
  assert.notEqual(calculateRecipeNutrition(duplicated).status,'complete');
  const ambiguous=fixture();ambiguous.mappings.mappings.push({...ambiguous.mappings.mappings[0]});
  assert.equal(calculateRecipeNutrition(ambiguous).status,'partial');
});
test('complete basket scales all ingredients and buys whole verified packs in one branch',()=>{
  const data=fixture();const facts=calculateRecipeBasket(data);
  assert.equal(facts.sourceCoverage,'complete');assert.equal(facts.costStatus,'complete');
  assert.equal(facts.knownSubtotalCents,457); // 300g onion => 2 x 199; 15g salt => 1 x 59.
  assert.equal(facts.items[0].packCount,2);assert.equal(facts.items[0].requiredAmount.amount,300);
  for(const key of ['postcode','store','branchId','date','targetServings']) assert.equal(facts[key],data.context[key]);
  assert.deepEqual(facts.unknownItemKeys,[]);assert.deepEqual(facts.quantityCheckKeys,[]);
  assert.equal(facts.savingsStatus,'unavailable');
});
test('expired or different branch/postcode/store prices never enter the known basket subtotal',()=>{
  for(const change of [price=>price.branchId='another-branch',price=>price.postcode='40474',price=>price.store='EDEKA',price=>price.validThrough='2026-10-04',price=>price.validFrom='2026-10-06']) {
    const data=fixture();change(data.priceCatalog.prices[0]);const facts=calculateRecipeBasket(data);
    assert.equal(facts.costStatus,'partial');assert.equal(facts.knownSubtotalCents,59);
    assert.equal(facts.unknownItemKeys.length,1);
  }
});
test('ordinary prices need the same verification, identity, date and location as offers',()=>{
  const data=fixture();data.priceCatalog.prices[1].reviewed=false;
  const facts=calculateRecipeBasket(data);assert.equal(facts.costStatus,'partial');assert.equal(facts.knownSubtotalCents,398);
  data.priceCatalog.prices[1].reviewed=true;data.priceCatalog.prices[1].foodId='sea-salt';
  assert.equal(calculateRecipeBasket(data).costStatus,'partial');
});
test('non-EUR or unspecified currency never becomes an EUR basket total',()=>{
  for(const currency of ['USD',undefined]){const data=fixture();data.priceCatalog.prices[0].currency=currency;assert.equal(calculateRecipeBasket(data).knownSubtotalCents,59);}
});
test('app/card conditions and unverified offer eligibility block automatic cost facts',()=>{
  for(const change of [price=>price.conditions='nur mit App',price=>price.autoPriceEligible=false,price=>price.sourceSha256='']) {
    const data=fixture();change(data.priceCatalog.prices[0]);assert.equal(calculateRecipeBasket(data).knownSubtotalCents,59);
  }
});
test('unknown gram/ml amount or pack cannot be guessed as one purchase pack',()=>{
  const amount=fixture();amount.mappings.mappings[0].purchaseAmount=null;amount.mappings.mappings[0].grams=null;
  const facts=calculateRecipeBasket(amount);assert.equal(facts.costStatus,'partial');assert.equal(facts.knownSubtotalCents,59);assert.equal(facts.quantityCheckKeys.length,1);
  const pack=fixture();pack.priceCatalog.prices[0].pack={amount:'250',unit:'g'};
  assert.equal(calculateRecipeBasket(pack).costStatus,'partial');
});
test('ml purchase amounts require ml packs, without guessing a gram density',()=>{
  const data=fixture();data.recipe.ingredients[0].quantity='100ml';
  updateReviewedHash(data);
  data.mappings.mappings[0].quantityText='100ml';data.mappings.mappings[0].grams=null;data.mappings.mappings[0].purchaseAmount={amount:100,unit:'ml'};
  assert.equal(calculateRecipeBasket(data).costStatus,'partial');
  data.priceCatalog.prices[0].pack={amount:250,unit:'ml'};
  assert.equal(calculateRecipeBasket(data).knownSubtotalCents,457);
  assert.equal(calculateRecipeNutrition(data).status,'partial');
});
test('reviewed measurement requires matching measurement evidence for grams and purchase amount',()=>{
  const data=fixture();data.recipe.ingredients[0].quantity='1개';updateReviewedHash(data);
  const mapping=data.mappings.mappings[0];mapping.quantityText='1개';
  assert.equal(calculateRecipeNutrition(data).status,'partial');
  mapping.quantityEvidence={method:'reviewed-measurement',sourceURL:'https://example.test/measured-onion',sourceSha256:'d'.repeat(64),grams:100,purchaseAmount:{amount:100,unit:'g'}};
  assert.equal(calculateRecipeNutrition(data).status,'complete');
  assert.equal(calculateRecipeBasket(data).costStatus,'complete');
  mapping.quantityEvidence.grams=150;
  assert.equal(calculateRecipeNutrition(data).status,'partial');
});
test('same food appearing twice is summed before rounding the purchase pack count',()=>{
  const data=fixture();data.recipe.ingredients[1]={ordinal:2,ingredient:'양파',quantity:'40g'};
  const hash=sourceContentHash(data.recipe);
  data.mappings.mappings=[{...data.mappings.mappings[0],sourceContentHash:hash,quantityEvidence:{...data.mappings.mappings[0].quantityEvidence,sourceSha256:hash}},{...data.mappings.mappings[0],sourceContentHash:hash,ingredientOrdinal:2,quantityText:'40g',grams:40,purchaseAmount:{amount:40,unit:'g'},quantityEvidence:{...data.mappings.mappings[0].quantityEvidence,sourceSha256:hash}}];
  updateReviewedHash(data);
  data.context.targetServings=2;
  const facts=calculateRecipeBasket(data);assert.equal(facts.items.length,1);assert.equal(facts.items[0].packCount,1);assert.equal(facts.knownSubtotalCents,199);
});
test('decimal gram amounts do not produce an extra pack from floating-point error',()=>{
  const data=fixture();data.recipe.ingredients=[{ordinal:1,ingredient:'양파',quantity:'0.1g'},{ordinal:2,ingredient:'양파',quantity:'0.2g'}];const hash=sourceContentHash(data.recipe);
  data.mappings.mappings=data.recipe.ingredients.map((ingredient)=>({...data.mappings.mappings[0],sourceContentHash:hash,ingredientOrdinal:ingredient.ordinal,quantityText:ingredient.quantity,grams:ingredient.ordinal===1?0.1:0.2,purchaseAmount:{amount:ingredient.ordinal===1?0.1:0.2,unit:'g'},quantityEvidence:{...data.mappings.mappings[0].quantityEvidence,sourceSha256:hash}}));
  updateReviewedHash(data);
  data.context.targetServings=2;data.priceCatalog.prices[0].pack.amount=0.3;
  assert.equal(calculateRecipeBasket(data).items[0].packCount,1);
  data.context.targetServings=3;assert.equal(calculateRecipeBasket(data).items[0].packCount,2);
});
test('calculation digest is reproducible and changes when source evidence changes',()=>{
  const data=fixture();const first=calculateRecipeNutrition(data);
  assert.deepEqual(first,calculateRecipeNutrition(structuredClone(data)));
  data.foodCatalog.records[0].sourceSha256='d'.repeat(64);data.mappings.mappings[0].foodSourceSha256='d'.repeat(64);
  assert.notEqual(calculateRecipeNutrition(data).calculationSha256,first.calculationSha256);
});
test('registry enrichment retains scoped basket facts and surfaces partial nutrition without full totals',()=>{
  const data=fixture();const hash=sourceContentHash(data.recipe);
  const registry={schemaVersion:1,recipes:{['7|'+hash+'|ko-paraphrase-v1']:{sourceRecipeId:'7',sourceContentHash:hash,transformVersion:'ko-paraphrase-v1',approved:true,nutritionFacts:{status:'complete',source:'stale'},basketFacts:{sourceCoverage:'complete'}}}};
  const result=enrichMealRegistry({...data,registry,recipes:[data.recipe],contexts:[data.context]});
  const entry=Object.values(result.registry.recipes)[0];assert.equal(entry.nutritionFacts.status,'complete');assert.equal(entry.basketEvidenceByContext.length,1);assert.equal(entry.basketFacts,undefined);
  data.mappings.mappings.pop();
  const partial=enrichMealRegistry({...data,registry,recipes:[data.recipe],contexts:[data.context]});
  assert.equal(Object.values(partial.registry.recipes)[0].nutritionFacts.status,'partial');assert.equal(Object.values(partial.registry.recipes)[0].nutritionFacts.perServing,null);assert.equal(partial.audit.recipes[0].nutritionFacts.status,'partial');
  assert.deepEqual(partial.audit.recipes[0].nutritionFacts.coverage,{resolvedIngredientCount:1,totalIngredientCount:2,inventoryReviewed:true});assert.equal(partial.audit.recipes[0].nutritionFacts.missingIngredients[0].ingredientLabel,'소금');
  assert.deepEqual(registry.recipes[Object.keys(registry.recipes)[0]].nutritionFacts,{status:'complete',source:'stale'});
});
test('CLI writes a new private audit and registry without touching inputs and rejects overwrite/public output',t=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-calculations-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const data=fixture(),hash=sourceContentHash(data.recipe);
  const inputs={registry:{schemaVersion:1,recipes:{['7|'+hash+'|ko-paraphrase-v1']:{sourceRecipeId:'7',sourceContentHash:hash,transformVersion:'ko-paraphrase-v1',approved:true}}},recipes:{schemaVersion:1,candidates:[data.recipe]},foods:data.foodCatalog,mappings:data.mappings,prices:data.priceCatalog,contexts:{schemaVersion:1,contexts:[data.context]}};
  const args=[];for(const [name,value] of Object.entries(inputs)){const file=path.join(root,name+'.json');fs.writeFileSync(file,JSON.stringify(value));args.push('--'+name,file);}
  const cli=new URL('../scripts/enrich-meal-calculations.mjs',import.meta.url);
  const out=path.join(root,'private-output');const command=[cli.pathname,...args,'--output-dir',out];
  execFileSync(process.execPath,command,{stdio:'pipe'});
  const audit=JSON.parse(fs.readFileSync(path.join(out,'calculation-audit.json')));assert.equal(audit.recipes[0].nutritionFacts.status,'complete');
  const {calculationSha256,...body}=audit;assert.equal(calculationSha256,crypto.createHash('sha256').update(canonicalJson(body)).digest('hex'));
  assert.equal(JSON.parse(fs.readFileSync(path.join(root,'registry.json'))).recipes[Object.keys(inputs.registry.recipes)[0]].nutritionFacts,undefined);
  assert.throws(()=>execFileSync(process.execPath,command,{stdio:'pipe'}),/Command failed/);
  assert.throws(()=>execFileSync(process.execPath,[cli.pathname,...args,'--output-dir',path.join(root,'public')],{stdio:'pipe'}),/Command failed/);
  assert.equal(fs.existsSync(path.join(root,'public')),false);
});

test('estimated path preserves fully exact complete results unchanged',()=>{
  const data=fixture();assert.deepEqual(calculateEstimatedRecipeNutrition(data),calculateRecipeNutrition(data));
});
test('official named food portion estimates carry deterministic ranges and all provenance',()=>{
  const data=conversionFixture();const facts=calculateEstimatedRecipeNutrition(data);
  assert.equal(facts.status,'estimated');assert.equal(calculateRecipeNutrition(data).status,'partial');
  assert.deepEqual(facts.perServingRange.kcal,{min:35,max:75});assert.equal(facts.perServing.kcal,55);
  assert.equal(facts.assumptionsComplete,true);assert.equal(facts.uncertaintyKind,'reviewed-scenario-interval');
  assert.equal(facts.assumptions[0].ingredientLabel,'양파');assert.equal(facts.assumptions[0].quantityText,'1개');
  assert.deepEqual(facts.assumptions[0].grams,{central:110,min:70,max:150});assert.equal(facts.assumptions[0].sourceSha256,'e'.repeat(64));
  assert.equal(facts.lineage[0].foodSourceSha256,'a'.repeat(64));assert.equal(facts.lineage[0].nutrients.sodiumMg.value,10);
  assert.equal(facts.lineage[0].quantityConversionReview.reviewed,true);assert.ok(facts.unquantifiedUncertainty.some(item=>item.kind==='reference-portion-variation'));
  assert.deepEqual(facts.components[0].gramsRange,{min:70,max:150});assert.deepEqual(facts.components[0].per100g,{kcal:100,proteinGrams:2,fiberGrams:3,sodiumMg:10});
});
test('estimate output midpoint and central reference scenario remain distinct for asymmetric bounds',()=>{
  const data=conversionFixture();data.mappings.mappings[0].quantityConversion.edibleGrams.central=100;
  const facts=calculateEstimatedRecipeNutrition(data);assert.equal(facts.perServing.kcal,55);assert.equal(facts.centralScenarioPerServing.kcal,50);
});
test('named portions scale only their reviewed exact food unit and source amount',()=>{
  const data=conversionFixture();data.recipe.ingredients[0].quantity='2개';updateReviewedHash(data);data.mappings.mappings[0].quantityText='2개';data.mappings.mappings[0].quantityConversion.sourceAmount=2;
  assert.deepEqual(calculateEstimatedRecipeNutrition(data).perServingRange.kcal,{min:70,max:150});
  for(const change of [conversion=>conversion.sourceAmount=1,conversion=>conversion.sourceUnitLabel='T',conversion=>conversion.foodId='carrot',conversion=>conversion.preparation='cooked',conversion=>conversion.reviewed=false,conversion=>conversion.sourceSha256='']) {
    const bad=structuredClone(data);change(bad.mappings.mappings[0].quantityConversion);assert.equal(calculateEstimatedRecipeNutrition(bad).status,'partial');
  }
});
test('negative, reversed, missing or nonnumeric estimate bounds cannot enable an estimate',()=>{
  for(const edibleGrams of [{central:110,min:-1,max:150},{central:110,min:120,max:150},{central:160,min:70,max:150},{central:110,min:70},{central:'110',min:70,max:150}]){
    const data=conversionFixture();data.mappings.mappings[0].quantityConversion.edibleGrams=edibleGrams;const facts=calculateEstimatedRecipeNutrition(data);assert.equal(facts.status,'partial');assert.equal(facts.perServing,null);
  }
});
test('reviewed first-party published recipe portion remains an explicit point scenario',()=>{
  const data=conversionFixture();const conversion=data.mappings.mappings[0].quantityConversion;
  Object.assign(conversion,{kind:'published-recipe-scenario',referenceName:'Synthetic first-party manufacturer recipe example',sourceURL:'https://semie.cooking/recipe-lab/archive/synthetic-test',pointScenario:true,edibleGrams:{central:100,min:100,max:100},unquantifiedUncertainty:['Actual food size is not measured']});
  const facts=calculateEstimatedRecipeNutrition(data);assert.equal(facts.status,'estimated');assert.equal(facts.assumptions[0].kind,'published-recipe-quantity-scenario');assert.equal(facts.assumptions[0].method,'published-recipe-scenario');assert.equal(facts.unquantifiedUncertainty[0].description,'Actual food size is not measured');
  for(const change of [item=>item.sourceURL='https://example.test/blog/weights',item=>item.pointScenario=false,item=>item.unquantifiedUncertainty=[]]) {const bad=structuredClone(data);change(bad.mappings.mappings[0].quantityConversion);assert.equal(calculateEstimatedRecipeNutrition(bad).status,'partial');}
});
test('finite exact and estimated nutrient values cannot overflow intermediate multiplication or midpoint',()=>{
  const exact=fixture();exact.foodCatalog.records[0].nutrients.kcal=numeric(1e308);
  assert.equal(calculateRecipeNutrition(exact).status,'complete');assert.equal(calculateRecipeNutrition(exact).perServing.kcal,5e307);
  const estimated=conversionFixture();estimated.foodCatalog.records[0].nutrients.kcal=numeric(1e308);
  const facts=calculateEstimatedRecipeNutrition(estimated);assert.equal(facts.status,'estimated');assert.equal(facts.perServing.kcal,5.5e307);assert.deepEqual(facts.perServingRange.kcal,{min:3.5e307,max:7.5e307});
  estimated.mappings.mappings[0].quantityConversion.edibleGrams={central:1000,min:1000,max:1000};
  const tooLarge=calculateEstimatedRecipeNutrition(estimated);assert.equal(tooLarge.status,'partial');assert.equal(tooLarge.perServing,null);assert.ok(tooLarge.missingNutrients.some(item=>item.status==='arithmetic-invalid'));
});
test('explicit equivalent food has a disclosed basis and unquantified proxy variation',()=>{
  const data=fixture();equivalent(data.mappings.mappings[0]);const facts=calculateEstimatedRecipeNutrition(data);
  assert.equal(facts.status,'estimated');assert.equal(calculateRecipeNutrition(data).status,'partial');assert.equal(facts.perServing.kcal,50);
  assert.equal(facts.assumptions[0].kind,'equivalent-food');assert.match(facts.assumptions[0].foodProxyBasis,/variety proxy/);
  assert.equal(facts.unquantifiedUncertainty[0].ingredientOrdinal,1);
  assert.equal(facts.lineage[0].mappingStatus,'equivalent');assert.equal(facts.components[0].foodMatchType,'equivalent');
  delete data.mappings.mappings[0].equivalence;assert.equal(calculateEstimatedRecipeNutrition(data).status,'partial');
});
test('equivalent food and nutrient ranges require their own reviewed source proof',()=>{
  for(const change of [item=>item.reviewed=false,item=>item.basis='',item=>item.variationNote='',item=>item.sourceSha256='']) {
    const data=fixture();equivalent(data.mappings.mappings[0]);change(data.mappings.mappings[0].equivalence);assert.equal(calculateEstimatedRecipeNutrition(data).status,'partial');
  }
  const data=fixture();data.foodCatalog.records[1].nutrients.sodiumMg={...review,status:'range',central:40000,min:30000,max:50000,origin:'Synthetic range fixture',rangeBasis:'Synthetic measurement scenarios',sourceURL:'https://example.test/salt',sourceSha256:'b'.repeat(64)};
  const facts=calculateEstimatedRecipeNutrition(data);assert.equal(facts.status,'estimated');assert.deepEqual(facts.perServingRange.sodiumMg,{min:755,max:1255});assert.equal(facts.perServing.sodiumMg,1005);
  data.foodCatalog.records[1].nutrients.sodiumMg.reviewed=false;assert.equal(calculateEstimatedRecipeNutrition(data).status,'partial');
});
test('unknown sodium and trace values never become an implicit zero estimate',()=>{
  for(const value of [{status:'missing',value:null,origin:'missing-source-value'},{status:'trace',value:null,upperBound:1,origin:'trace-source-value'}]) {
    const data=conversionFixture();data.foodCatalog.records[1].nutrients.sodiumMg=value;const facts=calculateEstimatedRecipeNutrition(data);assert.equal(facts.status,'partial');assert.equal(facts.perServing,null);assert.equal(facts.perServingRange,null);assert.ok(facts.missingNutrients.some(item=>item.nutrient==='sodiumMg'));
  }
});
test('explicit labelled user sodium scenario is distinct from a verified source nutrient',()=>{
  const data=fixture();data.foodCatalog.records[1].nutrients.sodiumMg={status:'missing',value:null,origin:'missing-source-value'};
  data.mappings.mappings[1].nutrientScenarios={sodiumMg:userScenario(data,2,'Synthetic user salt sodium scenario 30000 to 50000 mg per100g',{valuesPer100g:{central:40000,min:30000,max:50000}},'sodiumMg')};
  const facts=calculateEstimatedRecipeNutrition(data);assert.equal(facts.status,'estimated');assert.equal(facts.assumptions[0].kind,'user-nutrient-scenario');assert.equal(facts.assumptions[0].sourceURL,null);assert.deepEqual(facts.perServingRange.sodiumMg,{min:755,max:1255});
  data.mappings.mappings[1].nutrientScenarios.sodiumMg.authorized=false;assert.equal(calculateEstimatedRecipeNutrition(data).status,'partial');
});
test('약간 stays unknown unless an explicit authorised user amount scenario is supplied',()=>{
  const data=fixture();data.recipe.ingredients[1].quantity='약간';updateReviewedHash(data);const mapping=data.mappings.mappings[1];mapping.quantityText='약간';mapping.grams=null;mapping.purchaseAmount=null;delete mapping.quantityEvidence;
  assert.equal(calculateEstimatedRecipeNutrition(data).status,'partial');
  mapping.userQuantityScenario=userScenario(data,2,'Synthetic owner chooses salt 1g with 0.5 to 2g scenarios',{edibleGrams:{central:1,min:0.5,max:2}});
  const facts=calculateEstimatedRecipeNutrition(data);assert.equal(facts.status,'estimated');assert.deepEqual(facts.perServingRange.sodiumMg,{min:105,max:405});assert.equal(facts.assumptions[0].kind,'user-quantity-scenario');
  mapping.userQuantityScenario.sourceSha256='f'.repeat(64);assert.equal(calculateEstimatedRecipeNutrition(data).status,'partial');
});
test('user approval pins actual bounds and current recipe ingredient scope',()=>{
  const data=fixture();data.recipe.ingredients[1].quantity='약간';updateReviewedHash(data);const mapping=data.mappings.mappings[1];mapping.quantityText='약간';mapping.grams=null;mapping.purchaseAmount=null;delete mapping.quantityEvidence;
  mapping.userQuantityScenario=userScenario(data,2,'Synthetic user salt amount',{edibleGrams:{central:1,min:0.5,max:2}});
  for(const change of [scenario=>scenario.edibleGrams.central=1.5,scenario=>scenario.edibleGrams.max=3,scenario=>scenario.ingredientOrdinal=1,scenario=>scenario.sourceRecipeId='8',scenario=>scenario.nutrient='sodiumMg']) {
    const bad=structuredClone(data);change(bad.mappings.mappings[1].userQuantityScenario);assert.equal(calculateEstimatedRecipeNutrition(bad).status,'partial');
  }
});
test('estimated totals require the same complete ingredient inventory and current recipe hash',()=>{
  const data=conversionFixture();data.mappings.recipeReviews=[];assert.equal(calculateEstimatedRecipeNutrition(data).status,'partial');
  const changed=conversionFixture();changed.recipe.steps.push({ordinal:2,instruction:'닭가슴살을 넣는다.'});assert.notEqual(calculateEstimatedRecipeNutrition(changed).status,'estimated');
});
test('estimated registry enrichment is explicitly enabled and never upgrades estimated status to complete',()=>{
  const data=conversionFixture(),hash=sourceContentHash(data.recipe),registry={schemaVersion:1,recipes:{['7|'+hash+'|ko-paraphrase-v1']:{sourceRecipeId:'7',sourceContentHash:hash,transformVersion:'ko-paraphrase-v1',approved:true}}};
  const strict=enrichMealRegistry({...data,registry,recipes:[data.recipe]});assert.equal(Object.values(strict.registry.recipes)[0].nutritionFacts.status,'partial');assert.equal(Object.values(strict.registry.recipes)[0].nutritionFacts.perServing,null);
  const estimated=enrichMealRegistry({...data,registry,recipes:[data.recipe],allowEstimatedNutrition:true});assert.equal(Object.values(estimated.registry.recipes)[0].nutritionFacts.status,'estimated');assert.equal(estimated.audit.estimatePolicy,'enabled-reviewed-scenarios');
  assert.throws(()=>enrichMealRegistry({...data,registry,recipes:[data.recipe],allowEstimatedNutrition:'false'}),/explicit boolean/);
});
test('CLI estimate switch is explicit and outputs only private reviewed estimated facts',t=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-estimates-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const data=conversionFixture(),hash=sourceContentHash(data.recipe);
  const inputs={registry:{schemaVersion:1,recipes:{['7|'+hash+'|ko-paraphrase-v1']:{sourceRecipeId:'7',sourceContentHash:hash,transformVersion:'ko-paraphrase-v1',approved:true}}},recipes:{schemaVersion:1,candidates:[data.recipe]},foods:data.foodCatalog,mappings:data.mappings};
  const args=[];for(const [name,value] of Object.entries(inputs)){const file=path.join(root,name+'.json');fs.writeFileSync(file,JSON.stringify(value));args.push('--'+name,file);}
  const cli=new URL('../scripts/enrich-meal-calculations.mjs',import.meta.url).pathname;
  const strictOut=path.join(root,'strict-output');execFileSync(process.execPath,[cli,...args,'--output-dir',strictOut]);
  assert.equal(Object.values(JSON.parse(fs.readFileSync(path.join(strictOut,'recipe-publication-registry.json'))).recipes)[0].nutritionFacts.status,'partial');
  const out=path.join(root,'estimated-output');const summary=JSON.parse(execFileSync(process.execPath,[cli,...args,'--allow-estimated-nutrition','--output-dir',out],{encoding:'utf8'}));
  assert.equal(summary.estimatedNutrition,1);assert.equal(summary.completeNutrition,0);assert.equal(Object.values(JSON.parse(fs.readFileSync(path.join(out,'recipe-publication-registry.json'))).recipes)[0].nutritionFacts.status,'estimated');
  assert.throws(()=>execFileSync(process.execPath,[cli,...args,'allow-estimated-nutrition','--output-dir',path.join(root,'invalid')],{stdio:'pipe'}));
});
