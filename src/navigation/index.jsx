import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/homeScreen';
import {
  CARTSCREEN,
  DELIVERYSCREEN,
  HOME,
  ORDERPREPARING,
  RESTAURANT,
} from '../router';
import Cartscreen from '../screens/cartScreen';
import RestaurantScreen from '../screens/restaurantScreen';
import DeliveryScreen from '../screens/deliveryScreen';
import OrderPrepairingScreen from '../screens/orderPrepairingScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={HOME} component={HomeScreen} />
        <Stack.Screen name={CARTSCREEN} component={Cartscreen} />
        <Stack.Screen name={RESTAURANT} component={RestaurantScreen} />
        <Stack.Screen name={ORDERPREPARING} component={OrderPrepairingScreen} />
        <Stack.Screen name={DELIVERYSCREEN} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
