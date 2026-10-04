#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {canonicalJson} from './lib/meal-snapshot-schema.mjs';
import {enrichMealRegistry} from './lib/recipe-calculations.mjs';

const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
function input(file,label) {
  const bytes=fs.readFileSync(file);
  return {value:JSON.parse(bytes.toString('utf8')),lineage:{input:label,fileName:path.basename(file),sha256:sha256(bytes)}};
}
function privateOutput(outputDir) {
  const resolved=path.resolve(outputDir),parent=fs.realpathSync(path.dirname(resolved));
  const actual=path.join(parent,path.basename(resolved));
  if(actual.split(path.sep).some((part)=>['public','.git','.aws'].includes(part))) throw new Error('Output must be private and outside public/credential/git directories');
  if(fs.existsSync(actual)) throw new Error('Output directory must be new; existing output is never overwritten');
  return actual;
}
export function enrichFiles(options) {
  for(const key of ['registry','recipes','foods','mappings','outputDir']) if(!options[key]) throw new Error(`--${key==='outputDir'?'output-dir':key} is required`);
  const outputDir=privateOutput(options.outputDir);
  const inputs=Object.fromEntries(['registry','recipes','foods','mappings','prices','contexts'].filter((key)=>options[key]).map((key)=>[key,input(options[key],key)]));
  const sourceRecipes=inputs.recipes.value;
  if(sourceRecipes.schemaVersion!==1||!Array.isArray(sourceRecipes.candidates??sourceRecipes.recipes)) throw new Error('Recipes input requires schemaVersion 1 with candidates or recipes');
  if(inputs.contexts&&(inputs.contexts.value.schemaVersion!==1||!Array.isArray(inputs.contexts.value.contexts))) throw new Error('Contexts input requires schemaVersion 1 with contexts');
  const result=enrichMealRegistry({registry:inputs.registry.value,recipes:sourceRecipes.candidates??sourceRecipes.recipes,foodCatalog:inputs.foods.value,mappings:inputs.mappings.value,priceCatalog:inputs.prices?.value,contexts:inputs.contexts?.value.contexts??[],allowEstimatedNutrition:options.allowEstimatedNutrition===true});
  const {calculationSha256:_previousHash,...auditBody}=result.audit;
  const body={...auditBody,inputs:Object.values(inputs).map((value)=>value.lineage)};
  const audit={...body,calculationSha256:sha256(canonicalJson(body))};
  // mkdir is exclusive; no public files, input files, databases or network are touched.
  fs.mkdirSync(outputDir,{mode:0o700});
  fs.writeFileSync(path.join(outputDir,'calculation-audit.json'),canonicalJson(audit)+'\n',{flag:'wx',mode:0o600});
  fs.writeFileSync(path.join(outputDir,'recipe-publication-registry.json'),canonicalJson(result.registry)+'\n',{flag:'wx',mode:0o600});
  return {outputDir,recipes:result.audit.recipes.length,completeNutrition:result.audit.recipes.filter((entry)=>entry.nutritionFacts.status==='complete').length,estimatedNutrition:result.audit.recipes.filter((entry)=>entry.nutritionFacts.status==='estimated').length,completeBaskets:result.audit.recipes.reduce((sum,entry)=>sum+entry.basketEvidenceByContext.filter((facts)=>facts.sourceCoverage==='complete').length,0),calculationSha256:audit.calculationSha256};
}
function argumentsFor(argv) {
  const names=new Set(['registry','recipes','foods','mappings','prices','contexts','output-dir']);
  const result={};
  for(let index=0;index<argv.length;index++) {
    const key=argv[index]?.replace(/^--/,'');
    if(argv[index]==='--allow-estimated-nutrition') {
      if(result.allowEstimatedNutrition) throw new Error('Duplicate --allow-estimated-nutrition flag');
      result.allowEstimatedNutrition=true;continue;
    }
    if(!argv[index]?.startsWith('--')||!names.has(key)||!argv[index+1]||argv[index+1].startsWith('--')||Object.hasOwn(result,key==='output-dir'?'outputDir':key)) throw new Error('Usage: node scripts/enrich-meal-calculations.mjs --registry FILE --recipes FILE --foods FILE --mappings FILE [--prices FILE --contexts FILE] --output-dir NEW_PRIVATE_DIRECTORY');
    result[key==='output-dir'?'outputDir':key]=argv[++index];
  }
  return result;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  try {process.stdout.write(canonicalJson(enrichFiles(argumentsFor(process.argv.slice(2))))+'\n');}
  catch(error) {process.stderr.write(String(error.message)+'\n');process.exitCode=1;}
}
