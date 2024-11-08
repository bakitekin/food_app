// import libraries
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import RestaurantCard from './restaurantCard';
import {themeColors} from '../theme';

// create a component
const FeaturedRow = ({title, restaurants, description}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-semibold text-lg">{title}</Text>
          <Text className="text-gray-500 text-sm">{description}</Text>
        </View>
        <TouchableOpacity className="font-extrabold">
          <Text style={{color: themeColors.text}}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible py-5"
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingHorizontal: 15}}>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} item={restaurant} />
        ))}
      </ScrollView>
    </View>
  );
};

// make this component available to the app
export default FeaturedRow;
