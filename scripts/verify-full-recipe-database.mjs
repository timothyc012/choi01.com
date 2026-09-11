#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {execFile, execFileSync} from 'node:child_process';
import {promisify} from 'node:util';
import {pathToFileURL} from 'node:url';
import {extractReviewEvidence} from './verify-meal-reviews.mjs';

const exec=promisify(execFile);
const DEFAULT_OUTPUT='data/mohemeokji/full-recipe-review-evidence.jsonl';
const USER_AGENT='01ontology-recipe-review-audit/1.0 (+https://01ontology.org)';

function args(argv) {
  const out={database:process.env.ONTO_DB_NAME||'01ontology',tenant:process.env.ONTO_TENANT||'recipe-full',output:DEFAULT_OUTPUT,limit:null,offset:0,workers:3,delayMs:350,resume:false};
  for(let i=0;i<argv.length;i++) {
    const value=argv[i];
    if(value==='--database')out.database=argv[++i];
    else if(value==='--tenant')out.tenant=argv[++i];
    else if(value==='--output')out.output=argv[++i];
    else if(value==='--limit')out.limit=Number(argv[++i]);
    else if(value==='--offset')out.offset=Number(argv[++i]);
    else if(value==='--workers')out.workers=Number(argv[++i]);
    else if(value==='--delay-ms')out.delayMs=Number(argv[++i]);
    else if(value==='--resume')out.resume=true;
    else throw new Error('Unknown argument: '+value);
  }
  if(out.limit!==null&&(!Number.isInteger(out.limit)||out.limit<1))throw new Error('--limit must be a positive integer');
  if(!Number.isInteger(out.offset)||out.offset<0)throw new Error('--offset must be a non-negative integer');
  if(!Number.isInteger(out.workers)||out.workers<1||out.workers>8)throw new Error('--workers must be 1..8');
  if(!Number.isInteger(out.delayMs)||out.delayMs<0)throw new Error('--delay-ms must be a non-negative integer');
  return out;
}

function loadRecipes({database,tenant,limit,offset}) {
  const tenantSql="'"+String(tenant).replaceAll("'","''")+"'";
  const args=['-X','-qAt','-w','-v','ON_ERROR_STOP=1','-d',database];
  const sql=`SELECT jsonb_build_object(
    'sourceRecipeId',i.external_id,
    'sourceTitle',max(p.value) FILTER (WHERE p.key='title'),
    'dbReviewCount',max(p.value_integer) FILTER (WHERE p.key='reviewCount'),
    'dbRatingValue',max(p.value) FILTER (WHERE p.key='ratingValue')
  )::text
  FROM individuals i LEFT JOIN properties p ON p.individual_id=i.id
  WHERE i.tenant_id = ${tenantSql} AND i.class_name='https://01ontology.org/pack/recipe#Recipe'
  GROUP BY i.id,i.external_id ORDER BY i.external_id
  OFFSET ${Number(offset)} ${limit===null?'':'LIMIT '+Number(limit)};`;
  args.push('-c',sql);
  return execFileSync('psql',args,{encoding:'utf8',maxBuffer:32*1024*1024}).split(/\r?\n/).filter(Boolean).map((line)=>JSON.parse(line));
}

function readProcessed(output) {
  const processed=new Set();
  if(!fs.existsSync(output))return processed;
  for(const line of fs.readFileSync(output,'utf8').split(/\r?\n/)) {
    if(!line.trim())continue;
    try { const row=JSON.parse(line); if(typeof row.sourceRecipeId==='string')processed.add(row.sourceRecipeId); } catch { /* Ignore a partial final line and rewrite only in a new run. */ }
  }
  return processed;
}

function safeFile(output,resume) {
  const target=path.resolve(output); fs.mkdirSync(path.dirname(target),{recursive:true});
  if(!resume&&fs.existsSync(target))throw new Error('Output exists; pass --resume or choose a new --output: '+target);
  return target;
}

async function fetchOne(recipe) {
  const id=String(recipe.sourceRecipeId);
  const sourceUrl='https://www.10000recipe.com/recipe/'+id;
  const checkedAt=new Date().toISOString();
  try {
    const {stdout:html}=await exec('curl',['-fsSL','--max-time','25','-A',USER_AGENT,sourceUrl],{maxBuffer:4*1024*1024});
    return {...extractReviewEvidence(html,{sourceRecipeId:id,sourceTitle:recipe.sourceTitle||id,checkedAt}),sourceTitle:recipe.sourceTitle||null,dbReviewCount:recipe.dbReviewCount??null,dbRatingValue:recipe.dbRatingValue??null};
  } catch(error) {
    return {sourceRecipeId:id,sourceUrl,checkedAt,status:'unverified',reviewCount:null,ratingValue:null,commentCount:null,method:'recipe-feedback-v1',reason:'source-unavailable',sourceTitle:recipe.sourceTitle||null,dbReviewCount:recipe.dbReviewCount??null,dbRatingValue:recipe.dbRatingValue??null,error:String(error?.message||error)};
  }
}

async function run(options) {
  const output=safeFile(options.output,options.resume);
  const processed=options.resume?readProcessed(output):new Set();
  const recipes=loadRecipes(options).filter((recipe)=>!processed.has(String(recipe.sourceRecipeId)));
  const stream=fs.createWriteStream(output,{flags:'a',encoding:'utf8'});
  let cursor=0,completed=0;
  const counts={verified:0,unverified:0,sourceUnavailable:0};
  const write=(row)=>new Promise((resolve,reject)=>stream.write(JSON.stringify(row)+'\n','utf8',(error)=>error?reject(error):resolve()));
  const worker=async()=>{
    while(true){
      const recipe=recipes[cursor++]; if(!recipe) return;
      const row=await fetchOne(recipe); await write(row); completed++;
      if(row.status==='verified')counts.verified++; else counts.unverified++;
      if(row.reason==='source-unavailable')counts.sourceUnavailable++;
      if(completed%25===0)console.log(JSON.stringify({completed,total:recipes.length,verified:counts.verified,unverified:counts.unverified}));
      if(options.delayMs)await new Promise((resolve)=>setTimeout(resolve,options.delayMs));
    }
  };
  await Promise.all(Array.from({length:Math.min(options.workers,Math.max(1,recipes.length))},worker));
  await new Promise((resolve)=>stream.end(resolve));
  console.log(JSON.stringify({database:options.database,tenant:options.tenant,selected:recipes.length,processedBefore:processed.size,...counts,output}));
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href)run(args(process.argv.slice(2))).catch((error)=>{console.error(error.stack||error);process.exitCode=1;});
