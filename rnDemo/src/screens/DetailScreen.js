import React, {Component, useState} from 'react';
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
  // console.log('detail screen', route.params);
  const {props} = route.params;
  const {userId} = route.params;
  const {groupId} = props.groupId;
  const [isCollected, setIsCollected] = useState(0);

  return (
    <>
      <ScrollView mb={0.1 * h}>
        <Header />
        <DetailCard props={props} userId={userId} myAddressId={-1} />
      </ScrollView>
<<<<<<< HEAD:rnDemo/src/screens/DetailScreen.js
      <PurchaseFooter groupId={props.groupId} userId={userId} />
=======
      <PurchaseFooter groupId={props.groupId} userId={userId} props={props}  />
>>>>>>> 5ee0a51599b9111ce811d8e7fc5b9391afee5a28:rnDemo/screens/DetailScreen.js
    </>
  );
};

export default DetailScreen;
