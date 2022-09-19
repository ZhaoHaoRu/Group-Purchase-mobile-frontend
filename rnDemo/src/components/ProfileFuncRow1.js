import {View} from 'react-native';
import React from 'react';
import {
  Box,
  Text,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  VStack,
  ZStack,
  Button,
  Pressable,
} from 'native-base';
import {Link} from '@react-navigation/native';

const ProfileFuncRow1 = ({userId}) => {
  return (
    <Box bg={'#fff'} mb={2}>
      <HStack justifyContent="space-between" mt={2}>
        <Pressable
          py="3"
          flex={1}
          alignItems="center"
          // onPress={() => {
          //   navigation.replace('Wallet');
          //   // this.props.navigate('Wallet');
          // }}
        >
          <Image
            mb="5%"
            opacity={0.4}
            source={require('../image/wallet.png')}
            size="30px"
            alt="wallet"
          />
          <Link to={{screen: 'Wallet', initial: false, params:{userId:userId}}}>
            <Text fontSize="xs">钱包</Text>
          </Link>
        </Pressable>
        <Divider
          bg="darkText"
          thickness="2"
          mx="2"
          mt="4"
          opacity={0.4}
          height={10}
          orientation="vertical"
        />
        <Pressable py="3" flex={1} alignItems="center">
          <Image
            mb="5%"
            opacity={0.4}
            source={require('../image/people.png')}
            size="30px"
            alt="people"
          />
          <Text fontSize="xs">团员</Text>
        </Pressable>
        <Divider
          bg="darkText"
          thickness="2"
          mx="2"
          mt="4"
          opacity={0.4}
          height={10}
          orientation="vertical"
        />
        <Pressable py="3" flex={1} alignItems="center">
          <Image
            mb="5%"
            opacity={0.4}
            source={require('../image/store.png')}
            size="30px"
            alt="store"
          />
          <Text fontSize="xs">店铺</Text>
        </Pressable>
        <Divider
          bg="darkText"
          thickness="2"
          mx="2"
          mt="4"
          height={10}
          opacity={0.4}
          orientation="vertical"
        />
        <Pressable py="3" flex={1} alignItems="center">
          <Image
            mb="5%"
            opacity={0.4}
            source={require('../image/msg.png')}
            size="30px"
            alt="msg"
          />
          <Text fontSize="xs">社群</Text>
        </Pressable>
      </HStack>
    </Box>
  );
};
export default ProfileFuncRow1;
