import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  //middleware: [],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
