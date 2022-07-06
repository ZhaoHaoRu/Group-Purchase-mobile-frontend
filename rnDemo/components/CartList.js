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
} from 'native-base';
import {StyleSheet} from 'react-native';

export default function CartList({props}) {
  console.log('cartList:', props);
  return (
    // <Center flex={1} px="1">
    <Box w={'100%'}>
      <FlatList
        data={props}
        renderItem={({item}) => (
          <Box
            bg={'white'}
            borderRadius="15"
            height="auto"
            mt="3"
            ml="2"
            mr="2"
            pb="2">
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
                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    width="90%"
                    bold>
                    {item.goodsName}
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
                    数量：{item.number}
                  </Text>
                  <Text
                    color="danger.500"
                    _dark={{
                      color: 'danger.500',
                    }}>
                    价格：￥{item.price.toFixed(2)}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Box>
    // </Center>
  );
}

// export default () => {
//   return (
//     <NativeBaseProvider>
//
//         <CartList />
//
//     </NativeBaseProvider>
//   );
// };

const styles = StyleSheet.create({
  oneRow: {
    flex: 1,
  },
});
