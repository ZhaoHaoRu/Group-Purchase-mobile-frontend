/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import Footer from './components/Footer';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreenWrapper from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import PaymentDetailsScreen from './screens/PaymentDetailsScreen';
import {Icon} from 'native-base';
import BrowseScreen from './screens/BrowseScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import OrderScreen from './screens/OrderScreen';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CreateGroupScreen from './screens/CreateGroupScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import QrCodeScreen from './screens/QrCodeScreen';
import DeliveryInfoScreen from './screens/DeliveryInfoScreen';
import CartScreen from './screens/CartScreen';
import PaymentDoneScreen from './screens/PaymentDoneScreen';
import ScannerScreen from './screens/ScannerScreen';
import PaymentDetails from './components/PaymentDetails';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// 为了Detail页面不显示footer，再包一层
const Tab = createBottomTabNavigator();
//为了退出时不显示用户界面，包一层 stack
const Route = createNativeStackNavigator();
//不显示header的操作
Tab.navigationOptions = ({navigation}) => {
  return {
    header: null,
  };
};

// extend the theme
export const theme = extendTheme({config});

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       {/*/!*<Footer />*!/*/}
//       {/*/!*<WelcomeScreen />*!/*/}
//       {/*<HomeScreen />*/}
//       {/*/!*<DetailScreen />*!/*/}
//       {/*/!*<BrowseScreen />*!/*/}
//       {/*/!*<Footer />*!/*/}
//       <Navigation />
//     </NativeBaseProvider>
//   );
// }

export function TabWrapper() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // title: '交我团',
        headerStyle: {
          backgroundColor: '#fda4af',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === '首页') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === '附近拼团') {
            iconName = focused ? 'appstore-o' : 'appstore-o';
          } else if (route.name === '订单') {
            iconName = focused ? 'redenvelopes' : 'redenvelopes';
          } else if (route.name === '个人') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === '一键开团') {
            iconName = focused ? 'rocket1' : 'rocket1';
          }

          // You can return any component that you like here!
          return (
            <Icon as={AntDesign} name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="首页"
        component={HomeScreenWrapper}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="附近拼团"
        component={BrowseScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="一键开团"
        component={CreateGroupScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="订单"
        component={OrderScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="个人"
        component={MyProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Route.Navigator
          initialRouteName="Welcome"
          screenOptions={{headerShown: false}}>
          <Route.Screen name="Welcome" component={WelcomeScreen} />
          <Route.Screen name="Login" component={LoginForm} />
          <Route.Screen name="Register" component={RegisterForm} />
          <Route.Screen name="Detail" component={DetailScreen} />
          <Route.Screen name="Cart" component={CartScreen} />
          <Route.Screen name="Address" component={DeliveryInfoScreen} />
          <Route.Screen name="QrCode" component={QrCodeScreen} />
          <Route.Screen name="QrCodeScanner" component={ScannerScreen} />
          <Route.Screen name="PaymentDone" component={PaymentDoneScreen} />
          <Route.Screen name="PaymentDetail" component={PaymentDetailsScreen} />
          <Route.Screen
            name="TabWrapper"
            component={TabWrapper}
            options={{headerShown: false}}
          />
        </Route.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
