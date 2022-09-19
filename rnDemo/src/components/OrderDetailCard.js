import React, {useEffect, useState} from 'react';
import {Box, Heading, HStack, Icon, Image, Text, VStack} from 'native-base';
import {Dimensions, FlatList} from 'react-native';

const {width, height} = Dimensions.get('window');

const OrderDetailCard = data => {
  // const dataSource = data.data;
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setDataSource(data.data);
  }, [data.data]);
  const orderItems = dataSource.orderItems;
  const timestampToTime = timestamp => {
    var date = new Date(timestamp);
    var Y = date.getFullYear() + '-';
    var M =
      (date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
  };

  return (
    <VStack>
      <Box
        bg={'white'}
        borderRadius="5"
        height="auto"
        width={0.95 * width}
        mt="3"
        ml="2"
        mr="2"
        pb="2">
        <Heading
          fontSize="15"
          ml={0.05 * width}
          mt="4"
          mb="3"
          color={'muted.600'}>
          {dataSource.delivery}
        </Heading>
        <Box
          borderTopWidth="1"
          _dark={{
            borderColor: 'gray.600',
          }}
          borderColor="coolGray.200"
          pl="4"
          pr="5"
          py="2"
        />
        <VStack>
          <HStack>
            <Text ml={0.05 * width}>收货人：{dataSource.receiver}</Text>
            <Text ml={0.05 * width}>联系电话：{dataSource.phone}</Text>
          </HStack>
          <HStack>
            <Text ml={0.05 * width} mt="2">
              收货地址：{dataSource.region} {dataSource.location}
            </Text>
          </HStack>
        </VStack>
      </Box>
      <Box
        bg={'white'}
        borderRadius="5"
        height="auto"
        width={0.95 * width}
        mt="3"
        ml="2"
        mr="2"
        pb="2">
        <Heading
          fontSize="15"
          ml={0.05 * width}
          mt="4"
          mb="3"
          color={'muted.600'}>
          {dataSource.groupTitle}
        </Heading>
        <Box
          borderTopWidth="1"
          _dark={{
            borderColor: 'gray.600',
          }}
          borderColor="coolGray.200"
          pl="4"
          py="2">
          <FlatList
            data={orderItems}
            renderItem={({item}) => (
              <Box
                borderTopWidth="0"
                _dark={{
                  borderColor: 'gray.600',
                }}
                borderColor="coolGray.200"
                pl="2"
                pr="5"
                py="2">
                <HStack>
                  <Image
                    size={0.25 * width}
                    borderRadius={5}
                    alignSelf="center"
                    source={{
                      uri: item.picture,
                    }}
                    alt={'image'}
                  />
                  <VStack >
                    <Text
                      ml={0.02 * width}
                      bord
                      fontSize="sm"
                      width={0.4 * width}>
                      商品名：{item.goodsName}
                    </Text>
                    <Text
                      ml={0.02 * width}
                      fontSize="sm"
                      numberOfLines={1}
                      mt={0.01 * height}
                      width={0.4 * width}>
                      简介：{item.goodsInfo}
                    </Text>
                    <Text
                      ml={0.02 * width}
                      fontSize="sm"
                      mt={0.01 * height}
                      width={0.4 * width}>
                      共{item.number}件
                    </Text>
                  </VStack>
                  <Text
                      ml={0.05 * width}
                  >
                    ￥{parseFloat(item.price * item.number).toFixed(2)}
                  </Text>
                </HStack>
              </Box>
            )}
          />
          <HStack>
            <Box width={0.5 * width}>
              <Text ml={0.02 * width}>商品总金额:</Text>
            </Box>
            <Text ml={0.25 * width}>￥{parseFloat(dataSource.orderPrice).toFixed(2)}</Text>
          </HStack>
        </Box>
        <Box
          borderTopWidth="1"
          _dark={{
            borderColor: 'gray.600',
          }}
          borderColor="coolGray.200"
          pl="4"
          pr="3"
          py="2">
          <HStack justifyContent={"space-between"}>
            <Box width={0.5 * width}>
            <Text ml={0.02 * width} fontSize="sm" mt="1">
              实际支付：
            </Text>
            </Box>
            <Text
              fontSize="lg"
              mt="0.8"
              // ml={0.21 * width}
              color="danger.500"
              _dark={{
                color: 'danger.500',
              }}>
              ￥{parseFloat(dataSource.orderPrice).toFixed(2)}
            </Text>
          </HStack>
        </Box>
      </Box>
      <Box
        bg={'white'}
        borderRadius="5"
        height="auto"
        width={0.95 * width}
        mt="3"
        ml="2"
        mr="2"
        pb="2">
        <Heading
          fontSize="15"
          ml={0.05 * width}
          mt="4"
          mb="3"
          color={'muted.600'}>
          订单信息
        </Heading>
        <Box
          borderTopWidth="1"
          _dark={{
            borderColor: 'gray.600',
          }}
          borderColor="coolGray.200"
          pl="4"
          pr="5"
          py="2"
        />
        <VStack>
          <Text ml={0.05 * width}>订单号：{dataSource.orderId}</Text>
          <Text ml={0.05 * width} mt="2">
            下单时间：{timestampToTime(dataSource.time)}
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default OrderDetailCard;
