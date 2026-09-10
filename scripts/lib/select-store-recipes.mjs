import crypto from 'node:crypto';

import {canonicalJson} from './meal-snapshot-schema.mjs';
import {offerIdentityKey} from '../find-store-recipe-candidates.mjs';

const DEFAULT_POLICY={target:48,kindCaps:{main:36,breakfast:6,side:6},identityCap:6,familyCap:8,methodCap:12,authorCap:4};

const sha256=(value)=>crypto.createHash('sha256').update(value).digest('hex');
const text=(value)=>typeof value==='string'&&value.trim() ? value.trim() : null;
const normalizeTitle=(value)=>String(value||'').normalize('NFKC').toLocaleLowerCase('ko').replace(/\s+/g,'').replace(/[^\p{L}\p{N}]/gu,'');

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
  if(!Array.isArray(candidate.ingredients)||candidate.ingredients.length<2) return 'incomplete-ingredients';
  if(!Array.isArray(candidate.steps)||candidate.steps.length<3) return 'incomplete-steps';
  if(!candidate.steps.every((step,index)=>Number(step.ordinal)===index+1&&text(step.instruction))) return 'noncontiguous-steps';
  const offersById=new Map(storeOffers.map((offer)=>[offer.offerId,offer]));
  const exactMatches=(candidate.matches||[]).filter((match)=>match.relation==='exact-ingredient'&&offersById.has(match.offerId));
  if(!exactMatches.length) return 'no-exact-store-offer';
  const quantified=exactMatches.some((match)=>candidate.ingredients.some((ingredient)=>
    text(ingredient.quantity)&&(ingredient.ingredient===match.ingredientLabel||ingredient.ingredient===match.ingredientId)
  ));
  if(!quantified) return 'unquantified-primary-match';
  if(!registryEntry?.approved) return 'unapproved-paraphrase';
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
  const matchedOffers=exactMatches.map((match)=>offerById.get(match.offerId)).sort((a,b)=>a.offerId.localeCompare(b.offerId));
  const profile=registryEntry.recommendationProfile||candidate.recommendationProfile||{};
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
