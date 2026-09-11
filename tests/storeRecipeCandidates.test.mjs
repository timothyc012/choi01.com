import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildStoreCandidateReport,
  discoverStoreRecipeCandidates,
  matchCandidate,
  offerIdentityKey,
  searchRequestForCatalog,
  searchRequestForOffers,
} from '../scripts/find-store-recipe-candidates.mjs';

const rawChickenOffer = {
  offerId: 'offer-chicken',
  identity: {
    ingredientId: '닭가슴살',
    species: 'chicken',
    cut: 'breast',
    processingState: 'raw',
    form: 'fillet',
    composition: 'chicken',
  },
};
const rawChickenIdentityKey=offerIdentityKey(rawChickenOffer.identity);

test('candidate lookup is driven by exact offer keys and remains grouped by store',()=>{
  const packageCatalog={
    '52064':{
      EDEKA:{돼지안심:{product:'Schweinefilet lang',pack:'1 Packung',priceCents:899,sourceRow:2,evidenceUrl:'https://example.com/edeka'}},
      'ALDI SÜD':{소고기등심:{product:'Rib-Eye-Steak',pack:'100 g',priceCents:277,sourceRow:3,evidenceUrl:'https://example.com/aldi'}},
    }
  };
  assert.deepEqual(searchRequestForCatalog(packageCatalog).map(x=>x.key),['돼지안심','소고기등심']);
  const meta={stores:{'52064':['EDEKA','ALDI SÜD']},profiles:{'52064':{EDEKA:{branch:'E'},'ALDI SÜD':{branch:'A'}}}};
  const candidates=[{offerKey:'돼지안심',sourceRecipeId:'7020528'},{offerKey:'소고기등심',sourceRecipeId:'7030595'}];
  const report=buildStoreCandidateReport({packageCatalog,meta,candidates,input:'week.csv',database:'01ontology'});
  assert.deepEqual(report.locations[0].offers[0].recipeCandidates.map(x=>x.sourceRecipeId),['7020528']);
  assert.deepEqual(report.locations[1].offers[0].recipeCandidates.map(x=>x.sourceRecipeId),['7030595']);
  assert.notDeepEqual(report.locations[0].offers,report.locations[1].offers);
});

test('a title mention alone does not qualify a candidate', () => {
  const titleOnlyChicken = {
    recipeId: 'recipe-title-only',
    title: '닭가슴살 덮밥',
    ingredients: [{ ingredient: '양파', quantity: '1개' }],
  };

  assert.equal(matchCandidate(titleOnlyChicken, rawChickenOffer), null);
});

test('an exact ingredient identity qualifies every matching offer and title terms only add evidence', () => {
  const candidate = {
    recipeId: 'recipe-exact',
    identityKey:rawChickenIdentityKey,
    title: '촉촉한 닭 요리',
    ingredients: [{ ingredient: '닭가슴살', quantity: '300g' }],
  };
  const titleCandidate = { ...candidate, title: '촉촉한 닭가슴살 요리' };

  assert.deepEqual(matchCandidate(candidate, rawChickenOffer), {
    offerId: 'offer-chicken',
    relation: 'exact-ingredient',
    ingredientId: '닭가슴살',
    ingredientLabel: '닭가슴살',
    offerIdentityKey: rawChickenIdentityKey,
    titleEvidence: false,
  });
  assert.equal(matchCandidate(titleCandidate, rawChickenOffer).titleEvidence, true);
});

test('structured candidate identity must match every canonical identity field', () => {
  const exact={...rawChickenOffer.identity};
  const smoked={...exact,processingState:'smoked'};
  assert.equal(matchCandidate({title:'닭 요리',ingredientIdentities:[smoked],ingredients:[{ingredient:'닭가슴살'}]},rawChickenOffer),null);
  assert.equal(matchCandidate({title:'닭 요리',ingredientIdentities:[exact]},rawChickenOffer)?.relation,'exact-ingredient');
  assert.equal(matchCandidate({title:'닭 요리',ingredientIdentities:[exact]},{offerId:'incomplete',identity:{ingredientId:'닭가슴살'}}),null);
});

test('label-only DB metadata cannot qualify two variants that share an ingredient ID', async () => {
  const smokedChickenOffer={
    ...rawChickenOffer,
    offerId:'offer-smoked-chicken',
    identity:{...rawChickenOffer.identity,processingState:'smoked'},
  };
  const metadata=[{
    identityId:'닭가슴살',
    identityTotal:1,
    recipeId:'label-only-chicken',
    title:'닭 요리',
    matchedIngredientLabels:['닭가슴살'],
  }];
  const db={
    async findCandidateMetadata(){return metadata;},
    async exportCandidateFacts(){return [{...metadata[0],ingredients:[{ingredient:'닭가슴살'}]}];},
  };

  assert.equal(matchCandidate(metadata[0],rawChickenOffer),null);
  assert.equal(matchCandidate(metadata[0],smokedChickenOffer),null);
  const specs=searchRequestForOffers([rawChickenOffer,smokedChickenOffer]);
  assert.equal(new Set(specs.map((spec)=>spec.identityKey)).size,2);
  const result=await discoverStoreRecipeCandidates({offers:[rawChickenOffer,smokedChickenOffer],db,tenant:'recipe-full'});
  assert.deepEqual(result.candidates,[]);
  assert.equal(Object.keys(result.identityStats).length,2);
  assert.ok(Object.values(result.identityStats).every((stats)=>stats.total===0));
});

test('canonical identities without aliases still match the identical recipe ingredient label', () => {
  const onionOffer={
    offerId:'offer-onion',
    ingredient:'양파',
    identity:{ingredientId:'양파',species:'plant',cut:'onion',processingState:'fresh',form:'whole',composition:'onion'},
  };
  assert.equal(matchCandidate({title:'카레',identityKey:offerIdentityKey(onionOffer.identity),ingredients:[{ingredient:'양파'}]},onionOffer)?.relation,'exact-ingredient');
  assert.equal(matchCandidate({title:'양파 카레',ingredients:[{ingredient:'감자'}]},onionOffer),null);
});

test('canonical report groups candidate IDs by exact offer without duplicating recipe facts', () => {
  const offersByIdentity=[rawChickenOffer,{...rawChickenOffer,offerId:'offer-empty',identity:{...rawChickenOffer.identity,ingredientId:'닭안심',cut:'tenderloin'}}];
  const candidates=[{recipeId:'recipe-exact',matches:[{offerId:'offer-chicken',relation:'exact-ingredient'}]}];
  const meta={stores:{'52064':['EDEKA']},profiles:{'52064':{EDEKA:{branch:'Aachen'}}}};
  const report=buildStoreCandidateReport({packageCatalog:{},offersByIdentity:offersByIdentity.map((offer)=>({...offer,postcode:'52064',chain:'EDEKA'})),meta,candidates,input:'week.csv',database:'01ontology'});

  assert.deepEqual(report.locations[0].offers[0].recipeCandidateIds,['recipe-exact']);
  assert.deepEqual(report.locations[0].offers[1].recipeCandidateIds,[]);
  assert.deepEqual(report.zeroCandidateOfferIds,['offer-empty']);
  assert.equal(report.candidates[0],candidates[0]);
  assert.equal('recipeCandidates' in report.locations[0].offers[0],false);
});

test('per-identity overflow is recorded instead of silently truncating', async () => {
  const metadata = Array.from({ length: 501 }, (_, index) => ({
    recipeId: `recipe-${index + 1}`,
    title: `닭 요리 ${index + 1}`,
    ingredients: [{ ingredient: '닭가슴살', quantity: '300g' }],
    reviewCount: index,
    rating: '4.9',
  }));
  const db = {
    async findCandidateMetadata() { return metadata; },
    async exportCandidateFacts(recipeIds) {
      return metadata.filter((candidate) => recipeIds.includes(candidate.recipeId));
    },
  };

  const result = await discoverStoreRecipeCandidates({
    offers: [rawChickenOffer],
    db,
    tenant: 'recipe-full',
    perIdentityLimit: 500,
    totalLimit: 5000,
  });

  assert.deepEqual(result.overflow[rawChickenIdentityKey], { total: 501, returned: 500, omitted: 1 });
  assert.equal(result.candidates.length, 500);
  assert.deepEqual(result.candidates[0].matches.map((match) => match.offerId), ['offer-chicken']);
});

test('the weekly cap takes candidates fairly across identities instead of starving later identities', async () => {
  const onionOffer={offerId:'offer-onion',ingredient:'양파',identity:{ingredientId:'양파',species:'plant',cut:'onion',processingState:'fresh',form:'whole',composition:'onion'}};
  const metadata=[
    ...Array.from({length:3},(_,index)=>({identityId:'닭가슴살',identityTotal:3,recipeId:`chicken-${index}`,title:'닭 요리',matchedIngredientLabels:['닭가슴살']})),
    ...Array.from({length:3},(_,index)=>({identityId:'양파',identityTotal:3,recipeId:`onion-${index}`,title:'양파 요리',matchedIngredientLabels:['양파']})),
  ];
  const db={
    async findCandidateMetadata(){return metadata;},
    async exportCandidateFacts(recipeIds){return metadata.filter((candidate)=>recipeIds.includes(candidate.recipeId)).map((candidate)=>({...candidate,ingredients:candidate.matchedIngredientLabels}));},
  };
  const result=await discoverStoreRecipeCandidates({offers:[rawChickenOffer,onionOffer],db,tenant:'recipe-full',perIdentityLimit:3,totalLimit:2});

  assert.equal(result.identityStats[rawChickenIdentityKey].returned,1);
  assert.equal(result.identityStats[offerIdentityKey(onionOffer.identity)].returned,1);
});

test('discovery fails when the full-fact export omits a selected recipe', async () => {
  const db={
    async findCandidateMetadata() {
      return [{recipeId:'missing-facts',title:'닭 요리',ingredients:[{ingredient:'닭가슴살'}]}];
    },
    async exportCandidateFacts() { return []; },
  };
  await assert.rejects(
    discoverStoreRecipeCandidates({offers:[rawChickenOffer],db,tenant:'recipe-full'}),
    /Full candidate export omitted recipe: missing-facts/,
  );
});
