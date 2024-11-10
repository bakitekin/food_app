import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// create a new restaurant with the given name and initial state and a list
export const {setRestaurant} = restaurantSlice.actions;

// select the current restaurant from the state
export const selectRestaurant = state => state.restaurant.restaurant;

// export the reducer
export default restaurantSlice.reducer;
