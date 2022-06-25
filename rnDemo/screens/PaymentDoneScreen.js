import {Dimensions, View} from 'react-native';
import React from 'react';
import {
  Box,
  Button,
  Icon,
  Image,
  NativeBaseProvider,
  Stack,
  Text,
  VStack,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Link} from '@react-navigation/native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const PaymentDoneScreen = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Button size="30px" m="3" bg="transparent">
        <Image
          mb="5%"
          opacity={0.4}
          source={require('../image/arrowL.png')}
          size="30px"
          alt="arrowL"
        />
      </Button>
      <Box height={0.7 * h} bg="#fff" m="7" borderRadius="30">
        <VStack>
          <Image
            mb="5%"
            opacity={0.6}
            source={require('../image/done.png')}
            size="100px"
            alt="done"
            alignSelf={'center'}
            //   justifyItems="center"
            mt="120"
          />
          <Text alignSelf={'center'}>付款成功！</Text>
        </VStack>
        <Stack
          mb="2.5"
          mt="20"
          direction={{
            base: 'column',
            md: 'row',
          }}
          space={2}
          mx={{
            base: 'auto',
            md: '0',
          }}>
          <Button
            size="sm"
            // variant="outline"
            colorScheme="danger"
            width={0.5 * w}
            onPress={() => {
              // navigation.dispatch(StackActions.popToTop());
              navigation.replace('TabWrapper');
            }}>
            回到主页
          </Button>
        </Stack>
      </Box>
    </NativeBaseProvider>
  );
};

export default PaymentDoneScreen;
