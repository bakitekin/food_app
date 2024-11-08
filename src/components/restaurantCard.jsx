/* eslint-disable react-native/no-inline-styles */
//import liraries
import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {themeColors} from '../theme';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {RESTAURANT} from '../router';

// create a component
const RestaurantCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(RESTAURANT, {...item})}>
      <View
        style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}}
        className="bg-white mr-6 rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2 ">
          <Text className="text-lg font-bold pt-3 ">{item.name} </Text>
          <View className="flex-row items-center space-x-1 mt-1">
            <Image
              className="h-4 w-4"
              source={require('../../assets/images/fullStar.jpeg')}
            />
            <Text className="text-xs">
              <Text className="text-green-700"> {item.stars} </Text>
              <Text className="text-gray-700">({item.reviews} Reviews) • </Text>
              <Text className="text-semibold">{item.category}</Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1 mt-2">
            <Feather name="map-pin" size={15} color="gray" />
            <Text className="text-sm text-gray-700 ml-2 ">
              Nearby • {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

//make this component available to the app
export default RestaurantCard;
