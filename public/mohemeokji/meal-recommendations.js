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
  const runtimeRankingPolicy=window.mealNutritionPolicy||null;

  const normalized = (value) => String(value||'').normalize('NFKC').replace(/\s/g,'').replaceAll('계란','달걀').toLowerCase();
  const ratingArtifact = (value) => /(?:^|\s)[0-5]\.\d+\s*\(\d+\)\s*$/.test(String(value||''));
  const ingredientLabels = (meal) => (meal.detailIngredients || meal.ingredients?.map(item=>typeof item==='string'?item:item.label&&item.quantity&&item.label.includes(item.quantity)?item.label:[item.ingredient||item.label,item.quantity].filter(Boolean).join(' ')) || []).filter(value=>!ratingArtifact(value));
  function recipeAllowed(meal) {
    // Owner-selected fresh herbs; processed forms and unrelated compound words remain distinct.
    const labels=ingredientLabels(meal),terms=['냉이','달래','두릅','엄나무순','참나물','곰취','머위','방풍나물','세발나물','돌나물'];
    const contains=(value)=>terms.find(term=>String(value||'').replace(/고추\s*냉이/gu,'').includes(term));
    const processed=(value,term)=>new RegExp('(?:건조|냉동|말린)\\s*'+term+'|'+term+'\\s*(?:가루|분말)','u').test(value)||/(?:선택|대체)/u.test(value);
    if(labels.some(value=>{const term=contains(value);return term&&!processed(String(value),term);}))return false;
    const titleTerm=contains(meal.title);
    return !titleTerm||labels.some(value=>contains(value)&&processed(String(value),titleTerm));
  }
  function mealKind(meal) {
    if(/냉국|스무디|요거트볼|요거트\s*샐러드|라페|달걀찜|계란찜|초절임|양파절임|물김치|스프|수프|계란국|달걀국|케익|케이크|맛탕/.test(meal?.title||'')) return 'side';
    if(meal?.detailStatus==='source-link-only'&&!/볶음밥|비빔밥|덮밥|오므라이스|국밥|카레|파스타|스파게티|국수|수제비|라면|우동|전골|찌개|스테이크|피자/.test(meal.title||''))return 'side';
    return profile(meal||{}).kind || 'main';
  }
  function matchesConditions(meal, context={}) {
    if(!recipeAllowed(meal)) return false;
    const labels=ingredientLabels(meal);
    const dietary=context.dietary||'any';
    if(dietary!=='any') {
      const flags=[...(meal.filter||[]),...(meal.filters||[]),...(meal.dietaryFilters||[]),...(meal.recommendationProfile?.filters||[])];
      if(!flags.includes(dietary)) return false;
      // Flags are not allowed to override contradictory full ingredient evidence.
      if(labels.some(x=>/돼지|쇠고기|소고기|닭|연어|참치|새우|멸치|액젓|굴소스|치킨스톡|베이컨|소시지|스팸|젓갈/.test(x)&&!/식물성|비건/.test(x)))return false;
    }
    const excluded=(context.excludeIngredients||[]).map(normalized).filter(Boolean);
    if(excluded.length&&!labels.length) return false;
    if(excluded.some(word=>[meal.title,...labels].some(label=>normalized(label).includes(word))))return false;
    if(context.maxMinutes&&(!Number.isFinite(meal.time)||meal.time>context.maxMinutes))return false;
    return true;
  }
  const offerNounEvidence={
    '닭가슴살':/hähnchen[- ]?brustfilets?/i,
    '닭안심':/hähnchen[- ]?innenfilets?/i,
    '닭날개':/hähnchen(?:flügel|fluegel)/i,
    '돼지안심':/schweinefilet(?:\b|$)/i,
    '돼지목살':/(?:schweine[- ]?)?(?:nacken(?:braten)?|nackensteaks?)(?:\b|$)/i,
    '돼지등심':/schweine[- ]?rücken(?:\b|$)/i,
    '돼지뒷다리살':/schweine[- ]?schnitzel(?:\b|$)/i,
    '소·돼지 50/50 다짐육':/hackfleisch\s+gemischt(?:\b|$)/i,
    '돼지다짐육':/schweine[- ]?hackfleisch(?:\b|$)/i,
    '소고기':/(?:rind(?:er)?gulasch|gulasch\s+vom\s+rind)(?:\b|$)/i,
    '소고기등심':/(?:rib[- ]?eye|entrecôte|entrecote)(?:\b|$)/i,
    '칠면조가슴살':/putenbrust(?:filet)?(?:\b|$)/i,
    '연어':/(?:^|[\s-])lachsfilets?(?:\b|$)/i,
    '훈제연어':/(?:räucherlachs|raeucherlachs)(?:\b|$)/i,
    '송어':/(?:forellen?(?:[- ]?filet)?|lachsforellen[- ]?filetseite)(?:\b|$)/i,
    '새우':/(?:garnelen?|shrimps?)(?:\b|$)/i,
    '참치':/(?:thunfisch|tuna)(?:\b|$)/i,
    '토마토':/tomaten?(?:\b|$)/i,
    '파프리카':/paprika(?:\b|$)/i,
    '양파':/zwiebeln?(?:\b|$)/i,
    '버섯':/(?:champignons?|pilze)(?:\b|$)/i,
    '감자':/(?:speisekartoffeln|kartoffeln)(?:\b|$)/i,
    '고구마':/(?:süßkartoffeln|suesskartoffeln)(?:\b|$)/i,
    '당근':/(?:möhren|karotten)(?:\b|$)/i,
    '주키니':/zucchini(?:\b|$)/i,
    '오이':/(?:salatgurke|gurken?)(?:\b|$)/i,
    '양상추':/(?:kopfsalat|eisbergsalat|blattsalat)(?:\b|$)/i,
    '레몬':/zitronen?(?:\b|$)/i,
    '아보카도':/avocados?(?:\b|$)/i,
    '바나나':/bananen?(?:\b|$)/i,
    '블루베리':/(?:heidelbeeren?|blaubeeren?)(?:\b|$)/i,
    '딸기':/erdbeeren?(?:\b|$)/i,
    '복숭아':/pfirsiche?(?:\b|$)/i,
    '사과':/(?:äpfel|apfel)(?:\b|$)/i,
    '포도':/trauben?(?:\b|$)/i,
    '요거트':/(?:naturjoghurt|joghurt|skyr|speisequark|quark)(?:\b|$)/i,
    '치즈':/gouda(?:\b|$)/i,
    '슬라이스 가공치즈':/schmelzkäse(?:scheiben)?(?:\b|$)/i,
    '버터':/(?:^|[\s-])(?:marken)?butter(?:\b|$)/i,
    '허브 쿼크':/(?:kräuterquark|kraeuterquark)(?:\b|$)/i,
    '파스타':/(?:pasta|spaghetti|teigwaren)(?:\b|$)/i,
    '토스트':/(?:^|[\s-])toast(?:brot)?(?:\b|$)/i,
    '식빵':/toastbrot(?:\b|$)/i,
    '빵':/(?:brot|brötchen|broetchen)(?:\b|$)/i,
    '모짜렐라치즈':/mozzarella(?:\b|$)/i,
    '체다치즈':/cheddar(?:\b|$)/i,
    '파마산치즈':/parmesan(?:\b|$)/i,
    '달걀':/(?:eier|ei)(?:\b|$)/i,
    '쌀':/(?:langkorn[- ]?reis|basmati[- ]?reis|risotto[- ]?reis|reis)(?:\b|$)/i,
    '호밀빵':/roggenmischbrot(?:\b|$)/i,
    '또띠아':/(?:wraps?|tortillas?)(?:\b|$)/i,
    '올리브유':/(?:olivenöl|olivenoel)(?:\b|$)/i,
    '마늘':/knoblauch(?:\b|$)/i,
    '대파':/(?:lauchzwiebeln|frühlingszwiebeln|fruehlingszwiebeln)(?:\b|$)/i,
  };
  const offerContradictions={
    '닭가슴살':/bacon|speck|aspik|paniert|gegart|gewürzt|mariniert|schnitzel/i,
    '새우':/mariniert|knoblauch|chili|kräuter|gewürzt/i,
    '토마토':/dose|konserve|geschält|getrocknet|passiert|tomatenmark|sauce|ketchup|brötchen|broetchen|brot|gnocchi|pizza/i,
    '양파':/wurst|schinken|sauerfleisch|aspik|fleisch|geschnetzeltes|gyros|schwein/i,
    '당근':/saft|püree|pueree|suppe/i,
    '오이':/glas(?:\b|\s*\/)|abtropf|gewürz|gewuerz|eingelegt|essig|cornichon/i,
    '복숭아':/dose|konserve|abtropf|gezuckert|sirup|joghurt|nektar|saft/i,
    '버터':/butternut|kürbis|kuerbis|buttermilch|butterkäse|butterkaese|butterstollen|butterschinken|buttercroissant|kräuterbutter|kraeuterbutter|mischstreich|rama\s+mit\s+butter|kuchen|gebäck|gebaeck|konfekt/i,
    '토스트':/schinken|toasty|brötchen|broetchen/i,
    '모짜렐라치즈':/piccolini|pizza|tomate-mozzarella|sticks?|nuggets?|paniert|burrata|stracciatella/i,
    '쌀':/reisnudeln|milchreis|pudding|express|vorgegart|gekocht/i,
    '치즈':/schmelzkäse|schmelzkaese|käsezubereitung|kaesezubereitung/i,
  };
  function offerProductIdentityEligible(offer) {
    const ingredient=offer?.identity?.ingredientId||offer?.ingredient||'';
    const product=String(offer?.productDe||offer?.product||'');
    const text=[product,offer?.detail,offer?.pack,offer?.category,offer?.productInfo].filter(Boolean).join(' ');
    const noun=offerNounEvidence[ingredient];
    if(noun&&!noun.test(product))return false;
    const preparationText=text.replace(/\b(?:un|nicht\s+)(?:mariniert|gewürzt|gewuerzt|gegart|gekocht|geräuchert|geraeuchert)\b/gi,'');
    if(offerContradictions[ingredient]?.test(preparationText))return false;
    if(offer?.identity?.processingState==='raw'&&/mariniert|gewürzt|gewuerzt|paniert|gegart|gekocht|geräuchert|geraeuchert|verzehrfertig|stremel|gravad|gravlax|graved|räucher|raeucher|smoked|gebeizt|heißgeräuchert|heissgeraeuchert|kaltgeräuchert|kaltgeraeuchert/i.test(preparationText))return false;
    if(ingredient==='새우'&&offer?.identity?.processingState==='raw'&&!/(?:^|\W)(?:roh|natur|unmariniert|ungewürzt|ungewuerzt|tiefgefroren|ungegart)(?:\W|$)/i.test(text))return false;
    if(ingredient==='오이'&&!/salatgurke/i.test(product)&&!/(?:^|\W)(?:stück|stueck|frisch|fresh|klasse|bio)(?:\W|$)/i.test(text))return false;
    if(offer?.identity?.processingState==='fresh'&&offer?.identity?.species==='plant'&&/marmelade|konfitüre|konfituere|saft|nektar|sauce|suppe|püree|pueree|chips|brot|brötchen|broetchen|joghurt|dose|konserve|abtropf|getrocknet|eingelegt|garnelen|shrimp|wurst|schinken|fleisch|käse|kaese/i.test(text))return false;
    return true;
  }
  function safeOffer(offer) {
    return offerProductIdentityEligible(offer);
  }
  function offerMatchesRecipe(offer, meal) {
    if(!safeOffer(offer))return false;
    const labels=[meal.title,...ingredientLabels(meal)].join(' ');
    if(/champignon/i.test(offer.productDe||offer.product||'') && /새송이|느타리|표고|팽이|목이/.test(labels) && !/양송이|버섯\s*종류\s*무관/.test(labels))return false;
    const recipeText=[labels,...(meal.steps||[]).map((step)=>typeof step==='string'?step:step?.instruction||'')].join(' ');
    if(offer.identity?.ingredientId==='빵'&&/빵\s*케이크|빵케이크|큰\s*빵|천연효모빵|빵\s*속을?\s*파|속을\s*파낸|윗면.{0,12}칼집/u.test(recipeText)&&offer.identity?.form!=='whole-loaf')return false;
    if(offer.identity?.ingredientId==='모짜렐라치즈') {
      const form=offer.identity?.form;
      const mini=/미니\s*모짜렐라|보코치니|작은\s*모짜렐라\s*볼/u.test(recipeText);
      if(mini&&form!=='mini-balls')return false;
      if(!mini&&/모짜렐라(?:치즈)?\s*(?:\d+(?:\.\d+)?\s*개|한\s*개)/u.test(recipeText)&&form!=='ball')return false;
      if(!mini&&/모짜렐라(?:치즈)?\s*(?:블록|덩어리)/u.test(recipeText)&&form!=='block')return false;
    }
    return true;
  }
  function sourceMinutes(value) {
    const match=/^\s*([1-9]\d*)\s*분(?:\s*이내)?\s*$/u.exec(String(value||''));
    const minutes=match?Number(match[1]):null;
    return Number.isSafeInteger(minutes)&&minutes>0?minutes:null;
  }

  function recipeQuantities(meal, targetServings) {
    const servingText=meal.sourceServingText||meal.servingsText||'';
    const servingMatch=String(servingText).match(/^\s*(\d+(?:\.\d+)?)\s*인분\s*$/);
    const statedServings=servingMatch&&Number(servingMatch[1])>0?Number(servingMatch[1]):null;
    const structuredServings=Number.isFinite(meal.sourceServings)&&meal.sourceServings>0?meal.sourceServings:null;
    const sourceServings=structuredServings&&statedServings&&structuredServings!==statedServings?null:(statedServings||(!servingText?structuredServings:null));
    const target=Number.isFinite(targetServings)&&targetServings>0?targetServings:sourceServings;
    const scale=sourceServings&&target?target/sourceServings:1;
    const requiredAmounts={},unquantified=[];
    const labels=ingredientLabels(meal).map(label=>{
      const match=String(label).match(/^(.+?)\s+(\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?)\s*(kg|ml|g|l|개|공기|큰술|작은술|스푼|T|t|장|쪽|모|봉|캔|대|줄기)\s*$/);
      if(!match){unquantified.push(String(label));return String(label)+(sourceServings&&scale!==1?' (원문량 · 환산 확인 필요)':'');}
      const parts=match[2].split(/\s+/),amount=parts.reduce((sum,part)=>{const [n,d]=part.split('/').map(Number);return sum+(d===undefined?n:d>0?n/d:NaN);},0)*scale;
      if(!Number.isFinite(amount)||amount<=0){unquantified.push(String(label));return String(label)+(sourceServings&&scale!==1?' (원문량 · 환산 확인 필요)':'');}
      const name=match[1].trim(),unit=match[3];
      if(['g','kg','ml','l'].includes(unit)) {
        const canonicalUnit=unit==='kg'?'g':unit==='l'?'ml':unit;
        const canonicalAmount=amount*(unit==='kg'||unit==='l'?1000:1);
        if(requiredAmounts[name]&&requiredAmounts[name].unit!==canonicalUnit){delete requiredAmounts[name];unquantified.push(String(label));}
        else requiredAmounts[name]={amount:canonicalAmount+(requiredAmounts[name]?.amount||0),unit:canonicalUnit};
      }
      return name+' '+Number(amount.toFixed(3))+unit;
    });
    // Editorial structured quantities are fallback only; never overwrite source amounts.
    // Only source labels establish purchasable quantities. A legacy estimate cannot
    // turn an ambiguous label into a measured requirement.
    return {sourceServings,targetServings:target,scalable:Boolean(sourceServings),requiredAmounts:!sourceServings&&targetServings!==undefined?{}:requiredAmounts,labels,unquantified};
  }

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
    const mainOffers = mainIngredients.filter((name)=>Object.hasOwn(catalog,name)&&offerMatchesRecipe({...catalog[name],identity:{...catalog[name].identity,ingredientId:name}},meal)).map((name)=>({name,product:catalog[name].product || name,pack:catalog[name].pack || '',priceCents:catalog[name].priceCents}));
    const secondaryOffers = names.filter((name)=>!mainIngredients.includes(name) && Object.hasOwn(catalog,name));
    const substitutionNotes = [];
    if (mainIngredients.includes('닭가슴살') && meal.detailIngredients?.some((label)=>label.includes('닭가슴살')) && !catalog['닭가슴살'] && catalog['닭안심']) {
      substitutionNotes.push('이번 행사 상품은 닭안심('+catalog['닭안심'].product+')입니다. 원문 닭가슴살과 부위가 달라 대체 후보로만 안내하며, 구매 합계에는 자동 연결하지 않습니다.');
    }
    return {mainIngredients,mainOffers,secondaryOffers,substitutionNotes};
  }

  function contextCatalog(context,meal) {
    const selected=typeof context?.catalogFor==='function'?context.catalogFor(meal):context?.catalog;
    return selected&&typeof selected==='object'?selected:{};
  }

  function score(meal, options={}) {
    const {history = [], date, historyDate, moment = '저녁', offerFrequency = {}}=options;
    const catalog=contextCatalog(options,meal);
    const info = explain(meal,catalog), meta = profile(meal);
    const recent = restoreHistory(JSON.stringify(history),historyDate||date);
    const sameDish = recent.some((row)=>row.sourceRecipeId === identity(meal));
    const familyRecent = recent.slice(0,2).filter((row)=>row.family === meta.family).length;
    const mainCoverage = info.mainIngredients.length ? info.mainOffers.length / info.mainIngredients.length : 0;
    const storeSpecificity = info.mainOffers.reduce((sum,offer)=>sum+12/Math.max(1,offerFrequency[offer.name]||1),0);
    const breakfast = meal.tags.includes('아침') && ['점심','저녁'].includes(moment) ? 140 : 0;
    const side = meta.kind === 'side' ? 140 : 0;
    const review = meal?.reviewEvidence;
    const verifiedReviews = review?.status === 'verified' && Number.isSafeInteger(review.reviewCount) && review.reviewCount > 0;
    const reviewBoost = verifiedReviews
      ? Math.min(30, Math.log1p(review.reviewCount) * 5) + (Number.isFinite(review.ratingValue) ? review.ratingValue : 0)
      : 0;
    return mainCoverage*100 + storeSpecificity + Math.min(info.secondaryOffers.length,3)*3 - Math.min(meal.time/15,15)
      + reviewBoost - breakfast - side - (sameDish ? 160 : 0) - familyRecent*18;
  }

  function rank(meals, options) {
    const eligible=options.requireMainOffer ? available(meals,options) : meals;
    return eligible.slice().sort((a,b)=>score(b,options)-score(a,options) || identity(a).localeCompare(identity(b)));
  }

  function available(meals, options={}) {
    return meals.filter((meal)=>recipeAllowed(meal)&&explain(meal,contextCatalog(options,meal)).mainOffers.length>0);
  }

  function nutritionReadiness(meal) {
    const facts=meal?.nutritionFacts,perServing=facts?.perServing;
    const fields=['kcal','proteinGrams','fiberGrams','sodiumMg'];
    const estimated=facts?.status==='estimated'&&facts.assumptionsComplete===true&&facts.uncertaintyKind==='reviewed-scenario-interval'&&Array.isArray(facts.assumptions)&&facts.assumptions.length>0
      &&fields.every(field=>Number.isFinite(facts.perServingRange?.[field]?.min)&&facts.perServingRange[field].min>=0&&Number.isFinite(facts.perServingRange[field].max)&&facts.perServingRange[field].max>=facts.perServingRange[field].min&&perServing?.[field]>=facts.perServingRange[field].min&&perServing[field]<=facts.perServingRange[field].max);
    const ready=(facts?.status==='complete'||estimated)&&typeof facts.source==='string'&&facts.source.trim()
      &&Number.isFinite(facts.sourceServings)&&facts.sourceServings>0
      &&perServing&&fields.every((field)=>Number.isFinite(perServing[field])&&perServing[field]>=0);
    return {ready:Boolean(ready),status:ready?facts.status:'unknown',facts:ready?perServing:null};
  }

  function costReadiness(cart) {
    const unknown=Array.isArray(cart?.unknownItemKeys)?cart.unknownItemKeys:[];
    const quantity=Array.isArray(cart?.quantityCheckKeys)?cart.quantityCheckKeys:[];
    const subtotalValid=Number.isSafeInteger(cart?.knownSubtotalCents)&&cart.knownSubtotalCents>=0;
    const ready=subtotalValid&&cart?.costStatus==='complete'&&!unknown.length&&!quantity.length;
    return {ready,status:subtotalValid&&['complete','partial','unknown'].includes(cart?.costStatus)?cart.costStatus:'unknown',knownSubtotalCents:subtotalValid?cart.knownSubtotalCents:null,savingsStatus:cart?.savingsStatus==='complete'?'complete':'unavailable'};
  }

  function localBasketEvidenceReady(cart,context,meal) {
    if(context?.localBasketEvidence!==true||!Array.isArray(cart?.items)||!cart.items.length)return false;
    if(['postcode','store','branchId','date','targetServings'].some((key)=>context[key]!==undefined&&cart?.[key]!==context[key]))return false;
    const primary=new Set(profile(meal||{}).primaryIngredients||[]);
    let subtotal=0;
    for(const item of cart.items) {
      const identityValue=item?.identity;
      const product=item?.product||item?.productDe;
      const source=item?.sourceURL||item?.source;
      if(!identityValue||typeof identityValue.ingredientId!=='string'||typeof product!=='string'||!product.trim())return false;
      if(typeof source!=='string'||!/^https:\/\/[^\s@]+$/i.test(source))return false;
      if(!/^[a-f0-9]{64}$/.test(item.sourceSha256||''))return false;
      if(context.date&&(!(typeof item.validFrom==='string'&&typeof item.validThrough==='string')||item.validFrom>context.date||item.validThrough<context.date))return false;
      if(!Number.isSafeInteger(item.priceCents)||item.priceCents<0||!Number.isSafeInteger(item.quantity)||item.quantity<1||!Number.isSafeInteger(item.subtotalCents)||item.subtotalCents!==item.priceCents*item.quantity||item.quantityComplete!==true)return false;
      if(!offerMatchesRecipe({identity:identityValue,productDe:product,detail:item.detail,pack:item.pack},meal))return false;
      if(primary.has(identityValue.ingredientId)&&typeof context.offerIds?.has==='function'&&(!item.offerId||!context.offerIds.has(item.offerId)))return false;
      if(item.owned!==true)subtotal+=item.subtotalCents;
    }
    return Number.isSafeInteger(cart.knownSubtotalCents)&&cart.knownSubtotalCents===subtotal;
  }

  function evaluateRecipeForMode(meal, context={}, mode='balanced') {
    const selectedMode=modes.has(mode)?mode:'balanced';
    const reasons=[];
    let eligible=Boolean(meal&&typeof identity(meal)==='string'&&identity(meal));
    if(!eligible) reasons.push('출처 레시피 식별자가 없습니다.');
    if(meal&&!matchesConditions(meal,context)){eligible=false;reasons.push('식단 조건 또는 제외 재료 기준에 맞지 않습니다.');}
    if(context.store&&meal?.store!==context.store) { eligible=false; reasons.push('선택한 마트의 메뉴가 아닙니다.'); }
    if(context.branchId&&meal?.branchId!==context.branchId) { eligible=false; reasons.push('선택한 지점의 메뉴가 아닙니다.'); }
    if(context.mealOnly&&['side','breakfast'].includes(mealKind(meal))) { eligible=false; reasons.push('점심·저녁 자동 추천용 주식 메뉴가 아닙니다.'); }
    if(context.requireMainOffer&&explain(meal||{sale:[],missing:[]},contextCatalog(context,meal)).mainOffers.length===0) { eligible=false; reasons.push('현재 지점의 정확한 주재료 할인과 연결되지 않습니다.'); }
    if(typeof context.offerIds?.has==='function'&&!((meal?.offerIds||[]).some((offerId)=>context.offerIds.has(offerId)))) { eligible=false; reasons.push('현재 지점의 할인상품 ID와 일치하지 않습니다.'); }
    const readiness={cost:'unknown',savings:'unavailable',nutrition:'unknown'};
    const scoreComponents={qualityScore:Number.isFinite(meal?.qualityScore)?meal.qualityScore:null};
    if(selectedMode==='value') {
      if(context.requireCompilerBasketFacts&&(meal?.basketFacts?.sourceCoverage!=='complete'||meal.basketFacts.targetServings!==context.targetServings)) { eligible=false; reasons.push('선택한 인분 수의 전체 재료 범위가 검증된 구매 바구니 자료가 없습니다.'); }
      if(context.requireCompilerBasketFacts&&context.date&&['date','postcode','store','branchId'].some(key=>context[key]&&meal?.basketFacts?.[key]!==context[key])) { eligible=false; reasons.push('구매비용 근거의 날짜 또는 지점이 현재 선택과 다릅니다.'); }
      const cart=typeof context.basketFor==='function'?context.basketFor(meal,context.targetServings||2):meal?.basketFacts;
      if(context.requireCompilerBasketFacts&&!localBasketEvidenceReady(cart,context,meal)) { eligible=false; reasons.push('상품별 식별정보·가격 출처·계산 근거가 확인되지 않아 구매 합계를 사용할 수 없습니다.'); }
      const cost=costReadiness(cart);
      readiness.cost=cost.status;readiness.savings=cost.savingsStatus;scoreComponents.knownSubtotalCents=cost.knownSubtotalCents;
      if(!cost.ready) { eligible=false; reasons.push('가격 또는 필요한 포장 수량이 모두 확인되지 않았습니다.'); }
      else reasons.push('확인된 구매 합계 '+cost.knownSubtotalCents+'센트 기준입니다.');
    } else if(selectedMode==='nutrition'||selectedMode==='diet') {
      const nutrient=nutritionReadiness(meal);readiness.nutrition=nutrient.status;
      if(!nutrient.ready) { eligible=false; reasons.push('원문 인분 수와 영양 근거가 완전하지 않습니다.'); }
      else {
        Object.assign(scoreComponents,nutrient.facts);
        const policy=(context.rankingPolicy||runtimeRankingPolicy)?.modes?.[selectedMode];
        if(!policy) { eligible=false; reasons.push('추천 정책 자료를 불러오지 못했습니다.'); }
        else reasons.push((nutrient.status==='estimated'?'환산 가정에 따른 추정 1인분: ':'재료 투입량 기준 1인분: ')+Math.round(nutrient.facts.kcal)+' kcal · 단백질 '+nutrient.facts.proteinGrams.toFixed(1)+' g · 식이섬유 '+nutrient.facts.fiberGrams.toFixed(1)+' g · 나트륨 '+Math.round(nutrient.facts.sodiumMg)+' mg · 정책 가중치 열량 '+policy.weights.kcal+'%·단백질 '+policy.weights.proteinGrams+'%·식이섬유 '+policy.weights.fiberGrams+'%·나트륨 '+policy.weights.sodiumMg+'%');
      }
    } else if(explain(meal||{sale:[],missing:[]},contextCatalog(context,meal)).mainOffers.length) reasons.push('현재 할인상품과 메뉴 다양성을 기준으로 추천합니다.');
    else reasons.push('전체 레시피의 주재료와 메뉴 다양성을 기준으로 추천합니다.');
    return {eligible,readiness,scoreComponents,reasons};
  }

  function rankForMode(pool, context={}, mode='balanced') {
    const eligible=(pool||[]).filter((meal)=>evaluateRecipeForMode(meal,context,mode).eligible);
    if(!eligible.length)return [];
    const facts=(meal)=>evaluateRecipeForMode(meal,context,mode).scoreComponents;
    let compare=null;
    if(mode==='value') compare=(a,b)=>facts(a).knownSubtotalCents-facts(b).knownSubtotalCents;
    if(mode==='nutrition'||mode==='diet') {
      const policy=(context.rankingPolicy||runtimeRankingPolicy).modes[mode];
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

  function planAutoSlots(pool, {plans={},days=[],moments=['점심','저녁'],mode='balanced',context={}}={}) {
    const ranked=rankForMode(pool,context,mode);
    const byId=new Map((pool||[]).map((meal)=>[meal.id,meal]));
    const used=new Set();
    const families=new Map(),methods=new Map();
    for(const plan of Object.values(plans||{}))for(const slot of Object.values(plan||{})) {
      if(slot?.origin!=='manual'||!slot.recipeId)continue;
      used.add(slot.recipeId);
      const meal=byId.get(slot.recipeId);
      if(!meal)continue;
      const meta=profile(meal);
      families.set(meta.family,(families.get(meta.family)||0)+1);
      methods.set(meta.method,(methods.get(meta.method)||0)+1);
    }
    const result=Object.fromEntries(moments.map((moment)=>[moment,{}]));
    let filled=0,lastFamily=null;
    for(const day of days)for(const moment of moments) {
      const current=plans?.[moment]?.[day];
      if(current?.origin==='manual') {
        result[moment][day]={recipeId:current.recipeId||null,origin:'manual',dismissedRecipeIds:Array.isArray(current.dismissedRecipeIds)?current.dismissedRecipeIds.slice(-20):[]};
        const manual=byId.get(current.recipeId);
        if(manual)lastFamily=profile(manual).family;
        continue;
      }
      const dismissed=new Set(current?.dismissedRecipeIds||[]);
      let candidates=ranked.filter((meal)=>!used.has(meal.id)&&!dismissed.has(meal.id)&&!dismissed.has(identity(meal))&&(families.get(profile(meal).family)||0)<2);
      if(!candidates.length)candidates=ranked.filter((meal)=>!used.has(meal.id)&&!dismissed.has(meal.id)&&!dismissed.has(identity(meal)));
      const differentFamily=candidates.filter((meal)=>profile(meal).family!==lastFamily);
      if(differentFamily.length)candidates=differentFamily;
      const methodFloor=Math.min(...candidates.map((meal)=>methods.get(profile(meal).method)||0));
      const selected=candidates.find((meal)=>(methods.get(profile(meal).method)||0)===methodFloor)||null;
      result[moment][day]={recipeId:selected?.id||null,origin:'auto',dismissedRecipeIds:Array.isArray(current?.dismissedRecipeIds)?current.dismissedRecipeIds.slice(-20):[]};
      if(!selected)continue;
      filled+=1;used.add(selected.id);
      const meta=profile(selected);lastFamily=meta.family;
      families.set(meta.family,(families.get(meta.family)||0)+1);
      methods.set(meta.method,(methods.get(meta.method)||0)+1);
    }
    return {plans:result,coverage:{eligible:ranked.length,filled,totalSlots:days.length*moments.length,limited:filled<days.length*moments.length}};
  }

  function sequence(meals, options, count = meals.length) {
    const matched = options.requireMainOffer ? available(meals,options) : meals;
    const conditioned=matched.filter((meal)=>matchesConditions(meal,options));
    const eligible = options.mealOnly ? conditioned.filter((meal)=>!['side','breakfast'].includes(mealKind(meal))) : conditioned;
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

  function browse(meals, options = {}) {
    const current = available(meals,options);
    const currentIds = new Set(current.map(identity));
    const general = meals.filter((meal)=>recipeAllowed(meal)&&matchesConditions(meal,options)&&!currentIds.has(identity(meal)));
    return [
      ...sequence(current,{...options,requireMainOffer:false},current.length),
      ...sequence(general,{...options,requireMainOffer:false},general.length)
    ];
  }

  function current(meals, options, selectedId = null) {
    // A deliberate library choice may be a side; automatic meals may not.
    return meals.find((meal)=>meal.id===selectedId) || sequence(meals,{...options,mealOnly:true},1)[0] || null;
  }

  window.MealRecommendations = {sourceMinutes,recipeAllowed,mealKind,matchesConditions,offerProductIdentityEligible,safeOffer,offerMatchesRecipe,recipeQuantities,available,rank,sequence,browse,current,explain,restoreHistory,recordMeal,restorePreferences,serializePreferences,evaluateRecipeForMode,rankForMode,nextCandidate,planAutoSlots};
}());
