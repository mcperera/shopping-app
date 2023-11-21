import {View, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import {AppStackNavigationTypes} from '../types/navigations';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../navigations/AppStackNavigation';
import {ProductItemComType} from '../types';

const ProductItem = ({
  id,
  name,
  brandName,
  mainImage,
  price,
}: ProductItemComType) => {
  const navigation = useNavigation<StackNavigation>();

  const navigateToProductScreen = () =>
    navigation.navigate(AppStackNavigationTypes.PRODUCT_DETAIL_SCREEN, {
      title: name,
      productId: id,
    });

  return (
    <TouchableOpacity
      onPress={navigateToProductScreen}
      className="h-72 w-1/2 p-1">
      <View className="h-full w-full bg-white flex justify-center rounded-md border-[1px] border-gray-200">
        <Image source={{uri: mainImage}} className="h-40 w-full" />
        <View className="px-2">
          <Text className="mb-1 font-bold text-lg">{brandName}</Text>
          <Text className="font-semibold mb-2 text-gray-500">{name}</Text>
          <Text className="">{`${price.currency}.${price.amount}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
