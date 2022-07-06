import React, {Component, useState} from 'react';
import {Dimensions} from 'react-native';
import {Center, ScrollView, Flex, FlatList} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Footer from '../components/Footer';
import BestSellerCarousel from '../components/BestSellerCarousel';
import HomeCard from '../components/HomeCard';
import Searchbar from '../components/Searchbar';
import DetailScreen from './DetailScreen';
import {storage} from '../utils/storage';
import {AsyncStorage} from 'react-native';
import {getCollectedGroups} from '../service/groupService';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
  // TODO 修改接口后内容也也要有所修改
  const [groups, setGroups] = useState([]);
  const [Id, setId] = useState(0);
  const callback = data => {
    // console.log('group data:', data);
    if (data.status === 0) {
      setGroups(data.data);
      // console.log('groups:', groups);
      // console.log('groups length: ', groups.length);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    storage.load('userId', data => {
      setId(data);
      // console.log('userId:', data);
      const request = {userId: data};
      getCollectedGroups(request, callback);
    });
  }, []);

  // console.log('groups:', groups);
  if (groups != []) {
    // console.log('groups:', groups);
    return (
      <>
        {/*<ScrollView*/}
        {/*  width="100%"*/}
        {/*  height={0.95 * h}*/}
        {/*  // mb={0.1 * h}*/}
        {/*  _contentContainerStyle={{*/}
        {/*    mt: '1%',*/}
        {/*    mb: '50px',*/}
        {/*    mr: '0',*/}
        {/*    ml: '0',*/}
        {/*  }}>*/}
        <Flex
          direction="column"
          // mb="2.5" mt="1.5"
        >
          {/*<Searchbar />*/}
          {/*<Center*/}
          {/*  width={w}*/}
          {/*  height={0.35 * h}*/}
          {/*  _text={{*/}
          {/*    color: 'coolGray.800',*/}
          {/*  }}*/}
          {/*  mt={0.05 * h}>*/}
          {/*  <BestSellerCarousel />*/}
          {/*</Center>*/}
          <Center width={w}>
            {/*/!*<Link to={{screen: 'Detail'}}>*!/*/}
            {/*<HomeCard />*/}
            {/*/!*</Link>*!/*/}
            {/*<HomeCard />*/}
            {/*<HomeCard />*/}
            {/*<HomeCard />*/}
            {/*<HomeCard />*/}
            <FlatList
              ListHeaderComponent={
                <>
                  <Searchbar />
                  <Center
                    width={w}
                    height={0.35 * h}
                    _text={{
                      color: 'coolGray.800',
                    }}
                    mt={0.05 * h}>
                    <BestSellerCarousel />
                  </Center>
                </>
              }
              data={groups}
              renderItem={({item}) => <HomeCard props={item} userId={Id} />}
              keyExtractor={item => item.groupId}
            />
          </Center>
        </Flex>
        {/*</ScrollView>*/}
        {/*<Footer />*/}
      </>
    );
  }
  // } else {
  //     // return(
  //     //
  //     // );
  // }
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
