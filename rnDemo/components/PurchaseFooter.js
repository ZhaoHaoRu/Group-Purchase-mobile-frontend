import React, {Component, useState} from 'react';
import {
  Box,
  Text,
  Button,
  Icon,
  HStack,
  Image,
  Center,
  Pressable,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
import {Link} from '@react-navigation/native';
import {getCart} from '../service/orderService';
import {storage} from '../utils/storage';
import {getCollectedGroups} from '../service/groupService';
// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function PurchaseFooter({groupId, userId}) {
  const defaultAddress = {
    addressId: 0,
    location: '',
    phone: '',
    receiver: '',
    region: '',
  };

  // console.log('PurchaseFooter:', groupId, userId);
  return (
    <Box
      // flex={1}
      width="100%"
      height="10%"
      position="absolute"
      bottom="0"
      alignSelf="center"
      borderColor="gray.100"
      borderTopWidth="3">
      <Center flex={1} />
      <HStack
        alignItems="stretch"
        safeAreaBottom
        shadow={6}
        space={3}
        w={w}
        padding={3}>
        <Center>
          <Link
            to={{
              screen: 'Cart',
              initial: false,
              params: {groupId: groupId, userId: userId},
            }}>
            <Icon
              as={AntDesign}
              name="shoppingcart"
              size="lg"
              color="danger.400"
              _dark={{
                color: 'danger.300',
              }}
            />
          </Link>
          <Text color="light.800" fontSize="12">
            购物车
          </Text>
        </Center>
        {/*<Center>*/}
        {/*  <Button*/}
        {/*    size="sm"*/}
        {/*    variant="subtle"*/}
        {/*    colorScheme="danger"*/}
        {/*    ml={0.21 * w}*/}
        {/*    // ml={0.1 * w}*/}
        {/*    // mt={0.005 * h}*/}
        {/*    color="danger.800">*/}
        {/*    <Link to={{screen: 'PaymentDetail', initial: false}}>*/}
        {/*      加入购物车*/}
        {/*    </Link>*/}
        {/*  </Button>*/}
        {/*</Center>*/}
        <Center>
          <Button
            size="sm"
            ml={0.5 * w}
            colorScheme="danger"
            // ml={0.1 * w}
            // mt={0.005 * h}
            // color="danger.800"
          >
            <Link
              to={{
                screen: 'PaymentDetail',
                initial: false,
                params: {
                  groupId: groupId,
                  userId: userId,
                  address: defaultAddress,
                },
              }}>
              一键开团
            </Link>
          </Button>
        </Center>
      </HStack>
    </Box>
  );
}
