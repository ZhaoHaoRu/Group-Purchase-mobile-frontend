// import {View, Text, StyleSheet, Dimensions} from 'react-native';
// import React from 'react';
// import GroupDetailsForm from '../components/GroupDetailsForm';
// import {Button, Heading, ScrollView, Stack, VStack} from 'native-base';
// import GroupProductDetails from '../components/GroupProductDetails';
// import GroupSetting from '../components/GroupSetting';
// // import {LinearGradient} from 'react-native-svg';
//
// const w = Dimensions.get('window').width;
// const h = Dimensions.get('window').height;
//
// const CreateGroupScreen = ({navigation}) => {
//   return (
//     <ScrollView bg="muted.150">
//       <View>
//         <VStack>
//           <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
//             创建团购
//           </Heading>
//           <GroupDetailsForm />
//           <GroupProductDetails />
//           <GroupSetting />
//           <Stack
//             mb="2.5"
//             mt="1.5"
//             direction={{
//               base: 'column',
//               md: 'row',
//             }}
//             space={2}
//             mx={{
//               base: 'auto',
//               md: '0',
//             }}>
//             <Button
//               size="sm"
//               colorScheme="danger"
//               width={0.9 * w}
//               onPress={() => {
//                 // navigation.dispatch(StackActions.popToTop());
//                 navigation.replace('QrCode');
//               }}>
//               发布团购
//             </Button>
//           </Stack>
//         </VStack>
//       </View>
//     </ScrollView>
//   );
// };
//
// const styles = StyleSheet.create({
//   title: {
//     marginTop: 20,
//     // marginBottom: 20,
//   },
// });
//
// export default CreateGroupScreen;
//

import {View, Dimensions, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  ScrollView,
  Spacer,
  Stack,
  VStack,
  useToast,
  Image,
  Text,
  Select,
  CheckIcon,
  Checkbox,
  IconButton,
  Icon,
} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import {register} from '../service/userService';
import {createGroup} from '../service/groupService';
import {storage} from '../utils/storage';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CreateGroupScreen = ({navigation}) => {
  const [list, setList] = React.useState([]);
  const [goodsInfo, setGoodsInfo] = React.useState('');
  const [goodsName, setGoodsName] = React.useState('');
  const [inventory, setInventory] = React.useState(0);
  const [picture, setPicture] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [delivery, setDelivery] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [groupInfo, setGroupInfo] = React.useState('');
  const [groupTitle, setGroupTitle] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const toast = useToast();
  const [state, setState] = React.useState('');
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

  const addItem = (Info, Name, invent, pict, pri) => {
    if (Info === '' || Name === '') {
      toast.show({
        title: 'Please Enter Text',
        status: 'warning',
      });
      return;
    }
    /*  setList({...formData, name: value})}*/
    setList(prelist => {
      return [
        ...prelist,
        {
          goodsName: Name,
          goodsInfo: Info,
          inventory: invent,
          picture: pict,
          price: pri,
        },
      ];
    });
  };
  const callback = data => {
    console.log('create group callback:', data);
    setData(data.data);
    const props = data;
    navigation.replace('QrCode', {
      props: data.data
    });
  };

  const handleDelete = index => {
    setList(prevList => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleCreate = (form, lst, durat, star, deli, sta) => {
    let stat = 0;
    storage.load('userId', userId => {
      if (sta === 'yes') {
        stat = 2;
      } else {
        stat = 1;
      }
      setData(() => {
        return {
          groupInfo: form.groupInfo,
          groupTitle: form.groupTitle,
          picture: form.picture,
          goods: lst,
          duration: durat,
          startTime: star,
          delivery: deli,
          userId: userId,
          state: stat,
        };
      });
      const D = {
        groupInfo: form.groupInfo,
        groupTitle: form.groupTitle,
        picture: form.picture,
        goods: lst,
        duration: '1',
        startTime: '2022-07-07 20:00:00',
        delivery: deli,
        userId: userId,
        state: stat,
        category: '肉禽蛋',
      };
      console.log('create Group data:', D); // data可以直接发送给后端*/
      createGroup(D, callback);
    });
  };

  return (
    <ScrollView bg="muted.150">
      <VStack>
        <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
          创建团购
        </Heading>
        <Box bg={'#fff'} borderRadius={15} height={'auto'} pb="2" m="2">
          <VStack>
            <HStack mt={1} mb={1}>
              <Heading fontSize="14" ml="4" mt="4" opacity={0.6}>
                团购介绍
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
            <FormControl isRequired>
              <Input
                placeholder="团购名称"
                variant="unstyled"
                borderColor={'transparent'}
                onChangeText={value =>
                  setData({...formData, groupTitle: value})
                }
              />
              <FormControl.ErrorMessage
                _text={{
                  fontSize: 'xs',
                }}>
                Error
              </FormControl.ErrorMessage>
            </FormControl>
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
                onChangeText={value => setData({...formData, groupInfo: value})}
              />
            </FormControl>
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
                placeholder="图片链接"
                variant="unstyled"
                borderColor={'transparent'}
                onChangeText={value => setData({...formData, picture: value})}
              />
            </FormControl>
          </VStack>
        </Box>
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
                  onChangeText={value => setGoodsName(value)}
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
                  onChangeText={value => setGoodsInfo(value)}
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
                  onChangeText={value => setPicture(value)}
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
                  onChangeText={value => setPrice(value)}
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
                  onChangeText={value => setInventory(value)}
                />
              </FormControl>
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
                width={0.9 * w}
                onPress={() => {
                  addItem(goodsInfo, goodsName, inventory, picture, price);
                  setGoodsInfo('');
                  setGoodsName('');
                  setInventory('');
                  setPrice('');
                  setPicture('');
                }}>
                + 增添此商品
              </Button>
            </Stack>
          </VStack>

          <VStack space={2}>
            {list.map((item, itemI) => (
              <HStack
                w="100%"
                justifyContent="space-between"
                alignItems="center"
                key={item.goodsName + itemI.toString()}>
                <Text width="100%" flexShrink={1} textAlign="left" mx="2">
                  {item.goodsName}
                </Text>
                <IconButton
                  size="sm"
                  colorScheme="trueGray"
                  icon={
                    <Icon
                      as={Entypo}
                      name="minus"
                      size="xs"
                      color="trueGray.400"
                    />
                  }
                  onPress={() => handleDelete(itemI)}
                />
              </HStack>
            ))}
          </VStack>
        </Box>

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
                  selectedValue={delivery}
                  minWidth="100%"
                  mx="2.5"
                  accessibilityLabel="请选择物流方式"
                  placeholder="请选择物流方式"
                  alignSelf={'center'}
                  height={'10'}
                  borderColor={'transparent'}
                  onValueChange={itemValue => setDelivery(itemValue)}>
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
                selectedValue={startTime}
                minWidth="95%"
                mx="0.5"
                accessibilityLabel="请选择团购开始时间"
                placeholder="请选择团购开始时间"
                alignSelf={'center'}
                height={'10'}
                borderColor={'transparent'}
                onValueChange={itemValue => setStartTime(itemValue)}>
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
                selectedValue={duration}
                minWidth="95%"
                mx="0.5"
                accessibilityLabel="请选择团购时长"
                placeholder="请选择团购时长"
                alignSelf={'center'}
                height={'10'}
                borderColor={'transparent'}
                onValueChange={itemValue => setDuration(itemValue)}>
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
                selectedValue={state}
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
                onValueChange={itemValue => setState(itemValue)}>
                <Select.Item label="是" value="yes" />
                <Select.Item label="否" value="no" />
              </Select>
            </HStack>
          </VStack>
        </Box>
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
              handleCreate(
                formData,
                list,
                duration,
                startTime,
                delivery,
                state,
              );
              /*navigation.replace('QrCode');*/
            }}>
            发布团购
          </Button>
        </Stack>
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    // marginBottom: 20,
  },
});
StyleSheet.create({
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

export default CreateGroupScreen;
