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
import Header from '../components/Header';
import PurchaseFooter from '../components/PurchaseFooter';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const DetailScreen = ({navigation}) => {
  return (
    <>
      <ScrollView mb={0.1 * h}>
        <Header />
        <DetailCard />
      </ScrollView>
      <PurchaseFooter />
    </>
  );
};

export default DetailScreen;
