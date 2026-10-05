import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';

const root=new URL('../public/mohemeokji/',import.meta.url);

async function planner(t) {
  const dom=new JSDOM(fs.readFileSync(new URL('index.html',root),'utf8'),{
    url:'https://choi01.com/mohemeokji/?postcode=44369&store=Netto&date=2026-10-05',
    runScripts:'outside-only',pretendToBeVisual:true
  });
  t.after(()=>dom.window.close());
  const {window}=dom,document=window.document;
  window.scrollTo=()=>{};
  window.HTMLElement.prototype.scrollIntoView=()=>{};
  const captured=new Set();
  window.HTMLElement.prototype.setPointerCapture=function(id){captured.add(id);};
  window.HTMLElement.prototype.releasePointerCapture=function(id){captured.delete(id);};
  const offer={offerId:'potato',identity:{ingredientId:'감자'},productDe:'Kartoffeln',pack:'1 kg',priceCents:199,validFrom:'2026-10-05',validThrough:'2026-10-11'};
  const recipes=[
    {sourceRecipeId:'7000001',title:'감자 카레',offerIds:['potato'],primaryIngredientIds:['감자'],detailIngredients:['감자 200g','양파 100g'],recommendationProfile:{kind:'main',family:'potato',primaryIngredients:['감자'],vegetarian:true}},
    {sourceRecipeId:'7000002',title:'닭가슴살 감자 덮밥',offerIds:['potato'],primaryIngredientIds:['감자'],detailIngredients:['닭가슴살 200g','감자 100g'],recommendationProfile:{kind:'main',family:'chicken',primaryIngredients:['감자']}}
  ];
  const location={id:'44369-netto-branch',postcode:'44369',store:'Netto',branchId:'branch',snapshotId:'pointer-fixture',offers:[offer],recipes,coverage:{sparse:false}};
  window.MealDataLoader={
    loadCurrentSnapshot:async()=>({snapshotId:'pointer-fixture',weekStart:'2026-10-05',locations:[location]}),
    loadLocationSnapshot:async()=>location,
    loadDiscoveryCatalog:async()=>({recipes:[]})
  };
  for(const name of ['meal-planner-recipe-data.js','meal-shopping.js','meal-nutrition-policy.js','meal-recommendations.js'])window.eval(fs.readFileSync(new URL(name,root),'utf8'));
  const runtime=await window.MealRecipeData.startSnapshotApp();
  assert.equal(runtime.status,'ready');
  document.getElementById('clearPlan').click();
  let hit=null;
  document.elementFromPoint=()=>hit;
  const pointer=(target,type,{pointerId=1,pointerType='mouse',button=0,x=20,y=20}={})=>{
    const event=new window.MouseEvent(type,{bubbles:true,cancelable:true,button,clientX:x,clientY:y});
    Object.defineProperties(event,{pointerId:{value:pointerId},pointerType:{value:pointerType},isPrimary:{value:true}});
    target.dispatchEvent(event);
    return event;
  };
  const card=(id='7000001')=>document.querySelector('.menu-item[data-id="netto-recipe-'+id+'"]');
  const slot=()=>document.querySelector('#weekGrid .slot[data-day="sun"][data-moment-slot="저녁"]');
  const drag=(source=card(),options={})=>{
    pointer(source,'pointerdown',options);
    pointer(document,'pointermove',{...options,x:100,y:100});
    pointer(document,'pointerup',{...options,x:100,y:100});
  };
  return {window,document,runtime,captured,pointer,card,slot,drag,setHit:(node)=>{hit=node;}};
}

test('mouse pointer drag places a menu into the exact calendar slot and persists it',async(t)=>{
  const p=await planner(t);
  p.setHit(p.slot().querySelector('.slot-empty'));
  p.pointer(p.card().querySelector('h4'),'pointerdown');
  p.pointer(p.document,'pointermove',{x:100,y:100});
  assert.equal(p.slot().classList.contains('drop-target'),true);
  const ghost=p.document.querySelector('[data-meal-drag-ghost]');
  assert.ok(ghost);
  assert.equal(ghost.style.pointerEvents,'none');
  p.pointer(p.document,'pointerup',{x:100,y:100});
  assert.equal(p.runtime.plans.저녁.sun.recipeId,'netto-recipe-7000001');
  assert.equal(p.runtime.plans.저녁.sun.origin,'manual');
  assert.equal(p.runtime.plans.저녁.mon.recipeId,null);
  assert.equal(JSON.parse(p.window.localStorage.getItem(p.runtime.planStorageKey)).plans.저녁.sun.recipeId,'netto-recipe-7000001');
  assert.equal(p.document.querySelector('[data-meal-drag-ghost]'),null);
  assert.equal(p.document.querySelector('.drop-target'),null);
  assert.equal(p.captured.size,0);
});

test('buttons, source summary, touch scrolling and right mouse clicks do not begin dragging',async(t)=>{
  const p=await planner(t);
  p.setHit(p.slot());
  for(const source of [p.card().querySelector('button'),p.card().querySelector('summary')]) {
    p.pointer(source,'pointerdown');
    // A browser reports dragstart on the draggable article, even when the held
    // mouse originally hit one of its controls.
    const nativeStart=new p.window.Event('dragstart',{bubbles:true,cancelable:true});
    Object.defineProperty(nativeStart,'dataTransfer',{value:{setData(){},effectAllowed:''}});
    p.card().dispatchEvent(nativeStart);
    assert.equal(nativeStart.defaultPrevented,true);
    p.pointer(p.document,'pointermove',{x:100,y:100});
    p.pointer(p.document,'pointerup',{x:100,y:100});
  }
  p.drag(p.card(),{pointerType:'touch'});
  p.drag(p.card(),{button:2});
  assert.equal(p.runtime.plans.저녁.sun.recipeId,null);
  assert.equal(p.document.querySelector('[data-meal-drag-ghost]'),null);
  assert.equal(p.card().getAttribute('draggable'),'true');
  assert.equal(p.captured.size,0);
  // The button is still usable through the existing accessible placement flow.
  p.slot().querySelector('[data-pick-slot]').click();
  const addButton=p.card().querySelector('[data-add-menu]');
  addButton.focus();addButton.click();
  assert.equal(p.runtime.plans.저녁.sun.recipeId,'netto-recipe-7000001');
  assert.equal(p.document.activeElement,addButton);
});

test('the threshold preserves clicks and an invalid drop target never changes the plan',async(t)=>{
  const p=await planner(t);
  p.setHit(p.slot());
  p.pointer(p.card(),'pointerdown');
  p.pointer(p.document,'pointermove',{x:25,y:22});
  p.pointer(p.document,'pointerup',{x:25,y:22});
  assert.equal(p.runtime.plans.저녁.sun.recipeId,null);
  assert.equal(p.card().getAttribute('draggable'),'true');
  p.setHit(p.document.getElementById('menuSearch'));
  p.drag();
  assert.equal(p.runtime.plans.저녁.sun.recipeId,null);
  assert.equal(p.captured.size,0);
});

test('pointer cancellation, escape, lost capture and a re-render clean up before another drag',async(t)=>{
  const p=await planner(t);
  p.pointer(p.card(),'pointerdown');
  p.pointer(p.document,'pointercancel');
  assert.equal(p.card().getAttribute('draggable'),'true');
  assert.equal(p.captured.size,0);
  for(const cancel of ['pointercancel','Escape','lostpointercapture','render','pagehide']) {
    p.setHit(p.slot());
    const original=p.card();
    p.pointer(original,'pointerdown');
    p.pointer(p.document,'pointermove',{x:100,y:100});
    assert.ok(p.document.querySelector('[data-meal-drag-ghost]'));
    if(cancel==='Escape')p.document.dispatchEvent(new p.window.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));
    else if(cancel==='render')p.document.getElementById('menuSearch').dispatchEvent(new p.window.Event('input',{bubbles:true}));
    else if(cancel==='pagehide')p.window.dispatchEvent(new p.window.Event('pagehide'));
    else p.pointer(cancel==='lostpointercapture'?original:p.document,cancel);
    p.pointer(p.document,'pointerup',{x:100,y:100});
    assert.equal(p.runtime.plans.저녁.sun.recipeId,null,cancel);
    assert.equal(p.document.querySelector('[data-meal-drag-ghost]'),null,cancel);
    assert.equal(p.document.querySelector('.drop-target'),null,cancel);
    assert.equal(p.captured.size,0,cancel);
    assert.equal(original.getAttribute('draggable'),'true',cancel);
  }
  p.setHit(p.slot());p.drag();
  assert.equal(p.runtime.plans.저녁.sun.recipeId,'netto-recipe-7000001');
});

test('a drop rechecks ingredient conditions and native drag cannot double-apply a pointer drag',async(t)=>{
  const p=await planner(t);
  const meatCard=p.card('7000002');
  p.setHit(p.slot());
  p.pointer(meatCard,'pointerdown');
  const nativeStart=new p.window.Event('dragstart',{bubbles:true,cancelable:true});
  Object.defineProperty(nativeStart,'dataTransfer',{value:{setData(){throw new Error('native drag should be suppressed');}}});
  meatCard.dispatchEvent(nativeStart);
  assert.equal(nativeStart.defaultPrevented,true);
  const nativeDrop=new p.window.Event('drop',{bubbles:true,cancelable:true});
  Object.defineProperty(nativeDrop,'dataTransfer',{value:{getData:()=>p.card().dataset.id}});
  p.slot().dispatchEvent(nativeDrop);
  assert.equal(p.runtime.plans.저녁.sun.recipeId,null);
  // Ingredient evidence changed while held must be checked again at drop time.
  p.runtime.recipes.find(meal=>meal.sourceRecipeId==='7000002').detailIngredients=['냉이 100g'];
  p.pointer(p.document,'pointermove',{x:100,y:100});
  p.pointer(p.document,'pointerup',{x:100,y:100});
  assert.equal(p.runtime.plans.저녁.sun.recipeId,null);
  assert.match(p.document.getElementById('planStatus').textContent,/조건과 맞지/);
});

test('changing to vegetarian while dragging cancels a meat menu instead of adding it',async(t)=>{
  const p=await planner(t);
  p.setHit(p.slot());
  p.pointer(p.card('7000002'),'pointerdown');
  p.pointer(p.document,'pointermove',{x:100,y:100});
  p.document.getElementById('dietaryChoice').value='vegetarian';
  p.document.getElementById('dietaryChoice').dispatchEvent(new p.window.Event('change',{bubbles:true}));
  p.pointer(p.document,'pointerup',{x:100,y:100});
  assert.equal(p.runtime.plans.저녁.sun.recipeId,null);
  assert.equal(p.document.querySelector('[data-meal-drag-ghost]'),null);
  assert.equal(p.captured.size,0);
});

test('removing the source card releases the drag without waiting for another pointer event',async(t)=>{
  const p=await planner(t);
  p.setHit(p.slot());
  const source=p.card();
  p.pointer(source,'pointerdown');
  p.pointer(p.document,'pointermove',{x:100,y:100});
  source.remove();
  await Promise.resolve();
  assert.equal(p.document.querySelector('[data-meal-drag-ghost]'),null);
  assert.equal(p.document.querySelector('.drop-target'),null);
  assert.equal(p.captured.size,0);
  p.pointer(p.document,'pointerup',{x:100,y:100});
  assert.equal(p.runtime.plans.저녁.sun.recipeId,null);
});
