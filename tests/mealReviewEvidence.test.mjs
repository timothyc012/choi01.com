import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {extractReviewEvidence,collectionEvidence} from '../scripts/verify-meal-reviews.mjs';

const source={sourceRecipeId:'6875875',sourceTitle:'사과컵밥',checkedAt:'2026-09-11T10:00:00Z'};
const page=(feedback,aggregateRating)=>`<link rel="canonical" href="https://www.10000recipe.com/recipe/6875875"><script type="application/ld+json">${JSON.stringify({'@type':'Recipe',name:source.sourceTitle,aggregateRating})}</script><span class="hit">1,922</span><div class="view_reply">${feedback}</div><aside>4.9(1,077)</aside>`;
test('recommendations, views and comments never become the current recipe review count',()=>{
  const evidence=extractReviewEvidence(page('<div class="reply_tit">댓글 0</div>'),source);
  assert.equal(evidence.reviewCount,null);assert.equal(evidence.ratingValue,null);
  assert.equal(evidence.commentCount,0);assert.equal(evidence.status,'unverified');
});
test('own cooking review count agrees with the exact Recipe entity; comments remain separate',()=>{
  const evidence=extractReviewEvidence(page('<div class="reply_tit">요리 후기 6</div><div class="reply_tit">댓글 4</div>',{ratingValue:'5',reviewCount:'6'}),source);
  assert.equal(evidence.reviewCount,6);assert.equal(evidence.ratingValue,5);assert.equal(evidence.commentCount,4);assert.equal(evidence.status,'verified');
});
test('conflicting counts, wrong recipe identity and missing count fail closed',()=>{
  assert.equal(extractReviewEvidence(page('<div class="reply_tit">요리 후기 6</div>',{ratingValue:'5',reviewCount:'1077'}),source).status,'unverified');
  assert.equal(extractReviewEvidence(page('<div class="reply_tit">요리 후기 6</div>').replace('/recipe/6875875','/recipe/123'),source).status,'unverified');
});
test('ten collected offers and one matched ingredient are independent counts',()=>{
  const rows=Array.from({length:10},(_,i)=>({'우편번호':'44369','체인':'ALDI Nord','지점':'A','상품명':'product-'+i}));
  const result=collectionEvidence(rows,[{id:'aldi-a',postcode:'44369',store:'ALDI Nord',branch:'A',offers:[{productDe:'product-0'}]}]);
  assert.deepEqual(result['aldi-a'],{collectedRows:10,linkedProducts:1,unmatchedRows:9});
});

test('UI accepts verified zeros but never resurrects raw DB counts, stale snapshots or mismatched details',()=>{
  const context={window:{},URLSearchParams};
  vm.runInNewContext(fs.readFileSync(new URL('../public/mohemeokji/meal-planner-recipe-data.js',import.meta.url),'utf8'),context);
  const {reviewEvidenceFor,reviewSummary}=context.window.MealRecipeData;
  const recipe={sourceRecipeId:'6875875',detailSha256:'a'.repeat(64),reviewCount:1077};
  const entry={...recipe,status:'verified',reviewCount:0,ratingValue:null,method:'recipe-feedback-v1',checkedAt:source.checkedAt,sourceUrl:'https://www.10000recipe.com/recipe/6875875'};
  const evidence={snapshotId:'current',recipes:{'6875875':entry}};
  assert.match(reviewSummary({reviewEvidence:reviewEvidenceFor(recipe,'current',evidence)}),/요리 후기 0개/);
  assert.equal(reviewEvidenceFor(recipe,'next',evidence),null);
  assert.equal(reviewEvidenceFor({...recipe,detailSha256:'b'.repeat(64)},'current',evidence),null);
  assert.equal(reviewSummary(recipe),'리뷰 수 미확인');
});

test('committed review checks correspond to every currently published detail',()=>{
  const root=new URL('../public/mohemeokji/data/',import.meta.url);
  const current=JSON.parse(fs.readFileSync(new URL('current.json',root)));
  const manifest=JSON.parse(fs.readFileSync(new URL(current.manifestPath,root)));
  const index=JSON.parse(fs.readFileSync(new URL(manifest.recipeIndexPath,root)));
  const evidence=JSON.parse(fs.readFileSync(new URL('../data/mohemeokji/verified-reviews.json',import.meta.url)));
  assert.equal(evidence.snapshotId,current.snapshotId);
  assert.equal(evidence.csvSha256,manifest.source.csvSha256);
  for(const ref of index.recipes){
    const e=evidence.recipes[ref.sourceRecipeId];assert.equal(e.detailSha256,ref.sha256);
    assert.equal(e.sourceUrl,'https://www.10000recipe.com/recipe/'+ref.sourceRecipeId);
    if(e.status==='verified'){assert.ok(Number.isSafeInteger(e.reviewCount)&&e.reviewCount>=0);assert.match(e.htmlSha256,/^[a-f0-9]{64}$/);}
    else assert.equal(e.reviewCount,null);
  }
  const generated=fs.readFileSync(new URL('../public/mohemeokji/meal-verified-evidence.js',import.meta.url),'utf8');
  const context={window:{}};vm.runInNewContext(generated,context);
  assert.equal(JSON.stringify(context.window.mealVerifiedEvidence),JSON.stringify(evidence));
});
