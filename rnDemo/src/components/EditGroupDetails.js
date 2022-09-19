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
  Image,
  Select,
  CheckIcon,
  Stack,
  Button,
  ScrollView,
} from 'native-base';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

function GrpDetailsForm() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({...errors, name: '请填写团购名称'});
      return false;
    } else if (formData.name.length < 3) {
      setErrors({...errors, name: '团购名称太短'});
      return false;
    }

    return true;
  };

  return (
    // <VStack width="90%" mx="3" maxW="300px">
    <FormControl isRequired>
      {/* <FormControl.Label _text={{
        bold: true
      }}>Name</FormControl.Label> */}
      <Input
        placeholder="团购名称"
        variant="unstyled"
        borderColor={'transparent'}
        onChangeText={value => setData({...formData, name: value})}
      />
      {/* <FormControl.HelperText
          _text={{
            fontSize: 'xs',
          }}>
          请输入团购名称
        </FormControl.HelperText> */}
      <FormControl.ErrorMessage
        _text={{
          fontSize: 'xs',
        }}>
        Error
      </FormControl.ErrorMessage>
    </FormControl>
    // </VStack>
  );
}

const GroupDetailsForm = () => {
  const [formData, setData] = React.useState({});
  const [text, setText] = useState('');
  return (
    <Box bg={'#fff'} borderRadius={15} height={'auto'} pb="2" m="2">
      <VStack>
        <HStack mt={1} mb={1}>
          <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
            团购介绍
          </Heading>
          <Spacer />
          {/* <Image
                // mt="15%"
                mr="4"
                mt="4"
                opacity={0.3}
                source={require('../image/arrowR.png')}
                size="18px"
                alt="map"
              /> */}
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
        <GrpDetailsForm />
        <Divider
          bg="darkText"
          thickness="1.5"
          alignSelf={'center'}
          width={0.9 * w}
          opacity={0.05}
          orientation="horizontal"
        />
        <FormControl isRequired>
          <Input
            placeholder="描述"
            variant="unstyled"
            borderColor={'transparent'}
            onChangeText={value => setData({...formData, name: value})}
          />
        </FormControl>
        {/* <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            /> */}
      </VStack>
    </Box>
  );
};

const GroupProductDetails = () => {
  const [text, setText] = useState('');
  const [formData, setData] = React.useState({});
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
  title: {
    marginTop: 20,
    // marginBottom: 20,
  },
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

const EditGroupDetails = ({navigation}) => {
  return (
    <ScrollView bg="muted.150">
      <View>
        <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
          修改团信息
        </Heading>
        <GroupDetailsForm />
        <GroupProductDetails />
        <GroupSetting />
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
            colorScheme="danger"
            width={0.9 * w}
            onPress={() => {
              // navigation.dispatch(StackActions.popToTop());
              navigation.replace('QrCode');
            }}>
            修改团购
          </Button>
        </Stack>
      </View>
    </ScrollView>
  );
};

export default EditGroupDetails;
