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
  Select,
  CheckIcon,
} from 'native-base';
import {TimePicker} from 'react-native-simple-time-picker';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const GroupSetting = () => {
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
            团购设置
          </Heading>
          <Spacer />
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
            物流方式
          </FormControl.Label>
          <HStack>
            <Select
              selectedValue={service}
              minWidth="100%"
              mx="2.5"
              accessibilityLabel="请选择物流方式"
              placeholder="请选择物流方式"
              alignSelf={'center'}
              height={'10'}
              borderColor={'transparent'}
              onValueChange={itemValue => setService(itemValue)}>
              <Select.Item label="快递" value="快递" />
            </Select>
          </HStack>
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
            开始时间
          </FormControl.Label>
          <Select
            selectedValue={service}
            minWidth="95%"
            mx="0.5"
            accessibilityLabel="请选择团购开始时间"
            placeholder="请选择团购开始时间"
            alignSelf={'center'}
            height={'10'}
            borderColor={'transparent'}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="8am" value="8am" />
            <Select.Item label="10am" value="10am" />
            <Select.Item label="12pm" value="12pm" />
            <Select.Item label="2pm" value="2pm" />
            <Select.Item label="4pm" value="4pm" />
            <Select.Item label="6pm" value="6pm" />
            <Select.Item label="8pm" value="8pm" />
            <Select.Item label="10pm" value="10pm" />
            <Select.Item label="12am" value="12am" />
          </Select>
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
            团购时长
          </FormControl.Label>
          <Select
            selectedValue={service}
            minWidth="95%"
            mx="0.5"
            accessibilityLabel="请选择团购时长"
            placeholder="请选择团购时长"
            alignSelf={'center'}
            height={'10'}
            borderColor={'transparent'}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="2h" value="2h" />
            <Select.Item label="4h" value="4h" />
            <Select.Item label="6h" value="6h" />
            <Select.Item label="8h" value="8h" />
            <Select.Item label="10h" value="10h" />
            <Select.Item label="12h" value="12h" />
            <Select.Item label="24h" value="24h" />
            <Select.Item label="48h" value="48h" />
            <Select.Item label="72h" value="72h" />
          </Select>
        </HStack>
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

export default GroupSetting;
