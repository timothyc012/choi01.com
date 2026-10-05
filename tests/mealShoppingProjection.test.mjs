import fs from 'node:fs';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {JSDOM} from 'jsdom';
import test from 'node:test';
import assert from 'node:assert/strict';
const root=new URL('../public/mohemeokji/',import.meta.url);
function policyContext(){const c=vm.createContext({window:{},URLSearchParams,URL});for(const name of ['meal-shopping.js','meal-recommendations.js','meal-planner-recipe-data.js'])vm.runInContext(fs.readFileSync(new URL(name,root),'utf8'),c);return c.window;}
const quote=(id,name,product,form,priceCents=199)=>({offerId:id,identity:{ingredientId:name,form},productDe:product,pack:'500 g',priceCents,validFrom:'2026-10-05',validThrough:'2026-10-11',evidenceUrl:'https://example.test/offers/'+id});
const rice=quote('rice','쌀','Langkornreis','grain');
const champignon=quote('champignon','버섯','Weiße Champignons','whole',129);
const loaf=quote('loaf','빵','Bauernbrot','whole-loaf',249);
const roll=quote('roll','빵','Weizenbrötchen','roll',149);
function recipe(id,title,names,labels,offerIds){return {sourceRecipeId:id,title,sourceServingText:'2인분',detailIngredients:labels,primaryIngredientIds:names,offerIds,recommendationProfile:{primaryIngredients:[names[0]],kind:'main',family:'rice',method:'bake'}};}

test('direct snapshot projections never expose an unsafe raw product in any catalog lookup',()=>{
 const w=policyContext(),bad=quote('cake','버터','Butterkuchen','cake',299),good=quote('butter','버터','Arla Butter','block',249);
 const raw={store:'Netto',offers:[bad,good],recipes:[recipe('butter-rice','버터밥',['버터'],['버터 20g'],['cake','butter'])]};
 const matcher=w.MealRecommendations.offerMatchesRecipe;
 w.MealRecommendations.offerMatchesRecipe=()=>true; // Even a permissive consumer must pass the independent identity guard.
 const projected=w.MealRecipeData.fromSnapshotLocation(raw)[0],catalog=w.MealRecipeData.offerCatalogFromSnapshot(raw);
 w.MealRecommendations.offerMatchesRecipe=matcher;
 assert.deepEqual([...projected.matchedOffers.map(offer=>offer.offerId)],['butter']);
 assert.equal(catalog.버터.product,'Arla Butter');assert.equal(catalog.offersById.cake,undefined);
 assert.deepEqual([...catalog.offersByIngredient.버터.map(offer=>offer.offerId)],['butter']);
 assert.equal(raw.offers.length,2);assert.equal(raw.offers[0].productDe,'Butterkuchen');
});

test('valid rice cannot reintroduce a recipe-incompatible mushroom quote through global fallback',()=>{
 const w=policyContext(),location={store:'Netto',offers:[rice,champignon],recipes:[recipe('1','표고버섯 볶음밥',['쌀','버섯'],['쌀 200g','표고버섯 100g'],['rice','champignon'])]};
 const projected=w.MealRecipeData.currentOfferLocation(location,'2026-10-05'),meal=w.MealRecipeData.fromSnapshotLocation(projected)[0],catalog=w.MealRecipeData.offerCatalogFromSnapshot(projected);
 assert.deepEqual([...meal.matchedOffers.map(o=>o.offerId)],['rice']);
 assert.equal(w.MealRecommendations.evaluateRecipeForMode(meal,{catalog,requireMainOffer:true},'balanced').eligible,true);
 meal.requiredAmounts={쌀:{amount:200,unit:'g'},버섯:{amount:100,unit:'g'}};
 const cart=w.MealShopping.basket([meal],{catalog:{Netto:catalog}}),bad=cart.items.find(item=>item.name==='버섯');
 assert.equal(bad.priceCents,null);assert.equal(bad.quantityNeedsCheck,true);assert.equal(bad.product,'');
 assert.equal(cart.costStatus,'partial');assert.equal(cart.knownSubtotalCents,199);
 const only=w.MealShopping.basket([{...meal,sale:['버섯']}],{catalog:{Netto:catalog}});
 assert.equal(only.costStatus,'unknown');assert.equal(only.knownSubtotalCents,0);assert.notEqual(w.MealShopping.summary(only),'구매 합계 0,00€');
});

test('weekly and sequential baskets hold distinct mozzarella forms rather than merging one SKU',()=>{
 const w=policyContext(),ball=quote('ball','모짜렐라치즈','Galbani Mozzarella','ball',129),mini=quote('mini','모짜렐라치즈','Mini-Mozzarella','mini-balls',199);
 const location={offers:[ball,mini]},catalog=w.MealRecipeData.offerCatalogFromSnapshot(location);
 const meal=(id,label)=>({id,store:'Netto',title:'치즈 샐러드',sale:['모짜렐라치즈'],missing:[],detailIngredients:[label],requiredAmounts:{모짜렐라치즈:{amount:125,unit:'g'}}});
 const a=meal('one','모짜렐라치즈 1개'),b=meal('two','미니 모짜렐라 10개');
 const first=w.MealShopping.basket([a],{catalog:{Netto:catalog}}),second=w.MealShopping.basket([b],{catalog:{Netto:catalog}});
 assert.equal(first.items[0].offerId,'ball');assert.equal(second.items[0].offerId,'mini');
 const combined=w.MealShopping.basket([a,b],{catalog:{Netto:catalog}});assert.equal(combined.costStatus,'unknown');assert.equal(combined.items[0].priceCents,null);assert.equal(combined.items[0].quantityNeedsCheck,true);
 const list=w.MealShopping.addToList(w.MealShopping.addToList([],first),second);
 assert.equal(list[0].priceCents,null);assert.equal(list[0].source,'');assert.equal(list[0].quantityNeedsCheck,true);
 const stocked=w.MealShopping.basket([a,b],{catalog:{Netto:catalog},pantry:new Set(['Netto:모짜렐라치즈'])});assert.equal(stocked.purchaseCount,0);assert.equal(stocked.totalCents,0);
 const valid=w.MealShopping.basket([a,a],{catalog:{Netto:catalog}});assert.equal(valid.costStatus,'complete');assert.equal(valid.items[0].quantity,1);assert.equal(valid.items[0].requiredAmount.amount,250);
});

test('same-snapshot wrong product restore preserves checks but removes automatic price and package evidence',()=>{
 const w=policyContext(),shopping=w.MealShopping,key='Netto:버터';
 const saved={version:1,snapshot:'same',pantry:[],prices:{[key]:299},quantities:{week:{[key]:2}},list:[{key,name:'버터',store:'Netto',product:'Butterkuchen',pack:'400 g',source:'https://example.test/cake',priceCents:299,quantity:2,completed:true}]};
 const restored=shopping.restoreState(JSON.stringify(saved),'same',{stores:['Netto']});
 assert.equal(restored.list.length,1);assert.equal(restored.list[0].completed,true);assert.equal(restored.list[0].priceCents,null);assert.equal(restored.list[0].source,'');assert.equal(restored.list[0].product,'');assert.equal(restored.list[0].quantityNeedsCheck,true);
 assert.equal(restored.prices[key],undefined);assert.equal(restored.quantities.week[key],undefined);
 restored.list[0].completed=false;assert.equal(shopping.listProgress(restored.list).costStatus,'unknown');
 const good={...saved,prices:{},quantities:{},list:[{...saved.list[0],product:'Arla Kaergarden Butter',pack:'250 g',quantity:1,identity:{ingredientId:'버터',processingState:'plain',form:'block'}}]};
 const valid=shopping.restoreState(JSON.stringify(good),'same',{stores:['Netto']});assert.equal(valid.list[0].priceCents,299);assert.equal(valid.list[0].source,'https://example.test/cake');assert.equal(valid.list[0].completed,true);
 const incoming=shopping.basket([{store:'Netto',sale:['버터'],missing:[],requiredAmounts:{버터:{amount:125,unit:'g'}}}],{catalog:{Netto:{버터:{...quote('butter','버터','Arla Butter','block'),product:'Arla Butter',source:'https://example.test/butter'}}}});
 assert.equal(shopping.addToList(restored.list,incoming)[0].priceCents,null);
});

test('measured quantity lookup preserves source spacing aliases and opaque basket facts remain held',()=>{
 const w=policyContext(),meal={store:'Netto',title:'닭가슴살 구이',sale:['닭가슴살'],missing:[],detailIngredients:['닭 가슴살 300g'],requiredAmounts:{'닭 가슴살':{amount:300,unit:'g'}}};
 const chicken=quote('chicken','닭가슴살','Hähnchenbrustfilet','fillet',599),catalog=w.MealRecipeData.offerCatalogFromSnapshot({offers:[chicken]});
 const cart=w.MealShopping.basket([meal],{catalog:{Netto:catalog}});
 assert.equal(cart.items[0].requiredAmount.amount,300);assert.equal(cart.items[0].quantityCalculated,true);assert.equal(cart.costStatus,'complete');
 const context={postcode:'44369',store:'Netto',branchId:'a',date:'2026-10-05',targetServings:2};
 const opaque={sourceCoverage:'complete',...context,items:[{key:'chicken',name:'닭가슴살',pantryKeys:['Netto:닭가슴살'],pack:{amount:500,unit:'g'},requiredAmount:{amount:300,unit:'g'},priceCents:599,quantity:1,subtotalCents:599,quantityComplete:true,sourceURL:'https://example.test/chicken',sourceSha256:'a'.repeat(64),validFrom:context.date,validThrough:'2026-10-11'}]};
 assert.equal(w.MealShopping.compilerBasket([opaque],{context,meals:[meal]}),null);
 assert.equal(w.MealShopping.marginalBasketFacts(opaque,new Set(),context,meal).costStatus,'unknown');
});

test('hash-verified runtime preserves whole-loaf identity after actual recipe hydration',async t=>{
 const sourceRecipeId='9998001',sourceContentHash='a'.repeat(64),detail={schemaVersion:1,sourceRecipeId,sourceContentHash,title:'빵케이크',sourceUrl:'https://www.10000recipe.com/recipe/'+sourceRecipeId,sourceServingText:'2인분',detailIngredients:['빵 200g'],steps:['빵 속을 파낸다.','치즈를 넣는다.','굽는다.']};
 const body=JSON.stringify(detail),hash=crypto.createHash('sha256').update(body).digest('hex'),base='snapshots/2026-10-05/loaf-snapshot',detailPath=base+'/recipes/'+sourceRecipeId+'.json',locationPath=base+'/locations/netto.json';
 const refs=[{...recipe(sourceRecipeId,'빵케이크',['빵'],['빵 200g'],['loaf','roll']),detailPath,detailSha256:hash}];
 const location={schemaVersion:1,snapshotId:'loaf-snapshot',postcode:'44369',store:'Netto',branchId:'branch-a',offers:[loaf,roll],recipes:refs,coverage:{sparse:false}};
 const locationBody=JSON.stringify(location),coveragePath=base+'/coverage.json',recipeIndexPath=base+'/recipes/index.json';
 const hashText=text=>crypto.createHash('sha256').update(text).digest('hex');
 const manifest={schemaVersion:1,snapshotId:'loaf-snapshot',weekStart:'2026-10-05',coveragePath,recipeIndexPath,locations:[{postcode:'44369',store:'Netto',branchId:'branch-a',path:locationPath}],fileHashes:{[locationPath]:hashText(locationBody),[detailPath]:hash,[coveragePath]:hashText('{}'),[recipeIndexPath]:hashText('{}')}};
 const manifestPath=base+'/manifest.json',manifestBody=JSON.stringify(manifest),pointer={schemaVersion:1,snapshotId:'loaf-snapshot',weekStart:'2026-10-05',manifestPath,manifestSha256:hashText(manifestBody)};
 const bodies=new Map([['/mohemeokji/data/current.json',JSON.stringify(pointer)],['/mohemeokji/data/'+manifestPath,manifestBody],['/mohemeokji/data/'+locationPath,locationBody],['/mohemeokji/data/'+detailPath,body]]);
 const dom=new JSDOM(fs.readFileSync(new URL('index.html',root),'utf8'),{url:'https://choi01.com/mohemeokji/?postcode=44369&store=Netto&date=2026-10-05',runScripts:'outside-only'});t.after(()=>dom.window.close());const w=dom.window;
 w.TextEncoder=TextEncoder;w.TextDecoder=TextDecoder;Object.defineProperty(w,'crypto',{value:crypto.webcrypto});w.HTMLElement.prototype.scrollIntoView=()=>{};w.fetch=async url=>({ok:bodies.has(url),arrayBuffer:async()=>new TextEncoder().encode(bodies.get(url)).buffer});
 for(const file of ['meal-data-loader.js','meal-shopping.js','meal-nutrition-policy.js','meal-recommendations.js','meal-planner-recipe-data.js'])w.eval(fs.readFileSync(new URL(file,root),'utf8'));
 const runtime=await w.MealRecipeData.startSnapshotApp();assert.equal(runtime.status,'ready',runtime.error?.stack);
 const meal=await runtime.openDetail('netto-recipe-'+sourceRecipeId);assert.equal(meal.matchedOffers.length,1);assert.equal(meal.matchedOffers[0].offerId,'loaf');
 assert.equal(meal.offerCatalog.빵.identity.form,'whole-loaf');assert.equal(w.MealRecipeData.offerCatalogFromSnapshot(runtime.location).빵.identity.form,'whole-loaf');
 assert.equal(w.MealRecommendations.explain(meal,w.MealRecipeData.offerCatalogFromSnapshot(runtime.location)).mainOffers.length,1);
 assert.match(w.document.querySelector('#detailIngredients').textContent,/Bauernbrot/);assert.doesNotMatch(w.document.querySelector('#detailIngredients').textContent,/Weizenbrötchen/);
});
