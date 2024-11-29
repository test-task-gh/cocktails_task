import * as v from 'valibot';

import type { CocktailCode, DrinkData } from '../types';

const drinkSchema = v.objectWithRest(
  {
    strDrink: v.string(),
    strDrinkThumb: v.string(),

    strCategory: v.string(),
    strAlcoholic: v.string(),
    strGlass: v.string(),

    strInstructions: v.string(),
  },
  v.unknown(),
);

const responseSchema = v.object({ drinks: v.array(v.unknown()) });

const validateResponse = (
  data: unknown,
): v.InferOutput<typeof responseSchema> => v.parse(responseSchema, data);

const validateDrink = (data: unknown): v.InferOutput<typeof drinkSchema> =>
  v.parse(drinkSchema, data);

const transformData = (response: unknown): DrinkData => {
  const data = validateResponse(response);
  const drink = validateDrink(data.drinks[0]);
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
  } = drink;

  let counterMeasure = 1;
  let measure = drink[`strMeasure${counterMeasure}`];
  const measures: string[] = [];

  while (measure && typeof measure === 'string') {
    measures.push(measure);
    counterMeasure++;
    measure = drink[`strMeasure${counterMeasure}`];
  }

  let counterIngredient = 1;
  let ingredient = drink[`strIngredient${counterIngredient}`];
  const ingredients: string[] = [];

  while (ingredient && typeof ingredient === 'string') {
    ingredients.push(ingredient);
    counterIngredient++;
    ingredient = drink[`strIngredient${counterIngredient}`];
  }

  return {
    drink: strDrink,
    drinkThumb: strDrinkThumb,
    category: strCategory,
    alcoholic: strAlcoholic,
    glass: strGlass,
    instructions: strInstructions,
    measures,
    ingredients,
  };
};

export const getCocktailDetails = (
  cocktailCode: CocktailCode,
): Promise<DrinkData> =>
  new Promise((r) => setTimeout(r, 1500)).then(() =>
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailCode}`,
    )
      .then((r) =>
        r.ok
          ? r.json()
          : Promise.reject(new Error(`Something wrong: ${r.status}`)),
      )
      .then(transformData),
  );
