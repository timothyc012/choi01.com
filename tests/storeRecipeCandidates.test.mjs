import test from 'node:test';
import assert from 'node:assert/strict';
import {buildStoreCandidateReport,searchRequestForCatalog} from '../scripts/find-store-recipe-candidates.mjs';

test('candidate lookup is driven by exact offer keys and remains grouped by store',()=>{
  const packageCatalog={
    '52064':{
      EDEKA:{돼지안심:{product:'Schweinefilet lang',pack:'1 Packung',priceCents:899,sourceRow:2,evidenceUrl:'https://example.com/edeka'}},
      'ALDI SÜD':{소고기등심:{product:'Rib-Eye-Steak',pack:'100 g',priceCents:277,sourceRow:3,evidenceUrl:'https://example.com/aldi'}},
    }
  };
  assert.deepEqual(searchRequestForCatalog(packageCatalog).map(x=>x.key),['돼지안심','소고기등심']);
  const meta={stores:{'52064':['EDEKA','ALDI SÜD']},profiles:{'52064':{EDEKA:{branch:'E'},'ALDI SÜD':{branch:'A'}}}};
  const candidates=[{offerKey:'돼지안심',sourceRecipeId:'7020528'},{offerKey:'소고기등심',sourceRecipeId:'7030595'}];
  const report=buildStoreCandidateReport({packageCatalog,meta,candidates,input:'week.csv',database:'01ontology'});
  assert.deepEqual(report.locations[0].offers[0].recipeCandidates.map(x=>x.sourceRecipeId),['7020528']);
  assert.deepEqual(report.locations[1].offers[0].recipeCandidates.map(x=>x.sourceRecipeId),['7030595']);
  assert.notDeepEqual(report.locations[0].offers,report.locations[1].offers);
});
