import test from 'node:test';
import assert from 'node:assert/strict';
import {inspectWeek} from '../scripts/prepare-meal-week.mjs';
const row={수집시각:'2026-09-13T09:00:00+02:00',체인:'Lidl',지점:'Test',우편번호:'10115',행사기간:'14.09.2026-19.09.2026',상품명:'Pasta',상품정보:'500 g',행사가격:'0.99',출처:'https://www.lidl.de/'};
test('Sunday collection targets the following Monday, rejecting the previous week',()=>{
 assert.equal(inspectWeek([row],'2026-09-14').errors.length,0);
 assert.ok(inspectWeek([{...row,행사기간:'07.09.2026-12.09.2026'}],'2026-09-14').errors.length);
 assert.throws(()=>inspectWeek([row],'2026-09-13'),/Monday/);
});
test('duplicate rows and broken prices fail preflight, missing evidence is reported',()=>{
 assert.ok(inspectWeek([row,row],'2026-09-14').errors.some(e=>e.issue.includes('duplicate')));
 assert.ok(inspectWeek([{...row,행사가격:'1,234.56'}],'2026-09-14').errors.length);
 assert.ok(inspectWeek([row],'2026-09-14').warnings.length);
});
test('variant identity, strict timestamp and app-price validation match the collection contract',()=>{
 assert.equal(inspectWeek([{...row,변형정보:'150 g'},{...row,변형정보:'200 g'}],'2026-09-14').errors.length,0);
 assert.ok(inspectWeek([{...row,수집시각:'2026-99-99 not-a-timestamp'}],'2026-09-14').errors.length);
 assert.ok(inspectWeek([{...row,앱가격:'not-a-price'}],'2026-09-14').errors.length);
 assert.ok(inspectWeek([{...row,행사시작일:'2026-09-07'}],'2026-09-14').errors.length);
});
