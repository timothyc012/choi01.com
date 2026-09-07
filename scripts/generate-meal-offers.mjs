#!/usr/bin/env node
/**
 * Turn the weekly supermarket export into the small ingredient-price catalog
 * used by the static meal pages. The source stays in public/offers for audit;
 * this generated file only includes high-confidence ingredient matches.
 */
import fs from 'node:fs';
import path from 'node:path';

const input = process.argv[2] || 'public/offers/supermarket_food_offers_2026-09-07.csv';
const output = process.argv[3] || 'public/mohemeokji/meal-package-prices.js';

function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') { cell += '"'; i += 1; }
      else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"' && cell === '') quoted = true;
    else if (char === ',') { row.push(cell); cell = ''; }
    else if (char === '\n') { row.push(cell.replace(/\r$/, '')); rows.push(row); row = []; cell = ''; }
    else cell += char;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [header, ...body] = rows;
  return body.filter((values) => values.some(Boolean)).map((values) => Object.fromEntries(header.map((key, i) => [key.replace(/^\uFEFF/, ''), values[i] || ''])));
}

const text = fs.readFileSync(input, 'utf8');
const rows = parseCsv(text);
const sourcePublicPath = '/offers/' + path.basename(input);
const collectedAt = compact(rows[0]?.['수집시각']).slice(0, 10) || 'unknown-date';
const areaDefaults = {
  '44369': { label: '44369 · Dortmund', path: '44369DONETTO', chain: 'Netto' },
  '40468': { label: '40468 · Düsseldorf', path: '40468DNETTO', chain: 'Netto' },
  '40474': { label: '40474 · Düsseldorf', path: '40474DEDEKA', chain: 'EDEKA' },
  '52062': { label: '52062 · Aachen', path: '52062NETTO', chain: 'Netto' },
  '52064': { label: '52064 · Aachen', path: '52064EDEKA', chain: 'EDEKA' }
};

const rules = {
  '닭고기': [/^Hähnchen-Innenfilet$/i, /^Hähnchenbrustfilet$/i, /^Hähnchen-Oberkeulensteaks$/i, /^Halbes Hähnchen$/i],
  '돼지고기': [/^Schweine-Schnitzel$/i, /^Schweinefilet lang$/i, /^Schweine-Rücken$/i, /^Schweine-Nackensteaks$/i, /^Schweine-Hackfleisch$/i],
  '다진고기': [/^Hackfleisch gemischt$/i, /Hackfleisch/i, /Hackbraten/i],
  '소고기': [/^Gulasch vom Rind$/i, /^Rib-Eye-Steak$/i, /^Entrecôte$/i, /Beef Burger/i, /Rinder-Burger/i],
  '칠면조': [/^Putenbrustfilet/i, /^Puten-Hacksteaks/i],
  '연어': [/Lachsfilet/i, /Räucherlachs/i, /^Lachsforellen-Filetseite$/i],
  '송어': [/Forelle/i, /Lachsforellen-Filetseite/i],
  '새우': [/Garnelen/i, /Garnele/i, /Shrimp/i],
  '참치': [/Thunfisch/i, /Tuna/i],
  '토마토': [/Tomaten/i, /Tomato/i],
  '파프리카': [/^Paprika/i],
  '양파': [/Zwiebel/i, /Onion/i],
  '버섯': [/^Champignon/i, /Pilze/i],
  '감자': [/^Pfanni Speisekartoffeln$/i, /^Speisekartoffeln/i],
  '당근': [/Möhren/i, /Karotten/i],
  '주키니': [/Zucchini/i],
  '오이': [/Gurke/i],
  '양상추': [/^Kopfsalat$/i, /Eisbergsalat/i, /Blattsalat/i],
  '레몬': [/^Bio Zitronen$/i, /^Zitronen/i, /^Zitrone/i],
  '아보카도': [/Avocado/i],
  '바나나': [/^Bio Bananen$/i, /^Bananen$/i, /^Banane$/i],
  '블루베리': [/Heidelbeeren/i, /Heidelbeere/i],
  '딸기': [/Erdbeeren/i, /Erdbeere/i],
  '복숭아': [/Pfirsiche/i, /Pfirsich/i],
  '사과': [/Äpfel/i, /^Apfel/i],
  '포도': [/Trauben/i, /Traube/i],
  '요거트': [/Joghurt/i, /^Skyr/i, /^Speisequark/i, /^Quark/i],
  '치즈': [/Käse/i, /Kaese/i, /Frischkäse/i, /Gouda/i, /Mozzarella/i],
  '버터': [/Butter/i],
  '허브 쿼크': [/Kräuterquark/i, /Kraeuterquark/i],
  '파스타': [/^3 Glocken.*Teigwaren$/i, /^Combino Spaghetti$/i, /^Spaghetti/i, /^Pasta(?!sauce)/i],
  '토스트': [/Toast/i],
  '달걀': [/Eier/i, /^Ei\b/i],
  '쌀': [/Reis/i, /Basmati/i],
  '빵': [/^Kürbiskernbrot$/i, /^Proteinbrötchen$/i, /^Frikadellenbrötchen$/i, /Brötchen/i, /Broetchen/i],
  '또띠아': [/Wrap/i, /Tortilla/i],
  '올리브유': [/Olivenöl/i, /Olivenoel/i],
  '마늘': [/Knoblauch/i],
  '대파': [/Lauchzwiebel/i, /Frühlingszwiebel/i, /Fruehlingszwiebel/i]
};

const excluded = {
  '토마토': [/sauce/i],
  '파스타': [/sauce/i, /pesto/i, /instant/i],
  '바나나': [/schoko/i],
  '양상추': [/fleischsalat/i, /salatkrönung/i],
  '레몬': [/limonade/i, /eistee/i],
  '치즈': [/pizza-fleischkäse/i],
  '요거트': [/pudding/i, /dessert/i],
  '빵': [/Brotaufstrich/i, /Brotzeit/i]
};

function chainName(value) { return value.toLowerCase() === 'edeka' ? 'EDEKA' : value; }
function cents(value) {
  const parsed = Number.parseFloat(String(value).replace(',', '.'));
  return Number.isFinite(parsed) && parsed >= 0 ? Math.round(parsed * 100) : null;
}
function compact(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
function pickOffer(area, chain, ingredient) {
  const areaRows = rows.filter((row) => row['우편번호'] === area && chainName(row['체인']) === chain);
  const matchers = rules[ingredient] || [];
  for (const matcher of matchers) {
    const found = areaRows.find((row) => {
      const name = compact(row['상품명']);
      return matcher.test(name) && !(excluded[ingredient] || []).some((bad) => bad.test(name));
    });
    if (found) return found;
  }
  return null;
}
function serializeOffer(row, ingredient, sourceRow) {
  if (!row) return null;
  const priceCents = cents(row['행사가격']) ?? cents(row['앱가격']);
  if (priceCents === null) return null;
  const detail = compact(row['상품정보']);
  return {
    ingredient: ingredient,
    product: compact(row['상품명']),
    priceCents,
    appPriceCents: cents(row['앱가격']),
    pack: compact(detail.split('|')[0]) || '판매 단위 확인',
    detail,
    category: compact(row['카테고리']),
    period: compact(row['행사기간']),
    branch: compact(row['지점']),
    source: sourcePublicPath,
    sourceRow
  };
}

const packageCatalog = {};
const profiles = {};
for (const [area, meta] of Object.entries(areaDefaults)) {
  packageCatalog[area] = { [meta.chain]: {} };
  const areaRows = rows.filter((row) => row['우편번호'] === area && chainName(row['체인']) === meta.chain);
  const first = areaRows[0];
  for (const [ingredient] of Object.entries(rules)) {
    const offer = pickOffer(area, meta.chain, ingredient);
    if (!offer) continue;
    const rowIndex = rows.indexOf(offer) + 2;
    const serialized = serializeOffer(offer, ingredient, rowIndex);
    if (serialized) packageCatalog[area][meta.chain][ingredient] = serialized;
  }
  const summary = Object.values(packageCatalog[area][meta.chain]).slice(0, 5).map((offer) => offer.ingredient).join(' · ');
  profiles[area] = {
    chain: meta.chain,
    label: meta.chain + ' · ' + meta.label,
    branch: compact(first?.['지점']),
    offerCount: areaRows.length + '행',
    offerSummary: (summary || '행사 상품') + ' · ' + compact(first?.['행사기간']),
    period: compact(first?.['행사기간']),
    source: sourcePublicPath
  };
}

const generated = `/* Generated from ${path.basename(input)}. Prices are sale package prices, not recipe portions. */\nwindow.mealPackagePricesByArea = ${JSON.stringify(packageCatalog, null, 2)};\nwindow.mealPackagePrices = window.mealPackagePricesByArea['44369'];\nwindow.mealOfferMeta = ${JSON.stringify({ source: sourcePublicPath, collectedAt, profiles, areas: areaDefaults }, null, 2)};\n`;
fs.writeFileSync(output, generated);
console.log(`generated ${output}: ${Object.keys(packageCatalog).length} areas, ${rows.length} source rows`);
