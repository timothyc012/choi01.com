/* Purchase costs use selling units. Comparable measured requirements are
   summed; ambiguous or incomplete quantities require a manual check. */
(function () {
  const normalize = (name) => name === "밥" ? "쌀" : name;
  const keyFor = (store, name) => store + ":" + normalize(name);
  const euro = (cents) => (cents / 100).toFixed(2).replace(".", ",") + "€";

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
    const snapshotChanged=Boolean(isV2&&saved.snapshotId&&context.snapshotId&&saved.snapshotId!==context.snapshotId);
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
      const seenInMeal = new Set();
      for (const originalName of [...meal.sale, ...meal.missing]) {
        const name = normalize(originalName);
        const key = keyFor(meal.store, name);
        if (seenInMeal.has(key)) continue;
        seenInMeal.add(key);
        const candidate = meal.requiredAmounts?.[originalName] || meal.requiredAmounts?.[name];
        const required = candidate && Number.isFinite(candidate.amount) && candidate.amount > 0 && ['g', 'ml'].includes(candidate.unit) ? candidate : null;
        const existing = ingredients.get(key);
        if (existing) {
          existing.requirementComplete = existing.requirementComplete && Boolean(required) && existing.requiredAmount?.unit === required?.unit;
          if (required && (!existing.requiredAmount || existing.requiredAmount.unit === required.unit)) {
            existing.requiredAmount = {
              amount: (existing.requiredAmount?.amount || 0) + required.amount,
              unit: required.unit
            };
          }
          continue;
        }
        const offer = meal.offerCatalog?.[name] || catalog[meal.store]?.[name];
        const price = Object.hasOwn(prices, key) ? prices[key] : offer?.priceCents;
        const priceCents = Number.isSafeInteger(price) && price >= 0 ? price : null;
        ingredients.set(key, {
          key, name, store: meal.store, pack: offer?.pack || "구매 단위 직접 확인",
          product: offer?.product || "", source: offer?.source || "",
          customPrice: Object.hasOwn(prices, key),
          priceCents, owned: pantry.has(key), requiredAmount: required ? { ...required } : null,
          requirementComplete: Boolean(required)
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
    return {
      items,
      totalCents: purchases.reduce((sum, item) => sum + (item.subtotalCents ?? 0), 0),
      unknownCount: purchases.filter((item) => item.priceCents === null).length,
      quantityCheckCount: purchases.filter((item) => item.quantityNeedsCheck).length,
      purchaseCount: purchases.length
    };
  }

  function amount(cart) {
    if (cart.unknownCount === cart.purchaseCount && cart.unknownCount > 0) return "가격 확인 필요";
    return euro(cart.totalCents);
  }

  function summary(cart) {
    if (!cart.purchaseCount) return "구매할 재료 없음 · " + euro(0);
    if (cart.unknownCount === cart.purchaseCount) return "가격 미확인 " + cart.unknownCount + "종";
    if (cart.unknownCount) return "확인된 재료 " + euro(cart.totalCents) + " · 미확인 " + cart.unknownCount + "종";
    return "구매 합계 " + euro(cart.totalCents);
  }

  function addToList(list, cart) {
    const merged = new Map(list.map((item) => [item.key, { ...item }]));
    for (const item of cart.items) {
      if (item.owned) {
        merged.delete(item.key);
        continue;
      }
      const previous = merged.get(item.key);
      const quantity = Math.max(previous?.quantity || 1, item.quantity);
      merged.set(item.key, {
        key: item.key, name: item.name, store: item.store, pack: item.pack,
        quantity, priceCents: item.priceCents,
        completed: Boolean(previous?.completed && quantity === previous.quantity)
      });
    }
    return [...merged.values()];
  }

  function listProgress(list) {
    const remaining = list.filter((item) => !item.completed);
    return {
      remainingCount: remaining.length,
      completedCount: list.length - remaining.length,
      purchaseCount: remaining.length,
      totalCents: remaining.reduce((sum, item) => sum + (item.priceCents ?? 0) * item.quantity, 0),
      unknownCount: remaining.filter((item) => item.priceCents === null).length
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
      if (Array.isArray(saved.pantry)) state.pantry = new Set(saved.pantry.filter((key) => typeof key === "string" && validKey(key)));
      if (record(saved.prices)) state.prices = Object.fromEntries(Object.entries(saved.prices).filter(([key, value]) => validKey(key) && validPrice(value)));
      if (record(saved.quantities)) {
        state.quantities = Object.fromEntries(Object.entries(saved.quantities)
          .filter(([scope, value]) => (scope === "week" || scope.startsWith("meal:")) && record(value))
          .map(([scope, value]) => [scope, Object.fromEntries(Object.entries(value).filter(([key, quantity]) => validKey(key) && validQuantity(quantity)))]));
      }
      if (Array.isArray(saved.list)) {
        const seen = new Set();
        state.list = saved.list.filter((item) => {
          if (!item || !validStore(item.store) || typeof item.name !== "string" || !item.name.trim()
            || item.key !== keyFor(item.store, item.name) || typeof item.pack !== "string"
            || !validQuantity(item.quantity) || !validPrice(item.priceCents)
            || typeof item.completed !== "boolean" || state.pantry.has(item.key) || seen.has(item.key)) return false;
          seen.add(item.key);
          return true;
        }).map(({ key, name, store, pack, quantity, priceCents, completed }) => ({ key, name, store, pack, quantity, priceCents, completed }));
      }
    } catch { /* Unavailable or corrupt saved data starts an empty list. */ }
    if (snapshot && serialized) {
      try {
        const saved = JSON.parse(serialized);
        if (saved?.snapshot !== snapshot) {
          state.prices = {};
          state.quantities = {};
          state.list = state.list.map((item) => ({ ...item, priceCents: null, pack: '지난 자료 · 판매 단위 재확인' }));
        }
      } catch { /* Already restored as empty above. */ }
    }
    return state;
  }

  function serializeState(state, snapshot = null) {
    return JSON.stringify({ ...state, version: 1, snapshot, pantry: [...state.pantry] });
  }

  window.MealShopping = { basket, euro, parsePrice, keyFor, classifyIngredients, currentCatalog, restorePlans, normalizePlanSlot, restorePlansV2, refreshAutoPlans, serializePlansV2, amount, summary, addToList, listProgress, restoreState, serializeState };
}());
