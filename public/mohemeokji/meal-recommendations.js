/* Editorial recommendation policy. Source recipe content stays in the recipe data. */
(function () {
  const dayNumber = (date) => {
    if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
    const value = Date.parse(date + 'T00:00:00Z');
    return Number.isFinite(value) && new Date(value).toISOString().slice(0,10) === date ? value / 86400000 : null;
  };
  const identity = (meal) => meal.sourceRecipeId || meal.id;
  const profile = (meal) => meal.recommendationProfile || {primaryIngredients:[],family:identity(meal),method:'unknown'};
  const modes = new Set(['balanced','value','nutrition','diet']);
  const defaultRankingPolicy={modes:{
    nutrition:{weights:{kcal:20,proteinGrams:30,fiberGrams:30,sodiumMg:20},directions:{kcal:'lower',proteinGrams:'higher',fiberGrams:'higher',sodiumMg:'lower'}},
    diet:{weights:{kcal:40,proteinGrams:30,fiberGrams:20,sodiumMg:10},directions:{kcal:'lower',proteinGrams:'higher',fiberGrams:'higher',sodiumMg:'lower'}}
  }};

  function restorePreferences(serialized) {
    try {
      const value=JSON.parse(serialized);
      if(value&&modes.has(value.mode)&&Number.isInteger(value.targetServings)&&value.targetServings>=1&&value.targetServings<=6) {
        return {mode:value.mode,targetServings:value.targetServings};
      }
    } catch { /* Corrupt preferences use safe defaults. */ }
    return {mode:'balanced',targetServings:2};
  }

  function serializePreferences(value={}) {
    return JSON.stringify({
      mode:modes.has(value.mode)?value.mode:'balanced',
      targetServings:Number.isInteger(value.targetServings)&&value.targetServings>=1&&value.targetServings<=6?value.targetServings:2
    });
  }

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

  function nutritionReadiness(meal) {
    const facts=meal?.nutritionFacts,perServing=facts?.perServing;
    const fields=['kcal','proteinGrams','fiberGrams','sodiumMg'];
    const ready=facts?.status==='complete'&&typeof facts.source==='string'&&facts.source.trim()
      &&Number.isFinite(facts.sourceServings)&&facts.sourceServings>0
      &&perServing&&fields.every((field)=>Number.isFinite(perServing[field])&&perServing[field]>=0);
    return {ready:Boolean(ready),status:ready?'complete':'unknown',facts:ready?perServing:null};
  }

  function costReadiness(cart) {
    const unknown=Array.isArray(cart?.unknownItemKeys)?cart.unknownItemKeys:[];
    const quantity=Array.isArray(cart?.quantityCheckKeys)?cart.quantityCheckKeys:[];
    const subtotalValid=Number.isSafeInteger(cart?.knownSubtotalCents)&&cart.knownSubtotalCents>=0;
    const ready=subtotalValid&&cart?.costStatus==='complete'&&!unknown.length&&!quantity.length;
    return {ready,status:subtotalValid&&['complete','partial','unknown'].includes(cart?.costStatus)?cart.costStatus:'unknown',knownSubtotalCents:subtotalValid?cart.knownSubtotalCents:null,savingsStatus:cart?.savingsStatus==='complete'?'complete':'unavailable'};
  }

  function evaluateRecipeForMode(meal, context={}, mode='balanced') {
    const selectedMode=modes.has(mode)?mode:'balanced';
    const reasons=[];
    let eligible=Boolean(meal&&typeof identity(meal)==='string'&&identity(meal));
    if(!eligible) reasons.push('출처 레시피 식별자가 없습니다.');
    if(context.store&&meal?.store!==context.store) { eligible=false; reasons.push('선택한 마트의 메뉴가 아닙니다.'); }
    if(context.branchId&&meal?.branchId!==context.branchId) { eligible=false; reasons.push('선택한 지점의 메뉴가 아닙니다.'); }
    if(context.mealOnly&&['side','breakfast'].includes(profile(meal||{}).kind)) { eligible=false; reasons.push('점심·저녁 자동 추천용 주식 메뉴가 아닙니다.'); }
    if(context.requireMainOffer&&explain(meal||{sale:[],missing:[]},context.catalog||{}).mainOffers.length===0) { eligible=false; reasons.push('현재 지점의 정확한 주재료 할인과 연결되지 않습니다.'); }
    if(typeof context.offerIds?.has==='function'&&!((meal?.offerIds||[]).some((offerId)=>context.offerIds.has(offerId)))) { eligible=false; reasons.push('현재 지점의 할인상품 ID와 일치하지 않습니다.'); }
    const readiness={cost:'unknown',savings:'unavailable',nutrition:'unknown'};
    const scoreComponents={qualityScore:Number.isFinite(meal?.qualityScore)?meal.qualityScore:null};
    if(selectedMode==='value') {
      if(context.requireCompilerBasketFacts&&(meal?.basketFacts?.sourceCoverage!=='complete'||meal.basketFacts.targetServings!==context.targetServings)) { eligible=false; reasons.push('선택한 인분 수의 전체 재료 범위가 검증된 구매 바구니 자료가 없습니다.'); }
      const cost=costReadiness(typeof context.basketFor==='function'?context.basketFor(meal,context.targetServings||2):meal?.basketFacts);
      readiness.cost=cost.status;readiness.savings=cost.savingsStatus;scoreComponents.knownSubtotalCents=cost.knownSubtotalCents;
      if(!cost.ready) { eligible=false; reasons.push('가격 또는 필요한 포장 수량이 모두 확인되지 않았습니다.'); }
      else reasons.push('확인된 구매 합계 '+cost.knownSubtotalCents+'센트 기준입니다.');
    } else if(selectedMode==='nutrition'||selectedMode==='diet') {
      const nutrient=nutritionReadiness(meal);readiness.nutrition=nutrient.status;
      if(!nutrient.ready) { eligible=false; reasons.push('원문 인분 수와 영양 근거가 완전하지 않습니다.'); }
      else {
        Object.assign(scoreComponents,nutrient.facts);
        const weights=(context.rankingPolicy||defaultRankingPolicy).modes[selectedMode].weights;
        reasons.push('1인분 근거: '+nutrient.facts.kcal+' kcal · 단백질 '+nutrient.facts.proteinGrams+' g · 식이섬유 '+nutrient.facts.fiberGrams+' g · 나트륨 '+nutrient.facts.sodiumMg+' mg · 정책 가중치 열량 '+weights.kcal+'%·단백질 '+weights.proteinGrams+'%·식이섬유 '+weights.fiberGrams+'%·나트륨 '+weights.sodiumMg+'%');
      }
    } else reasons.push('현재 할인상품과 메뉴 다양성을 기준으로 추천합니다.');
    return {eligible,readiness,scoreComponents,reasons};
  }

  function rankForMode(pool, context={}, mode='balanced') {
    const eligible=(pool||[]).filter((meal)=>evaluateRecipeForMode(meal,context,mode).eligible);
    const facts=(meal)=>evaluateRecipeForMode(meal,context,mode).scoreComponents;
    let compare=null;
    if(mode==='value') compare=(a,b)=>facts(a).knownSubtotalCents-facts(b).knownSubtotalCents;
    if(mode==='nutrition'||mode==='diet') {
      const policy=(context.rankingPolicy||defaultRankingPolicy).modes[mode];
      const fields=Object.keys(policy.weights);
      const ranges=Object.fromEntries(fields.map((field)=>{
        const values=eligible.map((meal)=>facts(meal)[field]);
        return [field,{min:Math.min(...values),max:Math.max(...values)}];
      }));
      const weighted=(meal)=>fields.reduce((sum,field)=>{
        const {min,max}=ranges[field],value=facts(meal)[field];
        const normalized=max===min?0.5:(policy.directions[field]==='lower'?(max-value)/(max-min):(value-min)/(max-min));
        return sum+normalized*policy.weights[field];
      },0);
      compare=(a,b)=>weighted(b)-weighted(a);
    }
    return sequence(eligible,{...context,compare},eligible.length);
  }

  function nextCandidate(pool, {dismissedRecipeIds=[],usedRecipeIds=[],mode='balanced',context={}}={}) {
    const excluded=new Set([...dismissedRecipeIds,...usedRecipeIds]);
    return (pool||[]).find((meal)=>!excluded.has(identity(meal))&&!excluded.has(meal.id)&&evaluateRecipeForMode(meal,context,mode).eligible)||null;
  }

  function sequence(meals, options, count = meals.length) {
    const matched = options.requireMainOffer ? available(meals,options) : meals;
    const eligible = options.mealOnly ? matched.filter((meal)=>!['side','breakfast'].includes(profile(meal).kind)) : matched;
    const remaining = [...new Map(eligible.map((meal)=>[identity(meal),meal])).values()];
    const result = [], families = new Map(), methods = new Map(), relaxations=[];
    while (remaining.length && result.length < count) {
      // Relax the family cap only if no remaining family can satisfy it.
      let candidates = remaining.filter((meal)=>(families.get(profile(meal).family)||0)<2);
      if (!candidates.length) {
        relaxations.push({code:'family-cap',at:result.length});
        candidates = remaining;
      }
      const lastFamily = result.length ? profile(result.at(-1)).family : null;
      const alternatives = candidates.filter((meal)=>profile(meal).family !== lastFamily);
      if (alternatives.length) candidates = alternatives;
      const adjusted = (meal)=>score(meal,options) - (families.get(profile(meal).family)||0)*25 - (methods.get(profile(meal).method)||0)*12;
      const selected = candidates.slice().sort((a,b)=>(typeof options.compare==='function'?options.compare(a,b):0) || adjusted(b)-adjusted(a) || identity(a).localeCompare(identity(b)))[0];
      result.push(selected);
      const meta = profile(selected);
      families.set(meta.family,(families.get(meta.family)||0)+1);
      methods.set(meta.method,(methods.get(meta.method)||0)+1);
      remaining.splice(remaining.indexOf(selected),1);
    }
    result.relaxations=relaxations;
    return result;
  }

  function current(meals, options, selectedId = null) {
    // A deliberate library choice may be a side; automatic meals may not.
    return meals.find((meal)=>meal.id===selectedId) || sequence(meals,{...options,mealOnly:true},1)[0] || null;
  }

  window.MealRecommendations = {available,rank,sequence,current,explain,restoreHistory,recordMeal,restorePreferences,serializePreferences,evaluateRecipeForMode,rankForMode,nextCandidate};
}());
