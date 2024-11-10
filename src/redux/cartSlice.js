import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!action.payload) return;
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      if (!action.payload?.id) return;

      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1);
      }
    },
    emptyCart: state => {
      state.items = [];
    },
  },
});

export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions;

export const selectCartItems = state => state.cart?.items || [];

export const selectCartItemsById = (state, id) =>
  state.cart?.items.filter(item => item.id === id) || [];

export const selectCartTotal = state =>
  state.cart?.items.reduce((total, item) => total + (item.price || 0), 0) || 0;

export default cartSlice.reducer;
