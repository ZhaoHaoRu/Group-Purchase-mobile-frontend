import {
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
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
  Pressable,
  Modal,
  Center,
} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import {register} from '../service/userService';
import {createGroup} from '../service/groupService';
import {storage} from '../utils/storage';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-date-picker';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CreateGroupScreen = ({navigation}) => {
  const [list, setList] = React.useState([]);
  const [goodsInfo, setGoodsInfo] = React.useState('');
  const [goodsName, setGoodsName] = React.useState('');
  const [inventory, setInventory] = React.useState('');
  // product picture
  const [picture, setPicture] = React.useState(
    'http://assets.stickpng.com/thumbs/584abf102912007028bd9332.png',
  );
  const [price, setPrice] = React.useState('');
  const [delivery, setDelivery] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [groupInfo, setGroupInfo] = React.useState('');
  const [groupTitle, setGroupTitle] = React.useState('');
  const [groupType, setGroupType] = React.useState(''); // 团购类型（水果鲜花、肉禽蛋等）
  const [startTime, setStartTime] = React.useState('');
  const toast = useToast();
  const [state, setState] = React.useState('');
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  // groupImage
  const [image, setImage] = React.useState(
    'http://assets.stickpng.com/thumbs/584abf102912007028bd9332.png',
  );
  // easier to determine group or product's picture
  const [option, setOption] = React.useState('');
  // const [image2, setImage2] = React.useState('http://assets.stickpng.com/thumbs/584abf102912007028bd9332.png')
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showDate, setShowDate] = React.useState('请选择团购开始时间');
  var correctDate;
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
      props: data.data,
    });
  };

  const handleDelete = index => {
    setList(prevList => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleCreate = (form, lst, durat, star, deli, sta, grpType) => {
    if (
      lst === '' ||
      duration === '' ||
      star === '' ||
      deli === '' ||
      sta === '' ||
      grpType === ''
    ) {
      toast.show({
        title: 'Please Fill In The Details',
        status: 'warning',
      });
      return;
    }
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
          groupType: grpType,
        };
      });
      const D = {
        groupInfo: form.groupInfo,
        groupTitle: form.groupTitle,
        picture: form.picture,
        goods: lst,
        duration: durat,
        startTime: star,
        delivery: deli,
        userId: userId,
        state: stat,
        category: grpType,
      };
      console.log('create Group data:', D); // data可以直接发送给后端*/
      createGroup(D, callback);
    });
  };

  // const [kdate, setKdate] = useState('');

  // for (let i = 0; i < 9; i++) {
  //     setKdate(() => {
  //       kdate[i] = showDate[i];
  //     });
  // }

  // console.log("kdate ----", kdate);

  //   function getIndexOfJson(json, index) {
  //     /*json = json.substring(1, json.length - 1);*/
  //     var beginindex = 0;
  //     var endindex = findStrIndex(json, "T", index);
  //     json = json.substring(beginindex, endindex);
  //     return json;
  // }

  const takePhotoFromCamera = () => {
    console.log('take photo from camera');
    setModalVisible(!modalVisible);
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      if (option === 'group') {
        // setImage(image.path);
        setData({...formData, picture: `data:${image.mime};base64,${image.data}`});
        setImage(`data:${image.mime};base64,${image.data}`);
      } else if (option === 'product') {
        // setPicture(image.path);
        setPicture(`data:${image.mime};base64,${image.data}`);
      }
      console.log('camera image:', image);
      console.log('image path: ', image.path);
    });
  };

  const choosePhotoFromLibrary = () => {
    console.log('choose photo from library');
    setModalVisible(!modalVisible);
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      if (option === 'group') {
        // setImage(image.path);
        setData({...formData, picture: `data:${image.mime};base64,${image.data}`});
        setImage(`data:${image.mime};base64,${image.data}`);
      } else if (option === 'product') {
        // setPicture(image.path);
        setPicture(`data:${image.mime};base64,${image.data}`);
      }
      console.log('album image:', image);
    });
  };

  const [modalVisible, setModalVisible] = React.useState(false);

  const handleClick = data => {
    console.log('handle click, data ==>', data);
    setModalVisible(!modalVisible);
    setOption(data);
  };

  const handleRefresh = () => {
    setGoodsInfo('');
    setGoodsName('');
    setInventory('');
    setPrice('');
    setPicture(
      'http://assets.stickpng.com/thumbs/584abf102912007028bd9332.png',
    );
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
              {/* <Input
                placeholder="图片链接"
                variant="unstyled"
                borderColor={'transparent'}
                onChangeText={value => setData({...formData, picture: value})}
              /> */}
              {/* <Pressable onPress={takePhotoFromCamera}>
              <Text ml="3" mt="3" mb="2" fontSize={"xs"} opacity="0.45">
              图片链接
              </Text>
              </Pressable> */}
              <HStack>
                {/* <Text ml="3" mt="3" mb="2" fontSize={"xs"} opacity="0.45">
              团购图片
              </Text> */}
                <Pressable
                  onPress={() => {
                    console.log('pressed');
                    {
                      handleClick('group');
                    }
                    // choosePhotoFromLibrary();
                    // setData({...formData, picture: image.path});
                  }}>
                  <ImageBackground
                    source={{
                      uri: image,
                    }}
                    style={{
                      height: 50,
                      width: 50,
                      marginTop: 3,
                      marginLeft: 10,
                    }}
                    imageStyle={{borderRadius: 15}}
                    ml="3"
                    mt="2">
                    {/* <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                </View> */}
                  </ImageBackground>
                </Pressable>
              </HStack>
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
              {/* <Spacer />
              <Image
                // mt="15%"
                mr="4"
                mt="4"
                opacity={0.3}
                source={require('../image/bin.png')}
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
                  onChangeText={value => setGoodsName(value)}>
                  {goodsName}
                </Input>
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
                  onChangeText={value => setGoodsInfo(value)}>
                  {goodsInfo}
                </Input>
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
              <Pressable
                onPress={() => {
                  console.log('pressed');
                  {
                    handleClick('product');
                  }
                }}>
                <ImageBackground
                  source={{
                    uri: picture,
                  }}
                  style={{
                    height: 50,
                    width: 50,
                    marginTop: 3,
                    marginLeft: 30,
                    marginBottom: 3,
                  }}
                  imageStyle={{borderRadius: 15}}
                  ml="3"
                  mt="2">
                  {/* <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                </View> */}
                </ImageBackground>
              </Pressable>
              {/* <FormControl isRequired>
                <Input
                  // position= 'absolute'
                  placeholder="      添加图片"
                  variant="unstyled"
                  borderColor={'transparent'}
                  width="60%"
                  // mx={0.1 * w}
                  onChangeText={value => setPicture(value)}
                />
              </FormControl> */}
              {/* <Spacer />
              <Image
                mt="5%"
                opacity={0.3}
                source={require('../image/arrowR.png')}
                size="18px"
                alt="arrowR"
              /> */}
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
                  onChangeText={value => setPrice(value)}>
                  {price}
                </Input>
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
                  onChangeText={value => setInventory(value)}>
                  {inventory}
                </Input>
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
                  handleRefresh();
                  // setGoodsInfo('');
                  // setGoodsName('');
                  // setInventory('');
                  // setPrice('');
                  // setPicture('');
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
              {/* <DatePicker date={date} onDateChange={setDate} /> */}
              {/* <Select
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
              </Select> */}
              {/* <DatePicker date={date} onDateChange={setDate} /> */}
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                  console.log('date--', date);
                  setShowDate(JSON.stringify(date));
                  console.log('showdate--', showDate);
                  // console.log("kdate!!!!",getIndexOfJson(date, 0));
                  var kdate = JSON.stringify(date).substring(1, 11);
                  console.log('kdate!!!!', kdate);
                  var ktime = JSON.stringify(date).substring(12, 20);
                  console.log('ktime!!!!', ktime);
                  const combined = kdate + ' ' + ktime;
                  console.log('combined!!!!', combined);
                  correctDate = combined;
                  console.log('correctDate!!!!', correctDate);
                  setStartTime(correctDate);
                  console.log('startTime!!!!', startTime);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
              <Pressable
                py="3"
                opacity={0.45}
                ml="6"
                // alignItems="center"
                onPress={() => {
                  setOpen(true);
                }}>
                <Text fontSize="xs">{showDate}</Text>
              </Pressable>
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
                <Select.Item label="2h" value="2" />
                <Select.Item label="6h" value="6" />
                <Select.Item label="10h" value="10" />
                <Select.Item label="12h" value="12" />
                <Select.Item label="24h" value="24" />
                <Select.Item label="48h" value="48" />
                <Select.Item label="72h" value="72" />
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
                团购类型
              </FormControl.Label>
              <Select
                selectedValue={groupType}
                minWidth="95%"
                mx="0.5"
                accessibilityLabel="请选择团购类型"
                placeholder="请选择团购类型"
                alignSelf={'center'}
                height={'10'}
                borderColor={'transparent'}
                onValueChange={itemValue => setGroupType(itemValue)}>
                <Select.Item label="水果鲜花" value="水果鲜花" />
                <Select.Item label="肉禽蛋" value="肉禽蛋" />
                <Select.Item label="水产海鲜" value="水产海鲜" />
                <Select.Item label="乳品烘培" value="乳品烘培" />
                <Select.Item label="酒水饮料" value="酒水饮料" />
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
            mb={20}
            width={0.9 * w}
            onPress={() => {
              console.log('pressed create group');
              handleCreate(
                formData,
                list,
                duration,
                startTime,
                delivery,
                state,
                groupType,
              );
              /*navigation.replace('QrCode');*/
            }}>
            发布团购
          </Button>
        </Stack>
      </VStack>
      <Box
        width="100%"
        height="10%"
        position="absolute"
        bottom="0"
        alignSelf="center"
        borderColor="gray.100"
        borderTopWidth="0">
        <Center flex={1} />
        <Modal isOpen={modalVisible}>
          <Modal.Content>
            <Modal.CloseButton onPress={handleClick} />
            <Modal.Header>提取照片</Modal.Header>
            <Modal.Body>
              <Text>请选择相机/从相册获取照片</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  size="xs"
                  colorScheme="danger"
                  onPress={takePhotoFromCamera}>
                  相机
                </Button>
                <Button
                  size="xs"
                  colorScheme="danger"
                  onPress={choosePhotoFromLibrary}>
                  相册
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Box>
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
