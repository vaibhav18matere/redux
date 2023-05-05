import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// for fetching all cocktails on homepage

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res) => res.json());
  }
);

// for fetching single cocktail data on separate cocktail page

export const fetchSingleCocktail = createAsyncThunk(
  "cocktails/fetchSingleCocktail",
  async ({ id }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.json());
  }
);

const initialState = {
  cocktails: [],
  cocktail: [],
  loading: false,
  error: null,
};

const extraReducers = {
  // for all cocktails

  [fetchCocktails.pending]: (state) => {
    state.loading = true;
  },
  [fetchCocktails.fulfilled]: (state, action) => {
    state.loading = false;
    state.cocktails = action.payload.drinks;
  },
  [fetchCocktails.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  // for single cocktail
  [fetchSingleCocktail.pending]: (state) => {
    state.loading = true;
  },
  [fetchSingleCocktail.fulfilled]: (state, action) => {
    state.loading = false;
    state.cocktail = action.payload.drinks;
  },
  [fetchSingleCocktail.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
};

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  extraReducers,
});

export default cocktailSlice.reducer;
