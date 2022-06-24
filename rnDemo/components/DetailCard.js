import React, {Component} from 'react';
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
} from 'native-base';
import {Dimensions} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {Link} from '@react-navigation/native';
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
        <Avatar
          size="48px"
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

const DetailCard = () => {
  const [liked, setliked] = React.useState(0);
  const [collected, setColleted] = React.useState(0);
  const slideList = Array.from({length: 30}).map((_, i) => {
    return {
      id: i,
      image: `https://picsum.photos/1440/2842?random=${i}`,
      title: `This is the title! ${i + 1}`,
      subtitle: `This is the subtitle ${i + 1}!`,
    };
  });
  function Slide({data}) {
    console.log('data:', data);
    return (
      <AspectRatio width="100%" height={0.41 * h} justifyContent="center">
        <Image
          source={{
            uri: 'https://img.zcool.cn/community/01fad35c7cf1c7a801203d2200b488.jpg@1280w_1l_2o_100sh.jpg',
          }}
          alt="image"
          resizeMode="cover"
        />
      </AspectRatio>
    );
  }
  function Carousel() {
    return (
      <FlatList
        data={slideList}
        style={{flex: 1}}
        renderItem={({item}) => {
          return <Slide data={item.image} />;
        }}
      />
    );
  }
  return (
    <Box alignItems="center">
      <Box width="100%" overflow="hidden">
        <Box width="100%">
          <ScrollView
            horizontal={true}
            height={0.5 * h}
            showsHorizontalScrollIndicator={false}>
            <AspectRatio
              width={w}
              height={0.5 * h}
              justifyContent="center"
              borderRadius="md"
              backgroundColor="primary.500">
              <Image
                source={{
                  uri: 'https://img.zcool.cn/community/01fad35c7cf1c7a801203d2200b488.jpg@1280w_1l_2o_100sh.jpg',
                }}
                alt="image"
                resizeMode="cover"
                height={0.5 * h}
              />
            </AspectRatio>
            <AspectRatio
              width={w}
              height={0.5 * h}
              justifyContent="center"
              backgroundColor="primary.500">
              <Image
                source={{
                  uri: 'https://img.zcool.cn/community/019bf259eec49aa801216a4b75ef1b.jpg@1280w_1l_2o_100sh.jpg',
                }}
                alt="image"
                resizeMode="cover"
                height={0.5 * h}
              />
            </AspectRatio>
          </ScrollView>
        </Box>
        <Box backgroundColor="gray.800">
          <Stack p="5%" space={4} backgroundColor="gray.50">
            <HStack
              space={2}
              justifyContent="space-between"
              backgroundColor="gray.50">
              <Stack space={1} h={0.2 * h}>
                <Heading size="md" ml="-1" bold>
                  团购名称
                </Heading>
                <Heading color="danger.600" size="md" fontWeight="light">
                  ￥20.5
                </Heading>
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
                  团购商家名称
                </Text>
                <Text
                  fontSize="xs"
                  color="coolGray.500"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  ml="-0.5"
                  fontWeight="400">
                  发布时间
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
                  XXX人查看团购，XXX人跟团
                </Text>
              </Stack>
              <VStack space={2}>
                <HStack space={4}>
                  <Pressable
                    // py="3"
                    // flex={1}
                    onPress={() => setliked(1)}>
                    <Icon
                      as={AntDesign}
                      mb="1"
                      name={liked === 0 ? 'hearto' : 'heart'}
                      color={liked === 0 ? 'danger.400' : 'red.400'}
                      mt="10%"
                      size="lg"
                    />
                  </Pressable>
                  <Icon
                    as={AntDesign}
                    name="message1"
                    size="lg"
                    color="danger.400"
                    _dark={{
                      color: 'danger.300',
                    }}
                  />
                  <Pressable>
                    <Link to={{screen: 'QrCode', initial: false}}>
                      <Icon
                        as={AntDesign}
                        name="export"
                        size="lg"
                        color="danger.400"
                        _dark={{
                          color: 'danger.300',
                        }}
                        /*  onPress={({navigation}) =>
                          navigation.replace('Register')
                        }*/
                      />
                    </Link>
                  </Pressable>
                  <Pressable onPress={() => setColleted(1)}>
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
                <HStack space={1}>
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
              backgroundColor={'gray.100'}
              w={0.9 * w}
              borderBottomRadius={'xl'}>
              <Heading color="danger.600" fontWeight={'normal'} fontSize="18">
                商品简介
              </Heading>
              <Text fontWeight="400">
                一些对于商品的简介，一些对于商品的简介，一些对于商品的简介，
                一些对于商品的简介，一些对于商品的简介，一些对于商品的简介
              </Text>
            </Box>
            <Box
              backgroundColor={'gray.100'}
              w={0.9 * w}
              borderBottomRadius={'xl'}>
              <Heading color="danger.600" fontWeight={'normal'} fontSize="18">
                团购评论
              </Heading>
              <CommentCard />
              <CommentCard />
            </Box>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center" />
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailCard;
