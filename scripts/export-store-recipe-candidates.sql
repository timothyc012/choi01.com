BEGIN READ ONLY;
SET LOCAL statement_timeout = '60s';

WITH selected_ids AS (
  SELECT jsonb_array_elements_text(:'recipe_ids_json'::jsonb) AS recipe_id
), recipes AS (
  SELECT r.*
  FROM selected_ids selected
  JOIN individuals r
    ON r.external_id = selected.recipe_id
   AND r.tenant_id = :'tenant'
   AND r.class_name = 'https://01ontology.org/pack/recipe#Recipe'
)
SELECT jsonb_build_object(
  'recipeId', r.external_id,
  'sourceRecipeId', r.external_id,
  'title', r.label,
  'sourceUrl', source_page.source_url,
  'author', author.label,
  'rating', rating.value,
  'ratingNumber', CASE
    WHEN btrim(rating.value) ~ '^(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$'
    THEN btrim(rating.value)::numeric
    ELSE NULL
  END,
  'reviewCount', review.value_integer,
  'sourceServingText', serving.servings_text,
  'ingredients', COALESCE(ingredients.items, '[]'::jsonb),
  'steps', COALESCE(steps.items, '[]'::jsonb)
)
FROM recipes r
LEFT JOIN LATERAL (
  SELECT p.value FROM properties p
  WHERE p.individual_id = r.id AND p.key = 'ratingValue'
  LIMIT 1
) rating ON true
LEFT JOIN LATERAL (
  SELECT p.value_integer FROM properties p
  WHERE p.individual_id = r.id AND p.key = 'reviewCount'
  LIMIT 1
) review ON true
LEFT JOIN LATERAL (
  SELECT p.value AS servings_text
  FROM triples t
  JOIN properties p ON p.individual_id = t.object_id AND p.key = 'servingsText'
  WHERE t.subject_id = r.id
    AND t.relation = 'https://01ontology.org/pack/recipe#hasServingProfile'
  LIMIT 1
) serving ON true
LEFT JOIN LATERAL (
  SELECT p.value AS source_url
  FROM triples t
  JOIN properties p ON p.individual_id = t.object_id AND p.key = 'sourceUrl'
  WHERE t.subject_id = r.id
    AND t.relation = 'https://01ontology.org/pack/recipe#supportedByPage'
  LIMIT 1
) source_page ON true
LEFT JOIN LATERAL (
  SELECT a.label
  FROM triples t
  JOIN individuals a ON a.id = t.object_id
  WHERE t.subject_id = r.id
    AND t.relation = 'https://01ontology.org/pack/recipe#authoredBy'
  LIMIT 1
) author ON true
LEFT JOIN LATERAL (
  SELECT jsonb_agg(
    jsonb_build_object(
      'ordinal', ingredient.ordinal,
      'label', ingredient.label,
      'ingredient', ingredient.ingredient,
      'quantity', ingredient.quantity
    ) ORDER BY ingredient.ordinal
  ) AS items
  FROM (
    SELECT
      COALESCE((regexp_match(q.name, '([0-9]+)$'))[1]::int, row_number() OVER (ORDER BY q.name)::int) AS ordinal,
      q.label,
      named_ingredient.label AS ingredient,
      quantity.value AS quantity
    FROM triples t
    JOIN individuals q ON q.id = t.object_id
    LEFT JOIN properties quantity ON quantity.individual_id = q.id AND quantity.key = 'quantityText'
    LEFT JOIN triples quantity_ingredient
      ON quantity_ingredient.subject_id = q.id
     AND quantity_ingredient.relation = 'https://01ontology.org/pack/recipe#quantityOfIngredient'
    LEFT JOIN individuals named_ingredient ON named_ingredient.id = quantity_ingredient.object_id
    WHERE t.subject_id = r.id
      AND t.relation = 'https://01ontology.org/pack/recipe#hasIngredientQuantity'
  ) ingredient
) ingredients ON true
LEFT JOIN LATERAL (
  SELECT jsonb_agg(
    jsonb_build_object(
      'ordinal', step.ordinal,
      'name', step.name,
      'instruction', step.instruction
    ) ORDER BY step.ordinal
  ) AS items
  FROM (
    SELECT
      COALESCE(step_number.value_integer::int, (regexp_match(s.name, '([0-9]+)$'))[1]::int) AS ordinal,
      s.name,
      instruction.value AS instruction
    FROM triples t
    JOIN individuals s ON s.id = t.object_id
    LEFT JOIN properties step_number ON step_number.individual_id = s.id AND step_number.key = 'stepNumber'
    LEFT JOIN properties instruction ON instruction.individual_id = s.id AND instruction.key = 'instructionText'
    WHERE t.subject_id = r.id
      AND t.relation = 'https://01ontology.org/pack/recipe#hasStep'
  ) step
) steps ON true
ORDER BY r.external_id;

COMMIT;
