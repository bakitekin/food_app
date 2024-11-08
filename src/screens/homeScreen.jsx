/* eslint-disable react-native/no-inline-styles */
// import libraries
import React from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {themeColors} from '../theme';
import Categories from '../components/categories';
import {featured} from '../constans';
import FeaturedRow from '../components/featuredRow';

// create a component
const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Feather name="search" size={25} color="gray" />
          <TextInput placeholder="Restaurant" className="flex-1 ml-2" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <TouchableOpacity>
              <Feather name="map-pin" size={20} color="gray" />
            </TouchableOpacity>
            <Text className="ml-2 text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <TouchableOpacity
          className="p-3 rounded-full ml-2"
          style={{backgroundColor: themeColors.bgColor(1)}}>
          <Feather name="sliders" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <Categories />
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// make this component available to the app
export default HomeScreen;
