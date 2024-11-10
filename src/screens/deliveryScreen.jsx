import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurant} from '../redux/restaurantSlice';

/* eslint-disable react/react-in-jsx-scope */
const {Text, View, Image, TouchableOpacity} = require('react-native');
const {emptyCart} = require('../redux/cartSlice');
const {HOME} = require('../router');
const {default: MapView, Marker} = require('react-native-maps');
const {themeColors} = require('../theme');
import Feather from 'react-native-vector-icons/Feather';

const DeliveryScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cancelOrder = () => {
    navigation.navigate(HOME);
    dispatch(emptyCart());
  };

  if (!restaurant) {
    return <Text>Loading...</Text>; // Handle loading state gracefully
  }

  return (
    <View className="flex-1">
      <MapView
        className="flex-1"
        mapType="standard" // corrected typo
        initialRegion={{
          latitude: restaurant?.lat ?? 0,
          longitude: restaurant?.lng ?? 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: restaurant?.lat ?? 0,
            longitude: restaurant?.lng ?? 0,
          }}
          title={restaurant?.name}
          description={restaurant?.description}
        />
      </MapView>
      <View className="rounded-tl-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-semibold text-gray-700">
              15-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is on its way!
            </Text>
          </View>
          <Image
            className="w-24 h-24" // corrected typo
            source={require('../../assets/images/delivery2.png')}
          />
        </View>
        <View
          className="flex-row p-2 justify-between items-center rounded-full my-5 mx-2"
          style={{backgroundColor: themeColors.bgColor(0.8)}}>
          <View className="p-1 rounded-full">
            <Image
              className="h-16 w-16 rounded-full"
              source={require('../../assets/images/deliveryGuy3.jpg')}
            />
          </View>
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Baki TEKİN</Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row items-center gap-2 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Feather name="phone" size={24} color={themeColors.bgColor(1)} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-white p-2 rounded-full">
              <Feather name="x" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
