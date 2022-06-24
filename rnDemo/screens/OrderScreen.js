// import { MaterialIcons } from '@expo/vector-icons';
import {
  Container,
  NativeBaseProvider,
  Content,
  List,
  ListItem,
  VStack,
  Center,
  Box,
  Heading,
  ScrollView,
  Spacer,
  Icon,
  HStack,
  SwipeListView,
  Input,
  Avatar,
  SearchIcon,
  AddIcon,
  Image,
  Divider,
} from 'native-base';
import React, {Component, useState} from 'react';
import {TextInput, View, StyleSheet, Pressable, Dimensions} from 'react-native';
import Footer from '../components/Footer';
import OrderList from '../components/OrderList';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function OrderScreen() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <VStack w="100%" space={3} alignSelf="center">
          <Pressable
            onPress={({navigation}) => navigation.navigate('Register')}>
            <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
              我的购买订单
            </Heading>
          </Pressable>
          <Input
            placeholder="Search People & Places"
            width="90%"
            height={10}
            borderRadius="4"
            py="3"
            px="1"
            fontSize="14"
            alignSelf={'center'}
            bg="light.100"
            style={styles.input}
            InputLeftElement={
              <Image
                ml="3"
                opacity={0.3}
                source={require('../image/search.png')}
                size="18px"
                alt="arrowR"
              />
            }
          />
          <Divider
            bg="darkText"
            thickness="1.5"
            alignSelf={'center'}
            mt="-1"
            mb="0"
            width={w}
            opacity={0.1}
            orientation="horizontal"
          />
        </VStack>
        <OrderList />
      </View>
      {/* <Footer/> */}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    padding: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 0,
  },
});
