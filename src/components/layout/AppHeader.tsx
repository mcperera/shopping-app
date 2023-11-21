import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {AppStackNavigationTypes} from '../../types/navigations';
import {StackNavigation} from '../../navigations/AppStackNavigation';
import {AppHeaderComType} from '../../types';

function AppHeader({title, backButton}: AppHeaderComType) {
  const navigation = useNavigation<StackNavigation>();
  const route = useRoute();
  const goBack = () => navigation.goBack();

  const goToMyCart = () =>
    navigation.navigate(AppStackNavigationTypes.MY_CART_SCREEN);

  return (
    <Appbar.Header>
      {backButton && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content title={title} />
      {route.name !== AppStackNavigationTypes.MY_CART_SCREEN && (
        <Appbar.Action icon="cart" onPress={goToMyCart} />
      )}
    </Appbar.Header>
  );
}

export default AppHeader;
