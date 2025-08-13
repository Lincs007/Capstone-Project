import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
import shoppingCartReducer from "./shoppingCartSlice";
const store = configureStore({
  reducer: { products: productReducer, shoppingCart: shoppingCartReducer },
  //middleware: [],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
