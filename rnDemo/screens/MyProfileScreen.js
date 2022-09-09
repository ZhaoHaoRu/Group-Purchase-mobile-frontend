import {View, Text, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Box, Divider, Heading, HStack, Image, Spacer, useToast, VStack} from 'native-base';
import ProfilePic from '../components/ProfilePic';
import ProfileFuncRow1 from '../components/ProfileFuncRow1';
import ProfileFuncRow2 from '../components/ProfileFuncRow2';
import ProfileFuncList from '../components/ProfileFuncList';
import ProfileAddressScreen from './ProfileAddressScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wallet from '../components/Wallet';
import AdminOrderList from '../components/AdminOrderList';
import AdminGroupList from '../components/AdminGroupList';
import EditGroupDetails from '../components/EditGroupDetails';
import {storage} from '../utils/storage';
import {getCollectedGroups} from '../service/groupService';
import {getUserById} from '../service/userService';
import {StackActions} from "@react-navigation/native";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const MyProfileScreen = ({navigation}) => {
  const [Id, setId] = useState(0);
  const [user, setUser] = useState({});
  const toast = useToast();
    const onPressLogout = () => {
        storage.remove('userId');
        navigation.dispatch(StackActions.popToTop());
    };
  const callback = data => {
    // console.log('user data:', data);
    if (data.status === 0) {
      setUser(data.data);
    } else {
      toast.show({
        description: '出错了，请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  // 获取当前用户
  React.useEffect(() => {
    storage.load('userId', data => {
      setId(data);
      // console.log('userId::::', data);
      const request = {userId: parseInt(data)};
      getUserById(request, callback);
    });
  }, []);

  return (
    <View>
      <ProfilePic user={user} />
      <VStack marginTop={180}>
        <ProfileFuncRow1 userId={Id} />
        <ProfileFuncRow2 userId={Id} navigation={navigation} />
        {/* //trick */}
        <Box height={1000} bg="#fff">
            <View bg={'#fff'}>
                <VStack>
                    <Box bg={'#fff'}>
                        <HStack mt={1} mb={1}>
                            <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
                                我的收藏
                            </Heading>
                            <Spacer />
                            <Image
                                // mt="15%"
                                mr="4"
                                mt="4"
                                opacity={0.3}
                                source={require('../image/arrowR.png')}
                                size="18px"
                                alt="arrowR"
                            />
                        </HStack>
                        <Divider
                            bg="darkText"
                            thickness="1.5"
                            alignSelf={'center'}
                            mt="3"
                            mb="0"
                            width={0.9 * w}
                            opacity={0.1}
                            orientation="horizontal"
                        />
                    </Box>
                    <Box bg={'#fff'}>
                        <HStack mt={1} mb={1}>
                            <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
                                退出登录
                            </Heading>
                            <Spacer />
                            <Image
                                // mt="15%"
                                mr="4"
                                mt="4"
                                opacity={0.3}
                                source={require('../image/arrowR.png')}
                                size="18px"
                                alt="arrowR"
                            />
                        </HStack>
                        <Divider
                            bg="darkText"
                            thickness="1.5"
                            alignSelf={'center'}
                            mt="3"
                            mb="0"
                            width={0.9 * w}
                            opacity={0.1}
                            orientation="horizontal"
                        />
                    </Box>
                </VStack>
            </View>
        </Box>
      </VStack>
    </View>
  );
};

const StackNav = createNativeStackNavigator();
const MyProfileWrapper = createNativeStackNavigator();

export function MyProfileScreenRoute() {
  let navigationContainer = (
    <StackNav.Navigator screenOptions={{headerShown: false}}>
      <StackNav.Screen
        name="TrueMyProfile"
        component={MyProfileScreen}
        options={{headerShown: false}}
      />
      <StackNav.Screen
        name="ProfileAddress"
        component={ProfileAddressScreen}
        options={{headerShown: false}}
      />
      <StackNav.Screen
        name="Wallet"
        component={Wallet}
        options={{headerShown: false}}
      />
      <StackNav.Screen
        name="AdminOrderList"
        component={AdminOrderList}
        options={{headerShown: false}}
      />
      <StackNav.Screen
        name="AdminGroupList"
        component={AdminGroupList}
        options={{headerShown: false}}
      />
      <StackNav.Screen
        name="EditGroupDetails"
        component={EditGroupDetails}
        options={{headerShown: false}}
      />
      {/*<StackNav.Screen*/}
      {/*    name=""*/}
      {/*    component={Wallet}*/}
      {/*    options={{headerShown: false}}*/}
      {/*/>*/}
    </StackNav.Navigator>
  );
  return navigationContainer;
}
export default MyProfileScreenRoute;
