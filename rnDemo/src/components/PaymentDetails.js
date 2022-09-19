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
  Button,
  Column,
  Select,
  CheckIcon,
  View,
  Divider,
  FormControl,
  Input,
} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const PaymentDetails = () => {
  let [service, setService] = React.useState('');

  return (
    <View>
      <Box
        borderRadius="5"
        bg="#fff"
        pt="3"
        pb="1"
        width={0.9 * w}
        alignSelf={'center'}
        mt="5"
        mb="5">
        <VStack flex={1} ml="3">
          <Heading fontSize="md">付款</Heading>
          <Select
            selectedValue={service}
            width="100%"
            placeholder=" 选择支付方式"
            mx="-2"
            height={'10'}
            borderColor={'transparent'}
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="银行卡" value="creditcard" />
            <Select.Item label="支付宝" value="zhifubao" />
          </Select>
        </VStack>
      </Box>
      <Box
        bg={'#fff'}
        borderRadius={15}
        height={'auto'}
        width="80%"
        pb="2"
        ml="2"
        mr="2"
        mb="2"
        mt="2">
        <VStack>
          <HStack ml={4}>
            <FormControl.Label
              alignSelf={'center'}
              _text={{
                bold: true,
              }}>
              配送费
            </FormControl.Label>
            <Spacer />
            <Text color={'danger.600'} fontSize={'xs'} mr="3" mt="4" height="9">
              {' '}
              RMB 20.45
            </Text>
          </HStack>
          <Divider
            bg="darkText"
            thickness="1.5"
            alignSelf={'center'}
            width={0.9 * w}
            opacity={0.05}
            orientation="horizontal"
          />
          <HStack ml={4}>
            <FormControl.Label
              alignSelf={'center'}
              _text={{
                bold: true,
              }}>
              订单总金额
            </FormControl.Label>
            <Spacer />
            <Text color={'danger.600'} fontSize={'xs'} mr="3" mt="4" height="9">
              {' '}
              RMB 20.45
            </Text>
          </HStack>
          <Divider
            bg="darkText"
            thickness="1.5"
            alignSelf={'center'}
            mt="0"
            mb="0"
            width={0.9 * w}
            opacity={0.3}
            orientation="horizontal"
          />
          <HStack mt={1} mb={1}>
            <Heading fontSize="14" ml="4" mt="3" mb="1" opacity={0.6}>
              总共
            </Heading>
            <Spacer />
            <Text
              color={'danger.600'}
              fontSize={'xs'}
              mr="3"
              mt="2"
              alignSelf={'center'}>
              {' '}
              RMB 20.45
            </Text>
          </HStack>
        </VStack>
      </Box>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" mt="2">
        <PaymentDetails />
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  changeButton: {
    backgroundColor: 'transparent',
  },
});
