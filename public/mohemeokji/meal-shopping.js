/* Purchase costs use whole selling units, never recipe portions.
   A basket starts with one pack per distinct ingredient because the recipe
   cards do not contain measured quantities. Users can adjust pack counts. */
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

  function metricAmount(value) {
    const text = String(value || "").trim().replace(",", ".");
    const bundle = text.match(/(\d+)\s*[x×]\s*(\d+(?:\.\d+)?)\s*(kg|g|ml|l)\b/i);
    const match = bundle || text.match(/(\d+(?:\.\d+)?)\s*(kg|g|ml|l)\b/i);
    if (!match) return null;
    const factor = bundle ? Number(match[1]) : 1;
    const amount = Number(bundle ? match[2] : match[1]) * factor;
    const unit = (bundle ? match[3] : match[2]).toLowerCase();
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
      for (const originalName of [...meal.sale, ...meal.missing]) {
        const name = normalize(originalName);
        const key = keyFor(meal.store, name);
        const required = meal.requiredAmounts?.[originalName] || meal.requiredAmounts?.[name] || null;
        const existing = ingredients.get(key);
        if (existing) {
          if (required && (!existing.requiredAmount || existing.requiredAmount.unit === required.unit)) {
            existing.requiredAmount = {
              amount: (existing.requiredAmount?.amount || 0) + required.amount,
              unit: required.unit
            };
          }
          continue;
        }
        const offer = catalog[meal.store]?.[name];
        const price = Object.hasOwn(prices, key) ? prices[key] : offer?.priceCents;
        const priceCents = Number.isSafeInteger(price) && price >= 0 ? price : null;
        ingredients.set(key, {
          key, name, store: meal.store, pack: offer?.pack || "구매 단위 직접 확인",
          product: offer?.product || "", source: offer?.source || "",
          customPrice: Object.hasOwn(prices, key),
          priceCents, owned: pantry.has(key), requiredAmount: required ? { ...required } : null
        });
      }
    }
    const items = [...ingredients.values()].map((item) => {
      const manualQuantity = Number.isSafeInteger(quantities[item.key]) && quantities[item.key] > 0 && quantities[item.key] <= 999
        ? quantities[item.key] : null;
      const packAmount = metricAmount(item.pack);
      const calculatedQuantity = item.requiredAmount && packAmount && item.requiredAmount.unit === packAmount.unit
        ? Math.max(1, Math.ceil(item.requiredAmount.amount / packAmount.amount)) : 1;
      const quantity = manualQuantity || calculatedQuantity;
      return {
        ...item,
        quantity,
        requiredLabel: formatRequired(item.requiredAmount),
        quantityCalculated: manualQuantity === null && calculatedQuantity > 1,
        subtotalCents: item.priceCents === null ? null : item.priceCents * quantity
      };
    });
    const purchases = items.filter((item) => !item.owned);
    return {
      items,
      totalCents: purchases.reduce((sum, item) => sum + (item.subtotalCents ?? 0), 0),
      unknownCount: purchases.filter((item) => item.priceCents === null).length,
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

  function restoreState(serialized) {
    const state = { pantry: new Set(), prices: {}, quantities: {}, list: [] };
    try {
      const saved = JSON.parse(serialized);
      if (!saved || saved.version !== 1) return state;
      const availableStores = [...new Set(Object.values(window.mealOfferMeta?.stores || {}).flat())];
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
    return state;
  }

  function serializeState(state) {
    return JSON.stringify({ ...state, version: 1, pantry: [...state.pantry] });
  }

  window.MealShopping = { basket, euro, parsePrice, keyFor, classifyIngredients, amount, summary, addToList, listProgress, restoreState, serializeState };
}());
