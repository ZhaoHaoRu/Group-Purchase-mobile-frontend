import {View, Dimensions, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Divider,
  Heading,
  HStack,
  VStack,
  Spacer,
  FormControl,
  Input,
  Stack,
  Button,
  Image,
  Text,
  Select,
  CheckIcon,
} from 'native-base';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const GroupProductDetails = () => {
  const [text, setText] = useState('');
  let [service, setService] = React.useState('');
  return (
    <Box
      bg={'#fff'}
      borderRadius={15}
      height={'auto'}
      pb="2"
      ml="2"
      mr="2"
      mb="2">
      <VStack>
        <HStack mt={1} mb={1}>
          <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
            团购商品
          </Heading>
          <Spacer />
          <Image
            // mt="15%"
            mr="4"
            mt="4"
            opacity={0.3}
            source={require('../image/bin.png')}
            size="18px"
            alt="map"
          />
        </HStack>
        <Divider
          bg="darkText"
          thickness="1.5"
          alignSelf={'center'}
          mt="3"
          mb="0"
          width={0.9 * w}
          opacity={0.3}
          orientation="horizontal"
        />
        <HStack ml={4}>
          <FormControl.Label
            alignSelf={'center'}
            _text={{
              bold: true,
            }}>
            名称
          </FormControl.Label>
          <FormControl isRequired>
            <Input
              placeholder="               请输入商品名称"
              variant="unstyled"
              borderColor={'transparent'}
              // mx={0.18 * w}
              onChangeText={value => setData({...formData, name: value})}
            />
          </FormControl>
        </HStack>
        <Divider
          bg="darkText"
          thickness="1.5"
          alignSelf={'center'}
          width={0.9 * w}
          opacity={0.05}
          orientation="horizontal"
        />
        <HStack ml={4}>
          <FormControl.Label
            alignSelf={'center'}
            _text={{
              bold: true,
            }}>
            商品描述
          </FormControl.Label>
          <FormControl isRequired>
            <Input
              placeholder="      描述商品"
              variant="unstyled"
              borderColor={'transparent'}
              // mx={0.1 * w}
              onChangeText={value => setData({...formData, name: value})}
            />
          </FormControl>
        </HStack>
        <Divider
          bg="darkText"
          thickness="1.5"
          alignSelf={'center'}
          width={0.9 * w}
          opacity={0.05}
          orientation="horizontal"
        />
        <HStack ml={4}>
          <FormControl.Label
            alignSelf={'center'}
            _text={{
              bold: true,
            }}>
            商品图片
          </FormControl.Label>
          <FormControl isRequired>
            <Input
              // position= 'absolute'
              placeholder="      添加图片"
              variant="unstyled"
              borderColor={'transparent'}
              width="60%"
              // mx={0.1 * w}
              onChangeText={value => setData({...formData, name: value})}
            />
          </FormControl>
          <Spacer />
          <Image
            mt="5%"
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
          width={0.9 * w}
          opacity={0.05}
          orientation="horizontal"
        />
        <HStack ml={4}>
          <FormControl.Label
            alignSelf={'center'}
            _text={{
              bold: true,
            }}>
            价格
          </FormControl.Label>
          <FormControl isRequired>
            <Input
              placeholder="               请输入价格"
              variant="unstyled"
              borderColor={'transparent'}
              // mx={0.185 * w}
              onChangeText={value => setData({...formData, name: value})}
            />
          </FormControl>
        </HStack>
        <Divider
          bg="darkText"
          thickness="1.5"
          alignSelf={'center'}
          width={0.9 * w}
          opacity={0.05}
          orientation="horizontal"
        />
        <HStack ml={4}>
          <FormControl.Label
            alignSelf={'center'}
            _text={{
              bold: true,
            }}>
            库存
          </FormControl.Label>
          <FormControl isRequired>
            <Input
              placeholder="               不限"
              variant="unstyled"
              borderColor={'transparent'}
              // mx={0.185 * w}
              onChangeText={value => setData({...formData, name: value})}
            />
          </FormControl>
        </HStack>
        <Divider
          bg="darkText"
          thickness="1.5"
          alignSelf={'center'}
          width={0.9 * w}
          opacity={0.05}
          orientation="horizontal"
        />
        <HStack ml={4}>
          <FormControl.Label
            alignSelf={'center'}
            _text={{
              bold: true,
            }}>
            秒杀
          </FormControl.Label>
          <Select
            selectedValue={service}
            minWidth="85%"
            accessibilityLabel="是/否"
            placeholder=" 是/否"
            alignSelf={'center'}
            mx="6"
            mt="0"
            height={'10'}
            borderColor={'transparent'}
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="是" value="yes" />
            <Select.Item label="否" value="no" />
          </Select>
        </HStack>
        <Stack
          mb="2.5"
          mt="1.5"
          direction={{
            base: 'column',
            md: 'row',
          }}
          space={2}
          mx={{
            base: 'auto',
            md: '0',
          }}>
          <Button
            size="sm"
            variant="outline"
            colorScheme="danger"
            width={0.9 * w}>
            + 增添商品
          </Button>
        </Stack>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  dividerH: {
    bg: 'darkText',
    thickness: '1.5',
    alignSelf: 'center',
    mt: '3',
    mb: '0',
    width: 0.9 * w,
    opacity: 0.1,
    orientation: 'horizontal',
  },
});

export default GroupProductDetails;
