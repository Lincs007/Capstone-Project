import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";

const store = configureStore({
  reducer: { products: productReducer },
  //middleware: [],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
