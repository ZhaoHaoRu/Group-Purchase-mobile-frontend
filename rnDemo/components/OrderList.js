import React, {useEffect, useState} from 'react';
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
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import {Link} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const OrderList = (props) => {
  const [dataSource, setDataSource] = useState([]);
  const userId = props.userId;
  useEffect(() => {
    console.log("order list userId: ", userId)
    setDataSource(props.data);
  }, [props.data]);

  // console.log('dataSource:', dataSource);
  return (
    <Box>
      <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <Box
            bg={'white'}
            borderRadius="15"
            height="auto"
            width={0.95 * width}
            mt="3"
            ml="2"
            mr="2"
            pb="2">
            <HStack>
              <Heading fontSize="15" ml="4" mt="4" mb="3" color={'muted.600'}>
                订单号: {item.orderId}
              </Heading>
              <Heading
                fontSize="15"
                ml={0.5 * width}
                mt="4"
                mb="3"
                color={'muted.600'}>
                {item.state === 1 ? <Text>已支付</Text> : <Text>已退款</Text>}
              </Heading>
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
                    uri: item.orderItems[0].picture,
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
                    <Link
                      to={{
                        screen: 'OrderDetail',
                        initial: false,
                        params: {
                          userId: userId,
                          data: item,
                          changeFresh: props.changeFresh,
                          navigation: props.navigation,
                        },
                      }}>
                      {item.groupTitle}
                    </Link>
                  </Text>
                  <Text
                    fontSize="xs"
                    color="coolGray.600"
                    paddingBottom={3}
                    width={0.5 * width}
                    numberOfLines={1}
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    团长: {item.headerName}
                  </Text>
                  <Text
                    color="danger.500"
                    _dark={{
                      color: 'danger.500',
                    }}>
                    ￥ {item.orderPrice.toFixed(2)}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Box>
        )}
        keyExtractor={item => item.orderId}
      />
    </Box>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  oneRow: {
    flex: 1,
  },
  delivery: {
    width: 0.87 * width,
    backgroundColor: 'coolGray.900',
    height: 100,
  },
});
