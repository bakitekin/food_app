// store redux toolkit
import {configureStore} from '@reduxjs/toolkit';
import restaurantReducer from './restaurantSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    cart: cartReducer,
  },
});
