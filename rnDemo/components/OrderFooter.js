import React, {Component} from 'react';
import {
  Box,
  Text,
  Button,
  Icon,
  HStack,
  Image,
  Center,
  Pressable,
  Modal,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
import {Link} from '@react-navigation/native';
import {deleteOneOrder} from '../service/orderService';
// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function OrderFooter(data) {
  const [modalVisible, setModalVisible] = React.useState(false);
  console.log(modalVisible);
  console.log('order footer -data-:', data.groupId);
  const handleClick = () => {
    setModalVisible(!modalVisible);
  };

  const callback = data => {
    setModalVisible(!modalVisible);
    console.log(data);
    alert(data.data);
  };

  const cancelOrder = () => {
    console.log('cancel order');
    const orderId = {orderId: data.orderId};
    deleteOneOrder(orderId, callback);
    data.changeFresh();
    data.navigation.replace('OrderScreen');
  };
  return (
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
          <Modal.CloseButton />
          <Modal.Header>申请退款</Modal.Header>
          <Modal.Body>
            <Text>退款会取消订单，您确定退款吗？</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button size="xs" colorScheme="danger" onPress={handleClick}>
                取消
              </Button>
              <Button
                size="xs"
                colorScheme="danger"
                onPress={() => {
                  cancelOrder();
                  // navigation.navigate('AdminOrderList', {
                  //   // userId: userId,
                  //   // group: item,
                  // });
                }}>
                确认退款
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <HStack
        alignItems="stretch"
        safeAreaBottom
        shadow={6}
        space={3}
        w={w}
        padding={3}>
        <Center>
          {data.state === 1 ? (
            <Button
              size="sm"
              ml={0.6 * w}
              colorScheme="danger"
              onPress={handleClick}>
              <Text>申请退款</Text>
            </Button>
          ) : (
            <Button size="sm" ml={0.6 * w} colorScheme="danger">
              <Text>已成功退款</Text>
            </Button>
          )}
        </Center>
      </HStack>
    </Box>
  );
}
