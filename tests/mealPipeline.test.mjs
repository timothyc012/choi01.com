import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import {cleanupExpired} from '../scripts/mohemeokji-weekly-pipeline.mjs';

function writeManifest(root,name,expiresAt,status='awaiting-ontology-review') {
  const dir=path.join(root,name);
  fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,'pipeline-manifest.json'),JSON.stringify({schemaVersion:1,expiresAt,status})+'\n');
}

test('weekly pipeline cleanup removes expired staging leases only',()=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'mohemeokji-pipeline-test-'));
  try {
    writeManifest(root,'expired','2020-01-01T00:00:00.000Z');
    writeManifest(root,'fresh','2999-01-01T00:00:00.000Z','published');
    fs.mkdirSync(path.join(root,'unrelated'));
    const result=cleanupExpired(root);
    assert.deepEqual(result.removed,['expired']);
    assert.equal(fs.existsSync(path.join(root,'expired')),false);
    assert.equal(fs.existsSync(path.join(root,'fresh')),true);
    assert.deepEqual(result.kept,[{name:'fresh',expiresAt:'2999-01-01T00:00:00.000Z',status:'published'}]);
  } finally { fs.rmSync(root,{recursive:true,force:true}); }
});

