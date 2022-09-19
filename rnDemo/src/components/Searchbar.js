import React, {useState} from 'react';
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  NativeBaseProvider,
  Center,
  Box,
  HStack,
  Divider,
  Text,
  Pressable,
} from 'native-base';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontAwesome5} from '@expo/vector-icons';
import {Link} from '@react-navigation/native';
import {Dimensions, StyleSheet} from 'react-native';
import {Spacer} from 'native-base/src/components/primitives/Flex';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

function SearchBar(props) {
  console.log('search props', props);
  // const navigation = useState(0);
  return (
    <Center>
      <HStack>
        <VStack
          my={0.05 * w}
          space={4}
          w="80%"
          ml={0.03 * w}
          divider={
            <Box px="2">
              <Divider />
            </Box>
          }>
          <VStack w="100%" space={5} alignSelf="center">
            <Input
              placeholder="按团长\商品名称进行查找"
              width="100%"
              borderRadius="4"
              // py="3"
              // px="1"
              fontSize="14"
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="gray.400"
                  as={AntDesign}
                  name={'search1'}
                />
              }
            />
          </VStack>
        </VStack>
        <VStack my={0.03 * w} space={0}>
          <Icon
            m="2"
            ml="3"
            // my={0.05 * w}
            // space={4}
            size="3xl"
            color="gray.400"
            as={AntDesign}
            name={'scan1'}
          />
          <Box margin={'auto'}>
            {/*<Pressable onPress={props.props.replace('QrCodeScanner')}>*/}
            <Link to={{screen: 'QrCodeScanner', initial: false}}>
              <Text size={'md'} color={'gray.700'}>
                扫码
              </Text>
              {/*</Pressable>*/}
            </Link>
          </Box>
        </VStack>
      </HStack>
    </Center>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    // ml: 0.01 * w,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
