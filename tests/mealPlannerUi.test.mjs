import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';

const root=new URL('../public/mohemeokji/',import.meta.url);
const routes=['','40468DNETTO/','40474DEDEKA/','44369DONETTO/','52062NETTO/','52064EDEKA/'];

test('canonical and direct pages expose the same Plan and Shop workspace contract',()=>{
  for(const route of routes) {
    const html=fs.readFileSync(new URL(route+'index.html',root),'utf8');
    const dom=new JSDOM(html);
    const document=dom.window.document;
    assert.deepEqual([...document.querySelectorAll('[data-context-target]')].map((button)=>button.textContent.trim()),['식단 계획','장보기'],route);
    assert.deepEqual([...document.querySelectorAll('.mobile-task-nav [data-mobile-target]')].map((button)=>button.textContent.trim()),['메뉴','식단','장보기'],route);
    assert.equal(document.querySelector('#recommendationModes')?.getAttribute('role'),'radiogroup',route);
    assert.equal([...document.querySelectorAll('.filter')].every((button)=>button.hasAttribute('aria-pressed')),true,route);
    assert.ok(document.querySelector('[data-context="plan"]'),route);
    assert.ok(document.querySelector('[data-context="shop"]'),route);
    assert.equal(document.querySelector('#week')?.dataset.mobileView,'week',route);
    assert.ok(document.querySelector('#pantryEditor'),route);
    assert.equal(document.querySelectorAll('script[data-workspace-controller]').length,1,route);
  }
});

test('workspace CSS provides a ruled ledger, 7 by 2 planner and narrow no-overflow view',()=>{
  const html=fs.readFileSync(new URL('index.html',root),'utf8');
  assert.match(html,/\.planning-desk\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1\.18fr\)\s+minmax\(300px,\s*\.82fr\)/s);
  assert.match(html,/\.recipe-ledger\s*\{[^}]*order:\s*2/);
  assert.match(html,/\.meal-card-title\s*\{[^}]*overflow-wrap:\s*anywhere/);
  assert.match(html,/\.week-head,\s*\.week-row\s*\{[^}]*grid-template-columns:\s*74px\s+minmax\(0,\s*1fr\)\s+minmax\(0,\s*1fr\)/s);
  assert.match(html,/@media\s*\(max-width:\s*767px\)[\s\S]*?\.mobile-task-nav\s*\{[^}]*display:\s*grid/s);
  assert.match(html,/html\s*\{[^}]*overflow-x:\s*clip/);
  assert.doesNotMatch(html,/\.menu-list\s*\{[^}]*display:\s*grid[^}]*grid-template-columns/s);
});

test('workspace navigation changes the visible task and preserves page state',()=>{
  const html=fs.readFileSync(new URL('index.html',root),'utf8');
  const dom=new JSDOM(html,{url:'https://choi01.com/mohemeokji/',runScripts:'outside-only'});
  dom.window.matchMedia=()=>({matches:true});
  const controller=[...dom.window.document.querySelectorAll('script[data-workspace-controller]')][0];
  assert.ok(controller,'workspace controller script is missing');
  dom.window.eval(controller.textContent);
  const document=dom.window.document;
  assert.equal(document.getElementById('today').hidden,false);
  assert.equal(document.getElementById('week').hidden,true);
  assert.equal(document.getElementById('groceries').hidden,true);
  const search=document.getElementById('menuSearch');
  search.value='닭가슴살';
  document.querySelector('[data-mobile-target="recipes"]').click();
  assert.equal(document.getElementById('today').hidden,false);
  assert.equal(document.getElementById('week').hidden,true);
  assert.equal(document.getElementById('groceries').hidden,true);
  document.querySelector('[data-mobile-target="week"]').click();
  assert.equal(document.getElementById('today').hidden,true);
  assert.equal(document.getElementById('week').hidden,false);
  assert.equal(document.getElementById('groceries').hidden,true);
  document.querySelector('[data-mobile-target="shop"]').click();
  assert.equal(document.getElementById('today').hidden,true);
  assert.equal(document.getElementById('week').hidden,true);
  assert.equal(document.getElementById('groceries').hidden,false);
  document.querySelector('[data-context-target="shop"]').click();
  assert.equal(document.body.dataset.activeContext,'shop');
  assert.equal(document.querySelector('[data-context="plan"]').hidden,true);
  assert.equal(document.querySelector('[data-context="shop"]').hidden,false);
  document.querySelector('[data-mobile-target="week"]').click();
  assert.equal(document.body.dataset.activeContext,'plan');
  assert.equal(document.body.dataset.mobileView,'week');
  assert.equal(search.value,'닭가슴살');
  assert.equal(document.querySelector('[data-mobile-target="week"]').getAttribute('aria-current'),'page');
});

test('shopping anchor and hash deep link open the Shop context',()=>{
  const html=fs.readFileSync(new URL('index.html',root),'utf8');
  const create=(url)=>{
    const dom=new JSDOM(html,{url,runScripts:'outside-only'});
    dom.window.matchMedia=()=>({matches:true});
    dom.window.eval(dom.window.document.querySelector('script[data-workspace-controller]').textContent);
    return dom;
  };
  const linked=create('https://choi01.com/mohemeokji/#groceries');
  assert.equal(linked.window.document.body.dataset.activeContext,'shop');
  assert.equal(linked.window.document.getElementById('groceries').hidden,false);
  linked.window.close();
  const clicked=create('https://choi01.com/mohemeokji/');
  clicked.window.document.querySelector('.nav-links a[href="#groceries"]').click();
  assert.equal(clicked.window.document.body.dataset.activeContext,'shop');
  assert.equal(clicked.window.document.getElementById('groceries').hidden,false);
  clicked.window.close();
});

test('legacy meal-time controls update visual and pressed state together',()=>{
  const html=fs.readFileSync(new URL('index.html',root),'utf8');
  const dom=new JSDOM(html,{url:'https://choi01.com/mohemeokji/?snapshot=legacy&postcode=52064&store=EDEKA',runScripts:'outside-only'});
  dom.window.eval(dom.window.document.querySelector('script[data-workspace-controller]').textContent);
  const lunch=dom.window.document.querySelector('[data-moment="점심"]');
  const dinner=dom.window.document.querySelector('[data-moment="저녁"]');
  lunch.click();
  assert.equal(lunch.classList.contains('active'),true);
  assert.equal(lunch.getAttribute('aria-pressed'),'true');
  assert.equal(dinner.classList.contains('active'),false);
  assert.equal(dinner.getAttribute('aria-pressed'),'false');
  dom.window.close();
});
