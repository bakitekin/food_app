/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
//import libraries
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {CARTSCREEN} from '../router';
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../redux/cartSlice';

// create a component
const CartIcon = () => {
  const navigation = useNavigation();

  // Assuming you have selectors like these, update them based on your store structure
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  // Only show the CartIcon if there are items in the cart
  if (!cartItems || cartItems.length === 0) {
    return;
  }

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate(CARTSCREEN)}
        style={{backgroundColor: themeColors.bgColor(1)}}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
        <View
          style={{backgroundColor: 'rgba(255,255,255,0.3)'}}
          className="p-2 px-4 rounded-full">
          <Text className="font-extrabold text-white text-center text-lg">
            {cartItems.length}
          </Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text
          style={{backgroundColor: 'rgba(255,255,255,0.3)'}}
          className="font-extrabold text-white text-center text-lg p-2 px-4 rounded-full">
          ${cartTotal.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default CartIcon;
