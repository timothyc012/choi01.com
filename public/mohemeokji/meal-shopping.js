/* Purchase costs use selling units. Comparable measured requirements are
   summed; ambiguous or incomplete quantities require a manual check. */
(function () {
  const normalize = (name) => {
    const value=String(name||'').trim();
    if(value==="밥")return "쌀";
    if(["기름","오일","식용유","식용오일","올리브유","올리브오일","올리브 오일","포도씨유","카놀라유","해바라기유","코코넛오일"].includes(value)||/(?:식용유|포도씨유|카놀라유|해바라기유|올리브유|올리브\s*오일|코코넛오일)$/u.test(value))return "식용유";
    if(/^녹인\s*버터$/u.test(value))return "버터";
    return value;
  };
  const keyFor = (store, name) => store + ":" + normalize(name);
  const euro = (cents) => (cents / 100).toFixed(2).replace(".", ",") + "€";

  function ingredientName(label) {
    return String(label||'').trim().replace(/\s*\(원문[^)]*수량\s*미표기[^)]*\)\s*$/u,'')
      .replace(/\s+(?:약간|조금|적당량|적당히|넉넉히|필요량|한\s*바퀴|취향껏|적당한\s*양)\s*$/u,'')
      .split(/\s+(?=(?:\d|약\b|조금\b|적당량|수량\s*미표기))/)[0].trim();
  }

  function parsePrice(value) {
    const text = String(value).trim().replace(",", ".");
    if (!/^\d+(?:\.\d{1,2})?$/.test(text)) return null;
    const cents = Math.round(Number(text) * 100);
    return Number.isSafeInteger(cents) && cents <= 100000000 ? cents : null;
  }

  function classifyIngredients(meal, storeCatalog = {}) {
    const names = [];
    const seen = new Set();
    for (const originalName of [...meal.sale, ...meal.missing]) {
      const name = normalize(originalName);
      if (seen.has(name)) continue;
      seen.add(name);
      names.push(name);
    }
    return {
      sale: names.filter((name) => Object.hasOwn(storeCatalog, name)),
      missing: names.filter((name) => !Object.hasOwn(storeCatalog, name))
    };
  }

  function currentCatalog(catalog, date) {
    return Object.fromEntries(Object.entries(catalog).map(([store, offers]) => [store,
      Object.fromEntries(Object.entries(offers).filter(([,offer]) => offer.validFrom && offer.validThrough && offer.validFrom <= date && date <= offer.validThrough))
    ]));
  }

  function restorePlans(serialized, {area, store, days, meals}) {
    const restored = {};
    try {
      const data = JSON.parse(serialized);
      if (!data || data.activeArea !== area || (data.activeStore && data.activeStore !== store)) return restored;
      const plans = data.plans || { [data.mealMoment]: data.plan };
      for (const moment of ['점심','저녁']) {
        const plan = plans[moment];
        if (plan && days.every((day) => Object.hasOwn(plan,day) && (plan[day] === null || meals.some((m) => m.id === plan[day] && m.store === store)))) {
          restored[moment] = Object.fromEntries(days.map((day) => [day,plan[day]]));
        }
      }
    } catch { /* Invalid saved plans are ignored. */ }
    return restored;
  }

  function recentUniqueRecipeIds(values) {
    if (!Array.isArray(values)) return [];
    const seen = new Set();
    const latest = [];
    for (let index = values.length - 1; index >= 0; index -= 1) {
      const value = values[index];
      if (typeof value !== 'string' || !value || seen.has(value)) continue;
      seen.add(value);
      latest.unshift(value);
    }
    return latest.slice(-20);
  }

  function normalizePlanSlot(value, fallbackOrigin = 'manual') {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return {
        recipeId: typeof value.recipeId === 'string' && value.recipeId ? value.recipeId : null,
        origin: value.origin === 'auto' || value.origin === 'manual' ? value.origin : fallbackOrigin,
        dismissedRecipeIds: recentUniqueRecipeIds(value.dismissedRecipeIds)
      };
    }
    return {
      recipeId: typeof value === 'string' && value ? value : null,
      origin: fallbackOrigin,
      dismissedRecipeIds: []
    };
  }

  function restorePlansV2(serialized, context = {}) {
    const days = Array.isArray(context.days) ? context.days : [];
    const checksAvailability = Array.isArray(context.availableRecipeIds);
    const available = new Set(checksAvailability ? context.availableRecipeIds.map(String) : []);
    let saved = null;
    try { saved = JSON.parse(serialized); } catch { /* Missing or corrupt state uses auto defaults. */ }
    const scopeMismatch=Boolean(saved&&(
      (saved.activeArea&&context.area&&saved.activeArea!==context.area)
      ||(saved.activeStore&&context.store&&saved.activeStore!==context.store)
      ||(saved.activeBranchId&&context.branchId&&saved.activeBranchId!==context.branchId)
    ));
    if(scopeMismatch) saved=null;
    const isV2 = saved?.version === 2 && saved.plans && typeof saved.plans === 'object' && !Array.isArray(saved.plans);
    const snapshotChanged=Boolean(isV2&&context.snapshotId&&saved.snapshotId!==context.snapshotId);
    const legacyPlans = saved?.plans || (saved?.plan && saved?.mealMoment ? { [saved.mealMoment]: saved.plan } : {});
    const sourcePlans = isV2 ? saved.plans : legacyPlans;
    const fallbackPlans = context.autoPlans && typeof context.autoPlans === 'object' ? context.autoPlans : {};
    const moments = Array.isArray(context.moments) && context.moments.length
      ? context.moments : [...new Set([...Object.keys(sourcePlans || {}), ...Object.keys(fallbackPlans)])];
    const plans = {};
    const stale = [];
    for (const moment of moments) {
      plans[moment] = {};
      for (const day of days) {
        const hasSaved = sourcePlans?.[moment] && Object.hasOwn(sourcePlans[moment], day);
        const value = hasSaved ? sourcePlans[moment][day] : fallbackPlans?.[moment]?.[day];
        const origin = hasSaved ? 'manual' : 'auto';
        const slot = normalizePlanSlot(value, origin);
        if(snapshotChanged) slot.dismissedRecipeIds=[];
        plans[moment][day] = slot;
        if (slot.origin === 'manual' && slot.recipeId && checksAvailability && !available.has(slot.recipeId)) {
          stale.push({moment, day, recipeId: slot.recipeId});
        }
      }
    }
    return {plans, migrated:Boolean(saved && !isV2), stale, snapshotChanged};
  }

  function refreshAutoPlans(plans, replacements = {}) {
    return Object.fromEntries(Object.entries(plans || {}).map(([moment, plan]) => [moment,
      Object.fromEntries(Object.entries(plan || {}).map(([day, value]) => {
        const current = normalizePlanSlot(value);
        if (current.origin === 'manual') return [day, current];
        const replacement = normalizePlanSlot(replacements?.[moment]?.[day], 'auto');
        replacement.origin = 'auto';
        replacement.dismissedRecipeIds = current.dismissedRecipeIds.slice();
        return [day, replacement];
      }))
    ]));
  }

  function serializePlansV2(plans, metadata = {}) {
    const normalized = Object.fromEntries(Object.entries(plans || {}).map(([moment, plan]) => [moment,
      Object.fromEntries(Object.entries(plan || {}).map(([day, slot]) => [day, normalizePlanSlot(slot)]))
    ]));
    return JSON.stringify({...metadata, version:2, plans:normalized});
  }

  function metricAmount(value) {
    const text = String(value || "").trim().replace(",", ".");
    if (/\d\s*(?:kg|g|ml|l)?\s*[-–/]|\/\s*(?:kg|g|ml|l)\b|für|ab\s/i.test(text)) return null;
    const bundle = text.match(/(\d+)\s*[x×]\s*(\d+(?:\.\d+)?)\s*(kg|g|ml|l)\b/i);
    const match = bundle || text.match(/(\d+(?:\.\d+)?)\s*(kg|g|ml|l)\b/i);
    if (!match) return null;
    const factor = bundle ? Number(match[1]) : 1;
    const amount = Number(bundle ? match[2] : match[1]) * factor;
    const unit = (bundle ? match[3] : match[2]).toLowerCase();
    if (!(amount > 0)) return null;
    if (unit === "kg") return { amount: amount * 1000, unit: "g" };
    if (unit === "l") return { amount: amount * 1000, unit: "ml" };
    return { amount, unit };
  }

  function formatRequired(required) {
    if (!required) return "";
    const useLargeUnit = required.amount >= 1000;
    const amount = useLargeUnit ? required.amount / 1000 : required.amount;
    const unit = useLargeUnit ? (required.unit === "g" ? "kg" : "l") : required.unit;
    return String(Number(amount.toFixed(2))) + " " + unit + " 필요";
  }

  function basket(meals, options = {}) {
    const { catalog = {}, pantry = new Set(), prices = {}, quantities = {} } = options;
    const ingredients = new Map();
    for (const meal of meals.filter(Boolean)) {
      const contributionKey=typeof (meal.id||meal.sourceRecipeId)==="string"&&(meal.id||meal.sourceRecipeId)?String(meal.id||meal.sourceRecipeId):null;
      const seenInMeal = new Set();
      for (const originalName of [...meal.sale, ...meal.missing]) {
        const name = normalize(originalName);
        const key = keyFor(meal.store, name);
        const alreadySeen=seenInMeal.has(key);
        seenInMeal.add(key);
        const candidate = meal.requiredAmounts?.[originalName] || meal.requiredAmounts?.[name];
        const required = candidate && Number.isFinite(candidate.amount) && candidate.amount > 0 && ['g', 'ml'].includes(candidate.unit) ? candidate : null;
        const offer = meal.offerCatalog?.[originalName] || catalog[meal.store]?.[originalName] || meal.offerCatalog?.[name] || catalog[meal.store]?.[name];
        const existing = ingredients.get(key);
        if (existing) {
          if(!alreadySeen)existing.requirementComplete = existing.requirementComplete && Boolean(required) && existing.requiredAmount?.unit === required?.unit;
          if (!alreadySeen&&required && (!existing.requiredAmount || existing.requiredAmount.unit === required.unit)) {
            existing.requiredAmount = {
              amount: (existing.requiredAmount?.amount || 0) + required.amount,
              unit: required.unit
            };
          }
          if(!alreadySeen&&contributionKey) {
            const prior=existing.contributions[contributionKey];
            existing.contributions[contributionKey]=required
              ? {amount:(prior?.unit===required.unit?prior.amount:0)+required.amount,unit:required.unit}
              : null;
          }
          if(!existing.product&&offer) {
            existing.pack=offer.pack||existing.pack;existing.product=offer.product||'';existing.source=offer.source||'';
            existing.priceCents=Number.isSafeInteger(offer.priceCents)&&offer.priceCents>=0?offer.priceCents:existing.priceCents;
            existing.normalPriceCents=Number.isSafeInteger(offer.normalPriceCents)&&offer.normalPriceCents>=existing.priceCents?offer.normalPriceCents:null;
          }
          continue;
        }
        if(alreadySeen)continue;
        const price = Object.hasOwn(prices, key) ? prices[key] : offer?.priceCents;
        const priceCents = Number.isSafeInteger(price) && price >= 0 ? price : null;
        const normalPrice = offer?.normalPriceCents;
        ingredients.set(key, {
          key, name, store: meal.store, pack: offer?.pack || "구매 단위 직접 확인",
          product: offer?.product || "", source: offer?.source || "",
          customPrice: Object.hasOwn(prices, key),
          priceCents, normalPriceCents: Number.isSafeInteger(normalPrice) && normalPrice >= priceCents ? normalPrice : null,
          owned: pantry.has(key), requiredAmount: required ? { ...required } : null,
          requirementComplete: Boolean(required),contributions:contributionKey?{[contributionKey]:required?{...required}:null}:{}
        });
      }
    }
    const items = [...ingredients.values()].map((item) => {
      const manualQuantity = Number.isSafeInteger(quantities[item.key]) && quantities[item.key] > 0 && quantities[item.key] <= 999
        ? quantities[item.key] : null;
      const packAmount = metricAmount(item.pack);
      const canCalculate = item.requirementComplete && packAmount && item.requiredAmount.unit === packAmount.unit;
      const calculatedQuantity = canCalculate
        ? Math.max(1, Math.ceil(item.requiredAmount.amount / packAmount.amount)) : 1;
      const quantity = manualQuantity || calculatedQuantity;
      return {
        ...item,
        quantity,
        requiredLabel: formatRequired(item.requiredAmount),
        quantityCalculated: manualQuantity === null && Boolean(canCalculate),
        quantityNeedsCheck: manualQuantity === null && !canCalculate,
        subtotalCents: item.priceCents === null ? null : item.priceCents * quantity
      };
    });
    const purchases = items.filter((item) => !item.owned);
    const unknownItemKeys = purchases.filter((item) => item.subtotalCents === null).map((item) => item.key);
    const quantityCheckKeys = purchases.filter((item) => item.quantityNeedsCheck).map((item) => item.key);
    const knownSubtotalCents = purchases.reduce((sum, item) => sum + (item.subtotalCents ?? 0), 0);
    const costStatus = unknownItemKeys.length === purchases.length && purchases.length > 0
      ? 'unknown' : (unknownItemKeys.length || quantityCheckKeys.length ? 'partial' : 'complete');
    const comparableSavings = costStatus === 'complete' && purchases.length > 0 && purchases.every((item) => item.normalPriceCents !== null);
    return {
      items,
      totalCents: knownSubtotalCents,
      knownSubtotalCents,
      unknownItemKeys,
      quantityCheckKeys,
      costStatus,
      savingsStatus: comparableSavings ? 'complete' : 'unavailable',
      savingsCents: comparableSavings
        ? purchases.reduce((sum, item) => sum + ((item.normalPriceCents - item.priceCents) * item.quantity), 0)
        : null,
      unknownCount: unknownItemKeys.length,
      quantityCheckCount: quantityCheckKeys.length,
      purchaseCount: purchases.length
    };
  }

  function replaceAutoSlot(value, nextRecipeId) {
    const current = normalizePlanSlot(value, 'auto');
    const dismissed = recentUniqueRecipeIds([...current.dismissedRecipeIds, current.recipeId].filter(Boolean));
    return {recipeId:typeof nextRecipeId === 'string' && nextRecipeId ? nextRecipeId : null,origin:'auto',dismissedRecipeIds:dismissed};
  }

  function clearPlanSlot() {
    return {recipeId:null,origin:'manual',dismissedRecipeIds:[]};
  }

  function marginalBasketFacts(facts, pantry = new Set()) {
    if(facts?.sourceCoverage!=='complete'||!Number.isInteger(facts.targetServings)||facts.targetServings<1||!Array.isArray(facts.items)||!facts.items.length) {
      return {sourceCoverage:'unknown',costStatus:'unknown',knownSubtotalCents:null,unknownItemKeys:['full-basket'],quantityCheckKeys:[],savingsStatus:'unavailable',savingsCents:null};
    }
    const valid=facts.items.every((item)=>typeof item?.key==='string'&&item.key&&Number.isSafeInteger(item.priceCents)&&item.priceCents>=0&&Number.isSafeInteger(item.quantity)&&item.quantity>0&&item.quantityComplete===true&&item.subtotalCents===item.priceCents*item.quantity);
    if(!valid)return {sourceCoverage:'unknown',costStatus:'unknown',knownSubtotalCents:null,unknownItemKeys:['full-basket'],quantityCheckKeys:[],savingsStatus:'unavailable',savingsCents:null};
    const purchases=facts.items.filter((item)=>!pantry.has(item.key));
    const comparable=purchases.length>0&&purchases.every((item)=>Number.isSafeInteger(item.normalPriceCents)&&item.normalPriceCents>=item.priceCents);
    return {sourceCoverage:'complete',targetServings:facts.targetServings,costStatus:'complete',knownSubtotalCents:purchases.reduce((sum,item)=>sum+item.subtotalCents,0),unknownItemKeys:[],quantityCheckKeys:[],savingsStatus:comparable?'complete':'unavailable',savingsCents:comparable?purchases.reduce((sum,item)=>sum+(item.normalPriceCents-item.priceCents)*item.quantity,0):null};
  }

  function amount(cart) {
    if (cart.unknownCount === cart.purchaseCount && cart.unknownCount > 0) return "가격 확인 필요";
    if (cart.quantityCheckCount) return "확인된 금액 " + euro(cart.knownSubtotalCents ?? cart.totalCents) + " · 수량 확인";
    return euro(cart.knownSubtotalCents ?? cart.totalCents);
  }

  function summary(cart) {
    if (!cart.purchaseCount) return "구매할 재료 없음 · " + euro(0);
    if (cart.unknownCount === cart.purchaseCount) return "가격 미확인 " + cart.unknownCount + "종";
    if (cart.costStatus === 'complete' && !cart.quantityCheckCount) return "구매 합계 " + euro(cart.knownSubtotalCents ?? cart.totalCents);
    const parts=[];
    if ((cart.knownSubtotalCents ?? 0)>0) parts.push((cart.quantityCheckCount?"확인된 금액 ":"확인된 재료 ")+euro(cart.knownSubtotalCents));
    if (cart.unknownCount) parts.push((cart.quantityCheckCount?"가격 미확인 ":"미확인 ")+cart.unknownCount+"종");
    if (cart.quantityCheckCount) parts.push("수량 확인 "+cart.quantityCheckCount+"종");
    return parts.join(" · ") || "가격·수량 확인 필요";
  }

  function addToList(list, cart) {
    const merged = new Map(list.map((item) => [item.key, { ...item }]));
    for (const item of cart.items) {
      if (item.owned) {
        merged.delete(item.key);
        continue;
      }
      const previous = merged.get(item.key);
      const incomingContributions=item.contributions&&typeof item.contributions==="object"?item.contributions:{};
      const hasIncomingContributions=Object.keys(incomingContributions).length>0;
      const contributions={...(previous?.contributions||{})};
      if(previous&&(!previous.contributions||!Object.keys(previous.contributions).length)&&hasIncomingContributions)contributions['legacy-unknown']=null;
      for(const [sourceKey,incoming] of Object.entries(incomingContributions)) {
        const prior=contributions[sourceKey];
        if(incoming===null) {
          if(!(sourceKey in contributions))contributions[sourceKey]=null;
        } else if(prior&&prior.unit===incoming.unit) {
          contributions[sourceKey]={amount:Math.max(prior.amount,incoming.amount),unit:incoming.unit};
        } else if(prior&&prior.unit!==incoming.unit) {
          contributions[sourceKey]=null;
        } else {
          contributions[sourceKey]={...incoming};
        }
      }
      const contributionValues=Object.values(contributions);
      const contributionUnit=contributionValues.find((value)=>value)?.unit;
      const contributionsComplete=contributionValues.length>0&&contributionValues.every((value)=>value&&value.unit===contributionUnit&&Number.isFinite(value.amount)&&value.amount>0);
      const packAmount=metricAmount(previous?.product?previous.pack:item.pack);
      const contributionQuantity=contributionsComplete&&packAmount&&packAmount.unit===contributionUnit
        ? Math.max(1,Math.ceil(contributionValues.reduce((sum,value)=>sum+value.amount,0)/packAmount.amount))
        : null;
      const quantity=contributionQuantity??Math.max(previous?.quantity || 1,item.quantity);
      const quantityNeedsCheck=contributionValues.length?contributionQuantity===null:Boolean(previous?.quantityNeedsCheck||item.quantityNeedsCheck);
      merged.set(item.key, {
        key: item.key, name: item.name, store: item.store, pack: previous?.product?previous.pack:item.pack,
        product:previous?.product||item.product||'',source:previous?.source||item.source||'',
        quantity, priceCents: previous?.product?previous.priceCents:item.priceCents, quantityNeedsCheck,contributions,
        completed: Boolean(previous?.completed && quantity === previous.quantity)
      });
    }
    return [...merged.values()];
  }

  function listProgress(list) {
    const remaining = list.filter((item) => !item.completed);
    const quantityCheckCount=remaining.filter((item)=>item.quantityNeedsCheck===true).length;
    const knownSubtotalCents=remaining.reduce((sum, item) => sum + (item.priceCents ?? 0) * item.quantity, 0);
    const unknownCount=remaining.filter((item) => item.priceCents === null).length;
    return {
      remainingCount: remaining.length,
      completedCount: list.length - remaining.length,
      purchaseCount: remaining.length,
      totalCents: knownSubtotalCents,knownSubtotalCents,unknownCount,quantityCheckCount,
      costStatus:unknownCount||quantityCheckCount?'partial':'complete'
    };
  }

  function restoreState(serialized, snapshot = null, options = {}) {
    const state = { pantry: new Set(), prices: {}, quantities: {}, list: [] };
    try {
      const saved = JSON.parse(serialized);
      if (!saved || saved.version !== 1) return state;
      const availableStores = Array.isArray(options.stores) && options.stores.length
        ? [...new Set(options.stores.filter((store)=>typeof store==='string'&&store))]
        : [...new Set(Object.values(window.mealOfferMeta?.stores || {}).flat())];
      const validStore = (store) => (availableStores.length ? availableStores : ["Netto", "EDEKA"]).includes(store);
      const validKey = (key) => typeof key === "string" && key.includes(":") && validStore(key.slice(0, key.indexOf(":"))) && key.slice(key.indexOf(":") + 1).length > 0;
      const validPrice = (value) => value === null || (Number.isSafeInteger(value) && value >= 0 && value <= 100000000);
      const validQuantity = (value) => Number.isInteger(value) && value >= 1 && value <= 999;
      const record = (value) => value && typeof value === "object" && !Array.isArray(value);
      const validContributions=(value)=>record(value)&&Object.values(value).every((entry)=>entry===null||(record(entry)&&Number.isFinite(entry.amount)&&entry.amount>0&&['g','ml'].includes(entry.unit)));
      const canonicalKey=(key)=>{
        const separator=key.indexOf(":");
        return keyFor(key.slice(0,separator),key.slice(separator+1));
      };
      if (Array.isArray(saved.pantry)) state.pantry = new Set(saved.pantry.filter((key) => typeof key === "string" && validKey(key)).map((key)=>{
        return canonicalKey(key);
      }));
      if (record(saved.prices)) state.prices = Object.fromEntries(Object.entries(saved.prices).filter(([key, value]) => validKey(key) && validPrice(value)).map(([key,value])=>[canonicalKey(key),value]));
      if (record(saved.quantities)) {
        state.quantities = Object.fromEntries(Object.entries(saved.quantities)
          .filter(([scope, value]) => (scope === "week" || scope.startsWith("meal:")) && record(value))
          .map(([scope, value]) => [scope, Object.fromEntries(Object.entries(value).filter(([key, quantity]) => validKey(key) && validQuantity(quantity)).map(([key,quantity])=>[canonicalKey(key),quantity]))]));
      }
      if (Array.isArray(saved.list)) {
        const seen = new Set();
        state.list = saved.list.map((item)=>item&&typeof item.name==='string'?{...item,_validAliasKey:item.key===String(item.store)+':'+item.name||item.key===keyFor(item.store,item.name),name:normalize(item.name),key:keyFor(item.store,item.name)}:item).filter((item) => {
          if (!item || !validStore(item.store) || typeof item.name !== "string" || !item.name.trim()
            || item._validAliasKey!==true || item.key !== keyFor(item.store, item.name) || typeof item.pack !== "string"
            || !validQuantity(item.quantity) || !validPrice(item.priceCents)
            || (item.product!==undefined&&typeof item.product!=="string") || (item.source!==undefined&&typeof item.source!=="string")
            || (item.contributions!==undefined&&!validContributions(item.contributions))
            || typeof item.completed !== "boolean" || state.pantry.has(item.key) || seen.has(item.key)) return false;
          seen.add(item.key);
          return true;
        }).map(({ key, name, store, pack, product, source, quantity, priceCents, completed, quantityNeedsCheck, contributions }) => ({ key, name, store, pack, product:product||'', source:source||'', quantity, priceCents, completed, quantityNeedsCheck:quantityNeedsCheck===true,contributions:contributions||{} }));
      }
    } catch { /* Unavailable or corrupt saved data starts an empty list. */ }
    if (snapshot && serialized) {
      try {
        const saved = JSON.parse(serialized);
        if (saved?.snapshot !== snapshot) {
          state.prices = {};
          state.quantities = {};
          state.list = state.list.map((item) => ({ ...item, quantity:1, quantityNeedsCheck:true, contributions:{}, priceCents: null, product:'', source:'', pack: '지난 자료 · 판매 단위 재확인' }));
        }
      } catch { /* Already restored as empty above. */ }
    }
    return state;
  }

  function serializeState(state, snapshot = null) {
    return JSON.stringify({ ...state, version: 1, snapshot, pantry: [...state.pantry] });
  }

  window.MealShopping = { basket, euro, parsePrice, keyFor, ingredientName, classifyIngredients, currentCatalog, restorePlans, normalizePlanSlot, restorePlansV2, refreshAutoPlans, replaceAutoSlot, clearPlanSlot, marginalBasketFacts, serializePlansV2, amount, summary, addToList, listProgress, restoreState, serializeState };
}());
