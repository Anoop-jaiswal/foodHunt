import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeItem: (state, actions) => {
      state.items.pop();
    },
    clearCart: (state, actions) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
