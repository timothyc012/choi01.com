/* Instantiate source records only for the selected store. The full source pool
   supports saved plans; available menus are filtered against current branch offers. */
(function () {
  const details = window.ontologyRecipeDetails || [];
  const storeSlug = (store) => store.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  window.createMealRecipes = (store) => details.map((detail) => ({
    ...detail,
    id: storeSlug(store) + '-recipe-' + detail.sourceRecipeId,
    store,
    filter: [detail.cuisine].concat(detail.filters || []),
    tags: detail.tags.slice(),
    sale: detail.sale.slice(),
    missing: detail.missing.slice(),
    requiredAmounts: Object.fromEntries(Object.entries(detail.requiredAmounts || {}).map(([name, value]) => [name, { ...value }])),
    detailIngredients: detail.detailIngredients.slice(),
    steps: detail.steps.slice()
  }));

  function legacyEnabled(search = window.location?.search || '') {
    return new URLSearchParams(search).get('snapshot') === 'legacy';
  }

  function fromSnapshotLocation(location) {
    const offersById=Object.fromEntries((location?.offers||[]).map((offer)=>[offer.offerId,offer]));
    return (location?.recipes || []).map((recipe) => {
      const matchedOffers=(recipe.offerIds||[]).map((offerId)=>offersById[offerId]).filter(Boolean);
      const grouped=new Map();
      for(const offer of matchedOffers) {
        const ingredientId=offer.identity?.ingredientId;
        if(!ingredientId) continue;
        if(!grouped.has(ingredientId)) grouped.set(ingredientId,[]);
        grouped.get(ingredientId).push(offer);
      }
      // A compiler-selected pricing offer wins; otherwise canonical offerId order
      // provides one stable concrete pack while matchedOffers retains all evidence.
      const offerCatalog=Object.fromEntries([...grouped].map(([ingredientId,offers])=>{
        const offer=offers.find((entry)=>entry.offerId===recipe.preferredPricingOfferId)||offers.slice().sort((a,b)=>a.offerId.localeCompare(b.offerId))[0];
        return [ingredientId,{
          offerId:offer.offerId,product:offer.productDe,pack:offer.pack,priceCents:offer.priceCents,
          normalPriceCents:Number.isSafeInteger(offer.normalPriceCents)?offer.normalPriceCents:null,
          validFrom:offer.validFrom,validThrough:offer.validThrough,source:offer.evidenceUrl||''
        }];
      }));
      return ({
      id: storeSlug(location.store) + '-recipe-' + recipe.sourceRecipeId,
      sourceRecipeId: recipe.sourceRecipeId,
      store: location.store,
      branchId: location.branchId,
      title: (recipe.primaryIngredientIds || []).join(' · ') + ' 활용 레시피',
      time: null,
      timeBasis: 'detail',
      sale: Array.isArray(recipe.primaryIngredientIds) ? recipe.primaryIngredientIds.slice() : [],
      missing: [],
      tags: [],
      filter: [recipe.recommendationProfile?.kind || 'main'],
      requiredAmounts: {},
      offerIds: Array.isArray(recipe.offerIds) ? recipe.offerIds.slice() : [],
      primaryIngredientIds: Array.isArray(recipe.primaryIngredientIds) ? recipe.primaryIngredientIds.slice() : [],
      recommendationProfile: recipe.recommendationProfile || {},
      qualityScore: recipe.qualityScore ?? null,
      qualityFacts: recipe.qualityFacts || {},
      basketFacts: recipe.basketFacts || null,
      nutritionFacts: recipe.nutritionFacts || null,
      sourceServings: recipe.sourceServings ?? null,
      matchedOffers,
      offerCatalog,
      detailPath: recipe.detailPath,
      detailSha256: recipe.detailSha256
      });
    });
  }

  function offerCatalogFromSnapshot(location) {
    const grouped = new Map();
    for (const offer of location?.offers || []) {
      const ingredientId = offer?.identity?.ingredientId;
      if (typeof ingredientId !== 'string' || !ingredientId) continue;
      if (!grouped.has(ingredientId)) grouped.set(ingredientId,[]);
      grouped.get(ingredientId).push(offer);
    }
    const normalizeOffer=(offer)=>({
      offerId:offer.offerId,
      product:offer.productDe,
      pack:offer.pack,
      priceCents:offer.priceCents,
      normalPriceCents:Number.isSafeInteger(offer.normalPriceCents)?offer.normalPriceCents:null,
      validFrom:offer.validFrom,
      validThrough:offer.validThrough,
      source:offer.evidenceUrl || ''
    });
    const catalog=Object.fromEntries([...grouped].map(([ingredientId,offers]) => {
      const offer=offers.slice().sort((a,b)=>a.offerId.localeCompare(b.offerId))[0];
      return [ingredientId,normalizeOffer(offer)];
    }));
    catalog.offersById=Object.fromEntries((location?.offers||[]).map((offer)=>[offer.offerId,normalizeOffer(offer)]));
    catalog.offersByIngredient=Object.fromEntries([...grouped].map(([ingredientId,offers])=>[ingredientId,offers.map(normalizeOffer)]));
    return catalog;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g,(character)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[character]));
  }

  function selectSnapshotLocation(sourceLocations,params=new URLSearchParams(),pathname='') {
    const locations=(sourceLocations||[]).slice().sort((a,b)=>[a.postcode,a.store,a.branchId].join('|').localeCompare([b.postcode,b.store,b.branchId].join('|')));
    const postcodes=[...new Set(locations.map((entry)=>entry.postcode))];
    const routeSegment=String(pathname).split('/').filter(Boolean).find((segment)=>/^\d{5}/.test(segment))||'';
    const routeMatch=routeSegment.match(/^(\d{5})(.*)$/);
    const requestedArea=params.get('postcode');
    const activeArea=postcodes.includes(requestedArea)?requestedArea:(routeMatch&&postcodes.includes(routeMatch[1])?routeMatch[1]:postcodes[0]);
    const stores=[...new Set(locations.filter((entry)=>entry.postcode===activeArea).map((entry)=>entry.store))].sort();
    const requestedStore=params.get('store');
    const routeStore=routeMatch?stores.find((store)=>storeSlug(routeMatch[2]).includes(storeSlug(store))):null;
    const activeStore=stores.includes(requestedStore)?requestedStore:(routeStore||stores[0]);
    const branches=locations.filter((entry)=>entry.postcode===activeArea&&entry.store===activeStore).sort((a,b)=>a.branchId.localeCompare(b.branchId));
    const activeBranch=branches.find((entry)=>entry.branchId===params.get('branch'))||branches[0];
    return {locations,postcodes,activeArea,stores,activeStore,branches,activeBranch};
  }

  function safeJson(value) {
    try {
      const parsed=JSON.parse(value);
      return parsed&&typeof parsed==='object'&&!Array.isArray(parsed)?parsed:null;
    } catch { return null; }
  }

  function createStorageAccess() {
    const memory=new Map();
    let backend=null;
    try { backend=window.localStorage; } catch { /* In-memory state remains available. */ }
    return {
      get(key) {
        try { const value=backend?.getItem(key); return value===null||value===undefined?(memory.get(key)||null):value; }
        catch { return memory.get(key)||null; }
      },
      set(key,value) {
        memory.set(key,value);
        try { backend?.setItem(key,value); return Boolean(backend); }
        catch { return false; }
      }
    };
  }

  function acceptLegacyScopedPayload(serialized,{area,store,branchId,branchCount=1,keyScoped=false}={}) {
    const data=safeJson(serialized);
    if(!data)return null;
    if((!keyScoped&&(!data.activeArea||!data.activeStore))||(data.activeArea&&data.activeArea!==area)||(data.activeStore&&data.activeStore!==store))return null;
    if(data.activeBranchId)return data.activeBranchId===branchId?serialized:null;
    return branchCount===1?serialized:null;
  }

  async function startSnapshotApp() {
    const byId=(id)=>document.getElementById(id);
    const loader=window.MealDataLoader;
    const shopping=window.MealShopping;
    const recommendations=window.MealRecommendations;
    const params=new URLSearchParams(window.location.search);
    const storage=createStorageAccess();
    const days=[['mon','월'],['tue','화'],['wed','수'],['thu','목'],['fri','금'],['sat','토'],['sun','일']];
    byId('sourceStatus').textContent='검증된 이번 주 자료를 불러오는 중입니다';
    try {
      const manifest=await loader.loadCurrentSnapshot();
      const {locations,postcodes,activeArea,stores,activeStore,branches,activeBranch}=selectSnapshotLocation(manifest.locations,params,window.location.pathname);
      if(!activeBranch) throw new Error('선택한 지점 자료가 없습니다.');

      byId('postcodeSelect').innerHTML=postcodes.map((postcode)=>'<option value="'+escapeHtml(postcode)+'">'+escapeHtml(postcode)+'</option>').join('');
      byId('postcodeSelect').value=activeArea;
      byId('storeSelect').innerHTML=stores.map((store)=>'<option value="'+escapeHtml(store)+'">'+escapeHtml(store)+'</option>').join('');
      byId('storeSelect').value=activeStore;
      byId('branchField').hidden=branches.length<2;
      byId('branchSelect').innerHTML=branches.map((entry)=>'<option value="'+escapeHtml(entry.branchId)+'">'+escapeHtml(entry.branch||entry.branchId)+'</option>').join('');
      byId('branchSelect').value=activeBranch.branchId;

      const openLocation=(postcode,store,branchId)=>{
        const next=new URLSearchParams({postcode,store});
        if(branchId) next.set('branch',branchId);
        window.location.href='/mohemeokji/?'+next.toString();
      };
      byId('postcodeSelect').addEventListener('change',(event)=>{
        const nextLocations=locations.filter((entry)=>entry.postcode===event.target.value).sort((a,b)=>[a.store,a.branchId].join('|').localeCompare([b.store,b.branchId].join('|')));
        if(nextLocations[0]) openLocation(nextLocations[0].postcode,nextLocations[0].store,nextLocations[0].branchId);
      });
      byId('storeSelect').addEventListener('change',(event)=>{
        const next=locations.find((entry)=>entry.postcode===activeArea&&entry.store===event.target.value);
        if(next) openLocation(activeArea,next.store,next.branchId);
      });
      byId('branchSelect').addEventListener('change',(event)=>openLocation(activeArea,activeStore,event.target.value));

      const location=await loader.loadLocationSnapshot(manifest,{postcode:activeArea,store:activeStore,branchId:activeBranch.branchId});
      const meals=fromSnapshotLocation(location);
      const mealById=(id)=>meals.find((meal)=>meal.id===id);
      const catalog={ [activeStore]:offerCatalogFromSnapshot(location) };
      const storageScope=[activeArea,activeStore,activeBranch.branchId].join(':');
      const shoppingStorageKey='choi01-shopping-v1:'+storageScope;
      const planStorageKey='choi01-today-meal-plan:'+storageScope;
      const preferenceStorageKey='choi01-recommendation-preferences-v1';
      const oldShoppingStorageKey='choi01-shopping-v1:'+activeArea+':'+activeStore;
      const oldPlanStorageKey='choi01-today-meal-plan:'+activeArea+':'+activeStore;
      const branchShopping=storage.get(shoppingStorageKey);
      const oldShopping=storage.get(oldShoppingStorageKey);
      const acceptedOldShopping=acceptLegacyScopedPayload(oldShopping,{area:activeArea,store:activeStore,branchId:activeBranch.branchId,branchCount:branches.length,keyScoped:true});
      const savedShopping=safeJson(branchShopping)?branchShopping:acceptedOldShopping;
      const shoppingState=shopping.restoreState(savedShopping,manifest.snapshotId,{stores:[activeStore]});
      const preferences=recommendations.restorePreferences(storage.get(preferenceStorageKey));
      const berlinDate=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
      const mealHistory=recommendations.restoreHistory(storage.get('choi01-meal-history-v1'),berlinDate);
      const offerIds=new Set(location.offers.map((offer)=>offer.offerId));
      const scaledMeal=(meal)=>{
        if(!(Number.isFinite(meal.sourceServings)&&meal.sourceServings>0)) return meal;
        const scale=preferences.targetServings/meal.sourceServings;
        return {...meal,requiredAmounts:Object.fromEntries(Object.entries(meal.requiredAmounts||{}).map(([name,value])=>[name,{...value,amount:value.amount*scale}]))};
      };
      const modeBasket=(meal)=>{
        const facts=meal.basketFacts;
        if(facts?.sourceCoverage==='complete'&&facts.targetServings===preferences.targetServings)return facts;
        return {sourceCoverage:'unknown',costStatus:'unknown',knownSubtotalCents:null,unknownItemKeys:['recipe:'+meal.id+':full-basket'],quantityCheckKeys:[],savingsStatus:'unavailable'};
      };
      const recommendationContext=()=>({catalog:catalog[activeStore],requireMainOffer:true,requireCompilerBasketFacts:true,store:activeStore,branchId:activeBranch.branchId,mealOnly:true,offerIds,targetServings:preferences.targetServings,basketFor:modeBasket,history:mealHistory,date:berlinDate});
      const modePool=()=>recommendations.rankForMode(meals,recommendationContext(),preferences.mode);
      const buildAutoPlans=(currentPlans=null)=>{
        const usedRecipeIds=new Set(Object.values(currentPlans||{}).flatMap((plan)=>Object.values(plan||{})).filter((slot)=>slot?.origin==='manual'&&slot.recipeId).map((slot)=>slot.recipeId));
        const pool=modePool();
        return Object.fromEntries(['점심','저녁'].map((moment)=>[moment,Object.fromEntries(days.map(([day])=>{
          const current=currentPlans?.[moment]?.[day];
          const next=current?.origin==='manual'?null:recommendations.nextCandidate(pool,{dismissedRecipeIds:current?.dismissedRecipeIds||[],usedRecipeIds:[...usedRecipeIds],mode:preferences.mode,context:recommendationContext()});
          const recipeId=next?.id||null;
          if(recipeId)usedRecipeIds.add(recipeId);
          return [day,shopping.normalizePlanSlot({recipeId,origin:'auto',dismissedRecipeIds:current?.dismissedRecipeIds||[]},'auto')];
        }))]));
      };
      let autoPlans=buildAutoPlans();
      const branchPlan=storage.get(planStorageKey);
      const oldScopedPlan=storage.get(oldPlanStorageKey);
      const globalPlan=storage.get('choi01-today-meal-plan');
      const branchPlanData=safeJson(branchPlan);
      const branchMatches=branchPlanData&&(!branchPlanData.activeArea||branchPlanData.activeArea===activeArea)&&(!branchPlanData.activeStore||branchPlanData.activeStore===activeStore)&&(!branchPlanData.activeBranchId||branchPlanData.activeBranchId===activeBranch.branchId);
      const acceptedScopedPlan=acceptLegacyScopedPayload(oldScopedPlan,{area:activeArea,store:activeStore,branchId:activeBranch.branchId,branchCount:branches.length});
      const acceptedGlobalPlan=acceptLegacyScopedPayload(globalPlan,{area:activeArea,store:activeStore,branchId:activeBranch.branchId,branchCount:branches.length});
      const savedPlan=branchMatches?branchPlan:(acceptedScopedPlan||acceptedGlobalPlan);
      const savedPlanData=safeJson(savedPlan)||{};
      const restored=shopping.restorePlansV2(savedPlan,{area:activeArea,store:activeStore,branchId:activeBranch.branchId,snapshotId:manifest.snapshotId,days:days.map(([day])=>day),moments:['점심','저녁'],availableRecipeIds:meals.map((meal)=>meal.id),autoPlans});
      autoPlans=buildAutoPlans(restored.plans);
      let plans=shopping.refreshAutoPlans(restored.plans,autoPlans);
      let mealMoment=['점심','저녁'].includes(savedPlanData.mealMoment)?savedPlanData.mealMoment:'저녁';
      const detailCache=new Map();
      const archivedDetails=savedPlanData.archivedDetails&&typeof savedPlanData.archivedDetails==='object'&&!Array.isArray(savedPlanData.archivedDetails)?{...savedPlanData.archivedDetails}:{};
      const archivedMealCache=new Map();
      const weeklyUnavailableIds=new Set();
      let selectedMeal=null;
      let recommendationIndex=0;
      let detailRequestVersion=0;

      const saveShopping=()=>storage.set(shoppingStorageKey,shopping.serializeState(shoppingState,manifest.snapshotId));
      const archiveManualDetails=()=>{
        for(const plan of Object.values(plans)) for(const slot of Object.values(plan)) {
          if(slot.origin!=='manual'||!slot.recipeId) continue;
          const meal=mealById(slot.recipeId);
          if(meal&&!archivedDetails[slot.recipeId]) archivedDetails[slot.recipeId]={sourceRecipeId:meal.sourceRecipeId,title:meal.title,detailPath:meal.detailPath,detailSha256:meal.detailSha256,area:activeArea,store:activeStore,branchId:activeBranch.branchId,snapshotId:manifest.snapshotId};
        }
      };
      const savePlans=()=>{archiveManualDetails();return storage.set(planStorageKey,shopping.serializePlansV2(plans,{mealMoment,activeArea,activeStore,activeBranchId:activeBranch.branchId,snapshotId:manifest.snapshotId,archivedDetails}));};
      const weeklyPlanMeals=()=>Object.values(plans).flatMap((plan)=>Object.values(plan)).map((slot)=>{
        if(weeklyUnavailableIds.has(slot.recipeId))return null;
        const meal=mealById(slot.recipeId),archived=archivedDetails[slot.recipeId];
        const useArchived=slot.origin==='manual'&&archiveInScope(archived)&&(!meal||archived.detailSha256!==meal.detailSha256);
        return useArchived?archivedMealCache.get(slot.recipeId)||null:meal;
      }).filter(Boolean);
      const basketFor=(items)=>shopping.basket(items.map(scaledMeal),{catalog,pantry:shoppingState.pantry,prices:shoppingState.prices,quantities:shoppingState.quantities.week||{}});
      const weekBasket=()=>basketFor(weeklyPlanMeals());
      const currentMeal=()=>modePool()[recommendationIndex]||null;
      const todayId=days[(new Date().getDay()+6)%7][0];
      const archiveInScope=(reference)=>reference&&reference.area===activeArea&&reference.store===activeStore&&reference.branchId===activeBranch.branchId&&typeof reference.snapshotId==='string';
      saveShopping();
      savePlans();

      function renderPlan() {
        byId('planColumnLabel').textContent=mealMoment;
        byId('weekGrid').innerHTML=days.map(([day,label])=>{
          const slot=plans[mealMoment][day];
          const meal=mealById(slot.recipeId);
          const archived=archivedDetails[slot.recipeId];
          const useArchived=slot.origin==='manual'&&archiveInScope(archived)&&(!meal||archived.detailSha256!==meal.detailSha256);
          const body=meal&&!useArchived
            ? '<div class="meal-card"><div class="meal-card-main"><div class="meal-card-title">'+escapeHtml(meal.title)+'</div><div class="meal-card-meta"><span>상세에서 시간 확인</span><span>'+escapeHtml(activeStore)+'</span></div></div><div class="meal-card-actions"><button class="icon-button detail-trigger" data-id="'+escapeHtml(meal.id)+'" aria-label="'+escapeHtml(meal.title)+' 레시피 보기">↗</button><button class="icon-button" data-replace-slot="'+day+'" data-replace-moment="'+mealMoment+'" aria-label="'+label+'요일 '+mealMoment+' 다음 후보 보기">×</button><button class="button button-small button-quiet" data-clear-slot="'+day+'" data-clear-moment="'+mealMoment+'">비우기</button></div></div>'
            : slot.recipeId
              ? '<div class="meal-card"><div class="meal-card-main"><div class="meal-card-title">'+escapeHtml(archived?.title||'저장한 메뉴')+'</div><div class="meal-card-meta"><span>현재 스냅샷 외 수동 선택</span></div></div><div class="meal-card-actions">'+(useArchived?'<button class="icon-button detail-trigger" data-id="'+escapeHtml(slot.recipeId)+'" data-archived="true" aria-label="보관된 상세 열기">↗</button>':'<span>'+(archived?'상세 복구 범위 불일치':'상세 복구 정보 없음')+'</span>')+'<button class="icon-button" data-replace-slot="'+day+'" data-replace-moment="'+mealMoment+'" aria-label="'+label+'요일 '+mealMoment+' 다음 후보 보기">×</button><button class="button button-small button-quiet" data-clear-slot="'+day+'" data-clear-moment="'+mealMoment+'">비우기</button></div></div>'
              : '<div class="slot-empty"><span>'+mealMoment+' 메뉴 없음</span>'+(slot.origin==='auto'?'<button class="button button-small button-quiet" data-clear-slot="'+day+'" data-clear-moment="'+mealMoment+'">비우기로 고정</button>':'')+'</div>';
          return '<div class="week-row"><div class="day">'+label+'</div><div class="slot" data-day="'+day+'">'+body+'</div></div>';
        }).join('');
        const cart=weekBasket();
        byId('totalCost').textContent=shopping.amount(cart);
        byId('totalCostNote').textContent=shopping.summary(cart)+' · 상세 수량은 레시피를 열어 확인하세요.';
      }

      function renderMenu() {
        const query=byId('menuSearch').value.trim().toLowerCase();
        const visible=meals.filter((meal)=>!query||[meal.title,...meal.sale,...meal.matchedOffers.map((offer)=>offer.productDe)].join(' ').toLowerCase().includes(query));
        byId('menuCount').textContent=String(meals.length);
        byId('offerCount').textContent=location.offers.length+'종';
        byId('menuCountNote').textContent=location.coverage?.sparse?'승인된 메뉴가 부족한 지점입니다.':'선택한 지점 스냅샷만 표시합니다.';
        byId('menuList').innerHTML=visible.length?visible.map((meal)=>'<article class="menu-item detail-trigger" data-id="'+escapeHtml(meal.id)+'" tabindex="0"><div class="menu-top"><h4 class="menu-title">'+escapeHtml(meal.title)+'</h4><span class="match">검증 후보</span></div><p class="menu-sub">할인 주재료: '+escapeHtml(meal.sale.join(' · ')||'상세 확인')+'</p><p class="menu-offer"><b>연결된 독어 상품</b><br>'+escapeHtml(meal.matchedOffers.map((offer)=>offer.productDe).join(' · '))+'</p><div class="menu-bottom"><span class="menu-price">조리 시간·전체 재료는 상세에서 확인</span></div></article>').join(''):'<p class="panel-copy">조건에 맞는 검증 메뉴가 없습니다.</p>';
        byId('offerDirectorySummary').textContent=activeStore+' 할인상품 독어 원문명 '+location.offers.length+'종';
        byId('offerDirectoryList').innerHTML=location.offers.map((offer)=>'<li><strong>'+escapeHtml(offer.identity.ingredientId)+'</strong><span lang="de">'+escapeHtml(offer.productDe)+'</span><small>'+escapeHtml(offer.pack)+' · '+shopping.euro(offer.priceCents)+'</small></li>').join('');
      }

      function renderToday() {
        const meal=currentMeal();
        byId('todayTitle').textContent=meal?meal.title:'현재 승인된 메뉴를 준비 중입니다';
        const evaluation=meal?recommendations.evaluateRecipeForMode(meal,recommendationContext(),preferences.mode):null;
        byId('todayReason').textContent=evaluation?.reasons[0]||(preferences.mode==='balanced'?'현재 기준에 맞는 다음 메뉴가 없습니다.':'선택한 기준에 필요한 검증 자료가 부족합니다.');
        byId('todayTime').textContent=meal?'상세 확인':'—';
        byId('todayMatch').textContent=meal?meal.sale.length+'개':'0개';
        byId('todayIngredients').innerHTML=meal?meal.sale.map((name)=>'<span class="ingredient-chip">'+escapeHtml(name)+'</span>').join(''):'';
        ['acceptToday','todayShopping'].forEach((id)=>{byId(id).disabled=!meal;});
        byId('nextRecommendation').disabled=modePool().length<2;
        byId('modeReadiness').textContent=preferences.mode==='balanced'
          ? '균형 모드는 현재 지점의 검증된 할인상품 연결과 메뉴 다양성을 기준으로 추천합니다.'
          : preferences.mode==='value'
            ? (modePool().length?'가성비 모드는 '+preferences.targetServings+'인분의 확인된 포장 구매 합계만 비교합니다.':'가성비 비교에 필요한 가격·포장 수량·원문 인분 자료가 부족합니다.')
            : (modePool().length?'출처가 확인된 1인분 영양 수치만 사용합니다.':'영양 근거가 완전한 메뉴가 없어 이 기준의 추천을 표시하지 않습니다.');
      }

      function bindPlanActions() {
        const grid=byId('weekGrid');
        if(grid.dataset.planActionsBound==='true')return;
        grid.dataset.planActionsBound='true';
        grid.addEventListener('click',(event)=>{
          const button=event.target.closest('[data-replace-slot],[data-clear-slot]');
          if(!button)return;
          if(button.dataset.replaceSlot) {
          const moment=button.dataset.replaceMoment,day=button.dataset.replaceSlot,slot=plans[moment][day];
          const pool=modePool();
          const currentIndex=pool.findIndex((meal)=>meal.id===slot.recipeId);
          const rotated=currentIndex<0?pool:[...pool.slice(currentIndex+1),...pool.slice(0,currentIndex+1)];
          const usedRecipeIds=Object.entries(plans).flatMap(([planMoment,plan])=>Object.entries(plan).filter(([planDay])=>planMoment!==moment||planDay!==day).map(([,entry])=>entry.recipeId)).filter(Boolean);
          const next=recommendations.nextCandidate(rotated,{dismissedRecipeIds:[...slot.dismissedRecipeIds,slot.recipeId].filter(Boolean),usedRecipeIds,mode:preferences.mode,context:recommendationContext()});
          plans[moment][day]=shopping.replaceAutoSlot(slot,next?.id||null);
          byId('planStatus').textContent=next?'다음 후보로 바꿨습니다.':'이 조건에서 남은 다음 후보가 없어 메뉴 칸을 비워두었습니다.';
          } else {
            plans[button.dataset.clearMoment][button.dataset.clearSlot]=shopping.clearPlanSlot();
            byId('planStatus').textContent='선택한 메뉴 칸을 직접 비웠습니다.';
          }
          savePlans();renderPlanAndBind();
        });
      }

      function renderPlanAndBind() {
        renderPlan();bindDetailTriggers();bindPlanActions();
      }

      function renderGroceries() {
        const progress=shopping.listProgress(shoppingState.list);
        byId('groceryProgress').textContent=shoppingState.list.length?'구매 완료 '+progress.completedCount+' / '+shoppingState.list.length+'종 · 남은 재료 '+progress.remainingCount+'종':'구매할 재료를 추가해주세요';
        byId('groceryCost').textContent=shoppingState.list.length?'남은 구매금액 · '+shopping.summary(progress):'';
        byId('groceryEmpty').hidden=shoppingState.list.length>0;
        const row=(item)=>'<li class="grocery-item'+(item.completed?' completed':'')+'"><label class="grocery-check"><input type="checkbox" data-grocery-key="'+escapeHtml(item.key)+'"'+(item.completed?' checked':'')+'><span><strong>'+escapeHtml(item.name)+'</strong><small>'+escapeHtml(item.store+' · '+item.pack+' × '+item.quantity)+'</small></span></label><span class="grocery-item-cost">'+(item.priceCents===null?'가격 미확인':shopping.euro(item.priceCents*item.quantity))+'</span><button class="icon-button" data-grocery-remove="'+escapeHtml(item.key)+'" aria-label="'+escapeHtml(item.name)+' 장보기 목록에서 삭제">×</button></li>';
        byId('groceryPending').innerHTML=shoppingState.list.filter((item)=>!item.completed).map(row).join('');
        byId('groceryCompleted').innerHTML=shoppingState.list.filter((item)=>item.completed).map(row).join('');
        byId('groceryCompletedSection').hidden=progress.completedCount===0;
        byId('groceryCompletedLabel').textContent='구매 완료 '+progress.completedCount+'종';
      }

      function ingredientName(label) {
        return String(label||'').trim().split(/\s+(?=(?:\d|약\b|조금\b|적당량|수량\s*미표기))/)[0].trim();
      }

      function hydrateMeal(meal,detail) {
        const compact=(value)=>String(value).replace(/\s+/g,'');
        const ingredientNames=(detail.detailIngredients||[]).map(ingredientName).filter(Boolean).map((name)=>meal.sale.find((primary)=>compact(primary)===compact(name))||name);
        Object.assign(meal,detail,{title:detail.title||meal.title});
        meal.missing=[...new Set([...(meal.missing||[]),...ingredientNames.filter((name)=>!meal.sale.includes(name))])];
        return meal;
      }

      async function detailFor(reference,isCurrent) {
        const cacheKey=reference.detailPath+'|'+reference.detailSha256;
        if(!detailCache.has(cacheKey)) {
          const pending=(isCurrent?loader.loadRecipeDetail(location,reference.sourceRecipeId):loader.loadRecipeDetailReference(reference)).catch((error)=>{detailCache.delete(cacheKey);throw error;});
          detailCache.set(cacheKey,pending);
        }
        return detailCache.get(cacheKey);
      }

      async function hydratePlannedMeals() {
        const plannedSlots=Object.values(plans).flatMap((plan)=>Object.values(plan)).filter((slot)=>slot.recipeId);
        weeklyUnavailableIds.clear();
        const work=new Map();
        for(const slot of plannedSlots) {
          const meal=mealById(slot.recipeId),archived=archivedDetails[slot.recipeId];
          const useArchived=slot.origin==='manual'&&archiveInScope(archived)&&(!meal||archived.detailSha256!==meal.detailSha256);
          const reference=useArchived?archived:meal;
          if(!reference) { weeklyUnavailableIds.add(slot.recipeId); continue; }
          work.set(reference.detailPath+'|'+reference.detailSha256,{slot,meal,reference,useArchived});
        }
        await Promise.all([...work.values()].map(async(entry)=>{
          try {
            const detail=await detailFor(entry.reference,!entry.useArchived);
            if(entry.useArchived) {
              const archivedMeal=hydrateMeal({id:entry.slot.recipeId,store:activeStore,sale:[],missing:[],requiredAmounts:{},matchedOffers:[]},detail);
              archivedMealCache.set(entry.slot.recipeId,archivedMeal);
            } else hydrateMeal(entry.meal,detail);
          } catch { weeklyUnavailableIds.add(entry.slot.recipeId); }
        }));
        return {unavailableCount:weeklyUnavailableIds.size};
      }

      function renderDetailShopping() {
        const cart=selectedMeal?basketFor([selectedMeal]):basketFor([]);
        byId('detailIngredients').innerHTML=cart.items.length?cart.items.map((item)=>'<li class="shopping-item'+(item.owned?' owned':'')+'"><div class="shopping-item-head"><strong>'+escapeHtml(item.name)+'</strong><label><input type="checkbox" data-shopping-key="'+escapeHtml(item.key)+'" data-shopping-field="owned"'+(item.owned?' checked':'')+'> 집에 있음</label></div><small>'+escapeHtml((item.product?item.product+' · ':'')+item.pack)+'</small><div class="shopping-controls"><strong>'+(item.owned?'구매 제외':item.subtotalCents===null?'가격 미확인':shopping.euro(item.subtotalCents))+'</strong></div></li>').join(''):'<li class="footer-note">구매할 재료가 없습니다.</li>';
        const evidence=(selectedMeal?.matchedOffers||[]).map((offer)=>offer.evidenceUrl?'<a href="'+escapeHtml(offer.evidenceUrl)+'" target="_blank" rel="noreferrer">'+escapeHtml(offer.productDe)+' 할인 근거</a>':escapeHtml(offer.productDe)).join(' · ');
        byId('shoppingSource').innerHTML=evidence||'선택한 스냅샷의 검증된 할인상품 기준입니다.';
        byId('shoppingTitle').textContent='구매할 재료 · '+cart.purchaseCount+'종';
        byId('shoppingTotalLabel').textContent=cart.unknownCount?'가격 확인된 재료 소계':'구매할 재료 총액';
        byId('shoppingTotal').textContent=shopping.amount(cart);
        byId('shoppingNote').textContent=shopping.summary(cart);
      }

      async function openDetail(id,useArchived=false) {
        const requestVersion=++detailRequestVersion;
        try {
          const meal=mealById(id);
          const archived=archivedDetails[id];
          if(useArchived&&!archiveInScope(archived)) throw new Error('Archived recipe detail scope mismatch');
          if(!meal&&(!archived||!archiveInScope(archived))) throw new Error('Archived recipe detail unavailable');
          const reference=useArchived||!meal?archived:meal;
          const detail=await detailFor(reference,reference===meal);
          const baseMeal=reference===meal?meal:{id,store:activeStore,sale:[],missing:[],requiredAmounts:{},matchedOffers:[]};
          const hydrated=hydrateMeal(baseMeal,detail);
          if(requestVersion!==detailRequestVersion)return hydrated;
          selectedMeal=hydrated;
          byId('detailTitle').textContent=selectedMeal.title;
          byId('detailIntro').textContent='검증된 원문 정보를 바탕으로 정리한 상세입니다.';
          byId('recipeAmounts').innerHTML=(detail.detailIngredients||[]).map((item)=>'<li>'+escapeHtml(item)+'</li>').join('');
          byId('detailSteps').innerHTML=(detail.steps||[]).map((step)=>'<li>'+escapeHtml(step)+'</li>').join('');
          byId('recipeSource').href=detail.sourceUrl||'#';
          byId('recipeProvenance').textContent='원문: '+(detail.sourceTitle||'상세 참조')+' · 작성자: '+(detail.sourceAuthor||'미상');
          byId('addShoppingItems').disabled=false;
          byId('eatFromDetail').disabled=false;
          byId('addFromDetail').disabled=!meal;
          renderDetailShopping();
          byId('detailDrawer').classList.add('open');
          return selectedMeal;
        } catch(error) {
          if(requestVersion!==detailRequestVersion)return null;
          error.detailRequestVersion=requestVersion;
          throw error;
        }
      }

      function bindDetailTriggers() {
        document.querySelectorAll('.detail-trigger').forEach((element)=>{
          if(element.dataset.detailBound==='true')return;
          element.dataset.detailBound='true';
          element.addEventListener('click',()=>{requestDetail(element.dataset.id,element.dataset.archived==='true');});
        });
      }

      function showDetailError() {
        detailRequestVersion+=1;
        selectedMeal=null;
        byId('detailTitle').textContent='레시피 상세를 열 수 없습니다';
        byId('detailIntro').textContent='저장된 상세의 지점 또는 해시를 검증하지 못했습니다.';
        for(const id of ['addShoppingItems','eatFromDetail','addFromDetail'])byId(id).disabled=true;
        byId('detailDrawer').classList.add('open');
      }

      const requestDetail=(id,useArchived=false)=>openDetail(id,useArchived).catch((error)=>{if(error.detailRequestVersion===detailRequestVersion)showDetailError(error);return null;});

      function closeDetail() {
        detailRequestVersion+=1;
        byId('detailDrawer').classList.remove('open');
      }

      document.querySelectorAll('input[name="recommendationMode"]').forEach((input)=>{input.checked=input.value===preferences.mode;});
      byId('targetServings').value=String(preferences.targetServings);
      renderToday();renderPlanAndBind();renderMenu();renderGroceries();
      byId('sourceStatus').textContent=location.coverage?.sparse?activeArea+' · '+activeStore+' · 승인 메뉴 준비 중':activeArea+' · '+activeStore+' · 검증 메뉴 '+meals.length+'개';
      byId('sourceCheck').textContent='· 스냅샷 '+manifest.weekStart+' · '+(activeBranch.branch||activeBranch.branchId);
      byId('sourceStatus').dataset.snapshotState=location.coverage?.sparse?'sparse':'ready';
      byId('savePlan').addEventListener('click',savePlans);
      const refreshForPreferences=()=>{
        closeDetail();selectedMeal=null;
        for(const id of ['addShoppingItems','eatFromDetail','addFromDetail'])byId(id).disabled=true;
        autoPlans=buildAutoPlans(plans);
        const refreshed=shopping.refreshAutoPlans(plans,autoPlans);
        for(const moment of Object.keys(refreshed))plans[moment]=refreshed[moment];
        recommendationIndex=0;
        storage.set(preferenceStorageKey,recommendations.serializePreferences(preferences));
        renderToday();renderPlanAndBind();savePlans();
      };
      document.querySelectorAll('input[name="recommendationMode"]').forEach((input)=>input.addEventListener('change',()=>{if(input.checked){preferences.mode=input.value;refreshForPreferences();}}));
      byId('targetServings').addEventListener('change',(event)=>{preferences.targetServings=Number(event.target.value);refreshForPreferences();});
      byId('autoPlan').addEventListener('click',()=>{autoPlans=buildAutoPlans(plans);const refreshed=shopping.refreshAutoPlans(plans,autoPlans);for(const moment of Object.keys(refreshed))plans[moment]=refreshed[moment];renderPlanAndBind();savePlans();});
      byId('clearPlan').addEventListener('click',()=>{plans[mealMoment]=Object.fromEntries(days.map(([day])=>[day,shopping.clearPlanSlot()]));renderPlanAndBind();savePlans();});
      document.querySelectorAll('[data-moment]').forEach((button)=>button.addEventListener('click',()=>{mealMoment=button.dataset.moment;renderToday();renderPlanAndBind();}));
      const acceptMeal=(meal)=>{if(!meal)return;plans[mealMoment][todayId]=shopping.normalizePlanSlot(meal.id,'manual');savePlans();renderPlanAndBind();};
      const acceptCurrent=()=>acceptMeal(currentMeal());
      byId('acceptToday').addEventListener('click',acceptCurrent);
      byId('todayShopping').addEventListener('click',()=>{const meal=currentMeal();if(meal)requestDetail(meal.id);});
      byId('nextRecommendation').addEventListener('click',()=>{const pool=modePool();if(pool.length<2)return;recommendationIndex=(recommendationIndex+1)%pool.length;renderToday();});
      byId('manualPick').addEventListener('click',()=>byId('library').scrollIntoView({behavior:'smooth'}));
      byId('shoppingList').addEventListener('click',()=>byId('groceries').scrollIntoView({behavior:'smooth'}));
      byId('prepareShopping').addEventListener('click',async()=>{const button=byId('prepareShopping');button.disabled=true;try{const result=await hydratePlannedMeals();shoppingState.list=shopping.addToList(shoppingState.list,weekBasket());saveShopping();renderGroceries();byId('grocerySaveState').textContent=result.unavailableCount?'검증하지 못한 메뉴 '+result.unavailableCount+'개를 제외하고 확인된 재료를 저장했습니다.':'계획한 메뉴의 상세 재료까지 확인해 저장했습니다.';byId('groceries').scrollIntoView({behavior:'smooth'});}finally{button.disabled=false;}});
      byId('addShoppingItems').addEventListener('click',()=>{if(!selectedMeal)return;shoppingState.list=shopping.addToList(shoppingState.list,basketFor([selectedMeal]));saveShopping();renderGroceries();});
      byId('addFromDetail').addEventListener('click',()=>{if(!selectedMeal)return;const meal=mealById(selectedMeal.id);if(meal){plans[mealMoment][todayId]=shopping.normalizePlanSlot(meal.id,'manual');savePlans();renderPlanAndBind();}});
      byId('eatFromDetail').addEventListener('click',()=>acceptMeal(selectedMeal));
      byId('markEaten').disabled=true;
      byId('markEaten').title='먹은 기록은 새 추천 화면에서 다시 연결됩니다.';
      document.querySelectorAll('.filter:not([data-filter="all"])').forEach((button)=>{button.disabled=true;button.title='상세를 연 뒤 확인할 수 있습니다.';});
      byId('menuSearch').addEventListener('input',()=>{renderMenu();bindDetailTriggers();});
      byId('closeDetail').addEventListener('click',closeDetail);
      byId('closeDetailSecondary').addEventListener('click',closeDetail);
      byId('detailIngredients').addEventListener('change',(event)=>{
        const input=event.target.closest('[data-shopping-field="owned"]');
        if(!input)return;
        if(input.checked){shoppingState.pantry.add(input.dataset.shoppingKey);shoppingState.list=shoppingState.list.filter((item)=>item.key!==input.dataset.shoppingKey);}
        else shoppingState.pantry.delete(input.dataset.shoppingKey);
        saveShopping();renderDetailShopping();renderGroceries();renderPlanAndBind();
      });
      byId('groceries').addEventListener('change',(event)=>{
        const input=event.target.closest('[data-grocery-key]');
        if(!input)return;
        const item=shoppingState.list.find((entry)=>entry.key===input.dataset.groceryKey);
        if(!item)return;
        item.completed=input.checked;
        saveShopping();renderGroceries();
      });
      byId('groceries').addEventListener('click',(event)=>{
        const button=event.target.closest('[data-grocery-remove]');
        if(!button)return;
        shoppingState.list=shoppingState.list.filter((item)=>item.key!==button.dataset.groceryRemove);
        saveShopping();renderGroceries();
      });
      const runtime={status:location.coverage?.sparse?'sparse':'ready',manifest,location,recipes:meals,plans,shoppingState,shoppingStorageKey,planStorageKey,weeklyPlanMeals,weekBasket,openDetail,requestDetail,saveShopping,savePlans};
      window.mealSnapshotRuntime=runtime;
      document.dispatchEvent(new CustomEvent('meal-snapshot-ready',{detail:runtime}));
      return runtime;
    } catch(error) {
      byId('sourceStatus').textContent='이번 주 검증 자료를 불러올 수 없습니다';
      byId('sourceStatus').dataset.snapshotState='unavailable';
      const runtime={status:'unavailable',error};
      window.mealSnapshotRuntime=runtime;
      return runtime;
    }
  }

  window.MealRecipeData = {legacyEnabled, fromSnapshotLocation, offerCatalogFromSnapshot, selectSnapshotLocation, acceptLegacyScopedPayload, startSnapshotApp};
}());
