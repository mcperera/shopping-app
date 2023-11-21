import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CartItem = ({
  id,
  mainImage,
  brandName,
  price,
  name,
  itemCount,
  removeItem,
  totalItemPrice,
}: any) => {
  return (
    <View className="h-40 p-2 w-full flex flex-row items-center rounded-md mb-2">
      <Image
        source={{uri: mainImage}}
        className="h-32 w-[125px] object-contain"
      />
      <View className="flex flex-col pl-2">
        <View className="w-11/12">
          <Text className="mb-1 font-bold text-lg">{brandName}</Text>
          <Text className="font-semibold mb-1 text-gray-500">{name}</Text>
          <Text className="mb-2">{`Item price : ${price.currency} ${price.amount}`}</Text>
          <Text>{`Quantity : ${itemCount}`}</Text>
          <Text className="font-bold">{`Price : ${price.currency}.${totalItemPrice}`}</Text>
        </View>
        <TouchableOpacity
          className="mt-1 py-1"
          onPress={() => removeItem(id, price.amount)}>
          <Text className="text-red-400">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
