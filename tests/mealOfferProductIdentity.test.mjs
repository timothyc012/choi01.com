import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import assert from 'node:assert/strict';
import {generateCatalog} from '../scripts/generate-meal-offers.mjs';

const context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(new URL('../public/mohemeokji/meal-recommendations.js',import.meta.url),'utf8'),context);
const policy=context.window.MealRecommendations;

const baseRow={
  수집시각:'2026-10-04T20:00:00+02:00',체인:'Test',지점:'Test branch',우편번호:'44369',
  행사기간:'05.10.2026-10.10.2026',행사가격:'1.99',출처:'https://example.test/flyer',검토상태:'공식확인',
};
const catalog=(상품명,상품정보='500 g')=>generateCatalog([{...baseRow,상품명,상품정보}],'/offers/test.csv').packageCatalog['44369'].Test;

test('prepared products containing an ingredient name never become that plain ingredient',()=>{
  for(const [product,detail,ingredient] of [
    ['FAVORINA Marzipan Butterstollen Konfekt, verschiedene Sorten','300 g','버터'],
    ['EDEKA Regional - Koch-, Krusten- oder Butterschinken','100 g Packung','버터'],
    ['MEGGLE Kräuterbutter','5x20-g-Packung','버터'],
    ['Rama mit Butter XXL','400-g-Packung | 9 % Butter; gesalzen','버터'],
    ['Butter-Kuchen','400 g Gebäck','버터'],
    ['Rasting - Nusstoastschinken','geräuchert, je 100 g','토스트'],
    ['Toastschinken','150 g | herzhaft, saftig','토스트'],
    ['Alnatura Bio Karottensaft','0,33 l Glasflasche','당근'],
    ['Wiltmann - Sauerfleisch mit Zwiebeln oder Hähnchenbrust in Aspik','je 100 g','양파'],
    ['Zwiebelmettwurst oder Schinkenzwiebelmettwurst','200 g Packung','양파'],
    ['Kühne Gurken','670 g Glas / 360 g Abtropfgewicht','오이'],
    ['GUT & GÜNSTIG - Pfirsiche','halbe Frucht, leicht gezuckert, 820 g Dose','복숭아'],
    ['CUCINA San-Marzano-Tomaten','420-ml-Dose | ganz; geschält','토마토'],
    ['CUCINA Tomaten-Oliven-Brötchen','zum Fertigbacken','토마토'],
    ['GOLDEN SEAFOOD Garnelen XXL','geschält; mariniert; Knoblauch-Chili','새우'],
    ['Hähnchenbrustfilet','im Baconmantel, je 100 g','닭가슴살'],
  ]) assert.equal(catalog(product,detail)[ingredient],undefined,`${product} was accepted as ${ingredient}`);
});

test('plain products remain eligible, including the verified Kaergarden butter SKU',()=>{
  for(const [product,detail,ingredient] of [
    ['ARLA Kærgården Butter','250-g-Packung | 82 % Fett; mild gesäuert','버터'],
    ['Landliebe Butter','82% Fett, 250 g Packung','버터'],
    ['Deutsche Markenbutter','250 g','버터'],
    ['Deutsche Möhren','2 kg','당근'],
    ['Deutsche Rote Zwiebeln','1 kg','양파'],
    ['Spanien - Bio-Salatgurke','Klasse II, Stück','오이'],
    ['Cherryrispentomaten','200-g-Schale','토마토'],
    ['Garnelen','400 g, roh, tiefgefroren','새우'],
    ['METZGERFRISCH Frische Hähnchen-Brustfilets','600 g','닭가슴살'],
    ['Toastbrot','500 g','토스트'],
  ]) assert.ok(catalog(product,detail)[ingredient],`${product} lost ${ingredient}`);
});

test('historical offers are guarded even when their stored identity metadata is wrong',()=>{
  const wrong=(ingredientId,productDe,detail='')=>({identity:{ingredientId},productDe,detail});
  assert.equal(policy.offerProductIdentityEligible(wrong('당근','Alnatura Bio Karottensaft','0,33 l Glasflasche')),false);
  assert.equal(policy.safeOffer(wrong('버터','FAVORINA Butterstollen','300 g')),false);
  assert.equal(policy.safeOffer(wrong('버터','ARLA Kærgården Butter','82 % Fett; 250 g')),true);
  assert.equal(policy.safeOffer({identity:{ingredientId:'오이'},productDe:'Gurken',pack:'720-ml-Glas / 360 g Abtropfgewicht'}),false);
  assert.equal(policy.safeOffer({identity:{ingredientId:'새우',species:'shrimp',processingState:'raw'},productDe:'GOLDEN SEAFOOD Garnelen XXL',pack:'400-g-Packung'}),false);
});

test('typed raw, fresh, dried and aged identities reject prepared lookalikes systemically',()=>{
  const eligible=(ingredientId,productDe,detail='',identity={})=>policy.offerProductIdentityEligible({identity:{ingredientId,...identity},productDe,detail});
  const rawPork={species:'pork',processingState:'raw',form:'steak'};
  assert.equal(eligible('돼지목살','Schweine-Nackensteaks','natur, unmariniert',rawPork),true);
  assert.equal(eligible('돼지목살','Schweine-Nackensteaks','mariniert und gewürzt',rawPork),false);
  assert.equal(eligible('연어','Lachsfilet','tiefgefroren',{species:'salmon',processingState:'raw',form:'fillet'}),true);
  assert.equal(eligible('연어','Lachsfilet','gegart und geräuchert',{species:'salmon',processingState:'raw',form:'fillet'}),false);
  assert.equal(eligible('닭가슴살','Hähnchenbrustfilet','500 g, ungewürzt',{species:'chicken',processingState:'raw',form:'fillet'}),true);
  assert.equal(eligible('새우','Garnelen','400 g, ungegart',{species:'shrimp',processingState:'raw',form:'whole'}),true);
  assert.equal(eligible('새우','Garnelen','400 g, ungewürzt, roh',{species:'shrimp',processingState:'raw',form:'whole'}),true);
  assert.equal(eligible('마늘','Bio Knoblauch','150 g Netz',{species:'plant',processingState:'fresh',form:'whole'}),true);
  for(const product of ['Knoblauch Garnelen','Knoblauchbrot','Knoblauchsauce'])assert.equal(eligible('마늘',product,'',{species:'plant',processingState:'fresh',form:'whole'}),false,product);
  assert.equal(eligible('블루베리','Bio Heidelbeeren','125 g Schale',{species:'plant',processingState:'fresh',form:'whole'}),true);
  for(const product of ['Heidelbeeren Marmelade','Heidelbeer-Saft'])assert.equal(eligible('블루베리',product,'',{species:'plant',processingState:'fresh',form:'whole'}),false,product);
  assert.equal(eligible('쌀','BEN’S ORIGINAL Langkorn-Reis','750 g',{species:'grain',processingState:'dried',form:'pack'}),true);
  for(const [product,detail] of [['Reisnudeln','500 g'],['Express-Reis','vorgegart']])assert.equal(eligible('쌀',product,detail,{species:'grain',processingState:'dried',form:'pack'}),false,product);
  assert.equal(eligible('치즈','MILBONA Gouda Jung','700 g',{species:'dairy',processingState:'aged',form:'block'}),true);
  assert.equal(eligible('치즈','Gouda Schmelzkäsezubereitung','Scheiben',{species:'dairy',processingState:'aged',form:'block'}),false);
  assert.equal(eligible('감자','Produkt 1','500 g',{species:'plant',processingState:'fresh',form:'whole'}),false);
});

test('raw salmon and fresh produce reject cured species and prepared-product vocabulary',()=>{
  const eligible=(ingredientId,productDe,detail='',identity={})=>policy.offerProductIdentityEligible({identity:{ingredientId,...identity},productDe,detail});
  const rawSalmon={species:'salmon',processingState:'raw',form:'fillet'};
  for(const [product,detail] of [
    ['K-CLASSIC Stremellachs','125-g-Packung'],['Stremellachsfilet','125 g'],['Gravad Lachsfilet','150 g'],
    ['Gravlax Lachsfilet','150 g'],['Räucherlachsfilet','150 g'],['Lachsfilet','heißgeräuchert'],
    ['Lachsfilet','kaltgeräuchert'],['Smoked Lachsfilet','150 g'],['Lachsfilet','gebeizt'],['Seelachsfilet','je 100 g'],
  ]) assert.equal(eligible('연어',product,detail,rawSalmon),false,product+' '+detail);
  assert.equal(eligible('연어','Norwegische Lachsfilet-Portionen','tiefgefroren',rawSalmon),true);
  assert.equal(eligible('연어','Bio Lachsfilets','natur',rawSalmon),true);
  const freshPlant={species:'plant',processingState:'fresh',form:'whole'};
  assert.equal(eligible('양파','Geschnetzeltes Gyros Art vom Schwein mit Zwiebeln','500 g',freshPlant),false);
  assert.equal(eligible('양파','Deutsche Rote Zwiebeln','1 kg',freshPlant),true);
  assert.equal(eligible('오이','Kühne Gurken','670 g',freshPlant),false);
  assert.equal(eligible('오이','Gurken','1 Stück | fresh cucumber',freshPlant),true);
});

test('a hollowable large loaf recipe cannot use rolls, toast or tortillas',()=>{
  const meal={id:'hollow-loaf-recipe',title:'과일 가득 리코타 빵케이크',sale:['빵'],missing:[],recommendationProfile:{primaryIngredients:['빵']},detailIngredients:['빵 1개','리코타치즈 500g'],steps:['큰 빵 윗면에 칼집을 낸다.','빵 속을 파낸다.']};
  const offer=(productDe,form='whole')=>({identity:{ingredientId:'빵',form},productDe,detail:'300 g'});
  for(const product of ['Kartoffelbrötchen','EDEKA Bio - Landbrötchen','Tomaten-Oliven-Brötchen','Brötchen XXL','Toastbrot','Tortilla Wraps']) {
    assert.equal(policy.offerMatchesRecipe(offer(product),meal),false,product);
  }
  assert.equal(policy.offerMatchesRecipe(offer('Kartoffelbrötchen','whole'),{title:'과일 리코타 빵케이크'}),false);
  assert.equal(policy.offerMatchesRecipe(offer('Kartoffelbrötchen','roll'),{
    title:'과일치즈케이크 만들기',detailIngredients:['빵 1개'],steps:[{ordinal:1,instruction:'큰 빵 윗면에 칼집을 낸다.'},{ordinal:2,instruction:'빵 속을 파낸다.'}],
  }),false);
  assert.equal(policy.offerMatchesRecipe(offer('Großes Bauernbrot','whole-loaf'),meal),true);
  assert.equal(policy.explain(meal,{빵:{...offer('Kartoffelbrötchen','roll'),product:'Kartoffelbrötchen'}}).mainOffers.length,0);
  const global={빵:{...offer('Kartoffelbrötchen','roll'),product:'Kartoffelbrötchen'}};
  const compatible={빵:{...offer('Großes Bauernbrot','whole-loaf'),product:'Großes Bauernbrot'}};
  assert.equal(policy.evaluateRecipeForMode(meal,{requireMainOffer:true,catalog:global},'balanced').eligible,false);
  assert.equal(policy.evaluateRecipeForMode(meal,{requireMainOffer:true,catalog:global,catalogFor:()=>compatible},'balanced').eligible,true);
});

test('mozzarella selling form is derived from explicit product evidence',()=>{
  const block=catalog('CUCINA Mozzarella-Stange','400-g-Packung | Schnittfest; am Stück')['모짜렐라치즈'];
  assert.equal(block.identity.form,'block');
  const balls=catalog('Mini Mozzarella','150 g | kleine Kugeln')['모짜렐라치즈'];
  assert.equal(balls.identity.form,'mini-balls');
  const offer=(form)=>({identity:{ingredientId:'모짜렐라치즈',form},productDe:form==='mini-balls'?'Mini Mozzarella':'Mozzarella',detail:'125 g'});
  assert.equal(policy.offerMatchesRecipe(offer('mini-balls'),{title:'샐러드',detailIngredients:['미니 모짜렐라 10개']}),true);
  assert.equal(policy.offerMatchesRecipe(offer('ball'),{title:'샐러드',detailIngredients:['미니 모짜렐라 10개']}),false);
  assert.equal(policy.offerMatchesRecipe(offer('mini-balls'),{title:'카프레제',detailIngredients:['모짜렐라치즈 1개']}),false);
  assert.equal(policy.offerMatchesRecipe(offer('ball'),{title:'카프레제',detailIngredients:['모짜렐라치즈 1개']}),true);
});
