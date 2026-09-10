import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {generateCatalog,parseCsv} from './generate-meal-offers.mjs';

export const recipeSearchSpec = {
  '닭가슴살': {ingredientLabels:['닭가슴살'],titleTerms:['닭가슴살']},
  '닭안심': {ingredientLabels:['닭안심','닭안심살'],titleTerms:['닭안심']},
  '돼지안심': {ingredientLabels:['돼지고기 안심','돼지고기안심','돼지안심','돼지 안심'],titleTerms:['돼지안심','돼지고기 안심']},
  '돼지목살': {ingredientLabels:['돼지고기 목살','돼지고기목살','돼지목살','돼지 목살'],titleTerms:['목살']},
  '돼지등심': {ingredientLabels:['돼지고기 등심','돼지고기등심','돼지등심','돼지 등심'],titleTerms:['등심']},
  '돼지뒷다리살': {ingredientLabels:['돼지고기 뒷다리살','돼지고기뒷다리살','돼지뒷다리살','돼지 뒷다리살'],titleTerms:['뒷다리살']},
  '돼지다짐육': {ingredientLabels:['다진 돼지고기','돼지고기 다짐육','돼지다짐육'],titleTerms:['다진 돼지고기','돼지고기 미트볼']},
  '소고기등심': {ingredientLabels:['소고기등심','소고기 등심','소고기 꽃등심','꽃등심'],titleTerms:['등심','꽃등심','찹스테이크']},
  '연어': {ingredientLabels:['연어','생연어','연어필렛'],titleTerms:['연어']},
  '훈제연어': {ingredientLabels:['훈제연어'],titleTerms:['훈제연어']},
  '토마토': {ingredientLabels:['토마토','방울토마토'],titleTerms:['토마토']},
  '파프리카': {ingredientLabels:['파프리카'],titleTerms:['파프리카']},
  '버섯': {ingredientLabels:['버섯','새송이버섯','표고버섯','느타리버섯'],titleTerms:['버섯']},
  '감자': {ingredientLabels:['감자'],titleTerms:['감자']},
  '당근': {ingredientLabels:['당근'],titleTerms:['당근']},
  '주키니': {ingredientLabels:['주키니','애호박'],titleTerms:['주키니','애호박']},
  '오이': {ingredientLabels:['오이'],titleTerms:['오이']},
  '레몬': {ingredientLabels:['레몬','레몬즙'],titleTerms:['레몬']},
  '바나나': {ingredientLabels:['바나나'],titleTerms:['바나나']},
  '블루베리': {ingredientLabels:['블루베리','냉동 블루베리'],titleTerms:['블루베리']},
  '복숭아': {ingredientLabels:['복숭아'],titleTerms:['복숭아']},
  '사과': {ingredientLabels:['사과'],titleTerms:['사과']},
  '포도': {ingredientLabels:['포도'],titleTerms:['포도']},
  '요거트': {ingredientLabels:['요거트','플레인요거트','플레인 요거트'],titleTerms:['요거트']},
  '슬라이스치즈': {ingredientLabels:['슬라이스치즈','체다슬라이스치즈','체다 슬라이스치즈'],titleTerms:['슬라이스치즈','치즈 오믈렛']},
  '파스타': {ingredientLabels:['파스타면','스파게티면'],titleTerms:['파스타','스파게티']},
  '쌀': {ingredientLabels:['쌀','밥'],titleTerms:['밥','덮밥','볶음밥']},
};

const identityFields=['ingredientId','species','cut','processingState','form','composition'];

function identityKey(identity) {
  return identityFields.map((field)=>identity?.[field]||'').join('\u001f');
}

function ingredientLabel(ingredient) {
  return typeof ingredient==='string' ? ingredient : ingredient?.ingredient ?? ingredient?.ingredientLabel ?? ingredient?.label ?? null;
}

export function parseRating(value) {
  const rating=value===null||value===undefined ? null : String(value);
  if(rating===null) return {rating:null,ratingNumber:null};
  const trimmed=rating.trim();
  return {rating,ratingNumber:/^(?:\d+(?:\.\d+)?|\.\d+)$/.test(trimmed) ? Number(trimmed) : null};
}

function positiveOrdinal(value) {
  const number=Number(value);
  return Number.isInteger(number)&&number>0 ? number : null;
}

function nonNegativeInteger(value) {
  if(value===null||value===undefined||value==='') return null;
  const number=Number(value);
  return Number.isSafeInteger(number)&&number>=0 ? number : null;
}

function ordered(items=[],positionFallback=false) {
  return items.map((item,index)=>({...item,ordinal:positiveOrdinal(item.ordinal)??(positionFallback?index+1:null)}))
    .sort((left,right)=>(left.ordinal??Number.POSITIVE_INFINITY)-(right.ordinal??Number.POSITIVE_INFINITY));
}

export function normalizeCandidateExport(candidate) {
  const parsed=parseRating(candidate.rating);
  return {
    recipeId:String(candidate.recipeId??candidate.sourceRecipeId??''),
    sourceRecipeId:String(candidate.sourceRecipeId??candidate.recipeId??''),
    title:candidate.title??null,
    sourceUrl:candidate.sourceUrl??null,
    author:candidate.author??null,
    rating:parsed.rating,
    ratingNumber:parsed.ratingNumber,
    reviewCount:nonNegativeInteger(candidate.reviewCount),
    stepCount:nonNegativeInteger(candidate.stepCount),
    ingredientCount:nonNegativeInteger(candidate.ingredientCount),
    measuredIngredientCount:nonNegativeInteger(candidate.measuredIngredientCount),
    sourceServingText:candidate.sourceServingText??null,
    ingredients:ordered(candidate.ingredients,true).map((item)=>({
      ordinal:item.ordinal,
      label:item.label??null,
      ingredient:ingredientLabel(item),
      quantity:item.quantity??null,
    })),
    steps:ordered(candidate.steps).map((item)=>({
      ordinal:item.ordinal,
      name:item.name??null,
      instruction:item.instruction??item.instructionText??null,
    })),
    matches:Array.isArray(candidate.matches) ? candidate.matches : [],
  };
}

export function matchCandidate(candidate,offer) {
  const ingredientId=offer?.identity?.ingredientId;
  const spec=recipeSearchSpec[ingredientId]??recipeSearchSpec[offer?.ingredient]??(ingredientId?{ingredientLabels:[ingredientId],titleTerms:[ingredientId]}:null);
  if(!offer?.offerId||!spec||identityFields.some((field)=>!offer.identity?.[field])) return null;
  const structuredIdentities=candidate.ingredientIdentities??candidate.identities;
  let ingredient;
  if(Array.isArray(structuredIdentities)&&structuredIdentities.length) {
    const exact=structuredIdentities.find((identity)=>identityKey(identity)===identityKey(offer.identity));
    if(!exact) return null;
    ingredient=exact.ingredientLabel??exact.ingredientId;
  } else {
    const labels=(candidate.ingredients||candidate.matchedIngredientLabels||[]).map(ingredientLabel).filter(Boolean);
    ingredient=labels.find((label)=>spec.ingredientLabels.includes(label));
  }
  if(!ingredient) return null;
  return {
    offerId:offer.offerId,
    relation:'exact-ingredient',
    ingredientId,
    ingredientLabel:ingredient,
    titleEvidence:spec.titleTerms.some((term)=>String(candidate.title||'').includes(term)),
  };
}

function recipeSearchSpecForOffer(offer) {
  const ingredientId=offer?.identity?.ingredientId;
  const spec=recipeSearchSpec[ingredientId]??recipeSearchSpec[offer?.ingredient]??(ingredientId?{ingredientLabels:[ingredientId],titleTerms:[ingredientId]}:null);
  if(!offer?.offerId||!spec||identityFields.some((field)=>!offer.identity?.[field])) return null;
  return {
    identityId:offer.identity.ingredientId,
    identity:offer.identity,
    ingredientLabels:spec.ingredientLabels,
    titleTerms:spec.titleTerms,
  };
}

export function searchRequestForOffers(offers) {
  const byIdentity=new Map();
  for(const offer of offers) {
    const spec=recipeSearchSpecForOffer(offer);
    if(!spec) continue;
    const key=identityKey(offer.identity);
    if(!byIdentity.has(key)) byIdentity.set(key,spec);
  }
  return [...byIdentity.values()].sort((left,right)=>left.identityId.localeCompare(right.identityId));
}

export function searchRequestForCatalog(packageCatalog) {
  const keys = new Set();
  for (const stores of Object.values(packageCatalog)) {
    for (const catalog of Object.values(stores)) for (const key of Object.keys(catalog)) keys.add(key);
  }
  return [...keys].filter((key)=>recipeSearchSpec[key]).sort().map((key)=>({key,...recipeSearchSpec[key]}));
}

function rowsFromPsql(database,sql,variables) {
  const args=['-X','-qAt','-w','-d',database,'-v','ON_ERROR_STOP=1'];
  for(const [key,value] of Object.entries(variables)) args.push('-v',key+'='+value);
  args.push('-f',sql);
  const stdout=execFileSync('psql',args,{encoding:'utf8',maxBuffer:128*1024*1024});
  return stdout.split(/\r?\n/).filter(Boolean).map((line)=>JSON.parse(line));
}

function psqlDatabase(database) {
  return {
    findCandidateMetadata({searchSpec,tenant,perIdentityLimit}) {
      return rowsFromPsql(database,fileURLToPath(new URL('./find-store-recipe-candidates.sql',import.meta.url)),{
        search_spec_json:JSON.stringify(searchSpec),tenant,candidate_limit:perIdentityLimit,
      });
    },
    exportCandidateFacts(recipeIds,{tenant}) {
      if(!recipeIds.length) return [];
      return rowsFromPsql(database,fileURLToPath(new URL('./export-store-recipe-candidates.sql',import.meta.url)),{
        recipe_ids_json:JSON.stringify(recipeIds),tenant,
      });
    },
  };
}

function candidateOrder(left,right) {
  const leftTitle=left.titleEvidence===true?1:0;
  const rightTitle=right.titleEvidence===true?1:0;
  if(leftTitle!==rightTitle) return rightTitle-leftTitle;
  const reviews=(Number(right.reviewCount)||0)-(Number(left.reviewCount)||0);
  if(reviews) return reviews;
  const rating=(parseRating(right.rating).ratingNumber??-1)-(parseRating(left.rating).ratingNumber??-1);
  return rating||String(left.recipeId??left.sourceRecipeId).localeCompare(String(right.recipeId??right.sourceRecipeId));
}

export async function discoverStoreRecipeCandidates({offers,db,tenant,perIdentityLimit=500,totalLimit=5000}) {
  if(!Array.isArray(offers)) throw new TypeError('offers must be an array');
  if(!tenant) throw new TypeError('tenant is required');
  if(!Number.isInteger(perIdentityLimit)||perIdentityLimit<1) throw new TypeError('perIdentityLimit must be a positive integer');
  if(!Number.isInteger(totalLimit)||totalLimit<1) throw new TypeError('totalLimit must be a positive integer');
  const searchSpec=searchRequestForOffers(offers);
  const database=typeof db==='string' ? psqlDatabase(db) : db;
  if(!database?.findCandidateMetadata||!database?.exportCandidateFacts) throw new TypeError('db must name a database or provide discovery methods');
  const metadata=await database.findCandidateMetadata({searchSpec,tenant,perIdentityLimit,totalLimit});
  const selectedByRecipe=new Map();
  const identityStats={};
  const overflow={};
  const zeroCandidateIdentities=[];
  const identityResults=searchSpec.map((spec)=>{
    const identityOffers=offers.filter((offer)=>identityKey(offer.identity)===identityKey(spec.identity));
    const eligible=metadata.filter((candidate)=>{
      if(candidate.identityId&&candidate.identityId!==spec.identityId) return false;
      return Boolean(matchCandidate(candidate,identityOffers[0]));
    }).sort(candidateOrder);
    const reportedTotal=eligible.reduce((total,candidate)=>Math.max(total,Number(candidate.identityTotal)||0),0);
    const total=Math.max(reportedTotal,eligible.length);
    if(total===0) zeroCandidateIdentities.push(spec.identityId);
    return {spec,total,eligible:eligible.slice(0,perIdentityLimit),returned:0};
  });

  for(let rank=0;rank<perIdentityLimit;rank++) {
    for(const result of identityResults) {
      const candidate=result.eligible[rank];
      if(!candidate) continue;
      const recipeId=String(candidate.recipeId??candidate.sourceRecipeId??'');
      if(!recipeId) continue;
      if(!selectedByRecipe.has(recipeId)&&selectedByRecipe.size>=totalLimit) continue;
      result.returned++;
      if(!selectedByRecipe.has(recipeId)) selectedByRecipe.set(recipeId,candidate);
    }
  }

  for(const result of identityResults) {
    const {identityId}=result.spec;
    const stats={total:result.total,returned:result.returned,omitted:result.total-result.returned};
    identityStats[identityId]=stats;
    if(stats.omitted>0) overflow[identityId]=stats;
  }

  const recipeIds=[...selectedByRecipe.keys()];
  const facts=await database.exportCandidateFacts(recipeIds,{tenant});
  const factsById=new Map(facts.map((candidate)=>[String(candidate.recipeId??candidate.sourceRecipeId),candidate]));
  for(const recipeId of recipeIds) {
    if(!factsById.has(recipeId)) throw new Error('Full candidate export omitted recipe: '+recipeId);
  }
  const candidates=recipeIds.map((recipeId)=>{
    const candidate=normalizeCandidateExport({...selectedByRecipe.get(recipeId),...factsById.get(recipeId)});
    candidate.matches=offers.map((offer)=>matchCandidate(candidate,offer)).filter(Boolean);
    return candidate;
  });
  return {candidates,identityStats,overflow,zeroCandidateIdentities};
}

export function buildStoreCandidateReport({packageCatalog,offersByIdentity,meta,candidates,input,database,tenant='recipe-full',discovery}) {
  if(offersByIdentity) {
    const locations=[];
    for(const [postcode,stores] of Object.entries(meta.stores)) {
      for(const store of stores) {
        const offers=offersByIdentity.filter((offer)=>offer.postcode===postcode&&offer.chain===store).map((offer)=>{
          const recipeCandidateIds=candidates.filter((candidate)=>candidate.matches.some((match)=>match.offerId===offer.offerId)).map((candidate)=>candidate.recipeId);
          return {...offer,recipeCandidateIds};
        });
        locations.push({postcode,store,branch:meta.profiles[postcode][store].branch,branchId:offers[0]?.branchId??null,offers});
      }
    }
    const zeroCandidateOfferIds=locations.flatMap((location)=>location.offers).filter((offer)=>offer.recipeCandidateIds.length===0).map((offer)=>offer.offerId);
    return {
      generatedAt:new Date().toISOString(),input,database,tenant,locations,
      candidates,zeroCandidateOfferIds,
      identityStats:discovery?.identityStats??{},overflow:discovery?.overflow??{},
      zeroCandidateIdentities:discovery?.zeroCandidateIdentities??[],
    };
  }
  const byKey = new Map();
  for (const candidate of candidates) {
    if (!byKey.has(candidate.offerKey)) byKey.set(candidate.offerKey,[]);
    byKey.get(candidate.offerKey).push(candidate);
  }
  const locations=[];
  for (const [postcode,stores] of Object.entries(meta.stores)) {
    for (const store of stores) {
      const offers=Object.entries(packageCatalog[postcode][store]).map(([offerKey,offer])=>({
        offerKey,product:offer.product,pack:offer.pack,priceCents:offer.priceCents,
        sourceRow:offer.sourceRow,evidenceUrl:offer.evidenceUrl,
        recipeCandidates:byKey.get(offerKey)||[],
      }));
      locations.push({postcode,store,branch:meta.profiles[postcode][store].branch,offers});
    }
  }
  return {generatedAt:new Date().toISOString(),input,database,tenant,locations};
}

function parseArgs(argv) {
  const args={input:null,output:null,database:'01ontology',tenant:'recipe-full',limit:500,totalLimit:5000};
  for(let i=0;i<argv.length;i++) {
    const value=argv[i];
    if(!args.input && !value.startsWith('--')) args.input=value;
    else if(value==='--output') args.output=argv[++i];
    else if(value==='--database') args.database=argv[++i];
    else if(value==='--tenant') args.tenant=argv[++i];
    else if(value==='--limit') args.limit=Number(argv[++i]);
    else if(value==='--total-limit') args.totalLimit=Number(argv[++i]);
    else throw new Error('Unknown argument: '+value);
  }
  if(!args.input || !args.output) throw new Error('Usage: node scripts/find-store-recipe-candidates.mjs INPUT.csv --output REPORT.json [--database 01ontology] [--limit 500] [--total-limit 5000]');
  if(!Number.isInteger(args.limit) || args.limit<1 || args.limit>500) throw new Error('--limit must be an integer from 1 to 500');
  if(!Number.isInteger(args.totalLimit) || args.totalLimit<1 || args.totalLimit>5000) throw new Error('--total-limit must be an integer from 1 to 5000');
  return args;
}

export async function run(argv=process.argv.slice(2)) {
  const args=parseArgs(argv);
  const rows=parseCsv(fs.readFileSync(args.input,'utf8'));
  const generated=generateCatalog(rows,'/offers/'+path.basename(args.input));
  const discovery=await discoverStoreRecipeCandidates({offers:generated.offersByIdentity,db:args.database,tenant:args.tenant,perIdentityLimit:args.limit,totalLimit:args.totalLimit});
  const report=buildStoreCandidateReport({packageCatalog:generated.packageCatalog,offersByIdentity:generated.offersByIdentity,meta:generated.meta,candidates:discovery.candidates,input:args.input,database:args.database,tenant:args.tenant,discovery});
  fs.writeFileSync(args.output,JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify({locations:report.locations.length,offers:report.locations.reduce((n,x)=>n+x.offers.length,0),candidates:discovery.candidates.length,zeroCandidateIdentities:discovery.zeroCandidateIdentities,overflow:discovery.overflow,output:args.output}));
}

if (process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  run().catch((error)=>{ console.error(error.stack||error); process.exitCode=1; });
}
