import test from 'node:test';
import assert from 'node:assert/strict';

import {buildStoreSourceEvidence} from '../scripts/collect-store-source-evidence.mjs';

test('store source evidence keeps PDF coverage and HTML record coverage separate',()=>{
  const evidence=buildStoreSourceEvidence({
    weekStart:'2026-09-14',collectedAt:'2026-09-14T20:00:00+02:00',
    sources:[
      {id:'metro',chain:'METRO',postcodes:['40235'],url:'https://metro.example/flyer.pdf',type:'html',localPath:'/dev/null',recordCount:4,checkedRecordCount:4},
      {id:'rewe',chain:'REWE',postcodes:['44369'],url:'https://rewe.example/',status:'접근실패',httpStatus:403,responseBytes:12},
    ],
  });
  assert.equal(evidence.sources[0].evidence.status,'수집완료');
  assert.equal(evidence.sources[0].evidence.recordCount,4);
  assert.equal(evidence.sources[1].evidence.status,'접근실패');
  assert.equal(evidence.summary.complete,1);
  assert.equal(evidence.summary.accessFailed,1);
});

test('store source evidence rejects an incomplete source identity',()=>{
  assert.throws(()=>buildStoreSourceEvidence({weekStart:'2026-09-14',collectedAt:'2026-09-14T20:00:00+02:00',sources:[{id:'missing-url',chain:'Lidl',postcodes:['44369']}] }),/source identity/);
});

test('HTML evidence stays partial when record counts are unknown or disagree',()=>{
  const evidence=buildStoreSourceEvidence({
    weekStart:'2026-09-14',collectedAt:'2026-09-14T20:00:00+02:00',
    sources:[
      {id:'unknown',chain:'ALDI SÜD',postcodes:['40468'],url:'https://aldi.example/',type:'html',localPath:'/dev/null'},
      {id:'mismatch',chain:'EDEKA',postcodes:['40474'],url:'https://edeka.example/',type:'html',localPath:'/dev/null',recordCount:12,checkedRecordCount:11},
    ],
  });
  assert.deepEqual(evidence.sources.map((source)=>source.evidence.status),['일부수집','일부수집']);
  assert.equal(evidence.summary.complete,0);
  assert.equal(evidence.summary.partial,2);
});
