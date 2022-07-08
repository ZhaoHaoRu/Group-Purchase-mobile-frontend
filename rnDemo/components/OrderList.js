// import React from 'react';
// import {
//   Box,
//   FlatList,
//   Heading,
//   Avatar,
//   HStack,
//   VStack,
//   Text,
//   Spacer,
//   Center,
//   NativeBaseProvider,
//   Image,
// } from 'native-base';
// import {StyleSheet} from 'react-native';
//
// const OrderList = () => {
//   const data = [
//     {
//       id: '1',
//       fullName: 'Empreinte Tradition 2011 - Cotes Du Jura',
//       description: 'Volume: 500ml',
//       price: 'RMB 30',
//       image:
//         'https://www.healthifyme.com/blog/wp-content/uploads/2022/02/Red-Wine.-benefits-1.jpg',
//     },
//     {
//       id: '2',
//       fullName: 'Brunch at the Rug Restaurant',
//       description: 'Set menu for two on weekdays only',
//       price: 'RMB 58',
//       image: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
//     },
//     {
//       id: '3',
//       fullName: 'Yellow Pig Bagel & Brunch',
//       description: 'Set menu for two on weekdays only',
//       price: 'RMB 68',
//       image:
//         'https://www.kingarthurbaking.com/sites/default/files/2021-10/pumpernickel-bagels-.jpg',
//     },
//     {
//       id: '4',
//       fullName: 'Yellow Pig Bagel & Brunch',
//       description: 'Set menu for two on weekdays only',
//       price: 'RMB 68',
//       image:
//         'https://www.kingarthurbaking.com/sites/default/files/2021-10/pumpernickel-bagels-.jpg',
//     },
//     {
//       id: '5',
//       fullName: 'Yellow Pig Bagel & Brunch',
//       description: 'Set menu for two on weekdays only',
//       price: 'RMB 68',
//       image:
//         'https://www.kingarthurbaking.com/sites/default/files/2021-10/pumpernickel-bagels-.jpg',
//     },
//     {
//       id: '6',
//       fullName: 'Yellow Pig Bagel & Brunch',
//       description: 'Set menu for two on weekdays only',
//       price: 'RMB 68',
//       image:
//         'https://www.kingarthurbaking.com/sites/default/files/2021-10/pumpernickel-bagels-.jpg',
//     },
//   ];
//   return (
//     <Box
//       // bg={'white'}
//       // borderRadius="15"
//       // height="auto"
//       // mt="3"
//       // ml="2"
//       // mr="2"
//       // pb="2"
//     >
//       <FlatList
//         data={data}
//         renderItem={({item}) => (
//           <Box
//               bg={'white'}
//               borderRadius="15"
//               height="auto"
//               mt="3"
//               ml="2"
//               mr="2"
//               pb="2">
//             <Heading fontSize="15" ml="4" mt="4" mb="3" color={'muted.600'}>
//               订单号: XXX
//             </Heading>
//             <Box
//               borderTopWidth="1"
//               _dark={{
//                 borderColor: 'gray.600',
//               }}
//               borderColor="coolGray.200"
//               pl="4"
//               pr="5"
//               py="2">
//             {/*<Box*/}
//             {/*    bg={'white'}*/}
//             {/*    borderRadius="15"*/}
//             {/*    height="auto"*/}
//             {/*    mt="3"*/}
//             {/*    ml="2"*/}
//             {/*    mr="2"*/}
//             {/*    pb="2">*/}
//               <HStack space={3} justifyContent="flex-start">
//                 <Image
//                   size="75px"
//                   borderRadius={5}
//                   alignSelf="center"
//                   source={{
//                     uri: item.image,
//                   }}
//                   alt={'image'}
//                 />
//                 <VStack>
//                   <Text
//                     _dark={{
//                       color: 'warmGray.50',
//                     }}
//                     color="coolGray.800"
//                     // flex={1}
//                     width="90%"
//                     bold>
//                     {item.fullName}
//                   </Text>
//                   <Text
//                     fontSize="xs"
//                     color="coolGray.600"
//                     paddingBottom={3}
//                     width={'80%'}
//                     numberOfLines={1}
//                     _dark={{
//                       color: 'warmGray.200',
//                     }}>
//                     {item.description}
//                   </Text>
//                   <Text
//                     color="danger.500"
//                     _dark={{
//                       color: 'danger.500',
//                     }}>
//                     {item.price}
//                   </Text>
//                 </VStack>
//               </HStack>
//             </Box>
//           </Box>
//         )}
//         keyExtractor={item => item.id}
//       />
//     </Box>
//   );
// };
//
// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="1">
//         <OrderList />
//       </Center>
//     </NativeBaseProvider>
//   );
// };
//
// const styles = StyleSheet.create({
//   oneRow: {
//     flex: 1,
//   },
// });

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

const OrderList = props => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setDataSource(props.data);
  }, [props.data]);

  const data = [
    {
      id: '1',
      fullName: 'Empreinte Tradition 2011 - Cotes Du Jura',
      description: 'Volume: 500ml',
      price: 'RMB 30',
      image:
        'https://www.healthifyme.com/blog/wp-content/uploads/2022/02/Red-Wine.-benefits-1.jpg',
    },
    {
      id: '2',
      fullName: 'Brunch at the Rug Restaurant',
      description: 'Set menu for two on weekdays only',
      price: 'RMB 58',
      image: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
    },
    {
      id: '3',
      fullName: 'Yellow Pig Bagel & Brunch',
      description: 'Set menu for two on weekdays only',
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
  console.log('dataSource:', dataSource);
  return (
    <Box
    // bg={'white'}
    // borderRadius="15"
    // height="auto"
    // mt="3"
    // ml="2"
    // mr="2"
    // pb="2"
    >
      {/*<FlatList*/}
      {/*  data={dataSource}*/}
      {/*  renderItem={renderData}*/}
      {/*  keyExtractor={item => item.orderId}*/}
      {/*/>*/}
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
        keyExtractor={item => item.groupId}
      />
    </Box>
  );
};

export default OrderList;
// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="1">
//         <OrderList />
//       </Center>
//     </NativeBaseProvider>
//   );
// };

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
