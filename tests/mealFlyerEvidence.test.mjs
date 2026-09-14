import test from 'node:test';
import assert from 'node:assert/strict';

import {buildFlyerEvidence} from '../scripts/collect-meal-flyer-evidence.mjs';

const page=(number)=>({
  id:`page-${number}`,number,width:1415,height:2400,
  image:`https://imgproxy.example/page-${number}.jpg`,
  zoom:`https://imgproxy.example/page-${number}-zoom.jpg`,
  thumbnail:`https://imgproxy.example/page-${number}-thumb.jpg`,
  altText:`Seite ${number}`,
  links:[],
});

const source=(pages)=>({
  pdfBytes:Buffer.from(`pdf-${pages}`),
  pdfPageCount:pages,
  pdfText:Array.from({length:pages},(_,index)=>`page ${index+1}`).join('\f'),
});

test('full flyer evidence records every PDF page and the Lidl viewer boundary',()=>{
  const evidence=buildFlyerEvidence({
    weekStart:'2026-09-14',collectedAt:'2026-09-14T19:00:00+02:00',
    netto:{...source(2),sourceUrl:'https://netto.example/flyer.pdf'},
    lidl:{...source(3),apiBytes:Buffer.from('{"flyer":{}}'),api:{flyer:{pdfUrl:'https://lidl.example/flyer.pdf',pages:[1,2,3].map(page)}},viewerUrl:'https://lidl.example/viewer',apiUrl:'https://lidl.example/api',viewerPageCount:4},
  });

  assert.equal(evidence.kind,'mohemeokji-full-flyer-evidence');
  assert.deepEqual(evidence.summary,{sourceCount:2,contentPages:5,checkedContentPages:5,viewerBoundaryPages:[{chain:'Lidl',page:4}]});
  assert.equal(evidence.sources[0].pageCount,2);
  assert.equal(evidence.sources[0].checkedPageCount,2);
  assert.equal(evidence.sources[0].extraction.pages[1].page,2);
  assert.equal(evidence.sources[1].pageCount,3);
  assert.equal(evidence.sources[1].checkedPageCount,3);
  assert.equal(evidence.sources[1].viewerPageCount,4);
  assert.equal(evidence.sources[1].pages.length,3);
});

test('full flyer evidence refuses incomplete page extraction or mismatched Lidl metadata',()=>{
  const base={weekStart:'2026-09-14',collectedAt:'2026-09-14T19:00:00+02:00',netto:source(2),lidl:{...source(2),apiBytes:Buffer.from('{}'),api:{flyer:{pdfUrl:'https://lidl.example/flyer.pdf',pages:[1].map(page)}},viewerPageCount:2}};
  assert.throws(()=>buildFlyerEvidence({...base,netto:{...base.netto,pdfText:'only one page'}}),/PDF text page count/);
  assert.throws(()=>buildFlyerEvidence(base),/API and PDF page counts differ/);
  assert.throws(()=>buildFlyerEvidence({...base,lidl:{...base.lidl,api:{flyer:{pdfUrl:'https://lidl.example/flyer.pdf',pages:[page(2),page(1)]}}}}),/page sequence/);
});
