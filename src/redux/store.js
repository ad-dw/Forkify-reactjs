import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      process.env.NODE_ENV === "development" ? logger : []
    ),
  devTools: process.env.NODE_ENV !== "production",
});
