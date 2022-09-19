import React, {Component} from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Button,
  Pressable,
  NativeBaseProvider,
} from 'native-base';
import {Dimensions} from 'react-native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
import {Link} from '@react-navigation/native';
import DetailScreen from '../src/screens/DetailScreen';


const HomeCard = ({props, userId}) => {
  let title = props.groupTitle;
  if (props.groupTitle.length > 4) {
    title = props.groupTitle.substring(0, 4) + '...';
  }
  let storeName = props.user.userName;
  // console.log("storeName:", storeName);
  if (storeName.length > 6) {
    storeName = props.user.userName.substring(0, 6) + '...';
  }
  return (
    <NativeBaseProvider>
      <Box
        alignItems="center"
        // height={0.25 * h}
        mx={0.03 * w}
        backgroundColor={'white'}
        marginBottom={0.02 * w}
        borderRadius="lg">
        <Box w={0.94 * w} rounded="lg" overflow="hidden">
          <Box>
            <AspectRatio w="100%" ratio={16 / 7} borderRadius="lg">
              <Image
                source={{
                  uri: props.picture,
                }}
                alt="image"
                borderRadius="lg"
              />
            </AspectRatio>
          </Box>
          <Stack height={0.1 * h}>
            <Stack height={0.1 * h}>
              <HStack height={0.05 * h}>
                <Box w={0.33 * w} mt={0.02 * w}>
                  {props.state === 2 ? (
                    <Link
                      to={{
                        screen: 'SecKill',
                        initial: false,
                        params: {props: props, userId: userId, addressId: -1},
                      }}>
                      <Heading size="md" ml="0" mt={0.02 * h} color="#52525b">
                        {title}
                      </Heading>
                    </Link>
                  ) : (
                    <Link
                      to={{
                        screen: 'Detail',
                        initial: false,
                        params: {props: props, userId: userId},
                      }}>
                      <Heading size="md" ml="0" mt={0.02 * h} color="#52525b">
                        {title}
                      </Heading>
                    </Link>
                  )}
                </Box>
                <Box width={0.35 * w} ml={0.05 * w}>
                  <Text
                    size="sm"
                    // ml={0.05 * w}
                    mt={0.03 * w}
                    color="gray.700">
                    团长：{storeName}
                  </Text>
                </Box>
                <Button
                  size="xs"
                  variant="subtle"
                  colorScheme="danger"
                  ml={0.05 * w}
                  mt={0.02 * w}
                  color="danger.800">
                  订阅
                </Button>
              </HStack>
              <Text
                fontSize="sm"
                color="danger.600"
                // fontWeight="500"
                thin>
                ￥{props.goods[0].price.toFixed(2)}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default HomeCard;
