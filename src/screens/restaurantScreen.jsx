/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
// import libraries
import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import CartIcon from '../components/cartIcon';
import {useNavigation, useRoute} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {themeColors} from '../theme';
import DishRow from '../components/dishRow';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../redux/restaurantSlice';

// create a component
const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const item = params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({...item}));
    }
  }, []);

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View className="relative">
          <Image source={item.image} className="w-full h-72" />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-10 left-6 bg-gray-50 rounded-full p-2">
            <Feather
              name="arrow-left"
              size={25}
              color={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
        </View>
        {/* Restaurant Details */}
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-white -mt-10 pt-6">
          <View className="px-6">
            <Text className="text-3xl font-bold"> {item.name} </Text>
            <View className="flex-row space-x-2 my-1 gap-2">
              {/* Ratings and Reviews */}
              <View className="flex-row px-1 items-center space-x-1 justify-between">
                <Image
                  className="h-4 w-4"
                  source={require('../../assets/images/fullStar.jpeg')}
                />
                <Text className="text-xs ml-1">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} review) •{' '}
                    <Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>
              {/* Location */}
              <View className="flex-row items-center space-x-1">
                <Feather
                  className="mr-1"
                  name="map-pin"
                  size={15}
                  color="gray"
                />
                <Text className="text-gray-700 text-sm">
                  İstanbul • {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 px-2 mt-2">{item.description}</Text>
          </View>
        </View>
        {/* Menu Section */}
        <View className="pb-36 bg-white">
          <Text className="px-8 py-4 text-2xl font-bold">Menu</Text>
          {item.dishes.map((dish, index) => (
            <DishRow item={{...dish}} key={index} />
          ))}
        </View>
      </ScrollView>
      {/* Cart Icon Component */}
      <CartIcon />
    </View>
  );
};

// make this component available to the app
export default RestaurantScreen;
