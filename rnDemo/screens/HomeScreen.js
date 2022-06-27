import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {
  Center,
  ScrollView,
  Flex,
  Icon,
  Image,
  HStack,
  Box,
  Text,
  VStack,
  Pressable,
} from 'native-base';
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
import {LogBox} from 'react-native';

// 忽略版本报错信息
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

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
          {/*<HStack>*/}
            <Searchbar />
          {/*  <VStack my={0.03 * w} space={0}>*/}
          {/*    <Icon*/}
          {/*      m="2"*/}
          {/*      ml="3"*/}
          {/*      // my={0.05 * w}*/}
          {/*      // space={4}*/}
          {/*      size="3xl"*/}
          {/*      color="gray.400"*/}
          {/*      as={AntDesign}*/}
          {/*      name={'scan1'}*/}
          {/*    />*/}
          {/*    <Box margin={'auto'}>*/}
          {/*      <Pressable onPress={navigation.replace('QrCodeScanner')}>*/}
          {/*        /!*<Link to={{screen: 'QrCodeScanner', initial: false}}>*!/*/}
          {/*        <Text size={'md'} color={'gray.700'}>*/}
          {/*          扫码*/}
          {/*        </Text>*/}
          {/*      </Pressable>*/}
          {/*      /!*</Link>*!/*/}
          {/*    </Box>*/}
          {/*  </VStack>*/}
          {/*</HStack>*/}
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
