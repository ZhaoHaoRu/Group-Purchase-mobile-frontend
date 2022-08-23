import React, {Component, useState} from 'react';
import {ActivityIndicator, Dimensions, RefreshControl} from 'react-native';
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
import {sortByKeyReverse, sortByKey, sortByStatus} from '../utils/sort';
import {getCollectedGroups, getGroupById} from '../service/groupService';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogBox} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Link} from '@react-navigation/native';
import {judgeTime} from '../utils/judgeTime';

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
  const [ori, setOri] = useState([]);
  const [Id, setId] = useState(0);
  const [groupAfterFiltrated, setGroupAfterFiltrated] = useState([]);
  let [service, setService] = React.useState('');
  let [defValue, setDefValue] = React.useState('allCollectedGroups');
  const [searchInput, setSearchInput] = useState('');
  // const [checkState, setCheckState] = useState(1); // 0 : don't show, 1 : show

  const [grpId, setGrpId] = useState(0);
  const [status, setStatus] = useState(1);
  const [grpSelected, setGrpSelected] = useState([]);
  // const [triggered, setTrigerred] = useState(0);

  const [refreshing, setRefreshing] = useState(true);

  const getColGroups = data => {
    storage.load('userId', data => {
      setId(data);
      // console.log('userId:', data);
      const request = {userId: data};
      getCollectedGroups(request, callback);
    });
  };

  const callback = data => {
    setRefreshing(false);
    // console.log('initial group: ', data);
    if (data.status === 0) {
      setGroups(data.data);
      console.log('initial group: ', groups);
      // setOri(data.data);
    }
  };

  const refreshGroups = data => {
    setGroups([]);

    console.log('refresh groups - groups-', groups);
    ori.forEach(ori => {});
  };

  const callback2 = data => {
    const num = judgeTime(data);
    setStatus(num);
    // setStatus(judgeTime(data));
    console.log('available group -groupId-', data.groupId);
    console.log('available group -status-', num);
    // filteredData.push(data);

    // console.log('callback2 data: ', data.status);
    // if (data.status === 1) {
    //   console.log('groupId:', grpId);
    //   setStatus(judgeTime(data.data));
    //   console.log('status: ', status);
    // }
  };

  const gp = () => {
    getColGroups();
    sortGroup(defValue);
  };

  // 获取当前用户
  React.useEffect(() => {
    // getGroupById(parseInt(grpId), callback2);

    // setTimeout(() => {
    //   getColGroups();
    // }, 1000);

    // if (triggered === 1) {

    getColGroups();
    // sortGroup(defValue);
    // gp();
    // setTrigerred(0);
    // }
    // TODO: 不理解这里为啥要删
    storage.load('userId', data => {
      setId(data);
      console.log('userId here:', data);
      const request = {userId: data};
      getCollectedGroups(request, callback);
    });
    // setGroupAfterFiltrated(groupAfterFiltrated);
  }, []);

  // const checkStatus = () => {
  //   // if (checkState == 1) {
  //   let filteredData = [];
  //   groups.forEach(group => {
  //     if (checkState === 0) {
  //       // console.log('group.groupTitle:', group.groupTitle);
  //       return;
  //     }
  //     filteredData.push(group);
  //   });
  //   setGroupAfterFiltrated(filteredData);
  // };

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
    // refreshGroups();
    getColGroups();
    console.log('get here!');
    console.log('data: ', data);
    console.log('groups: ', groups);
    console.log('ori: ', ori);
    setService(data);

    if (data === 'timeOrder') {
      setGroups(sortByKey(groups, 'startTime'));
      setGrpSelected(sortByKey(grpSelected, 'startTime'));
      setGroupAfterFiltrated(sortByKey(groupAfterFiltrated, 'startTime'));
    } else if (data === '') {
      setGrpSelected(groups);
    } else if (data === 'allCollectedGroups') {
      // setGroups(sortByKeyReverse(groups, 'startTime'));
      setGrpSelected(groups);
      console.log('check!!', groups);
      // setGroupAfterFiltrated(
      //   sortByKeyReverse(groupAfterFiltrated, 'startTime'),
      // );
    } else if (data === 'timeReverseOrder') {
      setGroups(sortByKeyReverse(groups, 'startTime'));
      setGrpSelected(sortByKeyReverse(grpSelected, 'startTime'));
      console.log('check!!', groups);
      setGroupAfterFiltrated(
        sortByKeyReverse(groupAfterFiltrated, 'startTime'),
      );
    } else if (data === 'groupName') {
      setGroups(sortByKeyReverse(groups, 'groupTitle'));
      setGrpSelected(sortByKeyReverse(grpSelected, 'groupTitle'));
      setGroupAfterFiltrated(
        sortByKeyReverse(groupAfterFiltrated, 'groupTitle'),
      );
    } else if (data === 'fastGroups') {
      let filteredData = [];
      groups.forEach(group => {
        if (
          group.state === 2 // 秒杀
        ) {
          console.log('fastGroups -status-', status);
          filteredData.push(group);
        }
      });
      console.log('filtered data --- ', filteredData);
      setGroupAfterFiltrated(filteredData);
      setGrpSelected(filteredData);
      setGroups(filteredData);

      // setGroups(sortByKeyReverse(groups, 'groupTitle'));
      // setGroupAfterFiltrated(
      //   sortByKeyReverse(groupAfterFiltrated, 'groupTitle'),
      // );
    } else if (data === 'availableGroups') {
      console.log('available group');

      let filteredData = [];
      groups.forEach(group => {
        const num = judgeTime(group);

        if (
          group.state === 1 &&
          num === 1 // 普通团购(未结束)
        ) {
          console.log('available group -groupId-', group.groupId);
          console.log('available group -num-', num);
          filteredData.push(group);
        }
      });
      setGroups(filteredData);
      setGrpSelected(filteredData);
    } else if (data === 'futureGroups') {
      console.log('future group');

      let filteredData = [];
      groups.forEach(group => {
        const num = judgeTime(group);

        if (
          group.state === 1 &&
          num === 0 // 普通团购(未开始)
        ) {
          console.log('available group -groupId-', group.groupId);
          console.log('available group -num-', num);
          filteredData.push(group);
        }
      });
      setGroups(filteredData);
      setGrpSelected(filteredData);
      // setGroups(sortByKeyReverse(groups, 'groupTitle'));
      // setGroupAfterFiltrated(
      //   sortByKeyReverse(groupAfterFiltrated, 'groupTitle'),
      // );
    } else if (data === 'endedGroups') {
      console.log('ended group');

      let filteredData = [];
      groups.forEach(group => {
        const num = judgeTime(group);

        if (
          group.state === 1 &&
          num === 2 // 普通团购(已结束)
        ) {
          console.log('available group -groupId-', group.groupId);
          console.log('available group -num-', num);
          filteredData.push(group);
        }
      });
      setGroups(filteredData);
      setGrpSelected(filteredData);
      // setGroups(sortByKeyReverse(groups, 'groupTitle'));
      // setGroupAfterFiltrated(
      //   sortByKeyReverse(groupAfterFiltrated, 'groupTitle'),
      // );
    }
  };


  if (groups != []) {
    // console.log('after search array:', groupAfterFiltrated.length);
    return (
      <>
        <Center>
          {refreshing ? <ActivityIndicator /> : null}

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

          {/* <RefreshControl refreshing={refreshing}  /> */}
          {/* </ScrollView> */}
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
                      <BestSellerCarousel userId={Id} />
                      {/*根据时间顺序和逆序排序*/}
                      <Box ml={0.6 * w} h={'auto'} w={0.35 * w} mt={-0.04 * h}>
                        <Select
                          selectedValue={service}
                          defaultValue={defValue}
                          width={0.32 * w}
                          fontSize={'2xs'}
                          height={0.04 * h}
                          accessibilityLabel="默认"
                          placeholder="默认"
                          _selectedItem={{
                            bg: 'danger.200',
                            endIcon: <CheckIcon size="1" />,
                          }}
                          onValueChange={itemValue => {
                            // sortGroup("allGroupsCollected");
                            console.log('itemvalue1: ', itemValue);
                            console.log('defvalue: ', defValue);
                            sortGroup(itemValue);
                            // setTrigerred(1);
                          }}>
                          <Select.Item
                            label="收藏团购"
                            value="allCollectedGroups"
                          />
                          <Select.Item label="秒杀团购" value="fastGroups" />
                          <Select.Item
                            label="有效的团购"
                            value="availableGroups"
                          />
                          <Select.Item
                            label="未开始的团购"
                            value="futureGroups"
                          />
                          <Select.Item
                            label="已结束的团购"
                            value="endedGroups"
                          />
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
                          defaultValue={defValue}
                          width={0.32 * w}
                          fontSize={'2xs'}
                          height={0.04 * h}
                          accessibilityLabel="默认"
                          placeholder="默认"
                          _selectedItem={{
                            bg: 'danger.200',
                            endIcon: <CheckIcon size="1" />,
                          }}
                          onValueChange={itemValue => {
                            // console.log('itemvalue2: ', itemValue);
                            // console.log('defvalue:!!!!!!!!!!!!!!!', defValue);
                            sortGroup(itemValue);
                          }}>
                          <Select.Item
                            label="收藏团购"
                            value="allCollectedGroups"
                          />
                          <Select.Item label="秒杀团购" value="fastGroups" />
                          <Select.Item
                            label="有效的团购"
                            value="availableGroups"
                          />
                          <Select.Item
                            label="未开始的团购"
                            value="futureGroups"
                          />
                          <Select.Item
                            label="已结束的团购"
                            value="endedGroups"
                          />
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
                // data={groupAfterFiltrated}
                data={grpSelected.length === 0 ? groups : grpSelected}
                renderItem={({item}) => <HomeCard props={item} userId={Id} />}
                keyExtractor={item => item.groupId}
              />
            )}
          </Center>
        </Flex>
      </>
    );
  } else {
    console.log("groupsssss: ", groups);
    getColGroups();
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
