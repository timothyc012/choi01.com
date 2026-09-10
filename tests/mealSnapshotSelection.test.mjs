import test from 'node:test';
import assert from 'node:assert/strict';

import {
  rankByQuality,
  selectStoreRecipes,
  sourceContentHash,
} from '../scripts/lib/select-store-recipes.mjs';

const chickenIdentity={ingredientId:'닭가슴살',species:'chicken',cut:'breast',processingState:'raw',form:'fillet',composition:'chicken'};
const beefIdentity={ingredientId:'소고기등심',species:'beef',cut:'ribeye',processingState:'raw',form:'steak',composition:'beef'};

function offer(offerId,identity,postcode='52064',chain='EDEKA',branchId='branch-a') {
  return {offerId,postcode,chain,branchId,identity,productDe:offerId,pack:'500 g',priceCents:599};
}

function candidate(recipeId,{identity=chickenIdentity,offerId='offer-chicken',rating=4.9,reviews=100,kind='main',family='family-'+recipeId,method='method-'+recipeId,author='author-'+recipeId}={}) {
  const ingredient=identity.ingredientId;
  return {
    recipeId,sourceRecipeId:recipeId,title:'title '+recipeId,sourceUrl:'https://www.10000recipe.com/recipe/'+recipeId,
    author,rating:String(rating),ratingNumber:rating,reviewCount:reviews,sourceServingText:'2인분',
    ingredients:[{ordinal:1,ingredient,quantity:'300g'},{ordinal:2,ingredient:'소금',quantity:'1t'}],
    steps:[1,2,3].map((ordinal)=>({ordinal,instruction:'raw source '+recipeId+' '+ordinal})),
    matches:[{offerId,relation:'exact-ingredient',ingredientId:ingredient,ingredientLabel:ingredient}],
    recommendationProfile:{primaryIngredients:[ingredient],family,method,kind},
  };
}

function approved(candidateValue,overrides={}) {
  return {
    sourceRecipeId:candidateValue.sourceRecipeId,
    sourceContentHash:sourceContentHash(candidateValue),
    transformVersion:'ko-paraphrase-v1',approved:true,
    title:'승인 '+candidateValue.recipeId,
    detailIngredients:['재료 300g','소금 1t'],
    steps:['재료를 손질한다.','팬에서 충분히 익힌다.','접시에 담아 마무리한다.'],
    recommendationProfile:candidateValue.recommendationProfile,
    ...overrides,
  };
}

function registryFor(entries) {
  return {schemaVersion:1,recipes:Object.fromEntries(entries.map((entry)=>[
    [entry.sourceRecipeId,entry.sourceContentHash,entry.transformVersion].join('|'),entry,
  ]))};
}

test('Bayesian quality ranks a proven 4.9 recipe above a one-review 5.0 recipe',()=>{
  const thin=candidate('thin',{rating:5,reviews:1});
  const proven=candidate('proven',{rating:4.9,reviews:400});
  assert.equal(rankByQuality([thin,proven])[0].recipeId,'proven');
});

test('selection covers a second exact offer identity before excess chicken recipes',()=>{
  const offers=[offer('offer-chicken',chickenIdentity),offer('offer-beef',beefIdentity)];
  const candidates=[
    ...Array.from({length:4},(_,index)=>candidate('chicken-'+index,{reviews:500-index,offerId:'offer-chicken'})),
    candidate('beef',{identity:beefIdentity,offerId:'offer-beef',reviews:2}),
  ];
  const registry=registryFor(candidates.map(approved));
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers,candidates,registry});
  assert.ok(selected.recipes.slice(0,4).some((recipe)=>recipe.sourceRecipeId==='beef'));
  assert.equal(new Set(selected.recipes.slice(0,3).flatMap((recipe)=>recipe.offerIdentityKeys)).size,2);
});

test('selection rejects stale and unapproved paraphrases',()=>{
  const good=candidate('good');
  const stale=candidate('stale');
  const unapproved=candidate('unapproved');
  const registry=registryFor([
    approved(good),
    approved(stale,{sourceContentHash:'0'.repeat(64)}),
    approved(unapproved,{approved:false}),
  ]);
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[good,stale,unapproved],registry});
  assert.deepEqual(selected.recipes.map((recipe)=>recipe.sourceRecipeId),['good']);
  assert.deepEqual(selected.coverage.heldForReview.map((entry)=>[entry.recipeId,entry.reason]),[
    ['stale','stale-source-hash'],['unapproved','unapproved-paraphrase'],
  ]);
});

test('selection holds candidates with a missing source title or author for review',()=>{
  const noTitle={...candidate('no-title'),title:'   '};
  const noAuthor={...candidate('no-author'),author:null};
  const selected=selectStoreRecipes({
    store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},
    offers:[offer('offer-chicken',chickenIdentity)],
    candidates:[noTitle,noAuthor],
    registry:registryFor([approved(noTitle),approved(noAuthor)]),
  });
  assert.deepEqual(selected.recipes,[]);
  assert.deepEqual(selected.coverage.heldForReview.map((entry)=>[entry.recipeId,entry.reason]),[
    ['no-author','missing-source-author'],['no-title','missing-source-title'],
  ]);
});

test('a recipe ID alone is not a publication-registry approval key',()=>{
  const recipe=candidate('id-only');
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:{recipes:{'id-only':approved(recipe)}}});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'unapproved-paraphrase');
});

test('selected public recipes do not retain private candidate fields',()=>{
  const privateCandidate={...candidate('private'),sourceImages:['https://example.com/source.jpg'],privateHtml:'<p>raw</p>'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[privateCandidate],registry:registryFor([approved(privateCandidate)])});
  assert.equal('sourceImages' in selected.recipes[0],false);
  assert.equal('privateHtml' in selected.recipes[0],false);
  assert.equal('matches' in selected.recipes[0],false);
  assert.deepEqual(selected.recipes[0].steps,['재료를 손질한다.','팬에서 충분히 익힌다.','접시에 담아 마무리한다.']);
});

test('selection isolates postcode, store, and branch and keeps sparse coverage explicit',()=>{
  const valid=candidate('valid');
  const foreign=candidate('foreign',{offerId:'offer-foreign'});
  const selected=selectStoreRecipes({
    store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},
    offers:[offer('offer-chicken',chickenIdentity),offer('offer-foreign',beefIdentity,'44369','NETTO','branch-b')],
    candidates:[valid,foreign],
    registry:registryFor([approved(valid),approved(foreign)]),
  });
  assert.deepEqual(selected.recipes.map((recipe)=>recipe.sourceRecipeId),['valid']);
  assert.equal(selected.coverage.target,48);
  assert.equal(selected.coverage.published,1);
  assert.equal(selected.coverage.sparse,true);
  assert.ok(selected.warnings.some((warning)=>warning.code==='sparse-store'));
});
