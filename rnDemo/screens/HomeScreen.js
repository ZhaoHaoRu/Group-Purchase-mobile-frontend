import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {Center, ScrollView, Flex, Icon, Image} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Footer from '../components/Footer';
import BestSellerCarousel from '../components/BestSellerCarousel';
import HomeCard from '../components/HomeCard';
import Searchbar from '../components/Searchbar';
import DetailScreen from './DetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Link} from '@react-navigation/native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  // React.useEffect(() => {
  //   navigation.dispatch(StackActions.popToTop());
  //   navigation.replace('TabWrapper');
  // }, [navigation]);
  return (
    <>
      <ScrollView
        width="100%"
        height={0.95 * h}
        // mb={0.1 * h}
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
          {/*<Image*/}
          {/*  source={require('../image/search.png')}*/}
          {/*  size={0.12 * w}*/}
          {/*  alt="map"*/}
          {/*  ml={0.85 * w}*/}
          {/*  // backgroundColor="secondary.300"*/}
          {/*/>*/}
          <Searchbar />
          {/*</Box>*/}
          <Center
            width={w}
            height={0.35 * h}
            _text={{
              color: 'coolGray.800',
            }}
            mt={0.05 * h}>
            <BestSellerCarousel />
          </Center>
          <Center width={w}>
            {/*<Link to={{screen: 'Detail'}}>*/}
            <HomeCard />
            {/*</Link>*/}
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </Center>
        </Flex>
      </ScrollView>
      {/*<Footer />*/}
    </>
  );
};

export default HomeScreenWrapper;

const StackNav = createNativeStackNavigator();
const HomeWrapper = createNativeStackNavigator();

export function HomeScreenWrapper() {
  let navigationContainer = (
    <HomeWrapper.Navigator screenOptions={{headerShown: false}}>
      <HomeWrapper.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeWrapper.Navigator>
  );
  return navigationContainer;
}

export function HomeScreenRoute() {
  let navigationContainer = (
    <StackNav.Navigator screenOptions={{headerShown: false}}>
      <StackNav.Screen
        name="TrueHome"
        component={HomeScreenWrapper}
        options={{headerShown: false}}
      />
      <StackNav.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </StackNav.Navigator>
  );
  return navigationContainer;
}
