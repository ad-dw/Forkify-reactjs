import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchRecipe } from "../../helpers/apiRequests";

const INITIAL_STATE = {
  loading: false,
  results: [],
  searchTerm: "",
  pages: 1,
  offset: 0,
  error: null,
};

export const searchResultsAsync = createAsyncThunk(
  "searchResults/fetchSearchResults",
  async ({ searchTerm, offset }) => {
    console.log("offset in thunk:", offset);
    const response = await searchRecipe(searchTerm, offset);
    return response;
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
          action.payload.totalResults / action.payload.results.length
        );
        state.offset = state.offset + action.payload.results.length;
        state.results = action.payload.results;
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
