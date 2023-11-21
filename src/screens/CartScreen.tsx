import React from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import AppContainer from '../components/layout/AppContainer';
import {useReduxDispatch, useReduxSelector} from '../store';
import {ProductType} from '../types';
import {removeCartItem} from '../store/reducer/cartSlice';
import {Icon} from 'react-native-paper';

const ProductCartScreen = ({route}: any) => {
  const cart = useReduxSelector(state => state.cart);
  const products = useReduxSelector(state => state.products);
  const dispatch = useReduxDispatch();

  const itemUiList = () => {
    const removeItem = (id: number) => {
      dispatch(removeCartItem(id));
    };

    const uiList = cart.map(cartItem => {
      const product = products.data.find(
        (stateProduct: ProductType) => stateProduct.id === cartItem.id,
      );

      if (product) {
        return (
          <View
            key={product.id}
            className="h-40 px-2 w-full flex flex-row items-center bg-gray-100 rounded-md mb-2">
            <Image source={{uri: product.mainImage}} className="h-32 w-2/4" />
            <View className="flex flex-col pl-2">
              <View className="w-8/12">
                <Text className="mb-1 font-bold text-lg">
                  {product.brandName}
                </Text>
                <Text className="font-semibold mb-1 text-gray-500">
                  {product.name}
                </Text>
                <Text className="mb-2">{`${product.price.currency}.${product.price.amount}`}</Text>
                <Text>{`Quantity : ${cartItem.itemCount}`}</Text>
              </View>
              <TouchableOpacity
                className="mt-3 py-1"
                onPress={() => removeItem(product.id)}>
                <Text className="text-red-400">Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
    });

    if (uiList.length !== 0) {
      return uiList;
    } else {
      return (
        <View className="mt-10 h-full w-full flex justify-center items-center">
          <Icon source="cart" color={'green'} size={70} />
          <Text className="text-2xl text-center">
            Your cart is empty. Let's do some shopping
          </Text>
        </View>
      );
    }
  };

  return (
    <AppContainer route={route}>
      <ScrollView className="h-full w-full">{itemUiList()}</ScrollView>
    </AppContainer>
  );
};

export default ProductCartScreen;
