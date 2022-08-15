import React, {Component, useState} from 'react';
import {
  Box,
  Image,
  HStack,
  Heading,
  Text,
  AspectRatio,
  Stack,
  Icon,
  Pressable,
  ScrollView,
  FlatList,
  Flex,
  Spacer,
  VStack,
  Avatar,
  Button,
  Center,
  useToast,
  Input,
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import {timeStamp2String} from '../utils/parseTime';
import {Link} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {collectGroup} from '../service/groupService';
import {addToCart} from '../service/orderService';
import CountDown from 'react-native-countdown-component';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CommentCard = () => {
  const item = {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Afreen Khan',
    timeStamp: '12:47 PM',
    recentText:
      '孩子很喜欢，敏感肌也能用，已经是第二次回购了,感谢店家，物流很快',
    avatarUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };
  return (
    <Box pl="4" pr="5" py="2">
      <HStack alignItems="center" space={3}>
        <Image
          size={0.3 * w}
          source={{
            uri: item.avatarUrl,
          }}
        />
        <VStack>
          <Text
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
            bold>
            {item.fullName}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
            w={0.6 * w}>
            {item.recentText}
          </Text>
        </VStack>
        {/*<Spacer />*/}
        <Text
          fontSize="xs"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
          alignSelf="flex-start"
          ml={-0.15 * w}>
          {item.timeStamp}
        </Text>
      </HStack>
    </Box>
  );
};



export const GoodsCard = ({item, userId, groupId}) => {
  const toast = useToast();
  const callback = data => {
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

  // TODO 这里假设每次只能加入一件物品
  const onAddToCart = () => {
    const data = {
      userId: parseInt(userId),
      groupId: parseInt(groupId),
      goodsId: parseInt(item.goodsId),
      goodsNumber: 1,
    };
    // console.log('on add to cart:', data);
    addToCart(data, callback);
  };
  return (
    <Box padding={0.01 * w} borderRadius={'md'} backgroundColor={'white'}>
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
              onPress={() => onAddToCart()}>
              加入购物车
            </Button>
          </HStack>
          <Box w={0.5 * w}>
            <Text fontWeight="400" mt={0.02 * h} fontSize={'12px'}>
              商品简介：{item.goodsInfo}
            </Text>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

const DetailCard = ({props, userId, myAddressId}) => {
  // console.log('detailCard:', props);
  // console.log('detailCard userId:', userId);
  // console.log('user:', props.user.userName);
  const tmpName = props.goods[0].goodsName;
  const startTime = timeStamp2String(props.startTime);
  const [goodName, setGoodName] = React.useState(props.goods[0].goodsName);
  const [picture, setPicture] = React.useState(props.goods[0].picture);
  const [goodsInfo, setGoodsInfo] = React.useState(props.goods[0].goodsInfo);
  const [price, setPrice] = React.useState(props.goods[0].price.toFixed(2));
  const [liked, setliked] = React.useState(0);
  const [collected, setColleted] = React.useState(0);
  const toast = useToast();


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


  console.log('picture:', picture);
  console.log('goodsInfo:', goodsInfo);
  return (
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
            <HStack
              space={2}
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
                  {/*<Pressable*/}
                  {/*  // py="3"*/}
                  {/*  // flex={1}*/}
                  {/*  onPress={() => setliked(1)}>*/}
                  {/*  <Icon*/}
                  {/*    as={AntDesign}*/}
                  {/*    mb="1"*/}
                  {/*    name={liked === 0 ? 'hearto' : 'heart'}*/}
                  {/*    color={liked === 0 ? 'danger.400' : 'red.400'}*/}
                  {/*    mt="10%"*/}
                  {/*    size="lg"*/}
                  {/*  />*/}
                  {/*</Pressable>*/}
                  {/*<Icon*/}
                  {/*  as={AntDesign}*/}
                  {/*  name="message1"*/}
                  {/*  size="lg"*/}
                  {/*  color="danger.400"*/}
                  {/*  _dark={{*/}
                  {/*    color: 'danger.300',*/}
                  {/*  }}*/}
                  {/*/>*/}
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
                    <GoodsCard
                      item={item}
                      userId={userId}
                      groupId={props.groupId}
                    />
                  </Box>
                )}
                keyExtractor={item => item.goodsId}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export const styles = StyleSheet.create({
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

export default DetailCard;
