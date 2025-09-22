import { combineReducers } from "@reduxjs/toolkit";
import { searchResults } from "./searchResults/searchResults.slice";

export const rootReducer = combineReducers({
  searchResults,
});
