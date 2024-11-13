import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

/* eslint-disable react/react-in-jsx-scope */
const {Text, View, Image, TouchableOpacity} = require('react-native');
const {emptyCart} = require('../redux/cartSlice');
const {HOME} = require('../router');
const {themeColors} = require('../theme');
import Feather from 'react-native-vector-icons/Feather';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cancelOrder = () => {
    navigation.navigate(HOME);
    dispatch(emptyCart());
  };

  return (
    <View className="flex-1 bg-white relative">
      {/* Main Content */}
      <View className="flex-1 mb-96 justify-center items-center">
        <Image
          source={require('../../assets/images/deliveryGuy3.png')}
          className="w-2/3 h-2/3"
          resizeMode="cover"
          style={{transform: [{scaleX: -1}]}}
        />
      </View>

      {/* Bottom Information */}
      <View className="absolute bottom-10 left-0 right-0 bg-white">
        <View className="flex-row justify-between px-5 mb-4">
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
        </View>

        <View
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="mx-2 mb-5 rounded-full">
          <View className="p-2">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <View className="p-1 rounded-full">
                  <Image
                    className="h-16 w-16 rounded-full"
                    source={require('../../assets/images/ben.jpg')}
                  />
                </View>
                <View className="ml-3">
                  <Text className="text-lg font-bold text-white">
                    Baki TEKİN
                  </Text>
                  <Text className="font-semibold text-white">Your Rider</Text>
                </View>
              </View>

              <View className="flex-row items-center gap-2 mr-3">
                <TouchableOpacity
                  className="bg-white p-2 rounded-full"
                  onPress={() => console.log('Call rider')}>
                  <Feather name="phone" size={24} color={themeColors.text} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={cancelOrder}
                  className="bg-white p-2 rounded-full">
                  <Feather name="x" size={24} color="#ef4444" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
