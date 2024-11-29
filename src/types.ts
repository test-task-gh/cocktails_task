export type CocktailCode = 'margarita' | 'mojito' | 'a1' | 'kir';

export type DrinkData = {
  drink: string;
  drinkThumb: string;

  category: string;
  alcoholic: string;
  glass: string;

  instructions: string;

  measures: string[];
  ingredients: string[];
};
