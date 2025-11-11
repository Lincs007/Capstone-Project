import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
import shoppingCartReducer from "./shoppingCartSlice";
import userDetailsReducer from "./userDetailsSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    shoppingCart: shoppingCartReducer,
    userDetails: userDetailsReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in dev
});

export default store;
