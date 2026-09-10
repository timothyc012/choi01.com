import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const sha256=(bytes)=>crypto.createHash('sha256').update(bytes).digest('hex');
const digest=/^[a-f0-9]{64}$/;

function safePath(root,relative) {
  if(typeof relative!=='string'||!relative||path.isAbsolute(relative)) return null;
  const resolved=path.resolve(root,relative);
  return resolved.startsWith(path.resolve(root)+path.sep)?resolved:null;
}

function findForbiddenKey(value,trail='') {
  if(!value||typeof value!=='object') return null;
  for(const [key,child] of Object.entries(value)) {
    const current=trail?trail+'.'+key:key;
    if(['instruction','instructionText','sourceImage','sourceImages','imageUrl','images','html'].includes(key)) return current;
    const nested=findForbiddenKey(child,current);
    if(nested) return nested;
  }
  return null;
}

export function validateMealSnapshotDirectory(outputDir) {
  const errors=[];
  const currentPath=path.join(outputDir,'current.json');
  if(!fs.existsSync(currentPath)) return {valid:false,errors:['current.json is missing']};
  let current;
  try { current=JSON.parse(fs.readFileSync(currentPath,'utf8')); }
  catch { return {valid:false,errors:['current.json is invalid JSON']}; }
  if(current.schemaVersion!==1) errors.push('current.schemaVersion must be 1');
  if(!digest.test(current.snapshotId||'')) errors.push('current.snapshotId must be a SHA-256 digest');
  if(!digest.test(current.manifestSha256||'')) errors.push('current.manifestSha256 must be a SHA-256 digest');
  const manifestPath=safePath(outputDir,current.manifestPath);
  if(!manifestPath||!fs.existsSync(manifestPath)) errors.push('current.manifestPath is missing or unsafe');
  if(errors.length) return {valid:false,errors};
  const manifestBytes=fs.readFileSync(manifestPath);
  if(sha256(manifestBytes)!==current.manifestSha256) errors.push('manifest hash does not match current pointer');
  let manifest;
  try { manifest=JSON.parse(manifestBytes.toString('utf8')); }
  catch { errors.push('manifest is invalid JSON'); return {valid:false,errors}; }
  if(manifest.snapshotId!==current.snapshotId) errors.push('manifest snapshotId does not match current pointer');
  if(manifest.schemaVersion!==1) errors.push('manifest.schemaVersion must be 1');
  if(!manifest.fileHashes||typeof manifest.fileHashes!=='object'||Array.isArray(manifest.fileHashes)) errors.push('manifest.fileHashes must be an object');
  for(const [relative,expected] of Object.entries(manifest.fileHashes||{})) {
    const target=safePath(outputDir,relative);
    if(!target||!fs.existsSync(target)) { errors.push('listed artifact is missing or unsafe: '+relative); continue; }
    if(!digest.test(expected)||sha256(fs.readFileSync(target))!==expected) errors.push('artifact hash mismatch: '+relative);
    if(relative.endsWith('.json')) {
      try {
        const json=JSON.parse(fs.readFileSync(target,'utf8'));
        const forbidden=findForbiddenKey(json);
        if(forbidden) errors.push(`forbidden public source field ${forbidden}: ${relative}`);
      } catch { errors.push('artifact is invalid JSON: '+relative); }
    }
  }
  const locationKeys=new Set();
  for(const location of manifest.locations||[]) {
    const key=[location.postcode,location.store,location.branchId].join('|');
    if(locationKeys.has(key)) errors.push('duplicate location boundary: '+key);
    locationKeys.add(key);
    if(!manifest.fileHashes?.[location.path]) errors.push('location is absent from hash table: '+location.path);
  }
  return {valid:errors.length===0,errors};
}
