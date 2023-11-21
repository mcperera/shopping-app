import {View} from 'react-native';
import React from 'react';
import AppHeader from './AppHeader';
import {AppContainerComType} from '../../types';

const AppContainer = ({route, children}: AppContainerComType) => {
  return (
    <View className="bg-white h-full pb-10">
      <AppHeader {...route.params} />
      {children}
    </View>
  );
};

export default AppContainer;
