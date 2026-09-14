import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

import {buildDiscoveryCatalog} from '../scripts/build-meal-discovery-catalog.mjs';

const identity=(ingredientId,species='plant')=>({ingredientId,species,cut:ingredientId,processingState:'fresh',form:'whole',composition:ingredientId});
const offer=(offerId,ingredientId,postcode='44369',store='ALDI Nord')=>({
  offerId,postcode,chain:store,branchId:'branch-a',identity:identity(ingredientId),
  productDe:ingredientId,pack:'500 g',priceCents:199,
});

function candidate(id,{title='두부 버섯 덮밥',ingredient='버섯',reviewCount=0,extraIngredients=[]}={}) {
  return {
    recipeId:id,sourceRecipeId:id,title,sourceUrl:'https://www.10000recipe.com/recipe/'+id,
    author:'작성자',reviewCount,sourceServingText:'2인분',
    ingredients:[
      {ordinal:1,label:ingredient+' 200g',ingredient,quantity:'200g'},
      {ordinal:2,label:'두부 1모',ingredient:'두부',quantity:'1모'},
      ...extraIngredients.map((label,index)=>({ordinal:index+3,label,ingredient:label,quantity:'약간'})),
    ],
    steps:[
      {ordinal:1,instruction:'재료를 손질한다.'},
      {ordinal:2,instruction:'재료를 팬에서 속까지 완전히 익힌다.'},
      {ordinal:3,instruction:'그릇에 담는다.'},
    ],
    matches:[{offerId:'offer-'+ingredient,relation:'exact-ingredient',ingredientId:ingredient,ingredientLabel:ingredient,titleEvidence:true}],
  };
}

function report(candidates,offers) {
  return {
    database:'01ontology',tenant:'recipe-full',candidates,
    locations:[{
      postcode:'44369',store:'ALDI Nord',branchId:'branch-a',
      offers:offers.map((item)=>({...item,recipeCandidateIds:candidates
        .filter((entry)=>entry.matches.some((match)=>match.offerId===item.offerId))
        .map((entry)=>entry.sourceRecipeId)})),
    }],
  };
}

test('discovery catalog accepts complete meal sources without using an unverified review count',()=>{
  const source=candidate('7000001',{reviewCount:0});
  const catalog=buildDiscoveryCatalog({
    candidateReport:report([source],[offer('offer-버섯','버섯')]),
    snapshotId:'a'.repeat(64),weekStart:'2026-09-14',target:20,
  });

  assert.equal(catalog.recipes.length,1);
  assert.equal(catalog.recipes[0].sourceRecipeId,'7000001');
  assert.equal('reviewCount' in catalog.recipes[0],false);
  assert.equal('steps' in catalog.recipes[0],false);
  assert.equal(catalog.recipes[0].recommendationProfile.kind,'main');
});

test('discovery catalog keeps sides out of dinner results and classifies vegetarian ingredients conservatively',()=>{
  const side=candidate('7000002',{title:'파프리카 무침',ingredient:'파프리카'});
  const vegetarian=candidate('7000003',{title:'버섯 두부 덮밥'});
  const fishSauce=candidate('7000004',{title:'버섯 볶음밥',extraIngredients:['멸치액젓 1큰술']});
  const meatTitle=candidate('7000005',{title:'삼겹살 버섯덮밥'});
  const cutlet=candidate('7000006',{title:'버섯 돈가스덮밥',extraIngredients:['돈가스 1장']});
  const pollockRoe=candidate('7000007',{title:'버섯 명란비빔밥',extraIngredients:['명란젓 1큰술']});
  const beefStock=candidate('7000008',{title:'사골 버섯라면',extraIngredients:['사골육수 500ml']});
  const ambiguousRamen=candidate('7000009',{title:'버섯 라면'});
  const ambiguousKimchi=candidate('7000010',{title:'버섯 김치볶음밥'});
  const catalog=buildDiscoveryCatalog({
    candidateReport:report(
      [side,vegetarian,fishSauce,meatTitle,cutlet,pollockRoe,beefStock,ambiguousRamen,ambiguousKimchi],
      [offer('offer-파프리카','파프리카'),offer('offer-버섯','버섯')],
    ),
    snapshotId:'b'.repeat(64),weekStart:'2026-09-14',target:20,
  });

  assert.deepEqual(catalog.recipes.map((recipe)=>recipe.sourceRecipeId).sort(),['7000003','7000004','7000005','7000006','7000007','7000008','7000009','7000010']);
  assert.deepEqual(catalog.recipes.find((recipe)=>recipe.sourceRecipeId==='7000003').dietaryFilters,['vegetarian']);
  assert.deepEqual(catalog.recipes.find((recipe)=>recipe.sourceRecipeId==='7000004').dietaryFilters,[]);
  assert.deepEqual(catalog.recipes.find((recipe)=>recipe.sourceRecipeId==='7000005').dietaryFilters,[]);
  assert.deepEqual(catalog.recipes.find((recipe)=>recipe.sourceRecipeId==='7000006').dietaryFilters,[]);
  assert.deepEqual(catalog.recipes.find((recipe)=>recipe.sourceRecipeId==='7000007').dietaryFilters,[]);
  assert.deepEqual(catalog.recipes.find((recipe)=>recipe.sourceRecipeId==='7000008').dietaryFilters,[]);
  assert.deepEqual(catalog.recipes.find((recipe)=>recipe.sourceRecipeId==='7000009').dietaryFilters,[]);
  assert.deepEqual(catalog.recipes.find((recipe)=>recipe.sourceRecipeId==='7000010').dietaryFilters,[]);
  assert.equal(catalog.exclusionCounts['not-main-meal'],1);
});

test('discovery catalog is deterministic and records exact location boundaries',()=>{
  const candidates=[candidate('7000010'),candidate('7000009')];
  const args={
    candidateReport:report(candidates,[offer('offer-버섯','버섯')]),
    snapshotId:'c'.repeat(64),weekStart:'2026-09-14',target:20,
  };
  const first=buildDiscoveryCatalog(args);
  const second=buildDiscoveryCatalog(structuredClone(args));

  assert.deepEqual(first,second);
  assert.deepEqual(first.recipes.map((recipe)=>recipe.sourceRecipeId),['7000009','7000010']);
  assert.deepEqual(first.recipes[0].locations,[{postcode:'44369',store:'ALDI Nord',branchId:'branch-a'}]);
});

test('small paprika egg dishes stay side dishes in the reviewed registry',()=>{
  const registry=JSON.parse(fs.readFileSync('data/mohemeokji/recipe-publication-registry.json','utf8'));
  const byId=new Map(Object.values(registry.recipes).map((entry)=>[entry.sourceRecipeId,entry]));

  assert.equal(byId.get('6879897').recommendationProfile.kind,'side');
  assert.equal(byId.get('6966445').recommendationProfile.kind,'side');
});
