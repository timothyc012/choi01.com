#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {recipeSearchSpec} from './find-store-recipe-candidates.mjs';

const MAIN_KEYS=new Set([
  '닭가슴살','닭안심','돼지안심','돼지목살','돼지등심','돼지뒷다리살','돼지다짐육','소고기등심',
  '연어','훈제연어','파스타','쌀','감자','슬라이스치즈',
]);
const FAMILY={
  닭가슴살:'chicken',닭안심:'chicken',돼지안심:'pork',돼지목살:'pork',돼지등심:'pork',돼지뒷다리살:'pork',
  돼지다짐육:'pork',소고기등심:'beef',연어:'salmon',훈제연어:'salmon',파스타:'pasta',쌀:'rice',감자:'potato',슬라이스치즈:'egg',
};
const NON_MEAL_TITLE=/샐러드|카나페|쿠키|머핀|간식|디저트|스무디|요거트|장아찌|피클|드레싱|잼|명시적\s*반찬|반찬|핑거푸드/;
const MAIN_TITLE_BY_PRIMARY={
  감자:/스팸|참치|고기|카레|그라탕|수프|스프|탕|찌개|전|뇨끼|오믈렛|덮밥|볶음밥|피자|파스타/,
  훈제연어:/덮밥|밥|파스타|스파게티|초밥|김밥|리조또|국수|면|샌드위치/,
  소고기등심:/스테이크|찹|볶음|덮밥|밥|구이|불고기|전골|탕/,
  슬라이스치즈:/오믈렛|볶음밥|덮밥|밥|파스타|스파게티|피자|그라탕|샌드위치/,
};

export function qualityScore(row){
  const rating=Number(row.rating_value??row.ratingValue),reviews=Number(row.review_count??row.reviewCount);
  if(!Number.isFinite(rating)||rating<1||rating>5||!Number.isInteger(reviews)||reviews<1)return 0;
  const weighted=(rating*reviews+4.5*20)/(reviews+20);
  return Math.max(0,Math.min(1,(weighted-3.5)/1.5))*18+Math.min(1,Math.log1p(reviews)/Math.log1p(1000))*12;
}

function normalized(value){return String(value||'').normalize('NFC').replace(/\s+/g,'').toLowerCase();}
function matchingPrimary(row){
  const title=normalized(row.title);
  const ingredients=new Set((row.ingredients||[]).map(item=>normalized(item.name)));
  const matches=[];
  for(const [key,spec] of Object.entries(recipeSearchSpec)){
    if(!MAIN_KEYS.has(key))continue;
    if(!spec.titleTerms.some(term=>title.includes(normalized(term))))continue;
    if(!spec.ingredientLabels.some(label=>ingredients.has(normalized(label))))continue;
    matches.push(key);
  }
  return matches[0]||null;
}
function looksLikeMainDish(title,primary){
  if(NON_MEAL_TITLE.test(title))return false;
  return !MAIN_TITLE_BY_PRIMARY[primary]||MAIN_TITLE_BY_PRIMARY[primary].test(title);
}

function minutes(value){const match=String(value||'').match(/\d+/);return match?Number(match[0]):30;}
function methodFor(title){
  if(/찌개|탕|국|수프|스프/.test(title))return 'soup';
  if(/구이|스테이크|오븐|그라탱/.test(title))return 'grill';
  if(/밥|덮밥|볶음밥/.test(title))return 'rice';
  if(/파스타|스파게티/.test(title))return 'pasta';
  if(/조림/.test(title))return 'braise';
  return 'stirfry';
}
function measuredAmount(value){
  const match=String(value||'').trim().replace(',','.').match(/^(\d+(?:\.\d+)?)\s*(kg|g|ml|l)$/i);
  if(!match)return null;
  const amount=Number(match[1]),unit=match[2].toLowerCase();
  if(!(amount>0))return null;
  if(unit==='kg')return {amount:amount*1000,unit:'g'};
  if(unit==='l')return {amount:amount*1000,unit:'ml'};
  return {amount,unit};
}
function toDetail(row,primary){
  const ingredientRows=(row.ingredients||[]).filter(item=>item&&item.name);
  const ingredientNames=[...new Set(ingredientRows.map(item=>String(item.name).trim()).filter(Boolean))];
  const rawPrimaryLabels=new Set(recipeSearchSpec[primary].ingredientLabels.map(normalized));
  const missing=ingredientNames.filter(name=>!rawPrimaryLabels.has(normalized(name))&&normalized(name)!==normalized(primary));
  const requiredAmounts={};
  for(const item of ingredientRows){
    const amount=measuredAmount(item.quantity_text);
    const key=rawPrimaryLabels.has(normalized(item.name))?primary:String(item.name).trim();
    if(amount&&!requiredAmounts[key])requiredAmounts[key]=amount;
  }
  const time=minutes(row.cook_time_text);
  return {
    sourceRecipeId:String(row.recipe_id),sourceUrl:String(row.source_url),sourceTitle:String(row.title),sourceAuthor:String(row.author||'작성자 미상'),
    sourceCorpus:'01ontology DB · recipe-popular-30k (01ontology-open 연동)',title:String(row.title),servingsText:String(row.servings_text||''),
    time,difficultyText:String(row.difficulty_text||''),cuisine:'korean',sale:[primary],missing,
    detailIngredients:ingredientRows.map(item=>String(item.name).trim()+(item.quantity_text?' '+String(item.quantity_text).trim():'')),steps:[],
    tags:(row.tags||[]).filter(tag=>typeof tag==='string').slice(0,3),filters:time<=20?['quick']:[],requiredAmounts,
    sourceTimeText:String(row.cook_time_text||''),timeBasis:row.cook_time_text?'source':'estimate',sourceCheckedAt:String(row.crawled_at||'').slice(0,10),
    sourceStepCount:Number(row.step_count)||0,recipeNote:'재료와 평점·후기는 온톨로지에서 확인했습니다. 조리 단계는 만개의레시피 원문에서 확인하세요.',
    detailStatus:'source-link-only',ratingValue:Number(row.rating_value),reviewCount:Number(row.review_count),
    recommendationProfile:{primaryIngredients:[primary],family:FAMILY[primary]||primary,method:methodFor(String(row.title)),kind:'main'},
  };
}

export function selectAdditions(rows,{existingIds=new Set(),limit=48}={}){
  const groups=new Map();
  for(const row of rows){
    if(existingIds.has(String(row.recipe_id))||qualityScore(row)<=0||Number(row.step_count)<3||(row.ingredients||[]).length<2)continue;
    const primary=matchingPrimary(row);if(!primary)continue;
    if(!looksLikeMainDish(String(row.title),primary))continue;
    if(!groups.has(primary))groups.set(primary,[]);
    groups.get(primary).push({row,primary});
  }
  const ordered=[...groups.values()].map(group=>group.sort((a,b)=>qualityScore(b.row)-qualityScore(a.row)||String(a.row.recipe_id).localeCompare(String(b.row.recipe_id))))
    .sort((a,b)=>qualityScore(b[0].row)-qualityScore(a[0].row));
  const selected=[];
  for(let index=0;selected.length<limit;index++){
    let added=false;
    for(const group of ordered){
      if(group[index]){selected.push(toDetail(group[index].row,group[index].primary));added=true;if(selected.length===limit)break;}
    }
    if(!added)break;
  }
  return selected;
}

function readJsonl(file){return fs.readFileSync(file,'utf8').split(/\r?\n/).filter(Boolean).map(line=>JSON.parse(line));}
function readExistingIds(file){
  const context=vm.createContext({window:{}});vm.runInContext(fs.readFileSync(file,'utf8'),context);
  return new Set((context.window.ontologyRecipeDetails||[]).map(row=>String(row.sourceRecipeId)));
}
function parseArgs(argv){
  const args={source:null,output:null,supplemental:[],total:100,base:'public/mohemeokji/ontology-recipe-details.js'};
  for(let i=0;i<argv.length;i++){
    const value=argv[i];
    if(value==='--source')args.source=argv[++i];else if(value==='--output')args.output=argv[++i];
    else if(value==='--supplemental')args.supplemental.push(argv[++i]);else if(value==='--total')args.total=Number(argv[++i]);
    else if(value==='--base')args.base=argv[++i];else throw new Error('Unknown argument: '+value);
  }
  if(!args.source||!args.output||!Number.isInteger(args.total)||args.total<1)throw new Error('Usage: --source RECIPES.jsonl --output FILE.js [--supplemental FILE.jsonl] [--total 100]');
  return args;
}
export function run(argv=process.argv.slice(2)){
  const args=parseArgs(argv),existingIds=readExistingIds(args.base),rows=[...readJsonl(args.source),...args.supplemental.flatMap(readJsonl)];
  const additions=selectAdditions(rows,{existingIds,limit:Math.max(0,args.total-existingIds.size)});
  if(existingIds.size+additions.length!==args.total)throw new Error(`Only ${existingIds.size+additions.length} recipes qualify; expected ${args.total}`);
  const metadata=new Map(rows.map(row=>[String(row.recipe_id),row]));
  const quality={};
  for(const id of [...existingIds,...additions.map(row=>row.sourceRecipeId)]){
    const row=metadata.get(id);if(!row||qualityScore(row)<=0)continue;
    quality[id]={ratingValue:Number(row.rating_value),reviewCount:Number(row.review_count)};
  }
  const sourceName=path.basename(args.source);
  const output=`/* Generated from ${sourceName}; source-linked additions do not copy instruction text. */\nwindow.ontologyRecipeQualityById = ${JSON.stringify(quality,null,2)};\nwindow.ontologyPopularRecipeAdditions = ${JSON.stringify(additions,null,2)};\n`;
  fs.writeFileSync(args.output,output);
  console.log(JSON.stringify({baseRecipes:existingIds.size,additions:additions.length,total:existingIds.size+additions.length,qualityRows:Object.keys(quality).length,output:args.output}));
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))run();
