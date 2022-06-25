import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import BrowseScreen from '../screens/BrowseScreen';
import QrCodeScreen from '../screens/QrCodeScreen';
import QrCodeScannerScreen from '../screens/QrCodeScannerScreen';
import PaymentDoneScreen from '../screens/PaymentDoneScreen';
import PaymentDetailsScreen from '../screens/PaymentDetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Ionicons} from '@expo/vector-icons';

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator({
  header: null,
});

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Browse" component={BrowseScreen} />
        <Stack.Screen name="QrCode" component={QrCodeScreen} />
        <Stack.Screen name="QrCodeScanner" component={QrCodeScannerScreen} />
        <Stack.Screen name="PaymentDone" component={PaymentDoneScreen} />
        <Stack.Screen name="PaymentDetail" component={PaymentDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
