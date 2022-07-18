import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BrowseCard from '../components/BrowseCard';
import {
  ScrollView,
  Divider,
  Box,
  Text,
  Flex,
  FlatList,
  Center,
  useToast,
} from 'native-base';
import {Dimensions} from 'react-native';
import Footer from '../components/Footer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Searchbar from '../components/Searchbar';
import BestSellerCarousel from '../components/BestSellerCarousel';
import HomeCard from '../components/HomeCard';
// import {useState} from '@types/react';
import {storage} from '../utils/storage';
import {getGroupByTag, getAllGroup} from '../service/groupService';

// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const RenderScreen = props => {
  const [groups, setGroups] = useState([]);
  const [Id, setId] = useState(0);
  console.log('RenderScreen props:', props);
  const toast = useToast();

  const groupCallback = data => {
    if (data.status === 0) {
      setGroups(data.data);
    } else {
      toast.show({
        description: data.message,
        variant: 'subtle',
        placement: 'top',
      });
    }
  };

  // 获取当前用户
  // TODO 本功能不需要登录，因此后续还需要有所修改
  React.useEffect(() => {
    try {
      storage.load('userId', data => {
        setId(data);
      });
    } catch (e) {
      // 0 代表着当前用户为游客
      setId(0);
    }
    if (props.props == 1) {
      const data = {};
      getAllGroup(data, groupCallback);
    } else {
      const data = {tag: props.props};
      getGroupByTag(data, groupCallback);
    }
  }, []);
  return (
    <ScrollView>
    <View>
      <Flex direction="row" margin="1%" flexWrap="wrap" justifyContent="center">
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
      </Flex>
    </View>
    </ScrollView>
  );
};

// TODO SwtichScreen 用于不同类别页面的渲染
function SwitchScreen1({navigation}) {
  return <RenderScreen props="1" />;
}

function SwitchScreen2({navigation}) {
  return <RenderScreen props="水果鲜花" />;
}

function SwitchScreen3({navigation}) {
  return <RenderScreen props="肉禽蛋" />;
}

function SwitchScreen4({navigation}) {
  return <RenderScreen props="水产海鲜" />;
}

function SwitchScreen5({navigation}) {
  return <RenderScreen props="乳品烘培" />;
}

function SwitchScreen6({navigation}) {
  return <RenderScreen props="酒水饮料" />;
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function BrowseScreen() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="今日热团"
      drawerBackgroundColor="#fda4af">
      <Drawer.Screen name="今日热团" component={SwitchScreen1} />
      <Drawer.Screen name="水果鲜花" component={SwitchScreen2} />
      <Drawer.Screen name="肉禽蛋" component={SwitchScreen3} />
      <Drawer.Screen name="水产海鲜" component={SwitchScreen4} />
      <Drawer.Screen name="乳品烘焙" component={SwitchScreen5} />
      <Drawer.Screen name="酒水饮料" component={SwitchScreen6} />
    </Drawer.Navigator>
  );
}
