import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchRecipe } from "../../helpers/apiRequests";

const INITIAL_STATE = {
  loading: false,
  results: [],
  error: null,
};

export const searchResultsAsync = createAsyncThunk(
  "searchResults/fetchSearchResults",
  async (searchTerm) => {
    const response = await searchRecipe(searchTerm);
    return response;
  }
);

const searchResultSlice = createSlice({
  name: "searchResults",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(searchResultsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchResultsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchResultsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addMatcher(searchResultsAsync.settled, (state) => {
        state.loading = false;
      });
  },
});

export const searchResults = searchResultSlice.reducer;
