export const selectRecipeDetail = (state) => state.recipeDetail.recipe;

export const selectIsRecipeLoading = (state) => state.recipeDetail.isLoading;

export const selectIsRecipeError = (state) => state.recipeDetail.error;
