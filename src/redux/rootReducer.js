import { combineReducers } from "@reduxjs/toolkit";
import { searchResults } from "./searchResults/searchResults.slice";
import { recipeDetail } from "./recipeDetail/recipeDetail.slice";

export const rootReducer = combineReducers({
  searchResults,
  recipeDetail,
});
