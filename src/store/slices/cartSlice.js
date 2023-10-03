import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [{}],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload.item);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    resetCart: (state) => {
      state.cart = [{}];
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
