/* Editorial recommendation policy. Source recipe content stays in the recipe data. */
(function () {
  const dayNumber = (date) => {
    if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
    const value = Date.parse(date + 'T00:00:00Z');
    return Number.isFinite(value) && new Date(value).toISOString().slice(0,10) === date ? value / 86400000 : null;
  };
  const identity = (meal) => meal.sourceRecipeId || meal.id;
  const profile = (meal) => meal.recommendationProfile || {primaryIngredients:[],family:identity(meal),method:'unknown'};

  function restoreHistory(serialized, date) {
    const today = dayNumber(date);
    if (today === null) return [];
    try {
      const rows = JSON.parse(serialized);
      if (!Array.isArray(rows)) return [];
      const slots = new Map();
      for (const row of rows) {
        if (!row || typeof row.sourceRecipeId !== 'string' || !/^[a-zA-Z0-9-]{1,64}$/.test(row.sourceRecipeId)
          || !['점심','저녁'].includes(row.moment) || typeof row.family !== 'string' || typeof row.method !== 'string') continue;
        const day = dayNumber(row.date);
        if (day === null || today-day < 0 || today-day >= 14) continue;
        slots.set(row.date+':'+row.moment, {sourceRecipeId:row.sourceRecipeId,family:row.family,method:row.method,date:row.date,moment:row.moment});
      }
      return [...slots.values()].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,28);
    } catch { return []; }
  }

  function recordMeal(history, meal, date, moment) {
    const next = history.filter((row)=>row.date !== date || row.moment !== moment);
    const meta = profile(meal);
    next.push({sourceRecipeId:identity(meal),family:meta.family,method:meta.method,date,moment});
    return restoreHistory(JSON.stringify(next),date);
  }

  function explain(meal, catalog = {}) {
    const mainIngredients = profile(meal).primaryIngredients;
    const names = [...new Set([...meal.sale,...meal.missing])];
    const mainOffers = mainIngredients.filter((name)=>Object.hasOwn(catalog,name)).map((name)=>({name,product:catalog[name].product || name,pack:catalog[name].pack || '',priceCents:catalog[name].priceCents}));
    const secondaryOffers = names.filter((name)=>!mainIngredients.includes(name) && Object.hasOwn(catalog,name));
    const substitutionNotes = [];
    if (mainIngredients.includes('닭가슴살') && meal.detailIngredients?.some((label)=>label.includes('닭가슴살')) && !catalog['닭가슴살'] && catalog['닭안심']) {
      substitutionNotes.push('이번 행사 상품은 닭안심('+catalog['닭안심'].product+')입니다. 원문 닭가슴살과 부위가 달라 대체 후보로만 안내하며, 구매 합계에는 자동 연결하지 않습니다.');
    }
    return {mainIngredients,mainOffers,secondaryOffers,substitutionNotes};
  }

  function score(meal, {catalog = {}, history = [], date, moment = '저녁', offerFrequency = {}}) {
    const info = explain(meal,catalog), meta = profile(meal);
    const recent = restoreHistory(JSON.stringify(history),date);
    const sameDish = recent.some((row)=>row.sourceRecipeId === identity(meal));
    const familyRecent = recent.slice(0,2).filter((row)=>row.family === meta.family).length;
    const mainCoverage = info.mainIngredients.length ? info.mainOffers.length / info.mainIngredients.length : 0;
    const storeSpecificity = info.mainOffers.reduce((sum,offer)=>sum+12/Math.max(1,offerFrequency[offer.name]||1),0);
    const breakfast = meal.tags.includes('아침') && ['점심','저녁'].includes(moment) ? 140 : 0;
    const side = meta.kind === 'side' ? 140 : 0;
    return mainCoverage*100 + storeSpecificity + Math.min(info.secondaryOffers.length,3)*3 - Math.min(meal.time/15,15)
      - breakfast - side - (sameDish ? 160 : 0) - familyRecent*18;
  }

  function rank(meals, options) {
    const eligible=options.requireMainOffer ? available(meals,options) : meals;
    return eligible.slice().sort((a,b)=>score(b,options)-score(a,options) || identity(a).localeCompare(identity(b)));
  }

  function available(meals, {catalog = {}}) {
    return meals.filter((meal)=>explain(meal,catalog).mainOffers.length>0);
  }

  function sequence(meals, options, count = meals.length) {
    const matched = options.requireMainOffer ? available(meals,options) : meals;
    const eligible = options.mealOnly ? matched.filter((meal)=>!['side','breakfast'].includes(profile(meal).kind)) : matched;
    const remaining = [...new Map(eligible.map((meal)=>[identity(meal),meal])).values()];
    const result = [], families = new Map(), methods = new Map();
    while (remaining.length && result.length < count) {
      // Relax the family cap only if no remaining family can satisfy it.
      let candidates = result.length < 7 ? remaining.filter((meal)=>(families.get(profile(meal).family)||0)<2) : remaining;
      if (!candidates.length) candidates = remaining;
      const lastFamily = result.length ? profile(result.at(-1)).family : null;
      const alternatives = candidates.filter((meal)=>profile(meal).family !== lastFamily);
      if (alternatives.length) candidates = alternatives;
      const adjusted = (meal)=>score(meal,options) - (families.get(profile(meal).family)||0)*25 - (methods.get(profile(meal).method)||0)*12;
      const selected = candidates.slice().sort((a,b)=>adjusted(b)-adjusted(a) || identity(a).localeCompare(identity(b)))[0];
      result.push(selected);
      const meta = profile(selected);
      families.set(meta.family,(families.get(meta.family)||0)+1);
      methods.set(meta.method,(methods.get(meta.method)||0)+1);
      remaining.splice(remaining.indexOf(selected),1);
    }
    return result;
  }

  function current(meals, options, selectedId = null) {
    // A deliberate library choice may be a side; automatic meals may not.
    return meals.find((meal)=>meal.id===selectedId) || sequence(meals,{...options,mealOnly:true},1)[0] || null;
  }

  window.MealRecommendations = {available,rank,sequence,current,explain,restoreHistory,recordMeal};
}());
