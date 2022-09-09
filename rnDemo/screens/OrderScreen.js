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
import React, {Component, useState, useEffect} from 'react';
import {TextInput, View, StyleSheet, Pressable, Dimensions} from 'react-native';
import OrderList from '../components/OrderList';
import {getOrderById} from '../service/orderService';
import {storage} from '../utils/storage';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export let fresh = 1;
export default function OrderScreen({navigation}) {
  const [dataSource, setDataSource] = useState([]);
  const [userId, setUserId] = useState(0);
  const [filterData, setFilterData] = useState([]);
  const [text, setText] = useState('');
  const [fresh, setFresh] = useState(false);

  const getOrders = data => {
    storage.load('userId', userId => {
      setUserId(userId);
      setDataSource(data.data);
      setFilterData(data.data);
    });
  };

  React.useEffect(() => {
    storage.load('userId', userId => {
      const UserId = {userId: userId};
      getOrderById(UserId, getOrders);
    });
    // console.log(1);
  }, [fresh]);

  const changeFresh = () => {
    setFresh(!fresh);
  };

  const handleChange = text => {
    console.log(text);
    let filData = [];
    if (text === '') {
      filData = dataSource;
    } else {
      dataSource.forEach(data => {
        if (data.groupTitle.indexOf(text) !== -1) {
          filData.push(data);
        } else {
          for (let i = 0; i < data.orderItems.length; ++i) {
            if (data.orderItems[i].goodsName.indexOf(text) !== -1) {
              filData.push(data);
              break;
            }
          }
        }
      });
    }
    setFilterData(filData);
  };
  return (
    <NativeBaseProvider>
      {/* <View style={styles.container}> */}
      {/*<ScrollView>*/}
      <VStack w="100%" space={3} alignSelf="center">
        <Pressable onPress={({navigation}) => navigation.navigate('Register')}>
          <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
            我的购买订单
          </Heading>
        </Pressable>
        <Input
          placeholder="搜索团名/商品名"
          width="90%"
          variant="rounded"
          // borderColor={'danger.600'}
          borderWidth="2"
          mb="2"
          py="3"
          px="1"
          fontSize="14"
          alignSelf={'center'}
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
          onChangeText={text => {
            handleChange(text);
          }}
        />
      </VStack>
      {/*<OrderList data={dataSource} />*/}
      <NativeBaseProvider>
        <Center flex={1} mb={2}>
          <OrderList
            data={filterData}
            changeFresh={changeFresh}
            navigation={navigation}
            userId={userId}
          />
        </Center>
      </NativeBaseProvider>
    </NativeBaseProvider>
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
