import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { searchResults } from "../redux/searchResults/searchResults.slice";
import { recipeDetail } from "../redux/recipeDetail/recipeDetail.slice";

export function renderWithProviders(
  ui,
  {
    preloadedState = { counter: { value: 0 } },
    store = configureStore({
      reducer: combineReducers({ searchResults, recipeDetail }),
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
