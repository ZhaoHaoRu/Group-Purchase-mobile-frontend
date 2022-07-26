import {View, StyleSheet, Dimensions} from 'react-native';
import React, {Component, useState} from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  ScrollView,
  Stack,
  VStack,
  Text,
  Input,
  FormControl,
  Spacer,
  Divider,
  useToast,
} from 'native-base';
import {getCart} from '../service/orderService';
import {setAddress} from '../service/userService';
import {addOrder} from '../service/orderService';
import {timeStamp2String} from '../utils/parseTime';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const PaymentDetailsScreen = ({route, navigation}) => {
  console.log('payment details screen -route.params-', route.params);
  const {groupId} = route.params;
  const {userId} = route.params;
  const {address} = route.params;
  console.log('check receiver', address.receiver);
  // const {receiver} = route.params;
  console.log('address detail: ', address);
  let totalPrice = 0;
  const [addressId, setAddressId] = useState(0);
  const [receiver, setReceiver] = useState('我');
  const [region, setRegion] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const toast = useToast();

  const [cart, setCart] = useState([]);

  const cartCallback = data => {
    // console.log('payment cartCallback:', data);
    setCart(data.data);
    totalPrice = parseFloat(cart.totalPrice);
  };
  //获取本团购购物车中的内容
  const onGetCart = () => {
    const data = {groupId: parseInt(groupId), userId: parseInt(userId)};
    // console.log('payment data:', data);
    getCart(data, cartCallback);
  };

  const addressCallback = data => {
    if (data.status === 0) {
      toast.show({
        description: data.message,
        variant: 'subtle',
        placement: 'top',
      });
      setAddressId(parseInt(data.data));
      console.log('addressID:', addressId);
    } else {
      toast.show({
        description: '保存失败，请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  const buyCallback = data => {
    if (data.status === 1) {
      toast.show({
        description: data.data,
        variant: 'subtle',
        placement: 'top',
      });
      navigation.replace('PaymentDone');
    } else {
      toast.show({
        description: '失败，请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  // 保存对于地址信息的修改
  const onPressSave = () => {
    const data = {
      userId: parseInt(userId),
      receiver: receiver,
      region: region,
      location: location,
      phone: phone,
    };
    console.log('onPressSave data:', data);
    setAddress(data, addressCallback);
  };

  // 用户进行购买
  const onPressBuy = () => {
    let timestamp = new Date().getTime();
    const time = timeStamp2String(timestamp);
    if (address.addressId != 0) {
      setAddressId(address.addressId);
    }
    let data = {
      userId: parseInt(userId),
      groupId: parseInt(groupId),
      addressId: addressId,
      time: time,
    };
    if (address.addressId != 0) {
      data.addressId = address.addressId;
    }
    console.log('onPressBuy data:', data);
    if (address.addressId === 0 && addressId === 0) {
      toast.show({
        description: '新地址还没有保存编辑，保存后重试！',
        variant: 'subtle',
        placement: 'top',
      });
    } else {
      addOrder(data, buyCallback);
    }
  };

  const updateAddressColumns = () => {
    setReceiver(address.receiver);
    setPhone(address.phone);
    setRegion(address.region);
    setLocation(address.location);
  };

  React.useEffect(() => {
    onGetCart();
    // updateAddressColumns();
    setReceiver(address.receiver);
    setPhone(address.phone);
    setRegion(address.region);
    setLocation(address.location);
  }, []);
  // console.log('paymentScreen props:', cart.totalPrice);
  return (
    <>
      <Button size="30px" m="3" bg="transparent">
        <Image
          mb="5%"
          opacity={0.4}
          source={require('../image/arrowL.png')}
          size="30px"
          alt="arrowL"
        />
      </Button>
      <ScrollView ml="1" mr="1" flex="1">
        <VStack flex={1} ml="1">
          <Box
            borderRadius="5"
            alignSelf={'center'}
            bg="#fff"
            pl="3"
            pt="3"
            pb="1">
            <HStack>
              <Heading fontSize="md" mb="3" w={0.4 * w}>
                配送信息
              </Heading>
              <Button
                w={0.45 * w}
                fontSize={'xs'}
                size={'xs'}
                mt={-0.01 * h}
                bg="transparent"
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate('Address', {
                    userId: userId,
                    groupId: groupId,
                    flag: 2,
                  });
                }}>
                <Text fontSize={'xs'} color={'gray.400'}>
                  从历史信息中选择 >
                </Text>
              </Button>
            </HStack>
            <Box>
              <HStack>
                <VStack width={'90%'} space={3}>
                  {/*<Text*/}
                  {/*  fontSize="xs"*/}
                  {/*  _dark={{color: 'warmGray.50'}}*/}
                  {/*  color="coolGray.800"*/}
                  {/*  width="80%">*/}
                  {/*  /!* {item.address} *!/*/}
                  {/*  123, Transfer Road, California*/}
                  {/*</Text>*/}
                  <Input
                    size="sm"
                    width="100%"
                    height={0.05 * h}
                    placeholder="收件人"
                    onChangeText={text => setReceiver(text)}
                  >
                    {receiver}
                    </Input>
                  <Input
                    size="sm"
                    width="100%"
                    height={0.05 * h}
                    placeholder="收件人联系电话"
                    onChangeText={text => setPhone(text)}
                  >
                    {phone}
                    </Input>
                  <Input
                    size="sm"
                    width="100%"
                    height={0.05 * h}
                    placeholder="收件地区"
                    onChangeText={text => setRegion(text)}
                  >
                    {region}
                  </Input>
                  <Input
                    size="sm"
                    width="100%"
                    height={0.05 * h}
                    placeholder="收件人详细地址"
                    onChangeText={text => setLocation(text)}
                  >
                    {location}
                  </Input>
                </VStack>
                {/* <Spacer /> */}
                {/*<Button alignSelf="center" style={styles.changeButton} mt="-2">*/}
                {/*  <Text color={'danger.700'} fontSize="12">*/}
                {/*    编辑*/}
                {/*  </Text>*/}
                {/*</Button>*/}
              </HStack>
            </Box>
            <Box>
              <HStack>
                <VStack width={'72%'}>
                  <Text
                    fontSize="xs"
                    // alignContent={}
                    _dark={{color: 'warmGray.50'}}
                    color="coolGray.800"
                    //   flex={1}
                    width="50%"
                  />
                </VStack>
                {/* <Spacer /> */}
                <Button
                  style={styles.changeButton}
                  mt="-2"
                  onPress={() => onPressSave()}>
                  <Text color={'danger.700'} fontSize="12">
                    保存编辑
                  </Text>
                </Button>
              </HStack>
            </Box>
          </Box>
        </VStack>
        <Box
          borderRadius="5"
          alignSelf={'center'}
          bg="#fff"
          pl="3"
          // pt="3"
          pb="1"
          marginTop={0.02 * h}>
          <VStack>
            <HStack ml={4}>
              <FormControl.Label
                alignSelf={'center'}
                _text={{
                  bold: true,
                }}>
                配送费
              </FormControl.Label>
              <Spacer />
              <Text
                color={'danger.600'}
                fontSize={'xs'}
                mr="3"
                mt="4"
                height="9">
                {' '}
                ￥ 3.00
              </Text>
            </HStack>
            <Divider
              bg="darkText"
              thickness="1.5"
              alignSelf={'center'}
              width={0.9 * w}
              opacity={0.05}
              orientation="horizontal"
            />
            <HStack ml={4}>
              <FormControl.Label
                alignSelf={'center'}
                _text={{
                  bold: true,
                }}>
                订单总金额
              </FormControl.Label>
              <Spacer />
              <Text
                color={'danger.600'}
                fontSize={'xs'}
                mr="3"
                mt="4"
                height="9">
                {' '}
                ￥ {parseFloat(cart.totalPrice).toFixed(2)}
              </Text>
            </HStack>
            <Divider
              bg="darkText"
              thickness="1.5"
              alignSelf={'center'}
              mt="0"
              mb="0"
              width={0.9 * w}
              opacity={0.3}
              orientation="horizontal"
            />
            <HStack mt={1} mb={1}>
              <Heading fontSize="14" ml="4" mt="3" mb="1" opacity={0.6}>
                总共
              </Heading>
              <Spacer />
              <Text
                color={'danger.600'}
                fontSize={'xs'}
                mr="3"
                mt="2"
                alignSelf={'center'}>
                {' '}
                ￥ {(parseFloat(cart.totalPrice) + 3).toFixed(2)}
              </Text>
            </HStack>
          </VStack>
        </Box>
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{
            base: 'column',
            md: 'row',
          }}
          space={2}
          mx={{
            base: 'auto',
            md: '0',
          }}>
          <Button
            size="sm"
            // variant="outline"
            colorScheme="danger"
            width={0.9 * w}
            marginTop={0.01 * h}
            onPress={() =>
              // navigation.dispatch(StackActions.popToTop());
              onPressBuy()
            }>
            {/*<Link to={{screen: 'PaymentDone', initial: false}}>*/}
            去付款
            {/*</Link>*/}
          </Button>
        </Stack>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  changeButton: {
    backgroundColor: 'transparent',
  },
});
export default PaymentDetailsScreen;
