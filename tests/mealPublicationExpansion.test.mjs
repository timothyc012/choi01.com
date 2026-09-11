import test from 'node:test';
import assert from 'node:assert/strict';

import {
  applyEditorialTransforms,
  buildOwnerAuthorizedTransform,
  expandPublicationRegistry,
  selectPublicationExpansion,
  validateEditorialTransform,
} from '../scripts/select-meal-publication-expansion.mjs';
import {sourceContentHash,unquantifiedActionIngredients} from '../scripts/lib/select-store-recipes.mjs';

const identity={ingredientId:'닭가슴살',species:'chicken',cut:'breast',processingState:'raw',form:'fillet',composition:'chicken'};

function offer(offerId='offer-a',postcode='52064',store='EDEKA') {
  return {offerId,postcode,chain:store,branchId:'branch-'+postcode+'-'+store,identity,productDe:'Hähnchenbrustfilet',pack:'500 g',priceCents:599};
}

function candidate(id,{reviews=200,offerIds=['offer-a'],author='작성자 '+id,steps=4,quantity='300g',title='닭가슴살 채소볶음 '+id}={}) {
  return {
    recipeId:id,sourceRecipeId:id,title,sourceUrl:'https://www.10000recipe.com/recipe/'+id,author,
    rating:'4.9',ratingNumber:4.9,reviewCount:reviews,sourceServingText:'2인분',
    ingredients:[
      {ordinal:1,label:'닭가슴살 '+quantity,ingredient:'닭가슴살',quantity},
      {ordinal:2,label:'양파 1/2개',ingredient:'양파',quantity:'1/2개'},
      {ordinal:3,label:'소금 약간',ingredient:'소금',quantity:'약간'},
    ],
    steps:Array.from({length:steps},(_,index)=>({
      ordinal:index+1,name:'step-'+(index+1),
      instruction:[
        '닭가슴살은 한입 크기로 썰어 소금으로 밑간해 주세요.',
        '양파는 얇게 채 썰고 팬을 중불로 달궈 주세요.',
        '달군 팬에 닭가슴살을 넣고 겉면이 익도록 볶아 주세요.',
        '양파를 더해 고루 섞은 뒤 접시에 담아 주세요.',
      ][index]??'재료가 익을 때까지 조리해 주세요.',
    })),
    matches:offerIds.map((offerId)=>({offerId,relation:'exact-ingredient',ingredientId:'닭가슴살',ingredientLabel:'닭가슴살'})),
  };
}

function report(candidates,locations=[{postcode:'52064',store:'EDEKA',branchId:'branch-52064-EDEKA',offers:[offer()]}]) {
  const byId=new Map(candidates.map((item)=>[item.sourceRecipeId,item]));
  return {tenant:'recipe-full',candidates,locations:locations.map((location)=>({...location,offers:location.offers.map((item)=>({...item,recipeCandidateIds:[...byId.keys()].filter((id)=>byId.get(id).matches.some((match)=>match.offerId===item.offerId))}))}))};
}

test('publication expansion excludes weak, incomplete, inexact and unquantified candidates',()=>{
  const valid=candidate('valid');
  const result=selectPublicationExpansion({candidateReport:report([
    valid,
    candidate('few-reviews',{reviews:99}),
    {...candidate('no-author'),author:null},
    candidate('short-steps',{steps:2}),
    candidate('unquantified',{quantity:null}),
    candidate('inexact',{offerIds:['missing-offer']}),
  ]),registry:{schemaVersion:1,recipes:{}},target:20});

  assert.deepEqual(result.selected.map((item)=>item.sourceRecipeId),['valid']);
  assert.deepEqual(Object.keys(result.exclusionCounts).sort(),[
    'incomplete-steps','missing-source-author','no-exact-store-offer','review-threshold','unquantified-primary-match',
  ]);
});

test('publication expansion is deterministic and prioritizes candidates serving the sparsest store',()=>{
  const locations=[
    {postcode:'52064',store:'EDEKA',branchId:'branch-52064-EDEKA',offers:[offer('offer-a')]},
    {postcode:'44369',store:'NETTO',branchId:'branch-44369-NETTO',offers:[offer('offer-b','44369','NETTO')]},
  ];
  const existing=candidate('existing',{offerIds:['offer-a']});
  const existingEntry=buildOwnerAuthorizedTransform(existing,{sourceDate:'2026-09-07'});
  const candidates=[existing,candidate('busy-store',{offerIds:['offer-a'],reviews:900}),candidate('sparse-store',{offerIds:['offer-b'],reviews:110})];
  const candidateReport=report(candidates,locations);
  const registry={schemaVersion:1,transformVersion:'ko-paraphrase-v1',recipes:{[[existingEntry.sourceRecipeId,existingEntry.sourceContentHash,existingEntry.transformVersion].join('|')]:existingEntry}};

  const first=selectPublicationExpansion({candidateReport,registry,target:2});
  const second=selectPublicationExpansion({candidateReport:structuredClone(candidateReport),registry:structuredClone(registry),target:2});
  assert.deepEqual(first,second);
  assert.equal(first.selected[0].sourceRecipeId,'sparse-store');
  assert.deepEqual(first.selected.map((item)=>item.sourceRecipeId).sort(),['busy-store','sparse-store']);
});

test('120-item expansion keeps 90 to 100 mains and a balanced auxiliary set',()=>{
  const candidates=[
    ...Array.from({length:110},(_,index)=>candidate('main-'+String(index).padStart(3,'0'))),
    ...Array.from({length:30},(_,index)=>candidate('breakfast-'+String(index).padStart(3,'0'),{title:'요거트 아침 '+index})),
    ...Array.from({length:30},(_,index)=>candidate('side-'+String(index).padStart(3,'0'),{title:'채소 샐러드 '+index})),
  ];
  const result=selectPublicationExpansion({candidateReport:report(candidates),registry:{schemaVersion:1,recipes:{}},target:120});
  const counts=result.selected.reduce((all,item)=>({...all,[item.recommendationProfile.kind]:(all[item.recommendationProfile.kind]||0)+1}),{});
  assert.equal(counts.main,96);
  assert.equal(counts.breakfast,12);
  assert.equal(counts.side,12);
});

test('kind classification follows the dish title instead of incidental step words',()=>{
  const main=candidate('main-title',{title:'폭립 오므라이스'});
  main.steps[0].instruction+=' 요거트를 곁들여도 좋습니다.';
  const smoothie=candidate('smoothie',{title:'복숭아 바나나 스무디'});
  const salad=candidate('salad',{title:'오이 토마토 샐러드'});
  const selected=selectPublicationExpansion({candidateReport:report([main,smoothie,salad]),registry:{recipes:{}},target:3}).selected;
  assert.equal(selected.find((item)=>item.sourceRecipeId==='main-title').recommendationProfile.kind,'main');
  assert.equal(selected.find((item)=>item.sourceRecipeId==='smoothie').recommendationProfile.kind,'breakfast');
  assert.equal(selected.find((item)=>item.sourceRecipeId==='salad').recommendationProfile.kind,'side');
});

test('publication profile excludes an incidental exact offer from defining primary ingredients',()=>{
  const garlicIdentity={ingredientId:'마늘',species:'plant',cut:'garlic',processingState:'fresh',form:'whole',composition:'garlic'};
  const source=candidate('defining',{title:'닭가슴살 채소볶음',offerIds:['offer-a','offer-garlic']});
  source.ingredients.splice(1,0,{ordinal:2,label:'마늘 2쪽',ingredient:'마늘',quantity:'2쪽'});
  source.ingredients.forEach((item,index)=>{item.ordinal=index+1;});
  source.matches=[
    {offerId:'offer-a',relation:'exact-ingredient',ingredientId:'닭가슴살',ingredientLabel:'닭가슴살',titleEvidence:true},
    {offerId:'offer-garlic',relation:'exact-ingredient',ingredientId:'마늘',ingredientLabel:'마늘',titleEvidence:false},
  ];
  const locations=[{postcode:'52064',store:'EDEKA',branchId:'branch-52064-EDEKA',offers:[offer('offer-a'),offer('offer-garlic')].map((item,index)=>index?{...item,identity:garlicIdentity}:item)}];
  const selected=selectPublicationExpansion({candidateReport:report([source],locations),registry:{recipes:{}},target:1}).selected[0];
  assert.deepEqual(selected.recommendationProfile.primaryIngredients,['닭가슴살']);
});

test('owner-authorized transform preserves source facts while producing fresh Korean action summaries',()=>{
  const source=candidate('transform');
  const entry=buildOwnerAuthorizedTransform(source,{sourceDate:'2026-09-07'});

  assert.equal(entry.sourceContentHash,sourceContentHash(source));
  assert.equal(entry.approved,true);
  assert.equal(entry.approvalMethod,'owner-authorized-editorial-transform');
  assert.equal(entry.validationVersion,'source-facts-v2');
  assert.equal(entry.sourceDate,'2026-09-07');
  assert.equal(entry.steps.length,4);
  assert.ok(entry.steps.every((step)=>/[가-힣]/.test(step)));
  assert.ok(entry.detailIngredients.includes('닭가슴살 300g'));
  assert.ok(entry.steps.some((step)=>step.includes('중불')));
  assert.ok(source.steps.every((step)=>!entry.steps.includes(step.instruction)));
  assert.deepEqual(validateEditorialTransform(source,entry),[]);
});

test('editorial validation rejects copied sentences, source markup and lost action count',()=>{
  const source={...candidate('unsafe'),sourceImages:['https://example.test/raw.jpg'],privateHtml:'<img src="raw.jpg">'};
  const entry=buildOwnerAuthorizedTransform(source,{sourceDate:'2026-09-07'});
  const invalid={...entry,sourceImages:['https://example.test/raw.jpg'],steps:[source.steps[1].instruction,'<span>익힌다.</span>','담는다.']};
  const errors=validateEditorialTransform(source,invalid);
  assert.ok(errors.includes('copied-source-step'));
  assert.ok(errors.includes('raw-markup'));
  assert.ok(errors.includes('raw-source-field'));
  assert.ok(errors.includes('lost-action-steps'));
  assert.equal(JSON.stringify(entry).includes('sourceImages'),false);
  assert.equal(JSON.stringify(entry).includes('privateHtml'),false);
});

test('editorial validation rejects a missing source ingredient quantity',()=>{
  const source=candidate('lost-quantity');
  const entry=buildOwnerAuthorizedTransform(source,{sourceDate:'2026-09-07'});
  entry.detailIngredients=entry.detailIngredients.map((item)=>item.replace('300g',''));
  assert.ok(validateEditorialTransform(source,entry).includes('lost-ingredient-quantity'));
});

test('editorial validation rejects a primary ingredient outside exact offer evidence',()=>{
  const source={...candidate('wrong-primary'),recommendationProfile:{primaryIngredients:['닭가슴살'],family:'chicken',method:'stirfry',kind:'main'}};
  const entry=buildOwnerAuthorizedTransform(source,{sourceDate:'2026-09-07'});
  entry.recommendationProfile={...entry.recommendationProfile,primaryIngredients:['소고기등심']};
  assert.ok(validateEditorialTransform(source,entry).includes('profile-primary-mismatch'));
});

test('editorial validation preserves heat and preparation facts',()=>{
  const source=candidate('lost-heat');
  const entry=buildOwnerAuthorizedTransform(source,{sourceDate:'2026-09-07'});
  entry.steps=entry.steps.map((step)=>step.replace('중불','불'));
  assert.ok(validateEditorialTransform(source,entry).includes('lost-protected-fact'));
});

test('editorial validation rejects numeric and heat facts absent from source records',()=>{
  const source=candidate('invented-facts');
  const entry=buildOwnerAuthorizedTransform(source,{sourceDate:'2026-09-07'});
  entry.steps[0]+=' 10분 동안 강불에서 익힌다.';
  const errors=validateEditorialTransform(source,entry);
  assert.ok(errors.includes('invented-numeric-fact'));
  assert.ok(errors.includes('invented-protected-fact'));
});

test('editorial validation requires an explicit unknown-quantity record for a source action ingredient',()=>{
  const source=candidate('missing-action-ingredient');
  source.steps[1].instruction+=' 우유를 붓습니다.';
  const entry=buildOwnerAuthorizedTransform(source,{sourceDate:'2026-09-07'});
  assert.ok(validateEditorialTransform(source,entry).includes('unrepresented-action-ingredient'));
  entry.detailIngredients.push('우유 (원문 수량 미표기)');
  assert.equal(validateEditorialTransform(source,entry).includes('unrepresented-action-ingredient'),false);
  const oilSource=candidate('missing-oil');
  oilSource.steps[1].instruction+=' 팬에 기름을 두르고 재료를 볶는다.';
  const oilEntry=buildOwnerAuthorizedTransform(oilSource,{sourceDate:'2026-09-07'});
  assert.ok(validateEditorialTransform(oilSource,oilEntry).includes('unrepresented-action-ingredient'));
  oilEntry.detailIngredients.push('기름 (원문 수량 미표기)');
  assert.equal(validateEditorialTransform(oilSource,oilEntry).includes('unrepresented-action-ingredient'),false);
  const canonicalOil={...buildOwnerAuthorizedTransform(oilSource,{sourceDate:'2026-09-07'}),detailIngredients:['닭가슴살 300g','양파 1/2개','소금 약간','식용유 (원문 수량 미표기)']};
  assert.equal(validateEditorialTransform(oilSource,canonicalOil).includes('unrepresented-action-ingredient'),false);
  const renderedFat=candidate('rendered-fat');
  renderedFat.steps[1].instruction+=' 구운 고기의 기름을 뺀다.';
  assert.equal(validateEditorialTransform(renderedFat,buildOwnerAuthorizedTransform(renderedFat,{sourceDate:'2026-09-07'})).includes('unrepresented-action-ingredient'),false);
});

test('alternative cooking oils resolve to one source-listed choice without negative butter leakage',()=>{
  const canola=candidate('alternative-oil');
  canola.ingredients.push({ordinal:4,label:'카놀라유 35g (식용유 대체 가능)',ingredient:'카놀라유',quantity:'35g (식용유 대체 가능)'});
  canola.steps[1].instruction+=' 카놀라유를 넣고 식용유나 포도씨유로 대체할 수 있으며 버터 없이도 됩니다.';
  assert.deepEqual(unquantifiedActionIngredients(canola),[]);

  const olive=candidate('source-listed-oil');
  olive.ingredients.push({ordinal:4,label:'올리브유 적당히',ingredient:'올리브유',quantity:null});
  olive.steps[1].instruction+=' 올리브유를 두른 팬에 재료를 올립니다.';
  assert.deepEqual(unquantifiedActionIngredients(olive),['올리브유']);
  const entry=buildOwnerAuthorizedTransform(olive,{sourceDate:'2026-09-07'});
  entry.detailIngredients.push('올리브유 (원문 수량 미표기)');
  assert.equal(validateEditorialTransform(olive,entry).includes('unrepresented-action-ingredient'),false);

  const oliveOil=candidate('olive-oil-alias');
  oliveOil.ingredients.push({ordinal:4,label:'올리브오일 적당히',ingredient:'올리브오일',quantity:null});
  oliveOil.steps[1].instruction+=' 올리브오일을 두른 팬에 재료를 올립니다.';
  assert.deepEqual(unquantifiedActionIngredients(oliveOil),['올리브오일']);

  const sesame=candidate('sesame-is-not-cooking-oil');
  sesame.ingredients.push({ordinal:4,label:'참기름 1큰술',ingredient:'참기름',quantity:'1큰술'});
  sesame.steps[1].instruction+=' 팬에 기름을 두르고 마지막에 참기름을 넣습니다.';
  assert.deepEqual(unquantifiedActionIngredients(sesame),['기름']);

  const dryPan=candidate('negated-oil');
  dryPan.steps[1].instruction='아몬드는 기름 두르지 않은 팬에서 볶습니다.';
  assert.deepEqual(unquantifiedActionIngredients(dryPan),[]);

  const conditionalButter=candidate('conditional-butter');
  conditionalButter.ingredients.push({ordinal:4,label:'올리브유 2큰술',ingredient:'올리브유',quantity:'2큰술'});
  conditionalButter.steps[1].instruction='팬에 올리브유를 붓습니다. 식용유를 사용할 경우 가능하면 버터를 함께 넣습니다.';
  assert.deepEqual(unquantifiedActionIngredients(conditionalButter),[]);

  const unlistedOil=candidate('unlisted-required-oil');
  unlistedOil.steps[1].instruction='팬에 포도씨유를 두르고 양파를 볶습니다.';
  assert.deepEqual(unquantifiedActionIngredients(unlistedOil),['기름']);

  const representedAlternative=candidate('represented-fat-choice');
  representedAlternative.ingredients.push({ordinal:4,label:'녹인버터 2큰술',ingredient:'녹인버터',quantity:'2큰술'});
  representedAlternative.steps[1].instruction='밥솥 안쪽을 기름칠합니다(올리브유 혹은 버터).';
  assert.deepEqual(unquantifiedActionIngredients(representedAlternative),[]);

  const fryingOil=candidate('frying-oil');
  fryingOil.steps[1].instruction='튀김 기름 온도를 올리고 반죽을 기름에 넣어 바삭하게 튀깁니다.';
  assert.deepEqual(unquantifiedActionIngredients(fryingOil),['기름']);

  const cookingOilAlias=candidate('cooking-oil-alias');
  cookingOilAlias.steps[1].instruction='예열한 식용오일에 생선을 넣고 튀깁니다.';
  assert.deepEqual(unquantifiedActionIngredients(cookingOilAlias),['기름']);

  const adverbialOil=candidate('adverbial-oil');
  adverbialOil.steps[1].instruction='후라이팬에 기름살짝 두르고 관자를 볶습니다.';
  assert.deepEqual(unquantifiedActionIngredients(adverbialOil),['기름']);

  const measuredFlavorOil=candidate('measured-flavor-oil');
  measuredFlavorOil.ingredients.push({ordinal:4,label:'들기름 1/2T',ingredient:'들기름',quantity:'1/2T'});
  measuredFlavorOil.steps[1].instruction='들기름에 양파를 볶습니다.';
  assert.deepEqual(unquantifiedActionIngredients(measuredFlavorOil),[]);

  const renderedOil=candidate('rendered-pan-fat');
  renderedOil.steps[1].instruction='고기를 구운 뒤 기름이 남은 팬에 와인을 넣어 졸입니다.';
  assert.deepEqual(unquantifiedActionIngredients(renderedOil),[]);

  const hotOil=candidate('hot-oil-frying');
  hotOil.steps[1].instruction='기름이 충분히 달궈지면 반죽을 넣어 튀깁니다.';
  assert.deepEqual(unquantifiedActionIngredients(hotOil),['기름']);

  const unspacedNegation=candidate('unspaced-oil-negation');
  unspacedNegation.steps[1].instruction='기름을두르지 않은 팬에 재료를 올립니다.';
  assert.deepEqual(unquantifiedActionIngredients(unspacedNegation),[]);

  const bananaFry=candidate('5529835');
  bananaFry.ingredients.push({ordinal:4,label:'식용유',ingredient:'식용유',quantity:null});
  bananaFry.steps[1].instruction='달군 프라이팬에 식용유를 붓고 온도가 오르면 바나나를 튀깁니다.';
  assert.deepEqual(unquantifiedActionIngredients(bananaFry),['식용유']);

  const potatoBake=candidate('6739041');
  potatoBake.ingredients.push({ordinal:4,label:'식용유 약간',ingredient:'식용유',quantity:'약간'});
  potatoBake.steps[1].instruction='달군 팬에 기름을 두르고 다진 고기를 볶습니다.';
  assert.deepEqual(unquantifiedActionIngredients(potatoBake),[]);

  const brandedOil=candidate('6849218');
  brandedOil.ingredients.push({ordinal:4,label:'백설포도씨유 적당량',ingredient:'백설포도씨유',quantity:'적당량'});
  brandedOil.steps[1].instruction='달군 팬에 오일을 두르고 볶음밥을 볶습니다.';
  assert.deepEqual(unquantifiedActionIngredients(brandedOil),[]);

  const genericOilWord=candidate('generic-oil-word');
  genericOilWord.steps[1].instruction='팬에 오일을 두르고 재료를 볶습니다.';
  assert.deepEqual(unquantifiedActionIngredients(genericOilWord),['기름']);

  for(const oil of ['해바라기유','코코넛오일']) {
    const source=candidate('oil-'+oil);
    source.steps[1].instruction='팬에 '+oil+'를 두르고 재료를 볶습니다.';
    assert.deepEqual(unquantifiedActionIngredients(source),['기름']);
  }

  const optionalOil=candidate('optional-oil-grammar');
  optionalOil.steps[1].instruction='기름은 넣지 않아도 됩니다. 버터는 넣지 않아도 됩니다. 버터 대신 코코넛오일을 써도 됩니다.';
  assert.deepEqual(unquantifiedActionIngredients(optionalOil),[]);

  const sesameOnly=candidate('sesame-only');
  sesameOnly.ingredients.push({ordinal:4,label:'참기름 1큰술',ingredient:'참기름',quantity:'1큰술'});
  sesameOnly.steps[1].instruction='마지막에 참기름을 넣어 향을 냅니다.';
  assert.deepEqual(unquantifiedActionIngredients(sesameOnly),[]);
  const bareSesame=candidate('bare-sesame');
  bareSesame.steps[1].instruction='마지막에 참기름을 넣어 향을 냅니다.';
  assert.deepEqual(unquantifiedActionIngredients(bareSesame),['참기름']);

  const optionalIngredients=candidate('optional-ingredients');
  optionalIngredients.steps[1].instruction='우유는 선택입니다. 취향에 따라 버터를 넣습니다. 원하면 설탕을 넣어도 되고 생략할 수 있습니다.';
  assert.deepEqual(unquantifiedActionIngredients(optionalIngredients),[]);

  const oneFatChoice=candidate('one-fat-choice');
  oneFatChoice.steps[1].instruction='팬에 올리브유 또는 버터를 넣어 재료를 굽습니다.';
  assert.deepEqual(unquantifiedActionIngredients(oneFatChoice),['기름']);
  for(const phrase of ['식용유 또는 버터를 사용해 볶습니다','버터 또는 식용유를 사용해 볶습니다','식용유나 버터를 사용해 볶습니다']) {
    const choice=candidate('symmetric-'+phrase);
    choice.steps[1].instruction=phrase;
    assert.deepEqual(unquantifiedActionIngredients(choice),['기름'],phrase);
  }
  const optionalFat=candidate('optional-fat-phrases');
  optionalFat.steps[1].instruction='기름을 넣어도 되고 안 넣어도 됩니다. 필요에 따라 버터를 넣습니다. 원하는 경우 식용유를 넣을 수도 있습니다.';
  assert.deepEqual(unquantifiedActionIngredients(optionalFat),[]);
  const spacedOlive=candidate('spaced-olive-oil');
  spacedOlive.steps[1].instruction='팬에 올리브 오일을 두르고 재료를 볶습니다.';
  assert.deepEqual(unquantifiedActionIngredients(spacedOlive),['기름']);
});

test('editorial validation requires a Korean public title',()=>{
  const source=candidate('english-title');
  const entry=buildOwnerAuthorizedTransform(source,{sourceDate:'2026-09-07'});
  entry.title='Chicken recipe';
  assert.ok(validateEditorialTransform(source,entry).includes('non-korean-title'));
});

test('editorial validation holds implausible source units and stale price commentary',()=>{
  const source=candidate('source-anomaly');
  source.steps[0].instruction='양념을 섞으면 약 500리터가 되고 한 병에 대략 3천몇백원입니다.';
  const entry=buildOwnerAuthorizedTransform(source,{sourceDate:'2026-09-07'});
  assert.ok(validateEditorialTransform(source,entry).includes('source-anomaly'));
});

test('method classification uses dish title semantics instead of incidental substrings',()=>{
  const omelet=candidate('omelet',{title:'치즈 야채 계란말이'});
  omelet.steps[0].instruction+=' 설탕을 넣습니다.';
  const airFryer=candidate('air-fryer',{title:'에어프라이어 바나나 튀김'});
  airFryer.steps[0].instruction+=' 계란찜 그릇을 준비합니다.';
  const exotic=candidate('exotic',{title:'이국적인 망고 바나나 밀크볼'});
  const selected=selectPublicationExpansion({candidateReport:report([omelet,airFryer,exotic]),registry:{recipes:{}},target:3}).selected;
  assert.equal(selected.find((item)=>item.sourceRecipeId==='omelet').recommendationProfile.method,'other');
  assert.equal(selected.find((item)=>item.sourceRecipeId==='air-fryer').recommendationProfile.method,'fry');
  assert.equal(selected.find((item)=>item.sourceRecipeId==='exotic').recommendationProfile.method,'other');
});

test('publication shortlist excludes raw and smoked salmon without compatible offer evidence',()=>{
  const salmonIdentity={ingredientId:'연어',species:'salmon',cut:'fillet',processingState:'raw',form:'fillet',composition:'salmon'};
  const salmonOffer={...offer('offer-salmon'),identity:salmonIdentity};
  const raw=candidate('raw-salmon',{title:'생연어 초밥',offerIds:['offer-salmon']});
  raw.ingredients=[{ordinal:1,label:'연어 300g',ingredient:'연어',quantity:'300g'},{ordinal:2,label:'밥 2공기',ingredient:'밥',quantity:'2공기'}];
  raw.matches=[{offerId:'offer-salmon',relation:'exact-ingredient',ingredientId:'연어',ingredientLabel:'연어',titleEvidence:true}];
  const smoked=structuredClone(raw);
  smoked.recipeId='smoked-salmon';smoked.sourceRecipeId='smoked-salmon';smoked.title='훈제연어 말이';
  smoked.ingredients[0]={ordinal:1,label:'훈제연어 300g',ingredient:'훈제연어',quantity:'300g'};
  smoked.matches[0].ingredientLabel='훈제연어';
  const candidateReport=report([raw,smoked],[{postcode:'52064',store:'EDEKA',branchId:'branch-52064-EDEKA',offers:[salmonOffer]}]);
  const result=selectPublicationExpansion({candidateReport,registry:{recipes:{}},target:2});
  assert.deepEqual(result.selected,[]);
  assert.deepEqual(result.exclusionCounts,{'raw-consumption-unverified':1,'source-offer-form-mismatch':1});
});

test('registry expansion keys transforms by id, source hash and version without overwriting existing records',()=>{
  const source=candidate('new');
  const original={schemaVersion:1,transformVersion:'ko-paraphrase-v1',recipes:{'legacy|hash|v1':{approved:true}}};
  const result=expandPublicationRegistry({registry:original,candidates:[source],sourceDate:'2026-09-07'});
  const expectedKey=['new',sourceContentHash(source),'ko-paraphrase-v1'].join('|');
  assert.equal(result.accepted.length,1);
  assert.equal(result.held.length,0);
  assert.equal(result.registry.recipes['legacy|hash|v1'].approved,true);
  assert.equal(result.registry.recipes[expectedKey].approvalMethod,'owner-authorized-editorial-transform');
});

test('editorial shard content receives approval metadata only after source validation',()=>{
  const source=candidate('shard');
  source.recommendationProfile={primaryIngredients:['닭가슴살'],family:'chicken',method:'stirfry',kind:'main'};
  const draft=buildOwnerAuthorizedTransform(source,{sourceDate:'2026-09-07'});
  const {sourceContentHash:ignoredHash,approved:ignoredApproved,approvedAt:ignoredAt,approvalMethod:ignoredMethod,validationVersion:ignoredValidation,sourceDate:ignoredDate,transformVersion:ignoredVersion,...editorial}=draft;
  editorial.recommendationProfile={...editorial.recommendationProfile,primaryIngredients:['닭가슴살','마늘']};
  const result=applyEditorialTransforms({
    registry:{schemaVersion:1,transformVersion:'ko-paraphrase-v1',recipes:{}},
    candidates:[source],transforms:[editorial],sourceDate:'2026-09-07',approvalDate:'2026-09-11',
  });
  const entry=Object.values(result.registry.recipes)[0];
  assert.equal(result.accepted.length,1);
  assert.equal(entry.sourceContentHash,sourceContentHash(source));
  assert.equal(entry.approvalMethod,'owner-authorized-editorial-transform');
  assert.equal(entry.sourceDate,'2026-09-07');
  assert.equal(entry.approvedAt,'2026-09-11');
  assert.deepEqual(entry.recommendationProfile.primaryIngredients,['닭가슴살']);
  const unsafe=applyEditorialTransforms({registry:{recipes:{}},candidates:[source],transforms:[{...editorial,sourceImages:['https://example.test/raw.jpg']}],sourceDate:'2026-09-07',approvalDate:'2026-09-11'});
  assert.equal(unsafe.accepted.length,0);
  assert.ok(unsafe.held[0].errors.includes('raw-source-field'));
  assert.throws(()=>applyEditorialTransforms({registry:{recipes:{}},candidates:[source],transforms:[editorial,editorial],sourceDate:'2026-09-07',approvalDate:'2026-09-11'}),/duplicate/i);
});
