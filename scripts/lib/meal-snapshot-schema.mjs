const requiredIdentityFields = ['ingredientId', 'species', 'cut', 'processingState', 'form', 'composition'];
const requiredOfferFields = [
  'offerId', 'postcode', 'chain', 'branchId', 'sourceRow', 'evidenceUrl',
  'validFrom', 'validThrough', 'productDe', 'pack', 'priceCents',
  'normalPriceCents', 'conditions', 'autoPriceEligible', 'identity'
];

function canonicalValue(value, seen) {
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return value;
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new TypeError('Canonical JSON cannot encode a non-finite number');
    return value;
  }
  if (Array.isArray(value)) return value.map((item) => canonicalValue(item, seen));
  if (typeof value !== 'object') throw new TypeError('Canonical JSON only supports JSON values');
  if (seen.has(value)) throw new TypeError('Canonical JSON cannot encode circular values');
  seen.add(value);
  const result = {};
  for (const key of Object.keys(value).sort()) result[key] = canonicalValue(value[key], seen);
  seen.delete(value);
  return result;
}

export function canonicalJson(value) {
  return JSON.stringify(canonicalValue(value, new Set()));
}

function nonEmptyString(value) {
  return typeof value === 'string' && value.length > 0;
}

function validDate(value) {
  return nonEmptyString(value) && /^\d{4}-\d{2}-\d{2}$/.test(value) && new Date(value).toISOString().slice(0, 10) === value;
}

export function validateSnapshot(snapshot) {
  const errors = [];
  if (!snapshot || typeof snapshot !== 'object' || Array.isArray(snapshot)) return { valid: false, errors: ['snapshot must be an object'] };
  if (snapshot.schemaVersion !== 1) errors.push('schemaVersion must be 1');
  if (!/^[a-f0-9]{64}$/.test(snapshot.snapshotId || '')) errors.push('snapshotId must be a SHA-256 hex digest');
  if (!Array.isArray(snapshot.offers)) errors.push('offers must be an array');
  if (errors.length || !Array.isArray(snapshot.offers)) return { valid: false, errors };

  const seenOfferIds = new Set();
  for (const [index, offer] of snapshot.offers.entries()) {
    const prefix = `offers[${index}]`;
    if (!offer || typeof offer !== 'object' || Array.isArray(offer)) {
      errors.push(`${prefix} must be an object`);
      continue;
    }
    for (const field of requiredOfferFields) if (!(field in offer)) errors.push(`${prefix}.${field} is required`);
    if (nonEmptyString(offer.offerId)) {
      if (seenOfferIds.has(offer.offerId)) errors.push(`${prefix}.offerId must be unique`);
      seenOfferIds.add(offer.offerId);
    }
    if (offer.postcode !== undefined && !/^\d{5}$/.test(offer.postcode)) errors.push(`${prefix}.postcode must be five digits`);
    if (offer.sourceRow !== undefined && (!Number.isInteger(offer.sourceRow) || offer.sourceRow < 2)) errors.push(`${prefix}.sourceRow must be a CSV row number`);
    if (offer.evidenceUrl !== undefined && offer.evidenceUrl !== null && !/^https:\/\//.test(offer.evidenceUrl)) errors.push(`${prefix}.evidenceUrl must be HTTPS or null`);
    if (offer.validFrom !== undefined && !validDate(offer.validFrom)) errors.push(`${prefix}.validFrom must be YYYY-MM-DD`);
    if (offer.validThrough !== undefined && !validDate(offer.validThrough)) errors.push(`${prefix}.validThrough must be YYYY-MM-DD`);
    if (validDate(offer.validFrom) && validDate(offer.validThrough) && offer.validFrom > offer.validThrough) errors.push(`${prefix}.validThrough must not precede validFrom`);
    if (offer.priceCents !== undefined && (!Number.isInteger(offer.priceCents) || offer.priceCents < 0)) errors.push(`${prefix}.priceCents must be non-negative cents`);
    if (offer.normalPriceCents !== undefined && offer.normalPriceCents !== null && (!Number.isInteger(offer.normalPriceCents) || offer.normalPriceCents < 0)) errors.push(`${prefix}.normalPriceCents must be non-negative cents or null`);
    if (offer.autoPriceEligible !== undefined && typeof offer.autoPriceEligible !== 'boolean') errors.push(`${prefix}.autoPriceEligible must be boolean`);
    if (offer.identity && typeof offer.identity === 'object' && !Array.isArray(offer.identity)) {
      for (const field of requiredIdentityFields) if (!nonEmptyString(offer.identity[field])) errors.push(`${prefix}.identity.${field} is required`);
    }
  }
  return { valid: errors.length === 0, errors };
}
