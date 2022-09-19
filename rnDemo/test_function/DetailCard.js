import {Icon, Pressable, NativeBaseProvider, Button} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {Dimensions} from 'react-native';

// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export const collectButton = () => {
  return (
    <NativeBaseProvider>
      <Pressable onPress={() => {}}>
        <Icon
          size="lg"
          color="danger.400"
          _dark={{
            color: 'danger.300',
          }}
        />
      </Pressable>
    </NativeBaseProvider>
  );
};

export const addToCartButton = () => {
  return (
    <NativeBaseProvider>
      <Button
        size="xs"
        height={0.1 * w}
        variant="subtle"
        colorScheme="danger"
        mt={0.005 * h}
        color="danger.800"
        onPress={() => {}}>
        加入购物车
      </Button>
    </NativeBaseProvider>
  );
};

export const BuyButton = () => {
  return (
    <NativeBaseProvider>
      <Button
        size="xs"
        height={0.1 * w}
        variant="subtle"
        colorScheme="danger"
        mt={0.005 * h}
        color="danger.800"
        onPress={() => {}}>
        一键购买
      </Button>
    </NativeBaseProvider>
  );
};
