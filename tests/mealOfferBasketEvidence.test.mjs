import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';

const context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(new URL('../public/mohemeokji/meal-recommendations.js',import.meta.url),'utf8'),context);
const policy=context.window.MealRecommendations;

const chickenIdentity={ingredientId:'닭가슴살',species:'chicken',cut:'breast',processingState:'raw',form:'fillet',composition:'chicken'};
const meal={
  id:'chicken-meal',store:'Netto',branchId:'branch-a',title:'닭가슴살 구이',sale:['닭가슴살'],missing:[],
  detailIngredients:['닭가슴살 300g'],steps:['닭가슴살을 속까지 굽는다.'],offerIds:['offer-chicken'],
  recommendationProfile:{primaryIngredients:['닭가슴살'],family:'chicken',method:'grill',kind:'main'},
  basketFacts:{sourceCoverage:'complete',postcode:'44369',store:'Netto',branchId:'branch-a',date:'2026-10-05',targetServings:2,costStatus:'complete',knownSubtotalCents:599,unknownItemKeys:[],quantityCheckKeys:[]},
};
const catalog={닭가슴살:{offerId:'offer-chicken',identity:chickenIdentity,product:'Hähnchenbrustfilet',pack:'500 g',priceCents:599}};
const scope={postcode:'44369',store:'Netto',branchId:'branch-a',date:'2026-10-05',targetServings:2};
const baseContext={catalog,requireMainOffer:true,requireCompilerBasketFacts:true,...scope,offerIds:new Set(['offer-chicken'])};

test('opaque published basket totals cannot enable value recommendations',()=>{
  const aggregate={costStatus:'complete',knownSubtotalCents:599,unknownItemKeys:[],quantityCheckKeys:[],savingsStatus:'unavailable'};
  const result=policy.evaluateRecipeForMode(meal,{...baseContext,basketFor:()=>aggregate},'value');
  assert.equal(result.eligible,false);
  assert.ok(result.reasons.some((reason)=>reason.includes('상품별')));
});

test('local basket evidence requires compatible product identity, source and arithmetic',()=>{
  const item={
    key:'Netto:닭가슴살',name:'닭가슴살',offerId:'offer-chicken',identity:chickenIdentity,
    product:'Hähnchenbrustfilet',pack:'500 g',sourceURL:'https://example.test/offer',sourceSha256:'a'.repeat(64),validFrom:'2026-10-05',validThrough:'2026-10-10',
    priceCents:599,quantity:1,subtotalCents:599,quantityComplete:true,
  };
  const basket={...scope,costStatus:'complete',knownSubtotalCents:599,unknownItemKeys:[],quantityCheckKeys:[],savingsStatus:'unavailable',items:[item]};
  assert.equal(policy.evaluateRecipeForMode(meal,{...baseContext,localBasketEvidence:true,basketFor:()=>basket},'value').eligible,true);
  assert.equal(policy.evaluateRecipeForMode(meal,{...baseContext,localBasketEvidence:true,basketFor:()=>({...basket,items:[{...item,product:'Hähnchenbrustfilet im Baconmantel'}]})},'value').eligible,false);
  assert.equal(policy.evaluateRecipeForMode(meal,{...baseContext,localBasketEvidence:true,basketFor:()=>({...basket,items:[{...item,subtotalCents:1}]})},'value').eligible,false);
  assert.equal(policy.evaluateRecipeForMode(meal,{...baseContext,localBasketEvidence:true,basketFor:()=>({...basket,items:[{...item,sourceURL:'javascript:alert(1)'}]})},'value').eligible,false);
  assert.equal(policy.evaluateRecipeForMode(meal,{...baseContext,localBasketEvidence:true,basketFor:()=>({...basket,branchId:'branch-b'})},'value').eligible,false);
  assert.equal(policy.evaluateRecipeForMode(meal,{...baseContext,localBasketEvidence:true,basketFor:()=>({...basket,knownSubtotalCents:0,items:[{...item,owned:true}]})},'value').eligible,true);
});
