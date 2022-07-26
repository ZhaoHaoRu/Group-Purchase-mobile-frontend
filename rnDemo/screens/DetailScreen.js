import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {
  Box,
  Text,
  HStack,
  VStack,
  Center,
  ScrollView,
  Flex,
  Icon,
  Image,
} from 'native-base';
import DetailCard from '../components/DetailCard';
import {useLinkProps} from '@react-navigation/native';
import Header from '../components/Header';
import PurchaseFooter from '../components/PurchaseFooter';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const DetailScreen = ({route, navigation}) => {
  console.log('detail screen', route.params);
  const {props} = route.params;
  const {userId} = route.params;
  console.log('detail userIddd:', userId);
  console.log('data:', props);
  return (
    <>
      <ScrollView mb={0.1 * h}>
        <Header />
        <DetailCard props={props} userId={userId} myAddressId={-1} />
      </ScrollView>
      <PurchaseFooter groupId={props.groupId} userId={userId} />
    </>
  );
};

export default DetailScreen;
