#!/usr/bin/env node
/**
 * Fail the build if this vendored copy of chois-canvas was edited in place.
 *
 * Copy this file into a consumer (or invoke it from one) and run it before the
 * build. It compares the vendored files against the hashes recorded in
 * .canvas-sync.json when the copy was last synced, so it needs neither network
 * nor the upstream repo — it works on Vercel exactly as it does locally.
 *
 * What it catches is the failure that produced three divergent copies of this
 * package: someone fixes a bug inside a consumer's packages/canvas, the fix
 * never reaches upstream, and the other consumers keep the bug. Here that edit
 * stops the build and names the files, so the fix gets made upstream instead.
 *
 *   node scripts/verify-canvas-vendor.mjs packages/canvas
 *
 * Exit codes: 0 clean, 1 drift, 2 unusable (no manifest / bad arguments).
 */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const target = resolve(process.argv[2] ?? 'packages/canvas');
const manifestPath = join(target, '.canvas-sync.json');

if (!existsSync(target)) {
  console.error(`canvas vendor check: ${target} does not exist`);
  process.exit(2);
}

if (!existsSync(manifestPath)) {
  console.error('canvas vendor check: no .canvas-sync.json in ' + target);
  console.error('  This copy predates sync tracking. From the chois-canvas checkout run:');
  console.error('    node scripts/sync-canvas.mjs --write');
  process.exit(2);
}

let manifest;
try {
  manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
} catch (error) {
  console.error(`canvas vendor check: ${manifestPath} is not readable JSON — ${error.message}`);
  process.exit(2);
}

const recorded = manifest.files;
if (!recorded || typeof recorded !== 'object') {
  console.error('canvas vendor check: manifest has no file hashes; re-run the sync');
  process.exit(2);
}

const edited = [];
const missing = [];
for (const [file, hash] of Object.entries(recorded)) {
  const full = join(target, file);
  if (!existsSync(full)) { missing.push(file); continue; }
  if (createHash('sha256').update(readFileSync(full)).digest('hex') !== hash) edited.push(file);
}

if (edited.length === 0 && missing.length === 0) {
  const commit = manifest.upstreamCommit ? manifest.upstreamCommit.slice(0, 8) : 'unknown';
  console.log(`canvas vendor check: clean (${Object.keys(recorded).length} files, upstream ${commit})`);
  process.exit(0);
}

console.error('canvas vendor check: this vendored copy no longer matches upstream chois-canvas.\n');
if (edited.length > 0) {
  console.error(`  edited in place (${edited.length}):`);
  for (const file of edited.slice(0, 25)) console.error(`    ${file}`);
  if (edited.length > 25) console.error(`    … and ${edited.length - 25} more`);
}
if (missing.length > 0) {
  console.error(`  missing (${missing.length}):`);
  for (const file of missing.slice(0, 25)) console.error(`    ${file}`);
  if (missing.length > 25) console.error(`    … and ${missing.length - 25} more`);
}
console.error(`
  Editing a vendored copy is how the three copies of this package drifted
  apart. Make the change in the chois-canvas repo instead, then re-sync:

    cd <chois-canvas> && npm test && node scripts/sync-canvas.mjs --write

  If the edit here is a deliberate, consumer-specific divergence, record it by
  re-running the sync from an upstream commit that contains it.
`);
process.exit(1);
