export const selectSearchResults = (state) => state.searchResults?.results;
export const selectSearchPages = (state) => state.searchResults?.pages;
export const selectSearchTerm = (state) => state.searchResults?.searchTerm;
export const selectSearchOffset = (state) => state.searchResults?.offset;
export const selectSearchLoading = (state) => state.searchResults?.loading;
export const selectSearchError = (state) => state.searchResults?.error;
export const selectSearchTotalResults = (state) =>
  state.searchResults?.totalResults;
