import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      const product = action.payload;
      const existingProduct = state.shoppingCart.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.shoppingCart.push({ ...product, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.shoppingCart.find(
        (product) => product.id === productId
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          return state.shoppingCart.filter(
            (product) => product.id !== productId
          );
        }
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.shoppingCart = state.shoppingCart.filter(
        (product) => product.id !== productId
      );
    },
  },
});
export const { incrementQuantity, removeFromCart, decrementQuantity } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
