#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root = path.resolve('public/mohemeokji');
const assets = ['ontology-recipe-details.js','meal-package-prices.js','meal-planner-recipe-data.js','meal-data-loader.js','meal-shopping.js','meal-recommendations.js'];
const version = crypto.createHash('sha256').update(assets.map((file)=>fs.readFileSync(path.join(root,file),'utf8')).join('\n')).digest('hex').slice(0,12);
const canonical = fs.readFileSync(path.join(root,'index.html'),'utf8').replace(/(<script src="[^"?]+\.js)\?v=[^"]+("[^>]*>)/g, '$1?v='+version+'$2');
const routes = fs.readdirSync(root,{withFileTypes:true}).filter((entry)=>entry.isDirectory() && fs.existsSync(path.join(root,entry.name,'index.html'))).map((entry)=>entry.name);
const outputs = [[path.join(root,'index.html'),canonical]];
for (const route of routes) {
  outputs.push([path.join(root,route,'index.html'),canonical]);
  outputs.push([path.join(root,route,'meal-planner-recipe-data.js'),fs.readFileSync(path.join(root,'meal-planner-recipe-data.js'),'utf8')]);
}
let drift = false;
for (const [file,content] of outputs) {
  if (fs.readFileSync(file,'utf8') === content) continue;
  drift = true;
  if (!process.argv.includes('--check')) fs.writeFileSync(file,content);
}
if (process.argv.includes('--check') && drift) { console.error('Meal page copies or asset versions are stale. Run node scripts/sync-meal-pages.mjs'); process.exitCode=1; }
else console.log(JSON.stringify({pages:routes.length+1,assetVersion:version,mode:process.argv.includes('--check')?'check':'sync'}));
