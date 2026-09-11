#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {
  buildOwnerAuthorizedTransform,
  selectPublicationExpansion,
  validateEditorialTransform,
} from './select-meal-publication-expansion.mjs';

const candidatePath=process.argv[2]||'/private/tmp/mohemeokji-current-candidates.json';
const registryPath=process.argv[3]||'data/mohemeokji/recipe-publication-registry.json';
const evidencePath=process.argv[4]||'data/mohemeokji/candidate-review-evidence-2026-09-11.json';
const overridePath=process.argv[5]||'data/mohemeokji/editorial-overrides.json';
const outputPath=process.argv[6]||'/private/tmp/mohemeokji-repaired-registry.json';
const auditPath=process.argv[7]||'/private/tmp/mohemeokji-promotion-audit.json';

const report=JSON.parse(fs.readFileSync(candidatePath,'utf8'));
const registry=JSON.parse(fs.readFileSync(registryPath,'utf8'));
const evidence=JSON.parse(fs.readFileSync(evidencePath,'utf8'));
const overrides=JSON.parse(fs.readFileSync(overridePath,'utf8'));
const selection=selectPublicationExpansion({candidateReport:report,registry,target:120,reviewEvidenceById:evidence.recipes});
const next=structuredClone(registry);
next.recipes=next.recipes||{};
const accepted=[];
const held=[];
for(const candidate of selection.selected) {
  const id=String(candidate.sourceRecipeId);
  const override=overrides.recipes?.[id];
  if(!override) continue;
  const entry=buildOwnerAuthorizedTransform(candidate,{sourceDate:overrides.sourceDate});
  if(Array.isArray(override.steps)) entry.steps=override.steps.slice();
  if(Array.isArray(override.detailIngredientsAppend)) entry.detailIngredients=[...entry.detailIngredients,...override.detailIngredientsAppend];
  const errors=validateEditorialTransform(candidate,entry);
  if(errors.length) { held.push({sourceRecipeId:id,errors}); continue; }
  const key=[entry.sourceRecipeId,entry.sourceContentHash,entry.transformVersion].join('|');
  next.recipes[key]=entry;
  accepted.push({sourceRecipeId:id,reviewCount:evidence.recipes?.[id]?.reviewCount,primaryIngredients:entry.recommendationProfile.primaryIngredients});
}
next.recipes=Object.fromEntries(Object.entries(next.recipes).sort(([a],[b])=>a.localeCompare(b)));
fs.writeFileSync(outputPath,JSON.stringify(next,null,2)+'\n');
fs.writeFileSync(auditPath,JSON.stringify({schemaVersion:1,checkedAt:evidence.checkedAt,reviewThreshold:1,selected:selection.selected.map((candidate)=>({sourceRecipeId:candidate.sourceRecipeId,title:candidate.title,primaryIngredients:candidate.recommendationProfile.primaryIngredients,reviewCount:evidence.recipes?.[candidate.sourceRecipeId]?.reviewCount??null})),accepted,held,exclusionCounts:selection.exclusionCounts},null,2)+'\n');
console.log(JSON.stringify({selected:selection.selected.length,accepted:accepted.length,held:held.length,output:outputPath,audit:auditPath}));

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {}
