import {View} from 'react-native';
import {Box, HStack, Image, ScrollView, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import OrderFooter from '../components/OrderFooter';
import {TextInput, StyleSheet, Pressable, Dimensions} from 'react-native';
import Header from '../components/Header';
import OrderDetailCard from '../components/OrderDetailCard';
import {LogBox} from 'react-native';
const {width, height} = Dimensions.get('window');

const OrderDetailScreen = props => {
  const [dataSource, setDataSource] = useState([]);
  const userId = props.route.params.userId;
  console.log("order detail screen -userId- :", props.route.params.data.groupId);
  useEffect(() => {
    setDataSource(props.route.params.data);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [props.route.params.data]);
  return (
    <>
      <ScrollView mb={0.1 * height}>
        <Header />
        <Box
          bg={'white'}
          borderRadius="5"
          height="auto"
          width={0.95 * width}
          mt="3"
          ml="2"
          mr="2"
          pb="2">
          <HStack width={width} height={0.15 * height}>
            <Text
              _light={{color: 'tertiary.400'}}
              fontSize="xl"
              ml={0.1 * width}
              mt={0.07 * height}>
              {dataSource.state === 1 ? (
                <Text>已支付</Text>
              ) : (
                <Text _light={{color: 'error.400'}}>已退款</Text>
              )}
            </Text>
            <Image
              source={require('../image/walletPayed.jpg')}
              size={0.1 * width}
              ml={0.5 * width}
              mt={0.06 * height}
            />
          </HStack>
        </Box>
        <OrderDetailCard data={dataSource} />
      </ScrollView>
      <OrderFooter
        orderId={dataSource.orderId}
        state={dataSource.state}
        changeFresh={props.route.params.changeFresh}
        navigation={props.route.params.navigation}
        userId={props.route.params.userId}
        groupId={props.route.params.data.groupId}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Box1: {
    width: 100,
    height: 200,
    color: '#000',
  },
});

export default OrderDetailScreen;
