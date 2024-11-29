import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { DrinkData, CocktailCode } from '../types';
import { getCocktailDetails } from '../api';

type CocktailStatus =
  | { type: 'loading' }
  | { type: 'error'; errorMessage: string }
  | { type: 'success'; data: DrinkData };

const initialState: Partial<Record<CocktailCode, CocktailStatus>> = {};

export const requestDetails = createAsyncThunk(
  'cocktailsData/requestDetails',
  (code: CocktailCode) => getCocktailDetails(code),
);

const cocktailsDataSlice = createSlice({
  name: 'cocktailsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestDetails.pending, (state, action) => {
        state[action.meta.arg] = { type: 'loading' };
      })
      .addCase(requestDetails.rejected, (state, action) => {
        state[action.meta.arg] = {
          type: 'error',
          errorMessage: action.error.message || 'Something went wrong',
        };
      })
      .addCase(requestDetails.fulfilled, (state, action) => {
        state[action.meta.arg] = { type: 'success', data: action.payload };
      });
  },
});

export const cocktailsDataReducer = cocktailsDataSlice.reducer;
