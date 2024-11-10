/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
// Import libraries
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {themeColors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {ORDERPREPARING} from '../router';
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../redux/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurant} from '../redux/restaurantSlice';

// Create a component
const Cartscreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigate = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const dispatch = useDispatch();
  const deliveryFee = 2;

  useEffect(() => {
    const items = cartItems.reduce((groupedItems, item) => {
      if (groupedItems[item.id]) {
        groupedItems[item.id].push(item);
      } else {
        groupedItems[item.id] = [item];
      }
      return groupedItems;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  return (
    <View className="bg-white flex-1">
      {/* Header Section */}
      <View className="relative py-2 shadow-sm mt-14">
        <TouchableOpacity
          onPress={() => navigate.goBack()}
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="absolute z-10 rounded-full p-1 top-5 left-5 shadow-sm">
          <AntDesign name="arrowleft" size={25} color="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-2xl mb-1">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/* Delivery Info */}
      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 items-center">
        <Image
          className="w-20 h-20 rounded"
          source={require('../../assets/images/deliverGuy1.png')}
        />
        <Text className="flex-1 text-center">Delivery in 15-30 minutes</Text>
        <TouchableOpacity>
          <Text
            style={{color: themeColors.text}}
            className="font-bold shadow-md">
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dish List */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 15}}
        className="bg-white pt-3">
        {Object.entries(groupedItems).map(([key, items]) => {
          const dish = items[0];
          return [
            <View
              key={key}
              className="flex-row items-center space-x-3 py-4 px-4 mx-2 mb-3 bg-white shadow-md rounded-3xl">
              <Text
                style={{color: themeColors.text}}
                className="font-bold mr-4">
                {items.length} x
              </Text>
              <Image
                className="w-14 h-14 rounded-full mr-4"
                source={dish.image}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart({id: dish.id}))}
                style={{
                  backgroundColor: themeColors.bgColor(1),
                  marginLeft: 10,
                }}
                className="p-1 rounded-full">
                <AntDesign name="minus" size={20} color="white" />
              </TouchableOpacity>
            </View>,
          ];
        })}
      </ScrollView>

      {/* Order Summary */}
      <View
        className="p-6 px-8 rounded-t-3xl space-y-4"
        style={{backgroundColor: themeColors.bgColor(0.2)}}>
        <View className="gap-2">
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Subtotal</Text>
            <Text className="text-gray-700">${cartTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700">Delivery Fee</Text>
            <Text className="text-gray-700">${deliveryFee}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Order Total</Text>
            <Text className="text-gray-700 font-extrabold">
              ${deliveryFee + cartTotal}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigate.navigate(ORDERPREPARING)}
              className="p-3 rounded-full"
              style={{backgroundColor: themeColors.bgColor(1)}}>
              <Text className="text-center text-white font-bold text-lg shadow-md">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

// Make this component available to the app
export default Cartscreen;
