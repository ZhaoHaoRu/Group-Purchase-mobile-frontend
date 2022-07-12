import {
  VStack,
  Heading,
  useToast,
  FlatList,
  Box,
  HStack,
  Image,
  Text,
  Button,
} from 'native-base';
import React, {Component, useState} from 'react';
import {TextInput, View, StyleSheet, Pressable, Dimensions} from 'react-native';
import {getAddress} from '../service/userService';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function ProfileAddressScreen({route, navigation}) {
  const toast = useToast();
  const {userId} = route.params;
  const [addresses, setAddresses] = useState([]);
  const addressCallback = data => {
    // console.log('addressCallback:', data);
    if (data.status === 0) {
      setAddresses(data.data);
    } else {
      toast.show({
        description: '出错了，请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };
  const onGetAddress = () => {
    const data = {userId: parseInt(userId)};
    getAddress(data, addressCallback);
  };

  React.useEffect(() => {
    onGetAddress();
  }, []);
  // console.log('delivery props:', addresses);
  return (
    <>
      {/* <View style={styles.container}> */}
      {/*<ScrollView>*/}
      <VStack w="100%" space={3} alignSelf="center">
        <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
          收货地址
        </Heading>
      </VStack>
      <Box w={'100%'}>
        <FlatList
            maxH={0.87 * h}
          data={addresses}
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
                // borderTopWidth="1"
                _dark={{
                  borderColor: 'gray.600',
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2">
                <VStack w={0.9 * w}>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    width="90%"
                    paddingTop={0.01 * h}
                    bold>
                    收货地址：{item.region} {item.location}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="coolGray.600"
                    paddingTop={3}
                    width={'80%'}
                    numberOfLines={1}
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    电话：{item.phone}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="coolGray.600"
                    paddingBottom={3}
                    width={'80%'}
                    numberOfLines={1}
                    _dark={{
                      color: 'danger.500',
                    }}>
                    收件人：{item.receiver}
                  </Text>
                </VStack>
              </Box>
            </Box>
          )}
          keyExtractor={item => item.addressId}
        />
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 0,
  },
});
