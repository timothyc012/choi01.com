import crypto from 'node:crypto';

import {canonicalJson} from './meal-snapshot-schema.mjs';
import {offerIdentityKey} from '../find-store-recipe-candidates.mjs';

const DEFAULT_POLICY={target:48,kindCaps:{main:36,breakfast:6,side:6},identityCap:6,familyCap:8,methodCap:12,authorCap:4};
export const PUBLICATION_APPROVAL_METHOD='owner-authorized-editorial-transform';
export const PUBLICATION_VALIDATION_VERSION='source-facts-v2';

const sha256=(value)=>crypto.createHash('sha256').update(value).digest('hex');
const text=(value)=>typeof value==='string'&&value.trim() ? value.trim() : null;
const normalizeTitle=(value)=>String(value||'').normalize('NFKC').toLocaleLowerCase('ko').replace(/\s+/g,'').replace(/[^\p{L}\p{N}]/gu,'');
const ACTION_INGREDIENT_GROUPS=[
  ['우유'],['김칫국물'],['버터'],['소금'],['후추'],['설탕'],['간장'],['식초'],['참기름'],['마늘'],['생강'],['달걀','계란'],['밀가루'],['빵가루'],
];
const COOKING_OILS=['기름','식용유','올리브유','올리브오일','포도씨유','카놀라유'];
const cookingOilName=(label)=>{
  const value=String(label||'');
  const specific=COOKING_OILS.slice(1).find((term)=>value.includes(term));
  if(specific)return specific;
  return /(?:^|\s)기름(?:\s|\(|$)/u.test(value)?'기름':null;
};

function median(values) {
  const sorted=values.filter(Number.isFinite).sort((a,b)=>a-b);
  if(!sorted.length) return 1;
  const middle=Math.floor(sorted.length/2);
  return sorted.length%2 ? sorted[middle] : (sorted[middle-1]+sorted[middle])/2;
}

function sourceHashValue(candidate) {
  return {
    sourceRecipeId:String(candidate.sourceRecipeId??candidate.recipeId??''),
    title:candidate.title??null,
    sourceUrl:candidate.sourceUrl??null,
    author:candidate.author??null,
    sourceServingText:candidate.sourceServingText??null,
    ingredients:(candidate.ingredients||[]).map(({ordinal,ingredient,label,quantity})=>({ordinal,ingredient:ingredient??null,label:label??null,quantity:quantity??null})),
    steps:(candidate.steps||[]).map(({ordinal,name,instruction})=>({ordinal,name:name??null,instruction:instruction??null})),
  };
}

export function sourceContentHash(candidate) {
  return sha256(canonicalJson(sourceHashValue(candidate)));
}

export function unquantifiedActionIngredients(candidate) {
  const instructions=(candidate.steps||[]).map((step)=>String(step.instruction||'')).join(' ');
  const clauses=instructions.split(/[.!?\n]/u);
  const sourceIngredients=(candidate.ingredients||[]).map((ingredient)=>({label:String(ingredient.ingredient||ingredient.label||''),quantity:text(ingredient.quantity)}));
  const quantified=sourceIngredients.filter((ingredient)=>ingredient.quantity).map((ingredient)=>ingredient.label);
  const requiredMention=(clause,term)=>{
    let offset=0;
    while(offset<clause.length) {
      const index=clause.indexOf(term,offset);
      if(index<0)return false;
      const before=clause.slice(Math.max(0,index-40),index);
      const after=clause.slice(index+term.length,index+term.length+24);
      const negated=/^(?:을|를)?\s*(?:두르지|넣지|사용하지|쓰지|않|말|없|제외)/u.test(after);
      const conditional=/(?:대신|대체|선택|사용)\S*\s*(?:할|한)?\s*경우|가능하면|원하면|취향에 따라/u.test(before);
      if(!negated&&!conditional)return true;
      offset=index+term.length;
    }
    return false;
  };
  const actionMentions=(term)=>clauses.some((clause)=>requiredMention(clause,term));
  const missing=ACTION_INGREDIENT_GROUPS.filter((group)=>group.some(actionMentions)&&!group.some((term)=>quantified.some((label)=>label.includes(term)))).map((group)=>group[0]);
  const listedOil=sourceIngredients.find((ingredient)=>cookingOilName(ingredient.label));
  if(listedOil&&!listedOil.quantity) {
    const listedName=cookingOilName(listedOil.label);
    if(listedName) missing.push(listedName);
  }
  const addsGenericOil=clauses.some((clause)=>(/(?:팬에\s*)?기름(?:을)?\s*(?:두르|넣|붓|달구)|기름에\s*(?:튀|볶)/u.test(clause)&&requiredMention(clause,'기름')));
  const namedOilAction=clauses.some((clause)=>COOKING_OILS.slice(1).some((term)=>requiredMention(clause,term)&&(new RegExp(term+'.{0,24}(?:두르|넣|붓|기름칠|볶|바르|사용)|(?:두르|넣|붓|기름칠|볶|바르|사용).{0,24}'+term,'u').test(clause))));
  const quantifiedButter=quantified.some((label)=>label.includes('버터'));
  const oilAlternativeAlreadyRepresented=quantifiedButter&&/기름칠.{0,30}(?:올리브유|올리브오일).{0,12}(?:혹은|또는|or).{0,12}버터/iu.test(instructions);
  if((addsGenericOil||namedOilAction)&&!listedOil&&!oilAlternativeAlreadyRepresented) missing.push('기름');
  return [...new Set(missing)];
}

export function representsUnknownActionIngredient(detailIngredients,ingredient) {
  return (detailIngredients||[]).some((label)=>(ingredient==='기름'?Boolean(cookingOilName(label)):String(label).includes(ingredient))&&/원문[^)]*수량\s*미표기/u.test(String(label)));
}

function sourceOfferMismatch(candidate,primaryMatches,offersById) {
  const ingredientEvidence=(candidate.ingredients||[]).map((ingredient)=>[ingredient.ingredient,ingredient.label,ingredient.quantity].filter(Boolean).join(' ')).join(' ');
  const sourceEvidence=[candidate.title,ingredientEvidence,(candidate.steps||[]).map((step)=>step.instruction).join(' ')].filter(Boolean).join(' ');
  const smokedSalmonSource=/훈제연어/.test(sourceEvidence);
  const compatibleSmokedSalmon=primaryMatches.some((match)=>{
    const identity=offersById.get(match.offerId)?.identity;
    return identity?.species==='salmon'&&identity.processingState==='smoked';
  });
  if(smokedSalmonSource&&!compatibleSmokedSalmon) return true;
  return primaryMatches.some((match)=>{
    const offer=offersById.get(match.offerId);
    const label=String(match.ingredientLabel||'').replace(/\s+/g,'');
    if(offer?.identity?.species==='beef'&&offer.identity.cut==='stew'&&!/국거리|스튜|굴라쉬|카레용|찜용|장조림용|사태|양지|덩어리|깍둑|토막/.test(sourceEvidence)) return true;
    if(offer?.identity?.species==='beef'&&offer.identity.cut==='ribeye'&&(!/등심|꽃등심|립아이|엔트레코트/i.test(sourceEvidence)||/불고기/.test(sourceEvidence))) return true;
    if(offer?.identity?.species==='salmon'&&offer.identity.processingState==='raw'&&(/훈제연어/.test(label)||/훈제연어/.test(String(candidate.title||'')))) return true;
    if(offer?.identity?.species==='chicken'&&offer.identity.processingState==='raw'&&/(?:닭가슴살|치킨).{0,15}(?:캔|통조림|훈제|조리된|익힌|구운|삶은|찐|수비드)|(?:캔|통조림|훈제|조리된|익힌|구운|삶은|찐|수비드).{0,15}(?:닭가슴살|치킨)|샐러드용\s*치킨/.test(ingredientEvidence)) return true;
    return false;
  });
}

function unverifiedRawConsumption(candidate,primaryMatches,offersById) {
  const offeredRawReady=primaryMatches.some((match)=>{
    const identity=offersById.get(match.offerId)?.identity;
    return identity?.processingState==='raw-ready';
  });
  const title=String(candidate.title||'');
  const ingredientEvidence=(candidate.ingredients||[]).map((ingredient)=>[ingredient.ingredient,ingredient.label].filter(Boolean).join(' ')).join(' ');
  const hasSalmon=/연어/.test(title+' '+ingredientEvidence);
  const hasOtherRawProtein=/육회|소고기\s*타르타르|참치회|생참치|사시미/.test(title+' '+ingredientEvidence);
  if(!hasSalmon&&!hasOtherRawProtein) return false;
  const salmonClauses=(candidate.steps||[]).flatMap((step)=>String(step.instruction||'').split(/[.!?]/)).filter((clause)=>/연어/.test(clause));
  const surfaceOnly=salmonClauses.some((clause)=>/토치|겉면|표면|살짝/.test(clause)&&/익|굽|불/.test(clause));
  const cookedTitle=/구이|스테이크|튀김|조림|찜/.test(title);
  const salmonHeat=salmonClauses.some((clause)=>/굽|익히|익힌|튀|조리|오븐|에어프라이어|삶/.test(clause)&&!/토치|겉면|표면|살짝/.test(clause));
  const cookedThrough=salmonClauses.some((clause)=>/(?:속까지|완전히).*(?:익|굽)|(?:익|굽).*(?:속까지|완전히)/.test(clause));
  const cooked=cookedThrough||(cookedTitle&&salmonHeat);
  if(hasOtherRawProtein&&!offeredRawReady) return true;
  return hasSalmon&&(surfaceOnly||(!cooked&&!offeredRawReady));
}

function unverifiedRawAnimalCooking(candidate,primaryMatches,offersById) {
  const rawSpecies=[...new Set(primaryMatches.map((match)=>offersById.get(match.offerId)?.identity).filter((identity)=>identity?.processingState==='raw'&&['chicken','pork','beef','turkey','trout'].includes(identity.species)).map((identity)=>identity.species))];
  if(!rawSpecies.length) return false;
  const title=String(candidate.title||'');
  const steps=(candidate.steps||[]).map((step)=>String(step.instruction||''));
  const cookedTitle=/볶|구이|스테이크|조림|찜|튀김|강정|수육|완탕|만두|카레|국|탕/.test(title);
  const heat=/볶|굽|구워|익|찌|쪄|데치|삶|끓|튀/.test(steps.join(' '));
  const completeHeat=/익히|익힌|익을|속까지|완전히|삶|끓|튀|찌|쪄|데치|오븐|에어프라이어|구워/.test(steps.join(' '));
  const terms={chicken:/닭|치킨/,pork:/돼지|목살|삼겹|고기/,beef:/소고기|쇠고기|고기/,turkey:/칠면조/,trout:/송어|생선/};
  return rawSpecies.some((species)=>{
    const proteinHeat=steps.some((step)=>terms[species].test(step)&&/(?:익히|익힌|익을|속까지|완전히|삶|끓|튀|볶|굽|구워|찌|쪄|데치|오븐|에어프라이어)/.test(step));
    return !proteinHeat&&!(cookedTitle&&(completeHeat||heat));
  });
}

export function sourceOfferRisk(candidate,primaryMatches,offersById) {
  if(sourceOfferMismatch(candidate,primaryMatches,offersById)) return 'source-offer-form-mismatch';
  if(unverifiedRawConsumption(candidate,primaryMatches,offersById)) return 'raw-consumption-unverified';
  if(unverifiedRawAnimalCooking(candidate,primaryMatches,offersById)) return 'raw-protein-cook-unverified';
  return null;
}

export function rankByQuality(candidates) {
  const ratings=candidates.map((candidate)=>Number(candidate.ratingNumber??candidate.rating)).filter((value)=>Number.isFinite(value)&&value>=0&&value<=5);
  const reviews=candidates.map((candidate)=>Number(candidate.reviewCount)).filter((value)=>Number.isFinite(value)&&value>=0);
  const weighted=candidates.reduce((state,candidate)=>{
    const rating=Number(candidate.ratingNumber??candidate.rating);
    const count=Number(candidate.reviewCount);
    if(Number.isFinite(rating)&&Number.isFinite(count)&&count>0) return {sum:state.sum+rating*count,count:state.count+count};
    return state;
  },{sum:0,count:0});
  const globalMean=weighted.count ? weighted.sum/weighted.count : (ratings.reduce((sum,value)=>sum+value,0)/(ratings.length||1));
  const priorStrength=Math.max(1,median(reviews));
  const maxReviewCount=Math.max(1,...reviews);
  return candidates.map((candidate)=>{
    const rating=Number(candidate.ratingNumber??candidate.rating);
    const reviewCount=Math.max(0,Number(candidate.reviewCount)||0);
    const adjustedRating=Number.isFinite(rating)
      ? (reviewCount*rating+priorStrength*globalMean)/(reviewCount+priorStrength)
      : globalMean;
    const popularity=Math.log1p(reviewCount)/Math.log1p(maxReviewCount);
    const ingredients=Array.isArray(candidate.ingredients)?candidate.ingredients:[];
    const steps=Array.isArray(candidate.steps)?candidate.steps:[];
    const completeness=[text(candidate.sourceUrl),text(candidate.author),text(candidate.sourceServingText),ingredients.length>=2,steps.length>=3]
      .filter(Boolean).length/5;
    const qualityScore=0.65*(adjustedRating/5)+0.25*popularity+0.10*completeness;
    return {...candidate,qualityScore,qualityFacts:{adjustedRating,popularity,completeness,priorStrength,globalMean}};
  }).sort((left,right)=>right.qualityScore-left.qualityScore
    || (Number(right.reviewCount)||0)-(Number(left.reviewCount)||0)
    || String(left.sourceRecipeId??left.recipeId).localeCompare(String(right.sourceRecipeId??right.recipeId)));
}

function registryMap(registry) {
  const result=new Map();
  for(const [key,entry] of Object.entries(registry?.recipes||{})) {
    const id=String(entry?.sourceRecipeId??'');
    const expected=[id,entry?.sourceContentHash,entry?.transformVersion].join('|');
    if(!id||key!==expected) continue;
    if(!result.has(id)) result.set(id,[]);
    result.get(id).push(entry);
  }
  return result;
}

function sourceGate(candidate,storeOffers,registryEntry) {
  const sourceRecipeId=String(candidate.sourceRecipeId??candidate.recipeId??'');
  if(!sourceRecipeId||!text(candidate.sourceUrl)) return 'missing-source';
  if(!text(candidate.title)) return 'missing-source-title';
  if(!text(candidate.author)) return 'missing-source-author';
  if(!Array.isArray(candidate.ingredients)||candidate.ingredients.length<2) return 'incomplete-ingredients';
  if(!Array.isArray(candidate.steps)||candidate.steps.length<3) return 'incomplete-steps';
  if(!candidate.steps.every((step,index)=>Number(step.ordinal)===index+1&&text(step.instruction))) return 'noncontiguous-steps';
  const offersById=new Map(storeOffers.map((offer)=>[offer.offerId,offer]));
  const exactMatches=(candidate.matches||[]).filter((match)=>match.relation==='exact-ingredient'&&offersById.has(match.offerId));
  if(!exactMatches.length) return 'no-exact-store-offer';
  const profile=registryEntry?.recommendationProfile||candidate.recommendationProfile||{};
  const primaryIngredients=new Set(Array.isArray(profile.primaryIngredients)?profile.primaryIngredients:[]);
  const primaryMatches=exactMatches.filter((match)=>primaryIngredients.has(offersById.get(match.offerId)?.identity?.ingredientId));
  if(!primaryMatches.length) return 'no-primary-store-offer';
  const offerRisk=sourceOfferRisk(candidate,primaryMatches,offersById);
  if(offerRisk) return offerRisk;
  if(unquantifiedActionIngredients(candidate).some((ingredient)=>!representsUnknownActionIngredient(registryEntry?.detailIngredients,ingredient))) return 'unrepresented-action-ingredient';
  const quantified=primaryMatches.some((match)=>candidate.ingredients.some((ingredient)=>
    text(ingredient.quantity)&&(ingredient.ingredient===match.ingredientLabel||ingredient.ingredient===match.ingredientId)
  ));
  if(!quantified) return 'unquantified-primary-match';
  if(!registryEntry?.approved) return 'unapproved-paraphrase';
  if(registryEntry.approvalMethod!==PUBLICATION_APPROVAL_METHOD||registryEntry.validationVersion!==PUBLICATION_VALIDATION_VERSION) return 'unvalidated-editorial-transform';
  if(registryEntry.sourceContentHash!==sourceContentHash(candidate)) return 'stale-source-hash';
  if(registryEntry.sourceRecipeId&&String(registryEntry.sourceRecipeId)!==sourceRecipeId) return 'registry-source-mismatch';
  if(!text(registryEntry.transformVersion)||!text(registryEntry.title)) return 'incomplete-paraphrase';
  if(!Array.isArray(registryEntry.detailIngredients)||registryEntry.detailIngredients.length<2) return 'incomplete-paraphrase';
  if(!Array.isArray(registryEntry.steps)||registryEntry.steps.length<3||registryEntry.steps.some((step)=>!text(step))) return 'incomplete-paraphrase';
  return null;
}

function publicRecipe(candidate,storeOffers,registryEntry) {
  const offerById=new Map(storeOffers.map((offer)=>[offer.offerId,offer]));
  const exactMatches=(candidate.matches||[]).filter((match)=>match.relation==='exact-ingredient'&&offerById.has(match.offerId));
  const profile=registryEntry.recommendationProfile||candidate.recommendationProfile||{};
  const primaryIngredients=new Set(Array.isArray(profile.primaryIngredients)?profile.primaryIngredients:[]);
  const matchedOffers=exactMatches.map((match)=>offerById.get(match.offerId)).filter((offer)=>primaryIngredients.has(offer.identity?.ingredientId)).sort((a,b)=>a.offerId.localeCompare(b.offerId));
  return {
    sourceRecipeId:String(candidate.sourceRecipeId??candidate.recipeId),
    sourceContentHash:sourceContentHash(candidate),
    sourceTitle:candidate.title,
    sourceUrl:candidate.sourceUrl,
    sourceAuthor:candidate.author??null,
    sourceServingText:candidate.sourceServingText??null,
    rating:candidate.rating??null,
    ratingNumber:Number.isFinite(candidate.ratingNumber)?candidate.ratingNumber:null,
    reviewCount:Number.isInteger(candidate.reviewCount)?candidate.reviewCount:null,
    title:registryEntry.title,
    detailIngredients:registryEntry.detailIngredients.slice(),
    steps:registryEntry.steps.slice(),
    recommendationProfile:{
      primaryIngredients:Array.isArray(profile.primaryIngredients)?profile.primaryIngredients.slice().sort():[],
      family:text(profile.family)||'other',method:text(profile.method)||'other',kind:['main','breakfast','side'].includes(profile.kind)?profile.kind:'main',
    },
    offerIds:matchedOffers.map((offer)=>offer.offerId),
    offerIdentityKeys:[...new Set(matchedOffers.map((offer)=>offerIdentityKey(offer.identity)))].sort(),
    primaryIngredientIds:[...new Set(matchedOffers.map((offer)=>offer.identity.ingredientId))].sort(),
    transformVersion:registryEntry.transformVersion,
  };
}

function selectedPublicRecipe(recipe) {
  return {
    sourceRecipeId:recipe.sourceRecipeId,sourceContentHash:recipe.sourceContentHash,
    sourceTitle:recipe.sourceTitle,sourceUrl:recipe.sourceUrl,sourceAuthor:recipe.sourceAuthor,
    sourceServingText:recipe.sourceServingText,rating:recipe.rating,ratingNumber:recipe.ratingNumber,
    reviewCount:recipe.reviewCount,title:recipe.title,detailIngredients:recipe.detailIngredients.slice(),
    steps:recipe.steps.slice(),recommendationProfile:{...recipe.recommendationProfile,primaryIngredients:recipe.recommendationProfile.primaryIngredients.slice()},
    offerIds:recipe.offerIds.slice(),offerIdentityKeys:recipe.offerIdentityKeys.slice(),
    primaryIngredientIds:recipe.primaryIngredientIds.slice(),transformVersion:recipe.transformVersion,
    qualityScore:recipe.qualityScore,qualityFacts:{...recipe.qualityFacts},
  };
}

function locationOffers(store,offers) {
  return offers.filter((offer)=>offer.postcode===store.postcode&&offer.chain===store.chain&&offer.branchId===store.branchId)
    .sort((left,right)=>left.offerId.localeCompare(right.offerId));
}

export function selectStoreRecipes({store,offers,candidates,registry={recipes:{}},policy={}}) {
  const effective={...DEFAULT_POLICY,...policy,kindCaps:{...DEFAULT_POLICY.kindCaps,...policy.kindCaps}};
  const scopedOffers=locationOffers(store,offers||[]);
  const approved=registryMap(registry);
  const heldForReview=[];
  const eligible=[];
  for(const candidate of [...(candidates||[])].sort((a,b)=>String(a.sourceRecipeId??a.recipeId).localeCompare(String(b.sourceRecipeId??b.recipeId)))) {
    const id=String(candidate.sourceRecipeId??candidate.recipeId??'');
    const entries=approved.get(id)||[];
    const currentHash=sourceContentHash(candidate);
    const entry=entries.find((candidateEntry)=>candidateEntry.sourceContentHash===currentHash)||entries[0];
    const reason=sourceGate(candidate,scopedOffers,entry);
    if(reason) heldForReview.push({recipeId:id,reason});
    else eligible.push({...candidate,...publicRecipe(candidate,scopedOffers,entry)});
  }
  const ranked=rankByQuality(eligible);
  const chosen=[];
  const usedIds=new Set(),usedTitles=new Set();
  const counts={identity:new Map(),family:new Map(),method:new Map(),author:new Map(),kind:new Map()};
  const count=(map,key)=>map.get(key)||0;
  const add=(recipe)=>{
    chosen.push(recipe);usedIds.add(recipe.sourceRecipeId);usedTitles.add(normalizeTitle(recipe.title));
    for(const key of recipe.offerIdentityKeys) counts.identity.set(key,count(counts.identity,key)+1);
    counts.family.set(recipe.recommendationProfile.family,count(counts.family,recipe.recommendationProfile.family)+1);
    counts.method.set(recipe.recommendationProfile.method,count(counts.method,recipe.recommendationProfile.method)+1);
    counts.author.set(recipe.sourceAuthor||'',count(counts.author,recipe.sourceAuthor||'')+1);
    counts.kind.set(recipe.recommendationProfile.kind,count(counts.kind,recipe.recommendationProfile.kind)+1);
  };
  const canAdd=(recipe,relaxed=new Set())=>{
    if(chosen.length>=effective.target||usedIds.has(recipe.sourceRecipeId)||usedTitles.has(normalizeTitle(recipe.title))) return false;
    const kind=recipe.recommendationProfile.kind;
    if(count(counts.kind,kind)>=effective.kindCaps[kind]) return false;
    if(!relaxed.has('identity')&&recipe.offerIdentityKeys.some((key)=>count(counts.identity,key)>=effective.identityCap)) return false;
    if(!relaxed.has('family')&&count(counts.family,recipe.recommendationProfile.family)>=effective.familyCap) return false;
    if(!relaxed.has('method')&&count(counts.method,recipe.recommendationProfile.method)>=effective.methodCap) return false;
    if(!relaxed.has('author')&&count(counts.author,recipe.sourceAuthor||'')>=effective.authorCap) return false;
    return true;
  };

  const mainIdentityKeys=[...new Set(scopedOffers.map((offer)=>offerIdentityKey(offer.identity)))].sort();
  for(let pass=0;pass<2;pass++) for(const identityKey of mainIdentityKeys) {
    const next=ranked.find((recipe)=>recipe.recommendationProfile.kind==='main'&&recipe.offerIdentityKeys.includes(identityKey)&&canAdd(recipe));
    if(next) add(next);
  }
  for(const recipe of ranked) if(canAdd(recipe)) add(recipe);
  const relaxations=[];
  const relaxed=new Set();
  for(const cap of ['author','method','family','identity']) {
    if(chosen.length>=effective.target) break;
    relaxed.add(cap);
    const before=chosen.length;
    for(const recipe of ranked) if(canAdd(recipe,relaxed)) add(recipe);
    if(chosen.length>before) relaxations.push({cap,added:chosen.length-before});
  }
  const uncoveredOfferIds=scopedOffers.filter((offer)=>!chosen.some((recipe)=>recipe.offerIds.includes(offer.offerId))).map((offer)=>offer.offerId);
  const sparse=chosen.length<effective.target;
  const warnings=[];
  if(sparse) warnings.push({code:'sparse-store',target:effective.target,published:chosen.length});
  for(const relaxation of relaxations) warnings.push({code:'diversity-cap-relaxed',...relaxation});
  return {
    recipes:chosen.map(selectedPublicRecipe),
    coverage:{target:effective.target,published:chosen.length,eligible:eligible.length,heldForReview,uncoveredOfferIds,sparse,relaxations},
    warnings,
  };
}
