BEGIN READ ONLY;
SET LOCAL statement_timeout = '60s';

WITH search_spec AS (
  SELECT
    item->>'key' AS offer_key,
    ARRAY(SELECT jsonb_array_elements_text(item->'ingredientLabels')) AS ingredient_labels,
    ARRAY(SELECT jsonb_array_elements_text(item->'titleTerms')) AS title_terms
  FROM jsonb_array_elements(:'search_spec_json'::jsonb) AS item
), recipe_ingredients AS (
  SELECT
    r.id AS recipe_id,
    jsonb_agg(
      DISTINCT jsonb_build_object(
        'label', iq.label,
        'ingredient', i.label,
        'quantity', (SELECT p.value FROM properties p WHERE p.individual_id=iq.id AND p.key='quantityText' LIMIT 1)
      )
    ) AS ingredients,
    array_agg(DISTINCT i.label) AS ingredient_names
  FROM individuals r
  JOIN triples quantity_link
    ON quantity_link.subject_id=r.id
   AND quantity_link.relation='https://01ontology.org/pack/recipe#hasIngredientQuantity'
  JOIN individuals iq ON iq.id=quantity_link.object_id
  JOIN triples ingredient_link
    ON ingredient_link.subject_id=iq.id
   AND ingredient_link.relation='https://01ontology.org/pack/recipe#quantityOfIngredient'
  JOIN individuals i ON i.id=ingredient_link.object_id
  WHERE r.tenant_id='recipe-full'
    AND r.class_name='https://01ontology.org/pack/recipe#Recipe'
  GROUP BY r.id
), candidates AS (
  SELECT
    spec.offer_key,
    r.id,
    r.external_id,
    r.label,
    ri.ingredients,
    COALESCE((SELECT p.value_integer FROM properties p WHERE p.individual_id=r.id AND p.key='reviewCount' LIMIT 1),0) AS review_count,
    COALESCE((SELECT p.value_decimal FROM properties p WHERE p.individual_id=r.id AND p.key='ratingValue' LIMIT 1),0) AS rating,
    COALESCE((SELECT p.value_integer FROM properties p WHERE p.individual_id=r.id AND p.key='stepCount' LIMIT 1),0) AS step_count,
    row_number() OVER (
      PARTITION BY spec.offer_key
      ORDER BY
        COALESCE((SELECT p.value_integer FROM properties p WHERE p.individual_id=r.id AND p.key='reviewCount' LIMIT 1),0) DESC,
        COALESCE((SELECT p.value_decimal FROM properties p WHERE p.individual_id=r.id AND p.key='ratingValue' LIMIT 1),0) DESC,
        r.external_id DESC
    ) AS candidate_rank
  FROM search_spec spec
  JOIN recipe_ingredients ri
    ON EXISTS (SELECT 1 FROM unnest(ri.ingredient_names) name WHERE name=ANY(spec.ingredient_labels))
  JOIN individuals r ON r.id=ri.recipe_id
  WHERE EXISTS (SELECT 1 FROM unnest(spec.title_terms) term WHERE r.label ILIKE '%'||term||'%')
    AND COALESCE((SELECT p.value_integer FROM properties p WHERE p.individual_id=r.id AND p.key='stepCount' LIMIT 1),0)>=3
)
SELECT jsonb_build_object(
  'offerKey', offer_key,
  'sourceRecipeId', external_id,
  'title', label,
  'sourceUrl', (SELECT p.value FROM triples t JOIN properties p ON p.individual_id=t.object_id AND p.key='sourceUrl' WHERE t.subject_id=c.id AND t.relation='https://01ontology.org/pack/recipe#supportedByPage' LIMIT 1),
  'author', (SELECT a.label FROM triples t JOIN individuals a ON a.id=t.object_id WHERE t.subject_id=c.id AND t.relation='https://01ontology.org/pack/recipe#authoredBy' LIMIT 1),
  'reviewCount', review_count,
  'rating', rating,
  'stepCount', step_count,
  'ingredients', ingredients
)
FROM candidates c
WHERE candidate_rank<=:'candidate_limit'::int
ORDER BY offer_key,candidate_rank;

COMMIT;
