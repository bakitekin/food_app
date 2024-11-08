/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';

// create a component
const CartIcon = () => {
  const navigation = useNavigation();
  return (
    <View className="absulute -bottom-80 w-full z-50">
      <TouchableOpacity
        style={{backgroundColor: themeColors.bgColor(1)}}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg ">
        <View
          style={{backgroundColor: 'rgba(255,255,255,0.3)'}}
          className="p-2 px-4 rounded-full">
          <Text className="font-extrabold text-white text-center text-lg">
            {2}{' '}
          </Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-center text-lg">
          ${23}{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default CartIcon;
