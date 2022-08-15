import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {
  Box,
  Text,
  HStack,
  VStack,
  Center,
  ScrollView,
  Flex,
  Icon,
  Image,
  useToast,
  AspectRatio,
  Stack,
  Heading,
  Pressable,
  Button,
  FlatList,
  Input,
} from 'native-base';
import {Link, useLinkProps} from '@react-navigation/native';
import Header from '../components/Header';
import PurchaseFooter from '../components/PurchaseFooter';
import {timeStamp2String} from '../utils/parseTime';
import {collectGroup} from '../service/groupService';
import {setAddress} from '../service/userService';
import {addToCart, getCart} from '../service/orderService';
import {secKill, getSecKillResult} from '../service/secKillService';
import {GoodsCard, styles} from '../components/DetailCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {calCountdownTime, judgeTime} from '../utils/judgeTime';
import CountDown from 'react-native-countdown-component';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const SecKillScreen = ({route, navigation}) => {
  const {props} = route.params;
  console.log('seckill props:', props);

  // let now = new Date().getTime();
  // console.log("now judgeTime:", now);
  const [timeleft, setTimeLeft] = React.useState(0);

  let k = calCountdownTime(props);
  // setTimeLeft(k);
  // setTimeLeft (calCountdownTime(props));

  const {userId} = route.params;
  // const {myAddressId} = route.params;
  const tmpName = props.goods[0].goodsName;
  const startTime = timeStamp2String(props.startTime);
  console.log('seckill startTime: ', startTime);

  const [goodName, setGoodName] = React.useState(props.goods[0].goodsName);
  const [picture, setPicture] = React.useState(props.goods[0].picture);
  const [goodsInfo, setGoodsInfo] = React.useState(props.goods[0].goodsInfo);
  const [price, setPrice] = React.useState(props.goods[0].price.toFixed(2));
  const [liked, setliked] = React.useState(0);
  const [collected, setColleted] = React.useState(0);
  const [addressId, setAddressId] = useState(route.params);
  const [receiver, setReceiver] = useState('');
  const [region, setRegion] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const toast = useToast();
  let [goodsList, setGoodsList] = useState([]);
  const [status, setStatus] = useState(1);
  // 秒杀时间界限设为1min
  const [click, setClick] = useState(0);
  let timeId = 0;

  const collectCallback = data => {
    console.log('collectCallback:', data);
    if (data.status === 0) {
      if (collected === 0) {
        setColleted(1);
        toast.show({
          description: '收藏成功！',
          variant: 'subtle',
          placement: 'top',
        });
      } else {
        setColleted(0);
        toast.show({
          description: '取消收藏成功！',
          variant: 'subtle',
          placement: 'top',
        });
      }
    } else {
      toast.show({
        description: '请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  const onCollectGroup = () => {
    const data = {groupId: parseInt(props.groupId), userId: parseInt(userId)};
    // console.log('collectGroup:', data);
    collectGroup(data, collectCallback);
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

  // 获取希望购买的商品
  const cartCallback = data => {
    if (data.status != 1) {
      toast.show({
        description: '获取购物车失败！',
        placement: 'top',
      });
    } else {
      let length = data.data.cartItems.length;
      const cartItems = data.data.cartItems;
      for (let i = 0; i < length; ++i) {
        setGoodsList(prelist => {
          return [
            ...prelist,
            {
              goodsId: cartItems[i].goodsId,
              goodsNumber: cartItems[i].number,
            },
          ];
        });
      }
    }
  };

  const addCallback = data => {
    // console.log('callback data:', data);
    if (data.status === 1) {
      toast.show({
        description: '成功加入购物车',
        variant: 'subtle',
        placement: 'top',
      });
    } else {
      toast.show({
        description: '请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  // 将商品加入购物车
  const onAddToCart = item => {
    const data = {
      userId: parseInt(userId),
      groupId: parseInt(props.groupId),
      goodsId: parseInt(item.goodsId),
      goodsNumber: 1,
    };
    // console.log('on add to cart:', data);
    addToCart(data, addCallback);
    // 将商品加入goodsList
    let i = 0;
    let length = goodsList.length;
    for (i = 0; i < length; ++i) {
      if (goodsList[i].goodsId === item.goodsId) {
        goodsList[i].goodsNumber += 1;
        break;
      }
    }
    if (i === length) {
      setGoodsList(prelist => {
        return [
          ...prelist,
          {
            goodsId: item.goodsId,
            goodsNumber: 1,
          },
        ];
      });
    }
  };

  const queryResultCallback = data => {
    setClick(click + 1);
    if (data.status === 0) {
      toast.show({
        description: data.data,
        placement: 'top',
      });
      setClick(121);
      clearInterval(timeId);
      navigation.replace('TabWrapper');
    } else if (click > 120) {
      toast.show({
        description: data.data,
        placement: 'top',
      });
    }
  };

  const purchaseCallback = data => {
    console.log('purchaseCallback', data);
    toast.show({
      description: data.data,
      placement: 'top',
    });
    if (data.status === 0) {
      const queryData = {userId: userId, groupId: props.groupId};
      console.log('click:', click);
      // 轮询，时间界限设为60s
      timeId = setInterval(() => {
        if (click > 120) {
          console.log('stop!!!!');
          clearInterval(timeId);
        }
        getSecKillResult(queryData, queryResultCallback);
      }, 500);
    }
  };

  // 执行秒杀操作
  const onPressPurchase = () => {
    const data = {
      groupId: props.groupId,
      userId: userId,
      addressId: addressId,
      goods: goodsList,
    };
    if (addressId <= 0) {
      toast.show({
        description: '请先填写或者选择地址！',
        placement: 'top',
      });
      return;
    }
    console.log('seckill data:', data);
    secKill(data, purchaseCallback);
  };

  React.useEffect(() => {
    console.log('SecKillScreen addressId:', route.params.addressId);
    if (route.params.addressId != -1) {
      console.log(route.params.address);
      setReceiver(route.params.address.receiver);
      setPhone(route.params.address.phone);
      setRegion(route.params.address.region);
      setLocation(route.params.address.location);
      setAddressId(route.params.addressId);
    }
    // 获取购物车中的内容
    const data = {groupId: props.groupId, userId: userId};
    getCart(data, cartCallback);
    setStatus(judgeTime(props));
    // updateAddressColumns();

    // setTimeLeft (calCountdownTime(props));
  }, []);

  // console.log('seckill status: ', status);
  return (
    <>
      <ScrollView mb={0.1 * h}>
        <Header />
        <Box alignItems="center">
          <Box width="100%" overflow="hidden">
            <Box width="100%">
              <ScrollView
                horizontal={true}
                height={0.4 * h}
                showsHorizontalScrollIndicator={false}>
                <AspectRatio
                  width={w}
                  height={0.4 * h}
                  justifyContent="center"
                  borderRadius="md"
                  backgroundColor="white">
                  <Image
                    source={{
                      uri: props.picture,
                    }}
                    alt="image"
                    resizeMode="cover"
                    height={0.4 * h}
                  />
                </AspectRatio>
                <AspectRatio
                  width={w}
                  height={0.4 * h}
                  justifyContent="center"
                  backgroundColor="white">
                  <Image
                    source={{
                      uri: picture,
                    }}
                    alt="image"
                    resizeMode="cover"
                    height={0.4 * h}
                  />
                </AspectRatio>
              </ScrollView>
            </Box>
            <Box backgroundColor="gray.800">
              <Stack
                paddingLeft="2%"
                paddingRight={'2%'}
                paddingY={'5%'}
                space={4}
                backgroundColor="gray.50">
                <CountDown
                  size={8}
                  until={k}
                  // digitStyle={{
                  //   backgroundColor: '#fff',
                  //   borderColor: '#f43f5e',
                  //   borderWidth: 2,
                  // }}
                  timeLabels={{d:"天",h:"時",m: "分", s:"秒"}}
                  // timeCont = {{justifyContent: "flex-start"}}
                />

                <HStack
                  space={2}
                  mt={0}
                  paddingLeft="3%"
                  w={0.95 * w}
                  justifyContent="space-between"
                  borderRadius={'md'}
                  backgroundColor="white">
                  <Stack space={1} h={0.2 * h} w={0.7 * w}>
                    <Heading size="md" ml="-1" bold>
                      {props.groupTitle}
                    </Heading>
                    {/*<Heading color="danger.600" fontWeight="light" size={'md'}>*/}
                    {/*  {goodName} ￥{price}*/}
                    {/*</Heading>*/}
                    <Text
                      fontSize="xs"
                      _light={{
                        color: 'danger.500',
                      }}
                      _dark={{
                        color: 'violet.400',
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1">
                      商家名称：{props.user.userName}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="coolGray.500"
                      _dark={{
                        color: 'warmGray.200',
                      }}
                      ml="-0.5"
                      fontWeight="400">
                      团购开始时间：{startTime}
                    </Text>
                    <Text
                      fontSize="xs"
                      _light={{
                        color: 'gray.500',
                      }}
                      _dark={{
                        color: 'violet.400',
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1">
                      团购持续时间：{props.duration}小时
                    </Text>
                  </Stack>
                  <VStack space={2} w={0.3 * w}>
                    <HStack space={4}>
                      <Pressable>
                        <Link
                          to={{
                            screen: 'QrCode',
                            initial: false,
                            params: {props: props},
                          }}>
                          <Icon
                            as={AntDesign}
                            name="export"
                            size="lg"
                            color="danger.400"
                            _dark={{
                              color: 'danger.300',
                            }}
                          />
                        </Link>
                      </Pressable>
                      <Pressable onPress={() => onCollectGroup()}>
                        <Icon
                          as={AntDesign}
                          name={collected === 0 ? 'addfolder' : 'folder1'}
                          size="lg"
                          color="danger.400"
                          _dark={{
                            color: 'danger.300',
                          }}
                        />
                      </Pressable>
                    </HStack>
                    <HStack space={1} ml={-0.15 * w}>
                      <Button
                        size="xs"
                        variant="subtle"
                        colorScheme="danger"
                        ml={0.15 * w}
                        mt={0.005 * h}
                        color="danger.900">
                        订阅团长
                      </Button>
                    </HStack>
                  </VStack>
                </HStack>

                <Box
                  paddingLeft="3%"
                  w={0.95 * w}
                  backgroundColor={'white'}
                  borderRadius={'md'}>
                  <Heading fontWeight={'bold'} fontSize={'lg'} mb={0.02 * h}>
                    团购信息
                  </Heading>
                  <Box
                    backgroundColor={'white'}
                    w={0.9 * w}
                    borderRadius={'md'}
                    // padding={0.02 * w}
                  >
                    <VStack space={0}>
                      <Text fontWeight="400">团购开始时间: {startTime}</Text>
                      <Text fontWeight="400" mt={0.02 * h}>
                        团购持续时间: {props.duration} 小时
                      </Text>
                      <Text fontWeight="400" mt={0.02 * h}>
                        配送方式: {props.delivery}
                      </Text>
                      <Text fontWeight="400" mt={0.02 * h}>
                        团购简介: {props.groupInfo}
                      </Text>
                    </VStack>
                  </Box>
                </Box>
                {/*商品列表*/}
                <Box>
                  <Heading
                    color="danger.600"
                    fontWeight={'normal'}
                    fontSize="18"
                    paddingLeft="3%">
                    商品
                  </Heading>
                  <FlatList
                    data={props.goods}
                    renderItem={({item}) => (
                      <Box mt={0.01 * h}>
                        <Box
                          padding={0.01 * w}
                          borderRadius={'md'}
                          backgroundColor={'white'}>
                          <HStack alignItems="center" space={3}>
                            <Image
                              size={0.3 * w}
                              source={{
                                uri: item.picture,
                              }}
                              alt={'img'}
                              borderRadius={'sm'}
                            />
                            <VStack>
                              <HStack>
                                <VStack>
                                  <Text
                                    color="coolGray.800"
                                    _dark={{
                                      color: 'warmGray.50',
                                    }}
                                    w={0.3 * w}
                                    bold>
                                    {item.goodsName}
                                  </Text>
                                  <Text
                                    color="danger.600"
                                    _dark={{
                                      color: 'warmGray.200',
                                    }}>
                                    ￥{item.price.toFixed(2)}
                                  </Text>
                                </VStack>
                                <Button
                                  size="xs"
                                  height={0.1 * w}
                                  variant="subtle"
                                  colorScheme="danger"
                                  mt={0.005 * h}
                                  color="danger.800"
                                  onPress={() => onAddToCart(item)}>
                                  加入购物车
                                </Button>
                              </HStack>
                              <Box w={0.5 * w}>
                                <Text
                                  fontWeight="400"
                                  mt={0.02 * h}
                                  fontSize={'12px'}>
                                  商品简介：{item.goodsInfo}
                                </Text>
                              </Box>
                            </VStack>
                          </HStack>
                        </Box>
                      </Box>
                    )}
                    keyExtractor={item => item.goodsId}
                  />
                </Box>
                <Box>
                  {/*地址信息的填写*/}
                  <VStack flex={1}>
                    <Box
                      borderRadius="5"
                      alignSelf={'center'}
                      bg="#fff"
                      pl="3%"
                      pb="1%"
                      w={0.95 * w}>
                      <HStack marginTop={0.02 * h}>
                        <Heading fontSize="md" mb="3" w={0.45 * w}>
                          配送信息
                        </Heading>
                        <Button
                          w={0.45 * w}
                          fontSize={'xs'}
                          size={'xs'}
                          mt={-0.01 * h}
                          bg="transparent">
                          <Link
                            to={{
                              screen: 'Address',
                              initial: false,
                              params: {
                                userId: userId,
                                groupId: props.groupId,
                                props: props,
                                flag: 1,
                              },
                            }}>
                            <Text fontSize={'xs'} color={'gray.400'}>
                              从历史信息中选择 >
                            </Text>
                          </Link>
                        </Button>
                      </HStack>
                      <Box>
                        <HStack>
                          <VStack width={'95%'} space={3}>
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
                              onChangeText={text => setReceiver(text)}>
                              {receiver}
                            </Input>
                            <Input
                              size="sm"
                              width="100%"
                              height={0.05 * h}
                              placeholder="收件人联系电话"
                              onChangeText={text => setPhone(text)}>
                              {phone}
                            </Input>
                            <Input
                              size="sm"
                              width="100%"
                              height={0.05 * h}
                              placeholder="收件地区"
                              onChangeText={text => setRegion(text)}>
                              {region}
                            </Input>
                            <Input
                              size="sm"
                              width="100%"
                              height={0.05 * h}
                              placeholder="收件人详细地址"
                              onChangeText={text => setLocation(text)}>
                              {location}
                            </Input>
                          </VStack>
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
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </ScrollView>
      {/*  Footer*/}
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
                params: {groupId: props.groupId, userId: userId},
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
          <Center>
            {status === 1 ? (
              <Button
                size="sm"
                ml={0.5 * w}
                colorScheme="danger"
                // ml={0.1 * w}
                // mt={0.005 * h}
                // color="danger.800"
                onPress={() => onPressPurchase()}>
                一键开团
              </Button>
            ) : (
              <Button
                size="sm"
                ml={0.5 * w}
                colorScheme="danger"
                opacity={'0.5'}>
                {status === 2 ? '团购已结束' : '团购未开始'}
              </Button>
            )}
          </Center>
        </HStack>
      </Box>
    </>
  );
};

export default SecKillScreen;
