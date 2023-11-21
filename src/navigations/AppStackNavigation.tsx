import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductCartScreen from '../screens/CartScreen';
import {AppStackNavigationTypes} from '../types/navigations';

const Stack = createNativeStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppStackNavigationTypes.HOME_SCREEN}
        component={HomeScreen}
        options={{headerShown: false}}
        initialParams={{
          title: 'Welcome!',
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
