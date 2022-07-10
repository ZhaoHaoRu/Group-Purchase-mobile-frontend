import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  NativeBaseProvider,
  Pressable,
  Spacer,
  Text,
  useToast,
  VStack,
} from 'native-base';
import center from 'native-base/src/theme/components/center';
import ProfileFuncList from './ProfileFuncList';
import {getUserById} from '../service/userService';
import {storage} from '../utils/storage';
import MyProfileScreen from '../screens/MyProfileScreen';
import {TabWrapper} from '../App';
import {Link} from '@react-navigation/native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Wallet = ({route, navigation}) => {
  // const [stu, setStu] = useState([]);
  const {userId} = route.params;
  const [user, setUser] = useState({});
  const toast = useToast();

  const callback = data => {
    if (data.status === 0) {
      setUser(data.data);
      console.log('user: ', user);
    } else {
      toast.show({
        description: '出错了，请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  React.useEffect(() => {
    // console.log('Check useEffect');
    const data = {userId: parseInt(userId)};
    getUserById(data, callback);
  }, []);

  return (
    <NativeBaseProvider>
      <View>
        <VStack>
          <HStack>
            <Pressable
              size="30px"
              m="3"
              bg="transparent"
              onPress={() => {
                navigation.replace('TabWrapper');
              }}>
              <Image
                mb="5%"
                opacity={0.4}
                source={require('../image/arrowL.png')}
                size="30px"
                alt="arrowL"
              />
            </Pressable>
            {/* </Link> */}
            <Heading fontSize="md" style={styles.title}>
              钱包余额
            </Heading>
          </HStack>
          <VStack>
            <Box bg="#fff" ml="3" mr="3" borderRadius="10" mb="3">
              <Text style={styles.wallet}>总金额</Text>
              {/* {stu.map(stu => ( */}
              <Text color={'danger.500'} fontSize={'2xl'} style={styles.money}>
                ￥{parseFloat(user.wallet).toFixed(2)}
              </Text>
              {/* ))} */}
              <Button
                size="sm"
                colorScheme="danger"
                mt={5}
                // variant="outline"
                alignSelf={'center'}
                width={0.4 * w}
                onPress={() => {
                  // navigation.dispatch(StackActions.popToTop());
                  // navigation.replace('QrCode');
                  <MyProfileScreen />;
                }}>
                提现至银行卡
              </Button>
              <Button
                size="xs"
                mt={1}
                mb={5}
                opacity="0.5"
                variant="transparent"
                alignSelf={'center'}
                width={0.4 * w}>
                提现至零钱
              </Button>
            </Box>
            <Box height={1000} bg="#fff">
              <VStack>
                <Box bg={'#fff'}>
                  <HStack mt={1} mb={1}>
                    <Heading fontSize="14" ml="5" mt="4" opacity={0.6}>
                      提现进度
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
                    <Heading fontSize="14" ml="5" mt="4" opacity={0.6}>
                      导出账单
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
            </Box>
          </VStack>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  input: {
    height: 45,
    padding: 10,
  },
  title: {
    marginTop: 0,
    marginBottom: 0,
    alignSelf: 'center',
  },
  wallet: {
    alignSelf: 'center',
    marginTop: 30,
  },
  money: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default Wallet;
