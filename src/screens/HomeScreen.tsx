import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ActivityIndicator, Icon} from 'react-native-paper';
import ProductItem from '../components/ProductItem';
import AppContainer from '../components/layout/AppContainer';
import {fetchProducts} from '../store/reducer/productsSlice';
import {useReduxDispatch, useReduxSelector} from '../store';
import {ProductType} from '../types';

const HomeScreen = ({route}: any) => {
  const dispatch = useReduxDispatch();
  const {isLoading, isError, data} = useReduxSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isError) {
    return (
      <View className="h-full w-full flex justify-center items-center">
        <Icon source="exclamation" color={'red'} size={70} />
        <Text className="text-2xl">Something went wrong!</Text>
      </View>
    );
  }

  return (
    <AppContainer route={route}>
      {isLoading && (
        <View className="h-full w-full flex justify-center items-center">
          <ActivityIndicator size={'large'} />
        </View>
      )}
      <ScrollView>
        <View className="flex flex-1 flex-row flex-wrap items-start p-2">
          {!isLoading &&
            data?.length > 0 &&
            data.map((product: ProductType) => (
              <ProductItem key={product.id} {...product} />
            ))}
        </View>
      </ScrollView>
    </AppContainer>
  );
};

export default HomeScreen;
