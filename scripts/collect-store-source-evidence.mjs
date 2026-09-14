#!/usr/bin/env node
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const sha256=(value)=>crypto.createHash('sha256').update(value).digest('hex');
const canonical=(value)=>JSON.stringify(value,null,2)+'\n';

function splitPdfText(text) {
  const pages=String(text).split('\f');
  if(pages.at(-1)==='') pages.pop();
  return pages;
}

function pdfPageCount(pdfPath) {
  const output=execFileSync('pdfinfo',[pdfPath],{encoding:'utf8'});
  const match=output.match(/^Pages:\s+(\d+)$/m);
  if(!match) throw new Error(`pdfinfo did not report pages for ${pdfPath}`);
  return Number(match[1]);
}

function collectPdf(source) {
  const pdfBytes=fs.readFileSync(source.localPath);
  const pageCount=pdfPageCount(source.localPath);
  const text=execFileSync('pdftotext',['-layout',source.localPath,'-'],{encoding:'utf8',maxBuffer:64*1024*1024});
  const pages=splitPdfText(text).map((page,index)=>({page:index+1,textSha256:sha256(page),charCount:page.length}));
  if(pages.length!==pageCount) throw new Error(`${source.id}: extracted ${pages.length} pages but PDF reports ${pageCount}`);
  return {sourceSha256:sha256(pdfBytes),pageCount,checkedPageCount:pages.length,extraction:{tool:'pdftotext -layout',textSha256:sha256(text),pages}};
}

function collectHtml(source) {
  const bytes=fs.readFileSync(source.localPath);
  return {sourceSha256:sha256(bytes),responseBytes:bytes.length,recordCount:source.recordCount??null,checkedRecordCount:source.checkedRecordCount??null,extraction:{tool:source.extractionTool||'server-rendered HTML evidence',selector:source.selector||null}};
}

export function buildStoreSourceEvidence({weekStart,collectedAt,sources}) {
  if(!/^\d{4}-\d{2}-\d{2}$/.test(weekStart||'')) throw new Error('weekStart is invalid');
  if(!collectedAt) throw new Error('collectedAt is required');
  if(!Array.isArray(sources)||!sources.length) throw new Error('sources are required');
  const entries=sources.map((source)=>{
    if(!source.id||!source.chain||!Array.isArray(source.postcodes)||!source.url) throw new Error('source identity is incomplete');
    let evidence;
    if(source.status==='접근실패') evidence={sourceSha256:null,status:'접근실패',httpStatus:source.httpStatus??null,responseBytes:source.responseBytes??null,checkedPageCount:0};
    else if(source.type==='pdf') evidence={...collectPdf(source),status:'수집완료'};
    else if(source.type==='html') evidence={...collectHtml(source),status:source.checkedRecordCount===source.recordCount?'수집완료':'일부수집'};
    else throw new Error(`${source.id}: unsupported source type`);
    return {...source,evidence,localPath:undefined};
  });
  return {
    schemaVersion:1,
    kind:'mohemeokji-store-source-evidence',
    weekStart,
    collectedAt,
    sources:entries,
    summary:{
      sourceCount:entries.length,
      complete:entries.filter((entry)=>entry.evidence.status==='수집완료').length,
      partial:entries.filter((entry)=>entry.evidence.status==='일부수집').length,
      accessFailed:entries.filter((entry)=>entry.evidence.status==='접근실패').length,
      checkedPdfPages:entries.reduce((sum,entry)=>sum+(entry.evidence.checkedPageCount||0),0),
    },
  };
}

export function collectStoreSourceEvidence({manifestPath,output,weekStart,collectedAt}) {
  const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
  const sources=manifest.map((source)=>({...source,localPath:source.localPath&&path.resolve(path.dirname(manifestPath),source.localPath)}));
  const evidence=buildStoreSourceEvidence({weekStart,collectedAt,sources});
  fs.mkdirSync(path.dirname(output),{recursive:true});
  fs.writeFileSync(output,canonical(evidence));
  return evidence;
}

function parseArgs(argv) {
  const options={manifestPath:null,output:null,weekStart:'2026-09-14',collectedAt:null};
  for(let index=0;index<argv.length;index++) {
    const value=argv[index];
    if(value==='--manifest') options.manifestPath=argv[++index];
    else if(value==='--output') options.output=argv[++index];
    else if(value==='--week-start') options.weekStart=argv[++index];
    else if(value==='--collected-at') options.collectedAt=argv[++index];
    else throw new Error(`Unknown argument: ${value}`);
  }
  if(!options.manifestPath||!options.output||!options.collectedAt) throw new Error('--manifest, --output, and --collected-at are required');
  return options;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  const options=parseArgs(process.argv.slice(2));
  const evidence=collectStoreSourceEvidence(options);
  console.log(JSON.stringify({output:path.resolve(options.output),summary:evidence.summary},null,2));
}
