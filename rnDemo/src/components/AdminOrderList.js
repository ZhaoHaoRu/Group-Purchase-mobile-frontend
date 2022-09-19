import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Image,
  Input,
  useToast,
  Button,
  Modal,
} from 'native-base';
import React, {Component, useEffect, useState} from 'react';
import {TextInput, View, StyleSheet, Pressable, Dimensions} from 'react-native';
import {deleteOneOrder, getOrderByGroupId} from '../service/orderService';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const AdminOrderList = ({route, navigation}) => {
  const toast = useToast();
  const {userId} = route.params;
  console.log('adminorderlist1', route.params);
  const {group} = route.params;
  const [orders, setOrders] = useState([]);
  const [changedOrders, setChangedOrders] = useState([]);
  const [orderId, setOrderId] = useState(0);

  const orderCallback = data => {
    console.log('orderCallback:', data);
    if (data.status === 1) {
      setOrders(data.data);
    } else {
      toast.show({
        description: '出错了，请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  const onGetOrders = () => {
    const data = {groupId: parseInt(group.groupId)};
    console.log('data: ', data);
    getOrderByGroupId(data, orderCallback);
  };

  const onGetOrderItems = () => {
    const data = {groupId: parseInt(group.groupId)};
    console.log('data: ', data);
    getOrderByGroupId(data, orderCallback);
  };

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  console.log(modalVisible);

  const handleClick = () => {
    console.log('clicked!');
    setModalVisible(!modalVisible);
  };
  const handleClick2 = () => {
    console.log('clicked2!');
    console.log('orderId', orderId);
    setModalVisible2(!modalVisible2);
  };

  const callback = data => {
    console.log(data);
    if (data.status === 1) {
      let data = orders.filter(item => item.orderId == orderId);
      let index = orders.indexOf(data[0]);
      console.log('index: ', index);
      let tmpOrders = orders;
      index !== -1 && tmpOrders.splice(index, 1);
      console.log('tmpGroup.length: ', tmpOrders.length);
      setOrders(tmpOrders);
      setChangedOrders(tmpOrders);
      toast.show({
        description: '删除成功！',
        variant: 'subtle',
        placement: 'top',
      });
    } else {
      toast.show({
        description: '出错了，请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  const cancelOrder = () => {
    setModalVisible(false);
    setModalVisible2(false);
    console.log('check cancelOrder,', orderId);
    const id = {orderId: orderId};
    deleteOneOrder(id, callback);
  };

  React.useEffect(() => {
    onGetOrders();
    console.log('check orderId in use effect', orderId);
    console.log('adminorderlist1', route.params);

  }, []);

  return (
    <NativeBaseProvider>
      <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
        团购订单
      </Heading>
      <Box w={'100%'}>
        <FlatList
            h={0.87 * h}
          data={changedOrders.length === 0 ? orders : changedOrders}
          renderItem={({item}) => (
            <Box
              bg={'white'}
              borderRadius="15"
              height="auto"
              mt="3"
              ml="2"
              mr="2"
              pb="2">
              <Box
                // borderTopWidth="1"
                _dark={{
                  borderColor: 'gray.600',
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2">
                <HStack space={3} justifyContent="space-around">
                  <VStack w={0.8 * w}>
                    <HStack>
                      <Heading fontSize="15" mt="3" color={'muted.600'}>
                        订单号: {item.orderId}
                      </Heading>
                      <Spacer />
                      {/*<Pressable onPress={handleClick}>*/}
                      {/*  <Image*/}
                      {/*    // mt="15%"*/}
                      {/*    mr="3"*/}
                      {/*    mt="3"*/}
                      {/*    alignSelf={'center'}*/}
                      {/*    opacity={0.3}*/}
                      {/*    source={require('../image/refund.png')}*/}
                      {/*    size="17px"*/}
                      {/*    alt="map"*/}
                      {/*  />*/}
                      {/*</Pressable>*/}
                      <Pressable
                        onPress={() => {
                          console.log('check orderID', item.orderId);
                          setOrderId(item.orderId);
                          handleClick2();
                        }}>
                        <Image
                          // mt="15%"
                          // mr="4"
                          mt="2.5"
                          alignSelf={'center'}
                          opacity={0.3}
                          source={require('../image/trash.png')}
                          size="21px"
                          alt="map"
                        />
                      </Pressable>
                    </HStack>
                    <HStack>
                      <Text
                        fontSize="xs"
                        color="coolGray.600"
                        paddingTop={3}
                        width={'80%'}
                        numberOfLines={1}
                        _dark={{
                          color: 'warmGray.200',
                        }}>
                        用户：{item.customerId} ({item.customerName})
                      </Text>
                      <Text
                        fontSize="xs"
                        color="danger.500"
                        paddingTop={3}
                        width={'80%'}
                        numberOfLines={1}
                        _dark={{
                          color: 'danger.500',
                        }}>
                        总共：￥{item.orderPrice}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text
                        fontSize="xs"
                        color="coolGray.600"
                        // paddingTop={3}
                        // width={'80%'}
                        numberOfLines={1}
                        _dark={{
                          color: 'warmGray.200',
                        }}>
                        商品：
                      </Text>
                      <FlatList
                        data={item.orderItems}
                        // horizontal = {true}
                        renderItem={({item}) => (
                          <Text
                            fontSize="xs"
                            color="coolGray.600"
                            // paddingBottom={3}
                            // width={'80%'}
                            // numberOfLines={1}
                            _dark={{
                              color: 'danger.500',
                            }}>
                            {item.goodsName} x{item.number}
                          </Text>
                        )}
                        keyExtractor={item => item.orderItemId}
                      />
                    </HStack>
                  </VStack>
                </HStack>
              </Box>
            </Box>
          )}
          keyExtractor={item => item.orderId}
        />
      </Box>
      <Box
        width="100%"
        height="10%"
        position="absolute"
        bottom="0"
        alignSelf="center"
        borderColor="gray.100"
        borderTopWidth="3">
        <Center flex={1} />
        <Modal isOpen={modalVisible}>
          <Modal.Content>
            <Modal.CloseButton onPress={handleClick} />
            <Modal.Header>申请退款</Modal.Header>
            <Modal.Body>
              <Text>退款会取消订单，您确定退款吗？</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button size="xs" colorScheme="danger" onPress={handleClick}>
                  取消
                </Button>
                <Button size="xs" colorScheme="danger" onPress={cancelOrder}>
                  确认退款
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <Modal isOpen={modalVisible2}>
          <Modal.Content>
            <Modal.CloseButton onPress={handleClick2} />
            <Modal.Header>申请取消订单</Modal.Header>
            <Modal.Body>
              <Text>确定取消订单并退款吗？</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button size="xs" colorScheme="danger" onPress={handleClick2}>
                  取消
                </Button>
                <Button size="xs" colorScheme="danger" onPress={cancelOrder}>
                  确认取消订单
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        {/*<HStack*/}
        {/*  alignItems="stretch"*/}
        {/*  safeAreaBottom*/}
        {/*  shadow={0}*/}
        {/*  space={3}*/}
        {/*  w={w}*/}
        {/*  padding={3}*/}
        {/*/>*/}
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  oneRow: {
    flex: 1,
  },
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
    marginBottom: 10,
  },
});

export default AdminOrderList;
