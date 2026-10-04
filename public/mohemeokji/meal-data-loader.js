/* Load only immutable, hash-pinned meal snapshot artifacts for the active store. */
(function () {
  const DATA_ROOT = '/mohemeokji/data/';
  const DIGEST = /^[a-f0-9]{64}$/;

  function unavailable(message) {
    const error = new Error('Meal snapshot unavailable: ' + message);
    error.code = 'MEAL_SNAPSHOT_UNAVAILABLE';
    return error;
  }

  function artifactPath(value) {
    if (typeof value !== 'string' || !value.length || !/^[A-Za-z0-9._/-]+$/.test(value) || value.startsWith('/')
      || value.includes('\\') || value.includes('?') || value.includes('#') || value.includes('%')) {
      throw unavailable('unsafe artifact path');
    }
    const parts = value.split('/');
    if (parts.some((part) => !part || part === '.' || part === '..')
      || parts[0] !== 'snapshots' || !value.endsWith('.json')) {
      throw unavailable('unsafe artifact path');
    }
    return value;
  }

  async function fetchBytes(path, fetcher) {
    let response;
    try { response = await fetcher(DATA_ROOT + path); }
    catch { throw unavailable('request failed'); }
    if (!response || response.ok !== true || typeof response.arrayBuffer !== 'function') {
      throw unavailable('request failed');
    }
    return new Uint8Array(await response.arrayBuffer());
  }

  function parseJson(bytes) {
    try { return JSON.parse(new TextDecoder().decode(bytes)); }
    catch { throw unavailable('invalid JSON'); }
  }

  async function digest(bytes) {
    const result = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(result), (value) => value.toString(16).padStart(2, '0')).join('');
  }

  async function verify(bytes, expected, label) {
    if (!DIGEST.test(expected || '') || await digest(bytes) !== expected) {
      throw unavailable(label + ' hash mismatch');
    }
  }

  function validDate(value) {
    if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;
    const date=new Date(value+'T00:00:00Z');
    return Number.isFinite(date.getTime())&&date.toISOString().slice(0,10)===value;
  }

  function assertManifest(manifest, current) {
    if (!manifest || manifest.schemaVersion !== 1 || manifest.snapshotId !== current.snapshotId
      || !validDate(manifest.weekStart) || manifest.weekStart!==current.weekStart
      || !Array.isArray(manifest.locations) || !manifest.locations.length
      || !manifest.fileHashes || typeof manifest.fileHashes !== 'object' || Array.isArray(manifest.fileHashes)) {
      throw unavailable('invalid manifest');
    }
    for (const [path, expected] of Object.entries(manifest.fileHashes)) {
      artifactPath(path);
      if (!DIGEST.test(expected || '')) throw unavailable('invalid artifact hash');
    }
    for (const field of ['coveragePath','recipeIndexPath']) {
      const path = artifactPath(manifest[field]);
      if (!DIGEST.test(manifest.fileHashes[path] || '')) throw unavailable('invalid ' + field);
    }
    for (const location of manifest.locations) {
      const path = artifactPath(location?.path);
      if (typeof location.postcode !== 'string' || typeof location.store !== 'string'
        || typeof location.branchId !== 'string' || !DIGEST.test(manifest.fileHashes[path] || '')) {
        throw unavailable('invalid location reference');
      }
    }
  }

  async function loadCurrentSnapshot(fetcher = window.fetch.bind(window)) {
    const currentBytes = await fetchBytes('current.json', fetcher);
    const current = parseJson(currentBytes);
    if (!current || current.schemaVersion !== 1 || typeof current.snapshotId !== 'string'
      || !current.snapshotId || !validDate(current.weekStart) || !DIGEST.test(current.manifestSha256 || '')) {
      throw unavailable('invalid current pointer');
    }
    const manifestPath = artifactPath(current.manifestPath);
    const manifestBytes = await fetchBytes(manifestPath, fetcher);
    await verify(manifestBytes, current.manifestSha256, 'manifest');
    const manifest = parseJson(manifestBytes);
    assertManifest(manifest, current);
    return manifest;
  }

  async function loadLocationSnapshot(manifest, selection, fetcher = window.fetch.bind(window)) {
    if (!manifest || !selection) throw unavailable('location not selected');
    const reference = manifest.locations?.find((location) =>
      location.postcode === String(selection.postcode)
      && location.store === selection.store
      && location.branchId === selection.branchId
    );
    if (!reference) throw unavailable('selected location missing');
    const path = artifactPath(reference.path);
    const bytes = await fetchBytes(path, fetcher);
    await verify(bytes, manifest.fileHashes?.[path], 'location');
    const location = parseJson(bytes);
    if (location.schemaVersion !== 1 || location.snapshotId !== manifest.snapshotId
      || location.postcode !== reference.postcode || location.store !== reference.store
      || location.branchId !== reference.branchId || !Array.isArray(location.recipes)) {
      throw unavailable('location boundary mismatch');
    }
    for (const recipe of location.recipes) {
      const detailPath = artifactPath(recipe?.detailPath);
      if (typeof recipe.sourceRecipeId !== 'string' || !DIGEST.test(recipe.detailSha256 || '')
        || manifest.fileHashes?.[detailPath] !== recipe.detailSha256) {
        throw unavailable('invalid recipe reference');
      }
    }
    return location;
  }

  async function loadRecipeDetail(location, sourceRecipeId, fetcher = window.fetch.bind(window)) {
    const reference = location?.recipes?.find((recipe) => recipe.sourceRecipeId === String(sourceRecipeId));
    if (!reference) throw unavailable('recipe detail missing');
    return loadRecipeDetailReference(reference,fetcher);
  }

  async function loadRecipeDetailReference(reference,fetcher = window.fetch.bind(window)) {
    if(!reference||typeof reference.sourceRecipeId!=='string') throw unavailable('recipe detail missing');
    const path = artifactPath(reference.detailPath);
    const bytes = await fetchBytes(path, fetcher);
    await verify(bytes, reference.detailSha256, 'recipe detail');
    const detail = parseJson(bytes);
    if (detail.schemaVersion !== 1 || detail.sourceRecipeId !== reference.sourceRecipeId
      || (reference.sourceContentHash&&detail.sourceContentHash!==reference.sourceContentHash)) {
      throw unavailable('recipe detail boundary mismatch');
    }
    return detail;
  }

  async function loadDiscoveryCatalog(manifest,fetcher=window.fetch.bind(window)) {
    if(!manifest.discoveryCatalogPath)return {recipes:[]};
    const path=artifactPath(manifest.discoveryCatalogPath);
    const bytes=await fetchBytes(path,fetcher);await verify(bytes,manifest.fileHashes[path],'discovery');
    const data=parseJson(bytes);
    if(data.snapshotId!==manifest.snapshotId||!Array.isArray(data.recipes))throw unavailable('invalid discovery catalog');
    return data;
  }

  async function loadNutritionCatalog(manifest,fetcher=window.fetch.bind(window)) {
    if(manifest.nutritionCatalogPath===undefined)return {recipes:[]};
    const path=artifactPath(manifest.nutritionCatalogPath);
    const recipeRoot='snapshots/'+manifest.weekStart+'/'+manifest.snapshotId+'/recipes/';
    if(!path.startsWith(recipeRoot)||!DIGEST.test(manifest.fileHashes?.[path]||''))throw unavailable('invalid nutrition catalog reference');
    const bytes=await fetchBytes(path,fetcher);await verify(bytes,manifest.fileHashes[path],'nutrition catalog');
    const data=parseJson(bytes);
    if(data.schemaVersion!==1||data.catalogVersion!=='nutrition-general-v1'||data.scope!=='nutrition-general'
      ||data.snapshotId!==manifest.snapshotId||data.weekStart!==manifest.weekStart||!Array.isArray(data.recipes))throw unavailable('invalid nutrition catalog');
    const identities=new Set();
    for(const reference of data.recipes) {
      const detailPath=artifactPath(reference?.detailPath);
      if(typeof reference.sourceRecipeId!=='string'||identities.has(reference.sourceRecipeId)||!DIGEST.test(reference.sourceContentHash||'')
        ||reference.saleLinked!==false||typeof reference.automaticMealEligible!=='boolean'
        ||!detailPath.startsWith(recipeRoot)||!DIGEST.test(reference.detailSha256||'')||manifest.fileHashes?.[detailPath]!==reference.detailSha256
        ||reference.nutritionFacts?.sourceRecipeId!==reference.sourceRecipeId||reference.nutritionFacts?.sourceContentHash!==reference.sourceContentHash
        ||!['complete','estimated'].includes(reference.nutritionFacts?.status)
        ||(Array.isArray(reference.offerIds)&&reference.offerIds.length))throw unavailable('invalid nutrition recipe reference');
      identities.add(reference.sourceRecipeId);
    }
    return data;
  }

  window.MealDataLoader = {loadNutritionCatalog,loadDiscoveryCatalog,loadCurrentSnapshot, loadLocationSnapshot, loadRecipeDetail, loadRecipeDetailReference};
}());
