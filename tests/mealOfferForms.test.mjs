import test from 'node:test';
import assert from 'node:assert/strict';
import {generateCatalog} from '../scripts/generate-meal-offers.mjs';
import {buildStoreCandidateReport} from '../scripts/find-store-recipe-candidates.mjs';

const catalog=(name,detail='500 g')=>generateCatalog([{
  수집시각:'2026-09-13 20:02 Europe/Berlin',체인:'Test',지점:'Test, 44369 Dortmund',
  우편번호:'44369',행사기간:'14.09.2026-19.09.2026',상품명:name,상품정보:detail,
  행사가격:'1.99',출처:'https://example.com/offers',
}]).packageCatalog['44369'].Test;

for(const [name,detail,key] of [
  ['Kania Tomatenketchup','500 ml','토마토'],
  ['Getrocknete Tomaten','100 g','토마토'],
  ['Kühne Gewürzgurken','670-g-Glas','오이'],
  ['AMMERLÄNDER Butterkäse','100 g','버터'],
  ['Lauchzwiebeln','Bund','양파'],
  ['Fruchtjoghurt','400 g','요거트'],
  ['ALPRO Soja-Joghurtalternative','400 g','요거트'],
  ['Joghurt mit der Ecke','150 g','요거트'],
  ['Quarkbällchen','Stück','요거트'],
  ['Joghurt XXL','verschiedene Sorten','요거트'],
  ['Piccolinis Tomate-Mozzarella','270 g','모짜렐라치즈'],
  ['MÜLLER Milchreis, Kokosmilch-Reis oder Grießpudding','200 g','쌀'],
  ['Express-Reis','220 g','쌀'],
  ['Chio Tortillas Nacho Cheese','110-g-Btl.','또띠아'],
  ['Tortillas','110-g-Beutel','또띠아'],
  ['Thunfisch-Filets','Dose Abtropfgewicht = 168 g','참치'],
  ['ESCAL Regenbogen-Forellen','1 kg','송어'],
  ['Käsebrötchen','Stück','빵'],
  ['K-CLASSIC Toastbrötchen','335 g','토스트'],
]) test(`${name} cannot price a different ingredient form (${key})`,()=>{
  assert.equal(catalog(name,detail)[key],undefined);
});

test('verified plain produce and dairy remain eligible without changing original names',()=>{
  for(const [name,key] of [['Frisches Hähnchen Brustfilet','닭가슴살'],['3 Glocken Genuss Pur Pasta','파스타'],['Ecuador - Bananen','바나나'],['Span. Bio-Miniromatomaten','토마토'],['Zwiebeln rot','양파'],['Lauchzwiebeln','대파'],['Deutsche Markenbutter','버터'],['Naturjoghurt','요거트']]){
    assert.equal(catalog(name)[key]?.productDe,name);
  }
});

test('a store with no eligible offers keeps a stable branch reference',()=>{
  const input={수집시각:'2026-09-13',체인:'Lidl',지점:'Test, 44369 Dortmund',우편번호:'44369',행사기간:'14.09.2026-19.09.2026',상품명:'Kania Tomatenketchup',상품정보:'500 ml',행사가격:'0.99',출처:'https://example.com'};
  const generated=generateCatalog([input]);
  const empty=buildStoreCandidateReport({...generated,candidates:[],input:'fixture.csv',database:'fixture'}).locations[0];
  assert.match(empty.branchId,/^branch-[a-f0-9]{16}$/);
  const matched=generateCatalog([{...input,상품명:'Tomaten'}]);
  assert.equal(empty.branchId,matched.offersByIdentity[0].branchId);
});
