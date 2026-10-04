/* Instantiate source records only for the selected store. The full source pool
   supports saved plans; available menus are filtered against current branch offers. */
(function () {
  const quality = window.ontologyRecipeQualityById || {};
  const details = [...(window.ontologyRecipeDetails || []), ...(window.ontologyPopularRecipeAdditions || [])].map((detail) => ({
    ...detail,
    ratingValue: quality[detail.sourceRecipeId]?.ratingValue ?? detail.ratingValue ?? null,
    reviewCount: quality[detail.sourceRecipeId]?.reviewCount ?? detail.reviewCount ?? null
  }));
  window.ontologyRecipeCatalog = details;
  const storeSlug = (store) => store.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  window.createMealRecipes = (store) => details.filter((detail)=>!window.MealRecommendations||window.MealRecommendations.recipeAllowed(detail)).map((detail) => ({
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

  function legacyEnabled() {
    return false;
  }

  function safeRecipeSourceUrl(value,sourceRecipeId) {
    const expected='https://www.10000recipe.com/recipe/'+String(sourceRecipeId||'');
    return sourceRecipeId&&value===expected?value:null;
  }

  function reviewEvidenceFor(recipe,snapshotId,evidence=window.mealVerifiedEvidence) {
    const entry=evidence?.recipes?.[recipe.sourceRecipeId];
    if(!snapshotId||evidence?.snapshotId!==snapshotId||entry?.sourceRecipeId!==recipe.sourceRecipeId||entry?.detailSha256!==recipe.detailSha256||!safeRecipeSourceUrl(entry.sourceUrl,recipe.sourceRecipeId))return null;
    if(!/^\d{4}-\d{2}-\d{2}T/.test(entry.checkedAt||'')||!Number.isFinite(Date.parse(entry.checkedAt))||entry.method!=='recipe-feedback-v1')return null;
    return entry;
  }

  function reviewSummary(meal) {
    const evidence=meal?.reviewEvidence;
    const verified=evidence?.status==='verified'&&Number.isSafeInteger(evidence.reviewCount)&&evidence.reviewCount>=0;
    const count=verified?'요리 후기 '+evidence.reviewCount.toLocaleString('ko-KR')+'개':'리뷰 수 미확인';
    const rating=verified&&typeof evidence.ratingValue==='number'&&evidence.ratingValue>=0&&evidence.ratingValue<=5?' · 평점 '+evidence.ratingValue.toFixed(1):'';
    return count+rating+(evidence?' · 원문 확인 '+evidence.checkedAt.slice(0,10):'');
  }

  function fromSnapshotLocation(location) {
    const offersById=Object.fromEntries((location?.offers||[]).map((offer)=>[offer.offerId,offer]));
    return (location?.recipes || []).filter((recipe)=>!window.MealRecommendations||window.MealRecommendations.recipeAllowed(recipe)).map((recipe) => {
      const matchedOffers=(recipe.offerIds||[]).map((offerId)=>offersById[offerId]).filter((offer)=>offer&&(!window.MealRecommendations||window.MealRecommendations.offerMatchesRecipe(offer,recipe)));
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
      title: typeof recipe.title==='string'&&recipe.title.trim()?recipe.title.trim():(recipe.primaryIngredientIds || []).join(' · ') + ' 활용 레시피',
      time: sourceMinutes(recipe.sourceTimeText),
      timeBasis: sourceMinutes(recipe.sourceTimeText)===null?'unknown':'source-upper-bound',
      sourceTimeText: recipe.sourceTimeText || null,
      sale: Array.isArray(recipe.primaryIngredientIds) ? recipe.primaryIngredientIds.slice() : [],
      missing: [],
      tags: [],
      filter: recipeFilterKeys(recipe),
      requiredAmounts: recipe.requiredAmounts || {},
      detailIngredients: recipe.detailIngredients || [],
      sourceServingText: recipe.sourceServingText || null,
      offerIds: Array.isArray(recipe.offerIds) ? recipe.offerIds.slice() : [],
      primaryIngredientIds: Array.isArray(recipe.primaryIngredientIds) ? recipe.primaryIngredientIds.slice() : [],
      recommendationProfile: recipe.recommendationProfile || {},
      qualityScore: recipe.qualityScore ?? null,
      qualityFacts: recipe.qualityFacts || {},
      reviewEvidence: reviewEvidenceFor(recipe,location.snapshotId),
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

  function buildBrowseCatalog(store,branchId,snapshotMeals,offers=[],discoveryRecipes=[]) {
    const policy=window.MealRecommendations;
    const pool=new Map((snapshotMeals||[]).map(meal=>[meal.sourceRecipeId,{...meal,catalogOnly:false}]));
    for(const recipe of discoveryRecipes) {
      if(!recipe.locations?.some(location=>location.store===store&&location.branchId===branchId))continue;
      if(pool.has(recipe.sourceRecipeId))continue;
      const primary=recipe.recommendationProfile?.primaryIngredients||[];
      const matchedOffers=offers.filter(offer=>primary.includes(offer.identity?.ingredientId)&&(!policy||policy.offerMatchesRecipe(offer,recipe)));
      const detailIngredients=recipe.ingredients||[];
      const quantities=policy?.recipeQuantities({...recipe,detailIngredients});
      pool.set(recipe.sourceRecipeId,{...recipe,id:storeSlug(store)+'-recipe-'+recipe.sourceRecipeId,
        store,branchId,sourceTitle:recipe.title,detailIngredients,sourceServings:quantities?.sourceServings,
        requiredAmounts:quantities?.requiredAmounts||{},steps:[],sale:primary,missing:detailIngredients.map(label=>window.MealShopping?.ingredientName(label)||label),tags:[],
        filter:recipeFilterKeys({...recipe,filters:recipe.dietaryFilters||[]}),time:sourceMinutes(recipe.sourceTimeText),timeBasis:sourceMinutes(recipe.sourceTimeText)===null?'unknown':'source-upper-bound',matchedOffers,offerIds:matchedOffers.map(offer=>offer.offerId),
        offerCatalog:offerCatalogFromSnapshot({offers:matchedOffers}),catalogOnly:true,detailStatus:'source-link-only',
      });
    }
    return [...pool.values()].filter(meal=>!policy||policy.recipeAllowed(meal));
  }

  function fromNutritionCatalog(catalog,location) {
    const references=new Map((catalog.recipes||[]).map(reference=>[reference.sourceRecipeId,reference]));
    return fromSnapshotLocation({store:location.store,branchId:location.branchId,snapshotId:catalog.snapshotId,offers:[],recipes:catalog.recipes||[]}).map((meal)=>{
      const reference=references.get(meal.sourceRecipeId);
      return {...meal,id:'nutrition-general-recipe-'+meal.sourceRecipeId,sourceContentHash:reference.sourceContentHash,
        nutritionGeneral:true,automaticMealEligible:reference.automaticMealEligible,saleLinked:false,
        sale:[],missing:(meal.detailIngredients||[]).map(label=>window.MealShopping.ingredientName(label)),
        matchedOffers:[],offerIds:[],offerCatalog:{},basketFacts:null};
    });
  }

  function currentOfferLocation(location,date) {
    return {...location,offers:(location.offers||[]).filter((offer)=>offer.validFrom&&offer.validThrough&&offer.validFrom<=date&&date<=offer.validThrough&&(!window.MealRecommendations||window.MealRecommendations.safeOffer(offer)))};
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

  const nutrientLabels={kcal:{label:'열량',unit:'kcal',digits:0},proteinGrams:{label:'단백질',unit:'g',digits:1},fiberGrams:{label:'식이섬유',unit:'g',digits:1},sodiumMg:{label:'나트륨',unit:'mg',digits:0}};
  const nutritionNumber=(value)=>typeof value==='number'&&Number.isFinite(value)&&value>=0;
  function nutrientText(value,key) {
    const format=nutrientLabels[key];
    return nutritionNumber(value)?value.toLocaleString('ko-KR',{minimumFractionDigits:format.digits,maximumFractionDigits:format.digits})+' '+format.unit:'미확인';
  }
  function evidenceSource(value,label='자료 출처') {
    try {
      const url=new URL(value);
      if(url.protocol!=='https:'||url.username||url.password)return '';
      return '<a href="'+escapeHtml(url.href)+'" target="_blank" rel="noreferrer">'+escapeHtml(label)+' ↗</a>';
    } catch { return ''; }
  }
  function nutritionPanelHtml(facts) {
    const keys=Object.keys(nutrientLabels),estimated=facts?.status==='estimated',userInput=facts?.source==='user-input-grams';
    const full=['complete','estimated'].includes(facts?.status)&&typeof facts.source==='string'&&facts.source.trim()
      &&nutritionNumber(facts.sourceServings)&&facts.sourceServings>0&&keys.every(key=>nutritionNumber(facts.perServing?.[key]));
    const rangesComplete=estimated&&facts.assumptionsComplete===true&&facts.uncertaintyKind==='reviewed-scenario-interval'
      &&Array.isArray(facts.assumptions)&&facts.assumptions.length>0&&keys.every(key=>{
      const range=facts.perServingRange?.[key],central=facts.perServing?.[key];
      return nutritionNumber(range?.min)&&nutritionNumber(range?.max)&&range.min<=central&&central<=range.max;
    });
    const ready=full&&(!estimated||rangesComplete);
    const title=ready?(userInput?'입력한 중량 기준 1인분 추정':estimated?'1인분 추정 영양':'1인분 영양 계산'):'전체 영양 계산 미완료';
    const status=ready?(userInput?'이 브라우저에 입력한 중량으로 다시 계산했습니다. 게시된 레시피 자료는 변경되지 않습니다.':estimated?'분량·환산 가정을 포함한 중앙값과 시나리오 범위입니다.':'원문 인분과 확인된 재료량을 영양자료에 적용한 계산값입니다.'):'미확인 재료나 성분이 있어 전체 영양이나 추천 기준 충족 여부를 판단할 수 없습니다.';
    const coverage=facts?.coverage;
    const coverageText=Number.isSafeInteger(coverage?.resolvedIngredientCount)&&Number.isSafeInteger(coverage?.totalIngredientCount)
      &&coverage.resolvedIngredientCount>=0&&coverage.totalIngredientCount>=coverage.resolvedIngredientCount
      ?'확인된 재료 '+coverage.resolvedIngredientCount+' / '+coverage.totalIngredientCount+'개':'확인된 재료 범위가 아직 집계되지 않았습니다.';
    const values=ready?facts.perServing:facts?.knownTotals;
    const hasValues=values&&keys.some(key=>nutritionNumber(values[key]));
    const grid=hasValues?'<dl class="nutrition-grid">'+keys.map(key=>{
      const range=ready&&estimated?facts.perServingRange[key]:null;
      return '<div><dt>'+nutrientLabels[key].label+'</dt><dd>'+(ready&&estimated?'약 ':'')+nutrientText(values[key],key)
        +(range?'<small>시나리오 '+nutrientText(range.min,key)+' ~ '+nutrientText(range.max,key)+'</small>':'')+'</dd></div>';
    }).join('')+'</dl>':'';
    const missing=(Array.isArray(facts?.missingIngredients)?facts.missingIngredients:[]).filter(item=>typeof item?.ingredientLabel==='string'&&item.ingredientLabel.trim());
    const missingHtml=missing.length?'<p class="nutrition-note">미확인 재료</p><ul class="nutrition-missing">'+missing.map(item=>'<li>'+escapeHtml(item.ingredientLabel)+'</li>').join('')+'</ul>':'';
    const missingNutrients=[...new Set((Array.isArray(facts?.missingNutrients)?facts.missingNutrients:[]).map(item=>nutrientLabels[item?.nutrient]?.label).filter(Boolean))];
    const assumptions=(Array.isArray(facts?.assumptions)?facts.assumptions:[]).map(item=>{
      if(typeof item?.ingredientLabel!=='string'||!item.ingredientLabel.trim())return '';
      const amount=item.grams,parts=[];
      if(nutritionNumber(amount?.central))parts.push('계산 분량 '+nutrientText(amount.central,'proteinGrams'));
      if(nutritionNumber(amount?.min)&&nutritionNumber(amount?.max)&&amount.min<=amount.max)parts.push('분량 가정 '+nutrientText(amount.min,'proteinGrams')+' ~ '+nutrientText(amount.max,'proteinGrams'));
      if(item.matchType==='equivalent')parts.push('유사 식품의 영양자료 적용');
      if(item.nutrient&&nutrientLabels[item.nutrient]&&nutritionNumber(item.valuesPer100g?.central))parts.push('100g당 '+nutrientLabels[item.nutrient].label+' '+nutrientText(item.valuesPer100g.central,item.nutrient));
      const reference=typeof item.referenceName==='string'?(item.referenceName==='Reviewed food proxy'?'유사 식품 영양자료':item.referenceName):null;
      const source=evidenceSource(item.sourceURL,reference||'환산 근거');
      return '<li><strong>'+escapeHtml(item.ingredientLabel)+'</strong>'+(typeof item.quantityText==='string'?' · 원문 '+escapeHtml(item.quantityText):'')
        +(parts.length?'<br>'+parts.map(escapeHtml).join(' · '):'')+(source?'<br>'+source:'')+'</li>';
    }).filter(Boolean);
    const sources=(Array.isArray(facts?.sources)?facts.sources:[]).map(source=>evidenceSource(source?.sourceURL,typeof source?.foodId==='string'?'식품자료 '+source.foodId:'영양자료')).filter(Boolean);
    const evidence=assumptions.length||sources.length?'<details class="nutrition-evidence"><summary>계산 근거</summary>'
      +(assumptions.length?'<ul>'+assumptions.join('')+'</ul>':'')+(sources.length?'<p>'+sources.join(' · ')+'</p>':'')+'</details>':'';
    const note=ready&&userInput?'입력 중량은 고정하고 영양자료를 환산한 범위입니다. 자료는 평균값이며 실제 제품·조리 차이나 통계적 오차를 포함한 범위가 아닙니다.'
      :ready&&estimated?'표시 범위는 분량 환산과 크기 가정에 따른 시나리오 범위입니다. 통계적 오차나 실제 제품·조리 차이의 범위가 아닙니다.'
      :ready?'실제 제품과 조리 과정에 따라 영양값이 달라질 수 있습니다. 이 값은 개인의 영양 목표 충족 판정이 아닙니다.'
      :hasValues?'표시값은 확인된 재료량의 부분 합계입니다. 1인분 전체 영양값이 아닙니다.':'전체 재료량과 영양자료가 연결되면 값을 표시합니다.';
    const uncertainties=Array.isArray(facts?.unquantifiedUncertainty)?facts.unquantifiedUncertainty:[];
    const calculationScope=facts?.calculationScope;
    const disclosures=Array.isArray(calculationScope?.disclosures)?calculationScope.disclosures.filter(value=>typeof value==='string'&&value.trim()):[];
    const excluded=Array.isArray(calculationScope?.excludedAccompaniments)?calculationScope.excludedAccompaniments.filter(item=>typeof item?.ingredientLabel==='string'&&item.ingredientLabel.trim()):[];
    const scopeHtml=disclosures.length||excluded.length?'<div class="nutrition-calculation-scope"><strong>계산 범위</strong>'
      +(disclosures.length?'<ul>'+disclosures.map(value=>'<li>'+escapeHtml(value)+'</li>').join('')+'</ul>':'')
      +(excluded.length?'<p>계산에서 제외한 곁들임: '+excluded.map(item=>escapeHtml(item.ingredientLabel)).join(' · ')+'</p><p>표시값은 제외한 곁들임까지 포함한 식사 전체의 영양값이 아닙니다.</p>':'')+'</div>':'';
    return '<h4>'+title+'</h4>'+scopeHtml+'<p class="nutrition-status">'+status+'</p>'
      +(!ready?'<p class="nutrition-note">'+coverageText+'</p>':'')+grid+missingHtml
      +(!ready&&missingNutrients.length?'<p class="nutrition-note">미확인 성분: '+missingNutrients.join(' · ')+'</p>':'')+'<p class="nutrition-note">'+note+'</p>'
      +(uncertainties.length?'<p class="nutrition-note">유사 식품 등 실제 차이에 대한 미정량 불확실성 '+uncertainties.length+'건은 표시 범위에 포함되지 않습니다.</p>':'')+evidence;
  }

  function editableNutrition(facts) {
    const components=facts?.components,total=facts?.coverage?.totalIngredientCount,keys=Object.keys(nutrientLabels),ordinals=new Set();
    if(facts?.coverage?.inventoryReviewed!==true||!Number.isSafeInteger(total)||total<1||!Array.isArray(components)||components.length!==total
      ||!nutritionNumber(facts.sourceServings)||facts.sourceServings<=0)return false;
    return components.every(component=>{
      if(!Number.isSafeInteger(component?.ingredientOrdinal)||component.ingredientOrdinal<1||ordinals.has(component.ingredientOrdinal)
        ||typeof component.ingredientLabel!=='string'||!component.ingredientLabel.trim()||!['exact','equivalent'].includes(component.foodMatchType))return false;
      ordinals.add(component.ingredientOrdinal);
      return keys.every(key=>{
        const value=component.per100g?.[key],range=component.per100gRange?.[key];
        return nutritionNumber(value)&&(!range||(nutritionNumber(range.min)&&nutritionNumber(range.max)&&range.min<=value&&value<=range.max));
      });
    });
  }

  function nutritionEditStorageKey(meal) {
    return typeof meal?.sourceRecipeId==='string'&&meal.sourceRecipeId&&/^[a-f0-9]{64}$/.test(meal.sourceContentHash||'')
      ?'choi01-nutrition-grams-v1:'+meal.sourceRecipeId+':'+meal.sourceContentHash:null;
  }

  function calculateEditedNutrition(facts,gramsByOrdinal) {
    if(!editableNutrition(facts)||!gramsByOrdinal||typeof gramsByOrdinal!=='object'||Array.isArray(gramsByOrdinal))return null;
    const keys=Object.keys(nutrientLabels),totals=Object.fromEntries(keys.map(key=>[key,0])),ranges=Object.fromEntries(keys.map(key=>[key,{min:0,max:0}])),assumptions=[];
    if(Object.keys(gramsByOrdinal).length!==facts.components.length)return null;
    for(const component of facts.components) {
      const grams=gramsByOrdinal[component.ingredientOrdinal];
      if(!nutritionNumber(grams))return null;
      for(const key of keys) {
        const value=component.per100g[key],range=component.per100gRange?.[key]||{min:value,max:value};
        totals[key]+=value*grams/100;ranges[key].min+=range.min*grams/100;ranges[key].max+=range.max*grams/100;
      }
      assumptions.push({ingredientOrdinal:component.ingredientOrdinal,ingredientLabel:component.ingredientLabel,quantityText:component.quantityText,
        kind:'user-input-grams',matchType:component.foodMatchType,grams:{central:grams,min:grams,max:grams},referenceName:'이 브라우저에 입력한 중량'});
    }
    const round=value=>Number(value.toFixed(9));
    if(keys.some(key=>!nutritionNumber(totals[key])||!nutritionNumber(ranges[key].max)||!nutritionNumber(totals[key]/facts.sourceServings)||!nutritionNumber(ranges[key].max/facts.sourceServings)))return null;
    const {calculationSha256:_publishedCalculation,...baseline}=facts;
    return {...baseline,status:'estimated',source:'user-input-grams',localOnly:true,uncertaintyKind:'reviewed-scenario-interval',assumptionsComplete:true,assumptions,
      knownTotals:Object.fromEntries(keys.map(key=>[key,round(totals[key])])),
      perServing:Object.fromEntries(keys.map(key=>[key,round(totals[key]/facts.sourceServings)])),
      perServingRange:Object.fromEntries(keys.map(key=>[key,{min:round(ranges[key].min/facts.sourceServings),max:round(ranges[key].max/facts.sourceServings)}])),
    };
  }

  function sourceMinutes(value) {
    if(window.MealRecommendations?.sourceMinutes)return window.MealRecommendations.sourceMinutes(value);
    const match=/^\s*([1-9]\d*)\s*분(?:\s*이내)?\s*$/u.exec(String(value||''));
    const minutes=match?Number(match[1]):null;
    return Number.isSafeInteger(minutes)&&minutes>0?minutes:null;
  }

  function recipeFilterKeys(recipe) {
    const profile=recipe?.recommendationProfile||{};
    const explicit=[recipe?.cuisine, ...(Array.isArray(recipe?.filters)?recipe.filters:[]), profile.cuisine, ...(Array.isArray(profile.filters)?profile.filters:[])].filter(Boolean);
    const keys=new Set(explicit.map((value)=>String(value).toLowerCase().trim()).filter((value)=>['korean','asian','western','vegetarian'].includes(value)));
    const text=[recipe?.title,recipe?.sourceTitle, ...(profile.primaryIngredients||[])].filter(Boolean).join(' ').toLowerCase();
    if(!keys.size) {
      if(/김치|된장|불고기|장조림|수육|목살|닭|돼지|소고기|계란|달걀|나물|무침|찜|찌개|국밥|볶음밥/.test(text)) keys.add('korean');
      if(/카레|탄두리|난|또띠아|커리|볶음면|라이스페이퍼/.test(text)) keys.add('asian');
      if(/샐러드|머핀|토스트|스콘|티라미수|스무디|파스타|스파게티|프라이|치즈|버터빵|그라탕/.test(text)) keys.add('western');
    }
    // A title or ingredient family cannot establish a vegetarian dish.
    // Keep that filter explicit until the full ingredient list is reviewed.
    const minutes=sourceMinutes(recipe?.sourceTimeText);
    if(minutes!==null&&minutes<=20) keys.add('quick');
    return [...keys];
  }

  function qualitySummary(meal) {
    const facts=meal?.qualityFacts||{};
    const completeness=facts.completeness===1?'원문 재료·조리 순서 확인':'원문 확인 범위 제한';
    const primary=(meal?.sale||[]).join(' · ');
    const offerStatus=meal?.matchedOffers?.length&&primary?primary+' 할인 연결':'현재 주재료 할인 없음';
    return [reviewSummary(meal),completeness,offerStatus].join(' · ');
  }

  function selectSnapshotLocation(sourceLocations,params=new URLSearchParams(),pathname='') {
    const locations=(sourceLocations||[]).slice().sort((a,b)=>[a.postcode,a.store,a.branchId].join('|').localeCompare([b.postcode,b.store,b.branchId].join('|')));
    const postcodes=[...new Set(locations.map((entry)=>entry.postcode))];
    const mostMenus=(entries)=>entries.slice().sort((a,b)=>(b.recipeCount||0)-(a.recipeCount||0))[0];
    const routeSegment=String(pathname).split('/').filter(Boolean).find((segment)=>/^\d{5}/.test(segment))||'';
    const routeMatch=routeSegment.match(/^(\d{5})(.*)$/);
    const requestedArea=params.get('postcode');
    const activeArea=postcodes.includes(requestedArea)?requestedArea:(routeMatch&&postcodes.includes(routeMatch[1])?routeMatch[1]:mostMenus(locations)?.postcode);
    const stores=[...new Set(locations.filter((entry)=>entry.postcode===activeArea).map((entry)=>entry.store))].sort();
    const requestedStore=params.get('store');
    const routeStore=routeMatch?stores.find((store)=>storeSlug(routeMatch[2]).includes(storeSlug(store))):null;
    const activeStore=stores.includes(requestedStore)?requestedStore:(routeStore||mostMenus(locations.filter((entry)=>entry.postcode===activeArea))?.store);
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
      },
      remove(key) {
        memory.delete(key);
        try { backend?.removeItem(key); return Boolean(backend); }
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
    const legacyRequested=params.get('snapshot')==='legacy';
    const storage=createStorageAccess();
    const days=[['mon','월'],['tue','화'],['wed','수'],['thu','목'],['fri','금'],['sat','토'],['sun','일']];
    byId('sourceStatus').textContent='검증된 이번 주 자료를 불러오는 중입니다';
    try {
      if(legacyRequested) throw new Error('legacy-snapshot-disabled');
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
        if(params.get('date'))next.set('date',params.get('date'));
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

      const dateInBerlin=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
      let actualDate=dateInBerlin();
      const requestedDate=params.get('date');
      const berlinDate=/^\d{4}-\d{2}-\d{2}$/.test(requestedDate||'')&&Number.isFinite(Date.parse(requestedDate))?requestedDate:actualDate;
      const sourceLocation=await loader.loadLocationSnapshot(manifest,{postcode:activeArea,store:activeStore,branchId:activeBranch.branchId});
      const location=currentOfferLocation(sourceLocation,berlinDate);
      const collected=window.mealVerifiedEvidence?.snapshotId===manifest.snapshotId&&window.mealVerifiedEvidence?.csvSha256===manifest.source?.csvSha256?window.mealVerifiedEvidence.locations?.[location.id]:null;
      const snapshotMeals=fromSnapshotLocation(location);
      const storedConditions=safeJson(storage.get('choi01-meal-conditions-v1'))||{};
      if(storedConditions.excludeIngredients?.length)await Promise.all(snapshotMeals.filter(meal=>!meal.detailIngredients.length).map(async meal=>{try{const detail=await loader.loadRecipeDetail(location,meal.sourceRecipeId);meal.detailIngredients=detail.detailIngredients||[];}catch{/* Unverified ingredients remain excluded. */}}));
      const discovery=typeof loader.loadDiscoveryCatalog==='function'?await loader.loadDiscoveryCatalog(manifest):{recipes:[]};
      const libraryMeals=buildBrowseCatalog(activeStore,activeBranch.branchId,snapshotMeals,location.offers,discovery.recipes);
      const libraryById=new Map(libraryMeals.map((meal)=>[meal.id,meal]));
      const meals=snapshotMeals.map((meal)=>libraryById.get(meal.id)||meal);
      const mealById=(id)=>libraryById.get(id);
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
      const nutritionModes=new Set(['nutrition','diet']);
      let nutritionCatalogState=manifest.nutritionCatalogPath===undefined?'absent':'idle',nutritionCatalogPromise=null;
      const nutritionGeneralMeals=[];
      const ensureNutritionCatalog=async()=>{
        if(nutritionCatalogState==='absent'||nutritionCatalogState==='ready')return;
        if(nutritionCatalogPromise)return nutritionCatalogPromise;
        nutritionCatalogState='loading';
        nutritionCatalogPromise=(async()=>{
          try {
            if(typeof loader.loadNutritionCatalog!=='function')throw new Error('Nutrition catalog loader unavailable');
            const catalog=await loader.loadNutritionCatalog(manifest);
            nutritionGeneralMeals.push(...fromNutritionCatalog(catalog,location));
            for(const meal of nutritionGeneralMeals){libraryMeals.push(meal);libraryById.set(meal.id,meal);}
            nutritionCatalogState='ready';
          } catch { nutritionCatalogState='failed'; }
        })();
        return nutritionCatalogPromise;
      };
      if(nutritionModes.has(preferences.mode))await ensureNutritionCatalog();
      const historyStorageKey='choi01-meal-history-v1';
      let mealHistory=recommendations.restoreHistory(storage.get(historyStorageKey),actualDate),historySaved=true,historyNotice='';
      const offerIds=new Set(location.offers.map((offer)=>offer.offerId));
      const scaledMeal=(meal)=>({...meal,...recommendations.recipeQuantities(meal,preferences.targetServings)});
      const savedConditions=safeJson(storage.get('choi01-meal-conditions-v1'))||{};
      let dietary=savedConditions.dietary==='vegetarian'?'vegetarian':'any',excludeIngredients=Array.isArray(savedConditions.excludeIngredients)?savedConditions.excludeIngredients.filter(x=>typeof x==='string'&&x.length<=60).slice(0,20):[];
      if(byId('dietaryChoice'))byId('dietaryChoice').value=dietary;
      if(byId('excludeIngredients'))byId('excludeIngredients').value=excludeIngredients.join(', ');
      const eligibleForDiet=(meal)=>recommendations.matchesConditions(meal,{dietary,excludeIngredients});
      const basketContext=()=>({postcode:location.postcode,store:activeStore,branchId:activeBranch.branchId,date:berlinDate,targetServings:preferences.targetServings});
      const modeBasket=(meal)=>{
        const facts=meal.basketFacts;
        if(shopping.matchesBasketContext(facts,basketContext()))return shopping.marginalBasketFacts(facts,shoppingState.pantry,basketContext());
        return {sourceCoverage:'unknown',costStatus:'unknown',knownSubtotalCents:null,unknownItemKeys:['recipe:'+meal.id+':full-basket'],quantityCheckKeys:[],savingsStatus:'unavailable'};
      };
      const recommendationContext=()=>({catalog:catalog[activeStore],requireMainOffer:true,requireCompilerBasketFacts:true,postcode:location.postcode,store:activeStore,branchId:activeBranch.branchId,mealOnly:true,offerIds,targetServings:preferences.targetServings,basketFor:modeBasket,history:mealHistory,historyDate:actualDate,date:berlinDate,dietary,excludeIngredients});
      const contextForMode=(mode)=>{
        const context=recommendationContext();
        if(nutritionModes.has(mode)){context.requireMainOffer=false;delete context.offerIds;}
        return context;
      };
      const mealsForMode=(mode)=>{
        if(mode==='balanced')return libraryMeals.filter(meal=>!meal.nutritionGeneral);
        if(!nutritionModes.has(mode))return meals;
        const union=new Map(meals.map(meal=>[meal.sourceRecipeId,meal]));
        for(const meal of nutritionGeneralMeals.filter(meal=>meal.automaticMealEligible===true)) {
          const existing=union.get(meal.sourceRecipeId);
          if(!existing?.nutritionFacts||!['complete','estimated'].includes(existing.nutritionFacts.status))union.set(meal.sourceRecipeId,meal);
        }
        return [...union.values()];
      };
      const poolForMode=(mode)=>recommendations.rankForMode(mealsForMode(mode),contextForMode(mode),mode);
      const modeContext=()=>contextForMode(preferences.mode);
      const modeMeals=()=>mealsForMode(preferences.mode);
      const modePool=()=>poolForMode(preferences.mode);
      const modeReadiness=()=>{
        const structuralContext={...recommendationContext(),requireCompilerBasketFacts:false};
        const verifiedScope=meals.filter((meal)=>recommendations.evaluateRecipeForMode(meal,structuralContext,'balanced').eligible);
        const balancedCount=poolForMode('balanced').length;
        return Object.fromEntries(['balanced','value','nutrition','diet'].map((mode)=>{
          const eligible=mode==='balanced'?balancedCount:poolForMode(mode).length;
          return [mode,{eligible,total:mode==='balanced'?balancedCount:nutritionModes.has(mode)?mealsForMode(mode).length:verifiedScope.length,available:eligible>0}];
        }));
      };
      const savedMode=preferences.mode;
      let autoCoverage={eligible:0,filled:0,totalSlots:14,limited:true};
      const buildAutoPlans=(currentPlans=null)=>{
        const planned=recommendations.planAutoSlots(modeMeals(),{plans:currentPlans||{},days:days.map(([day])=>day),moments:['점심','저녁'],mode:preferences.mode,context:modeContext()});
        autoCoverage=planned.coverage;
        return planned.plans;
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
      const restored=shopping.restorePlansV2(savedPlan,{area:activeArea,store:activeStore,branchId:activeBranch.branchId,snapshotId:manifest.snapshotId,days:days.map(([day])=>day),moments:['점심','저녁'],availableRecipeIds:libraryMeals.map((meal)=>meal.id),autoPlans});
      autoPlans=buildAutoPlans(restored.plans);
      let plans=shopping.refreshAutoPlans(restored.plans,autoPlans);
      let mealMoment=['점심','저녁'].includes(savedPlanData.mealMoment)?savedPlanData.mealMoment:'저녁';
      const detailCache=new Map();
      const archivedDetails=savedPlanData.archivedDetails&&typeof savedPlanData.archivedDetails==='object'&&!Array.isArray(savedPlanData.archivedDetails)?{...savedPlanData.archivedDetails}:{};
      const archivedMealCache=new Map();
      const weeklyUnavailableIds=new Set();
      let selectedMeal=null;
      let selectedNutritionBaseline=null,selectedNutritionEdits=null,selectedNutritionNotice='';
      let selectedPlanTarget=null;
      let activeFilter='all';
      let recommendationIndex=0;
      let detailRequestVersion=0;
      let detailLoading=false;
      let detailReturnFocus=null;
      let pointerDrag=null;
      const dragControlSelector='button,a,input,select,textarea,summary,[contenteditable],[role="button"]';
      const stateNotices=[];
      if(savedMode!==preferences.mode)stateNotices.push('검증 자료가 없는 저장 추천 기준 대신 다양하게를 선택했습니다.');
      if(branchPlan!==null&&!branchPlanData)stateNotices.push('손상된 저장 식단은 안전하게 건너뛰었습니다.');
      if(restored.snapshotChanged)stateNotices.push('새 할인 주차에 맞춰 자동 식단만 갱신했습니다.');
      if(restored.stale.length)stateNotices.push('이전 주 수동 메뉴 '+restored.stale.length+'개는 선택을 보존했습니다.');

      const saveShopping=()=>storage.set(shoppingStorageKey,shopping.serializeState(shoppingState,manifest.snapshotId));
      const archiveManualDetails=()=>{
        for(const plan of Object.values(plans)) for(const slot of Object.values(plan)) {
          if(slot.origin!=='manual'||!slot.recipeId) continue;
          const meal=mealById(slot.recipeId);
          if(meal?.detailPath&&!archivedDetails[slot.recipeId]) archivedDetails[slot.recipeId]={sourceRecipeId:meal.sourceRecipeId,sourceContentHash:meal.sourceContentHash,title:meal.title,detailPath:meal.detailPath,detailSha256:meal.detailSha256,nutritionGeneral:Boolean(meal.nutritionGeneral),area:activeArea,store:activeStore,branchId:activeBranch.branchId,snapshotId:manifest.snapshotId};
        }
      };
      const savePlans=()=>{archiveManualDetails();return storage.set(planStorageKey,shopping.serializePlansV2(plans,{mealMoment,activeArea,activeStore,activeBranchId:activeBranch.branchId,snapshotId:manifest.snapshotId,archivedDetails}));};
      const weeklyPlanMeals=()=>days.flatMap(([day])=>['점심','저녁'].map((moment)=>plans[moment]?.[day])).filter(Boolean).map((slot)=>{
        if(weeklyUnavailableIds.has(slot.recipeId))return null;
        const meal=mealById(slot.recipeId),archived=archivedDetails[slot.recipeId];
        const useArchived=slot.origin==='manual'&&archiveInScope(archived)&&(!meal||archived.detailSha256!==meal.detailSha256);
        return useArchived?archivedMealCache.get(slot.recipeId)||null:meal;
      }).filter(Boolean);
      const basketFor=(items)=>{
        const compiled=shopping.compilerBasket(items.map(meal=>meal.basketFacts),{context:basketContext(),pantry:shoppingState.pantry,recipeIds:items.map(meal=>meal.id)});
        if(compiled)return compiled;
        const cart=shopping.basket(items.map(meal=>({...scaledMeal(meal),disableOfferPricing:Boolean(meal.nutritionGeneral)})),{catalog,pantry:shoppingState.pantry,prices:shoppingState.prices,quantities:shoppingState.quantities.week||{}});
        if(items.some(meal=>meal.basketFacts)&&cart.purchaseCount) {
          cart.sourceCoverage='unknown';
          cart.costStatus=cart.costStatus==='complete'?'partial':cart.costStatus;
          cart.quantityCheckKeys=[...new Set([...cart.quantityCheckKeys,'whole-basket-verification'])];
          cart.quantityCheckCount=cart.quantityCheckKeys.length;
        }
        return cart;
      };
      const weekBasket=()=>basketFor(weeklyPlanMeals());
      const currentMeal=()=>modePool()[recommendationIndex]||null;
      const todayId=days[(new Date().getDay()+6)%7][0];
      const archiveInScope=(reference)=>reference&&reference.area===activeArea&&reference.store===activeStore&&reference.branchId===activeBranch.branchId&&typeof reference.snapshotId==='string';
      saveShopping();
      savePlans();

      function placeManualMeal(recipeId,moment,day) {
        const meal=mealById(recipeId);
        if(!meal||!eligibleForDiet(meal)){byId('planStatus').textContent='선택한 식단 조건과 맞지 않는 메뉴입니다.';return;}
        if(!plans[moment]?.[day])return;
        plans[moment][day]=shopping.normalizePlanSlot(meal.id,'manual');
        selectedPlanTarget=null;
        savePlans();renderPlanAndBind();
        byId('planStatus').textContent=({mon:'월',tue:'화',wed:'수',thu:'목',fri:'금',sat:'토',sun:'일'})[day]+'요일 '+moment+'에 메뉴를 넣었습니다.';
      }

      function cancelPointerDrag() {
        const drag=pointerDrag;
        if(!drag)return;
        pointerDrag=null;
        document.removeEventListener('pointermove',movePointerDrag,true);
        document.removeEventListener('pointerup',finishPointerDrag,true);
        document.removeEventListener('pointercancel',cancelPointerEvent,true);
        document.removeEventListener('keydown',cancelPointerKey,true);
        window.removeEventListener('blur',cancelPointerDrag);
        window.removeEventListener('pagehide',cancelPointerDrag);
        drag.card.removeEventListener('lostpointercapture',cancelPointerEvent);
        drag.card.setAttribute('draggable',drag.draggable);
        drag.card.classList.remove('dragging');
        drag.target?.classList.remove('drop-target');
        drag.ghost?.remove();
        drag.observer?.disconnect();
        try { drag.card.releasePointerCapture?.(drag.pointerId); } catch { /* Capture may already have ended. */ }
      }

      function pointerDropTarget(event) {
        const target=document.elementFromPoint?.(event.clientX,event.clientY)?.closest('#weekGrid .slot');
        return target&&byId('weekGrid').contains(target)?target:null;
      }

      function movePointerDrag(event) {
        const drag=pointerDrag;
        if(!drag||event.pointerId!==drag.pointerId)return;
        if(!drag.card.isConnected){cancelPointerDrag();return;}
        if(!drag.started&&Math.hypot(event.clientX-drag.x,event.clientY-drag.y)<8)return;
        event.preventDefault();
        if(!drag.started) {
          drag.started=true;
          drag.card.classList.add('dragging');
          drag.ghost=document.createElement('div');
          drag.ghost.className='menu-item';
          drag.ghost.dataset.mealDragGhost='true';
          drag.ghost.setAttribute('aria-hidden','true');
          drag.ghost.textContent=drag.card.querySelector('.menu-title')?.textContent||'메뉴';
          Object.assign(drag.ghost.style,{position:'fixed',pointerEvents:'none',zIndex:'10000',width:'240px',maxWidth:'40vw',padding:'14px',opacity:'.9',boxShadow:'0 6px 18px rgba(0,0,0,.2)'});
          document.body.append(drag.ghost);
        }
        drag.ghost.style.left=(event.clientX+14)+'px';
        drag.ghost.style.top=(event.clientY+14)+'px';
        const target=pointerDropTarget(event);
        if(target!==drag.target){drag.target?.classList.remove('drop-target');drag.target=target;target?.classList.add('drop-target');}
      }

      function finishPointerDrag(event) {
        const drag=pointerDrag;
        if(!drag||event.pointerId!==drag.pointerId)return;
        const target=drag.started&&drag.card.isConnected?pointerDropTarget(event):null;
        if(drag.started)event.preventDefault();
        cancelPointerDrag();
        if(target)placeManualMeal(drag.recipeId,target.dataset.momentSlot,target.dataset.day);
      }

      function cancelPointerEvent(event) { if(event.pointerId===pointerDrag?.pointerId)cancelPointerDrag(); }
      function cancelPointerKey(event) { if(event.key==='Escape'){event.preventDefault();cancelPointerDrag();} }

      function beginPointerDrag(event,card) {
        if(event.pointerType!=='mouse'||event.button!==0||event.isPrimary===false||event.target.closest(dragControlSelector))return;
        cancelPointerDrag();
        pointerDrag={card,recipeId:card.dataset.id,pointerId:event.pointerId,x:event.clientX,y:event.clientY,draggable:card.getAttribute('draggable'),started:false,target:null,ghost:null};
        pointerDrag.observer=new MutationObserver(()=>{if(!card.isConnected)cancelPointerDrag();});
        pointerDrag.observer.observe(document.body,{childList:true,subtree:true});
        // Keep the mouse stream on WebKit instead of handing it to native HTML drag.
        // A short movement still produces the ordinary click; touch keeps native scrolling.
        card.setAttribute('draggable','false');
        document.addEventListener('pointermove',movePointerDrag,true);
        document.addEventListener('pointerup',finishPointerDrag,true);
        document.addEventListener('pointercancel',cancelPointerEvent,true);
        document.addEventListener('keydown',cancelPointerKey,true);
        window.addEventListener('blur',cancelPointerDrag);
        window.addEventListener('pagehide',cancelPointerDrag);
        card.addEventListener('lostpointercapture',cancelPointerEvent);
        try { card.setPointerCapture?.(event.pointerId); } catch { /* Document listeners also cover browsers without capture. */ }
      }

      function renderPlan() {
        cancelPointerDrag();
        const dayNames={mon:'월요일',tue:'화요일',wed:'수요일',thu:'목요일',fri:'금요일',sat:'토요일',sun:'일요일'};
        const slotBody=(moment,day,label)=>{
          const slot=plans[moment][day];
          const meal=mealById(slot.recipeId);
          const archived=archivedDetails[slot.recipeId];
          const useArchived=slot.origin==='manual'&&archiveInScope(archived)&&(!meal||archived.detailSha256!==meal.detailSha256);
          const body=meal&&!useArchived
            ? '<div class="meal-card"><div class="meal-card-main"><div class="meal-card-title">'+escapeHtml(meal.title)+'</div><div class="meal-card-meta"><span>'+escapeHtml(activeStore)+'</span><span>'+escapeHtml(meal.matchedOffers[0]?.pack||'포장 확인 필요')+'</span></div></div><div class="meal-card-actions"><button class="icon-button detail-trigger" data-id="'+escapeHtml(meal.id)+'" aria-label="'+escapeHtml(meal.title)+' 레시피 보기">↗</button><button class="icon-button" data-replace-slot="'+day+'" data-replace-moment="'+moment+'" aria-label="'+dayNames[day]+' '+moment+' 다음 후보 보기" title="다음 후보 보기">×</button><button class="button button-small button-quiet" data-clear-slot="'+day+'" data-clear-moment="'+moment+'" aria-label="'+dayNames[day]+' '+moment+' 비우기">비우기</button></div></div>'
            : slot.recipeId
              ? '<div class="meal-card"><div class="meal-card-main"><div class="meal-card-title">'+escapeHtml(archived?.title||'저장한 메뉴')+'</div><div class="meal-card-meta"><span>이전 주 수동 메뉴</span><span>'+(archived?'보관 근거 있음':'상세 근거 없음')+'</span></div></div><div class="meal-card-actions">'+(useArchived?'<button class="icon-button detail-trigger" data-id="'+escapeHtml(slot.recipeId)+'" data-archived="true" aria-label="보관된 상세 열기">↗</button>':'')+'<button class="icon-button" data-replace-slot="'+day+'" data-replace-moment="'+moment+'" aria-label="'+dayNames[day]+' '+moment+' 다음 후보 보기" title="다음 후보 보기">×</button><button class="button button-small button-quiet" data-clear-slot="'+day+'" data-clear-moment="'+moment+'" aria-label="'+dayNames[day]+' '+moment+' 비우기">비우기</button></div></div>'
              : '<div class="slot-empty"><span>'+moment+' 메뉴 없음</span><button class="button button-small button-quiet" data-pick-slot="'+day+'" data-pick-moment="'+moment+'" aria-label="'+dayNames[day]+' '+moment+' 메뉴 고르기">메뉴 고르기</button></div>';
          return '<div class="slot" data-day="'+day+'" data-moment-slot="'+moment+'" aria-label="'+dayNames[day]+' '+moment+' 메뉴 칸"><span class="slot-moment">'+moment+'</span>'+body+'</div>';
        };
        byId('weekGrid').innerHTML=days.map(([day,label])=>{
          return '<div class="week-row"><div class="day"><span aria-hidden="true">'+label+'</span><span class="sr-only">'+dayNames[day]+'</span></div>'+slotBody('점심',day,label)+slotBody('저녁',day,label)+'</div>';
        }).join('');
        document.querySelectorAll('#weekGrid .slot').forEach((slot)=>{
          slot.addEventListener('dragover',(event)=>{if(pointerDrag)return;event.preventDefault();slot.classList.add('drop-target');if(event.dataTransfer)event.dataTransfer.dropEffect='copy';});
          slot.addEventListener('dragleave',()=>slot.classList.remove('drop-target'));
          slot.addEventListener('drop',(event)=>{
            event.preventDefault();slot.classList.remove('drop-target');
            if(pointerDrag)return;
            placeManualMeal(event.dataTransfer?.getData('text/plain')||'',slot.dataset.momentSlot,slot.dataset.day);
          });
        });
        const cart=weekBasket();
        byId('totalCost').textContent=shopping.amount(cart);
        byId('totalCostNote').textContent=shopping.summary(cart)+' · 상세 수량은 레시피를 열어 확인하세요.';
      }

      function renderPantry() {
        const offers=new Map();
        for(const offer of location.offers) {
          const name=offer.identity?.ingredientId;
          if(typeof name==='string'&&name&&!offers.has(name))offers.set(name,offer);
        }
        byId('pantryList').innerHTML=offers.size?[...offers].map(([name,offer])=>{
          const key=shopping.keyFor(activeStore,name);
          return '<li><label><input type="checkbox" data-pantry-key="'+escapeHtml(key)+'"'+(shoppingState.pantry.has(key)?' checked':'')+'><span>'+escapeHtml(name)+'<small lang="de">'+escapeHtml(offer.productDe||'독어 상품명 미확인')+' · '+escapeHtml(offer.pack||'포장 미확인')+' · '+(Number.isSafeInteger(offer.priceCents)?shopping.euro(offer.priceCents):'가격 미확인')+'</small></span></label></li>';
        }).join(''):'<li class="panel-copy" style="padding:14px">이 지점에서 확인된 할인 재료가 없습니다.</li>';
      }

      function renderMenu() {
        cancelPointerDrag();
        const quickFilter=document.querySelector('[data-filter="quick"]');
        if(quickFilter) {
          const knownTime=libraryMeals.some(meal=>Number.isFinite(meal.time));
          quickFilter.disabled=!knownTime;
          quickFilter.textContent=knownTime?'20분 안':'20분 안 · 시간 미확인';
          quickFilter.title=knownTime?'원문에 표시된 조리 시간 기준':'원문 조리 시간이 확인되면 사용할 수 있습니다.';
        }
        const query=byId('menuSearch').value.trim().toLowerCase();
        const storeBrowse=recommendations.browse(libraryMeals.filter(meal=>!meal.nutritionGeneral).filter(eligibleForDiet),{catalog:catalog[activeStore],history:mealHistory,historyDate:actualDate,date:berlinDate,moment:mealMoment});
        const sourceIds=new Set(storeBrowse.map(meal=>meal.sourceRecipeId));
        const browseMeals=[...storeBrowse,...nutritionGeneralMeals.filter(meal=>!sourceIds.has(meal.sourceRecipeId)&&eligibleForDiet(meal))];
        const discountedMeals=recommendations.available(libraryMeals.filter(meal=>!meal.nutritionGeneral),{catalog:catalog[activeStore]});
        const visible=browseMeals.filter((meal)=>{
          const matchesFilter=activeFilter==='all'||(activeFilter==='quick'?Number.isFinite(meal.time)&&meal.time<=20:meal.filter.includes(activeFilter));
          const matchesQuery=!query||[meal.title,...meal.sale,...meal.missing,...(meal.detailIngredients||[]),...meal.matchedOffers.map((offer)=>offer.productDe)].join(' ').toLowerCase().includes(query);
          return matchesFilter&&matchesQuery&&(!byId('discountOnly')?.checked||(!meal.nutritionGeneral&&recommendations.explain(meal,catalog[activeStore]).mainOffers.length>0));
        });
        byId('menuCount').textContent=String(visible.length);
        byId('offerCount').textContent=collected?'수집 '+collected.collectedRows+'건 · 연결 '+collected.linkedProducts+'종':'재료 연결 '+location.offers.length+'종';
        byId('menuCountNote').textContent='전체 레시피 '+browseMeals.length+'개 · '+berlinDate+' 이 지점 할인 연결 '+discountedMeals.length+'개'+(collected?.unmatchedRows?' · 수집 상품 '+collected.unmatchedRows+'건은 재료 매칭 미완료':'');
        byId('menuList').innerHTML=visible.length?visible.map((meal)=>{
          const offer=meal.matchedOffers[0];
          const isDiscounted=!meal.nutritionGeneral&&recommendations.explain(meal,catalog[activeStore]).mainOffers.length>0;
          const offerNames=isDiscounted&&meal.matchedOffers.length?meal.matchedOffers.map((entry)=>entry.productDe).join(' · '):'현재 연결된 할인상품 없음';
          const cost=modeBasket(meal);
          const nutrition=meal.nutritionFacts?.status==='complete'?'영양 계산 가능':'영양 미계산';
          const costLabel=cost.costStatus==='complete'?'구매비 근거 완전':cost.costStatus==='partial'?'구매비 일부 확인':'구매비 근거 미확인';
          const evidence=isDiscounted?(offer?.evidenceUrl?'할인 근거 연결됨':'할인 근거 주소 미확인'):'일반 레시피 · 현재 할인 없음';
          const reason=isDiscounted?'현재 지점의 정확한 주재료 할인과 연결됩니다.':'할인과 관계없이 둘러보고 직접 고를 수 있는 레시피입니다.';
          return '<article class="menu-item" data-id="'+escapeHtml(meal.id)+'" tabindex="0" draggable="true"><div class="menu-top"><h4 class="menu-title">'+escapeHtml(meal.title)+'</h4><span class="match">'+(isDiscounted?'할인 연결':'일반 레시피')+'</span></div><p class="menu-sub">'+(meal.nutritionGeneral?'영양 계산된 일반 메뉴 · 할인 연결 없음 · 구매비 미확인 · '+(meal.automaticMealEligible?'식사 후보':'곁들임 · 직접 선택용'):(meal.catalogOnly?'원문에서 조리법 확인':'앱에서 조리법 확인')+' · '+(recommendations.mealKind(meal)==='main'?'식사 후보':'곁들임'))+'</p><p class="menu-offer">'+(offer?'<span lang="de">'+escapeHtml(offerNames)+'</span><br>'+escapeHtml(offer.pack)+' · '+shopping.euro(offer.priceCents):'선택 날짜의 주재료 할인 없음')+'</p><details class="menu-source"><summary>할인 근거·지점</summary><p>'+escapeHtml(activeBranch.branch||activeBranch.branchId)+' · '+escapeHtml(manifest.weekStart)+' · '+evidence+'</p><p class="menu-quality">선정 근거 · '+escapeHtml(qualitySummary(meal))+'</p></details><div class="menu-ingredients">'+escapeHtml(meal.sale.join(' · '))+'</div><div class="menu-actions"><button class="button button-small detail-trigger" data-id="'+escapeHtml(meal.id)+'">재료·레시피</button><button class="button button-small" data-add-menu="'+escapeHtml(meal.id)+'">식단에 넣기</button></div></article>' ;
        }).join(''):'<p class="panel-copy" role="status">검색어나 필터에 맞는 레시피가 없습니다. 조건을 바꿔보세요.</p>';
        document.querySelectorAll('.menu-item').forEach((card)=>{
          let nativeDragBlocked=false;
          card.addEventListener('pointerdown',(event)=>{nativeDragBlocked=Boolean(event.target.closest(dragControlSelector));beginPointerDrag(event,card);});
          card.addEventListener('dragstart',(event)=>{if(pointerDrag||nativeDragBlocked||event.target.closest(dragControlSelector)){event.preventDefault();return;}if(!event.dataTransfer)return;event.dataTransfer.setData('text/plain',card.dataset.id);event.dataTransfer.effectAllowed='copy';card.classList.add('dragging');});
          card.addEventListener('dragend',()=>card.classList.remove('dragging'));
        });
        byId('offerDirectorySummary').textContent=activeStore+' 레시피 연결 가능 상품 독어 원문명 '+location.offers.length+'종'+(collected?' · 수집자료 '+collected.collectedRows+'건 중':'');
        byId('offerDirectoryList').innerHTML=location.offers.map((offer)=>'<li><strong>'+escapeHtml(offer.identity.ingredientId)+'</strong><span lang="de">'+escapeHtml(offer.productDe)+'</span><small>'+escapeHtml(offer.pack)+' · '+shopping.euro(offer.priceCents)+' · '+escapeHtml(offer.validFrom)+' ~ '+escapeHtml(offer.validThrough)+'</small>'+(offer.evidenceUrl?'<a class="offer-source-link" href="'+escapeHtml(offer.evidenceUrl)+'" target="_blank" rel="noopener noreferrer">원본 링크 ↗</a>':'<small class="offer-source-missing">원본 링크 없음</small>')+'</li>').join('');
      }

      function renderToday() {
        actualDate=dateInBerlin();
        const meal=currentMeal();
        byId('todayTitle').textContent=meal?meal.title:preferences.mode==='balanced'?'선택 날짜의 할인 추천이 없어요':preferences.mode==='value'?'전체 구매비용을 아직 계산할 수 없어요':'영양 계산 자료가 더 필요해요';
        byId('decisionLabel').textContent=(berlinDate===actualDate?'오늘':berlinDate)+' '+mealMoment+' 추천';
        const evaluation=meal?recommendations.evaluateRecipeForMode(meal,modeContext(),preferences.mode):null;
        byId('todayReason').textContent=meal
          ? (evaluation?.reasons[0]||'현재 지점의 할인 주재료와 메뉴 다양성을 기준으로 추천합니다.')+' · '+qualitySummary(meal)
          : (preferences.mode==='balanced'?'다른 날짜나 마트를 선택하거나, 아래 레시피에서 직접 식단을 만들어 보세요.':'선택한 기준에 필요한 검증 자료가 부족합니다.');
        byId('todayTime').textContent=meal?(meal.sourceTimeText||(Number.isFinite(meal.time)?meal.time+'분':'상세 확인')):'—';
        const leadOffer=meal?.matchedOffers?.[0];
        byId('todayPrimaryOffer').innerHTML=leadOffer?'<strong>'+escapeHtml(leadOffer.identity.ingredientId)+'</strong> · <span lang="de">'+escapeHtml(leadOffer.productDe)+'</span> · '+escapeHtml(leadOffer.pack)+' · '+shopping.euro(leadOffer.priceCents)+' · '+escapeHtml(leadOffer.validFrom)+' ~ '+escapeHtml(leadOffer.validThrough):(meal?.nutritionGeneral?'<strong>영양 계산된 일반 메뉴</strong> · 할인 연결 없음 · 구매비 미확인':meal?'<strong>일반 레시피</strong> · 현재 주재료 할인 없음':'');
        const basket=meal?modeBasket(meal):null;
        byId('todayCost').textContent=basket?.costStatus==='complete'?shopping.euro(basket.knownSubtotalCents):(meal?'가격 미확인':'—');
        byId('todayCostNote').textContent=meal?(basket?.sourceCoverage==='complete'?'전체 재료를 선택한 인분과 이 지점의 판매 포장 단위로 계산했습니다. 집에 있는 재료는 구매에서 제외합니다.':leadOffer?'할인상품 한 포장 가격과 전체 재료 구매 합계는 다릅니다. 상세에서 수량과 미확인 가격을 확인하세요.':'현재 할인 가격이 없는 재료는 금액 미확인으로 남습니다.') : '';
        const nutrientComparison=nutritionModes.has(preferences.mode)&&['complete','estimated'].includes(evaluation?.readiness.nutrition);
        const firstReason=nutrientComparison
          ? '<b>'+(evaluation.readiness.nutrition==='estimated'?'환산 가정을 포함한 영양 비교':'확인된 영양값 비교')+'</b><span>1인분 기준 '+Object.keys(nutrientLabels).map(key=>nutrientLabels[key].label+' '+nutrientText(meal.nutritionFacts.perServing[key],key)).map(escapeHtml).join(' · ')+'</span>'
          : leadOffer?'<b>지금 유효한 주재료 행사</b><span>'+escapeHtml(meal.sale.join(' · '))+'</span>':'<b>전체 레시피 후보</b><span>현재 할인은 없지만 식사 메뉴와 다양성 기준에 맞습니다.</span>';
        byId('whyList').innerHTML=meal?'<div class="why-item"><span class="why-index">01</span><div>'+firstReason+'</div></div><div class="why-item"><span class="why-index">02</span><div><b>원문과 검토 근거</b><span>'+escapeHtml(reviewSummary(meal))+'</span></div></div><div class="why-item"><span class="why-index">03</span><div><b>메뉴 다양성</b><span>주재료와 조리 방식, 최근 먹은 기록을 함께 봅니다.</span></div></div>':'<p class="panel-copy">현재 날짜와 조건에 맞는 검토된 주메뉴가 없습니다.</p>';
        const alternatives=modePool().filter((item)=>item.id!==meal?.id).slice(0,2);
        byId('alternativeList').innerHTML=alternatives.length?'<ul>'+alternatives.map((item)=>'<li>'+escapeHtml(item.title)+'</li>').join('')+'</ul>':'<p class="panel-copy">조건에 맞는 다른 주메뉴가 없습니다.</p>';
        byId('todayMatch').textContent=meal?meal.matchedOffers.length+'개':'0개';
        byId('todayIngredients').innerHTML=meal?meal.matchedOffers.map((offer)=>'<span class="ingredient-chip">'+escapeHtml(offer.identity.ingredientId)+'</span>').join(''):'';
        ['acceptToday','todayShopping'].forEach((id)=>{byId(id).disabled=!meal;});
        byId('nextRecommendation').disabled=modePool().length<2;
        byId('modeReadiness').textContent=preferences.mode==='balanced'
          ? '다양하게는 선택한 장보기 날짜의 할인 주재료를 사용합니다. 아래 식단은 이 날 구매하는 재료를 기준으로 합니다.'
          : preferences.mode==='value'
            ? (modePool().length?'가성비 모드는 '+preferences.targetServings+'인분의 확인된 포장 구매 합계만 비교합니다.':'가성비 비교에 필요한 가격·포장 수량·원문 인분 자료가 부족합니다.')
            : preferences.mode==='nutrition'
              ? (modePool().length?'영양은 출처가 확인된 1인분 영양 수치만 비교합니다.':'영양 근거가 완전한 메뉴가 없어 이 기준의 추천을 표시하지 않습니다.')
              : (modePool().length?'가볍게는 검증된 열량·단백질·식이섬유·나트륨만 비교합니다.':'영양 근거가 완전한 메뉴가 없어 가볍게 추천을 표시하지 않습니다.');
        if(nutritionModes.has(preferences.mode)) {
          if(nutritionCatalogState==='loading')byId('modeReadiness').textContent='영양 계산된 일반 메뉴 자료를 검증해 불러오는 중입니다.';
          else if(nutritionCatalogState==='failed')byId('modeReadiness').textContent+=' 일반 메뉴 자료 검증에 실패해 해당 자료는 사용하지 않았습니다.';
          else if(nutritionCatalogState==='ready')byId('modeReadiness').textContent+=' 할인과 관계없는 영양 계산 메뉴도 포함합니다. 구매 비용이 확인되었다는 뜻은 아닙니다.';
          byId('modeReadiness').textContent+=' 개인의 하루 영양 필요량이나 다이어트 목표 충족 여부를 판단하지 않습니다.';
        }
        renderHistoryStatus();
      }

      function canRecordMeal(meal) {
        return Boolean(!detailLoading&&meal&&safeRecipeSourceUrl(meal.sourceUrl,meal.sourceRecipeId)&&/^[a-zA-Z0-9-]{1,64}$/.test(meal.sourceRecipeId)
          &&(/^[a-f0-9]{64}$/.test(meal.sourceContentHash||'')||/^[a-f0-9]{64}$/.test(meal.detailSha256||'')));
      }

      function renderHistoryStatus() {
        actualDate=dateInBerlin();mealHistory=recommendations.restoreHistory(JSON.stringify(mealHistory),actualDate);
        const button=byId('markEaten'),note=byId('eatenNote');
        const valid=canRecordMeal(selectedMeal);
        const already=valid&&mealHistory.some(row=>row.sourceRecipeId===selectedMeal.sourceRecipeId&&row.date===actualDate&&row.moment===mealMoment);
        button.disabled=!valid;button.textContent=already?'먹은 기록 취소':'먹었어요';
        button.title=valid?actualDate+' '+mealMoment+'에 실제로 먹은 메뉴 기록':'원문이 확인된 레시피 상세를 열어 기록하세요.';
        const savedNotice=historySaved?'':' 기록을 브라우저에 저장하지 못해 현재 화면에서만 반영됩니다.';
        note.textContent=historyNotice?historyNotice+savedNotice:valid
          ? (already?actualDate+' '+mealMoment+'에 먹은 기록이 있습니다. 취소하면 해당 끼니의 이 메뉴 기록만 삭제합니다.':actualDate+' '+mealMoment+'에 실제로 먹은 뒤 기록하세요. 식단에 넣는 동작은 먹은 기록을 만들지 않습니다.')+savedNotice
          : '원문이 확인된 레시피 상세를 열면 실제로 먹은 메뉴를 기록할 수 있습니다.';
        if(byId('recentMealSummary'))byId('recentMealSummary').textContent=(mealHistory.length?'최근 14일 먹은 기록 '+mealHistory.length+'회 · 반복 추천에 반영합니다.':'최근 14일 먹은 기록이 없습니다.')+savedNotice;
      }

      function renderModeControls() {
        const readiness=modeReadiness();
        byId('autoPlan').textContent=nutritionModes.has(preferences.mode)?'추천 메뉴로 채우기':'할인 메뉴로 채우기';
        document.querySelectorAll('input[name="recommendationMode"]').forEach((input)=>{
          const state=readiness[input.value]||{eligible:0,total:0,available:false};
          input.disabled=!state.available;
          input.checked=input.value===preferences.mode;
          input.disabled=false;
          const status=document.querySelector('[data-mode-status="'+input.value+'"]');
          if(status)status.textContent=input.value==='balanced'
            ? (state.available?'사용 가능 · 후보 '+state.eligible+'개':'준비 중 · 후보 0개')
            : (state.available?'사용 가능 · 검증 '+state.eligible+'/'+state.total:'준비 중 · 검증 0/'+state.total);
          if(status&&nutritionModes.has(input.value)&&nutritionCatalogState==='idle')status.textContent+=' · 일반 메뉴 불러오기';
          if(status&&nutritionModes.has(input.value)&&nutritionCatalogState==='loading')status.textContent='일반 메뉴 검증 중';
        });
      }

      function renderMealMomentControls() {
        if(window.MealWorkspace?.setMealMoment){window.MealWorkspace.setMealMoment(mealMoment);return;}
        document.querySelectorAll('[data-moment]').forEach((control)=>{
          const selected=control.dataset.moment===mealMoment;
          control.classList.toggle('active',selected);
          control.setAttribute('aria-pressed',String(selected));
        });
      }

      function bindPlanActions() {
        const grid=byId('weekGrid');
        if(grid.dataset.planActionsBound==='true')return;
        grid.dataset.planActionsBound='true';
        grid.addEventListener('click',(event)=>{
          const button=event.target.closest('[data-replace-slot],[data-clear-slot],[data-pick-slot]');
          if(!button)return;
          if(button.dataset.pickSlot) {
            mealMoment=button.dataset.pickMoment;
            selectedPlanTarget={moment:mealMoment,day:button.dataset.pickSlot};
            renderMealMomentControls();
            byId('menuSearch').focus();
            byId('library').scrollIntoView({behavior:'smooth'});
            byId('planStatus').textContent=(button.getAttribute('aria-label')||'메뉴 칸')+'에 넣을 메뉴를 고르세요.';
            return;
          }
          if(button.dataset.replaceSlot) {
          selectedPlanTarget=null;
          const moment=button.dataset.replaceMoment,day=button.dataset.replaceSlot,slot=plans[moment][day];
          const pool=modePool();
          const currentIndex=pool.findIndex((meal)=>meal.id===slot.recipeId);
          const rotated=currentIndex<0?pool:[...pool.slice(currentIndex+1),...pool.slice(0,currentIndex+1)];
          const usedRecipeIds=Object.entries(plans).flatMap(([planMoment,plan])=>Object.entries(plan).filter(([planDay])=>planMoment!==moment||planDay!==day).map(([,entry])=>entry.recipeId)).filter(Boolean);
          const next=recommendations.nextCandidate(rotated,{dismissedRecipeIds:[...slot.dismissedRecipeIds,slot.recipeId].filter(Boolean),usedRecipeIds,mode:preferences.mode,context:modeContext()});
          plans[moment][day]=shopping.replaceAutoSlot(slot,next?.id||null);
          byId('planStatus').textContent=next?'다음 후보로 바꿨습니다.':'이 조건에서 남은 다음 후보가 없어 메뉴 칸을 비워두었습니다.';
          } else {
            selectedPlanTarget=null;
            plans[button.dataset.clearMoment][button.dataset.clearSlot]=shopping.clearPlanSlot();
            byId('planStatus').textContent='선택한 메뉴 칸을 직접 비웠습니다.';
          }
          savePlans();renderPlanAndBind();
        });
      }

      function renderPlanAndBind() {
        renderPlan();bindDetailTriggers();bindPlanActions();
      }

      function takePlanDestination() {
        const requested=selectedPlanTarget;
        selectedPlanTarget=null;
        const moment=requested?.moment||mealMoment;
        const day=requested?.day||days.find(([dayId])=>!plans[moment][dayId].recipeId)?.[0]||todayId;
        return {moment,day};
      }

      function bindMenuActions() {
        const list=byId('menuList');
        if(list.dataset.menuActionsBound==='true')return;
        list.dataset.menuActionsBound='true';
        list.addEventListener('click',(event)=>{
          const button=event.target.closest('[data-add-menu]');
          if(!button)return;
          const meal=mealById(button.dataset.addMenu);
          if(!meal||!eligibleForDiet(meal))return;
          const {moment,day}=takePlanDestination();
          placeManualMeal(meal.id,moment,day);
        });
      }

      function showPlanCoverage() {
        const label={balanced:'다양하게',value:'가성비',nutrition:'영양',diet:'가볍게'}[preferences.mode];
        byId('planStatus').textContent=label+' 후보 '+autoCoverage.eligible+'개 · 자동 식단 '+autoCoverage.filled+'칸'+(autoCoverage.limited?' · 나머지는 조건에 맞는 후보가 부족해 비워둡니다.':'')+(stateNotices.length?' · '+stateNotices.join(' '):'');
      }

      function renderGroceries() {
        const progress=shopping.listProgress(shoppingState.list);
        byId('groceryProgress').textContent=shoppingState.list.length?'구매 완료 '+progress.completedCount+' / '+shoppingState.list.length+'종 · 남은 재료 '+progress.remainingCount+'종':'구매할 재료를 추가해주세요';
        byId('groceryCost').textContent=shoppingState.list.length?'남은 구매금액 · '+shopping.summary(progress):'';
        byId('groceryEmpty').hidden=shoppingState.list.length>0;
        const row=(item)=>{
          const offer=catalog[item.store]?.[item.name];
          const product=item.product||offer?.product||'독어 상품명 미확인';
          const source=item.source||offer?.source;
          const usage=item.menuCount>1?'<small class="grocery-usage">'+item.menuCount+'개 메뉴에 사용</small>':'';
          return '<li class="grocery-item'+(item.completed?' completed':'')+'"><label class="grocery-check"><input type="checkbox" data-grocery-key="'+escapeHtml(item.key)+'" aria-label="'+escapeHtml(item.name)+' 구매 완료"'+(item.completed?' checked':'')+'><span><strong>'+escapeHtml(item.name)+'</strong>'+usage+'<small lang="de">'+escapeHtml(product)+'</small><small>'+escapeHtml(item.store+' · '+item.pack+(item.quantityNeedsCheck?' · 구매 수량 확인':' × '+item.quantity))+' · '+(source?'가격 근거 연결됨':'가격·근거 확인 필요')+'</small></span></label><span class="grocery-item-cost">'+(item.priceCents===null?(item.quantityNeedsCheck?'가격 미확인 · 수량 확인':'가격 미확인'):item.quantityNeedsCheck?'수량 확인':shopping.euro(item.priceCents*item.quantity))+'</span><button class="icon-button" data-grocery-remove="'+escapeHtml(item.key)+'" aria-label="'+escapeHtml(item.name)+' 장보기 목록에서 삭제">×</button></li>';
        };
        const orderedMenus=[...weeklyPlanMeals(),...libraryMeals];
        const groups=shopping.groupListByMenu(shoppingState.list.filter((item)=>!item.completed),orderedMenus);
        byId('groceryPending').innerHTML=groups.map((group)=>{
          const groupProgress=shopping.listProgress(group.items);
          return '<details class="grocery-group" data-grocery-group="'+escapeHtml(group.key)+'"><summary><span><strong>'+escapeHtml(group.title)+'</strong><small>'+group.items.length+'종 · '+escapeHtml(shopping.summary(groupProgress))+'</small></span><span class="grocery-group-action" aria-hidden="true">펼치기</span></summary><ul class="grocery-list" aria-label="'+escapeHtml(group.title)+' 구매하지 않은 재료">'+group.items.map(row).join('')+'</ul></details>';
        }).join('');
        byId('groceryCompleted').innerHTML=shoppingState.list.filter((item)=>item.completed).map(row).join('');
        byId('groceryCompletedSection').hidden=progress.completedCount===0;
        byId('groceryCompletedLabel').textContent='구매 완료 '+progress.completedCount+'종';
      }

      function hydrateMeal(meal,detail) {
        const compact=(value)=>String(value).replace(/\s+/g,'');
        const ingredientNames=(detail.detailIngredients||[]).map(shopping.ingredientName).filter(Boolean).map((name)=>meal.sale.find((primary)=>compact(primary)===compact(name))||name);
        Object.assign(meal,detail,{title:detail.title||meal.title});
        meal.time=sourceMinutes(meal.sourceTimeText);
        meal.timeBasis=meal.time===null?'unknown':'source-upper-bound';
        const amounts=recommendations.recipeQuantities(meal);meal.sourceServings=amounts.sourceServings;meal.requiredAmounts=amounts.requiredAmounts;
        meal.missing=[...new Set([...(meal.missing||[]),...ingredientNames.filter((name)=>!meal.sale.includes(name))])];
        return meal;
      }

      async function detailFor(reference,isCurrent) {
        const cacheKey=reference.detailPath+'|'+reference.detailSha256;
        if(!detailCache.has(cacheKey)) {
          const pending=(isCurrent&&!reference.nutritionGeneral?loader.loadRecipeDetail(location,reference.sourceRecipeId):loader.loadRecipeDetailReference(reference)).catch((error)=>{detailCache.delete(cacheKey);throw error;});
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
          if(reference===meal&&!reference.detailPath) continue;
          work.set(reference.detailPath+'|'+reference.detailSha256,{slot,meal,reference,useArchived});
        }
        await Promise.all([...work.values()].map(async(entry)=>{
          try {
            const detail=await detailFor(entry.reference,!entry.useArchived);
            if(entry.useArchived) {
              const archivedMeal=hydrateMeal({id:entry.slot.recipeId,store:activeStore,nutritionGeneral:Boolean(entry.reference.nutritionGeneral),sale:[],missing:[],requiredAmounts:{},matchedOffers:[]},detail);
              archivedMealCache.set(entry.slot.recipeId,archivedMeal);
            } else hydrateMeal(entry.meal,detail);
          } catch { weeklyUnavailableIds.add(entry.slot.recipeId); }
        }));
        return {unavailableCount:weeklyUnavailableIds.size};
      }

      function renderDetailShopping() {
        const cart=selectedMeal?basketFor([selectedMeal]):basketFor([]);
        const itemAmount=(item)=>{
          if(item.owned)return '구매 제외';
          if(item.subtotalCents===null)return item.quantityNeedsCheck?'가격 미확인 · 수량 확인':'가격 미확인';
          if(item.quantityNeedsCheck)return '확인된 1팩 가격 '+shopping.euro(item.subtotalCents)+' · 수량 확인';
          return shopping.euro(item.subtotalCents);
        };
        byId('detailIngredients').innerHTML=cart.items.length?cart.items.map((item)=>'<li class="shopping-item'+(item.owned?' owned':'')+'"><div class="shopping-item-head"><strong>'+escapeHtml(item.label||item.name)+'</strong><label><input type="checkbox" data-shopping-key="'+escapeHtml(item.key)+'" data-shopping-pantry-keys="'+escapeHtml(JSON.stringify(item.pantryKeys||[item.key]))+'" data-shopping-field="owned"'+(item.owned?' checked':'')+'> 집에 있음</label></div><small>'+escapeHtml((item.requiredAmount?'필요 '+Number(item.requiredAmount.amount.toFixed(3))+item.requiredAmount.unit+' · ':'')+(item.product?item.product+' · ':'')+item.pack)+'</small><div class="shopping-controls"><strong>'+itemAmount(item)+'</strong></div></li>').join(''):'<li class="footer-note">구매할 재료가 없습니다.</li>';
        const evidence=(selectedMeal?.matchedOffers||[]).map((offer)=>offer.evidenceUrl?'<a href="'+escapeHtml(offer.evidenceUrl)+'" target="_blank" rel="noreferrer">'+escapeHtml(offer.productDe)+' 할인 근거</a>':escapeHtml(offer.productDe)).join(' · ');
        const reviewedPrices=cart.sourceCoverage==='complete'?cart.items.map(item=>'<a href="'+escapeHtml(item.source)+'" target="_blank" rel="noreferrer">'+escapeHtml(item.label||item.name)+' 가격 근거</a>').join(' · '):'';
        byId('shoppingSource').innerHTML=reviewedPrices||evidence||(selectedMeal?.catalogOnly?'현재 할인상품과 연결되지 않은 일반 레시피입니다.':'선택한 스냅샷의 검증된 할인상품 기준입니다.');
        byId('shoppingTitle').textContent='구매할 재료 · '+cart.purchaseCount+'종';
        byId('shoppingTotalLabel').textContent=cart.quantityCheckCount?'확인된 1팩 가격 소계 · 구매 수량 확인 필요':cart.unknownCount?'가격 확인된 재료 소계':'구매할 재료 총액';
        byId('shoppingTotal').textContent=shopping.amount(cart);
        byId('shoppingNote').textContent=shopping.summary(cart);
      }

      function renderDetailNutrition() {
        const panel=byId('detailNutrition');if(!panel)return;
        const baseline=selectedNutritionBaseline,edited=selectedNutritionEdits?calculateEditedNutrition(baseline,selectedNutritionEdits):null;
        let editor='';
        if(editableNutrition(baseline)&&nutritionEditStorageKey(selectedMeal)) {
          const ratio=preferences.targetServings/baseline.sourceServings;
          editor='<fieldset class="nutrition-editor"><legend>내 재료 중량으로 다시 계산</legend>'
            +'<p class="nutrition-note">'+preferences.targetServings+'인분에 사용할 중량을 입력하세요. 원문 '+baseline.sourceServings+'인분 기준으로 환산해 이 브라우저에 저장합니다. 영양 계산에만 적용되며 조리량·장보기 수량과 게시된 추천 자료는 바뀌지 않습니다.</p>'
            +baseline.components.map(component=>{
              const grams=selectedNutritionEdits?.[component.ingredientOrdinal]??component.grams;
              const value=nutritionNumber(grams)?String(Number((grams*ratio).toFixed(6))):'';
              return '<label><span>'+escapeHtml(component.ingredientLabel)+'<small>원문 '+escapeHtml(component.quantityText||'수량 미표기')
                +(nutritionNumber(component.grams)?' · 기존 계산 '+nutrientText(component.grams,'proteinGrams')+' / 원문 '+baseline.sourceServings+'인분':' · 기존 중량 미확인')
                +'</small></span><span class="nutrition-gram-input"><input type="number" min="0" step="any" inputmode="decimal" data-nutrition-ordinal="'+component.ingredientOrdinal+'" value="'+escapeHtml(value)+'" aria-label="'+escapeHtml(component.ingredientLabel)+' '+preferences.targetServings+'인분 중량 (g)"> g</span></label>';
            }).join('')+'<div class="nutrition-editor-actions"><button class="button button-small" type="button" data-apply-nutrition-grams>입력 중량으로 계산</button><button class="button button-small button-quiet" type="button" data-reset-nutrition-grams>기존 계산으로 되돌리기</button></div><p class="nutrition-note" data-nutrition-edit-status role="status">'+escapeHtml(selectedNutritionNotice)+'</p></fieldset>';
        } else editor='<p class="nutrition-note">재료 목록·인분·영양자료 연결이 모두 확인된 레시피에서 중량을 바꿔 계산할 수 있습니다. 누락된 영양자료는 중량 입력으로 대체하지 않습니다.</p>';
        panel.innerHTML=nutritionPanelHtml(edited||baseline)+editor;
      }

      function restoreNutritionEdits(meal) {
        selectedNutritionBaseline=meal.nutritionFacts||null;selectedNutritionEdits=null;selectedNutritionNotice='';
        const key=nutritionEditStorageKey(meal),saved=key?safeJson(storage.get(key)):null;
        if(saved?.version===1&&saved.sourceRecipeId===meal.sourceRecipeId&&saved.sourceContentHash===meal.sourceContentHash
          &&saved.sourceServings===selectedNutritionBaseline?.sourceServings&&calculateEditedNutrition(selectedNutritionBaseline,saved.gramsByOrdinal)) {
          selectedNutritionEdits=saved.gramsByOrdinal;selectedNutritionNotice='이 브라우저에 저장한 중량을 적용했습니다.';
        }
      }

      async function openDetail(id,useArchived=false) {
        const requestVersion=++detailRequestVersion;
        detailLoading=true;renderHistoryStatus();
        try {
          const meal=mealById(id);
          const archived=archivedDetails[id];
          if(useArchived&&!archiveInScope(archived)) throw new Error('Archived recipe detail scope mismatch');
          if(!meal&&(!archived||!archiveInScope(archived))) throw new Error('Archived recipe detail unavailable');
          const reference=useArchived||!meal?archived:meal;
          const inlineCatalog=reference===meal&&!reference.detailPath;
          const detail=inlineCatalog?reference:await detailFor(reference,reference===meal);
          const baseMeal=reference===meal?meal:{id,store:activeStore,nutritionGeneral:Boolean(reference.nutritionGeneral),sale:[],missing:[],requiredAmounts:{},matchedOffers:[]};
          const hydrated=hydrateMeal(baseMeal,detail);
          if(reference.detailSha256)hydrated.detailSha256=reference.detailSha256;
          if(requestVersion!==detailRequestVersion)return hydrated;
          detailLoading=false;
          selectedMeal=hydrated;
          restoreNutritionEdits(selectedMeal);
          byId('detailTitle').textContent=selectedMeal.title;
          const detailLead=selectedMeal.nutritionGeneral?null:selectedMeal.matchedOffers?.[0];
          byId('detailOfferInfo').hidden=!detailLead;
          byId('detailOfferInfo').textContent=detailLead?[detailLead.productDe,detailLead.pack,shopping.euro(detailLead.priceCents)].join(' · '):'';
          byId('detailIntro').textContent=detail.recipeNote||(inlineCatalog?'재료와 원문 링크를 확인한 탐색 후보입니다. 조리 순서는 원문에서 확인하세요.':'검토한 원문을 바탕으로 정리한 레시피입니다.');
          const quantityView=recommendations.recipeQuantities(selectedMeal,preferences.targetServings);
          if(byId('scaledIngredients'))byId('scaledIngredients').innerHTML='<strong>'+preferences.targetServings+'인분 조리량</strong><p>'+(quantityView.scalable?'원문 '+quantityView.sourceServings+'인분에서 환산했습니다. 직접 계산할 수 없는 수량은 원문량과 확인 필요 표시를 남겼습니다.':'원문 인분이 없어 자동 환산할 수 없습니다.')+'</p><ul>'+quantityView.labels.map(label=>'<li>'+escapeHtml(label)+'</li>').join('')+'</ul>';
          renderDetailNutrition();
          byId('recipeAmounts').innerHTML=(detail.detailIngredients||[]).map((item)=>'<li>'+escapeHtml(item)+'</li>').join('');
          byId('detailSteps').innerHTML=(detail.steps||[]).length?(detail.steps||[]).map((step)=>'<li>'+escapeHtml(step)+'</li>').join(''):'<li>'+escapeHtml(detail.recipeNote||'자세한 조리 순서는 원문에서 확인하세요.')+'</li>';
          let stepsBasis=byId('recipeStepsBasis');
          if(!stepsBasis){stepsBasis=document.createElement('p');stepsBasis.id='recipeStepsBasis';stepsBasis.className='footer-note';byId('detailSteps').before(stepsBasis);}
          stepsBasis.textContent=quantityView.sourceServings
            ? '조리 순서의 분량은 원문 '+quantityView.sourceServings+'인분 기준입니다. 선택한 '+preferences.targetServings+'인분의 재료량은 위 환산 목록을 참고하세요.'
            : '조리 순서의 분량은 원문 그대로입니다. 원문 인분이 확인되지 않아 선택 인분으로 환산하지 않았습니다.';
          const sourceUrl=safeRecipeSourceUrl(detail.sourceUrl,detail.sourceRecipeId);
          if(sourceUrl)byId('recipeSource').href=sourceUrl;
          else byId('recipeSource').removeAttribute('href');
          byId('recipeSource').hidden=!sourceUrl;
          byId('recipeStepsBlock').hidden=false;
          const detailEvidence=inlineCatalog?null:reviewEvidenceFor({...detail,detailSha256:reference.detailSha256},reference===meal?manifest.snapshotId:reference.snapshotId);
          byId('recipeMeta').textContent='원문 '+(detail.sourceServingText||'원문 인분 미표기')+' · '+(detail.sourceTimeText?detail.sourceTimeText+' · ':Number.isFinite(selectedMeal.time)?selectedMeal.time+'분 · ':'')+reviewSummary({reviewEvidence:detailEvidence});
          byId('recipeProvenance').textContent='원문: '+(detail.sourceTitle||'상세 참조')+' · 작성자: '+(detail.sourceAuthor||'미상');
          byId('addShoppingItems').disabled=false;
          byId('eatFromDetail').disabled=false;
          byId('addFromDetail').disabled=!meal;
          renderDetailShopping();
          byId('detailDrawer').classList.add('open');
          historyNotice='';renderHistoryStatus();
          byId('closeDetail').focus();
          return selectedMeal;
        } catch(error) {
          if(requestVersion!==detailRequestVersion)return null;
          detailLoading=false;
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
        detailLoading=false;
        selectedMeal=null;
        byId('detailTitle').textContent='레시피 상세를 열 수 없습니다';
        byId('detailIntro').textContent='저장된 상세의 지점 또는 해시를 검증하지 못했습니다.';
        for(const id of ['detailOfferInfo','shoppingTitle','shoppingSource','detailIngredients','shoppingTotalLabel','shoppingTotal','shoppingNote','recipeMeta','recipeAmounts','detailSteps','recipeProvenance'])byId(id).textContent='';
        byId('recipeSource').removeAttribute('href');
        byId('recipeSource').hidden=true;
        byId('recipeStepsBlock').hidden=true;
        if(byId('recipeStepsBasis'))byId('recipeStepsBasis').textContent='';
        if(byId('detailNutrition'))byId('detailNutrition').textContent='';
        for(const id of ['addShoppingItems','eatFromDetail','addFromDetail'])byId(id).disabled=true;
        historyNotice='';renderHistoryStatus();
        byId('detailDrawer').classList.add('open');
        byId('closeDetail').focus();
      }

      const requestDetail=(id,useArchived=false)=>{
        detailReturnFocus=document.activeElement instanceof HTMLElement?document.activeElement:null;
        return openDetail(id,useArchived).catch((error)=>{if(error.detailRequestVersion===detailRequestVersion)showDetailError(error);return null;});
      };

      function closeDetail() {
        detailRequestVersion+=1;
        detailLoading=false;
        byId('detailDrawer').classList.remove('open');
        if(detailReturnFocus?.isConnected)detailReturnFocus.focus();
      }

      byId('targetServings').value=String(preferences.targetServings);
      renderModeControls();renderMealMomentControls();renderToday();renderPlanAndBind();renderPantry();showPlanCoverage();renderMenu();bindDetailTriggers();bindMenuActions();renderGroceries();
      byId('sourceStatus').textContent=activeArea+' · '+activeStore+' · '+berlinDate+' 기준';
      byId('sourceCheck').textContent='· 스냅샷 '+manifest.weekStart+' · '+(activeBranch.branch||activeBranch.branchId)+(location.sourceCoverage?' · '+location.sourceCoverage.status:'');
      if(berlinDate<manifest.weekStart)byId('sourceCheck').textContent+=' · '+manifest.weekStart+'부터 시작하는 다음 주 자료입니다.';
      byId('sourceStatus').dataset.snapshotState=location.coverage?.sparse?'sparse':'ready';
      const lastOfferDay=sourceLocation.offers.map((offer)=>offer.validThrough).filter(Boolean).sort().at(-1);
      if(lastOfferDay&&lastOfferDay<berlinDate){byId('sourceStatus').dataset.snapshotState='expired';byId('sourceCheck').textContent+=' · 행사기간 종료, 가격 재확인 필요';}
      byId('savePlan').addEventListener('click',savePlans);
      const refreshForPreferences=()=>{
        const readiness=modeReadiness();
        // Keep the requested mode and explain missing evidence instead of changing goals.
        closeDetail();selectedMeal=null;
        for(const id of ['addShoppingItems','eatFromDetail','addFromDetail'])byId(id).disabled=true;
        autoPlans=buildAutoPlans(plans);
        const refreshed=shopping.refreshAutoPlans(plans,autoPlans);
        for(const moment of Object.keys(refreshed))plans[moment]=refreshed[moment];
        recommendationIndex=0;
        storage.set(preferenceStorageKey,recommendations.serializePreferences(preferences));
        renderModeControls();renderToday();renderPlanAndBind();showPlanCoverage();renderMenu();bindDetailTriggers();bindMenuActions();savePlans();
      };
      document.querySelectorAll('input[name="recommendationMode"]').forEach((input)=>input.addEventListener('change',async()=>{
        if(!input.checked||input.disabled)return;
        preferences.mode=input.value;
        if(nutritionModes.has(input.value)&&['idle','loading'].includes(nutritionCatalogState)) {
          const work=ensureNutritionCatalog();refreshForPreferences();await work;
          if(preferences.mode!==input.value){renderModeControls();renderMenu();bindDetailTriggers();bindMenuActions();return;}
        }
        refreshForPreferences();
      }));
      if(byId('mealDate')){byId('mealDate').value=berlinDate;byId('mealDate').addEventListener('change',event=>{const next=new URLSearchParams(window.location.search);next.set('date',event.target.value);window.location.search=next.toString();});}
      if(byId('viewSourceWeek'))byId('viewSourceWeek').addEventListener('click',()=>{const next=new URLSearchParams(window.location.search);next.set('date',manifest.weekStart);window.location.search=next.toString();});
      const applyConditions=async()=>{
        dietary=byId('dietaryChoice')?.value||'any';excludeIngredients=(byId('excludeIngredients')?.value||'').split(/[,，]/).map(x=>x.trim()).filter(Boolean).slice(0,20);
        storage.set('choi01-meal-conditions-v1',JSON.stringify({dietary,excludeIngredients}));
        activeFilter='all';document.querySelectorAll('.filter').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter==='all')));
        if(excludeIngredients.length)await Promise.all(meals.filter(meal=>!meal.detailIngredients.length).map(async meal=>{try{hydrateMeal(meal,await detailFor(meal,true));}catch{/* Full ingredients remain unavailable. */}}));
        refreshForPreferences();
        const conflicts=weeklyPlanMeals().filter(meal=>!eligibleForDiet(meal));
        if(conflicts.length)byId('planStatus').textContent='직접 저장한 메뉴 '+conflicts.length+'개가 변경한 조건과 다릅니다. 해당 메뉴를 바꿔주세요.';
      };
      byId('dietaryChoice')?.addEventListener('change',applyConditions);
      byId('applyConditions')?.addEventListener('click',applyConditions);
      byId('discountOnly')?.addEventListener('change',()=>{renderMenu();bindDetailTriggers();bindMenuActions();});
      byId('targetServings').addEventListener('change',(event)=>{preferences.targetServings=Number(event.target.value);refreshForPreferences();});
      byId('autoPlan').addEventListener('click',()=>{autoPlans=buildAutoPlans(plans);const refreshed=shopping.refreshAutoPlans(plans,autoPlans);for(const moment of Object.keys(refreshed))plans[moment]=refreshed[moment];renderPlanAndBind();showPlanCoverage();savePlans();});
      byId('clearPlan').addEventListener('click',()=>{for(const moment of ['점심','저녁'])plans[moment]=Object.fromEntries(days.map(([day])=>[day,shopping.clearPlanSlot()]));renderPlanAndBind();savePlans();});
      document.querySelectorAll('[data-moment]').forEach((button)=>button.addEventListener('click',()=>{mealMoment=button.dataset.moment;selectedPlanTarget=null;historyNotice='';renderMealMomentControls();renderToday();renderPlanAndBind();}));
      const acceptMeal=(meal)=>{if(!meal||!eligibleForDiet(meal))return;plans[mealMoment][todayId]=shopping.normalizePlanSlot(meal.id,'manual');savePlans();renderPlanAndBind();};
      const acceptCurrent=()=>acceptMeal(currentMeal());
      byId('acceptToday').addEventListener('click',acceptCurrent);
      byId('todayShopping').addEventListener('click',()=>{const meal=currentMeal();if(meal)requestDetail(meal.id);});
      byId('nextRecommendation').addEventListener('click',()=>{const pool=modePool();if(pool.length<2)return;recommendationIndex=(recommendationIndex+1)%pool.length;renderToday();});
      byId('manualPick').addEventListener('click',()=>{if(window.matchMedia?.('(max-width: 767px)').matches)window.MealWorkspace?.showMobile('recipes');else window.MealWorkspace?.showContext('plan');byId('library').scrollIntoView({behavior:'smooth'});});
      byId('shoppingList').addEventListener('click',()=>{document.querySelector('[data-context-target="shop"]')?.click();byId('groceries').scrollIntoView({behavior:'smooth'});});
      byId('prepareShopping').addEventListener('click',async()=>{const button=byId('prepareShopping');button.disabled=true;try{const result=await hydratePlannedMeals();shoppingState.list=shopping.addToList(shoppingState.list,weekBasket());saveShopping();renderGroceries();byId('grocerySaveState').textContent=result.unavailableCount?'검증하지 못한 메뉴 '+result.unavailableCount+'개를 제외하고 확인된 재료를 저장했습니다.':'계획한 메뉴의 상세 재료까지 확인해 저장했습니다.';document.querySelector('[data-context-target="shop"]')?.click();byId('groceries').scrollIntoView({behavior:'smooth'});}finally{button.disabled=false;}});
      byId('addShoppingItems').addEventListener('click',()=>{if(!selectedMeal)return;shoppingState.list=shopping.addToList(shoppingState.list,basketFor([selectedMeal]));saveShopping();renderGroceries();});
      byId('addFromDetail').addEventListener('click',()=>{if(!selectedMeal)return;const meal=mealById(selectedMeal.id);if(meal&&eligibleForDiet(meal)){const {moment,day}=takePlanDestination();plans[moment][day]=shopping.normalizePlanSlot(meal.id,'manual');savePlans();renderPlanAndBind();}});
      byId('eatFromDetail').addEventListener('click',()=>acceptMeal(selectedMeal));
      byId('eatFromDetail').textContent='오늘 식단에 넣기';
      byId('markEaten').addEventListener('click',()=>{
        if(!canRecordMeal(selectedMeal)){historyNotice='원문을 확인할 수 없어 먹은 기록을 저장하지 않았습니다.';renderHistoryStatus();return;}
        actualDate=dateInBerlin();mealHistory=recommendations.restoreHistory(JSON.stringify(mealHistory),actualDate);
        const already=mealHistory.some(row=>row.sourceRecipeId===selectedMeal.sourceRecipeId&&row.date===actualDate&&row.moment===mealMoment);
        mealHistory=already?mealHistory.filter(row=>!(row.sourceRecipeId===selectedMeal.sourceRecipeId&&row.date===actualDate&&row.moment===mealMoment))
          : recommendations.recordMeal(mealHistory,selectedMeal,actualDate,mealMoment);
        historySaved=storage.set(historyStorageKey,JSON.stringify(mealHistory));
        historyNotice=already?actualDate+' '+mealMoment+'의 먹은 기록을 취소했습니다.':actualDate+' '+mealMoment+'에 먹은 메뉴를 기록했습니다. 다음 추천에 반영합니다.';
        recommendationIndex=0;renderToday();renderMenu();bindDetailTriggers();bindMenuActions();renderHistoryStatus();
      });
      document.querySelectorAll('.filter').forEach((button)=>{
        button.hidden=false;
        button.setAttribute('aria-pressed',String(button.dataset.filter==='all'));
        if(button.dataset.snapshotFilterBound==='true')return;
        button.dataset.snapshotFilterBound='true';
        button.addEventListener('click',()=>{
          if(button.disabled)return;
          activeFilter=button.dataset.filter||'all';
          if(activeFilter==='vegetarian'){dietary='vegetarian';storage.set('choi01-meal-conditions-v1',JSON.stringify({dietary,excludeIngredients}));if(byId('dietaryChoice'))byId('dietaryChoice').value=dietary;refreshForPreferences();}
          document.querySelectorAll('.filter').forEach((item)=>{const selected=item.dataset.filter===activeFilter;item.classList.toggle('active',selected);item.setAttribute('aria-pressed',String(selected));});
          renderMenu();bindDetailTriggers();bindMenuActions();
        });
      });
      byId('menuSearch').addEventListener('input',()=>{renderMenu();bindDetailTriggers();bindMenuActions();});
      byId('closeDetail').addEventListener('click',closeDetail);
      byId('closeDetailSecondary').addEventListener('click',closeDetail);
      byId('detailNutrition')?.addEventListener('input',(event)=>{
        if(!event.target.closest('[data-nutrition-ordinal]'))return;
        const status=byId('detailNutrition').querySelector('[data-nutrition-edit-status]');
        if(status)status.textContent='입력값은 아직 계산에 적용되지 않았습니다.';
      });
      byId('detailNutrition')?.addEventListener('click',(event)=>{
        const apply=event.target.closest('[data-apply-nutrition-grams]'),reset=event.target.closest('[data-reset-nutrition-grams]');
        if((!apply&&!reset)||!selectedMeal)return;
        const key=nutritionEditStorageKey(selectedMeal);if(!key||!editableNutrition(selectedNutritionBaseline))return;
        if(reset) {
          storage.remove(key);selectedNutritionEdits=null;selectedNutritionNotice='저장한 중량을 지우고 기존 계산값으로 되돌렸습니다.';
          renderDetailNutrition();return;
        }
        const ratio=selectedNutritionBaseline.sourceServings/preferences.targetServings;
        const gramsByOrdinal=Object.fromEntries([...byId('detailNutrition').querySelectorAll('[data-nutrition-ordinal]')].map(input=>[
          input.dataset.nutritionOrdinal,input.value.trim()===''?NaN:Number(input.value)*ratio
        ]));
        if(!calculateEditedNutrition(selectedNutritionBaseline,gramsByOrdinal)) {
          byId('detailNutrition').querySelector('[data-nutrition-edit-status]').textContent='모든 재료의 중량을 0 이상의 유한한 숫자로 입력하세요.';return;
        }
        selectedNutritionEdits=gramsByOrdinal;
        const saved=storage.set(key,JSON.stringify({version:1,sourceRecipeId:selectedMeal.sourceRecipeId,sourceContentHash:selectedMeal.sourceContentHash,sourceServings:selectedNutritionBaseline.sourceServings,gramsByOrdinal}));
        selectedNutritionNotice=saved?'입력한 중량을 이 브라우저에 저장했습니다.':'중량을 적용했습니다. 브라우저 저장을 사용할 수 없어 다시 열면 유지되지 않을 수 있습니다.';
        renderDetailNutrition();
      });
      byId('detailDrawer').addEventListener('keydown',(event)=>{
        if(event.key==='Escape'){event.preventDefault();closeDetail();return;}
        if(event.key!=='Tab')return;
        const focusable=[...byId('detailDrawer').querySelectorAll('button:not([disabled]), input:not([disabled]), a[href]')].filter((element)=>!element.hidden);
        if(!focusable.length)return;
        const first=focusable[0],last=focusable.at(-1);
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
      });
      byId('detailIngredients').addEventListener('change',(event)=>{
        const input=event.target.closest('[data-shopping-field="owned"]');
        if(!input)return;
        let pantryKeys=[input.dataset.shoppingKey];
        try {const keys=JSON.parse(input.dataset.shoppingPantryKeys||'null');if(Array.isArray(keys)&&keys.length)pantryKeys=keys;}catch{/* Use the visible ingredient key. */}
        for(const key of pantryKeys) {if(input.checked)shoppingState.pantry.add(key);else shoppingState.pantry.delete(key);}
        shoppingState.list=shoppingState.list.filter((item)=>!shopping.pantryOwns(item,shoppingState.pantry));
        if(preferences.mode==='value') {
          autoPlans=buildAutoPlans(plans);
          const refreshed=shopping.refreshAutoPlans(plans,autoPlans);
          for(const moment of Object.keys(refreshed))plans[moment]=refreshed[moment];
          recommendationIndex=0;renderToday();savePlans();
        }
        saveShopping();renderDetailShopping();renderGroceries();renderPlanAndBind();showPlanCoverage();
      });
      byId('pantryList').addEventListener('change',(event)=>{
        const input=event.target.closest('[data-pantry-key]');
        if(!input)return;
        if(input.checked){shoppingState.pantry.add(input.dataset.pantryKey);shoppingState.list=shoppingState.list.filter((item)=>!shopping.pantryOwns(item,shoppingState.pantry));}
        else shoppingState.pantry.delete(input.dataset.pantryKey);
        if(preferences.mode==='value'){
          autoPlans=buildAutoPlans(plans);
          const refreshed=shopping.refreshAutoPlans(plans,autoPlans);
          for(const moment of Object.keys(refreshed))plans[moment]=refreshed[moment];
          recommendationIndex=0;
        }
        saveShopping();savePlans();renderToday();renderPlanAndBind();renderGroceries();showPlanCoverage();
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
      byId('sourceStatus').textContent=legacyRequested?'지난 자료는 검증되지 않아 제공하지 않습니다':'이번 주 검증 자료를 불러올 수 없습니다';
      byId('sourceStatus').dataset.snapshotState='unavailable';
      byId('sourceCheck').textContent='· 다른 매장 자료로 대체하지 않았습니다';
      byId('todayTitle').textContent='메뉴 자료를 불러오지 못했습니다';
      byId('todayReason').textContent=legacyRequested?'검증된 이번 주 자료로 돌아가 주세요.':'잠시 뒤 다시 시도해 주세요.';
      byId('menuList').innerHTML='<p class="panel-copy" role="alert">선택한 지점의 메뉴를 표시할 수 없습니다.</p>';
      byId('weekGrid').innerHTML='<p class="panel-copy" role="alert" style="padding:16px">식단은 불러오지 못한 자료로 자동 채우지 않습니다.</p>';
      byId('pantryList').innerHTML='<li class="panel-copy" style="padding:14px">할인 재료를 확인할 수 없습니다.</li>';
      for(const selector of ['#autoPlan','#clearPlan','#savePlan','#acceptToday','#nextRecommendation','#todayShopping','#prepareShopping','#targetServings','input[name="recommendationMode"]','#manualPick','#shoppingList','#markEaten','#eatFromDetail','#addFromDetail','#addShoppingItems','#menuSearch','.filter','[data-moment]','#postcodeSelect','#storeSelect','#branchSelect'])document.querySelectorAll(selector).forEach((control)=>{control.disabled=true;});
      byId('snapshotRecovery').hidden=false;
      const safeParams=new URLSearchParams(window.location.search);
      safeParams.delete('snapshot');
      byId('legacySnapshotLink').textContent='이번 주 자료로 돌아가기';
      byId('legacySnapshotLink').href='?'+safeParams.toString();
      byId('retrySnapshot').addEventListener('click',()=>window.location.reload());
      const runtime={status:'unavailable',error};
      window.mealSnapshotRuntime=runtime;
      return runtime;
    }
  }

  window.MealRecipeData = {legacyEnabled, safeRecipeSourceUrl, reviewEvidenceFor, reviewSummary, sourceMinutes, nutritionPanelHtml, editableNutrition, nutritionEditStorageKey, calculateEditedNutrition, fromNutritionCatalog, fromSnapshotLocation, buildBrowseCatalog, currentOfferLocation, offerCatalogFromSnapshot, selectSnapshotLocation, acceptLegacyScopedPayload, startSnapshotApp};
}());
