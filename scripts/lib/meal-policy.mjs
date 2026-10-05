import fs from 'node:fs';
import vm from 'node:vm';
const context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(new URL('../../public/mohemeokji/meal-recommendations.js',import.meta.url),'utf8'),context);
vm.runInContext(fs.readFileSync(new URL('../../public/mohemeokji/meal-shopping.js',import.meta.url),'utf8'),context);
export const mealPolicy=context.window.MealRecommendations;
export const mealShoppingPolicy=context.window.MealShopping;
