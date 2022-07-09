import React, {useState} from 'react';
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
  Divider,
  Button,
} from 'native-base';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import {getCreatedGroup, getUserById} from '../service/userService';
import {storage} from '../utils/storage';
import {timeStamp2String} from '../utils/parseTime';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const AdminEditFormScreen = ({route, navigation}) => {
  const userId = route.params.userId;
  const group = route.params.group;
  const [groupTitle, setGroupTitle] = useState(group.groupTitle);
  const [groupInfo, setGroupInfo] = useState(group.groupInfo);
  const [category, setCategory] = useState(group.category);
  const [delivery, setDelivery] = useState(group.delivery);
  const [startTime, setStartTime] = useState(timeStamp2String(group.startTime));
  const [duration, setDuration] = useState(group.duration);
  const [goodsId, setGoodsId] = useState([]);
  const [goodsInfo, setGoodsInfo] = useState([]);
  const [goodsPrice, setGoodsPrice] = useState([]);
  const toast = useToast();

  return (
    <NativeBaseProvider>
      <Center flex={1} px="1">
        <Box>
          <Box
            bg={'white'}
            width={0.9 * w}
            borderRadius="15"
            height="auto"
            mt="0"
            mb="2"
            // ml="2"
            // mr="2"
            pb="2">
            <HStack>
              <VStack space={0}>
                <Heading
                  fontSize="14"
                  ml={0.03 * w}
                  mb={0.01 * h}
                  mt={0.02 * h}>
                  团购基本信息
                </Heading>
                <Divider />
                <Input
                  variant="unstyled"
                  placeholder={'团购名称: ' + group.groupTitle}
                  fontSize="13"
                  w={0.9 * w}
                  onChangeText={text => setGroupTitle(text)}
                />
                <Input
                  variant="unstyled"
                  placeholder={'团购简介: ' + group.groupInfo}
                  fontSize="13"
                  w={0.9 * w}
                  onChangeText={text => setGroupInfo(text)}
                />
                <Input
                  variant="unstyled"
                  placeholder={'团购类型: ' + group.category}
                  fontSize="13"
                  w={0.9 * w}
                  onChangeText={text => setCategory(text)}
                />
                <Input
                  variant="unstyled"
                  placeholder={'团购开始时间: ' + startTime}
                  fontSize="13"
                  w={0.9 * w}
                  onChangeText={text => setStartTime(text)}
                />
                <Input
                  variant="unstyled"
                  placeholder={'团购持续时间: ' + group.duration + ' (小时)'}
                  fontSize="13"
                  w={0.9 * w}
                  onChangeText={text => setDuration(text)}
                />
                <Input
                  variant="unstyled"
                  placeholder={'团购配送方式: ' + group.delivery}
                  fontSize="13"
                  w={0.9 * w}
                  onChangeText={text => setDelivery(text)}
                />
                <Spacer />
                <Heading
                  fontSize="14"
                  ml={0.03 * w}
                  mb={0.01 * h}
                  mt={0.02 * h}>
                  团购商品信息
                </Heading>
                <Spacer />
              </VStack>
            </HStack>
            <FlatList
              data={group.goods}
              maxH={0.4 * h}
              renderItem={({item}) => (
                <Box
                  borderTopWidth="1"
                  _dark={{
                    borderColor: 'gray.600',
                  }}
                  borderColor="coolGray.200"
                  pl="4"
                  pr="5"
                  py="2">
                  <HStack space={3} justifyContent="flex-start">
                    <Image
                      size="75px"
                      borderRadius={5}
                      alignSelf="center"
                      source={{
                        uri: item.picture,
                      }}
                      alt={'image'}
                    />
                    <VStack w={0.55 * w}>
                      <Text
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        // flex={1}
                        width="90%"
                        bold>
                        {item.goodsName}
                      </Text>
                      {/*<Text*/}
                      {/*  fontSize="xs"*/}
                      {/*  color="coolGray.600"*/}
                      {/*  // width={'80%'}*/}
                      {/*  numberOfLines={1}*/}
                      {/*  _dark={{*/}
                      {/*    color: 'warmGray.200',*/}
                      {/*  }}>*/}
                      {/*  {item.goodsInfo}*/}
                      {/*</Text>*/}
                      <Input
                        variant="unstyled"
                        placeholder={'商品简介: ' + item.goodsInfo}
                        fontSize="xs"
                        color="coolGray.600"
                        size="2xs"
                        ml={-0.03 * w}
                        numberOfLines={1}
                        w={0.6 * w}
                      />
                      <Input
                        variant="unstyled"
                        placeholder={'商品单价: ￥' + item.price.toFixed(2)}
                        fontSize="xs"
                        textColor="danger.500"
                        size="2xs"
                        ml={-0.03 * w}
                        numberOfLines={1}
                        w={0.6 * w}
                      />
                    </VStack>
                  </HStack>
                </Box>
              )}
              keyExtractor={item => item.goodsId}
            />
          </Box>
        </Box>
        <Button size="sm" colorScheme="danger" width={0.9 * w}>
          确认修改
        </Button>
      </Center>
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

export default AdminEditFormScreen;
