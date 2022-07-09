import React, {useState} from 'react';
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Image,
  Input,
  useToast,
  AlertDialog,
  Button,
} from 'native-base';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import {getCreatedGroup, getUserById} from '../service/userService';
import {deleteGroup} from '../service/groupService';
import {storage} from '../utils/storage';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const AdminGroupList = ({route, navigation}) => {
  const userId = route.params.userId;
  const [groups, setGroups] = useState([]);
  const [groupId, setGroupId] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  const toast = useToast();

  const callback = data => {
    // console.log('user data:', data);
    if (data.status === 0) {
      setGroups(data.data);
      // console.log('admin groups :', groups);
      // console.log('item goods:', groups[0].goods[0]);
      Screen.location.reload();
    } else {
      toast.show({
        description: '出错了，请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  // 获取当前用户
  React.useEffect(() => {
    // console.log('userId::::::', userId);
    const request = {userId: parseInt(userId)};
    getCreatedGroup(request, callback);
  }, []);

  // 删除团购的按键响应函数
  const onPressDelete = data => {
    setGroupId(data.groupId);
    setIsOpen(!isOpen);
  };

  // 删除团购
  const onDelete = () => {
    const callbackAfter = data => {
      console.log('delete callback:', data);
      if (data.data === 0) {
        const request = {userId: parseInt(userId)};
        getCreatedGroup(request, callback);
      }
    };
    if (groupId != 0) {
      const data = {groupId: groupId};
      deleteGroup(data, callbackAfter);
      setGroupId(0);
    } else {
      toast.show({
        description: '出错了，请重试！',
        variant: 'subtle',
        placement: 'top',
      });
    }
    onClose();
  };

  return (
    <NativeBaseProvider>
      <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
        团购管理
      </Heading>
      <Input
        placeholder="搜索团购"
        width="90%"
        variant="rounded"
        //   borderColor={'danger.600'}
        borderWidth="2"
        mb={3}
        py="3"
        px="1"
        fontSize="14"
        alignSelf={'center'}
        style={styles.input}
        InputLeftElement={
          <Image
            ml="3"
            opacity={0.3}
            source={require('../image/search.png')}
            size="18px"
            alt="arrowR"
          />
        }
      />
      <Center flex={1} px="1">
        <Box>
          <FlatList
            data={groups}
            renderItem={({item}) => (
              <Box
                bg={'white'}
                width={0.9 * w}
                borderRadius="15"
                height="auto"
                mt="0"
                mb="2"
                // ml="2"
                // mr="2"
                pb="2">
                <HStack>
                  <Heading
                    fontSize="15"
                    ml="4"
                    mt="4"
                    mb="3"
                    color={'muted.600'}>
                    团购: {item.groupTitle}
                  </Heading>
                  <Spacer />
                  <Pressable
                    size="auto"
                    // m="3"
                    alignSelf={'center'}
                    bg="transparent"
                    onPress={() => {
                      navigation.navigate('EditGroup', {
                        userId: userId,
                        group: item,
                      });
                    }}>
                    <Image
                      // mt="15%"
                      mr="4"
                      // mt="4"
                      alignSelf={'center'}
                      opacity={0.3}
                      source={require('../image/edit.png')}
                      size="17px"
                      alt="map"
                    />
                  </Pressable>
                  <Pressable onPress={() => onPressDelete(item)}>
                    <Image
                      // mt="15%"
                      mr="4"
                      mt="4"
                      alignSelf={'center'}
                      opacity={0.3}
                      source={require('../image/trash.png')}
                      size="20px"
                      alt="map"
                    />
                  </Pressable>
                  <AlertDialog
                    leastDestructiveRef={cancelRef}
                    isOpen={isOpen}
                    onClose={onClose}>
                    <AlertDialog.Content>
                      <AlertDialog.CloseButton />
                      {/*<AlertDialog.Header>Delete Customer</AlertDialog.Header>*/}
                      <AlertDialog.Body>您确定要删除团购吗？</AlertDialog.Body>
                      <AlertDialog.Footer>
                        <Button.Group space={2}>
                          <Button
                            variant="unstyled"
                            colorScheme="coolGray"
                            onPress={onClose}
                            size="xs"
                            ref={cancelRef}>
                            Cancel
                          </Button>
                          <Button
                            colorScheme="danger"
                            size="xs"
                            onPress={() => onDelete()}>
                            Delete
                          </Button>
                        </Button.Group>
                      </AlertDialog.Footer>
                    </AlertDialog.Content>
                  </AlertDialog>
                </HStack>
                <FlatList
                  data={item.goods}
                  renderItem={({item}) => (
                    <Box
                      borderTopWidth="1"
                      _dark={{
                        borderColor: 'gray.600',
                      }}
                      borderColor="coolGray.200"
                      pl="4"
                      pr="5"
                      py="2">
                      <HStack space={3} justifyContent="flex-start">
                        <Image
                          size="75px"
                          borderRadius={5}
                          alignSelf="center"
                          source={{
                            uri: item.picture,
                          }}
                          alt={'image'}
                        />
                        <VStack w={0.55 * w}>
                          <Text
                            _dark={{
                              color: 'warmGray.50',
                            }}
                            color="coolGray.800"
                            // flex={1}
                            width="90%"
                            bold>
                            {item.goodsName}
                          </Text>
                          <Text
                            fontSize="xs"
                            color="coolGray.600"
                            paddingBottom={3}
                            // width={'80%'}
                            numberOfLines={1}
                            _dark={{
                              color: 'warmGray.200',
                            }}>
                            {item.goodsInfo}
                          </Text>
                          <Text
                            color="danger.500"
                            _dark={{
                              color: 'danger.500',
                            }}>
                            ￥{item.price.toFixed(2)}
                          </Text>
                        </VStack>
                      </HStack>
                    </Box>
                  )}
                  keyExtractor={item => item.goodsId}
                />
              </Box>
            )}
            keyExtractor={item => item.groupId}
          />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  oneRow: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  input: {
    height: 45,
    padding: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default AdminGroupList;
