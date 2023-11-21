import React, {useEffect} from 'react';
import {
  ScrollView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import AppContainer from '../components/layout/AppContainer';
import {useReduxDispatch, useReduxSelector} from '../store';
import {CartStateType, ProductType} from '../types';
import {removeCartItem} from '../store/reducer/cartSlice';
import {Icon} from 'react-native-paper';
import CartItem from '../components/CartItem';

const ProductCartScreen = ({route}: any) => {
  const cart = useReduxSelector(state => state.cart);
  const products = useReduxSelector(state => state.products);
  const dispatch = useReduxDispatch();

  const handleTotalCartAmout = () => {
    const initialAmount = 0;

    const totalCartValue = cart.reduce(
      (totalCartAmount: number, currentItemAmout: CartStateType) =>
        Number(totalCartAmount) + Number(currentItemAmout.totalAmount),
      initialAmount,
    );
    return totalCartValue.toFixed(2);
  };

  const itemUiList = () => {
    const removeItem = (id: number, amount: number) => {
      dispatch(removeCartItem({id, amount}));
    };

    const uiList = cart.map((cartItem: CartStateType) => {
      const product = products.data.find(
        (stateProduct: ProductType) => stateProduct.id === cartItem.id,
      );

      if (product) {
        return (
          <CartItem
            key={product.id}
            {...product}
            removeItem={removeItem}
            itemCount={cartItem.itemCount}
            totalItemPrice={cartItem.totalAmount}
          />
        );
      }
    });

    if (uiList.length !== 0) {
      return uiList;
    } else {
      return (
        <View className="h-full w-full flex justify-center items-center">
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
      <View className="absolute bottom-10 h-auto w-full flex justify-center items-center">
        {handleTotalCartAmout() > 0 && (
          <TouchableOpacity className=" h-14 w-11/12 rounded-md bg-blue-500 flex flex-row justify-around items-center">
            <Text className=" text-white text-2xl">{`£${handleTotalCartAmout()}`}</Text>
            <View className="flex flex-row justify-around items-center">
              <Text className="text-white text-2xl mr-3">Checkout</Text>
              <Icon source="arrow-right" color={'white'} size={30} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </AppContainer>
  );
};

export default ProductCartScreen;
