BEGIN READ ONLY;
SET LOCAL statement_timeout = '60s';

WITH search_spec AS (
  SELECT
    COALESCE(item->>'identityId', item->>'key') AS identity_id,
    COALESCE(item->>'identityKey', item->>'identityId', item->>'key') AS identity_key,
    item->'identity' AS identity,
    COALESCE((item->>'labelEligible')::boolean, true) AS label_eligible,
    ARRAY(SELECT jsonb_array_elements_text(item->'ingredientLabels')) AS ingredient_labels,
    ARRAY(SELECT jsonb_array_elements_text(item->'titleTerms')) AS title_terms
  FROM jsonb_array_elements(:'search_spec_json'::jsonb) AS item
), matched_recipes AS (
  SELECT DISTINCT
    spec.identity_id,
    spec.identity_key,
    spec.identity,
    spec.title_terms,
    r.id AS internal_recipe_id,
    r.external_id AS recipe_id,
    r.label AS title,
    ingredient.label AS matched_ingredient_label
  FROM search_spec spec
  JOIN individuals ingredient
    ON ingredient.tenant_id = :'tenant'
   AND ingredient.class_name = 'https://01ontology.org/pack/recipe#Ingredient'
   AND ingredient.label = ANY(spec.ingredient_labels)
  JOIN triples quantity_ingredient
    ON quantity_ingredient.object_id = ingredient.id
   AND quantity_ingredient.relation = 'https://01ontology.org/pack/recipe#quantityOfIngredient'
  JOIN triples recipe_quantity
    ON recipe_quantity.object_id = quantity_ingredient.subject_id
   AND recipe_quantity.relation = 'https://01ontology.org/pack/recipe#hasIngredientQuantity'
  JOIN individuals r
    ON r.id = recipe_quantity.subject_id
   AND r.tenant_id = :'tenant'
   AND r.class_name = 'https://01ontology.org/pack/recipe#Recipe'
   AND r.external_id IS NOT NULL
  WHERE spec.label_eligible
), candidate_base AS (
  SELECT
    matched.identity_id,
    matched.identity_key,
    matched.identity,
    matched.internal_recipe_id,
    matched.recipe_id,
    matched.title,
    array_agg(DISTINCT matched.matched_ingredient_label ORDER BY matched.matched_ingredient_label) AS matched_ingredient_labels,
    bool_or(EXISTS (
      SELECT 1 FROM unnest(matched.title_terms) term
      WHERE matched.title ILIKE '%' || term || '%'
    )) AS title_evidence,
    rating.value AS rating,
    CASE
      WHEN btrim(rating.value) ~ '^(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$'
      THEN btrim(rating.value)::numeric
      ELSE NULL
    END AS rating_number,
    review.value_integer AS review_count,
    step_count.value_integer AS step_count,
    serving.servings_text AS source_serving_text,
    source_page.source_url,
    author.label AS author,
    ingredient_counts.ingredient_count,
    ingredient_counts.measured_ingredient_count
  FROM matched_recipes matched
  LEFT JOIN LATERAL (
    SELECT p.value FROM properties p
    WHERE p.individual_id = matched.internal_recipe_id AND p.key = 'ratingValue'
    LIMIT 1
  ) rating ON true
  LEFT JOIN LATERAL (
    SELECT p.value_integer FROM properties p
    WHERE p.individual_id = matched.internal_recipe_id AND p.key = 'reviewCount'
    LIMIT 1
  ) review ON true
  LEFT JOIN LATERAL (
    SELECT p.value_integer FROM properties p
    WHERE p.individual_id = matched.internal_recipe_id AND p.key = 'stepCount'
    LIMIT 1
  ) step_count ON true
  LEFT JOIN LATERAL (
    SELECT p.value AS servings_text
    FROM triples t
    JOIN properties p ON p.individual_id = t.object_id AND p.key = 'servingsText'
    WHERE t.subject_id = matched.internal_recipe_id
      AND t.relation = 'https://01ontology.org/pack/recipe#hasServingProfile'
    LIMIT 1
  ) serving ON true
  LEFT JOIN LATERAL (
    SELECT p.value AS source_url
    FROM triples t
    JOIN properties p ON p.individual_id = t.object_id AND p.key = 'sourceUrl'
    WHERE t.subject_id = matched.internal_recipe_id
      AND t.relation = 'https://01ontology.org/pack/recipe#supportedByPage'
    LIMIT 1
  ) source_page ON true
  LEFT JOIN LATERAL (
    SELECT a.label
    FROM triples t
    JOIN individuals a ON a.id = t.object_id
    WHERE t.subject_id = matched.internal_recipe_id
      AND t.relation = 'https://01ontology.org/pack/recipe#authoredBy'
    LIMIT 1
  ) author ON true
  LEFT JOIN LATERAL (
    SELECT
      count(*)::int AS ingredient_count,
      count(quantity.value)::int AS measured_ingredient_count
    FROM triples t
    JOIN individuals q ON q.id = t.object_id
    LEFT JOIN properties quantity ON quantity.individual_id = q.id AND quantity.key = 'quantityText'
    WHERE t.subject_id = matched.internal_recipe_id
      AND t.relation = 'https://01ontology.org/pack/recipe#hasIngredientQuantity'
  ) ingredient_counts ON true
  GROUP BY
    matched.identity_id, matched.identity_key, matched.identity,
    matched.internal_recipe_id, matched.recipe_id, matched.title,
    rating.value, review.value_integer, step_count.value_integer, serving.servings_text,
    source_page.source_url, author.label, ingredient_counts.ingredient_count,
    ingredient_counts.measured_ingredient_count
), ranked AS (
  SELECT
    candidate_base.*,
    count(*) OVER (PARTITION BY identity_key) AS identity_total,
    row_number() OVER (
      PARTITION BY identity_key
      ORDER BY
        title_evidence DESC,
        review_count DESC NULLS LAST,
        rating_number DESC NULLS LAST,
        recipe_id
    ) AS candidate_rank
  FROM candidate_base
)
SELECT jsonb_build_object(
  'identityId', identity_id,
  'identityKey', identity_key,
  'identity', identity,
  'identityTotal', identity_total,
  'recipeId', recipe_id,
  'sourceRecipeId', recipe_id,
  'title', title,
  'matchedIngredientLabels', to_jsonb(matched_ingredient_labels),
  'titleEvidence', title_evidence,
  'rating', rating,
  'ratingNumber', rating_number,
  'reviewCount', review_count,
  'stepCount', step_count,
  'sourceServingText', source_serving_text,
  'sourceUrl', source_url,
  'author', author,
  'ingredientCount', ingredient_count,
  'measuredIngredientCount', measured_ingredient_count
)
FROM ranked
WHERE candidate_rank <= :'candidate_limit'::int
ORDER BY identity_key, candidate_rank;

COMMIT;
