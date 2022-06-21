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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Footer from '../components/Footer';
import BestSellerCarousel from '../components/BestSellerCarousel';
import HomeCard from '../components/HomeCard';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <>
      <ScrollView
        width="100%"
        height={0.85 * h}
        mb={0.1 * h}
        _contentContainerStyle={{
          mt: '1%',
          mb: '50px',
          mr: '0',
          ml: '0',
        }}>
        <Flex direction="column" mb="2.5" mt="1.5">
          {/*<Box*/}
          {/*  width={w}*/}
          {/*  height={0.1 * h}*/}
          {/*  bg="primary.100"*/}
          {/*  _text={{*/}
          {/*    color: 'coolGray.800',*/}
          {/*  }}>*/}
          <Image
            source={require('../image/search.png')}
            size={0.12 * w}
            alt="map"
            ml={0.85 * w}
            // backgroundColor="secondary.300"
          />
          {/*</Box>*/}
          <Center
            width={w}
            height={0.35 * h}
            _text={{
              color: 'coolGray.800',
            }}>
            <BestSellerCarousel />
          </Center>
          <Center width={w}>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </Center>
        </Flex>
      </ScrollView>
      <Footer />
    </>
  );
};

export default HomeScreen;
