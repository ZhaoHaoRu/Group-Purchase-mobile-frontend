import {Icon, Pressable, NativeBaseProvider, Button} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {Dimensions} from 'react-native';

// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export const PayButton = () => {
  return (
    <NativeBaseProvider>
      <Button
        size="sm"
        // variant="outline"
        colorScheme="danger"
        width={0.9 * w}
        marginTop={0.01 * h}
        onPress={() =>
          // navigation.dispatch(StackActions.popToTop());
          {}
        }>
        {/*<Link to={{screen: 'PaymentDone', initial: false}}>*/}
        去付款
        {/*</Link>*/}
      </Button>
    </NativeBaseProvider>
  );
};
