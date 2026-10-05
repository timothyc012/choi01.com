import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

import {createMealSourceDatabase, validateMealSourceConfig} from '../scripts/lib/meal-source-reader.mjs';
import {normalizeCandidateExport} from '../scripts/find-store-recipe-candidates.mjs';

const scriptsDirectory=fileURLToPath(new URL('../scripts/',import.meta.url));
const sourceConfig={host:'100.103.154.67',sshUser:'onto',container:'onto-personal-db',database:'onto_personal',role:'01'};

function configuredReader(t,exec,config=sourceConfig,database='onto_personal') {
  const directory=fs.mkdtempSync(path.join(os.tmpdir(),'meal-source-reader-'));
  t.after(()=>fs.rmSync(directory,{recursive:true,force:true}));
  const configPath=path.join(directory,'source.json');
  fs.writeFileSync(configPath,JSON.stringify(config));
  return {reader:createMealSourceDatabase(database,{configPath,exec}),configPath};
}

function searchSpec(index) {
  const ingredient='재료'+index;
  return {identityId:ingredient,identityKey:'identity-'+index,identity:{ingredientId:ingredient,species:'plant',cut:'whole',processingState:'fresh',form:'whole',composition:ingredient},ingredientLabels:[ingredient],titleTerms:[ingredient],labelEligible:true};
}

function variable(args,key) {
  const value=args.find((arg)=>typeof arg==='string'&&arg.startsWith(key+'='));
  assert.ok(value,`missing query variable ${key}`);
  return value.slice(key.length+1);
}

function queryFile(args) {
  return args.find((arg)=>typeof arg==='string'&&arg.endsWith('.sql'));
}

function jsonLines(rows) {
  return rows.map((row)=>JSON.stringify(row)).join('\n')+'\n';
}

async function rejectsBeforeExec(operation,calls) {
  await assert.rejects(async()=>operation());
  assert.equal(calls.length,0,'invalid requests must not reach the DB adapter');
}

test('source configuration accepts only the five non-secret connection selectors',()=>{
  const result=validateMealSourceConfig({...sourceConfig});
  assert.deepEqual(result,sourceConfig);
  assert.deepEqual(Object.keys(result).sort(),['container','database','host','role','sshUser']);
});

test('source configuration rejects missing selectors and credential or connection overrides',()=>{
  for(const value of [null,[],{},'postgresql://owner:secret@example.test/onto_personal']) {
    assert.throws(()=>validateMealSourceConfig(value));
  }
  for(const key of Object.keys(sourceConfig)) {
    const incomplete={...sourceConfig};
    delete incomplete[key];
    assert.throws(()=>validateMealSourceConfig(incomplete),`missing ${key}`);
  }
  for(const extra of [{password:'secret'},{connectionString:'postgresql://owner:secret@example.test/onto_personal'},{uri:'postgresql://example.test/onto_personal'},{sslmode:'disable'}]) {
    assert.throws(()=>validateMealSourceConfig({...sourceConfig,...extra}));
  }
});

test('source configuration refuses flags, shell syntax, URIs, and control characters',()=>{
  const invalidValues={
    host:['-oProxyCommand=whoami','ssh://example.test','example.test;whoami','example.test\nwhoami'],
    sshUser:['-root','onto;whoami','onto user','onto\nuser'],
    container:['--privileged','container;whoami','container/name','container\nname'],
    database:['-dother','postgresql://example.test/onto_personal','onto_personal password=secret','onto_personal;DROP TABLE fact'],
    role:['-uowner','01;whoami','owner role','owner\nrole'],
  };
  for(const [key,values] of Object.entries(invalidValues)) {
    for(const value of values) assert.throws(()=>validateMealSourceConfig({...sourceConfig,[key]:value}),`${key} accepted ${JSON.stringify(value)}`);
  }
});

test('configured source refuses a requested database that disagrees with its config before querying',(t)=>{
  const calls=[];
  assert.throws(()=>configuredReader(t,(...args)=>{calls.push(args);return '';},sourceConfig,'onto_company'));
  assert.equal(calls.length,0);
});

test('reader exposes its database identity and methods without exposing connection configuration',(t)=>{
  const {reader}=configuredReader(t,()=>{throw new Error('unexpected query');});
  assert.equal(reader.databaseName,'onto_personal');
  assert.deepEqual(Object.keys(reader).sort(),['databaseName','exportCandidateFacts','findCandidateMetadata']);
  assert.equal(JSON.stringify(reader),'{"databaseName":"onto_personal"}');
});

test('SSH-backed metadata queries preserve input order in sequential batches of at most two specs',async(t)=>{
  const calls=[];
  let queryRunning=false;
  const exec=(executable,args,options)=>{
    assert.equal(queryRunning,false,'metadata queries must not overlap');
    queryRunning=true;
    assert.equal(executable,'python3');
    assert.ok(args.some((arg)=>typeof arg==='string'&&arg.endsWith('query-meal-source-readonly.py')));
    assert.equal(queryFile(args),path.join(scriptsDirectory,'find-store-recipe-candidates.sql'));
    assert.equal(variable(args,'tenant'),'recipe-full');
    assert.equal(variable(args,'candidate_limit'),'500');
    assert.equal(options.encoding,'utf8');
    assert.notEqual(options.shell,true);
    const specs=JSON.parse(variable(args,'search_spec_json'));
    assert.ok(specs.length<=2);
    calls.push(specs);
    const stdout=jsonLines(specs.map((spec)=>({identityId:spec.identityId,identityKey:spec.identityKey,recipeId:'700000'+spec.identityKey.at(-1),title:spec.identityId+' 덮밥',sourceTimeText:'20분 이내'})));
    queryRunning=false;
    return stdout;
  };
  const {reader}=configuredReader(t,exec);
  const specs=Array.from({length:5},(_,index)=>searchSpec(index+1));
  const rows=await reader.findCandidateMetadata({searchSpec:specs,tenant:'recipe-full',perIdentityLimit:500,totalLimit:5000});
  assert.deepEqual(calls.map((batch)=>batch.map((spec)=>spec.identityKey)),[['identity-1','identity-2'],['identity-3','identity-4'],['identity-5']]);
  assert.deepEqual(rows.map((row)=>row.identityKey),specs.map((spec)=>spec.identityKey));
  assert.ok(rows.every((row)=>row.sourceTimeText==='20분 이내'));
});

test('explicitly local source uses psql and ignores an environment config path',async(t)=>{
  const previous=process.env.MOHEMEOKJI_RECIPE_SOURCE_CONFIG;
  process.env.MOHEMEOKJI_RECIPE_SOURCE_CONFIG=path.join(os.tmpdir(),'missing-meal-config.json');
  t.after(()=>{if(previous===undefined)delete process.env.MOHEMEOKJI_RECIPE_SOURCE_CONFIG;else process.env.MOHEMEOKJI_RECIPE_SOURCE_CONFIG=previous;});
  const calls=[];
  const reader=createMealSourceDatabase('onto_personal',{configPath:null,exec:(executable,args,options)=>{
    calls.push({executable,args,options});
    return jsonLines([{recipeId:'7000001',identityKey:'identity-1'}]);
  }});
  const rows=await reader.findCandidateMetadata({searchSpec:[searchSpec(1)],tenant:'recipe-full',perIdentityLimit:1,totalLimit:1});
  assert.deepEqual(rows,[{recipeId:'7000001',identityKey:'identity-1'}]);
  assert.equal(calls.length,1);
  assert.equal(calls[0].executable,'psql');
  assert.equal(calls[0].args[calls[0].args.indexOf('-d')+1],'onto_personal');
  assert.ok(calls[0].args.includes('-X'));
  assert.ok(calls[0].args.includes('-w'));
  assert.equal(variable(calls[0].args,'ON_ERROR_STOP'),'1');
  assert.equal(queryFile(calls[0].args),path.join(scriptsDirectory,'find-store-recipe-candidates.sql'));
});

test('omitting configPath reads the explicitly configured source from the environment',async(t)=>{
  const {configPath}=configuredReader(t,()=>{throw new Error('unused reader');});
  const previous=process.env.MOHEMEOKJI_RECIPE_SOURCE_CONFIG;
  process.env.MOHEMEOKJI_RECIPE_SOURCE_CONFIG=configPath;
  t.after(()=>{if(previous===undefined)delete process.env.MOHEMEOKJI_RECIPE_SOURCE_CONFIG;else process.env.MOHEMEOKJI_RECIPE_SOURCE_CONFIG=previous;});
  const calls=[];
  const reader=createMealSourceDatabase('onto_personal',{exec:(executable,args)=>{calls.push({executable,args});return '';}});
  assert.deepEqual(await reader.exportCandidateFacts(['7000001'],{tenant:'recipe-full'}),[]);
  assert.equal(calls[0].executable,'python3');
});

test('local source rejects a URI, connection string, or option as a database name before execution',()=>{
  const calls=[];
  for(const database of ['postgresql://owner:secret@example.test/onto_personal','onto_personal password=secret','-donto_personal','onto_personal;whoami','']) {
    assert.throws(()=>createMealSourceDatabase(database,{configPath:null,exec:(...args)=>{calls.push(args);return '';}}));
  }
  assert.equal(calls.length,0);
});

test('metadata and full-fact exports cannot query another tenant',async(t)=>{
  const calls=[];
  const {reader}=configuredReader(t,(...args)=>{calls.push(args);return '';});
  for(const tenant of ['company','recipe-full\nother',"recipe-full'; DELETE FROM fact; --",null]) {
    await rejectsBeforeExec(()=>reader.findCandidateMetadata({searchSpec:[searchSpec(1)],tenant,perIdentityLimit:1,totalLimit:1}),calls);
    await rejectsBeforeExec(()=>reader.exportCandidateFacts(['7000001'],{tenant}),calls);
  }
});

test('metadata candidate limits must be integers in the inclusive 1 through 500 range',async(t)=>{
  const calls=[];
  const {reader}=configuredReader(t,(...args)=>{calls.push(args);return '';});
  for(const perIdentityLimit of [0,-1,501,1.5,'5',NaN,Infinity]) {
    await rejectsBeforeExec(()=>reader.findCandidateMetadata({searchSpec:[searchSpec(1)],tenant:'recipe-full',perIdentityLimit,totalLimit:5000}),calls);
  }
  await reader.findCandidateMetadata({searchSpec:[searchSpec(1)],tenant:'recipe-full',perIdentityLimit:1,totalLimit:1});
  await reader.findCandidateMetadata({searchSpec:[searchSpec(1)],tenant:'recipe-full',perIdentityLimit:500,totalLimit:5000});
  assert.deepEqual(calls.map(([,args])=>variable(args,'candidate_limit')),['1','500']);
});

test('metadata total limits are bounded to 5000 unique recipe candidates',async(t)=>{
  const calls=[];
  const {reader}=configuredReader(t,(...args)=>{calls.push(args);return '';});
  for(const totalLimit of [0,-1,5001,1.5,'5',NaN,Infinity]) {
    await rejectsBeforeExec(()=>reader.findCandidateMetadata({searchSpec:[searchSpec(1)],tenant:'recipe-full',perIdentityLimit:500,totalLimit}),calls);
  }
});

test('empty search specs and export lists return no rows without opening a query',async(t)=>{
  const calls=[];
  const {reader}=configuredReader(t,(...args)=>{calls.push(args);return '';});
  assert.deepEqual(await reader.findCandidateMetadata({searchSpec:[],tenant:'recipe-full',perIdentityLimit:500,totalLimit:5000}),[]);
  assert.deepEqual(await reader.exportCandidateFacts([],{tenant:'recipe-full'}),[]);
  assert.equal(calls.length,0);
});

test('full-fact export queries the requested numeric recipe IDs and keeps source cooking-time evidence',async(t)=>{
  const calls=[];
  const raw={recipeId:'7000001',sourceRecipeId:'7000001',title:'두부 덮밥',sourceTimeText:'30분 이내',ingredients:[],steps:[]};
  const {reader}=configuredReader(t,(executable,args)=>{
    calls.push({executable,args});
    return jsonLines([raw]);
  });
  const rows=await reader.exportCandidateFacts(['7000001','7000002'],{tenant:'recipe-full'});
  assert.deepEqual(rows,[raw]);
  assert.equal(calls.length,1);
  assert.equal(queryFile(calls[0].args),path.join(scriptsDirectory,'export-store-recipe-candidates.sql'));
  assert.deepEqual(JSON.parse(variable(calls[0].args,'recipe_ids_json')),['7000001','7000002']);
  assert.equal(normalizeCandidateExport(rows[0]).sourceTimeText,'30분 이내');
});

test('full-fact export rejects malformed IDs and more than 5000 unique recipes before querying',async(t)=>{
  const calls=[];
  const {reader}=configuredReader(t,(...args)=>{calls.push(args);return '';});
  for(const recipeIds of [['7000001;DROP TABLE fact'],['1 OR 1=1'],['7000001\n7000002'],['https://www.10000recipe.com/recipe/7000001'],[null],[7000001],['7000001','7000001'],Array.from({length:5001},(_,index)=>String(7000000+index))]) {
    await rejectsBeforeExec(()=>reader.exportCandidateFacts(recipeIds,{tenant:'recipe-full'}),calls);
  }
  const recipeIds=Array.from({length:5000},(_,index)=>String(7000000+index));
  await reader.exportCandidateFacts(recipeIds,{tenant:'recipe-full'});
  assert.equal(calls.length,1);
  assert.equal(JSON.parse(variable(calls[0][1],'recipe_ids_json')).length,5000);
});

test('JSONL parsing rejects malformed output and an oversized result instead of silently accepting it',async(t)=>{
  for(const stdout of ['{"recipeId":"7000001"}\nnot-json\n',jsonLines(Array.from({length:5001},()=>({recipeId:'7000001'})))]) {
    const {reader}=configuredReader(t,()=>stdout);
    await assert.rejects(async()=>reader.exportCandidateFacts(['7000001'],{tenant:'recipe-full'}));
  }
});

test('queries use the fixed read-only SQL files and preserve their bytes',async(t)=>{
  const files=['find-store-recipe-candidates.sql','export-store-recipe-candidates.sql','export-meal-recipes.sql'];
  const hashes=new Map(files.map((file)=>{
    const sql=fs.readFileSync(path.join(scriptsDirectory,file),'utf8');
    assert.match(sql,/^\s*(?:--[^\n]*\n\s*)*BEGIN READ ONLY;/);
    assert.match(sql,/SET LOCAL statement_timeout/);
    assert.match(sql,/\btenant_id\s*=\s*(?::'tenant'|'recipe-full')/);
    assert.match(sql,/\bsuperseded_by IS NULL\b/);
    assert.doesNotMatch(sql,/^\s*(?:INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE)\b/im);
    return [file,createHash('sha256').update(sql).digest('hex')];
  }));
  const {reader}=configuredReader(t,(_executable,args)=>{
    assert.ok(files.slice(0,2).some((file)=>queryFile(args)===path.join(scriptsDirectory,file)));
    return '';
  });
  await reader.findCandidateMetadata({searchSpec:[searchSpec(1)],tenant:'recipe-full',perIdentityLimit:1,totalLimit:1});
  await reader.exportCandidateFacts(['7000001'],{tenant:'recipe-full'});
  for(const [file,hash] of hashes) assert.equal(createHash('sha256').update(fs.readFileSync(path.join(scriptsDirectory,file))).digest('hex'),hash);
});
