import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

import {generateCatalog, parseCsv} from './generate-meal-offers.mjs';
import {
  buildStoreCandidateReport,
  discoverStoreRecipeCandidates,
} from './find-store-recipe-candidates.mjs';
import {PUBLICATION_APPROVAL_METHOD, PUBLICATION_VALIDATION_VERSION, rankByQuality, representsUnknownActionIngredient, sourceContentHash, sourceOfferRisk, unquantifiedActionIngredients} from './lib/select-store-recipes.mjs';

export const APPROVAL_METHOD=PUBLICATION_APPROVAL_METHOD;
export const VALIDATION_VERSION=PUBLICATION_VALIDATION_VERSION;
export const REVIEW_THRESHOLD=100;
export const DEFAULT_TARGET=120;

const text=(value)=>typeof value==='string'&&value.trim()?value.trim():null;
const idOf=(candidate)=>String(candidate?.sourceRecipeId??candidate?.recipeId??'');
const clean=(value)=>String(value??'').normalize('NFKC').replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/gi,' ').replace(/\s+/g,' ').trim();
const registryKey=(entry)=>[entry.sourceRecipeId,entry.sourceContentHash,entry.transformVersion].join('|');

function registeredRecipeIds(registry) {
  return new Set(Object.values(registry?.recipes||{}).filter((entry)=>entry?.approved===true).map((entry)=>String(entry.sourceRecipeId||'')));
}

function linkedOffers(candidate,candidateReport) {
  const exactOfferIds=new Set((candidate.matches||[]).filter((match)=>match.relation==='exact-ingredient').map((match)=>match.offerId));
  const linked=[];
  for(const location of candidateReport.locations||[]) {
    for(const offer of location.offers||[]) {
      if(!exactOfferIds.has(offer.offerId)) continue;
      if(!(offer.recipeCandidateIds||[]).map(String).includes(idOf(candidate))) continue;
      linked.push({locationId:[location.postcode,location.store,location.branchId].join('|'),location,offer,match:(candidate.matches||[]).find((match)=>match.offerId===offer.offerId&&match.relation==='exact-ingredient')});
    }
  }
  return linked.sort((left,right)=>left.locationId.localeCompare(right.locationId)||left.offer.offerId.localeCompare(right.offer.offerId));
}

function eligibilityReason(candidate,candidateReport) {
  if(Number(candidate.reviewCount)<REVIEW_THRESHOLD) return 'review-threshold';
  if(!text(candidate.sourceUrl)) return 'missing-source-url';
  if(!text(candidate.title)) return 'missing-source-title';
  if(!text(candidate.author)) return 'missing-source-author';
  if(!Array.isArray(candidate.ingredients)||candidate.ingredients.length<2) return 'incomplete-ingredients';
  if(!Array.isArray(candidate.steps)||candidate.steps.length<3) return 'incomplete-steps';
  if(!candidate.steps.every((step,index)=>Number(step.ordinal)===index+1&&text(step.instruction))) return 'noncontiguous-steps';
  const links=linkedOffers(candidate,candidateReport);
  if(!links.length) return 'no-exact-store-offer';
  const offerRisk=sourceOfferRisk(candidate,links.map(({match})=>match),new Map(links.map(({offer})=>[offer.offerId,offer])));
  if(offerRisk) return offerRisk;
  const primaryLabels=new Set(links.flatMap(({offer})=>[offer.identity?.ingredientId]).filter(Boolean));
  const quantified=candidate.ingredients.some((ingredient)=>text(ingredient.quantity)&&(
    primaryLabels.has(ingredient.ingredient)||primaryLabels.has(ingredient.label)
  ));
  if(!quantified) return 'unquantified-primary-match';
  return null;
}

function currentLocationCounts(candidateReport,registry) {
  const approved=registeredRecipeIds(registry);
  return new Map((candidateReport.locations||[]).map((location)=>{
    const locationIds=new Set((location.offers||[]).flatMap((offer)=>offer.recipeCandidateIds||[]).map(String));
    return [[location.postcode,location.store,location.branchId].join('|'),[...locationIds].filter((id)=>approved.has(id)).length];
  }));
}

export function derivePublicationProfile(candidate,candidateReport) {
  const title=text(candidate.title)||'';
  const links=linkedOffers(candidate,candidateReport);
  const allPrimary=[...new Set(links.map(({offer})=>offer.identity?.ingredientId).filter(Boolean))].sort();
  const evidenced=[...new Set(links.filter(({match})=>match?.titleEvidence===true).map(({offer})=>offer.identity?.ingredientId).filter(Boolean))].sort();
  const ingredientOrder=(candidate.ingredients||[]).map((item)=>String(item.ingredient||item.label||'').replace(/\s+/g,''));
  const firstIngredient=allPrimary.slice().sort((left,right)=>{
    const leftIndex=ingredientOrder.indexOf(left.replace(/\s+/g,'')),rightIndex=ingredientOrder.indexOf(right.replace(/\s+/g,''));
    return (leftIndex<0?Number.MAX_SAFE_INTEGER:leftIndex)-(rightIndex<0?Number.MAX_SAFE_INTEGER:rightIndex)||left.localeCompare(right);
  })[0];
  const primary=evidenced.length?evidenced:(firstIngredient?[firstIngredient]:[]);
  const ingredient=allPrimary.join(' ');
  const family=/닭/.test(ingredient)?'chicken':/돼지/.test(ingredient)?'pork':/소고기|쇠고기/.test(ingredient)?'beef':/연어/.test(ingredient)?'salmon':/참치/.test(ingredient)?'tuna':/달걀|계란/.test(ingredient)?'egg':/요거트|요구르트/.test(ingredient)?'yogurt':/치즈/.test(ingredient)?'cheese':/복숭아|사과|바나나|과일/.test(ingredient)?'fruit':/양파|감자|토마토|채소/.test(ingredient)?'vegetable':'other';
  const soupTitle=/미역국|된장국|국밥|닭개장|육개장|(?:국|탕|찌개|수프|스프|죽)(?:\s|$|[),])/u.test(title);
  const method=/볶/.test(title)?'stirfry':/구이|스테이크/.test(title)?'grill':/조림|장조림|졸임/.test(title)?'braise':/찜/.test(title)?'steam':soupTitle?'soup':/튀김|강정/.test(title)?'fry':/샐러드|무침|냉채/.test(title)?'salad':/밥|덮밥|김밥|초밥|포케/.test(title)?'rice':'other';
  const kind=/요거트|요구르트|토스트|샌드위치|오믈렛|아침|주스|스무디|쉐이크|라떼|와플|팬케이크|핫케익|카나페|까나페|파르페|케이크|카스테라|크로플|디저트|간식/.test(title)?'breakfast':/샐러드|무침|냉채|피클|절임|장아찌/.test(title)?'side':'main';
  return {primaryIngredients:primary,family,method,kind};
}

export function selectPublicationExpansion({candidateReport,registry={schemaVersion:1,recipes:{}},target=DEFAULT_TARGET}) {
  if(!Number.isInteger(target)||target<1) throw new Error('target must be a positive integer');
  const existing=registeredRecipeIds(registry);
  const locationCounts=currentLocationCounts(candidateReport,registry);
  const exclusions=[];
  const eligible=[];
  for(const candidate of [...(candidateReport.candidates||[])].sort((a,b)=>idOf(a).localeCompare(idOf(b)))) {
    if(existing.has(idOf(candidate))) { exclusions.push({sourceRecipeId:idOf(candidate),reason:'already-registered'}); continue; }
    const reason=eligibilityReason(candidate,candidateReport);
    if(reason) { exclusions.push({sourceRecipeId:idOf(candidate),reason}); continue; }
    const links=linkedOffers(candidate,candidateReport);
    const recommendationProfile=derivePublicationProfile(candidate,candidateReport);
    const primaryIngredients=new Set(recommendationProfile.primaryIngredients);
    const definingLinks=links.filter(({offer})=>primaryIngredients.has(offer.identity?.ingredientId));
    const offersById=new Map(definingLinks.map(({offer})=>[offer.offerId,offer]));
    const offerRisk=sourceOfferRisk(candidate,definingLinks.map(({match})=>match),offersById);
    if(offerRisk) { exclusions.push({sourceRecipeId:idOf(candidate),reason:offerRisk}); continue; }
    eligible.push({...candidate,recommendationProfile,_locationIds:[...new Set(definingLinks.map((link)=>link.locationId))],_identityKeys:[...new Set(definingLinks.map(({offer})=>JSON.stringify(offer.identity)))].sort()});
  }
  const ranked=rankByQuality(eligible);
  const qualityRank=new Map(ranked.map((candidate,index)=>[idOf(candidate),index]));
  const selected=[];
  const selectedIds=new Set();
  const selectedLocationCounts=new Map();
  const identityCounts=new Map(),familyCounts=new Map(),methodCounts=new Map(),authorCounts=new Map();
  const mainTarget=target>=30?Math.round(target*0.8):target;
  const auxiliaryTarget=target-mainTarget;
  const kindTargets={main:mainTarget,breakfast:Math.floor(auxiliaryTarget/2),side:Math.ceil(auxiliaryTarget/2)};
  const kindCounts={main:0,breakfast:0,side:0};
  const count=(map,key)=>map.get(key)||0;
  while(selected.length<target&&selected.length<eligible.length) {
    let remaining=eligible.filter((candidate)=>!selectedIds.has(idOf(candidate)));
    const unmetKinds=Object.keys(kindTargets).filter((kind)=>kindCounts[kind]<kindTargets[kind]&&remaining.some((candidate)=>candidate.recommendationProfile.kind===kind));
    if(unmetKinds.length) {
      const lowestRatio=Math.min(...unmetKinds.map((kind)=>kindCounts[kind]/kindTargets[kind]));
      const preferredKinds=new Set(unmetKinds.filter((kind)=>kindCounts[kind]/kindTargets[kind]===lowestRatio));
      remaining=remaining.filter((candidate)=>preferredKinds.has(candidate.recommendationProfile.kind));
    }
    remaining.sort((left,right)=>{
      const leftProfile=left.recommendationProfile,rightProfile=right.recommendationProfile;
      const scarcity=(candidate)=>Math.min(...candidate._locationIds.map((locationId)=>(locationCounts.get(locationId)||0)+(selectedLocationCounts.get(locationId)||0)));
      const diversity=(candidate,profile)=>Math.min(...candidate._identityKeys.map((key)=>count(identityCounts,key)))+count(familyCounts,profile.family)+count(methodCounts,profile.method)+count(authorCounts,candidate.author);
      return scarcity(left)-scarcity(right)
        || diversity(left,leftProfile)-diversity(right,rightProfile)
        || qualityRank.get(idOf(left))-qualityRank.get(idOf(right))
        || idOf(left).localeCompare(idOf(right));
    });
    const chosen=remaining[0];
    const profile=chosen.recommendationProfile;
    selected.push(chosen);
    selectedIds.add(idOf(chosen));
    chosen._locationIds.forEach((key)=>selectedLocationCounts.set(key,count(selectedLocationCounts,key)+1));
    chosen._identityKeys.forEach((key)=>identityCounts.set(key,count(identityCounts,key)+1));
    familyCounts.set(profile.family,count(familyCounts,profile.family)+1);
    methodCounts.set(profile.method,count(methodCounts,profile.method)+1);
    authorCounts.set(chosen.author,count(authorCounts,chosen.author)+1);
    kindCounts[profile.kind]=(kindCounts[profile.kind]||0)+1;
  }
  const exclusionCounts=Object.fromEntries([...exclusions.reduce((counts,item)=>counts.set(item.reason,count(counts,item.reason)+1),new Map())].sort());
  const coverage=Object.fromEntries([...locationCounts].sort().map(([locationId,before])=>[locationId,{before,added:selected.filter((candidate)=>candidate._locationIds.includes(locationId)).length}]));
  return {target,selected,exclusions,exclusionCounts,coverage};
}

function ingredientText(item) {
  const label=clean(item.label||item.ingredient);
  const quantity=clean(item.quantity);
  if(!quantity||label.includes(quantity)) return label;
  return `${label} ${quantity}`.trim();
}

const PHRASES=[
  [/달궈\s*주세요[.!]?$/u,'달군다.'],[/볶아\s*주세요[.!]?$/u,'볶는다.'],[/담아\s*주세요[.!]?$/u,'담는다.'],[/섞어\s*주세요[.!]?$/u,'섞는다.'],[/썰어\s*주세요[.!]?$/u,'썬다.'],[/익혀\s*주세요[.!]?$/u,'익힌다.'],[/끓여\s*주세요[.!]?$/u,'끓인다.'],[/구워\s*주세요[.!]?$/u,'굽는다.'],
  [/해\s*주세요[.!]?$/u,'한다.'],[/해주세요[.!]?$/u,'한다.'],[/합니다[.!]?$/u,'한다.'],[/하세요[.!]?$/u,'한다.'],[/됩니다[.!]?$/u,'되도록 둔다.'],
  [/한입 크기로/gu,'먹기 좋은 크기로'],[/소금으로/gu,'소금을 더해'],[/양파는 얇게/gu,'양파를 가늘게'],[/채 썰고/gu,'채로 썬 뒤'],[/팬을 중불로/gu,'중불에서 팬을'],[/달군 팬에/gu,'팬이 달아오르면'],[/겉면이/gu,'표면이'],[/양파를 더해/gu,'양파까지 넣고'],[/접시에/gu,'그릇에'],
  [/넣고/gu,'넣은 다음'],[/넣어/gu,'넣은 뒤'],[/썰어/gu,'자른 뒤'],[/잘라/gu,'썬 뒤'],[/볶아/gu,'볶은 다음'],[/섞어/gu,'고루 섞어'],[/익도록/gu,'익을 때까지'],[/준비한/gu,'손질해 둔'],[/담아/gu,'담은 뒤'],
];

function paraphraseStep(instruction,index,total) {
  let value=clean(instruction).replace(/^[0-9]+[.)]\s*/u,'');
  for(const [pattern,replacement] of PHRASES) value=value.replace(pattern,replacement);
  value=value.replace(/\s*\.\s*/g,'. ').trim();
  if(!/[.!?]$/.test(value)) value+='.';
  const prefix=index===0?'먼저 ':index===total-1?'마지막으로 ':index%2?'이어서 ':'다음 단계에서는 ';
  return prefix+value.charAt(0).toLocaleLowerCase('ko')+value.slice(1);
}

function tokens(value) { return clean(value).replace(/[^\p{L}\p{N}]+/gu,' ').trim().split(/\s+/).filter(Boolean); }

function copiedRun(source,transformed) {
  const sourceTokens=tokens(source),targetTokens=tokens(transformed);
  const max=Math.min(sourceTokens.length,targetTokens.length);
  for(let size=max;size>=6;size--) {
    const chunks=new Set(Array.from({length:sourceTokens.length-size+1},(_,index)=>sourceTokens.slice(index,index+size).join(' ')));
    if(Array.from({length:targetTokens.length-size+1},(_,index)=>targetTokens.slice(index,index+size).join(' ')).some((chunk)=>chunks.has(chunk))) return size;
  }
  return 0;
}

function numericFacts(value) { return [...String(value??'').matchAll(/\d+(?:[.,]\d+)?(?:\s*(?:~|-|–)\s*\d+(?:[.,]\d+)?)?/g)].map((match)=>match[0].replace(/\s+/g,'')); }

const PROTECTED_FACT_PATTERNS=[
  ['중약불',/중약불/u],['중강불',/중강불/u],['약불',/약불/u],['중불',/중불/u],['센불',/센\s*불/u],['강불',/강\s*불/u],
  ['turn-off-heat',/불을\s*(?:끄|꺼)/u],['냉장',/냉장/u],['냉동',/냉동/u],['실온',/실온/u],['숙성',/숙성/u],
  ['marinate',/재우|재워|재운|재웠/u],['밑간',/밑간/u],['속까지',/속까지/u],['완전히',/완전히/u],['remove-moisture',/물기(?:를|가)?\s*(?:제거|빼|뺀|닦|없)/u],
];
const protectedFacts=(value)=>new Set(PROTECTED_FACT_PATTERNS.filter(([,pattern])=>pattern.test(value)).map(([fact])=>fact));

export function validateEditorialTransform(candidate,entry) {
  const errors=[];
  const allowedFields=new Set(['sourceRecipeId','sourceContentHash','transformVersion','approved','approvedAt','approvalMethod','validationVersion','sourceDate','title','detailIngredients','steps','recommendationProfile']);
  if(Object.keys(entry||{}).some((key)=>!allowedFields.has(key))) errors.push('raw-source-field');
  if(entry.sourceContentHash!==sourceContentHash(candidate)) errors.push('source-hash-mismatch');
  if(entry.approved!==true||entry.approvalMethod!==APPROVAL_METHOD) errors.push('approval-boundary');
  if(entry.validationVersion!==VALIDATION_VERSION) errors.push('validation-boundary');
  if(!text(entry.title)||!Array.isArray(entry.detailIngredients)||entry.detailIngredients.length<2) errors.push('incomplete-transform');
  if(text(entry.title)&&!/[가-힣]/.test(entry.title)) errors.push('non-korean-title');
  if(!Array.isArray(entry.steps)||entry.steps.length<3) errors.push('incomplete-transform');
  const expectedPrimary=[...(candidate.recommendationProfile?.primaryIngredients||[])].sort();
  const actualPrimary=[...(entry.recommendationProfile?.primaryIngredients||[])].sort();
  if(JSON.stringify(actualPrimary)!==JSON.stringify(expectedPrimary)) errors.push('profile-primary-mismatch');
  if(!['main','breakfast','side'].includes(entry.recommendationProfile?.kind)||!text(entry.recommendationProfile?.family)||!text(entry.recommendationProfile?.method)) errors.push('invalid-recommendation-profile');
  if((candidate.steps||[]).length>=4&&entry.steps.length<4) errors.push('lost-action-steps');
  if(JSON.stringify(entry).match(/<[^>]+>/)) errors.push('raw-markup');
  const ingredientOutput=(entry.detailIngredients||[]).map(clean).join(' ');
  if((candidate.ingredients||[]).some((ingredient)=>text(ingredient.quantity)&&!ingredientOutput.includes(clean(ingredient.quantity)))) errors.push('lost-ingredient-quantity');
  const sourceSteps=(candidate.steps||[]).map((step)=>clean(step.instruction));
  const outputSteps=(entry.steps||[]).map(clean);
  if(sourceSteps.some((raw)=>outputSteps.some((summary)=>raw===summary||summary.includes(raw)||copiedRun(raw,summary)>=6))) errors.push('copied-source-step');
  const allSourceSteps=sourceSteps.join(' '),allOutputSteps=outputSteps.join(' ');
  if(/(?:[5-9]\d|[1-9]\d{2,})\s*리터/u.test(allSourceSteps)||/\d+(?:천|백|만)[^\s]{0,8}원/u.test(allSourceSteps)) errors.push('source-anomaly');
  const sourceProtectedFacts=protectedFacts(allSourceSteps),outputProtectedFacts=protectedFacts(allOutputSteps);
  if([...sourceProtectedFacts].some((fact)=>!outputProtectedFacts.has(fact))) errors.push('lost-protected-fact');
  const allNumericFacts=numericFacts(allSourceSteps),allOutputNumericFacts=new Set(numericFacts(allOutputSteps));
  if(allNumericFacts.some((fact)=>!allOutputNumericFacts.has(fact))) errors.push('lost-numeric-fact');
  const allowedNumericFacts=new Set(numericFacts(allSourceSteps+' '+(candidate.ingredients||[]).map((ingredient)=>ingredient.quantity).join(' ')));
  if(numericFacts(allOutputSteps).some((fact)=>!allowedNumericFacts.has(fact))) errors.push('invented-numeric-fact');
  if([...outputProtectedFacts].some((fact)=>!sourceProtectedFacts.has(fact))) errors.push('invented-protected-fact');
  if(unquantifiedActionIngredients(candidate).some((ingredient)=>!representsUnknownActionIngredient(entry.detailIngredients,ingredient))) errors.push('unrepresented-action-ingredient');
  for(let index=0;index<Math.min(candidate.steps?.length||0,entry.steps?.length||0);index++) {
    const raw=clean(candidate.steps[index].instruction),summary=clean(entry.steps[index]);
    const expected=numericFacts(raw),actual=new Set(numericFacts(summary));
    if(expected.some((fact)=>!actual.has(fact))) errors.push('lost-numeric-fact');
  }
  if(entry.steps?.some((step)=>!/[가-힣]/.test(step))) errors.push('non-korean-summary');
  return [...new Set(errors)];
}

export function buildOwnerAuthorizedTransform(candidate,{sourceDate,approvalDate=sourceDate,transformVersion='ko-paraphrase-v1'}={}) {
  if(!/^\d{4}-\d{2}-\d{2}$/.test(sourceDate||'')) throw new Error('sourceDate must be YYYY-MM-DD');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(approvalDate||'')) throw new Error('approvalDate must be YYYY-MM-DD');
  const steps=(candidate.steps||[]).map((step,index,array)=>paraphraseStep(step.instruction,index,array.length));
  return {
    sourceRecipeId:idOf(candidate),sourceContentHash:sourceContentHash(candidate),transformVersion,
    approved:true,approvedAt:approvalDate,approvalMethod:APPROVAL_METHOD,validationVersion:VALIDATION_VERSION,sourceDate,
    title:clean(candidate.title),detailIngredients:(candidate.ingredients||[]).map(ingredientText).filter(Boolean),steps,
    recommendationProfile:candidate.recommendationProfile||{primaryIngredients:[],family:'other',method:'other',kind:'main'},
  };
}

export function expandPublicationRegistry({registry,candidates,sourceDate,approvalDate=sourceDate}) {
  const next=structuredClone(registry||{schemaVersion:1,transformVersion:'ko-paraphrase-v1',recipes:{}});
  next.schemaVersion=1;next.transformVersion=next.transformVersion||'ko-paraphrase-v1';next.recipes=next.recipes||{};
  const accepted=[],held=[];
  for(const candidate of [...candidates].sort((a,b)=>idOf(a).localeCompare(idOf(b)))) {
    const entry=buildOwnerAuthorizedTransform(candidate,{sourceDate,approvalDate,transformVersion:next.transformVersion});
    const errors=validateEditorialTransform(candidate,entry);
    if(errors.length) { held.push({sourceRecipeId:idOf(candidate),errors}); continue; }
    next.recipes[registryKey(entry)]=entry;accepted.push(idOf(candidate));
  }
  next.recipes=Object.fromEntries(Object.entries(next.recipes).sort(([left],[right])=>left.localeCompare(right)));
  return {registry:next,accepted,held};
}

export function applyEditorialTransforms({registry,candidates,transforms,sourceDate,approvalDate=sourceDate}) {
  const sources=new Map((candidates||[]).map((candidate)=>[idOf(candidate),candidate]));
  const drafts=new Map();
  for(const transform of transforms||[]) {
    const sourceRecipeId=String(transform?.sourceRecipeId||'');
    if(!sourceRecipeId||drafts.has(sourceRecipeId)) throw new Error('Duplicate or missing editorial transform sourceRecipeId: '+sourceRecipeId);
    if(!sources.has(sourceRecipeId)) throw new Error('Editorial transform has no selected source: '+sourceRecipeId);
    drafts.set(sourceRecipeId,transform);
  }
  const next=structuredClone(registry||{schemaVersion:1,transformVersion:'ko-paraphrase-v1',recipes:{}});
  next.schemaVersion=1;next.transformVersion=next.transformVersion||'ko-paraphrase-v1';next.recipes=next.recipes||{};
  const accepted=[],held=[];
  const editorialFields=new Set(['sourceRecipeId','title','detailIngredients','steps','recommendationProfile']);
  for(const [sourceRecipeId,transform] of [...drafts].sort(([left],[right])=>left.localeCompare(right))) {
    const candidate=sources.get(sourceRecipeId);
    if(Object.keys(transform).some((key)=>!editorialFields.has(key))) {
      held.push({sourceRecipeId,errors:['raw-source-field']});
      continue;
    }
    const canonicalPrimary=candidate.recommendationProfile?.primaryIngredients||[];
    const submittedPrimary=new Set(transform.recommendationProfile?.primaryIngredients||[]);
    if(canonicalPrimary.some((ingredient)=>!submittedPrimary.has(ingredient))) {
      held.push({sourceRecipeId,errors:['profile-primary-mismatch']});
      continue;
    }
    const entry={
      sourceRecipeId,sourceContentHash:sourceContentHash(candidate),transformVersion:next.transformVersion,
      approved:true,approvedAt:approvalDate,approvalMethod:APPROVAL_METHOD,validationVersion:VALIDATION_VERSION,sourceDate,
      title:clean(transform.title),detailIngredients:(transform.detailIngredients||[]).map(clean),
      steps:(transform.steps||[]).map(clean),recommendationProfile:candidate.recommendationProfile,
    };
    const errors=validateEditorialTransform(candidate,entry);
    if(errors.length) { held.push({sourceRecipeId,errors}); continue; }
    next.recipes[registryKey(entry)]=entry;accepted.push(sourceRecipeId);
  }
  next.recipes=Object.fromEntries(Object.entries(next.recipes).sort(([left],[right])=>left.localeCompare(right)));
  return {registry:next,accepted,held};
}

function parseArgs(argv) {
  const args={csvPath:null,registryPath:null,outputRegistry:null,auditOutput:null,database:'01ontology',tenant:'recipe-full',target:DEFAULT_TARGET,sourceDate:null,approvalDate:null,transformPaths:[]};
  for(let index=0;index<argv.length;index++) {
    const value=argv[index];
    if(!args.csvPath&&!value.startsWith('--')) args.csvPath=value;
    else if(value==='--registry') args.registryPath=argv[++index];
    else if(value==='--output-registry') args.outputRegistry=argv[++index];
    else if(value==='--audit-output') args.auditOutput=argv[++index];
    else if(value==='--database') args.database=argv[++index];
    else if(value==='--tenant') args.tenant=argv[++index];
    else if(value==='--target') args.target=Number(argv[++index]);
    else if(value==='--source-date') args.sourceDate=argv[++index];
    else if(value==='--approval-date') args.approvalDate=argv[++index];
    else if(value==='--transforms') args.transformPaths.push(argv[++index]);
    else throw new Error('Unknown argument: '+value);
  }
  if(!args.csvPath||!args.registryPath||!args.outputRegistry||!args.auditOutput||!args.sourceDate||!args.approvalDate||!args.transformPaths.length) throw new Error('Usage: node scripts/select-meal-publication-expansion.mjs INPUT.csv --registry INPUT.json --output-registry OUTPUT.json --audit-output PRIVATE.json --source-date YYYY-MM-DD --approval-date YYYY-MM-DD --transforms DRAFTS.json [--transforms MORE.json ...] [--target 120]');
  return args;
}

export async function run(argv=process.argv.slice(2)) {
  const args=parseArgs(argv);
  for(const target of [args.outputRegistry,args.auditOutput]) if(fs.existsSync(target)) throw new Error('Output must not already exist: '+target);
  const rows=parseCsv(fs.readFileSync(args.csvPath,'utf8'));
  const generated=generateCatalog(rows,'/offers/'+path.basename(args.csvPath));
  const discovery=await discoverStoreRecipeCandidates({offers:generated.offersByIdentity,db:args.database,tenant:args.tenant,perIdentityLimit:500,totalLimit:5000});
  const candidateReport=buildStoreCandidateReport({packageCatalog:generated.packageCatalog,offersByIdentity:generated.offersByIdentity,meta:generated.meta,candidates:discovery.candidates,input:args.csvPath,database:args.database,tenant:args.tenant,discovery});
  const registry=JSON.parse(fs.readFileSync(args.registryPath,'utf8'));
  const selection=selectPublicationExpansion({candidateReport,registry,target:args.target});
  const transforms=args.transformPaths.flatMap((transformPath)=>{
    const value=JSON.parse(fs.readFileSync(transformPath,'utf8'));
    if(!Array.isArray(value)) throw new Error('Editorial transforms must be a JSON array: '+transformPath);
    return value;
  });
  const expansion=applyEditorialTransforms({registry,candidates:selection.selected,transforms,sourceDate:args.sourceDate,approvalDate:args.approvalDate});
  fs.mkdirSync(path.dirname(path.resolve(args.outputRegistry)),{recursive:true});
  fs.mkdirSync(path.dirname(path.resolve(args.auditOutput)),{recursive:true});
  fs.writeFileSync(args.outputRegistry,JSON.stringify(expansion.registry,null,2)+'\n');
  const audit={schemaVersion:1,target:args.target,reviewThreshold:REVIEW_THRESHOLD,selected:selection.selected.map((candidate)=>({sourceRecipeId:idOf(candidate),reviewCount:candidate.reviewCount,locationIds:candidate._locationIds,identityKeys:candidate._identityKeys})),accepted:expansion.accepted,held:expansion.held,exclusionCounts:selection.exclusionCounts,coverage:selection.coverage};
  fs.writeFileSync(args.auditOutput,JSON.stringify(audit,null,2)+'\n');
  console.log(JSON.stringify({target:args.target,selected:selection.selected.length,accepted:expansion.accepted.length,held:expansion.held.length,outputRegistry:args.outputRegistry,auditOutput:args.auditOutput}));
  return {selection,expansion,audit};
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) run().catch((error)=>{console.error(error.stack||error);process.exitCode=1;});
