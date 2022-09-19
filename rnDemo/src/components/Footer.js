import React, {Component} from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Image,
  Center,
  Pressable,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';

// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function Footer() {
  const [selected, setSelected] = React.useState(1);
  console.log('selected:', selected);
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
      <HStack alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}>
          <Center>
            <Image
              // mb="20%"
              source={
                selected === 0
                  ? require('../image/home.png')
                  : require('../image/home_click.png')
              }
              size={w * 0.07}
              alt="map"
            />
            <Text color="light.800" fontSize="12">
              首页
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}>
          <Center>
            <Image
              source={
                selected === 1
                  ? require('../image/store_click.png')
                  : require('../image/store.png')
              }
              size={w * 0.07}
              alt="map"
            />
            <Text color="light.800" fontSize="12">
              附近拼团
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}>
          <Center>
            <Image
              // mb="50%"
              source={
                selected === 2
                  ? require('../image/start.png')
                  : require('../image/start_click.png')
              }
              size={w * 0.07}
              alt="start"
            />
            <Text color="light.800" fontSize="12">
              一键开团
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}>
          <Center>
            <Image
              // mb="50%"
              source={
                selected === 3
                  ? require('../image/order.png')
                  : require('../image/order_click.png')
              }
              size={w * 0.07}
              alt="order"
            />
            <Text color="light.800" fontSize="12">
              订单
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 4 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(4)}>
          <Center>
            <Image
              // mb="50%"
              source={
                selected === 4
                  ? require('../image/person.png')
                  : require('../image/person_click.png')
              }
              size={w * 0.07}
              alt="order"
            />
            <Text color="light.800" fontSize="12">
              个人
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}
