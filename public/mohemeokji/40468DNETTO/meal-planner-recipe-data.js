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
          validFrom:offer.validFrom,validThrough:offer.validThrough,source:offer.evidenceUrl||''
        }];
      }));
      return ({
      id: storeSlug(location.store) + '-recipe-' + recipe.sourceRecipeId,
      sourceRecipeId: recipe.sourceRecipeId,
      store: location.store,
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

  async function startSnapshotApp() {
    const byId=(id)=>document.getElementById(id);
    const loader=window.MealDataLoader;
    const shopping=window.MealShopping;
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
      const oldShoppingStorageKey='choi01-shopping-v1:'+activeArea+':'+activeStore;
      const oldPlanStorageKey='choi01-today-meal-plan:'+activeArea+':'+activeStore;
      const branchShopping=storage.get(shoppingStorageKey);
      const savedShopping=safeJson(branchShopping)?branchShopping:storage.get(oldShoppingStorageKey);
      const shoppingState=shopping.restoreState(savedShopping,manifest.snapshotId,{stores:[activeStore]});
      const autoSlots=Object.fromEntries(days.map(([day],index)=>[day,shopping.normalizePlanSlot({recipeId:meals[index]?.id||null,origin:'auto',dismissedRecipeIds:[]},'auto')]));
      const autoPlans={'점심':autoSlots,'저녁':autoSlots};
      const branchPlan=storage.get(planStorageKey);
      const oldScopedPlan=storage.get(oldPlanStorageKey);
      const globalPlan=storage.get('choi01-today-meal-plan');
      const branchPlanData=safeJson(branchPlan);
      const branchMatches=branchPlanData&&(!branchPlanData.activeArea||branchPlanData.activeArea===activeArea)&&(!branchPlanData.activeStore||branchPlanData.activeStore===activeStore)&&(!branchPlanData.activeBranchId||branchPlanData.activeBranchId===activeBranch.branchId);
      const scopedPlanData=safeJson(oldScopedPlan);
      const globalPlanData=safeJson(globalPlan);
      const scopedMatches=scopedPlanData&&scopedPlanData.activeArea===activeArea&&scopedPlanData.activeStore===activeStore;
      const globalMatches=globalPlanData&&globalPlanData.activeArea===activeArea&&globalPlanData.activeStore===activeStore;
      const savedPlan=branchMatches?branchPlan:(scopedMatches?oldScopedPlan:(globalMatches?globalPlan:null));
      const savedPlanData=safeJson(savedPlan)||{};
      const restored=shopping.restorePlansV2(savedPlan,{area:activeArea,store:activeStore,branchId:activeBranch.branchId,snapshotId:manifest.snapshotId,days:days.map(([day])=>day),moments:['점심','저녁'],availableRecipeIds:meals.map((meal)=>meal.id),autoPlans});
      let plans=shopping.refreshAutoPlans(restored.plans,autoPlans);
      for(const plan of Object.values(plans)) {
        const manualIds=new Set(Object.values(plan).filter((slot)=>slot.origin==='manual'&&slot.recipeId).map((slot)=>slot.recipeId));
        const candidates=meals.filter((meal)=>!manualIds.has(meal.id));
        let candidateIndex=0;
        for(const [day] of days) if(plan[day].origin==='auto') plan[day]=shopping.normalizePlanSlot({recipeId:candidates[candidateIndex++]?.id||null,origin:'auto',dismissedRecipeIds:plan[day].dismissedRecipeIds},'auto');
      }
      let mealMoment=['점심','저녁'].includes(savedPlanData.mealMoment)?savedPlanData.mealMoment:'저녁';
      const detailCache=new Map();
      const archivedDetails=savedPlanData.archivedDetails&&typeof savedPlanData.archivedDetails==='object'&&!Array.isArray(savedPlanData.archivedDetails)?{...savedPlanData.archivedDetails}:{};
      let selectedMeal=null;
      let recommendationIndex=0;

      const saveShopping=()=>storage.set(shoppingStorageKey,shopping.serializeState(shoppingState,manifest.snapshotId));
      const archiveManualDetails=()=>{
        for(const plan of Object.values(plans)) for(const slot of Object.values(plan)) {
          if(slot.origin!=='manual'||!slot.recipeId) continue;
          const meal=mealById(slot.recipeId);
          if(meal) archivedDetails[slot.recipeId]={sourceRecipeId:meal.sourceRecipeId,title:meal.title,detailPath:meal.detailPath,detailSha256:meal.detailSha256};
        }
      };
      const savePlans=()=>{archiveManualDetails();return storage.set(planStorageKey,shopping.serializePlansV2(plans,{mealMoment,activeArea,activeStore,activeBranchId:activeBranch.branchId,snapshotId:manifest.snapshotId,archivedDetails}));};
      const planMeals=()=>Object.values(plans[mealMoment]).map((slot)=>mealById(slot.recipeId)).filter(Boolean);
      const basketFor=(items)=>shopping.basket(items,{catalog,pantry:shoppingState.pantry,prices:shoppingState.prices,quantities:shoppingState.quantities.week||{}});
      const weekBasket=()=>basketFor(planMeals());
      const currentMeal=()=>meals[recommendationIndex]||null;
      const todayId=days[(new Date().getDay()+6)%7][0];
      saveShopping();
      savePlans();

      function renderPlan() {
        byId('planColumnLabel').textContent=mealMoment;
        byId('weekGrid').innerHTML=days.map(([day,label])=>{
          const slot=plans[mealMoment][day];
          const meal=mealById(slot.recipeId);
          const body=meal
            ? '<div class="meal-card"><div class="meal-card-main"><div class="meal-card-title">'+escapeHtml(meal.title)+'</div><div class="meal-card-meta"><span>상세에서 시간 확인</span><span>'+escapeHtml(activeStore)+'</span></div></div><button class="icon-button detail-trigger" data-id="'+escapeHtml(meal.id)+'">↗</button></div>'
            : slot.recipeId
              ? '<div class="meal-card"><div class="meal-card-title">'+escapeHtml(archivedDetails[slot.recipeId]?.title||'저장한 메뉴')+'</div><div class="meal-card-meta"><span>현재 스냅샷 외 수동 선택</span></div>'+(archivedDetails[slot.recipeId]?'<button class="icon-button detail-trigger" data-id="'+escapeHtml(slot.recipeId)+'" aria-label="보관된 상세 열기">↗</button>':'<span>상세 복구 정보 없음</span>')+'</div>'
              : '<div class="slot-empty"><span>'+mealMoment+' 메뉴 없음</span></div>';
          return '<div class="week-row"><div class="day">'+label+'</div><div class="slot" data-day="'+day+'">'+body+'</div></div>';
        }).join('');
        const cart=weekBasket();
        byId('totalCost').textContent=shopping.amount(cart);
        byId('totalCostNote').textContent=shopping.summary(cart)+' · 상세 수량은 레시피를 열어 확인하세요.';
      }

      function renderMenu() {
        byId('menuCount').textContent=String(meals.length);
        byId('offerCount').textContent=location.offers.length+'종';
        byId('menuCountNote').textContent=location.coverage?.sparse?'승인된 메뉴가 부족한 지점입니다.':'선택한 지점 스냅샷만 표시합니다.';
        byId('menuList').innerHTML=meals.length?meals.map((meal)=>'<article class="menu-item detail-trigger" data-id="'+escapeHtml(meal.id)+'" tabindex="0"><div class="menu-top"><h4 class="menu-title">'+escapeHtml(meal.title)+'</h4><span class="match">검증 후보</span></div><p class="menu-sub">할인 주재료: '+escapeHtml(meal.sale.join(' · ')||'상세 확인')+'</p><p class="menu-offer"><b>연결된 독어 상품</b><br>'+escapeHtml(meal.matchedOffers.map((offer)=>offer.productDe).join(' · '))+'</p><div class="menu-bottom"><span class="menu-price">조리 시간·전체 재료는 상세에서 확인</span></div></article>').join(''):'<p class="panel-copy">이 지점은 현재 승인된 메뉴를 준비 중입니다.</p>';
        byId('offerDirectorySummary').textContent=activeStore+' 할인상품 독어 원문명 '+location.offers.length+'종';
        byId('offerDirectoryList').innerHTML=location.offers.map((offer)=>'<li><strong>'+escapeHtml(offer.identity.ingredientId)+'</strong><span lang="de">'+escapeHtml(offer.productDe)+'</span><small>'+escapeHtml(offer.pack)+' · '+shopping.euro(offer.priceCents)+'</small></li>').join('');
      }

      function renderToday() {
        const meal=currentMeal();
        byId('todayTitle').textContent=meal?meal.title:'현재 승인된 메뉴를 준비 중입니다';
        byId('todayReason').textContent=meal?'선택한 지점의 검증 스냅샷에서 추천했습니다.':'다른 지점을 선택하거나 다음 갱신을 확인해주세요.';
        byId('todayTime').textContent=meal?'상세 확인':'—';
        byId('todayMatch').textContent=meal?meal.sale.length+'개':'0개';
        byId('todayIngredients').innerHTML=meal?meal.sale.map((name)=>'<span class="ingredient-chip">'+escapeHtml(name)+'</span>').join(''):'';
        ['acceptToday','todayShopping'].forEach((id)=>{byId(id).disabled=!meal;});
        byId('nextRecommendation').disabled=meals.length<2;
      }

      function renderGroceries() {
        const progress=shopping.listProgress(shoppingState.list);
        byId('groceryProgress').textContent=shoppingState.list.length?'구매 완료 '+progress.completedCount+' / '+shoppingState.list.length+'종':'구매할 재료를 추가해주세요';
        byId('groceryEmpty').hidden=shoppingState.list.length>0;
      }

      async function openDetail(id) {
        const meal=mealById(id);
        const archived=archivedDetails[id];
        if(!meal&&!archived) return null;
        const sourceRecipeId=meal?.sourceRecipeId||archived.sourceRecipeId;
        let detail=detailCache.get(sourceRecipeId);
        if(!detail) {
          detail=meal?await loader.loadRecipeDetail(location,sourceRecipeId):await loader.loadRecipeDetailReference(archived);
          detailCache.set(sourceRecipeId,detail);
        }
        selectedMeal={...(meal||{id,store:activeStore,sale:[],missing:[],requiredAmounts:{}}),...detail,title:detail.title||meal?.title||archived.title};
        byId('detailTitle').textContent=selectedMeal.title;
        byId('detailIntro').textContent='검증된 원문 정보를 바탕으로 정리한 상세입니다.';
        byId('recipeAmounts').innerHTML=(detail.detailIngredients||[]).map((item)=>'<li>'+escapeHtml(item)+'</li>').join('');
        byId('detailSteps').innerHTML=(detail.steps||[]).map((step)=>'<li>'+escapeHtml(step)+'</li>').join('');
        byId('recipeSource').href=detail.sourceUrl||'#';
        byId('recipeProvenance').textContent='원문: '+(detail.sourceTitle||'상세 참조')+' · 작성자: '+(detail.sourceAuthor||'미상');
        byId('detailDrawer').classList.add('open');
        return selectedMeal;
      }

      function bindDetailTriggers() {
        document.querySelectorAll('.detail-trigger').forEach((element)=>element.addEventListener('click',()=>{openDetail(element.dataset.id).catch(()=>{byId('detailIntro').textContent='레시피 상세를 검증할 수 없어 열지 않았습니다.';});}));
      }

      renderToday();renderPlan();renderMenu();renderGroceries();bindDetailTriggers();
      byId('sourceStatus').textContent=location.coverage?.sparse?activeArea+' · '+activeStore+' · 승인 메뉴 준비 중':activeArea+' · '+activeStore+' · 검증 메뉴 '+meals.length+'개';
      byId('sourceCheck').textContent='· 스냅샷 '+manifest.weekStart+' · '+(activeBranch.branch||activeBranch.branchId);
      byId('sourceStatus').dataset.snapshotState=location.coverage?.sparse?'sparse':'ready';
      byId('savePlan').addEventListener('click',savePlans);
      byId('autoPlan').addEventListener('click',()=>{plans=shopping.refreshAutoPlans(plans,autoPlans);renderPlan();bindDetailTriggers();});
      byId('clearPlan').addEventListener('click',()=>{plans[mealMoment]=Object.fromEntries(days.map(([day])=>[day,shopping.normalizePlanSlot(null,'manual')]));renderPlan();});
      document.querySelectorAll('[data-moment]').forEach((button)=>button.addEventListener('click',()=>{mealMoment=button.dataset.moment;renderToday();renderPlan();bindDetailTriggers();}));
      const acceptCurrent=()=>{const meal=currentMeal();if(!meal)return;plans[mealMoment][todayId]=shopping.normalizePlanSlot(meal.id,'manual');savePlans();renderPlan();bindDetailTriggers();};
      byId('acceptToday').addEventListener('click',acceptCurrent);
      byId('todayShopping').addEventListener('click',()=>{const meal=currentMeal();if(meal)openDetail(meal.id).catch(()=>{byId('detailIntro').textContent='레시피 상세를 검증할 수 없어 열지 않았습니다.';});});
      byId('nextRecommendation').addEventListener('click',()=>{if(meals.length<2)return;recommendationIndex=(recommendationIndex+1)%meals.length;renderToday();});
      byId('manualPick').addEventListener('click',()=>byId('library').scrollIntoView({behavior:'smooth'}));
      for(const id of ['shoppingList','prepareShopping']) byId(id).addEventListener('click',()=>byId('groceries').scrollIntoView({behavior:'smooth'}));
      byId('addShoppingItems').addEventListener('click',()=>{if(!selectedMeal)return;shoppingState.list=shopping.addToList(shoppingState.list,basketFor([selectedMeal]));saveShopping();renderGroceries();});
      byId('addFromDetail').addEventListener('click',()=>{if(!selectedMeal)return;const meal=mealById(selectedMeal.id);if(meal){plans[mealMoment][todayId]=shopping.normalizePlanSlot(meal.id,'manual');savePlans();renderPlan();bindDetailTriggers();}});
      byId('eatFromDetail').addEventListener('click',acceptCurrent);
      byId('markEaten').disabled=true;
      byId('markEaten').title='먹은 기록은 새 추천 화면에서 다시 연결됩니다.';
      document.querySelectorAll('.filter:not([data-filter="all"])').forEach((button)=>{button.disabled=true;button.title='상세를 연 뒤 확인할 수 있습니다.';});
      byId('closeDetail').addEventListener('click',()=>byId('detailDrawer').classList.remove('open'));
      byId('closeDetailSecondary').addEventListener('click',()=>byId('detailDrawer').classList.remove('open'));
      const runtime={status:location.coverage?.sparse?'sparse':'ready',manifest,location,recipes:meals,plans,shoppingState,shoppingStorageKey,planStorageKey,weekBasket,openDetail,saveShopping,savePlans};
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

  window.MealRecipeData = {legacyEnabled, fromSnapshotLocation, offerCatalogFromSnapshot, selectSnapshotLocation, startSnapshotApp};
}());
