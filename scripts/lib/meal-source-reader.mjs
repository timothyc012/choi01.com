import fs from 'node:fs';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const SQL_HASHES={
  'export-meal-recipes.sql':'904e54109e1f2b50a2a475cf12c91558c3f95852fb6b7114fa5b1c8ca64c0f46',
  'find-store-recipe-candidates.sql':'540bc6141c380d097c9126fb838aa18ad0ab2e7ef8f3bf824878fc37f3020d82',
  'export-store-recipe-candidates.sql':'5b6e3c1e8123b77bf0fa95404ea244d65aecfd7b21aabbfce307eb58bf44c3ff',
};
const CONFIG_PATTERNS={
  host:/^[A-Za-z0-9](?:[A-Za-z0-9.-]{0,251}[A-Za-z0-9])?$/,
  sshUser:/^[A-Za-z_][A-Za-z0-9_-]{0,63}$/,
  container:/^[A-Za-z0-9][A-Za-z0-9_.-]{0,127}$/,
  database:/^[A-Za-z0-9_][A-Za-z0-9_]{0,62}$/,
  role:/^[A-Za-z0-9_][A-Za-z0-9_]{0,62}$/,
};
const MAX_ROWS=5000;
const identifier=(value)=>typeof value==='string'&&CONFIG_PATTERNS.database.test(value);

export function validateMealSourceConfig(value) {
  if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).sort().join('|')!==Object.keys(CONFIG_PATTERNS).sort().join('|')) throw new TypeError('Source config requires only host, sshUser, container, database and role');
  for(const [key,pattern] of Object.entries(CONFIG_PATTERNS)) if(typeof value[key]!=='string'||!pattern.test(value[key])) throw new TypeError('Source config has an invalid '+key);
  return Object.freeze({...value});
}

function assertTenant(tenant) {
  if(tenant!=='recipe-full') throw new TypeError('Meal source reads are restricted to the recipe-full tenant');
}

function assertIds(ids) {
  if(!Array.isArray(ids)||ids.length>MAX_ROWS||ids.some(id=>typeof id!=='string'||!/^\d{1,20}$/.test(id))) throw new TypeError('Recipe IDs must be decimal strings; at most 5000 IDs');
  if(new Set(ids).size!==ids.length) throw new TypeError('Recipe IDs must be unique');
}

function assertSpec(spec) {
  if(!spec||typeof spec!=='object'||Array.isArray(spec)) throw new TypeError('Each discovery spec must be an object');
  for(const key of ['ingredientLabels','titleTerms']) {
    const labels=spec[key];
    if(!Array.isArray(labels)||!labels.length||labels.length>64||labels.some(label=>typeof label!=='string'||!label||label.length>200)) throw new TypeError('Discovery labels must contain 1 to 64 nonempty strings of at most 200 characters');
  }
}

function verifiedSqlPath(name) {
  if(!Object.hasOwn(SQL_HASHES,name)) throw new TypeError('SQL is not in the verified meal read allowlist');
  const sqlPath=fileURLToPath(new URL('../'+name,import.meta.url));
  const scripts=fs.realpathSync(fileURLToPath(new URL('../',import.meta.url)));
  if(fs.realpathSync(sqlPath)!==scripts+'/'+name) throw new TypeError('SQL path leaves the verified scripts directory');
  const hash=crypto.createHash('sha256').update(fs.readFileSync(sqlPath)).digest('hex');
  if(hash!==SQL_HASHES[name]) throw new Error('SQL changed since verification; review and update its pinned hash');
  return sqlPath;
}

function jsonRows(stdout,maximum) {
  const lines=String(stdout).split(/\r?\n/).filter(line=>line.trim());
  if(lines.length>maximum) throw new Error('Recipe source exceeded its bounded query row limit');
  return lines.map(line=>{
    const row=JSON.parse(line);
    if(!row||typeof row!=='object'||Array.isArray(row)) throw new TypeError('Recipe source returned a non-object JSON row');
    return row;
  });
}

export function createMealSourceDatabase(database,options={}) {
  if(!identifier(database)) throw new TypeError('Recipe source database must be an explicit database name, not a connection URI');
  const configPath=Object.hasOwn(options,'configPath')?options.configPath:process.env.MOHEMEOKJI_RECIPE_SOURCE_CONFIG;
  let config=null;
  if(configPath) {
    if(typeof configPath!=='string'||fs.statSync(configPath).size>65536) throw new TypeError('Source config must be a JSON file no larger than 64 KiB');
    config=validateMealSourceConfig(JSON.parse(fs.readFileSync(configPath,'utf8')));
    if(config.database!==database) throw new Error('Declared recipe database does not match the configured source database');
  }
  const exec=options.exec??execFileSync;
  const run=(name,variables,maximum=MAX_ROWS)=>{
    const sqlPath=verifiedSqlPath(name);
    const settings={encoding:'utf8',maxBuffer:128*1024*1024,timeout:65000};
    let stdout;
    if(config) {
      const args=[fileURLToPath(new URL('../query-meal-source-readonly.py',import.meta.url)),sqlPath];
      for(const [key,value] of Object.entries(variables)) args.push(key+'='+value);
      stdout=exec('python3',args,{...settings,env:{...process.env,MOHEMEOKJI_RECIPE_SOURCE_CONFIG:configPath}});
    } else {
      const args=['-X','-qAt','-w','-d',database,'-v','ON_ERROR_STOP=1'];
      for(const [key,value] of Object.entries(variables)) args.push('-v',key+'='+value);
      args.push('-f',sqlPath);
      stdout=exec('psql',args,{...settings,timeout:60000,env:{...process.env,PGOPTIONS:'-c default_transaction_read_only=on'}});
    }
    return jsonRows(stdout,maximum);
  };
  return {
    databaseName:database,
    findCandidateMetadata({searchSpec,tenant,perIdentityLimit=500,totalLimit=MAX_ROWS}) {
      assertTenant(tenant);
      if(!Array.isArray(searchSpec)||searchSpec.length>MAX_ROWS) throw new TypeError('searchSpec must be a bounded array');
      if(!Number.isInteger(perIdentityLimit)||perIdentityLimit<1||perIdentityLimit>500) throw new TypeError('perIdentityLimit must be an integer from 1 to 500');
      if(!Number.isInteger(totalLimit)||totalLimit<1||totalLimit>MAX_ROWS) throw new TypeError('totalLimit must be an integer from 1 to 5000');
      searchSpec.forEach(assertSpec);
      const rows=[];
      // Sequential two-identity queries avoid a single expensive whole-week join.
      for(let offset=0;offset<searchSpec.length;offset+=2) {
        const batch=searchSpec.slice(offset,offset+2);
        rows.push(...run('find-store-recipe-candidates.sql',{
          search_spec_json:JSON.stringify(batch),tenant,candidate_limit:perIdentityLimit,
        },batch.length*perIdentityLimit));
      }
      return rows;
    },
    exportCandidateFacts(recipeIds,{tenant}) {
      assertTenant(tenant);
      assertIds(recipeIds);
      if(!recipeIds.length) return [];
      return run('export-store-recipe-candidates.sql',{recipe_ids_json:JSON.stringify(recipeIds),tenant},recipeIds.length);
    },
  };
}
