BEGIN READ ONLY;
SET LOCAL statement_timeout = '60s';

WITH search_spec AS (
  SELECT
    item->>'key' AS offer_key,
    ARRAY(SELECT lower(jsonb_array_elements_text(item->'ingredientLabels'))) AS ingredient_labels,
    ARRAY(SELECT jsonb_array_elements_text(item->'titleTerms')) AS title_terms
  FROM jsonb_array_elements(:'search_spec_json'::jsonb) AS item
), matching_recipes AS (
  SELECT DISTINCT spec.offer_key, r.id
  FROM search_spec spec
  JOIN individuals ingredient
    ON ingredient.tenant_id=:'recipe_tenant'
   AND lower(ingredient.label)=ANY(spec.ingredient_labels)
  JOIN fact ingredient_link
    ON ingredient_link.tenant_id=:'recipe_tenant'
   AND ingredient_link.object_id=ingredient.id
   AND ingredient_link.relation='https://01ontology.org/pack/recipe#quantityOfIngredient'
  JOIN fact quantity_link
    ON quantity_link.tenant_id=:'recipe_tenant'
   AND quantity_link.object_id=ingredient_link.subject_id
   AND quantity_link.relation='https://01ontology.org/pack/recipe#hasIngredientQuantity'
  JOIN individuals r
    ON r.id=quantity_link.subject_id
   AND r.tenant_id=:'recipe_tenant'
  WHERE r.class_name='https://01ontology.org/pack/recipe#Recipe'
    AND EXISTS (SELECT 1 FROM unnest(spec.title_terms) term WHERE r.label ILIKE '%'||term||'%')
), eligible AS (
  SELECT
    matched.offer_key,
    r.id,
    r.external_id,
    r.label,
    COALESCE(metrics.review_count,0) AS review_count,
    COALESCE(metrics.rating,0) AS rating,
    COALESCE(metrics.step_count,0) AS step_count,
    CASE
      WHEN metrics.rating BETWEEN 1 AND 5 AND metrics.review_count>=1 THEN
        greatest(0,least(1,(((metrics.rating*metrics.review_count+4.5*20)/(metrics.review_count+20))-3.5)/1.5))*18
        + least(1,ln(1+metrics.review_count)/ln(1001))*12
      ELSE 0
    END AS quality_score
  FROM matching_recipes matched
  JOIN individuals r ON r.id=matched.id
  LEFT JOIN LATERAL (
    SELECT
      max(value_integer) FILTER (WHERE key='reviewCount') AS review_count,
      max(
        CASE
          WHEN key='ratingValue' AND value~'^[0-9]+([.][0-9]+)?$' THEN coalesce(value_decimal,value::numeric)
          WHEN key='ratingValue' THEN value_decimal
        END
      ) AS rating,
      max(value_integer) FILTER (WHERE key='stepCount') AS step_count
    FROM properties
    WHERE individual_id=r.id
      AND key IN ('reviewCount','ratingValue','stepCount')
  ) metrics ON true
  WHERE COALESCE(metrics.step_count,0)>=3
), ranked AS (
  SELECT
    eligible.*,
    row_number() OVER (
      PARTITION BY offer_key
      ORDER BY quality_score DESC, review_count DESC, rating DESC, external_id DESC
    ) AS candidate_rank
  FROM eligible
), candidates AS (
  SELECT * FROM ranked
  WHERE candidate_rank<=:'candidate_limit'::int
)
SELECT jsonb_build_object(
  'offerKey', offer_key,
  'sourceRecipeId', external_id,
  'title', label,
  'sourceUrl', (SELECT p.value FROM fact t JOIN properties p ON p.individual_id=t.object_id AND p.key='sourceUrl' WHERE t.tenant_id=:'recipe_tenant' AND t.subject_id=c.id AND t.relation='https://01ontology.org/pack/recipe#supportedByPage' LIMIT 1),
  'author', (SELECT a.label FROM fact t JOIN individuals a ON a.id=t.object_id WHERE t.tenant_id=:'recipe_tenant' AND t.subject_id=c.id AND t.relation='https://01ontology.org/pack/recipe#authoredBy' LIMIT 1),
  'reviewCount', review_count,
  'rating', rating,
  'stepCount', step_count,
  'ingredients', (
    SELECT jsonb_agg(
      DISTINCT jsonb_build_object(
        'label', quantity.label,
        'ingredient', ingredient.label,
        'quantity', (SELECT p.value FROM properties p WHERE p.individual_id=quantity.id AND p.key='quantityText' LIMIT 1)
      )
    )
    FROM fact quantity_link
    JOIN individuals quantity ON quantity.id=quantity_link.object_id
    JOIN fact ingredient_link
      ON ingredient_link.tenant_id=:'recipe_tenant'
     AND ingredient_link.subject_id=quantity.id
     AND ingredient_link.relation='https://01ontology.org/pack/recipe#quantityOfIngredient'
    JOIN individuals ingredient ON ingredient.id=ingredient_link.object_id
    WHERE quantity_link.tenant_id=:'recipe_tenant'
      AND quantity_link.subject_id=c.id
      AND quantity_link.relation='https://01ontology.org/pack/recipe#hasIngredientQuantity'
  )
)
FROM candidates c
ORDER BY offer_key,candidate_rank;

COMMIT;
