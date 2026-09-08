-- Run with psql -X -qAt -v ON_ERROR_STOP=1 -v recipe_ids=ID,ID ...
-- Read-only export; tenant and DB must be verified before running.
BEGIN READ ONLY;
SET LOCAL statement_timeout = '30s';
SELECT jsonb_build_object(
  'externalId', r.external_id, 'title', r.label,
  'sourceUrl', (SELECT p.value FROM triples t JOIN properties p ON p.individual_id=t.object_id AND p.key='sourceUrl' WHERE t.subject_id=r.id AND t.relation='https://01ontology.org/pack/recipe#supportedByPage' LIMIT 1),
  'author', (SELECT a.label FROM triples t JOIN individuals a ON a.id=t.object_id WHERE t.subject_id=r.id AND t.relation='https://01ontology.org/pack/recipe#authoredBy' LIMIT 1),
  'profile', (SELECT jsonb_object_agg(p.key,p.value) FROM triples t JOIN properties p ON p.individual_id=t.object_id WHERE t.subject_id=r.id AND t.relation='https://01ontology.org/pack/recipe#hasServingProfile'),
  'ingredients', (SELECT jsonb_agg(jsonb_build_object('label',q.label,'quantity',(SELECT p.value FROM properties p WHERE p.individual_id=q.id AND p.key='quantityText' LIMIT 1)) ORDER BY q.name) FROM triples t JOIN individuals q ON q.id=t.object_id WHERE t.subject_id=r.id AND t.relation='https://01ontology.org/pack/recipe#hasIngredientQuantity'),
  'steps', (SELECT jsonb_agg(p.value ORDER BY s.name) FROM triples t JOIN individuals s ON s.id=t.object_id JOIN properties p ON p.individual_id=s.id AND p.key='instructionText' WHERE t.subject_id=r.id AND t.relation='https://01ontology.org/pack/recipe#hasStep')
) FROM individuals r
WHERE r.tenant_id='recipe-full'
  AND r.class_name='https://01ontology.org/pack/recipe#Recipe'
  AND r.external_id=ANY(string_to_array(:'recipe_ids',','))
ORDER BY r.external_id;
COMMIT;
