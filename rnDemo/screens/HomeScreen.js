import React, {Component, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  Center,
  ScrollView,
  Flex,
  FlatList,
  HStack,
  VStack,
  Box,
  Divider,
  Input,
  Icon,
  Text,
  Select,
  CheckIcon,
} from 'native-base';
import BestSellerCarousel from '../components/BestSellerCarousel';
import HomeCard from '../components/HomeCard';
import {storage} from '../utils/storage';
import {sortByKeyReverse, sortByKey} from '../utils/sort';
import {getCollectedGroups} from '../service/groupService';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Link} from '@react-navigation/native';

// 忽略版本报错信息
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  // TODO 修改接口后内容也也要有所修改
  const [groups, setGroups] = useState([]);
  const [Id, setId] = useState(0);
  const [groupAfterFiltrated, setGroupAfterFiltrated] = useState([]);
  let [service, setService] = React.useState('');
  const [searchInput, setSearchInput] = useState('');
  const callback = data => {
    if (data.status === 0) {
      setGroups(data.data);
    }
  };

  // 获取当前用户
  React.useEffect(() => {
    storage.load('userId', data => {
      setId(data);
      // console.log('userId:', data);
      const request = {userId: data};
      getCollectedGroups(request, callback);
    });
  }, []);

  // 对于团购的内容进行搜索过滤,基于团长或者是团购名称
  const searchItems = searchValue => {
    // console.log('searchValue:', searchValue);
    setSearchInput(searchValue);
    // console.log('searchInput:', searchInput);
    if (searchValue !== '') {
      let filteredData = [];
      groups.forEach(group => {
        // console.log(
        //   'debug: ',
        //   group.groupTitle.indexOf(searchInput),
        //   group.groupTitle,
        // );
        if (
          group.groupTitle.indexOf(searchValue) === -1 &&
          group.user.userName.indexOf(searchValue) === -1
        ) {
          // console.log('group.groupTitle:', group.groupTitle);
          return;
        }
        filteredData.push(group);
      });
      setGroupAfterFiltrated(filteredData);
    } else {
      // console.log('get here!');
      setGroupAfterFiltrated(groups);
    }
  };

  // 对于团购的内容进行排序
  const sortGroup = data => {
    console.log('get here!');
    setService(data);
    if (data === 'timeOrder') {
      setGroups(sortByKey(groups, 'startTime'));
      setGroupAfterFiltrated(sortByKey(groupAfterFiltrated, 'startTime'));
    } else if (data === 'timeReverseOrder') {
      setGroups(sortByKeyReverse(groups, 'startTime'));
      setGroupAfterFiltrated(
        sortByKeyReverse(groupAfterFiltrated, 'startTime'),
      );
    } else if (data === 'groupName') {
      setGroups(sortByKeyReverse(groups, 'groupTitle'));
      setGroupAfterFiltrated(
        sortByKeyReverse(groupAfterFiltrated, 'groupTitle'),
      );
    }
  };

  if (groups != []) {
    // console.log('after search array:', groupAfterFiltrated.length);
    return (
      <>
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
                  onChangeText={text => {
                    setSearchInput(text);
                    searchItems(text);
                  }}
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
                <Link to={{screen: 'QrCodeScanner', initial: false}}>
                  <Text size={'md'} color={'gray.700'}>
                    扫码
                  </Text>
                </Link>
              </Box>
            </VStack>
          </HStack>
        </Center>
        <Flex
          direction="column"
          // mb="2.5" mt="1.5"
        >
          <Center width={w}>
            {searchInput.length >= 1 ? (
              <FlatList
                ListHeaderComponent={
                  <>
                    {/*SearchBar的部分*/}

                    <Center
                      width={w}
                      height={0.35 * h}
                      _text={{
                        color: 'coolGray.800',
                      }}
                      mt={0.05 * h}>
                      <BestSellerCarousel />
                      {/*根据时间顺序和逆序排序*/}
                      <Box ml={0.6 * w} h={'auto'} w={0.35 * w} mt={-0.04 * h}>
                        <Select
                            selectedValue={service}
                            width={0.32 * w}
                            fontSize={'2xs'}
                            height={0.04 * h}
                            accessibilityLabel="默认"
                            placeholder="默认"
                            _selectedItem={{
                              bg: 'danger.200',
                              endIcon: <CheckIcon size="1" />,
                            }}
                            onValueChange={itemValue => sortGroup(itemValue)}>
                          <Select.Item label="按时间升序" value="timeOrder" />
                          <Select.Item
                              label="按时间降序"
                              value="timeReverseOrder"
                          />
                          <Select.Item label="按名称升序" value="groupName" />
                        </Select>
                      </Box>
                    </Center>
                  </>
                }
                ListFooterComponent={<Box h={0.15 * h} />}
                // data={groups}
                data={groupAfterFiltrated}
                renderItem={({item}) => <HomeCard props={item} userId={Id} />}
                keyExtractor={item => item.groupId}
              />
            ) : (
              <FlatList
                ListHeaderComponent={
                  <>
                    <Center
                      width={w}
                      height={0.4 * h}
                      _text={{
                        color: 'coolGray.800',
                      }}
                      mt={0.05 * h}>
                      <BestSellerCarousel />
                      <Box ml={0.6 * w} h={'auto'} w={0.35 * w} mt={-0.04 * h}>
                        <Select
                          selectedValue={service}
                          width={0.32 * w}
                          fontSize={'2xs'}
                          height={0.04 * h}
                          accessibilityLabel="默认"
                          placeholder="默认"
                          _selectedItem={{
                            bg: 'danger.200',
                            endIcon: <CheckIcon size="1" />,
                          }}
                          onValueChange={itemValue => sortGroup(itemValue)}>
                          <Select.Item label="按时间升序" value="timeOrder" />
                          <Select.Item
                            label="按时间降序"
                            value="timeReverseOrder"
                          />
                          <Select.Item label="按名称升序" value="groupName" />
                        </Select>
                      </Box>
                    </Center>
                  </>
                }
                ListFooterComponent={<Box h={0.15 * h} />}
                data={groups}
                // data={groupAfterFiltrated}
                renderItem={({item}) => <HomeCard props={item} userId={Id} />}
                keyExtractor={item => item.groupId}
              />
            )}
          </Center>
        </Flex>
      </>
    );
  }
};

export default HomeScreenWrapper;

const StackNav = createNativeStackNavigator();
const HomeWrapper = createNativeStackNavigator();

export function HomeScreenWrapper() {
  let navigationContainer = (
    <HomeWrapper.Navigator screenOptions={{headerShown: false}}>
      <HomeWrapper.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeWrapper.Navigator>
  );
  return navigationContainer;
}
