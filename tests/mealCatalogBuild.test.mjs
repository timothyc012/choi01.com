import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {qualityScore,selectAdditions} from '../scripts/build-meal-recipe-catalog.mjs';

const row=(id,title,ingredient,rating,reviews)=>({
  recipe_id:id,
  source_url:'https://www.10000recipe.com/recipe/'+id,
  title,
  author:'작성자',
  servings_text:'2인분',
  cook_time_text:'30분',
  difficulty_text:'초급',
  ingredients:[{name:ingredient,quantity_text:'300 g'},{name:'소금',quantity_text:'약간'}],
  tags:[],
  steps:[],
  step_count:5,
  rating_value:String(rating),
  review_count:reviews,
  crawled_at:'2026-09-12T00:00:00Z',
});

test('quality score rewards established ratings over one-review perfect scores',()=>{
  assert.ok(qualityScore(row('1','감자볶음','감자',4.8,180))>qualityScore(row('2','감자조림','감자',5,1)));
  assert.equal(qualityScore(row('3','감자전','감자',0,0)),0);
});

test('catalog additions are unique, offer-defining, review-ranked main dishes',()=>{
  const rows=[
    row('1','닭가슴살 볶음','닭가슴살',4.8,180),
    row('2','닭가슴살 구이','닭가슴살',5,1),
    row('3','연어 스테이크','연어',4.9,90),
    row('4','바나나 요거트','바나나',5,500),
    row('5','감자볶음','감자',4.7,40),
  ];
  const additions=selectAdditions(rows,{existingIds:new Set(['5']),limit:2});

  assert.deepEqual(additions.map(item=>item.sourceRecipeId),['1','3']);
  assert.equal(new Set(additions.map(item=>item.sourceRecipeId)).size,2);
  for(const item of additions){
    assert.ok(item.recommendationProfile.primaryIngredients.every(name=>item.sale.includes(name)));
    assert.equal(item.recommendationProfile.kind,'main');
    assert.ok(item.ratingValue>=1 && item.reviewCount>=1);
    assert.equal(item.detailStatus,'source-link-only');
  }
});

test('catalog additions reject side dishes and snacks even when their reviews are stronger',()=>{
  const rows=[
    row('1','감자샐러드 대박 간단해요','감자',5,900),
    row('2','참치 감자 그라탕','감자',4.8,80),
    row('3','슬라이스치즈 쿠키 만들기','슬라이스치즈',5,700),
    row('4','슬라이스치즈 오믈렛','슬라이스치즈',4.7,70),
  ];
  const additions=selectAdditions(rows,{limit:2});

  assert.deepEqual(additions.map(item=>item.sourceRecipeId),['2','4']);
});

test('runtime catalog merges 52 editorial recipes with 48 ranked additions',()=>{
  const context=vm.createContext({window:{}}),root=new URL('../public/mohemeokji/',import.meta.url);
  for(const file of ['ontology-recipe-details.js','ontology-recipe-popular.js','meal-planner-recipe-data.js']){
    vm.runInContext(fs.readFileSync(new URL(file,root),'utf8'),context);
  }
  const meals=context.window.createMealRecipes('Netto');
  assert.equal(meals.length,100);
  assert.equal(new Set(meals.map(item=>item.sourceRecipeId)).size,100);
  assert.ok(meals.every(item=>Object.hasOwn(item,'ratingValue')&&Object.hasOwn(item,'reviewCount')));
  assert.equal(meals.filter(item=>item.detailStatus==='source-link-only').length,48);
});
