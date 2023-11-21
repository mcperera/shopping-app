import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductCartScreen from '../screens/CartScreen';
import {AppStackNavigationTypes} from '../types/navigations';
import {NavigationProp} from '@react-navigation/native';

export type ScreenNames = [
  AppStackNavigationTypes.HOME_SCREEN,
  AppStackNavigationTypes.PRODUCT_DETAIL_SCREEN,
  AppStackNavigationTypes.MY_CART_SCREEN,
];
export type RootStackParamList = Record<ScreenNames[number], any>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppStackNavigationTypes.HOME_SCREEN}
        component={HomeScreen}
        options={{headerShown: false}}
        initialParams={{
          title: 'Welcome!',
          backButton: false,
        }}
      />
      <Stack.Screen
        name={AppStackNavigationTypes.PRODUCT_DETAIL_SCREEN}
        component={ProductDetailScreen}
        options={{headerShown: false}}
        initialParams={{
          title: 'Product Details',
          backButton: true,
        }}
      />
      <Stack.Screen
        name={AppStackNavigationTypes.MY_CART_SCREEN}
        component={ProductCartScreen}
        options={{headerShown: false}}
        initialParams={{
          title: 'My Cart',
          backButton: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
