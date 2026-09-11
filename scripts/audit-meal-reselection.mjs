#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {selectPublicationExpansion} from './select-meal-publication-expansion.mjs';

const candidatePath=process.argv[2]||'/private/tmp/mohemeokji-current-candidates.json';
const registryPath=process.argv[3]||'data/mohemeokji/recipe-publication-registry.json';
const evidencePath=process.argv[4]||'data/mohemeokji/verified-reviews.json';
const outputPath=process.argv[5]||'data/mohemeokji/reselection-audit-2026-09-11.json';
const candidateReport=JSON.parse(fs.readFileSync(candidatePath,'utf8'));
const registry=JSON.parse(fs.readFileSync(registryPath,'utf8'));
const evidence=JSON.parse(fs.readFileSync(evidencePath,'utf8'));
const selection=selectPublicationExpansion({candidateReport,registry,target:120,reviewEvidenceById:evidence.recipes});
const checkedAt=Object.values(evidence.recipes||{}).map((entry)=>entry.checkedAt).filter(Boolean).sort().at(-1)||null;
const audit={schemaVersion:1,checkedAt,candidateInput:candidatePath,database:candidateReport.database,tenant:candidateReport.tenant,snapshotId:evidence.snapshotId,reviewEvidenceSummary:{verified:Object.values(evidence.recipes).filter((entry)=>entry.status==='verified').length,unverified:Object.values(evidence.recipes).filter((entry)=>entry.status!=='verified').length},target:selection.target,selected:selection.selected.map((candidate)=>({sourceRecipeId:candidate.sourceRecipeId,title:candidate.title,locations:candidate._locationIds})),exclusionCounts:selection.exclusionCounts,coverage:selection.coverage,decision:'review-evidence-gate'};
fs.mkdirSync(path.dirname(outputPath),{recursive:true});fs.writeFileSync(outputPath,JSON.stringify(audit,null,2)+'\n');
console.log(JSON.stringify({selected:audit.selected.length,exclusionCounts:audit.exclusionCounts,output:outputPath}));
