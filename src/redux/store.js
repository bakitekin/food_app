// store redux toolkit
import {configureStore} from '@reduxjs/toolkit';
import restaurantSlice from './restaurantSlice';
import {cartSlice} from './cartSlice';

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice,
    cart: cartSlice,
  },
});
