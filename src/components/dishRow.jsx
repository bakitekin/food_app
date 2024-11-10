/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {themeColors} from '../theme';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from '../redux/cartSlice';

const DishRow = ({item}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => selectCartItemsById(state, item.id));

  const handleIncrease = () => {
    dispatch(addToCart({...item}));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}));
  };

  // Toplam ürün sayısını hesapla
  const totalItems = cartItems?.length || 0;

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{height: 100, width: 100}}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl font-medium">{item.name}</Text>
          <Text className="text-gray-700 text-sm">{item.description}</Text>
        </View>
        <View className="flex-row justify-between items-center pl-3 mt-3">
          <Text className="text-lg font-bold">${item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              style={{backgroundColor: themeColors.bgColor(1)}}
              className="p-1 rounded-full"
              onPress={handleDecrease}
              disabled={totalItems === 0}>
              <Feather name="minus" size={20} color="white" />
            </TouchableOpacity>
            <Text className="px-2 text-center text-lg">{totalItems}</Text>
            <TouchableOpacity
              style={{backgroundColor: themeColors.bgColor(1)}}
              className="p-1 rounded-full"
              onPress={handleIncrease}>
              <Feather name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
