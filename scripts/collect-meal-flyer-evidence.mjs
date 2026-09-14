#!/usr/bin/env node
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const NETTO_URL='https://wochenprospekt.netto-online.de/100989/3357087/pdfs/56b6be76-4fb6-47dd-86d1-af56179c18e6.pdf';
const LIDL_API_URL='https://endpoints.leaflets.schwarz/v4/flyer?flyer_identifier=01a07b69-437d-7086-9cf6-99e0c021d99b';
const LIDL_VIEWER_URL='https://www.lidl.de/l/prospekte/aktionsprospekt-14-09-2026-19-09-2026-6e9cc6/view/flyer/page/1?_ab=1&lf=HHZ';
const sha256=(value)=>crypto.createHash('sha256').update(value).digest('hex');
const canonical=(value)=>JSON.stringify(value,null,2)+'\n';

function splitPdfText(text) {
  const pages=String(text).split('\f');
  if(pages.at(-1)==='') pages.pop();
  return pages;
}

function pageDigests(text) {
  return splitPdfText(text).map((page,index)=>({
    page:index+1,
    textSha256:sha256(page),
    charCount:page.length,
  }));
}

function validateLidlPages(pages) {
  if(!Array.isArray(pages)||pages.length===0) throw new Error('Lidl API pages are missing');
  const numbers=pages.map((page)=>page?.number);
  for(let index=0;index<numbers.length;index++) {
    if(numbers[index]!==index+1) throw new Error(`Lidl API page sequence is invalid at ${index+1}`);
    if(typeof pages[index].image!=='string'||!pages[index].image.startsWith('https://')) throw new Error(`Lidl API page ${index+1} has no HTTPS image`);
  }
}

function summarizeLidlPage(page) {
  const links=Array.isArray(page.links)?page.links:[];
  return {
    page:page.number,
    pageId:page.id,
    width:page.width,
    height:page.height,
    imageUrl:page.image,
    zoomUrl:page.zoom,
    thumbnailUrl:page.thumbnail,
    altText:page.altText||'',
    linkCount:links.length,
    recipeLinkCount:links.filter((link)=>typeof link.url==='string'&&link.url.includes('rezepte.lidl.de')).length,
    productLinkCount:links.filter((link)=>link.displayType==='product').length,
  };
}

/**
 * Build immutable evidence that every page in the supplied official flyers was
 * downloaded and passed through text extraction. The Lidl viewer exposes one
 * extra boundary state (page 76) while the API/PDF contain 75 content pages;
 * that distinction is recorded instead of silently dropping the observed state.
 */
export function buildFlyerEvidence({weekStart,collectedAt,netto,lidl}) {
  if(!/^\d{4}-\d{2}-\d{2}$/.test(weekStart||'')) throw new Error('weekStart is invalid');
  if(!collectedAt) throw new Error('collectedAt is required for reproducible evidence');
  for(const [label,source] of Object.entries({netto,lidl})) {
    if(!source||!Buffer.isBuffer(source.pdfBytes)||typeof source.pdfPageCount!=='number'||typeof source.pdfText!=='string') throw new Error(`${label} PDF evidence is incomplete`);
    if(splitPdfText(source.pdfText).length!==source.pdfPageCount) throw new Error(`${label} PDF text page count does not match pdfPageCount`);
  }
  const flyer=lidl.api?.flyer;
  validateLidlPages(flyer?.pages);
  if(flyer.pages.length!==lidl.pdfPageCount) throw new Error('Lidl API and PDF page counts differ');
  if(lidl.viewerPageCount<lidl.pdfPageCount) throw new Error('Lidl viewer page count cannot be below content page count');
  const sources=[{
    chain:'Netto Marken-Discount',
    postcodeScope:['44369'],
    sourceType:'pdf',
    sourceUrl:netto.sourceUrl||NETTO_URL,
    sourceSha256:sha256(netto.pdfBytes),
    pageCount:netto.pdfPageCount,
    checkedPageCount:pageDigests(netto.pdfText).length,
    extraction:{tool:'pdftotext -layout',textSha256:sha256(netto.pdfText),pages:pageDigests(netto.pdfText)},
  },{
    chain:'Lidl',
    postcodeScope:['40472','40489','44369','52064'],
    sourceType:'api+pdf',
    sourceUrl:lidl.viewerUrl||LIDL_VIEWER_URL,
    apiUrl:lidl.apiUrl||LIDL_API_URL,
    pdfUrl:flyer.pdfUrl,
    apiSha256:sha256(lidl.apiBytes),
    sourceSha256:sha256(lidl.pdfBytes),
    pageCount:lidl.pdfPageCount,
    checkedPageCount:pageDigests(lidl.pdfText).length,
    viewerPageCount:lidl.viewerPageCount,
    viewerBoundary:{page:lidl.viewerPageCount,checked:true,kind:'next-flyer-preview-boundary'},
    extraction:{tool:'pdftotext -layout',textSha256:sha256(lidl.pdfText),pages:pageDigests(lidl.pdfText)},
    pages:flyer.pages.map(summarizeLidlPage),
  }];
  return {
    schemaVersion:1,
    kind:'mohemeokji-full-flyer-evidence',
    weekStart,
    collectedAt,
    sources,
    summary:{
      sourceCount:sources.length,
      contentPages:sources.reduce((total,source)=>total+source.pageCount,0),
      checkedContentPages:sources.reduce((total,source)=>total+source.checkedPageCount,0),
      viewerBoundaryPages:sources.filter((source)=>source.viewerBoundary).map((source)=>({chain:source.chain,page:source.viewerBoundary.page})),
    },
  };
}

function pdfInfo(pdfPath) {
  const output=execFileSync('pdfinfo',[pdfPath],{encoding:'utf8'});
  const match=output.match(/^Pages:\s+(\d+)$/m);
  if(!match) throw new Error(`pdfinfo did not report pages for ${pdfPath}`);
  return Number(match[1]);
}

function readPdfSource(pdfPath) {
  const pdfBytes=fs.readFileSync(pdfPath);
  const pdfPageCount=pdfInfo(pdfPath);
  const pdfText=execFileSync('pdftotext',['-layout',pdfPath,'-'],{encoding:'utf8',maxBuffer:32*1024*1024});
  return {pdfBytes,pdfPageCount,pdfText};
}

function parseArgs(argv) {
  const options={weekStart:'2026-09-14',collectedAt:null,nettoPdf:null,lidlPdf:null,lidlApi:null,viewerPageCount:76,output:null};
  for(let index=0;index<argv.length;index++) {
    const value=argv[index];
    if(value==='--week-start') options.weekStart=argv[++index];
    else if(value==='--collected-at') options.collectedAt=argv[++index];
    else if(value==='--netto-pdf') options.nettoPdf=argv[++index];
    else if(value==='--lidl-pdf') options.lidlPdf=argv[++index];
    else if(value==='--lidl-api') options.lidlApi=argv[++index];
    else if(value==='--viewer-page-count') options.viewerPageCount=Number(argv[++index]);
    else if(value==='--output') options.output=argv[++index];
    else throw new Error(`Unknown argument: ${value}`);
  }
  if(!options.nettoPdf||!options.lidlPdf||!options.lidlApi||!options.output) throw new Error('--netto-pdf, --lidl-pdf, --lidl-api, and --output are required');
  if(!Number.isSafeInteger(options.viewerPageCount)||options.viewerPageCount<1) throw new Error('viewer page count is invalid');
  return options;
}

export function collectFlyerEvidence(options) {
  const netto=readPdfSource(options.nettoPdf);
  const lidl=readPdfSource(options.lidlPdf);
  const apiBytes=fs.readFileSync(options.lidlApi);
  const api=JSON.parse(apiBytes);
  const evidence=buildFlyerEvidence({
    weekStart:options.weekStart,
    collectedAt:options.collectedAt,
    netto:{...netto},
    lidl:{...lidl,api,apiBytes,viewerPageCount:options.viewerPageCount},
  });
  fs.mkdirSync(path.dirname(options.output),{recursive:true});
  fs.writeFileSync(options.output,canonical(evidence));
  return evidence;
}

async function main() {
  const evidence=collectFlyerEvidence(parseArgs(process.argv.slice(2)));
  console.log(JSON.stringify({output:path.resolve(process.argv.at(-1)),summary:evidence.summary},null,2));
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) await main();
