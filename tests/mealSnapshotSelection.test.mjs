import test from 'node:test';
import assert from 'node:assert/strict';

import {
  rankByQuality,
  selectStoreRecipes,
  sourceContentHash,
} from '../scripts/lib/select-store-recipes.mjs';
import {offerIdentityKey} from '../scripts/find-store-recipe-candidates.mjs';

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
    steps:[
      {ordinal:1,instruction:ingredient+'을 손질한다.'},
      {ordinal:2,instruction:'팬에서 '+ingredient+'을 볶는다.'},
      {ordinal:3,instruction:ingredient+'을 속까지 완전히 익힌다.'},
    ],
    matches:[{offerId,relation:'exact-ingredient',ingredientId:ingredient,ingredientLabel:ingredient,offerIdentityKey:offerIdentityKey(identity)}],
    recommendationProfile:{primaryIngredients:[ingredient],family,method,kind},
  };
}

function approved(candidateValue,overrides={}) {
  return {
    sourceRecipeId:candidateValue.sourceRecipeId,
    sourceContentHash:sourceContentHash(candidateValue),
    transformVersion:'ko-paraphrase-v1',approved:true,approvalMethod:'owner-authorized-editorial-transform',validationVersion:'source-facts-v2',
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

test('selection rejects unsafe or mismatched recipe source URLs',()=>{
  for(const [id,url] of [['unsafe-scheme','javascript:alert(1)'],['wrong-host','https://evil.example/recipe/wrong-host'],['wrong-id','https://www.10000recipe.com/recipe/another-id']]) {
    const recipe={...candidate(id),sourceUrl:url};
    const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
    assert.deepEqual(selected.recipes,[],id);
    assert.equal(selected.coverage.heldForReview[0].reason,'invalid-source-url',id);
  }
});

test('a recipe ID alone is not a publication-registry approval key',()=>{
  const recipe=candidate('id-only');
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:{recipes:{'id-only':approved(recipe)}}});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'unapproved-paraphrase');
});

test('approved records without the current editorial validation boundary stay unpublished',()=>{
  const recipe=candidate('legacy-approval');
  const entry=approved(recipe);
  delete entry.approvalMethod;
  delete entry.validationVersion;
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:registryFor([entry])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'unvalidated-editorial-transform');
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

test('selection rejects a recipe when the scoped offer matches only an incidental ingredient',()=>{
  const lemonIdentity={ingredientId:'레몬',species:'plant',cut:'lemon',processingState:'fresh',form:'whole',composition:'lemon'};
  const lemonOffer=offer('offer-lemon',lemonIdentity);
  const recipe=candidate('incidental-lemon',{identity:lemonIdentity,offerId:'offer-lemon'});
  recipe.title='닭가슴살 레몬구이';
  recipe.ingredients=[
    {ordinal:1,ingredient:'닭가슴살',quantity:'300g'},
    {ordinal:2,ingredient:'레몬',quantity:'1/2개'},
  ];
  recipe.recommendationProfile={primaryIngredients:['닭가슴살'],family:'chicken',method:'grill',kind:'main'};
  const selected=selectStoreRecipes({
    store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},
    offers:[lemonOffer],candidates:[recipe],registry:registryFor([approved(recipe)]),
  });
  assert.deepEqual(selected.recipes,[]);
  assert.deepEqual(selected.coverage.heldForReview,[{recipeId:'incidental-lemon',reason:'no-primary-store-offer'}]);
});

test('selection revalidates exact match identity and source label against the scoped offer',()=>{
  const appleIdentity={ingredientId:'사과',species:'plant',cut:'apple',processingState:'fresh',form:'whole',composition:'apple'};
  const recipe=candidate('forged-apple',{identity:appleIdentity,offerId:'offer-apple'});
  recipe.ingredients=[{ordinal:1,ingredient:'두부',label:'두부 300g',quantity:'300g'},{ordinal:2,ingredient:'소금',label:'소금 1t',quantity:'1t'}];
  recipe.matches=[{offerId:'offer-apple',relation:'exact-ingredient',ingredientId:'사과',ingredientLabel:'두부',offerIdentityKey:offerIdentityKey(appleIdentity)}];
  recipe.recommendationProfile={primaryIngredients:['사과'],family:'apple',method:'other',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-apple',appleIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'invalid-exact-match-evidence');
});

test('selection rejects a stale full offer identity attached to an otherwise matching label',()=>{
  const recipe=candidate('stale-full-identity');
  recipe.matches[0].offerIdentityKey=offerIdentityKey(beefIdentity);
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'invalid-exact-match-evidence');
});

test('selection holds raw salmon dishes without verified raw-consumption offer state',()=>{
  const salmonIdentity={ingredientId:'연어',species:'salmon',cut:'fillet',processingState:'raw',form:'fillet',composition:'salmon'};
  const salmonOffer=offer('offer-salmon',salmonIdentity);
  const recipe=candidate('raw-salmon',{identity:salmonIdentity,offerId:'offer-salmon'});
  recipe.title='생연어 초밥';
  recipe.ingredients=[{ordinal:1,ingredient:'연어',quantity:'300g'},{ordinal:2,ingredient:'밥',quantity:'2공기'}];
  recipe.steps=[{ordinal:1,instruction:'연어를 얇게 썬다.'},{ordinal:2,instruction:'밥을 한입 크기로 빚는다.'},{ordinal:3,instruction:'밥 위에 연어를 올린다.'}];
  recipe.recommendationProfile={primaryIngredients:['연어'],family:'salmon',method:'rice',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[salmonOffer],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'raw-consumption-unverified');
});

test('selection does not match smoked salmon or surface-torched salmon to a raw fillet offer',()=>{
  const salmonIdentity={ingredientId:'연어',species:'salmon',cut:'fillet',processingState:'raw',form:'fillet',composition:'salmon'};
  const salmonOffer=offer('offer-salmon',salmonIdentity);
  const smoked=candidate('smoked-salmon',{identity:salmonIdentity,offerId:'offer-salmon'});
  smoked.title='훈제연어 무순말이';
  smoked.ingredients=[{ordinal:1,ingredient:'훈제연어',quantity:'300g'},{ordinal:2,ingredient:'무순',quantity:'50g'}];
  smoked.matches=[{offerId:'offer-salmon',relation:'exact-ingredient',ingredientId:'연어',ingredientLabel:'훈제연어',offerIdentityKey:offerIdentityKey(salmonIdentity)}];
  smoked.recommendationProfile={primaryIngredients:['연어'],family:'salmon',method:'other',kind:'main'};
  const torched={...candidate('torched-salmon',{identity:salmonIdentity,offerId:'offer-salmon'}),title:'연어 덮밥'};
  torched.ingredients=[{ordinal:1,ingredient:'연어',quantity:'300g'},{ordinal:2,ingredient:'밥',quantity:'2공기'}];
  torched.steps=[{ordinal:1,instruction:'연어를 먹기 좋게 썬다.'},{ordinal:2,instruction:'연어 겉면만 토치로 살짝 익힌다.'},{ordinal:3,instruction:'밥 위에 연어를 올린다.'}];
  torched.recommendationProfile={primaryIngredients:['연어'],family:'salmon',method:'rice',kind:'main'};
  const registry=registryFor([approved(smoked),approved(torched)]);
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[salmonOffer],candidates:[smoked,torched],registry});
  assert.deepEqual(selected.recipes,[]);
  assert.deepEqual(selected.coverage.heldForReview,[
    {recipeId:'smoked-salmon',reason:'source-offer-form-mismatch'},
    {recipeId:'torched-salmon',reason:'raw-consumption-unverified'},
  ]);
});

test('selection permits raw salmon fillet when the source cooks the salmon through',()=>{
  const salmonIdentity={ingredientId:'연어',species:'salmon',cut:'fillet',processingState:'raw',form:'fillet',composition:'salmon'};
  const salmonOffer=offer('offer-salmon',salmonIdentity);
  const cooked=candidate('cooked-salmon',{identity:salmonIdentity,offerId:'offer-salmon'});
  cooked.title='팬 연어 스테이크';
  cooked.ingredients=[{ordinal:1,ingredient:'연어',quantity:'300g'},{ordinal:2,ingredient:'소금',quantity:'약간'}];
  cooked.steps=[{ordinal:1,instruction:'연어에 소금을 뿌린다.'},{ordinal:2,instruction:'팬에 연어를 올린다.'},{ordinal:3,instruction:'연어를 뒤집어 속까지 완전히 익힌다.'}];
  cooked.recommendationProfile={primaryIngredients:['연어'],family:'salmon',method:'grill',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[salmonOffer],candidates:[cooked],registry:registryFor([approved(cooked)])});
  assert.deepEqual(selected.recipes.map((recipe)=>recipe.sourceRecipeId),['cooked-salmon']);
});

test('selection holds an uncooked salmon recipe when only an incidental produce offer matches',()=>{
  const blueberryIdentity={ingredientId:'블루베리',species:'plant',cut:'blueberry',processingState:'fresh',form:'whole',composition:'blueberry'};
  const blueberryOffer=offer('offer-blueberry',blueberryIdentity);
  const recipe=candidate('salmon-blueberry',{identity:blueberryIdentity,offerId:'offer-blueberry'});
  recipe.title='블루베리 곁들인 연어 샐러드';
  recipe.ingredients=[{ordinal:1,ingredient:'연어회',quantity:'300g'},{ordinal:2,ingredient:'블루베리',quantity:'1줌'}];
  recipe.steps=[{ordinal:1,instruction:'연어회를 얇게 썬다.'},{ordinal:2,instruction:'블루베리를 씻는다.'},{ordinal:3,instruction:'채소와 함께 담는다.'}];
  recipe.recommendationProfile={primaryIngredients:['블루베리'],family:'fruit',method:'salad',kind:'side'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[blueberryOffer],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'raw-consumption-unverified');
});

test('selection holds uncooked incidental raw chicken inside a plant-offer recipe',()=>{
  const appleIdentity={ingredientId:'사과',species:'plant',cut:'apple',processingState:'fresh',form:'whole',composition:'apple'};
  const appleOffer=offer('offer-apple',appleIdentity);
  const recipe=candidate('apple-raw-chicken',{identity:appleIdentity,offerId:'offer-apple'});
  recipe.title='사과 닭가슴살 샐러드';
  recipe.ingredients=[{ordinal:1,ingredient:'사과',quantity:'1개'},{ordinal:2,ingredient:'생 닭가슴살',quantity:'200g'}];
  recipe.steps=[{ordinal:1,instruction:'사과를 얇게 썬다.'},{ordinal:2,instruction:'닭가슴살을 잘게 찢는다.'},{ordinal:3,instruction:'두 재료를 샐러드 그릇에 담는다.'}];
  recipe.recommendationProfile={primaryIngredients:['사과'],family:'apple',method:'salad',kind:'side'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[appleOffer],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'raw-protein-cook-unverified');
});

test('selection permits incidental raw chicken when a source action explicitly cooks the meat',()=>{
  const appleIdentity={ingredientId:'사과',species:'plant',cut:'apple',processingState:'fresh',form:'whole',composition:'apple'};
  const appleOffer=offer('offer-apple',appleIdentity);
  const recipe=candidate('apple-cooked-chicken',{identity:appleIdentity,offerId:'offer-apple'});
  recipe.title='사과 닭가슴살 볶음';
  recipe.ingredients=[{ordinal:1,ingredient:'사과',quantity:'1개'},{ordinal:2,ingredient:'닭가슴살',quantity:'200g'}];
  recipe.steps=[{ordinal:1,instruction:'사과와 닭가슴살을 썬다.'},{ordinal:2,instruction:'팬에서 닭가슴살을 속까지 완전히 익힌다.'},{ordinal:3,instruction:'사과를 넣고 마무리한다.'}];
  recipe.recommendationProfile={primaryIngredients:['사과'],family:'apple',method:'stirfry',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[appleOffer],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes.map((item)=>item.sourceRecipeId),['apple-cooked-chicken']);
});

test('a gram unit suffix does not create a false lamb ingredient',()=>{
  const appleIdentity={ingredientId:'사과',species:'plant',cut:'apple',processingState:'fresh',form:'whole',composition:'apple'};
  const recipe=candidate('apple-grams',{identity:appleIdentity,offerId:'offer-apple'});
  recipe.ingredients=[{ordinal:1,ingredient:'사과',label:'사과 600그램',quantity:'600그램'},{ordinal:2,ingredient:'소금',label:'소금 약간',quantity:'약간'}];
  recipe.steps=[{ordinal:1,instruction:'사과를 씻는다.'},{ordinal:2,instruction:'먹기 좋게 썬다.'},{ordinal:3,instruction:'접시에 담는다.'}];
  recipe.recommendationProfile={primaryIngredients:['사과'],family:'apple',method:'other',kind:'side'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-apple',appleIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes.map((item)=>item.sourceRecipeId),['apple-grams']);
});

test('animal-derived seasoning does not become a raw animal ingredient',()=>{
  const appleIdentity={ingredientId:'사과',species:'plant',cut:'apple',processingState:'fresh',form:'whole',composition:'apple'};
  const recipe=candidate('apple-seasoning',{identity:appleIdentity,offerId:'offer-apple'});
  recipe.ingredients=[{ordinal:1,ingredient:'사과',quantity:'1개'},{ordinal:2,ingredient:'참치액',quantity:'1작은술'}];
  recipe.steps=[{ordinal:1,instruction:'사과를 씻는다.'},{ordinal:2,instruction:'참치액으로 간한다.'},{ordinal:3,instruction:'접시에 담는다.'}];
  recipe.recommendationProfile={primaryIngredients:['사과'],family:'apple',method:'other',kind:'side'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-apple',appleIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes.map((item)=>item.sourceRecipeId),['apple-seasoning']);
});

test('raw egg yolk, flatfish and oyster require their own cooking action',()=>{
  const appleIdentity={ingredientId:'사과',species:'plant',cut:'apple',processingState:'fresh',form:'whole',composition:'apple'};
  for(const [id,ingredient] of [['raw-yolk','달걀노른자'],['raw-quail-egg','메추리알'],['raw-flatfish','광어회'],['raw-halibut','넙치회'],['raw-tuna','다랑어회'],['raw-oyster','생굴살'],['raw-prawn','생대하']]) {
    const recipe=candidate(id,{identity:appleIdentity,offerId:'offer-apple'});
    recipe.ingredients=[{ordinal:1,ingredient:'사과',quantity:'1개'},{ordinal:2,ingredient,quantity:'100g'}];
    recipe.steps=[{ordinal:1,instruction:'사과를 썬다.'},{ordinal:2,instruction:ingredient+'를 손질한다.'},{ordinal:3,instruction:'접시에 함께 담는다.'}];
    recipe.recommendationProfile={primaryIngredients:['사과'],family:'apple',method:'salad',kind:'side'};
    const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-apple',appleIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
    assert.equal(selected.coverage.heldForReview[0].reason,'raw-protein-cook-unverified',id);
  }
});

test('structured prepared animal forms do not require another cooking step',()=>{
  const appleIdentity={ingredientId:'사과',species:'plant',cut:'apple',processingState:'fresh',form:'whole',composition:'apple'};
  const recipe=candidate('prepared-animal-forms',{identity:appleIdentity,offerId:'offer-apple'});
  recipe.ingredients=[{ordinal:1,ingredient:'사과',quantity:'1개'},{ordinal:2,ingredient:'데친 새우',quantity:'4개'},{ordinal:3,ingredient:'샐러드용 치킨',quantity:'100g'},{ordinal:4,ingredient:'로스트비프',quantity:'3장'}];
  recipe.steps=[{ordinal:1,instruction:'사과를 썬다.'},{ordinal:2,instruction:'준비된 재료를 올린다.'},{ordinal:3,instruction:'접시에 담는다.'}];
  recipe.recommendationProfile={primaryIngredients:['사과'],family:'apple',method:'salad',kind:'side'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-apple',appleIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes.map((item)=>item.sourceRecipeId),['prepared-animal-forms']);
});

test('salmon sauce and another meat cooking action do not prove raw chicken is cooked',()=>{
  const appleIdentity={ingredientId:'사과',species:'plant',cut:'apple',processingState:'fresh',form:'whole',composition:'apple'};
  const sauce=candidate('salmon-sauce',{identity:appleIdentity,offerId:'offer-apple'});
  sauce.ingredients=[{ordinal:1,ingredient:'사과',quantity:'1개'},{ordinal:2,ingredient:'연어소스',quantity:'1큰술'}];
  sauce.steps=[{ordinal:1,instruction:'사과를 썬다.'},{ordinal:2,instruction:'연어소스를 뿌린다.'},{ordinal:3,instruction:'접시에 담는다.'}];
  sauce.recommendationProfile={primaryIngredients:['사과'],family:'apple',method:'salad',kind:'side'};
  const unsafe=candidate('other-meat-heat',{identity:appleIdentity,offerId:'offer-apple'});
  unsafe.ingredients=[{ordinal:1,ingredient:'사과',quantity:'1개'},{ordinal:2,ingredient:'닭가슴살',quantity:'100g'},{ordinal:3,ingredient:'소고기',quantity:'100g'}];
  unsafe.steps=[{ordinal:1,instruction:'소고기를 완전히 익힌다.'},{ordinal:2,instruction:'닭가슴살을 얇게 썬다.'},{ordinal:3,instruction:'사과와 함께 담는다.'}];
  unsafe.recommendationProfile={primaryIngredients:['사과'],family:'apple',method:'salad',kind:'side'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-apple',appleIdentity)],candidates:[sauce,unsafe],registry:registryFor([approved(sauce),approved(unsafe)])});
  assert.deepEqual(selected.recipes.map((item)=>item.sourceRecipeId),['salmon-sauce']);
  assert.equal(selected.coverage.heldForReview[0].reason,'raw-protein-cook-unverified');
});

test('selection rejects a beef stew offer for a bulgogi-cut source ingredient',()=>{
  const stewIdentity={ingredientId:'소고기',species:'beef',cut:'stew',processingState:'raw',form:'cubed',composition:'beef'};
  const stewOffer=offer('offer-stew',stewIdentity);
  const recipe=candidate('bulgogi-cut',{identity:stewIdentity,offerId:'offer-stew'});
  recipe.ingredients=[{ordinal:1,ingredient:'불고기용 소고기',quantity:'300g'},{ordinal:2,ingredient:'감자',quantity:'2개'}];
  recipe.recommendationProfile={primaryIngredients:['소고기'],family:'beef',method:'stirfry',kind:'main'};
  recipe.matches=[{offerId:'offer-stew',relation:'exact-ingredient',ingredientId:'소고기',ingredientLabel:'불고기용 소고기',offerIdentityKey:offerIdentityKey(stewIdentity)}];
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[stewOffer],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'source-offer-form-mismatch');
});

test('selection rejects canned or ready-to-eat chicken for a raw breast offer',()=>{
  const recipe=candidate('canned-chicken');
  recipe.title='닭가슴살 오이 샐러드';
  recipe.ingredients=[{ordinal:1,ingredient:'닭가슴살 통조림',quantity:'1캔'},{ordinal:2,ingredient:'오이',quantity:'1개'}];
  recipe.matches=[{offerId:'offer-chicken',relation:'exact-ingredient',ingredientId:'닭가슴살',ingredientLabel:'닭가슴살 통조림',offerIdentityKey:offerIdentityKey(chickenIdentity)}];
  recipe.recommendationProfile={primaryIngredients:['닭가슴살'],family:'chicken',method:'salad',kind:'side'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'source-offer-form-mismatch');
});

test('selection rejects minced chicken attached to a raw breast fillet identity',()=>{
  const recipe=candidate('minced-chicken');
  recipe.ingredients=[{ordinal:1,ingredient:'다진 닭가슴살',quantity:'300g'},{ordinal:2,ingredient:'양파',quantity:'1개'}];
  recipe.matches=[{offerId:'offer-chicken',relation:'exact-ingredient',ingredientId:'닭가슴살',ingredientLabel:'다진 닭가슴살',offerIdentityKey:offerIdentityKey(chickenIdentity)}];
  recipe.recommendationProfile={primaryIngredients:['닭가슴살'],family:'chicken',method:'stirfry',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'source-offer-form-mismatch');
});

test('selection rejects a smoked chicken title attached to a generic raw breast label',()=>{
  const recipe=candidate('smoked-title-chicken');
  recipe.title='훈제 닭가슴살 야채볶음';
  recipe.ingredients=[{ordinal:1,ingredient:'닭가슴살',quantity:'300g'},{ordinal:2,ingredient:'양파',quantity:'1개'}];
  recipe.recommendationProfile={primaryIngredients:['닭가슴살'],family:'chicken',method:'stirfry',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'source-offer-form-mismatch');
});

test('selection rejects processed pork linked to a raw pork offer',()=>{
  const porkIdentity={ingredientId:'돼지목살',species:'pork',cut:'neck',processingState:'raw',form:'steak',composition:'pork'};
  const recipe=candidate('processed-pork',{identity:porkIdentity,offerId:'offer-pork'});
  recipe.ingredients=[{ordinal:1,ingredient:'훈제 돼지고기 목살',quantity:'300g'},{ordinal:2,ingredient:'양파',quantity:'1개'}];
  recipe.matches=[{offerId:'offer-pork',relation:'exact-ingredient',ingredientId:'돼지목살',ingredientLabel:'훈제 돼지고기 목살',offerIdentityKey:offerIdentityKey(porkIdentity)}];
  recipe.recommendationProfile={primaryIngredients:['돼지목살'],family:'pork',method:'other',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-pork',porkIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'source-offer-form-mismatch');
});

test('selection holds an uncooked incidental raw duck inside a plant-offer recipe',()=>{
  const appleIdentity={ingredientId:'사과',species:'plant',cut:'apple',processingState:'fresh',form:'whole',composition:'apple'};
  const recipe=candidate('apple-raw-duck',{identity:appleIdentity,offerId:'offer-apple'});
  recipe.ingredients=[{ordinal:1,ingredient:'사과',quantity:'1개'},{ordinal:2,ingredient:'오리가슴살',quantity:'200g'}];
  recipe.steps=[{ordinal:1,instruction:'사과를 썬다.'},{ordinal:2,instruction:'오리가슴살을 얇게 자른다.'},{ordinal:3,instruction:'접시에 함께 담는다.'}];
  recipe.recommendationProfile={primaryIngredients:['사과'],family:'apple',method:'salad',kind:'side'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-apple',appleIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'raw-protein-cook-unverified');
});

test('selection holds raw chicken recipes that never cook the chicken',()=>{
  const recipe=candidate('uncooked-chicken');
  recipe.title='닭가슴살 유부초밥';
  recipe.ingredients=[{ordinal:1,ingredient:'닭가슴살',quantity:'200g'},{ordinal:2,ingredient:'유부',quantity:'10장'}];
  recipe.steps=[{ordinal:1,instruction:'닭가슴살을 잘게 찢는다.'},{ordinal:2,instruction:'밥과 함께 섞는다.'},{ordinal:3,instruction:'유부에 채워 담는다.'}];
  recipe.recommendationProfile={primaryIngredients:['닭가슴살'],family:'chicken',method:'rice',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'raw-protein-cook-unverified');
});

test('a negated chicken cooking phrase is not cook-through evidence',()=>{
  const recipe=candidate('negated-chicken-heat');
  recipe.ingredients=[{ordinal:1,ingredient:'닭가슴살',quantity:'200g'},{ordinal:2,ingredient:'양파',quantity:'1개'}];
  recipe.steps=[{ordinal:1,instruction:'닭가슴살은 익히지 않고 얇게 썬다.'},{ordinal:2,instruction:'양파를 볶는다.'},{ordinal:3,instruction:'두 재료를 접시에 담는다.'}];
  recipe.recommendationProfile={primaryIngredients:['닭가슴살'],family:'chicken',method:'salad',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes,[]);
  assert.equal(selected.coverage.heldForReview[0].reason,'raw-protein-cook-unverified');
});

test('selection permits raw chicken when the source cooks it through',()=>{
  const recipe=candidate('cooked-chicken');
  recipe.title='닭가슴살 채소볶음';
  recipe.ingredients=[{ordinal:1,ingredient:'닭가슴살',quantity:'200g'},{ordinal:2,ingredient:'양파',quantity:'1개'}];
  recipe.steps=[{ordinal:1,instruction:'닭가슴살을 먹기 좋게 썬다.'},{ordinal:2,instruction:'팬에서 닭가슴살을 볶는다.'},{ordinal:3,instruction:'닭가슴살을 속까지 완전히 익혀 담는다.'}];
  recipe.recommendationProfile={primaryIngredients:['닭가슴살'],family:'chicken',method:'stirfry',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes.map((item)=>item.sourceRecipeId),['cooked-chicken']);
});

test('selection recognizes an explicit steaming step as cooking raw chicken',()=>{
  const recipe=candidate('steamed-chicken');
  recipe.title='닭가슴살 야채찜';
  recipe.ingredients=[{ordinal:1,ingredient:'닭가슴살',quantity:'200g'},{ordinal:2,ingredient:'양파',quantity:'1개'}];
  recipe.steps=[{ordinal:1,instruction:'닭가슴살을 손질한다.'},{ordinal:2,instruction:'찜기에 닭가슴살을 올린다.'},{ordinal:3,instruction:'뚜껑을 덮고 20분 쪄낸다.'}];
  recipe.recommendationProfile={primaryIngredients:['닭가슴살'],family:'chicken',method:'steam',kind:'main'};
  const selected=selectStoreRecipes({store:{postcode:'52064',chain:'EDEKA',branchId:'branch-a'},offers:[offer('offer-chicken',chickenIdentity)],candidates:[recipe],registry:registryFor([approved(recipe)])});
  assert.deepEqual(selected.recipes.map((item)=>item.sourceRecipeId),['steamed-chicken']);
});
