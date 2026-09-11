#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';

const root=path.resolve('data/mohemeokji/verified-reviews.json');
const outputSql=path.resolve(process.argv[2]||path.join(os.tmpdir(),'mohemeokji-review-reconciliation.sql'));
const execute=process.argv.includes('--execute');
const database=process.env.ONTO_DB_NAME||'01ontology';
const tenant=process.env.ONTO_TENANT||'recipe-full';
const evidence=JSON.parse(fs.readFileSync(root,'utf8'));
const records=Object.values(evidence.recipes||{}).sort((a,b)=>a.sourceRecipeId.localeCompare(b.sourceRecipeId));
if(!records.length)throw new Error('No review evidence records found');

const json=JSON.stringify(records).replaceAll('\\','\\\\').replaceAll("'","''");
const sql=`BEGIN;
SET LOCAL statement_timeout='60s';
CREATE TEMP TABLE review_reconciliation_input AS
SELECT * FROM jsonb_to_recordset('${json}'::jsonb) AS x(
  sourceRecipeId text, sourceUrl text, checkedAt timestamptz, htmlSha256 text,
  status text, reviewCount bigint, ratingValue numeric, commentCount bigint,
  method text, reason text, detailSha256 text
);

DO $block$
DECLARE missing integer;
BEGIN
  SELECT count(*) INTO missing
  FROM review_reconciliation_input e
  LEFT JOIN individuals r ON r.external_id=e.sourceRecipeId AND r.tenant_id='${tenant}' AND r.class_name='https://01ontology.org/pack/recipe#Recipe'
  WHERE r.id IS NULL;
  IF missing>0 THEN RAISE EXCEPTION 'review evidence has % recipe IDs missing from tenant ${tenant}', missing; END IF;
END $block$;

WITH target AS (
  SELECT r.id,e.*
  FROM individuals r JOIN review_reconciliation_input e ON e.sourceRecipeId=r.external_id
  WHERE r.tenant_id='${tenant}' AND r.class_name='https://01ontology.org/pack/recipe#Recipe'
)
DELETE FROM properties p USING target t
WHERE p.individual_id=t.id AND p.key IN ('reviewCount','ratingValue','reviewEvidenceStatus','reviewEvidenceCheckedAt','reviewEvidenceHtmlSha256','reviewEvidenceSourceUrl','reviewEvidenceMethod','reviewEvidenceReason');

WITH target AS (
  SELECT r.id,e.*
  FROM individuals r JOIN review_reconciliation_input e ON e.sourceRecipeId=r.external_id
  WHERE r.tenant_id='${tenant}' AND r.class_name='https://01ontology.org/pack/recipe#Recipe'
), rows AS (
  SELECT id,'reviewEvidenceStatus'::text AS key,'string'::property_value_type,status::text AS value,NULL::bigint AS value_integer,NULL::timestamptz AS value_datetime FROM target
  UNION ALL SELECT id,'reviewEvidenceCheckedAt','datetime',NULL,NULL,checkedAt FROM target
  UNION ALL SELECT id,'reviewEvidenceHtmlSha256','string',htmlSha256,NULL,NULL FROM target
  UNION ALL SELECT id,'reviewEvidenceSourceUrl','string',sourceUrl,NULL,NULL FROM target
  UNION ALL SELECT id,'reviewEvidenceMethod','string',method,NULL,NULL FROM target
  UNION ALL SELECT id,'reviewEvidenceReason','string',COALESCE(reason,''),NULL,NULL FROM target
  UNION ALL SELECT id,'reviewCount','integer',NULL,reviewCount,NULL FROM target WHERE status='verified' AND reviewCount IS NOT NULL
  UNION ALL SELECT id,'ratingValue','string',ratingValue::text,NULL,NULL FROM target WHERE status='verified' AND ratingValue IS NOT NULL
)
INSERT INTO properties(individual_id,key,value_type,value,value_integer,value_datetime)
SELECT id,key,value_type,value,value_integer,value_datetime FROM rows;
COMMIT;
`;
fs.writeFileSync(outputSql,sql);
console.log(JSON.stringify({database,tenant,records:records.length,verified:records.filter(r=>r.status==='verified').length,unverified:records.filter(r=>r.status!=='verified').length,sql:outputSql,mode:execute?'execute':'dry-run'}));
if(execute)execFileSync('psql',['-X','-q','-v','ON_ERROR_STOP=1','-d',database,'-f',outputSql],{stdio:'inherit'});

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  // The script is intentionally side-effect-free unless --execute is supplied.
}
