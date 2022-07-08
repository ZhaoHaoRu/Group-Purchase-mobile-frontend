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
} from 'native-base';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import {getCreatedGroup, getUserById} from '../service/userService';
import {storage} from '../utils/storage';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const AdminGroupList = ({route, navigation}) => {
  const userId = route.params.userId;
  const [groups, setGroups] = useState([]);
  const toast = useToast();
  const callback = data => {
    console.log('user data:', data);
    if (data.status === 0) {
      setGroups(data.data);
      // console.log('admin groups :', groups);
      console.log('item goods:', groups[0].goods[0]);
    } else {
      toast.show({
        description: '出错了，请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  // 获取当前用户
  React.useEffect(() => {
    console.log('userId::::::', userId);
    const request = {userId: parseInt(userId)};
    getCreatedGroup(request, callback);
  }, []);

  const data = [
    {
      id: '1',
      fullName: '团购A',
      description: 'Volume: 500ml',
      price: 'RMB 30',
      image:
        'https://www.healthifyme.com/blog/wp-content/uploads/2022/02/Red-Wine.-benefits-1.jpg',
    },
    {
      id: '2',
      fullName: '团购B',
      description: 'Volume: 500ml',
      price: 'RMB 58',
      image: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
    },
    {
      id: '3',
      fullName: '团购C',
      description: 'Set menu for two on weekdays only',
      price: 'RMB 68',
      image:
        'https://www.kingarthurbaking.com/sites/default/files/2021-10/pumpernickel-bagels-.jpg',
    },
    {
      id: '4',
      fullName: '团购D',
      description: 'Set menu for two on weekdays only',
      price: 'RMB 68',
      image:
        'https://www.kingarthurbaking.com/sites/default/files/2021-10/pumpernickel-bagels-.jpg',
    },
    {
      id: '5',
      fullName: 'Yellow Pig Bagel & Brunch',
      description: 'Set menu for two on weekdays only',
      price: 'RMB 68',
      image:
        'https://www.kingarthurbaking.com/sites/default/files/2021-10/pumpernickel-bagels-.jpg',
    },
    {
      id: '6',
      fullName: 'Yellow Pig Bagel & Brunch',
      description: 'Set menu for two on weekdays only',
      price: 'RMB 68',
      image:
        'https://www.kingarthurbaking.com/sites/default/files/2021-10/pumpernickel-bagels-.jpg',
    },
  ];

  return (
    <NativeBaseProvider>
      <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
        团购管理
      </Heading>
      <Input
        placeholder="搜索团购"
        width="90%"
        variant="rounded"
        //   borderColor={'danger.600'}
        borderWidth="2"
        mb={3}
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
      />
      <Center flex={1} px="1">
        <Box>
          <FlatList
            data={groups}
            renderItem={({item}) => (
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
                  <Heading
                    fontSize="15"
                    ml="4"
                    mt="4"
                    mb="3"
                    color={'muted.600'}>
                    团购: {item.groupTitle}
                  </Heading>
                  <Spacer />
                  <Pressable
                    size="auto"
                    // m="3"
                    alignSelf={'center'}
                    bg="transparent"
                    onPress={() => {
                      navigation.replace('EditGroupDetails');
                    }}>
                    <Image
                      // mt="15%"
                      mr="4"
                      // mt="4"
                      alignSelf={'center'}
                      opacity={0.3}
                      source={require('../image/edit.png')}
                      size="17px"
                      alt="map"
                    />
                  </Pressable>
                  <Image
                    // mt="15%"
                    mr="4"
                    // mt="4"
                    alignSelf={'center'}
                    opacity={0.3}
                    source={require('../image/trash.png')}
                    size="20px"
                    alt="map"
                  />
                </HStack>
                <FlatList
                  data={item.goods}
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
                          <Text
                            fontSize="xs"
                            color="coolGray.600"
                            paddingBottom={3}
                            // width={'80%'}
                            numberOfLines={1}
                            _dark={{
                              color: 'warmGray.200',
                            }}>
                            {item.goodsInfo}
                          </Text>
                          <Text
                            color="danger.500"
                            _dark={{
                              color: 'danger.500',
                            }}>
                            ￥{item.price.toFixed(2)}
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                  )}
                  keyExtractor={item => item.goodsId}
                />
              </Box>
            )}
            keyExtractor={item => item.groupId}
          />
        </Box>
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

export default AdminGroupList;
