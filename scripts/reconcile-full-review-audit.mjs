#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';

const database=process.env.ONTO_DB_NAME||'01ontology';
const tenant=process.env.ONTO_TENANT||'recipe-full';
const input=path.resolve(process.argv[2]||'/private/tmp/full-recipe-review-evidence.jsonl');
const output=path.resolve(process.argv[3]||path.join(os.tmpdir(),'mohemeokji-full-review-reconciliation.sql'));
const execute=process.argv.includes('--execute');

function readRows(file) {
  const rows=[]; const ids=new Set();
  for(const line of fs.readFileSync(file,'utf8').split(/\r?\n/)) {
    if(!line.trim()) continue;
    const row=JSON.parse(line);
    const id=String(row.sourceRecipeId||'');
    if(!id) throw new Error('audit row is missing sourceRecipeId');
    if(ids.has(id)) throw new Error('duplicate sourceRecipeId in audit: '+id);
    ids.add(id);
    const action=row.status==='verified' ? 'update' : row.reason==='recipe-review-count-not-published' ? 'clear' : 'hold';
    rows.push({...row,sourceRecipeId:id,action});
  }
  if(!rows.length) throw new Error('audit contains no rows');
  return rows.sort((a,b)=>a.sourceRecipeId.localeCompare(b.sourceRecipeId));
}

function sqlLiteral(value) {
  if(value===null||value===undefined) return 'NULL';
  return `'${String(value).replaceAll("'","''")}'`;
}

function buildSql(rows) {
  const json=JSON.stringify(rows).replaceAll("'","''");
  const expected=rows.length;
  const mutation=execute ? `
DELETE FROM properties p USING review_reconciliation_target t
WHERE p.individual_id=t.id AND p.key IN ('reviewCount','ratingValue') AND t.action IN ('update','clear');

DELETE FROM properties p USING review_reconciliation_target t
WHERE p.individual_id=t.id AND p.key IN ('reviewEvidenceStatus','reviewEvidenceCheckedAt','reviewEvidenceHtmlSha256','reviewEvidenceSourceUrl','reviewEvidenceMethod','reviewEvidenceReason');

WITH rows AS (
  SELECT id,'reviewEvidenceStatus'::text AS key,'string'::property_value_type AS value_type,action_status::text AS value,NULL::bigint AS value_integer,NULL::timestamptz AS value_datetime FROM review_reconciliation_target
  UNION ALL SELECT id,'reviewEvidenceCheckedAt','datetime',NULL,NULL,checked_at FROM review_reconciliation_target
  UNION ALL SELECT id,'reviewEvidenceHtmlSha256','string',COALESCE(html_sha256,''),NULL,NULL FROM review_reconciliation_target
  UNION ALL SELECT id,'reviewEvidenceSourceUrl','string',source_url,NULL,NULL FROM review_reconciliation_target
  UNION ALL SELECT id,'reviewEvidenceMethod','string',method,NULL,NULL FROM review_reconciliation_target
  UNION ALL SELECT id,'reviewEvidenceReason','string',COALESCE(reason,''),NULL,NULL FROM review_reconciliation_target
  UNION ALL SELECT id,'reviewCount','integer',NULL,review_count,NULL FROM review_reconciliation_target WHERE action='update' AND review_count IS NOT NULL
  UNION ALL SELECT id,'ratingValue','string',rating_value::text,NULL,NULL FROM review_reconciliation_target WHERE action='update' AND rating_value IS NOT NULL
)
INSERT INTO properties(individual_id,key,value_type,value,value_integer,value_datetime)
SELECT id,key,value_type,value,value_integer,value_datetime FROM rows;
` : '';
  const end=execute ? 'COMMIT;' : 'ROLLBACK;';
  return `BEGIN;
SET LOCAL statement_timeout='10min';
CREATE TEMP TABLE review_reconciliation_input AS
SELECT * FROM jsonb_to_recordset('${json}'::jsonb) AS x(
  "sourceRecipeId" text, "sourceUrl" text, "checkedAt" timestamptz, "htmlSha256" text,
  status text, "reviewCount" bigint, "ratingValue" numeric, "commentCount" bigint,
  method text, reason text, "dbReviewCount" bigint, "dbRatingValue" numeric, action text
);

DO $block$
DECLARE input_count integer; recipe_count integer; missing integer;
BEGIN
  SELECT count(*) INTO input_count FROM review_reconciliation_input;
  IF input_count <> ${expected} THEN RAISE EXCEPTION 'audit row count changed: expected ${expected}, got %', input_count; END IF;
  SELECT count(*) INTO recipe_count FROM individuals r WHERE r.tenant_id=${sqlLiteral(tenant)} AND r.class_name='https://01ontology.org/pack/recipe#Recipe';
  IF recipe_count <> 72569 THEN RAISE EXCEPTION 'recipe-full population changed: expected 72569, got %', recipe_count; END IF;
  SELECT count(*) INTO missing
  FROM review_reconciliation_input e
  LEFT JOIN individuals r ON r.external_id=e."sourceRecipeId" AND r.tenant_id=${sqlLiteral(tenant)} AND r.class_name='https://01ontology.org/pack/recipe#Recipe'
  WHERE r.id IS NULL;
  IF missing>0 THEN RAISE EXCEPTION 'review audit has % recipe IDs missing from tenant ${tenant}', missing; END IF;
END $block$;

CREATE TEMP TABLE review_reconciliation_target AS
SELECT r.id,e."sourceRecipeId" AS source_recipe_id,e.action,
       CASE WHEN e.status='verified' THEN 'verified' ELSE 'unverified' END AS action_status,
       e."checkedAt" AS checked_at,e."htmlSha256" AS html_sha256,e."sourceUrl" AS source_url,
       e.method,e.reason,e."reviewCount" AS review_count,e."ratingValue" AS rating_value
FROM individuals r JOIN review_reconciliation_input e
  ON e."sourceRecipeId"=r.external_id
WHERE r.tenant_id=${sqlLiteral(tenant)} AND r.class_name='https://01ontology.org/pack/recipe#Recipe';

SELECT action,count(*) FROM review_reconciliation_target GROUP BY action ORDER BY action;
SELECT reason,count(*) FROM review_reconciliation_input WHERE action='hold' GROUP BY reason ORDER BY reason;
${mutation}
${end}
`;
}

const rows=readRows(input);
const counts=rows.reduce((m,row)=>{m[row.action]=(m[row.action]||0)+1;return m;},{});
fs.writeFileSync(output,buildSql(rows));
const summary={database,tenant,input,records:rows.length,actions:counts,sql:output,mode:execute?'execute':'dry-run'};
console.log(JSON.stringify(summary));
if(execute) execFileSync('psql',['-X','-q','-v','ON_ERROR_STOP=1','-d',database,'-f',output],{stdio:'inherit'});

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {}
