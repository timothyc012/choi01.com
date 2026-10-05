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
    return String(label||'').trim().replace(/\s*\([^)]*원문[^)]*수량\s*미표기[^)]*\)\s*$/u,'')
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
    const text = String(value || "").trim().replace(",", ".").replace(/(\d)-(?=(?:kg|g|ml|l)\b)/gi,"$1 ");
    // A quoted weight rate is not the weight of a purchasable package.
    if(/\b(?:je|pro|per)\s*(?:\d+(?:\.\d+)?\s*)?(?:kg|g|ml|l)\b|(?:kg|g|ml|l)\s*당|구매\s*중량\s*확인/i.test(text))return null;
    if (/\d\s*(?:kg|g|ml|l)?\s*[-–/]\s*\d|\/\s*(?:kg|g|ml|l)\b|für|ab\s/i.test(text)) return null;
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

  function offerView(offer, name) {
    return {...offer,identity:{...(offer?.identity||{ingredientId:name})},product:offer?.product||offer?.productDe||'',source:offer?.source||offer?.evidenceUrl||offer?.sourceURL||''};
  }

  function compatibleOffer(offer, meal, name) {
    const view=offerView(offer,name),policy=window.MealRecommendations;
    if(normalize(view.identity.ingredientId)!==normalize(name))return false;
    if(!view.product.trim())return !meal.strictPriceEvidence;
    if(!policy?.safeOffer||!policy?.offerMatchesRecipe)return !meal.strictPriceEvidence;
    return policy.safeOffer(view)&&policy.offerMatchesRecipe(view,meal);
  }

  function offerKey(offer) {
    const view=offerView(offer,offer?.identity?.ingredientId||'');
    return JSON.stringify([view.offerId||'',view.identity.ingredientId,view.identity.form||'',view.product,view.pack,view.priceCents,view.source]);
  }

  function candidatesFor(meal, originalName, name, catalog) {
    if(meal.disableOfferPricing)return [];
    const own=meal.offerCatalog||{},store=meal.offerCatalogOnly?{}:catalog[meal.store]||{};
    return [own[originalName],own[name],...(own.offersByIngredient?.[originalName]||[]),...(own.offersByIngredient?.[name]||[]),
      store[originalName],store[name],...(store.offersByIngredient?.[originalName]||[]),...(store.offersByIngredient?.[name]||[])].filter(Boolean).map(offer=>offerView(offer,name));
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
        const compact=value=>String(value).normalize('NFKC').replace(/\s+/g,'');
        const aliases=Object.entries(meal.requiredAmounts||{}).filter(([label])=>compact(label)===compact(originalName)||compact(label)===compact(name));
        const candidate = meal.requiredAmounts?.[originalName] || meal.requiredAmounts?.[name] || (aliases.length===1?aliases[0][1]:null);
        const required = candidate && Number.isFinite(candidate.amount) && candidate.amount > 0 && ['g', 'ml'].includes(candidate.unit) ? candidate : null;
        const candidates=candidatesFor(meal,originalName,name,catalog);
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
          if(!alreadySeen) {
            existing.dependentMeals.push(meal);
          }
          for(const offer of candidates)existing.offerChoices.set(offerKey(offer),offer);
          continue;
        }
        if(alreadySeen)continue;
        ingredients.set(key, {
          key, name, store: meal.store,dependentMeals:[meal],offerChoices:new Map(candidates.map(offer=>[offerKey(offer),offer])),
          owned: pantry.has(key), requiredAmount: required ? { ...required } : null,
          requirementComplete: Boolean(required),contributions:contributionKey?{[contributionKey]:required?{...required}:null}:{}
        });
      }
    }
    const items = [...ingredients.values()].map(({dependentMeals,offerChoices,...item}) => {
      const compatible=[...offerChoices].filter(([,offer])=>dependentMeals.every(meal=>compatibleOffer(offer,meal,item.name)));
      const chosen=compatible[0],offer=chosen?.[1];
      const semanticHeld=offerChoices.size>0&&!offer;
      const price=semanticHeld?null:(Object.hasOwn(prices,item.key)?prices[item.key]:offer?.priceCents);
      item.priceCents=Number.isSafeInteger(price)&&price>=0?price:null;
      item.pack=offer?.pack||'구매 단위 직접 확인';item.product=offer?.product||'';item.source=offer?.source||'';
      item.identity=offer?.identity?{...offer.identity}:undefined;item.offerId=offer?.offerId;item.detail=offer?.detail;
      item.validFrom=offer?.validFrom;item.validThrough=offer?.validThrough;
      item.category=offer?.category;item.productInfo=offer?.productInfo;
      item.offerKey=chosen?.[0]||null;item.compatibleOfferKeys=compatible.map(([key])=>key);item.semanticHeld=semanticHeld;
      item.customPrice=!semanticHeld&&Object.hasOwn(prices,item.key);
      item.normalPriceCents=Number.isSafeInteger(offer?.normalPriceCents)&&offer.normalPriceCents>=item.priceCents?offer.normalPriceCents:null;
      const manualQuantity = !semanticHeld&&Number.isSafeInteger(quantities[item.key]) && quantities[item.key] > 0 && quantities[item.key] <= 999
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
        quantityComplete:manualQuantity!==null||Boolean(canCalculate),
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

  function matchesBasketContext(facts, context) {
    return Boolean(context && facts?.sourceCoverage==='complete'
      && ['postcode','store','branchId','date','targetServings'].every((key)=>context[key]!==undefined&&facts[key]===context[key])
      && /^\d{5}$/.test(context.postcode) && /^\d{4}-\d{2}-\d{2}$/.test(context.date)
      && typeof context.store==='string'&&context.store&&typeof context.branchId==='string'&&context.branchId
      && Number.isSafeInteger(context.targetServings)&&context.targetServings>0);
  }

  function pantryOwns(item, pantry) {
    const keys=Array.isArray(item.pantryKeys)&&item.pantryKeys.length?item.pantryKeys:[item.key];
    return keys.every((key)=>pantry.has(key));
  }

  // Compiler prices include ordinary ingredients as well as offers. Combine
  // measured requirements before buying packs, rather than adding recipe totals.
  function compilerBasket(factsList, {context, pantry=new Set(), recipeIds=[],meals=[]}={}) {
    if(!Array.isArray(factsList)||!factsList.length)return null;
    const groups=new Map(),aliasGroups=new Map();
    const money=(value)=>Number.isSafeInteger(value)&&value>=0;
    for(let index=0;index<factsList.length;index+=1) {
      const facts=factsList[index];
      if(!matchesBasketContext(facts,context)||!Array.isArray(facts.items)||!facts.items.length)return null;
      for(const item of facts.items) {
        const required=item.requiredAmount,pack=item.pack,keys=item.pantryKeys;
        if(typeof item.product!=='string'||!item.product.trim()||!item.identity||!meals[index]
          ||!compatibleOffer({...item,pack:String(pack?.amount)+' '+pack?.unit},{...meals[index],strictPriceEvidence:true},item.identity.ingredientId)
          ||typeof item.key!=='string'||!item.key||!Array.isArray(keys)||!keys.length
          ||keys.some((key)=>typeof key!=='string'||!key.startsWith(context.store+':')||key===context.store+':')
          ||keys.some(key=>normalize(key.slice(context.store.length+1))!==normalize(item.identity.ingredientId))
          ||!required||!Number.isFinite(required.amount)||required.amount<=0||!['g','ml'].includes(required.unit)
          ||!pack||!Number.isFinite(pack.amount)||pack.amount<=0||pack.unit!==required.unit
          ||!money(item.priceCents)||!Number.isSafeInteger(item.quantity)||item.quantity<1||item.quantityComplete!==true
          ||item.subtotalCents!==item.priceCents*item.quantity||!money(item.subtotalCents)
          ||typeof item.sourceURL!=='string'||!/^https:\/\//.test(item.sourceURL)||!/^([a-f0-9]{64})$/.test(item.sourceSha256||'')
          ||!item.validFrom||!item.validThrough||item.validFrom>context.date||item.validThrough<context.date)return null;
        for(const key of keys) {
          if(aliasGroups.has(key)&&aliasGroups.get(key)!==item.key)return null;
          aliasGroups.set(key,item.key);
        }
        let group=groups.get(item.key);
        if(group&&offerKey({...group,pack:String(group.pack.amount)+' '+group.pack.unit})!==offerKey({...item,pack:String(pack.amount)+' '+pack.unit}))return null;
        if(group&&(group.pack.amount!==pack.amount||group.pack.unit!==pack.unit||group.priceCents!==item.priceCents
          ||group.sourceURL!==item.sourceURL||group.sourceSha256!==item.sourceSha256))return null;
        if(!group) {
          group={...item,pack:{...pack},requiredAmount:{amount:0,unit:required.unit},pantryKeys:[],contributions:{}};
          groups.set(item.key,group);
        }
        group.requiredAmount.amount+=required.amount;
        group.pantryKeys=[...new Set([...group.pantryKeys,...keys])];
        const recipeId=recipeIds[index]||facts.sourceRecipeId;
        if(recipeId) {
          const previous=group.contributions[recipeId];
          group.contributions[recipeId]={amount:(previous?.amount||0)+required.amount,unit:required.unit};
        }
      }
    }
    const items=[];
    for(const group of groups.values()) {
      const ratio=group.requiredAmount.amount/group.pack.amount;
      const quantity=Math.max(1,Math.ceil(ratio-Number.EPSILON*Math.max(1,Math.abs(ratio))*8));
      if(!Number.isSafeInteger(quantity)||!money(quantity*group.priceCents))return null;
      const key=group.pantryKeys[0],name=key.slice(context.store.length+1);
      items.push({...group,key,name,label:group.name,store:context.store,
        pack:String(group.pack.amount)+' '+group.pack.unit,source:group.sourceURL,product:group.product,identity:{...group.identity},
        owned:pantryOwns(group,pantry),quantity,quantityCalculated:true,quantityNeedsCheck:false,
        quantityComplete:true,offerKey:offerKey({...group,pack:String(group.pack.amount)+' '+group.pack.unit}),
        compatibleOfferKeys:[offerKey({...group,pack:String(group.pack.amount)+' '+group.pack.unit})],
        requiredLabel:formatRequired(group.requiredAmount),subtotalCents:quantity*group.priceCents});
    }
    const purchases=items.filter((item)=>!item.owned),knownSubtotalCents=purchases.reduce((sum,item)=>sum+item.subtotalCents,0);
    if(!money(knownSubtotalCents))return null;
    return {...context,sourceCoverage:'complete',items,totalCents:knownSubtotalCents,knownSubtotalCents,
      unknownItemKeys:[],quantityCheckKeys:[],costStatus:'complete',savingsStatus:'unavailable',savingsCents:null,
      unknownCount:0,quantityCheckCount:0,purchaseCount:purchases.length};
  }

  function marginalBasketFacts(facts, pantry = new Set(), context,meal) {
    const cart=compilerBasket([facts],{context,pantry,meals:[meal]});
    return cart||{sourceCoverage:'unknown',costStatus:'unknown',knownSubtotalCents:null,unknownItemKeys:['full-basket'],quantityCheckKeys:[],savingsStatus:'unavailable',savingsCents:null};
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
      const previousAllowed=!previous?.product||!Array.isArray(item.compatibleOfferKeys)||item.compatibleOfferKeys.some(key=>{
        if(previous.offerKey)return key===previous.offerKey;
        try {const value=JSON.parse(key);return value[3]===previous.product&&value[4]===previous.pack&&value[5]===previous.priceCents&&value[6]===previous.source;}catch{return false;}
      });
      const semanticHeld=Boolean(previous?.semanticHeld||item.semanticHeld||!previousAllowed);
      const pack=semanticHeld?'상품 연결 재확인':previous?.product?previous.pack:item.pack;
      const packAmount=metricAmount(pack);
      const contributionQuantity=contributionsComplete&&packAmount&&packAmount.unit===contributionUnit
        ? Math.max(1,Math.ceil(contributionValues.reduce((sum,value)=>sum+value.amount,0)/packAmount.amount))
        : null;
      const quantity=contributionQuantity??Math.max(previous?.quantity || 1,item.quantity);
      const quantityNeedsCheck=semanticHeld||(contributionValues.length?contributionQuantity===null:Boolean(previous?.quantityNeedsCheck||item.quantityNeedsCheck));
      const retained=previous?.product?previous:item;
      merged.set(item.key, {
        key: item.key, name: item.name, store: item.store, pack,
        pantryKeys:[...new Set([...(previous?.pantryKeys||[item.key]),...(item.pantryKeys||[item.key])])],
        product:semanticHeld?'':retained.product||'',source:semanticHeld?'':retained.source||'',
        identity:semanticHeld?undefined:retained.identity,offerId:semanticHeld?undefined:retained.offerId,
        offerKey:semanticHeld?null:retained.offerKey||null,compatibleOfferKeys:semanticHeld?[]:previous?.compatibleOfferKeys?.length
          ?previous.compatibleOfferKeys.filter(key=>item.compatibleOfferKeys?.includes(key)):item.compatibleOfferKeys||[],
        validFrom:semanticHeld?undefined:retained.validFrom,validThrough:semanticHeld?undefined:retained.validThrough,
        detail:semanticHeld?undefined:retained.detail,category:semanticHeld?undefined:retained.category,productInfo:semanticHeld?undefined:retained.productInfo,
        semanticHeld,quantity, priceCents:semanticHeld?null:retained.priceCents, quantityNeedsCheck,contributions,
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
      costStatus:remaining.length>0&&unknownCount===remaining.length?'unknown':unknownCount||quantityCheckCount?'partial':'complete'
    };
  }

  function groupListByMenu(list, meals = []) {
    const menuOrder=[];
    const menuById=new Map();
    for(const meal of meals) {
      const id=typeof (meal?.id||meal?.sourceRecipeId)==='string'&&(meal.id||meal.sourceRecipeId)?String(meal.id||meal.sourceRecipeId):null;
      if(!id||menuById.has(id))continue;
      const menu={id,title:typeof meal.title==='string'&&meal.title.trim()?meal.title.trim():'이름을 확인할 메뉴'};
      menuById.set(id,menu);menuOrder.push(menu);
    }
    const byMenu=new Map(menuOrder.map((menu)=>[menu.id,[]]));
    const shared=[],other=[];
    for(const item of list) {
      const contributionIds=Object.keys(item?.contributions&&typeof item.contributions==='object'?item.contributions:{}).filter((id)=>id!=='legacy-unknown');
      const contributionSet=new Set(contributionIds);
      const menus=menuOrder.filter((menu)=>contributionSet.has(menu.id));
      const decorated={...item,menuCount:menus.length,menuTitles:menus.map((menu)=>menu.title)};
      if(menus.length===1&&contributionIds.length===1)byMenu.get(menus[0].id).push(decorated);
      else if(menus.length>1&&menus.length===contributionIds.length)shared.push(decorated);
      else other.push(decorated);
    }
    const groups=menuOrder.filter((menu)=>byMenu.get(menu.id).length).map((menu)=>({key:'menu:'+menu.id,title:menu.title,kind:'menu',items:byMenu.get(menu.id)}));
    if(shared.length)groups.push({key:'shared',title:'여러 메뉴에 공통',kind:'shared',items:shared});
    if(other.length)groups.push({key:'other',title:'기타 재료',kind:'other',items:other});
    return groups;
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
            || (item.pantryKeys!==undefined&&(!Array.isArray(item.pantryKeys)||!item.pantryKeys.length||item.pantryKeys.some((key)=>!validKey(key))))
            || typeof item.completed !== "boolean" || pantryOwns(item,state.pantry) || seen.has(item.key)) return false;
          seen.add(item.key);
          return true;
        }).map(({ key, name, store, pack, product, source, quantity, priceCents, completed, quantityNeedsCheck, contributions, pantryKeys,identity,offerId,offerKey,compatibleOfferKeys,validFrom,validThrough,semanticHeld,detail,category,productInfo }) => ({ key, name, store, pack, product:product||'', source:source||'', quantity, priceCents, completed, quantityNeedsCheck:quantityNeedsCheck===true,contributions:contributions||{},pantryKeys:(pantryKeys||[key]).map(canonicalKey),identity:record(identity)?{...identity}:undefined,offerId:typeof offerId==='string'?offerId:undefined,offerKey:typeof offerKey==='string'?offerKey:null,compatibleOfferKeys:Array.isArray(compatibleOfferKeys)?compatibleOfferKeys.filter(value=>typeof value==='string'):[],validFrom,validThrough,semanticHeld:semanticHeld===true,detail,category,productInfo }));
        state.list=state.list.map(item=>{
          const view=offerView(item,item.name),policy=window.MealRecommendations;
          const dependencies=Object.keys(item.contributions||{}).map(id=>options.recipeFor?.(id)).filter(Boolean);
          const invalid=item.semanticHeld||(item.product&&policy?.safeOffer&&(!policy.safeOffer(view)||normalize(view.identity.ingredientId)!==normalize(item.name)
            ||dependencies.some(meal=>!policy.offerMatchesRecipe(view,meal))));
          if(!invalid)return item;
          delete state.prices[item.key];for(const values of Object.values(state.quantities))delete values[item.key];
          return {...item,semanticHeld:true,product:'',source:'',pack:'상품 연결 재확인',priceCents:null,quantityNeedsCheck:true,identity:undefined,offerId:undefined,offerKey:null,compatibleOfferKeys:[]};
        });
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

  window.MealShopping = { basket, compilerBasket, matchesBasketContext, pantryOwns, euro, parsePrice, keyFor, ingredientName, classifyIngredients, currentCatalog, restorePlans, normalizePlanSlot, restorePlansV2, refreshAutoPlans, replaceAutoSlot, clearPlanSlot, marginalBasketFacts, serializePlansV2, amount, summary, addToList, groupListByMenu, listProgress, restoreState, serializeState };
}());
