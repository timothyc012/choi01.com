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
      const offerCatalog=Object.fromEntries([...grouped].filter(([,offers])=>offers.length===1).map(([ingredientId,[offer]])=>[ingredientId,{
        offerId:offer.offerId,product:offer.productDe,pack:offer.pack,priceCents:offer.priceCents,
        validFrom:offer.validFrom,validThrough:offer.validThrough,source:offer.evidenceUrl||''
      }]));
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
    const catalog=Object.fromEntries([...grouped].filter(([,offers]) => offers.length === 1).map(([ingredientId,[offer]]) => [ingredientId,normalizeOffer(offer)]));
    catalog.offersById=Object.fromEntries((location?.offers||[]).map((offer)=>[offer.offerId,normalizeOffer(offer)]));
    catalog.offersByIngredient=Object.fromEntries([...grouped].map(([ingredientId,offers])=>[ingredientId,offers.map(normalizeOffer)]));
    return catalog;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g,(character)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[character]));
  }

  async function startSnapshotApp() {
    const byId=(id)=>document.getElementById(id);
    const loader=window.MealDataLoader;
    const shopping=window.MealShopping;
    const params=new URLSearchParams(window.location.search);
    const days=[['mon','월'],['tue','화'],['wed','수'],['thu','목'],['fri','금'],['sat','토'],['sun','일']];
    byId('sourceStatus').textContent='검증된 이번 주 자료를 불러오는 중입니다';
    try {
      const manifest=await loader.loadCurrentSnapshot();
      const locations=manifest.locations.slice().sort((a,b)=>[a.postcode,a.store,a.branchId].join('|').localeCompare([b.postcode,b.store,b.branchId].join('|')));
      const postcodes=[...new Set(locations.map((entry)=>entry.postcode))];
      const activeArea=postcodes.includes(params.get('postcode'))?params.get('postcode'):postcodes[0];
      const stores=[...new Set(locations.filter((entry)=>entry.postcode===activeArea).map((entry)=>entry.store))].sort();
      const activeStore=stores.includes(params.get('store'))?params.get('store'):stores[0];
      const branches=locations.filter((entry)=>entry.postcode===activeArea&&entry.store===activeStore).sort((a,b)=>a.branchId.localeCompare(b.branchId));
      const activeBranch=branches.find((entry)=>entry.branchId===params.get('branch'))||branches[0];
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
      const shoppingState=shopping.restoreState(localStorage.getItem(shoppingStorageKey),manifest.snapshotId,{stores:[activeStore]});
      const autoSlots=Object.fromEntries(days.map(([day],index)=>[day,shopping.normalizePlanSlot({recipeId:meals[index]?.id||null,origin:'auto',dismissedRecipeIds:[]},'auto')]));
      const autoPlans={'점심':autoSlots,'저녁':autoSlots};
      const savedPlan=localStorage.getItem(planStorageKey);
      const restored=shopping.restorePlansV2(savedPlan,{area:activeArea,store:activeStore,branchId:activeBranch.branchId,days:days.map(([day])=>day),moments:['점심','저녁'],availableRecipeIds:meals.map((meal)=>meal.id),autoPlans});
      let plans=shopping.refreshAutoPlans(restored.plans,autoPlans);
      let mealMoment=['점심','저녁'].includes(JSON.parse(savedPlan||'null')?.mealMoment)?JSON.parse(savedPlan).mealMoment:'저녁';
      const detailCache=new Map();
      let selectedMeal=null;

      const saveShopping=()=>localStorage.setItem(shoppingStorageKey,shopping.serializeState(shoppingState,manifest.snapshotId));
      const savePlans=()=>localStorage.setItem(planStorageKey,shopping.serializePlansV2(plans,{mealMoment,activeArea,activeStore,activeBranchId:activeBranch.branchId,snapshotId:manifest.snapshotId}));
      const planMeals=()=>Object.values(plans[mealMoment]).map((slot)=>mealById(slot.recipeId)).filter(Boolean);
      const basketFor=(items)=>shopping.basket(items,{catalog,pantry:shoppingState.pantry,prices:shoppingState.prices,quantities:shoppingState.quantities.week||{}});

      function renderPlan() {
        byId('planColumnLabel').textContent=mealMoment;
        byId('weekGrid').innerHTML=days.map(([day,label])=>{
          const slot=plans[mealMoment][day];
          const meal=mealById(slot.recipeId);
          const body=meal
            ? '<div class="meal-card"><div class="meal-card-main"><div class="meal-card-title">'+escapeHtml(meal.title)+'</div><div class="meal-card-meta"><span>상세에서 시간 확인</span><span>'+escapeHtml(activeStore)+'</span></div></div><button class="icon-button detail-trigger" data-id="'+escapeHtml(meal.id)+'">↗</button></div>'
            : slot.recipeId
              ? '<div class="meal-card"><div class="meal-card-title">저장한 메뉴 · 현재 상세 없음</div></div>'
              : '<div class="slot-empty"><span>'+mealMoment+' 메뉴 없음</span></div>';
          return '<div class="week-row"><div class="day">'+label+'</div><div class="slot" data-day="'+day+'">'+body+'</div></div>';
        }).join('');
        const cart=basketFor(planMeals());
        byId('totalCost').textContent=shopping.amount(cart);
        byId('totalCostNote').textContent=shopping.summary(cart)+' · 상세 수량은 레시피를 열어 확인하세요.';
      }

      function renderMenu() {
        byId('menuCount').textContent=String(meals.length);
        byId('offerCount').textContent=location.offers.length+'종';
        byId('menuCountNote').textContent=location.coverage?.sparse?'승인된 메뉴가 부족한 지점입니다.':'선택한 지점 스냅샷만 표시합니다.';
        byId('menuList').innerHTML=meals.length?meals.map((meal)=>'<article class="menu-item detail-trigger" data-id="'+escapeHtml(meal.id)+'" tabindex="0"><div class="menu-top"><h4 class="menu-title">'+escapeHtml(meal.title)+'</h4><span class="match">검증 후보</span></div><p class="menu-sub">할인 주재료: '+escapeHtml(meal.sale.join(' · ')||'상세 확인')+'</p><div class="menu-bottom"><span class="menu-price">조리 시간·전체 재료는 상세에서 확인</span></div></article>').join(''):'<p class="panel-copy">이 지점은 현재 승인된 메뉴를 준비 중입니다.</p>';
        byId('offerDirectorySummary').textContent=activeStore+' 할인상품 독어 원문명 '+location.offers.length+'종';
        byId('offerDirectoryList').innerHTML=location.offers.map((offer)=>'<li><strong>'+escapeHtml(offer.identity.ingredientId)+'</strong><span lang="de">'+escapeHtml(offer.productDe)+'</span><small>'+escapeHtml(offer.pack)+' · '+shopping.euro(offer.priceCents)+'</small></li>').join('');
      }

      function renderToday() {
        const meal=planMeals()[0]||meals[0]||null;
        byId('todayTitle').textContent=meal?meal.title:'현재 승인된 메뉴를 준비 중입니다';
        byId('todayReason').textContent=meal?'선택한 지점의 검증 스냅샷에서 추천했습니다.':'다른 지점을 선택하거나 다음 갱신을 확인해주세요.';
        byId('todayTime').textContent=meal?'상세 확인':'—';
        byId('todayMatch').textContent=meal?meal.sale.length+'개':'0개';
        byId('todayIngredients').innerHTML=meal?meal.sale.map((name)=>'<span class="ingredient-chip">'+escapeHtml(name)+'</span>').join(''):'';
        ['acceptToday','todayShopping','nextRecommendation'].forEach((id)=>{byId(id).disabled=!meal;});
      }

      function renderGroceries() {
        const progress=shopping.listProgress(shoppingState.list);
        byId('groceryProgress').textContent=shoppingState.list.length?'구매 완료 '+progress.completedCount+' / '+shoppingState.list.length+'종':'구매할 재료를 추가해주세요';
        byId('groceryEmpty').hidden=shoppingState.list.length>0;
      }

      async function openDetail(id) {
        const meal=mealById(id);
        if(!meal) return null;
        let detail=detailCache.get(meal.sourceRecipeId);
        if(!detail) {
          detail=await loader.loadRecipeDetail(location,meal.sourceRecipeId);
          detailCache.set(meal.sourceRecipeId,detail);
        }
        selectedMeal={...meal,...detail,title:detail.title||meal.title};
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
      byId('closeDetail').addEventListener('click',()=>byId('detailDrawer').classList.remove('open'));
      byId('closeDetailSecondary').addEventListener('click',()=>byId('detailDrawer').classList.remove('open'));
      const runtime={status:location.coverage?.sparse?'sparse':'ready',manifest,location,recipes:meals,plans,shoppingState,shoppingStorageKey,planStorageKey,openDetail,saveShopping,savePlans};
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

  window.MealRecipeData = {legacyEnabled, fromSnapshotLocation, offerCatalogFromSnapshot, startSnapshotApp};
}());
