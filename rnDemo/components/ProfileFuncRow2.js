import {View, Dimensions} from 'react-native';
import React from 'react';
import {
  Box,
  Text,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  VStack,
  Pressable,
  Spacer,
} from 'native-base';
import {Link} from '@react-navigation/native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ProfileFuncRow2 = () => {
  return (
    <View>
      <VStack>
        <Box bg={'#fff'} mb={2}>
          <HStack>
            <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
              团员功能
            </Heading>
            <Spacer />
            <Box mr="4" alignSelf={'center'}>
              <Center>
                <HStack>
                  <Heading
                    fontSize="11"
                    ml="4"
                    mt="4"
                    // mr="4"
                    alignSelf={'center'}
                    opacity={0.4}>
                    切换团长功能
                  </Heading>
                  <Image
                    mt="15%"
                    opacity={0.3}
                    source={require('../image/arrowR.png')}
                    size="18px"
                    alt="arrpwR"
                  />
                </HStack>
              </Center>
            </Box>
          </HStack>
          <Divider
            bg="darkText"
            thickness="2"
            alignSelf={'center'}
            // ml="4"
            // mr="10"
            mt="4"
            mb="0"
            width={0.9 * w}
            opacity={0.1}
            orientation="horizontal"
          />
          <Box bg={'#fff'} mb={2}>
            <HStack justifyContent="space-between" mt={1}>
              <Pressable py="3" flex={1} alignItems="center">
                <Image
                  mb="5%"
                  opacity={0.5}
                  source={require('../image/script.png')}
                  size="30px"
                  alt="address"
                />
                <Text fontSize="xs">收货地址</Text>
              </Pressable>

              <Pressable py="3" flex={1} alignItems="center">
                <Image
                  mb="5%"
                  opacity={0.5}
                  source={require('../image/inbox.png')}
                  size="30px"
                  alt="feedback"
                />
                <Text fontSize="xs">反馈与客服</Text>
              </Pressable>

              <Pressable py="3" flex={1} alignItems="center">
                <Image
                  mb="5%"
                  opacity={0.5}
                  source={require('../image/delivery.png')}
                  size="30px"
                  alt="delivery"
                />
                <Text fontSize="xs">配送地址</Text>
              </Pressable>

              <Pressable
                py="3"
                flex={1}
                alignItems="center"
                /*onPress={() => navigation.replace('Detail')}*/
              >
                {/* <Link to={{screen: 'QrCodeScanner', initial: false}}>*/}
                <Image
                  mb="5%"
                  opacity={0.5}
                  source={require('../image/refresh.png')}
                  size="30px"
                  alt="refresh"
                />
                <Text fontSize="xs">扫码</Text>
                {/*    </Link>*/}
              </Pressable>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </View>
  );
};

export default ProfileFuncRow2;
