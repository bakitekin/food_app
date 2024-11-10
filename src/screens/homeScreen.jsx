/* eslint-disable react-native/no-inline-styles */
// import libraries
import React, {useState} from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView className="bg-white">
      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Feather name="search" size={25} color="gray" />
          <TextInput
            placeholder="Search restaurants"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 ml-2"
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <TouchableOpacity>
              <Feather name="map-pin" size={20} color="gray" />
            </TouchableOpacity>
            <Text className="ml-2 text-gray-600">İstanbul, Türkiye</Text>
          </View>
        </View>
        <TouchableOpacity
          className="p-3 rounded-full ml-2"
          style={{backgroundColor: themeColors.bgColor(1)}}>
          <Feather name="sliders" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        {/* Categories Component */}
        <Categories />

        {/* Featured Rows */}
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => (
            <FeaturedRow
              key={index}
              title={item.title}
              restaurants={item.restaurants}
              description={item.description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// make this component available to the app
export default HomeScreen;
