import * as data from './recitems.json'
const firstRecipe = data.default[0];
console.log(data.default, firstRecipe.name, firstRecipe.ingredients, firstRecipe.image, firstRecipe.url)
export const recipeData = data.default
