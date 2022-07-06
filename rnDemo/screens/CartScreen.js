// import { MaterialIcons } from '@expo/vector-icons';
import {
  VStack,
  Heading,
} from 'native-base';
import React, {Component, useState} from 'react';
import {TextInput, View, StyleSheet, Pressable, Dimensions} from 'react-native';
import CartList from '../components/CartList';
import {getCart} from '../service/orderService';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function CartScreen({route}) {
  const {groupId} = route.params;
  const {userId} = route.params;
  const [cart, setCart] = useState([]);
  const cartCallback = data => {
    // console.log('cartCallback:', data);
    setCart(data.data);
  };
  const onGetCart = () => {
    const data = {groupId: groupId, userId: userId};
    getCart(data, cartCallback);
  };

  React.useEffect(() => {
    onGetCart();
  }, []);
  console.log('CartScreen props:', cart);
  return (
    <>
      {/* <View style={styles.container}> */}
      {/*<ScrollView>*/}
      <VStack w="100%" space={3} alignSelf="center">
        <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
          我的购物车
        </Heading>
      </VStack>
      {/*</ScrollView>*/}
      <CartList props={cart.cartItems} />
      {/* </View> */}
      {/* <Footer/> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  input: {
    height: 45,
    padding: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 0,
  },
});
