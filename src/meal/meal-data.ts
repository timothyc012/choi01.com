export type MealArea = { city: string; postcode: string; data_url: string };
export type MealIndex = { schema_version: '1.0'; generated_at: string; areas: MealArea[] };

export type PrivateOffer = {
  retailer: string;
  product_name: string;
  ingredient_name: string;
  price_eur: number;
  quantity: string;
  source_url: string;
  valid_until: string;
};

export type PrivateMeal = {
  recipe_id: string;
  title: string;
  detail_mode: 'curated' | 'source_link';
  matched_offer_ingredients: string[];
  missing_ingredients: string[];
  estimated_cost_eur: number;
  retailers: string[];
  source_url?: string | null;
  steps?: string[];
};

export type PrivateShoppingItem = {
  ingredient_name: string;
  retailers: string[];
  estimated_price_eur: number;
  source: string;
  german_product_name?: string | null;
  quantity?: string | null;
};

export type MealSnapshot = {
  schema_version: '1.0';
  city: string;
  postcode: string;
  week_key: string;
  generated_at: string;
  valid_from: string;
  valid_until: string;
  availability: 'available' | 'partial' | 'unavailable';
  between_weeks: boolean;
  retailer_status: unknown[];
  offers: PrivateOffer[];
  meals: PrivateMeal[];
  shopping_list: PrivateShoppingItem[];
  sources: string[];
};

export type MealPageState = {
  kind: 'available' | 'partial' | 'unavailable' | 'expired' | 'between-weeks';
  offers: PrivateOffer[];
  meals: PrivateMeal[];
};

export function parseMealIndex(value: unknown): MealIndex {
  const root = record(value, 'private meal index');
  if (root.schema_version !== '1.0' || !Array.isArray(root.areas)) fail('private meal index');
  const areas = root.areas.map((item) => {
    const area = record(item, 'private meal area');
    const postcode = text(area.postcode, 'private meal area postcode');
    if (!/^\d{5}$/.test(postcode)) fail('private meal area postcode');
    return {
      city: text(area.city, 'private meal area city'),
      postcode,
      data_url: safeRelativeJsonUrl(area.data_url),
    };
  });
  return {
    schema_version: '1.0',
    generated_at: isoText(root.generated_at, 'private meal index generated_at'),
    areas,
  };
}

export function parseMealSnapshot(value: unknown): MealSnapshot {
  const root = record(value, 'private meal snapshot');
  const postcode = text(root.postcode, 'private meal snapshot postcode');
  if (!/^\d{5}$/.test(postcode)) fail('private meal snapshot postcode');
  const availability = root.availability;
  if (!['available', 'partial', 'unavailable'].includes(String(availability))) {
    fail('private meal snapshot availability');
  }
  if (!Array.isArray(root.offers) || !Array.isArray(root.meals)) fail('private meal snapshot');
  return {
    schema_version: root.schema_version === '1.0' ? '1.0' : fail('private meal snapshot schema'),
    city: text(root.city, 'private meal snapshot city'),
    postcode,
    week_key: text(root.week_key, 'private meal snapshot week'),
    generated_at: isoText(root.generated_at, 'private meal snapshot generated_at'),
    valid_from: dateText(root.valid_from, 'private meal snapshot valid_from'),
    valid_until: dateText(root.valid_until, 'private meal snapshot valid_until'),
    availability: availability as MealSnapshot['availability'],
    between_weeks: root.between_weeks === true,
    retailer_status: Array.isArray(root.retailer_status) ? root.retailer_status : [],
    offers: root.offers.map(parseOffer),
    meals: root.meals.map(parseMeal),
    shopping_list: Array.isArray(root.shopping_list) ? root.shopping_list.map(parseShoppingItem) : [],
    sources: stringArray(root.sources, 'private meal snapshot sources').map(httpsUrl),
  };
}

export function deriveMealPageState(snapshot: MealSnapshot, now = new Date()): MealPageState {
  const expired = now.getTime() > endOfDate(snapshot.valid_until).getTime();
  if (expired) {
    return {
      kind: now.getDay() === 0 || snapshot.between_weeks ? 'between-weeks' : 'expired',
      offers: [],
      meals: [],
    };
  }
  if (snapshot.availability === 'unavailable') return { kind: 'unavailable', offers: [], meals: [] };
  return { kind: snapshot.availability, offers: snapshot.offers, meals: snapshot.meals };
}

function parseOffer(value: unknown): PrivateOffer {
  const offer = record(value, 'private meal offer');
  return {
    retailer: text(offer.retailer, 'private meal offer retailer'),
    product_name: text(offer.product_name, 'private meal offer product'),
    ingredient_name: text(offer.ingredient_name, 'private meal offer ingredient'),
    price_eur: positiveNumber(offer.price_eur, 'private meal offer price'),
    quantity: text(offer.quantity, 'private meal offer quantity'),
    source_url: httpsUrl(text(offer.source_url, 'private meal offer source')),
    valid_until: dateText(offer.valid_until, 'private meal offer valid_until'),
  };
}

function parseMeal(value: unknown): PrivateMeal {
  const meal = record(value, 'private meal recommendation');
  const detailMode = meal.detail_mode;
  if (detailMode !== 'curated' && detailMode !== 'source_link') fail('private meal detail mode');
  return {
    recipe_id: text(meal.recipe_id, 'private meal recipe id'),
    title: text(meal.title, 'private meal title'),
    detail_mode: detailMode,
    matched_offer_ingredients: stringArray(meal.matched_offer_ingredients, 'matched ingredients'),
    missing_ingredients: stringArray(meal.missing_ingredients, 'missing ingredients'),
    estimated_cost_eur: positiveNumber(meal.estimated_cost_eur, 'private meal estimated cost'),
    retailers: stringArray(meal.retailers, 'private meal retailers'),
    source_url: meal.source_url == null ? null : httpsUrl(text(meal.source_url, 'recipe source')),
    steps: meal.steps == null ? undefined : stringArray(meal.steps, 'private meal steps'),
  };
}

function parseShoppingItem(value: unknown): PrivateShoppingItem {
  const item = record(value, 'private shopping item');
  return {
    ingredient_name: text(item.ingredient_name, 'private shopping ingredient'),
    retailers: stringArray(item.retailers, 'private shopping retailers'),
    estimated_price_eur: positiveNumber(item.estimated_price_eur, 'private shopping price'),
    source: text(item.source, 'private shopping source'),
    german_product_name:
      item.german_product_name == null ? null : text(item.german_product_name, 'private shopping product'),
    quantity: item.quantity == null ? null : text(item.quantity, 'private shopping quantity'),
  };
}

function record(value: unknown, label: string): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) fail(label);
  return value as Record<string, unknown>;
}

function text(value: unknown, label: string): string {
  if (typeof value !== 'string' || !value.trim() || value.length > 500) fail(label);
  return value.trim();
}

function stringArray(value: unknown, label: string): string[] {
  if (!Array.isArray(value)) fail(label);
  return value.map((item) => text(item, label));
}

function positiveNumber(value: unknown, label: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) fail(label);
  return value;
}

function dateText(value: unknown, label: string): string {
  const result = text(value, label);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(result) || Number.isNaN(Date.parse(`${result}T00:00:00Z`))) fail(label);
  return result;
}

function isoText(value: unknown, label: string): string {
  const result = text(value, label);
  if (Number.isNaN(Date.parse(result))) fail(label);
  return result;
}

function safeRelativeJsonUrl(value: unknown): string {
  const result = text(value, 'private meal data URL');
  if (!/^\.\/\d{5}\.json$/.test(result)) fail('private meal data URL');
  return result;
}

function httpsUrl(value: string): string {
  const url = new URL(value);
  if (url.protocol !== 'https:') fail('private meal HTTPS URL');
  return url.toString();
}

function endOfDate(value: string): Date {
  return new Date(`${value}T23:59:59.999Z`);
}

function fail(label: string): never {
  throw new Error(`Invalid ${label}`);
}
