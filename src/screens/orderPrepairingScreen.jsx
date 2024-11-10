// Import libraries
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {DELIVERYSCREEN} from '../router';

// Create a component
const OrderPrepairingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(DELIVERYSCREEN);
    }, 3000);

    // Cleanup function to clear timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        className="w-80 h-80"
        source={require('../../assets/images/delivery.gif')}
        resizeMode="cover" // Corrected value for resizing image
      />
    </View>
  );
};

// Make this component available to the app
export default OrderPrepairingScreen;
