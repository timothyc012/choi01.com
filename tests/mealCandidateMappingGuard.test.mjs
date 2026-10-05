import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

import {compileMealWeek} from '../scripts/compile-meal-week.mjs';
import {generateCatalog,parseCsv} from '../scripts/generate-meal-offers.mjs';

const csvHeader=['수집시각','체인','지점','우편번호','행사기간','상품명','상품정보','행사가격','출처','검토상태'];
const csvLine=[
  '2026-10-04T20:00:00+02:00','Netto Marken-Discount','Dortmund Huckarder Allee 27','44369',
  '05.10.2026-10.10.2026','Hähnchenbrustfilet','600 g','4.99','https://example.test/flyer','공식확인',
];

const hash=(value)=>crypto.createHash('sha256').update(value).digest('hex');

function writeFixtureCsv(root) {
  const csvPath=path.join(root,'offers.csv');
  fs.writeFileSync(csvPath,[csvHeader.join(','),csvLine.join(',')].join('\n')+'\n');
  return csvPath;
}

function reportFromCsv(csvPath) {
  const rows=parseCsv(fs.readFileSync(csvPath,'utf8'));
  const generated=generateCatalog(rows,'/offers/'+path.basename(csvPath));
  const locations=[];
  for(const [postcode,stores] of Object.entries(generated.meta.stores)) {
    for(const store of stores) {
      const offers=generated.offersByIdentity
        .filter((offer)=>offer.postcode===postcode&&offer.chain===store)
        .map((offer)=>({...offer,recipeCandidateIds:[]}));
      const profile=generated.meta.profiles[postcode][store];
      locations.push({postcode,store,branch:profile.branch,branchId:profile.branchId,offers});
    }
  }
  return {
    generatedAt:'2026-10-04T20:00:00.000Z',input:csvPath,database:'fixture-db',tenant:'recipe-full',
    locations,candidates:[],zeroCandidateOfferIds:generated.offersByIdentity.map((offer)=>offer.offerId),
    identityStats:{},overflow:{},zeroCandidateIdentities:[],
  };
}

function options({csvPath,candidateReport,outputDir}) {
  return {
    csvPath,candidateReport,outputDir,registry:{schemaVersion:1,recipes:{}},
    weekStart:'2026-10-05',collectionTimestamp:'2026-10-04T20:00:00+02:00',policyVersion:'selection-v1',
  };
}

async function expectRejectedBeforeOutput({csvPath,candidateReport,outputDir},pattern) {
  await assert.rejects(compileMealWeek(options({csvPath,candidateReport,outputDir})),pattern);
  assert.equal(fs.existsSync(outputDir),false,'a stale candidate report must not write any public snapshot files');
}

test('a current CSV requires its candidate report to retain the exact canonical offer set before any snapshot write',async(t)=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'meal-candidate-mapping-'));
  t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
  const csvPath=writeFixtureCsv(root);
  const valid=reportFromCsv(csvPath);

  const compiled=path.join(root,'compiled');
  await compileMealWeek(options({csvPath,candidateReport:valid,outputDir:compiled}));
  assert.equal(fs.existsSync(path.join(compiled,'current.json')),true);
  const current=JSON.parse(fs.readFileSync(path.join(compiled,'current.json'),'utf8'));
  const manifest=JSON.parse(fs.readFileSync(path.join(compiled,current.manifestPath),'utf8'));
  const location=JSON.parse(fs.readFileSync(path.join(compiled,manifest.locations[0].path),'utf8'));
  assert.equal(location.offers[0].productInfo,'600 g','the public offer retains bounded product preparation evidence');

  const staleButterCake=structuredClone(valid);
  const original=staleButterCake.locations[0].offers[0];
  staleButterCake.locations[0].offers[0]={
    ...original,
    offerId:hash('stale-butter-cake'),productDe:'Butter-Kuchen',product:'Butter-Kuchen',
    identity:{ingredientId:'버터',species:'dairy',cut:'butter',processingState:'fresh',form:'pack',composition:'dairy'},
  };
  await expectRejectedBeforeOutput({csvPath,candidateReport:staleButterCake,outputDir:path.join(root,'stale-butter-cake')},/candidate report.*canonical offer/i);

  const missing=structuredClone(valid);
  missing.locations[0].offers=[];
  missing.zeroCandidateOfferIds=[];
  await expectRejectedBeforeOutput({csvPath,candidateReport:missing,outputDir:path.join(root,'missing')},/candidate report.*canonical offer/i);

  const duplicate=structuredClone(valid);
  duplicate.locations[0].offers.push(structuredClone(duplicate.locations[0].offers[0]));
  duplicate.zeroCandidateOfferIds.push(duplicate.locations[0].offers[0].offerId);
  await expectRejectedBeforeOutput({csvPath,candidateReport:duplicate,outputDir:path.join(root,'duplicate')},/candidate report.*canonical offer/i);

  const mutatedIdentity=structuredClone(valid);
  mutatedIdentity.locations[0].offers[0].identity.cut='wing';
  await expectRejectedBeforeOutput({csvPath,candidateReport:mutatedIdentity,outputDir:path.join(root,'mutated-identity')},/candidate report.*canonical offer/i);

  const foreignBranch=structuredClone(valid);
  foreignBranch.locations.push({
    ...structuredClone(foreignBranch.locations[0]),branch:'Unrelated branch',branchId:'branch-foreign',
    offers:foreignBranch.locations[0].offers.map((offer)=>({...offer,branchId:'branch-foreign'})),
  });
  await expectRejectedBeforeOutput({csvPath,candidateReport:foreignBranch,outputDir:path.join(root,'foreign-branch')},/candidate report.*canonical offer/i);
});
