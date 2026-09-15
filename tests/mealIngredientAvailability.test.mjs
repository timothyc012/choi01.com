import test from 'node:test';
import assert from 'node:assert/strict';

import {buildDiscoveryCatalog} from '../scripts/build-meal-discovery-catalog.mjs';
import {unavailableIngredientMatches,isRecipeAvailable} from '../scripts/lib/ingredient-availability.mjs';
import {selectStoreRecipes} from '../scripts/lib/select-store-recipes.mjs';

test('Germany availability policy blocks 냉이 but does not confuse it with 고추냉이',()=>{
  const unavailable=unavailableIngredientMatches({ingredients:[{ingredient:'냉이',quantity:'70g'}]});
  assert.deepEqual(unavailable.map((entry)=>entry.key),['냉이']);
  assert.equal(isRecipeAvailable({ingredients:[{ingredient:'고추냉이',quantity:'1t'}]}),true);
  assert.equal(isRecipeAvailable({ingredients:[{ingredient:'미더덕',quantity:'100g'}]}),true);
});

test('recipe selection holds a recipe with an unavailable ingredient before publication checks',()=>{
  const candidate={sourceRecipeId:'6846033',title:'냉이 목살 볶음밥',ingredients:[{ingredient:'냉이',quantity:'70g'},{ingredient:'쌀',quantity:'2컵'}]};
  const result=selectStoreRecipes({
    store:{postcode:'44369',chain:'Netto',branchId:'branch-a'},offers:[],candidates:[candidate],registry:{recipes:{}}
  });
  assert.deepEqual(result.recipes,[]);
  assert.deepEqual(result.coverage.heldForReview,[{recipeId:'6846033',reason:'unavailable-ingredient',ingredients:['냉이']}]);
});

test('discovery catalog excludes unavailable ingredients and records the exclusion reason',()=>{
  const candidate={
    sourceRecipeId:'6846033',title:'냉이 목살 볶음밥',sourceUrl:'https://www.10000recipe.com/recipe/6846033',author:'작성자',
    ingredients:[{ordinal:1,ingredient:'냉이',label:'냉이 70g',quantity:'70g'},{ordinal:2,ingredient:'쌀',label:'쌀 2컵',quantity:'2컵'}],
    steps:[{ordinal:1,instruction:'손질한다.'},{ordinal:2,instruction:'볶는다.'},{ordinal:3,instruction:'담는다.'}],
    matches:[{offerId:'offer-냉이',relation:'exact-ingredient',ingredientId:'냉이',ingredientLabel:'냉이'}],
  };
  const catalog=buildDiscoveryCatalog({
    candidateReport:{database:'01ontology',tenant:'recipe-full',candidates:[candidate],locations:[{postcode:'44369',store:'Netto',branchId:'branch-a',offers:[{offerId:'offer-냉이',recipeCandidateIds:['6846033']}]}]},
    snapshotId:'a'.repeat(64),weekStart:'2026-09-14',target:20,
  });
  assert.deepEqual(catalog.recipes,[]);
  assert.equal(catalog.exclusionCounts['unavailable-ingredient'],1);
});
