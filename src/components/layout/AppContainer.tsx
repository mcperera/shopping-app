import {View} from 'react-native';
import React from 'react';
import AppHeader from './AppHeader';

const AppContainer = ({route, children}: any) => {
  return (
    <View className="bg-white h-full pb-10">
      <AppHeader {...route.params} />
      {children}
    </View>
  );
};

export default AppContainer;
