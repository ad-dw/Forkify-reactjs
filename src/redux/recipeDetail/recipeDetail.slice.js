import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchRecipeDetails } from "../../helpers/apiRequests";

const INITIAL_STATE = {
  loading: false,
  recipe: null,
  error: null,
};

export const fetchRecipeAsync = createAsyncThunk(
  "recipeDetail/fetchRecipeDetail",
  async (recipeId) => {
    const response = await searchRecipeDetails(recipeId);
    return response;
  }
);

const recipeDetailSlice = createSlice({
  name: "recipeDetail",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipeAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action.payload;
      })
      .addCase(fetchRecipeAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addMatcher(fetchRecipeAsync.settled, (state) => {
        state.loading = false;
      });
  },
});

export const recipeDetail = recipeDetailSlice.reducer;
