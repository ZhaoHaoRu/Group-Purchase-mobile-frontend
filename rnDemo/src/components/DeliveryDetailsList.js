import React from 'react';
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Button,
  Column,
} from 'native-base';
import {StyleSheet} from 'react-native';

const DeliveryDetailsList = () => {
  return (
    <VStack flex={1} ml="1">
      <Box borderRadius="5" alignSelf={'center'} bg="#fff" pl="3" pt="3" pb="1">
        <Heading fontSize="md" mb="3">
          配送信息
        </Heading>
        <Box>
          <HStack>
            <VStack width={'80%'}>
              <Text
                fontSize="xs"
                _dark={{color: 'warmGray.50'}}
                color="coolGray.800"
                justifyItems={'center'}
                width="80%">
                {/* {item.address} */}
                123, Transfer Road, California
              </Text>
            </VStack>
            {/* <Spacer /> */}
            <Button alignSelf="center" style={styles.changeButton} mt="-2">
              <Text color={'danger.700'} fontSize="12">
                编辑
              </Text>
            </Button>
          </HStack>
        </Box>
        <Box>
          <HStack>
            <VStack width={'80%'}>
              <Text
                fontSize="xs"
                // alignContent={}
                _dark={{color: 'warmGray.50'}}
                color="coolGray.800"
                //   flex={1}
                width="80%">
                {/* {item.address} */}
                +0123456789
              </Text>
            </VStack>
            {/* <Spacer /> */}
            <Button style={styles.changeButton} mt="-2">
              <Text color={'danger.700'} fontSize="12">
                编辑
              </Text>
            </Button>
          </HStack>
        </Box>
      </Box>
    </VStack>
  );
};

const styles = StyleSheet.create({
  changeButton: {
    backgroundColor: 'transparent',
  },
});
