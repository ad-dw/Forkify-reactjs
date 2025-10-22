import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchRecipeDetails } from "../../helpers/apiRequests";
import {
  isRecipeBookmarked,
  removeItemFromLocalStorage,
  setItemToLocalStorage,
} from "../../helpers/localstorage";

const INITIAL_STATE = {
  loading: false,
  recipe: null,
  error: null,
};

export const fetchRecipeAsync = createAsyncThunk(
  "recipeDetail/fetchRecipeDetail",
  async (recipe) => {
    const response = await searchRecipeDetails(recipe.id);
    response.bookmarked = isRecipeBookmarked(response);
    return response;
  }
);

const recipeDetailSlice = createSlice({
  name: "recipeDetail",
  initialState: INITIAL_STATE,
  reducers: {
    addBookmark(state) {
      state.recipe.bookmarked = true;
      setItemToLocalStorage("bookmarkedRecipes", state.recipe);
    },
    removeBookmark(state) {
      state.recipe.bookmarked = false;
      removeItemFromLocalStorage("bookmarkedRecipes", state.recipe.id);
    },
  },
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

export const { addBookmark, removeBookmark } = recipeDetailSlice.actions;
