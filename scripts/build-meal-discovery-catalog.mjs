#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

import {derivePublicationProfile} from './select-meal-publication-expansion.mjs';
import {definingOfferLinks,ingredientLabelsMatch} from './lib/main-ingredient-gate.mjs';
import {sourceOfferRisk} from './lib/select-store-recipes.mjs';

const clean=(value)=>String(value??'').normalize('NFKC').replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/gi,' ').replace(/\s+/g,' ').trim();
const idOf=(candidate)=>String(candidate?.sourceRecipeId??candidate?.recipeId??'');
const count=(map,key)=>map.get(key)||0;

function linkedOffers(candidate,candidateReport) {
  const exactOfferIds=new Set((candidate.matches||[])
    .filter((match)=>match.relation==='exact-ingredient')
    .map((match)=>match.offerId));
  const linked=[];
  for(const location of candidateReport.locations||[]) {
    for(const offer of location.offers||[]) {
      if(!exactOfferIds.has(offer.offerId)) continue;
      if(!(offer.recipeCandidateIds||[]).map(String).includes(idOf(candidate))) continue;
      const match=(candidate.matches||[]).find((entry)=>entry.offerId===offer.offerId&&entry.relation==='exact-ingredient');
      linked.push({locationId:[location.postcode,location.store,location.branchId].join('|'),location,offer,match});
    }
  }
  return linked;
}

function ingredientText(item) {
  const label=clean(item.label||item.ingredient);
  const quantity=clean(item.quantity);
  if(!quantity||label.includes(quantity)) return label;
  return `${label} ${quantity}`.trim();
}

function dietaryFilters(candidate) {
  const ingredients=[candidate.title,...(candidate.ingredients||[]).map(ingredientText)].join(' ');
  const animal=/돼지|삼겹살|목살|등갈비|폭립|돈가스|돈까스|가츠|소고기|쇠고기|차돌|닭|치킨|오리|양고기|고기|장조림|햄|베이컨|소시지|스팸|연어|참치|고등어|생선|대구|삼치|황태|멸치|가쓰오|가츠오|가다랑어|새우|오징어|낙지|문어|바지락|조개|굴|게|어묵|크래미|맛살|명란|젓갈|액젓|굴소스|참치액|치킨스톡|육수|사골|장국|다시다|육개장/u;
  const ambiguousPreparedFood=/라면|김치|만두|떡갈비|햄버거|미트볼/u;
  return animal.test(ingredients)||ambiguousPreparedFood.test(ingredients)?[]:['vegetarian'];
}

function eligibility(candidate,candidateReport) {
  const sourceRecipeId=idOf(candidate);
  if(!/^\d{1,20}$/.test(sourceRecipeId)) return {reason:'invalid-source-id'};
  if(!clean(candidate.title)||!clean(candidate.sourceUrl)||!clean(candidate.author)) return {reason:'missing-source-metadata'};
  if(clean(candidate.sourceUrl)!=='https://www.10000recipe.com/recipe/'+sourceRecipeId) return {reason:'invalid-source-url'};
  if(!Array.isArray(candidate.ingredients)||candidate.ingredients.length<2) return {reason:'incomplete-ingredients'};
  if(!Array.isArray(candidate.steps)||candidate.steps.length<3) return {reason:'incomplete-steps'};
  const links=linkedOffers(candidate,candidateReport);
  if(!links.length) return {reason:'no-exact-store-offer'};
  const rawConsumptionTitle=/타르타르|사시미|육회|회덮밥|회무침|회국수|세비체|카르파초/u;
  const rawAnimalOffer=links.some(({offer})=>offer.identity?.processingState==='raw'&&offer.identity?.species!=='plant');
  if(rawAnimalOffer&&rawConsumptionTitle.test(candidate.title)) return {reason:'raw-consumption-unverified'};
  const risk=sourceOfferRisk(candidate,links.map(({match})=>match),new Map(links.map(({offer})=>[offer.offerId,offer])));
  if(risk) return {reason:risk};
  const primaryLinks=definingOfferLinks(candidate,links);
  if(!primaryLinks.length) return {reason:'incidental-exact-offer'};
  const profile=derivePublicationProfile(candidate,candidateReport);
  if(profile.kind!=='main') return {reason:'not-main-meal'};
  const primarySet=new Set(profile.primaryIngredients);
  const definingLinks=primaryLinks.filter(({offer})=>primarySet.has(offer.identity?.ingredientId));
  if(!definingLinks.length) return {reason:'no-defining-offer'};
  const quantified=definingLinks.some(({match})=>(candidate.ingredients||[]).some((ingredient)=>
    clean(ingredient.quantity)&&ingredientLabelsMatch(ingredient.ingredient??ingredient.label,match.ingredientLabel)
  ));
  if(!quantified) return {reason:'unquantified-primary-match'};
  return {profile,links:definingLinks};
}

export function buildDiscoveryCatalog({candidateReport,snapshotId,weekStart,target=240,candidateReportSha256=null}) {
  if(!/^[a-f0-9]{64}$/.test(snapshotId||'')) throw new Error('snapshotId must be a SHA-256 digest');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(weekStart||'')) throw new Error('weekStart must be YYYY-MM-DD');
  if(!Number.isInteger(target)||target<1||target>1000) throw new Error('target must be 1..1000');
  const exclusions=[];
  const eligible=[];
  for(const candidate of [...(candidateReport.candidates||[])].sort((left,right)=>idOf(left).localeCompare(idOf(right)))) {
    const result=eligibility(candidate,candidateReport);
    if(result.reason) { exclusions.push({sourceRecipeId:idOf(candidate),reason:result.reason}); continue; }
    const locations=[...new Map(result.links.map(({location})=>{
      const entry={postcode:location.postcode,store:location.store,branchId:location.branchId};
      return [[entry.postcode,entry.store,entry.branchId].join('|'),entry];
    })).values()].sort((left,right)=>[left.postcode,left.store,left.branchId].join('|').localeCompare([right.postcode,right.store,right.branchId].join('|')));
    eligible.push({candidate,profile:result.profile,locations});
  }

  const selected=[];
  const selectedIds=new Set();
  const locationCounts=new Map(),ingredientCounts=new Map(),familyCounts=new Map(),methodCounts=new Map();
  while(selected.length<target&&selected.length<eligible.length) {
    const remaining=eligible.filter(({candidate})=>!selectedIds.has(idOf(candidate)));
    remaining.sort((left,right)=>{
      const locationScarcity=(entry)=>Math.min(...entry.locations.map((location)=>count(locationCounts,[location.postcode,location.store,location.branchId].join('|'))));
      const ingredientScarcity=(entry)=>Math.min(...entry.profile.primaryIngredients.map((ingredient)=>count(ingredientCounts,ingredient)));
      return locationScarcity(left)-locationScarcity(right)
        || ingredientScarcity(left)-ingredientScarcity(right)
        || count(familyCounts,left.profile.family)-count(familyCounts,right.profile.family)
        || count(methodCounts,left.profile.method)-count(methodCounts,right.profile.method)
        || idOf(left.candidate).localeCompare(idOf(right.candidate));
    });
    const chosen=remaining[0];
    selected.push(chosen);selectedIds.add(idOf(chosen.candidate));
    chosen.locations.forEach((location)=>{
      const key=[location.postcode,location.store,location.branchId].join('|');
      locationCounts.set(key,count(locationCounts,key)+1);
    });
    chosen.profile.primaryIngredients.forEach((ingredient)=>ingredientCounts.set(ingredient,count(ingredientCounts,ingredient)+1));
    familyCounts.set(chosen.profile.family,count(familyCounts,chosen.profile.family)+1);
    methodCounts.set(chosen.profile.method,count(methodCounts,chosen.profile.method)+1);
  }

  const recipes=selected.map(({candidate,profile,locations})=>({
    sourceRecipeId:idOf(candidate),title:clean(candidate.title),sourceUrl:clean(candidate.sourceUrl),
    sourceAuthor:clean(candidate.author),sourceServingText:clean(candidate.sourceServingText),
    ingredients:(candidate.ingredients||[]).map(ingredientText).filter(Boolean),
    recommendationProfile:profile,dietaryFilters:dietaryFilters(candidate),locations,
    detailStatus:'source-link-only',
  })).sort((left,right)=>left.sourceRecipeId.localeCompare(right.sourceRecipeId));
  const exclusionCounts=Object.fromEntries([...exclusions.reduce((all,item)=>all.set(item.reason,count(all,item.reason)+1),new Map())].sort());
  const coverage=Object.fromEntries([...locationCounts].sort().map(([locationId,recipeCount])=>[locationId,{recipeCount}]));
  return {
    schemaVersion:1,catalogVersion:'exploration-v1',snapshotId,weekStart,
    source:{database:candidateReport.database??null,tenant:candidateReport.tenant??null,candidateReportSha256},
    recipeCount:recipes.length,recipes,coverage,exclusionCounts,
    limitation:'Exploration recipes use exact reviewed offer links but do not claim verified popularity, complete basket price, nutrition, or in-app instructions.',
  };
}

function parseArgs(argv) {
  const args={report:null,output:null,snapshotId:null,weekStart:null,target:240};
  for(let index=0;index<argv.length;index++) {
    const value=argv[index];
    if(!args.report&&!value.startsWith('--')) args.report=value;
    else if(value==='--output') args.output=argv[++index];
    else if(value==='--snapshot-id') args.snapshotId=argv[++index];
    else if(value==='--week-start') args.weekStart=argv[++index];
    else if(value==='--target') args.target=Number(argv[++index]);
    else throw new Error('Unknown argument: '+value);
  }
  if(!args.report||!args.output||!args.snapshotId||!args.weekStart) throw new Error('Usage: build-meal-discovery-catalog REPORT.json --output OUTPUT.json --snapshot-id SHA256 --week-start YYYY-MM-DD [--target 240]');
  return args;
}

export function run(argv=process.argv.slice(2)) {
  const args=parseArgs(argv);
  if(fs.existsSync(args.output)) throw new Error('Output must not already exist: '+args.output);
  const raw=fs.readFileSync(args.report);
  const candidateReport=JSON.parse(raw);
  const catalog=buildDiscoveryCatalog({
    candidateReport,snapshotId:args.snapshotId,weekStart:args.weekStart,target:args.target,
    candidateReportSha256:crypto.createHash('sha256').update(raw).digest('hex'),
  });
  fs.mkdirSync(path.dirname(path.resolve(args.output)),{recursive:true});
  fs.writeFileSync(args.output,JSON.stringify(catalog)+'\n');
  console.log(JSON.stringify({recipes:catalog.recipeCount,coverage:catalog.coverage,output:args.output}));
  return catalog;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) run();
