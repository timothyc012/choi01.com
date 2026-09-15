import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const POLICY_PATH=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../data/ingredient-availability-policy.json');
export const ingredientAvailabilityPolicy=JSON.parse(fs.readFileSync(POLICY_PATH,'utf8'));
export const INGREDIENT_AVAILABILITY_POLICY_VERSION=ingredientAvailabilityPolicy.policyVersion;

const compact=(value)=>String(value??'').normalize('NFKC').replace(/\s+/gu,'').trim();
const isIngredientLike=(value)=>{
  const raw=String(value??'').trim();
  return raw.length<=80&&!/[.!?。！？]/u.test(raw);
};

function sourceIngredientLabels(recipe) {
  if(Array.isArray(recipe?.ingredients)) return recipe.ingredients.map((item)=>item?.ingredient??item?.label).filter(Boolean);
  if(Array.isArray(recipe?.detailIngredients)) return recipe.detailIngredients.filter(Boolean);
  return [];
}

export function unavailableIngredientMatches(recipe) {
  const matches=[];
  for(const raw of sourceIngredientLabels(recipe)) {
    if(!isIngredientLike(raw)) continue;
    const value=compact(raw);
    if(!value) continue;
    for(const rule of ingredientAvailabilityPolicy.excludedIngredients||[]) {
      const excluded=(rule.excludeAliases||[]).map(compact).filter(Boolean);
      if(excluded.some((alias)=>value.includes(alias))) continue;
      const alias=(rule.aliases||[]).map(compact).filter(Boolean).find((candidate)=>value.includes(candidate));
      if(alias) matches.push({key:rule.key,label:String(raw).trim(),matchedAlias:alias,reason:rule.reason});
    }
  }
  const unique=new Map(matches.map((match)=>[match.key,match]));
  return [...unique.values()].sort((left,right)=>left.key.localeCompare(right.key,'ko'));
}

export function isRecipeAvailable(recipe) {
  return unavailableIngredientMatches(recipe).length===0;
}

export function availabilityPolicyPath() {
  return POLICY_PATH;
}
