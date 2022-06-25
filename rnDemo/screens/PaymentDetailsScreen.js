import {Text, View, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {
  Button,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  NativeBaseProvider,
  ScrollView,
  Stack,
} from 'native-base';
import DeliveryDetailsList from '../components/DeliveryDetailsList';
import PaymentDetails from '../components/PaymentDetails';
import PaymentDoneScreen from './PaymentDoneScreen';
import {Link} from '@react-navigation/native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const PaymentDetailsScreen = ({navigation}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     titleText: 'Delivery method',
  //     bodyText: ['137 Teaticket Hwy, East Falmouth MA 2536', '0123456789'],
  //   };
  // }
  const titleText = 'Delivery method';
  const bodyText = ['137 Teaticket Hwy, East Falmouth MA 2536', '0123456789'];

  return (
    <>
      <Button size="30px" m="3" bg="transparent">
        <Image
          mb="5%"
          opacity={0.4}
          source={require('../image/arrowL.png')}
          size="30px"
          alt="arrowL"
        />
      </Button>
      <ScrollView ml="1" mr="1" flex="1">
        <DeliveryDetailsList />
        <PaymentDetails />
        <Stack
          mb="2.5"
          mt="1.5"
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
            width={0.9 * w}
            onPress={() => {
              // navigation.dispatch(StackActions.popToTop());
              navigation.replace('TabWrapper');
            }}>
            {/*<Link to={{screen: 'PaymentDone', initial: false}}>*/}
              去付款
            {/*</Link>*/}
          </Button>
        </Stack>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default PaymentDetailsScreen;
