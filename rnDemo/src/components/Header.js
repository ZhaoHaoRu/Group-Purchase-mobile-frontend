import React from 'react';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Pressable,
} from 'native-base';
// import {MaterialIcons} from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

function AppBar({props}) {
  // console.log("props:", props);
  return (
    <>
      <StatusBar bg="danger.300" barStyle="light-content" />
      <Box safeAreaTop bg="danger.300" />
      <HStack
        bg="danger.300"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          {/*<Pressable onPress={() => navigation.dispatch(popAction)}>*/}
          {/*  <Icon as={AntDesign} name={'left'} size="lg" color="white" />*/}
          {/*</Pressable>*/}
          <Text color="white" fontSize="18" ml={0.03 * w}>
            交我团
          </Text>
          <Text
            color="white"
            fontSize="14"
            italic
            fontWeight="thin"
            ml={0.01 * w}>
            有温度的社区团购
          </Text>
        </HStack>
        <HStack>
          {/*<Icon*/}
          {/*  as={AntDesign}*/}
          {/*  mb="1"*/}
          {/*  name={'closecircleo'}*/}
          {/*  mt="20%"*/}
          {/*  size="lg"*/}
          {/*  color="white"*/}
          {/*/>*/}
          {/*<IconButton*/}
          {/*  icon={*/}
          {/*    <Icon size="sm" as={MaterialIcons} name="menu" color="white" />*/}
          {/*  }*/}
          {/*/>*/}
        </HStack>
      </HStack>
    </>
  );
}

function Header(props) {
  console.log("header props:", props);
  return (
    <Center>
      <AppBar />
    </Center>
  );
}

export default Header;
