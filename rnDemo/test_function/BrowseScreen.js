import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Link, NavigationContainer} from '@react-navigation/native';
// import BrowseCard from '../components/BrowseCard';
import {
  ScrollView,
  Divider,
  Box,
  Text,
  Flex,
  FlatList,
  Center,
  useToast,
  Image,
  NativeBaseProvider,
  AspectRatio,
} from 'native-base';
import {Dimensions} from 'react-native';

// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const BrowseCard = ({props, userId}) => {
  // console.log('browseCard:', props, 'and userId: ', userId);
  let title = props.groupTitle;
  if (props.groupTitle.length > 9) {
    title = props.groupTitle.substring(0, 9) + '...';
  }
  return (
    <Box width={0.47 * w} direction="column" margin={0.01 * w} height={0.4 * w}>
      <AspectRatio w="100%" ratio={{base: 4 / 3, md: 4 / 3}}>
        <Image
          source={{
            uri: props.picture,
          }}
          alt="image"
          borderRadius="lg"
        />
      </AspectRatio>
      {props.state === 2 ? (
        <Link
          to={{
            screen: 'SecKill',
            initial: false,
            params: {props: props, userId: userId, addressId: -1},
          }}>
          <Text mt={0.02 * w} color="#71717a" bold size="xl">
            {title}
          </Text>
        </Link>
      ) : (
        <Link
          to={{
            screen: 'Detail',
            initial: false,
            params: {props: props, userId: userId},
          }}>
          <Text mt={0.02 * w} color="#71717a" bold size="xl">
            {title}
          </Text>
        </Link>
      )}
    </Box>
  );
};

const RenderScreen = ({props, userId}) => {
  const Id = userId;
  const groups = props;
  // const [groups, setGroups] = useState([]);
  // const [Id, setId] = useState(0);
  // console.log('RenderScreen props:', props);
  // const toast = useToast();
  //
  // const groupCallback = data => {
  //   if (data.status === 0) {
  //     setGroups(data.data);
  //   } else {
  //     toast.show({
  //       description: data.message,
  //       variant: 'subtle',
  //       placement: 'top',
  //     });
  //   }
  // };

  // // 获取当前用户
  // // TODO 本功能不需要登录，因此后续还需要有所修改
  // React.useEffect(() => {
  //   try {
  //     storage.load('userId', data => {
  //       setId(data);
  //     });
  //   } catch (e) {
  //     // 0 代表着当前用户为游客
  //     setId(0);
  //   }
  //   if (props.props == 1) {
  //     const data = {};
  //     getAllGroup(data, groupCallback);
  //   } else {
  //     const data = {tag: props.props};
  //     getGroupByTag(data, groupCallback);
  //   }
  // }, []);
  if (groups != []) {
    return (
      <NativeBaseProvider>
        <FlatList
          data={groups}
          numColumns={2}
          renderItem={({item}) => <BrowseCard props={item} userId={Id} />}
          keyExtractor={item => item.groupId}
          ListFooterComponent={
            <>
              <Divider marginTop={0.01 * h} />
              <Box textAlign="center" height={0.1 * h}>
                <Text color="gray.300" size="xl" ml="30%">
                  没有更多啦！w(ﾟДﾟ)w
                </Text>
              </Box>
            </>
          }
        />
      </NativeBaseProvider>
    );
  } else {
    return (
      <Center mt={0.3 * h}>
        <Image source={require('../image/none.png')} h={0.3 * h} w={0.3 * h} />
      </Center>
    );
  }
};

export default RenderScreen;
