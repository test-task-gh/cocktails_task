import { CocktailCode } from '../types';

import { upFirst } from '../utils';

const margarita = 'margarita';
const mojito = 'mojito';
const a1 = 'a1';
const kir = 'kir';

export const COCKTAILS = {
  margarita: {
    code: margarita,
    name: upFirst(margarita),
  },
  mojito: {
    code: mojito,
    name: upFirst(mojito),
  },
  a1: {
    code: a1,
    name: upFirst(a1),
  },
  kir: {
    code: kir,
    name: upFirst(kir),
  },
} as const satisfies Record<string, { code: CocktailCode; name: string }>;
