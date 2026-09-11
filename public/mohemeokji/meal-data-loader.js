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

  function assertManifest(manifest, current) {
    if (!manifest || manifest.schemaVersion !== 1 || manifest.snapshotId !== current.snapshotId
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
      || !current.snapshotId || !DIGEST.test(current.manifestSha256 || '')) {
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
    if (detail.schemaVersion !== 1 || detail.sourceRecipeId !== reference.sourceRecipeId) {
      throw unavailable('recipe detail boundary mismatch');
    }
    return detail;
  }

  window.MealDataLoader = {loadCurrentSnapshot, loadLocationSnapshot, loadRecipeDetail, loadRecipeDetailReference};
}());
