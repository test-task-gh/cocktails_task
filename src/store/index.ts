import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { CocktailCode } from '../types';
import { cocktailsDataReducer, requestDetails } from './cocktailsData';

export const store = configureStore({
  reducer: {
    cocktailsDataReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const actions = {
  requestDetails,
};

const getDetails = (store: RootState) => store.cocktailsDataReducer;

const idleState = { type: 'idle' as const };

export const selectors = {
  getDetailsSelector: (code: CocktailCode) => (store: RootState) =>
    getDetails(store)[code] || idleState,
};

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();
