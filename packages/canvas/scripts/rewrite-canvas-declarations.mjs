import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

async function rewrite(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewrite(path);
      continue;
    }
    if (!entry.name.endsWith('.d.ts')) continue;
    const source = await readFile(path, 'utf8');
    const rewritten = source
      .replace(/(\.\.?\/[^'"\n]+)\.ts(?=['"])/g, '$1.js')
      .replace(/^import ['"]\.\/styles\.css['"];?\s*\n/gm, '');
    if (rewritten !== source) await writeFile(path, rewritten);
  }
}

await stat(root);
await rewrite(root);
