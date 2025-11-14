import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchRecipe } from "../../helpers/apiRequests";

const INITIAL_STATE = {
  loading: false,
  results: [],
  searchTerm: "",
  totalResults: 0,
  pages: 1,
  offset: 0,
  error: null,
};

export const searchResultsAsync = createAsyncThunk(
  "searchResults/fetchSearchResults",
  async ({ searchTerm, offset }) => {
    const response = await searchRecipe(searchTerm, offset);
    return { response, offset };
  }
);

const searchResultSlice = createSlice({
  name: "searchResults",
  initialState: INITIAL_STATE,
  reducers: {
    updateSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchResultsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchResultsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.pages = Math.ceil(
          action.payload.response.totalResults /
            action.payload.response.results.length
        );
        state.offset = action.payload.offset;
        state.results = action.payload.response.results;
        state.totalResults = action.payload.response.totalResults;
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
export const { updateSearchTerm } = searchResultSlice.actions;
