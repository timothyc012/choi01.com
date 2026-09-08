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

export function searchRequestForCatalog(packageCatalog) {
  const keys = new Set();
  for (const stores of Object.values(packageCatalog)) {
    for (const catalog of Object.values(stores)) for (const key of Object.keys(catalog)) keys.add(key);
  }
  return [...keys].filter((key)=>recipeSearchSpec[key]).sort().map((key)=>({key,...recipeSearchSpec[key]}));
}

export function buildStoreCandidateReport({packageCatalog,meta,candidates,input,database}) {
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
  return {generatedAt:new Date().toISOString(),input,database,tenant:'recipe-full',locations};
}

function parseArgs(argv) {
  const args={input:null,output:null,database:'01ontology',limit:5};
  for(let i=0;i<argv.length;i++) {
    const value=argv[i];
    if(!args.input && !value.startsWith('--')) args.input=value;
    else if(value==='--output') args.output=argv[++i];
    else if(value==='--database') args.database=argv[++i];
    else if(value==='--limit') args.limit=Number(argv[++i]);
    else throw new Error('Unknown argument: '+value);
  }
  if(!args.input || !args.output) throw new Error('Usage: node scripts/find-store-recipe-candidates.mjs INPUT.csv --output REPORT.json [--database 01ontology] [--limit 5]');
  if(!Number.isInteger(args.limit) || args.limit<1 || args.limit>20) throw new Error('--limit must be an integer from 1 to 20');
  return args;
}

export function run(argv=process.argv.slice(2)) {
  const args=parseArgs(argv);
  const rows=parseCsv(fs.readFileSync(args.input,'utf8'));
  const generated=generateCatalog(rows,'/offers/'+path.basename(args.input));
  const request=searchRequestForCatalog(generated.packageCatalog);
  const sql=fileURLToPath(new URL('./find-store-recipe-candidates.sql',import.meta.url));
  const stdout=execFileSync('psql',['-X','-qAt','-w','-d',args.database,'-v','ON_ERROR_STOP=1','-v','search_spec_json='+JSON.stringify(request),'-v','candidate_limit='+args.limit,'-f',sql],{encoding:'utf8',maxBuffer:64*1024*1024});
  const candidates=stdout.split(/\r?\n/).filter(Boolean).map((line)=>JSON.parse(line));
  const report=buildStoreCandidateReport({packageCatalog:generated.packageCatalog,meta:generated.meta,candidates,input:args.input,database:args.database});
  fs.writeFileSync(args.output,JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify({locations:report.locations.length,offers:report.locations.reduce((n,x)=>n+x.offers.length,0),candidates:candidates.length,output:args.output}));
}

if (process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) run();
