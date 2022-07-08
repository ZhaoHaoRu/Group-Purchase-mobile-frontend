// import {View, Text} from 'react-native';
// import React from 'react';
// import {Box, VStack} from 'native-base';
// import ProfilePic from '../components/ProfilePic';
// import ProfileFuncRow1 from '../components/ProfileFuncRow1';
// import ProfileFuncRow2 from '../components/ProfileFuncRow2';
// import ProfileFuncList from '../components/ProfileFuncList';
//
// const MyProfileScreen = () => {
//   return (
//     <View>
//       <ProfilePic />
//       <VStack marginTop={180}>
//         <ProfileFuncRow1 />
//         <ProfileFuncRow2 />
//         {/* //trick */}
//         <Box height={1000} bg="#fff">
//           <ProfileFuncList />
//         </Box>
//       </VStack>
//     </View>
//   );
// };
//
// export default MyProfileScreen;

import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Box, useToast, VStack} from 'native-base';
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

const MyProfileScreen = () => {
  const [Id, setId] = useState(0);
  const [user, setUser] = useState({});
  const toast = useToast();
  const callback = data => {
      console.log('user data:', data);
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
      console.log('userId::::', data);
      const request = {userId: parseInt(data)};
      getUserById(request, callback);
    });
  }, []);

  return (
    <View>
      <ProfilePic user={user} />
      <VStack marginTop={180}>
        <ProfileFuncRow1 userId={Id} />
        <ProfileFuncRow2 userId={Id} />
        {/* //trick */}
        <Box height={1000} bg="#fff">
          <ProfileFuncList />
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
