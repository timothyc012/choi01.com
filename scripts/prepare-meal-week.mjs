#!/usr/bin/env node
// Read/validate first; write only to a new staging directory, never public/.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { parseCsv, parsePeriod, generateCatalog, cents } from './generate-meal-offers.mjs';

function validTimestamp(value) {
  const match = String(value).match(/^(\d{4}-\d{2}-\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?(Z|[+-]\d{2}:\d{2}| Europe\/Berlin)$/);
  if (!match || +match[2]>23 || +match[3]>59 || +(match[4]||0)>59) return false;
  const day=new Date(match[1]+'T00:00:00Z');
  if (!Number.isFinite(+day) || day.toISOString().slice(0,10)!==match[1]) return false;
  return match[5]===' Europe/Berlin' || Number.isFinite(Date.parse(value));
}

export function inspectWeek(rows, weekStart) {
  const start = new Date(weekStart + 'T00:00:00Z');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(weekStart) || !Number.isFinite(+start) || start.toISOString().slice(0,10) !== weekStart || start.getUTCDay() !== 1) throw new Error('--week-start must be a Monday (YYYY-MM-DD)');
  const end = new Date(+start + 6*86400000).toISOString().slice(0,10);
  const errors = [], warnings = [], combinations = {};
  const counts = new Map();
  for (const [index,row] of rows.entries()) {
    const record = index+2;
    const period = parsePeriod(row['행사기간']);
    if (!period || period.validThrough < weekStart || period.validFrom > end) errors.push({record,issue:'missing/invalid period or outside target week'});
    if (!/^https:\/\//.test(row['출처'])) errors.push({record,issue:'missing HTTPS source'});
    if (!validTimestamp(row['수집시각'])) errors.push({record,issue:'invalid collection timestamp'});
    if (row['행사가격'] && cents(row['행사가격']) === null) errors.push({record,issue:'invalid regular sale price'});
    if (row['앱가격'] && cents(row['앱가격']) === null) errors.push({record,issue:'invalid app price'});
    if (row['행사시작일'] && row['행사시작일'] !== period?.validFrom) errors.push({record,issue:'start date contradicts period'});
    if (row['행사종료일'] && row['행사종료일'] !== period?.validThrough) errors.push({record,issue:'end date contradicts period'});
    if (!row['상품명']) errors.push({record,issue:'missing product name'});
    if (!row['가격적용단위']) warnings.push({record,issue:'selling basis unstructured; review pack vs price denominator'});
    if (row['앱가격'] && !row['할인조건']) warnings.push({record,issue:'app price lacks conditions'});
    if (Number(row['최소구매수량']) > 1 || (row['할인조건'] && !/^(없음|none|unconditional)$/i.test(row['할인조건']))) warnings.push({record,issue:'conditional price excluded from automatic totals'});
    if (!row['원문근거']) warnings.push({record,issue:'no evidence excerpt/page reference'});
    const key=[row['우편번호'],row['체인'],row['지점']].join(' | ');
    combinations[key]=(combinations[key]||0)+1;
    const identity=JSON.stringify([key,row['상품명'],row['상품정보'],row['행사기간'],row['변형정보'],row['상품ID'],row['가격적용단위']]);
    if (counts.has(identity)) errors.push({record,issue:'duplicate product/variant/period row',firstRecord:counts.get(identity)});
    counts.set(identity,record);
  }
  if (!rows.length) errors.push({issue:'no product rows'});
  return {weekStart,weekEnd:end,rowCount:rows.length,combinations,errors,warnings};
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const input=process.argv[2];
  const args=process.argv.slice(3);
  const value=(flag)=>args[args.indexOf(flag)+1];
  if (!input || !args.includes('--week-start') || !args.includes('--output-dir')) throw new Error('Usage: node scripts/prepare-meal-week.mjs INPUT.csv --week-start YYYY-MM-DD --output-dir NEW_DIRECTORY');
  const output=path.resolve(value('--output-dir'));
  const published=path.resolve('public');
  if (output===published || output.startsWith(published+path.sep)) throw new Error('Preflight must stage outside public/');
  if (fs.existsSync(output)) throw new Error('Staging directory must not exist: '+output);
  const bytes=fs.readFileSync(input);
  const rows=parseCsv(bytes.toString('utf8'));
  const report=inspectWeek(rows,value('--week-start'));
  report.sourceSha256=crypto.createHash('sha256').update(bytes).digest('hex');
  if (report.errors.length) {
    console.error(JSON.stringify(report,null,2));
    process.exitCode=1;
  } else {
    const source='/offers/'+path.basename(input);
    const {packageCatalog,offersByIdentity,meta}=generateCatalog(rows,source);
    report.matchedIngredients=Object.fromEntries(Object.entries(packageCatalog).flatMap(([area,stores])=>Object.entries(stores).map(([store,offers])=>[area+'/'+store,Object.keys(offers).length])));
    fs.mkdirSync(output,{recursive:true});
    fs.copyFileSync(input,path.join(output,path.basename(input)));
    fs.writeFileSync(path.join(output,'meal-package-prices.js'), 'window.mealPackagePricesByArea = '+JSON.stringify(packageCatalog,null,2)+';\nwindow.mealOffersByIdentity = '+JSON.stringify(offersByIdentity,null,2)+';\nwindow.mealOfferMeta = '+JSON.stringify(meta,null,2)+';\n');
    fs.writeFileSync(path.join(output,'audit.json'),JSON.stringify(report,null,2)+'\n');
    console.log(JSON.stringify({staging:output,rows:report.rowCount,stores:Object.keys(report.combinations).length,warnings:report.warnings.length}));
  }
}
