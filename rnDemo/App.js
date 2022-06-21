/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {extendTheme, NativeBaseProvider} from 'native-base';
import Footer from './components/Footer';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({config});

export default function App() {
  return (
    <NativeBaseProvider>
      {/*<Footer />*/}
      {/*<WelcomeScreen />*/}
      <HomeScreen />
    </NativeBaseProvider>
  );
}
