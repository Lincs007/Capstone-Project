import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
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
  },
});

export default shoppingCartSlice.reducer;
