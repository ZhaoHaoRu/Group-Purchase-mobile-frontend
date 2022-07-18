import React, {Component, useState} from 'react';
import {
  Box,
  Text,
  Button,
  Icon,
  HStack,
  Image,
  Center,
  Pressable,
} from 'native-base';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
import {Link} from '@react-navigation/native';
import {judgeTime} from '../utils/judgeTime';
import {getGroupById} from '../service/groupService';

// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function PurchaseFooter({groupId, userId}) {
  const [status, setStatus] = useState(1);
  const defaultAddress = {
    addressId: 0,
    location: '',
    phone: '',
    receiver: '',
    region: '',
  };
  const callback = data => {
    console.log("callback data: ", data);
    if (data.status === 1) {
      setStatus(judgeTime(data.data));
      console.log('status: ', status);
    }
  };
  React.useEffect(() => {
    const data = parseInt(groupId);
    getGroupById(parseInt(groupId), callback);
  }, []);
  // console.log('PurchaseFooter:', groupId, userId);
  return (
    <Box
      // flex={1}
      width="100%"
      height="10%"
      position="absolute"
      bottom="0"
      alignSelf="center"
      borderColor="gray.100"
      borderTopWidth="3">
      <Center flex={1} />
      <HStack
        alignItems="stretch"
        safeAreaBottom
        shadow={6}
        space={3}
        w={w}
        padding={3}>
        <Center>
          <Link
            to={{
              screen: 'Cart',
              initial: false,
              params: {groupId: groupId, userId: userId},
            }}>
            <Icon
              as={AntDesign}
              name="shoppingcart"
              size="lg"
              color="danger.400"
              _dark={{
                color: 'danger.300',
              }}
            />
          </Link>
          <Text color="light.800" fontSize="12">
            购物车
          </Text>
        </Center>
        <Center>
          {status === 1 ? (
            <Button
              size="sm"
              ml={0.5 * w}
              colorScheme="danger"
              // ml={0.1 * w}
              // mt={0.005 * h}
              // color="danger.800"
            >
              <Link
                to={{
                  screen: 'PaymentDetail',
                  initial: false,
                  params: {
                    groupId: groupId,
                    userId: userId,
                    address: defaultAddress,
                  },
                }}>
                一键开团
              </Link>
            </Button>
          ) : (
            <Button
              size="sm"
              ml={0.5 * w}
              colorScheme="danger"
              opacity={'0.5'}
              // ml={0.1 * w}
              // mt={0.005 * h}
              // color="danger.800"
            >
              {status === 2 ? '团购已结束' : '团购未开始'}
            </Button>
          )}
        </Center>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  cardItemTimeRemainTxt: {
    fontSize: 20,
    color: '#ee394b',
  },
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
  //时间文字
  time: {
    paddingHorizontal: 3,
    backgroundColor: 'rgba(85, 85, 85, 1)',
    fontSize: 12,
    color: 'white',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  //冒号
  colon: {
    fontSize: 12,
    color: 'rgba(85, 85, 85, 1)',
  },

  cardItemMask: {
    position: 'absolute',
    top: 15,
    right: 10,
    backgroundColor: 'transparent',
  },
  cardItemTimer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardItemTimerIcon: {
    width: 11,
    height: 11,
  },
  cardItem: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    marginTop: 20,
    width: 370,
    height: 370 * 0.65625,
  },
  cardItemMainPic: {
    width: 370,
    height: 370 * 0.65625,
  },
});
