import React from 'react';
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
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const AdminOrderList = () => {
  const data = [
    {
      id: '1',
      fullName: 'Empreinte Tradition 2011 - Cotes Du Jura',
      description: '用户: A',
      price: 'RMB 30',
      image:
        'https://www.healthifyme.com/blog/wp-content/uploads/2022/02/Red-Wine.-benefits-1.jpg',
    },
    {
      id: '2',
      fullName: 'Brunch at the Rug Restaurant',
      description: '用户: B',
      price: 'RMB 58',
      image: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
    },
    {
      id: '3',
      fullName: 'Yellow Pig Bagel & Brunch',
      description: '用户: C',
      price: 'RMB 68',
      image:
        'https://www.kingarthurbaking.com/sites/default/files/2021-10/pumpernickel-bagels-.jpg',
    },
    {
      id: '4',
      fullName: 'Yellow Pig Bagel & Brunch',
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
        团购订单
      </Heading>
      <Input
        placeholder="搜索订单号"
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
            data={data}
            renderItem={({item}) => (
              <Box
                bg={'white'}
                width={0.95 * w}
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
                    订单号: XXX
                  </Heading>
                  <Spacer />
                  <Image
                    // mt="15%"
                    mr="4"
                    // mt="4"
                    alignSelf={'center'}
                    opacity={0.3}
                    source={require('../image/refund.png')}
                    size="17px"
                    alt="map"
                  />
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
                        uri: item.image,
                      }}
                      alt={'image'}
                    />
                    <VStack>
                      <Text
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        // flex={1}
                        width="90%"
                        bold>
                        {item.fullName}
                      </Text>
                      <Text
                        fontSize="xs"
                        color="coolGray.600"
                        paddingBottom={3}
                        width={'80%'}
                        numberOfLines={1}
                        _dark={{
                          color: 'warmGray.200',
                        }}>
                        {item.description}
                      </Text>
                      <Text
                        color="danger.500"
                        _dark={{
                          color: 'danger.500',
                        }}>
                        {item.price}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </Box>
            )}
            keyExtractor={item => item.id}
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

export default AdminOrderList;
