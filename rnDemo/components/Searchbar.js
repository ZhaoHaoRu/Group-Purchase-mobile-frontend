import React from 'react';
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
} from 'native-base';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontAwesome5} from '@expo/vector-icons';

function SearchBar() {
  return (
    <Center>
      <VStack
        my="4"
        space={4}
        w="90%"
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
                name={"search1"}
              />
            }
          />
        </VStack>
      </VStack>
    </Center>
  );
}

export default SearchBar;

