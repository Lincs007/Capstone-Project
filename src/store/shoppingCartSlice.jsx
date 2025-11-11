import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    // Add product to cart or increment quantity if it exists
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

    // Decrease quantity or remove product if quantity reaches 0
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.shoppingCart.find(
        (product) => product.id === productId
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          // Instead of returning a new array (which does nothing here),
          // update state.shoppingCart directly
          state.shoppingCart = state.shoppingCart.filter(
            (product) => product.id !== productId
          );
        }
      }
    },

    // Remove product from cart completely
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.shoppingCart = state.shoppingCart.filter(
        (product) => product.id !== productId
      );
    },
  },
});

// Export actions
export const { incrementQuantity, removeFromCart, decrementQuantity } =
  shoppingCartSlice.actions;

// Export reducer
export default shoppingCartSlice.reducer;
