/* eslint-disable react-native/no-inline-styles */
// import libraries
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {themeColors} from '../theme';
import Feather from 'react-native-vector-icons/Feather';

// create a component
const DishRow = ({item}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{height: 100, width: 100}}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between items-center pl-3">
          <Text className="text-gray-700 text-lg font-bold ">
            ${item.price}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              style={{backgroundColor: themeColors.bgColor(1)}}
              className="p-1 rounded-full "
              onPress={decreaseQuantity}>
              <Feather name="minus" size={20} color="white" />
            </TouchableOpacity>
            <Text className="px-2 text-center justify-center text-lg">
              {quantity}
            </Text>
            <TouchableOpacity
              style={{backgroundColor: themeColors.bgColor(1)}}
              className="p-1 rounded-full "
              onPress={increaseQuantity}>
              <Feather name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

// make this component available to the app
export default DishRow;
