import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Button, Box, Text, HStack, VStack, Center} from 'native-base';
// import AwesomeButton from 'react-native-really-awesome-button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const WelcomeScreen = ({navigation}) => {
  console.log('get home screen!');
  return (
    <ImageBackground
      style={styles.container}
      source={require('../image/background.png')}>
      <View>
        <VStack space={4} alignItems="center" w="100%">
          <Center w={width} h="12%" />
          <Center w={width} h="15%">
            <Text fontSize="6xl" style={{fontFamily: 'lucida grande'}}>
              交我团
            </Text>
          </Center>
          <Center w="100%" h="5%" rounded="md">
            <Text italic fontSize="md">
              有 温 度 的 社 区 团 购
            </Text>
          </Center>
          <Center w={width} h="15%" />
          <Center w={width} h="15%">
            <Button
              variant="subtle"
              colorScheme="danger"
              width="80%"
              size="lg"
              borderRadius="full"
              onPress={() => navigation.replace('Register')}>
              创建账户
            </Button>
          </Center>
          <Center w={width} h="15%" rounded="md">
            <Button
              variant="Outline"
              colorScheme="danger"
              width="80%"
              size="lg"
              borderColor="danger.400"
              borderWidth="3px"
              borderRadius="full"
              onPress={() => navigation.replace('Login')}>
              登录
            </Button>
          </Center>
        </VStack>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null, // //不加这句，就是按照屏幕高度自适应
  },
});
export default WelcomeScreen;
