// import libraries
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {categories} from '../constans';

// create a component
const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        className="overflow-visible"
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {categories.map(category => {
          const isActive = category.id === activeCategory;
          const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive
            ? 'font-semibold text-gray-800'
            : 'text-gray-500';

          return (
            <View
              className="flex justify-center items-center mr-6"
              key={category.id}>
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={`p-1 justify-center items-center rounded-full shadow ${btnClass}`}>
                <Image source={category.image} style={styles.Image} />
              </TouchableOpacity>
              <Text
                className={`text-center mt-2 justify-center text-sm ${textClass}`}>
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  Image: {
    width: 45,
    height: 45,
  },
});

// make this component available to the app
export default Categories;
