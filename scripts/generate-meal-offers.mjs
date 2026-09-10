#!/usr/bin/env node
/**
 * Turn the weekly supermarket export into the small ingredient-price catalog
 * used by the static meal pages. The source stays in public/offers for audit;
 * this generated file only includes high-confidence ingredient matches.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import ingredientIdentities from './data/ingredient-identities.json' with { type: 'json' };
import { canonicalJson } from './lib/meal-snapshot-schema.mjs';

export function parseCsv(text) {
  text = text.replace(/^\uFEFF/, '');
  const rows = [];
  let row = [], cell = '', quoted = false, closed = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') { cell += '"'; i += 1; }
      else if (char === '"') { quoted = false; closed = true; }
      else cell += char;
    } else if (char === '"' && cell === '' && !closed) quoted = true;
    else if (char === ',') { row.push(cell); cell = ''; closed = false; }
    else if (char === '\n') { row.push(cell.replace(/\r$/, '')); rows.push(row); row = []; cell = ''; closed = false; }
    else if (closed && char === '\r' && text[i+1] === '\n') continue;
    else if (closed || char === '"') throw new Error('Malformed quoted CSV field');
    else cell += char;
  }
  if (quoted) throw new Error('CSV contains an unterminated quoted field');
  if (cell || row.length) { row.push(cell.replace(/\r$/, '')); rows.push(row); }
  const [header, ...body] = rows;
  if (!header) throw new Error('CSV is empty');
  for (const key of ['수집시각', '체인', '지점', '우편번호', '행사기간', '상품명', '상품정보', '행사가격', '출처']) {
    if (!header.includes(key)) throw new Error('Missing CSV column: ' + key);
  }
  return body.filter((values) => values.some(Boolean)).map((values, index) => {
    if (values.length !== header.length) throw new Error('CSV field count mismatch at row ' + (index + 2));
    return Object.fromEntries(header.map((key, i) => [key, values[i] || '']));
  });
}

const legacyAreas = {
  '44369': { label: '44369 · Dortmund', path: '44369DONETTO', chain: 'Netto' },
  '40468': { label: '40468 · Düsseldorf', path: '40468DNETTO', chain: 'Netto' },
  '40474': { label: '40474 · Düsseldorf', path: '40474DEDEKA', chain: 'EDEKA' },
  '52062': { label: '52062 · Aachen', path: '52062NETTO', chain: 'Netto' },
  '52064': { label: '52064 · Aachen', path: '52064EDEKA', chain: 'EDEKA' }
};

const rules = {
  '닭가슴살': [/(?:^|\s)Hähnchenbrustfilets?$/i],
  '닭안심': [/^Hähnchen-Innenfilet$/i],
  '돼지안심': [/^Schweinefilet lang$/i],
  '돼지목살': [/^Schweine-Nackensteaks$/i],
  '돼지등심': [/^Schweine-Rücken$/i],
  '돼지뒷다리살': [/^Schweine-Schnitzel$/i],
  '다진고기': [/^Hackfleisch gemischt$/i],
  '돼지다짐육': [/(?:^|\s)Schweine-Hackfleisch$/i],
  '소고기': [/^Gulasch vom Rind$/i],
  '소고기등심': [/^Rib-Eye-Steak$/i, /^Entrecôte$/i],
  '칠면조가슴살': [/^Putenbrustfilet/i],
  '연어': [/Lachsfilet/i],
  '훈제연어': [/Räucherlachs/i],
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
  '사과': [/Äpfel/i, /^Apfel(?:$|\s|,)/i],
  '포도': [/Trauben/i, /Traube/i],
  '요거트': [/Joghurt/i, /^Skyr/i, /^Speisequark/i, /^Quark/i],
  '치즈': [/Gouda/i],
  '슬라이스치즈': [/Schmelzkäsescheiben/i],
  '모짜렐라치즈': [/Mozzarella/i],
  '체다치즈': [/Cheddar/i],
  '파마산치즈': [/Parmesan/i],
  '버터': [/Butter/i],
  '허브 쿼크': [/Kräuterquark/i, /Kraeuterquark/i],
  '파스타': [/^3 Glocken.*Teigwaren$/i, /^Combino Spaghetti$/i, /^Spaghetti/i, /^Pasta(?!sauce)/i],
  '토스트': [/Toast/i],
  '식빵': [/Toastbrot/i],
  '달걀': [/Eier/i, /^Ei\b/i],
  '쌀': [/Reis/i, /Basmati/i],
  '빵': [/^Kürbiskernbrot$/i, /^Proteinbrötchen$/i, /Brötchen/i, /Broetchen/i],
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
  '요거트': [/pudding/i, /dessert/i],
  '빵': [/Brotaufstrich/i, /Brotzeit/i, /Frikadellenbrötchen/i],
  '버터': [/Buttermilch/i, /Buttercroissant/i],
  '사과': [/Apfeltasche/i],
  '치즈': [/pizza-fleischkäse/i, /Leberkäse/i, /Pizza/i, /Ofenfrische/i]
};

function chainName(value) { return value.toLowerCase() === 'edeka' ? 'EDEKA' : value; }
export function cents(value) {
  const text = String(value || '').trim().replace(',', '.');
  if (!/^\d+(?:\.\d{1,2})?$/.test(text)) return null;
  const result = Math.round(Number(text) * 100);
  return Number.isSafeInteger(result) ? result : null;
}
function compact(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
export function parsePeriod(value) {
  const text = compact(value);
  const german = text.match(/^(\d{2})\.(\d{2})\.(\d{4})\s*-\s*(\d{2})\.(\d{2})\.(\d{4})$/);
  const iso = text.match(/^(\d{4}-\d{2}-\d{2})\s*\/\s*(\d{4}-\d{2}-\d{2})$/);
  const dates = german ? [german[3]+'-'+german[2]+'-'+german[1], german[6]+'-'+german[5]+'-'+german[4]] : iso?.slice(1);
  if (!dates || dates.some((d) => !Number.isFinite(Date.parse(d)) || new Date(d).toISOString().slice(0,10) !== d) || dates[0] > dates[1]) return null;
  return {validFrom:dates[0],validThrough:dates[1]};
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

export function createOfferIdentity(row) {
  const ingredient = compact(row?.ingredient || row?.ingredientId || row?.['재료'] || row?.['재료명']);
  const identity = ingredientIdentities[ingredient];
  return identity ? { ...identity } : null;
}

export function createOfferId(row, sourceSha) {
  const period = parsePeriod(row?.['행사기간']);
  if (!period) throw new Error('Cannot create an offer ID without a valid period');
  if (!/^[a-f0-9]{64}$/.test(sourceSha || '')) throw new Error('Cannot create an offer ID without a source SHA-256');
  return sha256(canonicalJson({
    sourceSha,
    postcode: compact(row?.['우편번호']),
    chain: chainName(compact(row?.['체인'])),
    branch: compact(row?.['지점']),
    sourceRow: row?.__sourceRow,
    product: compact(row?.['상품명']),
    variant: compact(row?.['변형정보']),
    validFrom: period.validFrom,
    validThrough: period.validThrough
  }));
}

function createBranchId(row) {
  return 'branch-' + sha256(canonicalJson({
    postcode: compact(row['우편번호']),
    chain: chainName(compact(row['체인'])),
    branch: compact(row['지점'])
  })).slice(0, 16);
}

function serializeOffer(row, ingredient, sourceRow, sourcePublicPath, sourceSha) {
  const identity = createOfferIdentity({ ...row, ingredient });
  const priceCents = cents(row['행사가격']);
  const period = parsePeriod(row['행사기간']);
  if (!identity || priceCents === null || !period) return null;
  const detail = compact(row['상품정보']);
  const conditions = compact(row['할인조건']);
  const normalPriceCents = cents(row['정상가격']) ?? cents(row['정상가']) ?? null;
  const rowWithSource = { ...row, __sourceRow: sourceRow };
  return {
    offerId: createOfferId(rowWithSource, sourceSha),
    postcode: compact(row['우편번호']),
    chain: chainName(compact(row['체인'])),
    branchId: createBranchId(row),
    sourceRow,
    evidenceUrl: /^https:\/\//.test(row['출처']) ? row['출처'] : null,
    validFrom: period.validFrom,
    validThrough: period.validThrough,
    productDe: compact(row['상품명']),
    pack: compact(row['가격적용단위']) || compact(detail.split('|')[0]) || '판매 단위 확인',
    priceCents,
    normalPriceCents,
    conditions,
    autoPriceEligible: !conditions || /^(없음|none|unconditional)$/i.test(conditions),
    identity,
    ingredient,
    product: compact(row['상품명']),
    appPriceCents: cents(row['앱가격']),
    detail,
    category: compact(row['카테고리']),
    period: compact(row['행사기간']),
    branch: compact(row['지점']),
    source: sourcePublicPath,
  };
}

export function generateOfferSnapshot(rows, sourceSha = sha256(canonicalJson(rows))) {
  const offers = rows.map((row, index) => serializeOffer(
    row,
    row.ingredient || row.ingredientId || row['재료'] || row['재료명'],
    row.__sourceRow || index + 2,
    null,
    sourceSha
  )).filter(Boolean);
  return {
    schemaVersion: 1,
    snapshotId: sha256(canonicalJson({ sourceSha, offers })),
    offers
  };
}

export function generateCatalog(rows, sourcePublicPath) {
  const sourceSha = sha256(canonicalJson(rows));
  const collectedAt = rows.map((row) => compact(row['수집시각'])).filter(Boolean).sort().at(-1) || null;
  const areaDefaults = {};
  for (const row of rows) {
    row['우편번호'] = compact(row['우편번호']);
    row['체인'] = chainName(compact(row['체인']));
    const area = row['우편번호'];
    if (!/^\d{5}$/.test(area) || !row['체인'] || !row['지점']) throw new Error('Missing postcode/store/branch: ' + row['상품명']);
    if (!areaDefaults[area]) {
      const legacy = legacyAreas[area];
      areaDefaults[area] = { label: legacy?.label || [area, compact(row['도시'])].filter(Boolean).join(' · '), path: legacy?.path || area, chain: row['체인'] };
    }
  }
  for (const [area, meta] of Object.entries(areaDefaults)) {
    const preferred = legacyAreas[area]?.chain;
    if (rows.some((row) => row['우편번호'] === area && row['체인'] === preferred)) meta.chain = preferred;
  }
  function pickOffers(area, chain, ingredient) {
    const areaRows = rows.filter((row) => row['우편번호'] === area && chainName(row['체인']) === chain);
    const matchers = rules[ingredient] || [];
    return areaRows.filter((row) => {
      const name = compact(row['상품명']);
      const conditions = compact(row['할인조건']);
      return matchers.some((matcher) => matcher.test(name)) && !(excluded[ingredient] || []).some((bad) => bad.test(name))
        && cents(row['행사가격']) !== null && (!conditions || /^(없음|none|unconditional)$/i.test(conditions))
        && (!row['최소구매수량'] || Number(row['최소구매수량']) === 1)
        && (ingredient !== '다진고기' || /50\s*%\s*Schwein.*50\s*%\s*Rind/i.test(row['상품정보']))
        && (ingredient !== '돼지뒷다리살' || /Oberschale/i.test(row['상품정보']))
        && !/3\s*für\s*2|\d\s*\+\s*\d|ab\s*\d+\s*(stück|pack)/i.test(row['상품정보'])
        && !(['닭가슴살','닭안심','돼지안심','돼지목살','돼지등심','돼지뒷다리살','다진고기','돼지다짐육','소고기등심','연어'].includes(ingredient) && /가열완료|훈제|통조림/.test(row['상품상태'] || ''));
    });
  }

  const packageCatalog = {};
  const offersByIdentity = [];
  const profiles = {};
  const stores = {};
  for (const [area, meta] of Object.entries(areaDefaults)) {
    const areaChains = [...new Set(rows.filter((row) => row['우편번호'] === area).map((row) => chainName(row['체인'])))]
      .sort((left, right) => left === meta.chain ? -1 : right === meta.chain ? 1 : left.localeCompare(right));
    stores[area] = areaChains;
    packageCatalog[area] = {};
    profiles[area] = {};
    for (const chain of areaChains) {
      packageCatalog[area][chain] = {};
      const areaRows = rows.filter((row) => row['우편번호'] === area && chainName(row['체인']) === chain);
      const first = areaRows[0];
      const branches = [...new Set(areaRows.map((row) => compact(row['지점'])))];
      if (branches.length !== 1) throw new Error('Multiple branches share ' + area + '/' + chain + '; select a branch before publishing');
      for (const [ingredient] of Object.entries(rules)) {
        const serializedOffers = pickOffers(area, chain, ingredient).map((offer) => serializeOffer(
          offer,
          ingredient,
          rows.indexOf(offer) + 2,
          sourcePublicPath,
          sourceSha
        )).filter(Boolean);
        if (!serializedOffers.length) continue;
        offersByIdentity.push(...serializedOffers);
        const preferred = serializedOffers[0];
        packageCatalog[area][chain][ingredient] = { ...preferred, preferredPricingOfferId: preferred.offerId };
      }
      const summary = Object.values(packageCatalog[area][chain]).slice(0, 5).map((offer) => offer.ingredient).join(' · ');
      profiles[area][chain] = {
        chain,
        label: chain + ' · ' + meta.label,
        branch: compact(first?.['지점']),
        offerCount: areaRows.length + '행',
        offerSummary: (summary || '행사 상품') + ' · ' + compact(first?.['행사기간']),
        period: [...new Set(areaRows.map((row) => compact(row['행사기간'])))].join(' / '),
        source: sourcePublicPath
      };
    }
  }

  const snapshotId = createHash('sha256').update(JSON.stringify(rows)).digest('hex');
  return { packageCatalog, offersByIdentity, meta: { source: sourcePublicPath, snapshotId, collectedAt, profiles, stores, areas: areaDefaults } };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const input = process.argv[2];
  const output = process.argv[3];
  if (!input || !output) throw new Error('Usage: node scripts/generate-meal-offers.mjs INPUT.csv OUTPUT.js');
  const rows = parseCsv(fs.readFileSync(input, 'utf8'));
  const { packageCatalog, meta } = generateCatalog(rows, '/offers/' + path.basename(input));
  const generated = `/* Generated from ${path.basename(input)}. Prices are sale selling-unit prices. */\nwindow.mealPackagePricesByArea = ${JSON.stringify(packageCatalog, null, 2)};\nwindow.mealPackagePrices = window.mealPackagePricesByArea[${JSON.stringify(Object.keys(meta.areas)[0])}];\nwindow.mealOfferMeta = ${JSON.stringify(meta, null, 2)};\n`;
  fs.writeFileSync(output, generated);
  console.log(`generated ${output}: ${Object.keys(packageCatalog).length} areas, ${rows.length} source rows`);
}
