import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {pathToFileURL} from 'node:url';
import {JSDOM} from 'jsdom';
import {parseCsv} from './generate-meal-offers.mjs';
import {validateMealSnapshotDirectory} from './lib/validate-meal-snapshot.mjs';

const exec=promisify(execFile);
const hash=(text)=>crypto.createHash('sha256').update(text).digest('hex');
const clean=(text)=>String(text||'').replace(/\s+/g,' ').trim();
const integer=(value)=>{
  const text=String(value??'');
  if(!/^(?:\d+|\d{1,3}(?:,\d{3})+)$/.test(text))return null;
  const count=Number(text.replaceAll(',',''));
  return Number.isSafeInteger(count)?count:null;
};

// Only the current Recipe entity and its own labelled feedback section count.
// Recommendation cards and the page's view count are never review evidence.
export function extractReviewEvidence(html,{sourceRecipeId,sourceTitle,checkedAt=new Date().toISOString()}) {
  const sourceUrl='https://www.10000recipe.com/recipe/'+sourceRecipeId;
  const result={sourceRecipeId,sourceUrl,checkedAt,htmlSha256:hash(html),status:'unverified',reviewCount:null,ratingValue:null,commentCount:null,method:'recipe-feedback-v1'};
  const dom=new JSDOM(html);
  try {
    const d=dom.window.document;
    const canonical=d.querySelector('link[rel="canonical"]')?.href;
    const og=d.querySelector('meta[property="og:url"]')?.content;
    if(canonical!==sourceUrl||(og&&og!==sourceUrl))return {...result,reason:'recipe-identity-mismatch'};
    const nodes=[];
    const walk=(value)=>{
      if(Array.isArray(value))value.forEach(walk);
      else if(value&&typeof value==='object') {nodes.push(value);if(value['@graph'])walk(value['@graph']);}
    };
    for(const node of d.querySelectorAll('script[type="application/ld+json"]')){try{walk(JSON.parse(node.textContent));}catch{/* Invalid markup provides no evidence. */}}
    const recipes=nodes.filter(n=>[n['@type']].flat().includes('Recipe')&&clean(n.name)===clean(sourceTitle));
    if(recipes.length!==1)return {...result,reason:'recipe-entity-missing'};
    const titles=[...d.querySelectorAll('.view_reply .reply_tit')].map(n=>clean(n.textContent));
    const counts=(pattern)=>titles.flatMap(t=>{const m=t.match(pattern);return m?[integer(m[1])]:[];});
    const reviewCounts=counts(/^요리\s*후기\s*([\d,]+)(?:\s|$)/);
    const commentCounts=counts(/^댓글\s*([\d,]+)(?:\s|$)/);
    result.commentCount=commentCounts.length===1?commentCounts[0]:null;
    const aggregate=recipes[0].aggregateRating;
    const ldCount=integer(aggregate?.reviewCount);
    if(reviewCounts.length!==1||reviewCounts[0]===null)return {...result,reason:'recipe-review-count-not-published'};
    if(ldCount!==null&&ldCount!==reviewCounts[0])return {...result,reason:'review-count-conflict'};
    const rating=String(aggregate?.ratingValue??'').trim();
    const ratingValue=/^\d(?:\.\d+)?$/.test(rating)&&Number(rating)>=0&&Number(rating)<=5?Number(rating):null;
    return {...result,status:'verified',reviewCount:reviewCounts[0],ratingValue:ldCount===reviewCounts[0]?ratingValue:null,reason:null};
  } finally {dom.window.close();}
}

export function collectionEvidence(rows,locations) {
  return Object.fromEntries(locations.map(location=>{
    const collected=rows.filter(r=>r['우편번호']===location.postcode&&r['체인']===location.store&&clean(r['지점'])===clean(location.branch));
    const linked=new Set(location.offers.map(o=>o.productDe));
    return [location.id,{collectedRows:collected.length,linkedProducts:linked.size,unmatchedRows:collected.filter(r=>!linked.has(clean(r['상품명']))).length}];
  }));
}

async function main() {
  const root=path.resolve('public/mohemeokji/data');
  const validation=validateMealSnapshotDirectory(root);
  if(!validation.valid)throw new Error(validation.errors.join('; '));
  const current=JSON.parse(fs.readFileSync(path.join(root,'current.json')));
  const manifest=JSON.parse(fs.readFileSync(path.join(root,current.manifestPath)));
  const index=JSON.parse(fs.readFileSync(path.join(root,manifest.recipeIndexPath)));
  const csv=fs.readFileSync(path.join('public/offers',manifest.source.inputLogicalName));
  if(hash(csv)!==manifest.source.csvSha256)throw new Error('CSV lineage mismatch');
  const entries={};let cursor=0;
  // Three requests at a time, once for each of the published recipes, never the whole DB.
  await Promise.all(Array.from({length:3},async()=>{
    while(cursor<index.recipes.length){
      const item=index.recipes[cursor++];
      const detail=JSON.parse(fs.readFileSync(path.join(root,item.path)));
      try {
        const {stdout:html}=await exec('curl',['-fsSL','--max-time','25',detail.sourceUrl],{maxBuffer:4*1024*1024});
        entries[item.sourceRecipeId]={...extractReviewEvidence(html,detail),detailSha256:item.sha256};
      } catch {entries[item.sourceRecipeId]={sourceRecipeId:item.sourceRecipeId,sourceUrl:detail.sourceUrl,detailSha256:item.sha256,checkedAt:new Date().toISOString(),status:'unverified',reviewCount:null,ratingValue:null,commentCount:null,method:'recipe-feedback-v1',reason:'source-unavailable'};}
      console.log(item.sourceRecipeId+': '+entries[item.sourceRecipeId].status+' reviews='+entries[item.sourceRecipeId].reviewCount);
    }
  }));
  const output={schemaVersion:1,snapshotId:current.snapshotId,csvSha256:manifest.source.csvSha256,recipes:Object.fromEntries(Object.entries(entries).sort(([a],[b])=>a.localeCompare(b))),locations:collectionEvidence(parseCsv(csv.toString()),manifest.locations.map(l=>JSON.parse(fs.readFileSync(path.join(root,l.path)))))};
  fs.writeFileSync('data/mohemeokji/verified-reviews.json',JSON.stringify(output,null,2)+'\n');
  console.log(JSON.stringify({verified:Object.values(entries).filter(r=>r.status==='verified').length,unverified:Object.values(entries).filter(r=>r.status!=='verified').length}));
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href)await main();
