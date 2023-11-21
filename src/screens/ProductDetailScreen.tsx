import React, {useEffect} from 'react';
import {TouchableOpacity, Image, Text, View, ScrollView} from 'react-native';
import {Icon, Snackbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AppContainer from '../components/layout/AppContainer';
import {useReduxDispatch, useReduxSelector} from '../store';
import {ProductType} from '../types';
import {AppStackNavigationTypes} from '../types/navigations';
import {addToCart} from '../store/reducer/cartSlice';

const ProductDetailScreen = ({route}: any) => {
  const navigation = useNavigation();
  const dispatch = useReduxDispatch();
  const [visible, setVisible] = React.useState(false);
  const {data} = useReduxSelector(state => state.products);
  const productId = route?.params?.productId;
  const {name, mainImage, brandName, description, price}: ProductType | any =
    data.find((p: ProductType) => p.id === productId);

  const onDismissSnackBar = () => setVisible(false);

  const handleAddToCart = (id: number) => {
    dispatch(addToCart(id));
    setVisible(true);
  };

  useEffect(() => {
    if (!route?.params?.productId) {
      navigation.navigate(AppStackNavigationTypes.HOME_SCREEN);
    }
  }, [route?.params?.productId, navigation]);

  return (
    <AppContainer route={route}>
      <ScrollView className="mx-2 px-2">
        <Image source={{uri: mainImage}} className="h-72 w-full" />
        <View className="bg-gray-100 p-4 mt-4 rounded-md">
          <Text className="mb-1 font-bold text-2xl">{name}</Text>
          <Text className="mb-2 font-semibold text-xl text-gray-400">
            {brandName}
          </Text>
          <Text className="text-lg font-bold mb-2 text-red-600">{`${price.currency}.${price.amount}`}</Text>
          <Text className="text-base">{description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => handleAddToCart(productId)}
        className=" absolute bottom-12 right-8 bg-blue-500 h-14 w-14 rounded-full flex justify-center items-center">
        <Icon source="cart" color={'white'} size={25} />
      </TouchableOpacity>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar} duration={1000}>
        Item added Successfully!
      </Snackbar>
    </AppContainer>
  );
};

export default ProductDetailScreen;
