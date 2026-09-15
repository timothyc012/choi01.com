#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath,pathToFileURL} from 'node:url';

import {ingredientAvailabilityPolicy,unavailableIngredientMatches} from './lib/ingredient-availability.mjs';

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const digest=(value)=>crypto.createHash('sha256').update(value).digest('hex');

function parseArgs(argv) {
  const args={database:'01ontology',tenant:'recipe-full',output:null};
  for(let index=0;index<argv.length;index++) {
    const value=argv[index];
    if(value==='--database') args.database=argv[++index];
    else if(value==='--tenant') args.tenant=argv[++index];
    else if(value==='--output') args.output=argv[++index];
    else if(value==='--replace') args.replace=true;
    else throw new Error('Unknown argument: '+value);
  }
  if(!args.output) throw new Error('Usage: node scripts/audit-meal-ingredient-availability.mjs --output FILE.json [--database DB] [--tenant TENANT] [--replace]');
  return args;
}

function queryRows(database,tenant) {
  const broadTerms=[...new Set((ingredientAvailabilityPolicy.excludedIngredients||[]).flatMap((rule)=>rule.aliases||[]))];
  const predicates=broadTerms.map((term)=>`ni.label ILIKE '%${String(term).replaceAll("'","''")}%'`).join(' OR ');
  const tenantLiteral=String(tenant).replaceAll("'","''");
  const sql=`BEGIN READ ONLY;
SET LOCAL statement_timeout='60s';
SELECT jsonb_build_object('recipeId',r.external_id,'title',r.label,'ingredientLabel',ni.label)
FROM individuals r
JOIN triples t ON t.subject_id=r.id AND t.relation='https://01ontology.org/pack/recipe#hasIngredientQuantity'
JOIN individuals q ON q.id=t.object_id
JOIN triples qi ON qi.subject_id=q.id AND qi.relation='https://01ontology.org/pack/recipe#quantityOfIngredient'
JOIN individuals ni ON ni.id=qi.object_id
WHERE r.tenant_id='${tenantLiteral}'
  AND r.class_name='https://01ontology.org/pack/recipe#Recipe'
  AND ni.tenant_id='${tenantLiteral}'
  AND ni.class_name='https://01ontology.org/pack/recipe#Ingredient'
  AND (${predicates})
GROUP BY r.external_id,r.label,ni.label
ORDER BY r.external_id,ni.label;
COMMIT;`;
  const stdout=execFileSync('psql',['-X','-qAt','-w','-d',database,'-v','ON_ERROR_STOP=1','-v','tenant='+tenant,'-c',sql],{encoding:'utf8',maxBuffer:64*1024*1024});
  return stdout.split(/\r?\n/u).filter(Boolean).map((line)=>JSON.parse(line));
}

export function buildAudit({database='01ontology',tenant='recipe-full',rows,generatedAt=new Date().toISOString()}) {
  const byKey=new Map((ingredientAvailabilityPolicy.excludedIngredients||[]).map((rule)=>[rule.key,{key:rule.key,recipeIds:new Set(),labels:new Set(),samples:[]}]));
  for(const row of rows) {
    const matches=unavailableIngredientMatches({ingredients:[{ingredient:row.ingredientLabel}]});
    for(const match of matches) {
      const entry=byKey.get(match.key);
      if(!entry) continue;
      entry.recipeIds.add(String(row.recipeId));
      entry.labels.add(String(row.ingredientLabel));
      if(entry.samples.length<5) entry.samples.push({recipeId:String(row.recipeId),title:row.title,ingredientLabel:row.ingredientLabel});
    }
  }
  const policyPath=path.resolve(ROOT,'scripts/data/ingredient-availability-policy.json');
  const policyBytes=fs.readFileSync(policyPath);
  return {
    schemaVersion:1,generatedAt,database,tenant,queryMode:'read-only',
    policyVersion:ingredientAvailabilityPolicy.policyVersion,
    policySha256:digest(policyBytes),
    sourceTables:['individuals','triples'],
    recipeCountByIngredient:Object.fromEntries([...byKey].map(([key,entry])=>[key,{recipeCount:entry.recipeIds.size,matchedLabels:[...entry.labels].sort(),samples:entry.samples}]).sort()),
    queryContract:'Recipe → hasIngredientQuantity → IngredientQuantity → quantityOfIngredient → Ingredient; recipe and ingredient rows are restricted to the configured tenant.',
  };
}

export function run(argv=process.argv.slice(2)) {
  const args=parseArgs(argv);
  const audit=buildAudit({database:args.database,tenant:args.tenant,rows:queryRows(args.database,args.tenant)});
  const output=path.resolve(args.output);
  if(fs.existsSync(output)&&!args.replace) throw new Error('Output already exists: '+output);
  fs.mkdirSync(path.dirname(output),{recursive:true});
  fs.writeFileSync(output,JSON.stringify(audit,null,2)+'\n');
  console.log(JSON.stringify({output,policyVersion:audit.policyVersion,counts:Object.fromEntries(Object.entries(audit.recipeCountByIngredient).map(([key,value])=>[key,value.recipeCount]))}));
  return audit;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) run();
