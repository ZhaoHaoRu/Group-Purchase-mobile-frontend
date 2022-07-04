import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {Center, ScrollView, Flex, FlatList} from 'native-base';
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
  // TODO dataForm的实例，要改成从后端传入的数据
  const data = [
    {
      category: '水果鲜花',
      delivery: '同城配送',
      duration: 2,
      goods: [
        {
          goodsId: 1,
          goodsInfo: '新鲜出炉的甜甜圈，一口俘获您的心',
          goodsName: '甜甜圈',
          group: {},
          inventory: 1000,
          picture:
            'https://imgwork.tooopen.com/20210616/tooopen_v1718581858d94c1dc3-ae72-43d2-a61f-88d13f2db576.jpg',
          price: 12.0,
        },
        {
          goodsId: 2,
          goodsInfo: '最正宗农家炒法',
          goodsName: '辣椒炒肉',
          group: {},
          inventory: 1000,
          picture:
            'https://img.zcool.cn/community/01272858d8b7c8a801219c77827c87.jpg@1280w_1l_2o_100sh.jpg',
          price: 22.0,
        },
      ],
      groupId: 1,
      groupInfo: '为您挑选今日水果新鲜选购',
      groupTitle: '今日水果新鲜选购',
      picture:
        'https://img.zcool.cn/community/013bbc598873f9a801215603034dd9.jpg@3000w_1l_0o_100sh.jpg',
      startTime: {
        date: 0,
        day: 23,
        hours: 12,
        minutes: 10,
        month: 7,
        nanos: 0,
        seconds: 0,
        time: 0,
        timezoneOffset: 0,
        year: 0,
      },
      user: {
        email: '',
        password: '',
        userId: 0,
        userName: '天天新鲜',
        wallet: 0,
      },
      state: 0,
    },
    {
      category: '水果鲜花',
      delivery: '同城配送',
      duration: 2,
      goods: [
        {
          goodsId: 1,
          goodsInfo: '',
          goodsName: '甜甜圈',
          group: {},
          inventory: 1000,
          picture:
            'https://imgwork.tooopen.com/20210616/tooopen_v1718581858d94c1dc3-ae72-43d2-a61f-88d13f2db576.jpg',
          price: 12.0,
        },
        {
          goodsId: 2,
          goodsInfo: '',
          goodsName: '辣椒炒肉',
          group: {},
          inventory: 1000,
          picture:
            'https://img.zcool.cn/community/01272858d8b7c8a801219c77827c87.jpg@1280w_1l_2o_100sh.jpg',
          price: 22.0,
        },
      ],
      groupId: 2,
      groupInfo: '为您挑选今日水果新鲜选购',
      groupTitle: '今日水果新鲜选购',
      picture:
        'https://img.zcool.cn/community/01dec05680a3f26ac7251bb6972995.jpg@1280w_1l_2o_100sh.jpg',
      startTime: {
        date: 0,
        day: 0,
        hours: 0,
        minutes: 0,
        month: 0,
        nanos: 0,
        seconds: 0,
        time: 0,
        timezoneOffset: 0,
        year: 0,
      },
      user: {
        email: '',
        password: '',
        userId: 0,
        userName: '天天水果',
        wallet: 0,
      },
      state: 0,
    },
  ];
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
            data={data}
            renderItem={({item}) => <HomeCard props={item} />}
            keyExtractor={item => item.groupId}
          />
        </Center>
      </Flex>
      {/*</ScrollView>*/}
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
