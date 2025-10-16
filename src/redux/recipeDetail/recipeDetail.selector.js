export const selectRecipeDetail = (state) => state.recipeDetail.recipe;

export const selectIsRecipeLoading = (state) => state.recipeDetail.loading;

export const selectIsRecipeError = (state) => state.recipeDetail.error;
