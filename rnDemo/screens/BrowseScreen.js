import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import BrowseCard from '../components/BrowseCard';
import {ScrollView, Divider, Box, Text, Flex} from 'native-base';
import {Dimensions} from 'react-native';
import Footer from '../components/Footer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const RenderScreen = props => {
  return (
    <View>
      <ScrollView
        width="100%"
        height={0.85 * h}
        mb={0.08 * h}
        _contentContainerStyle={{
          // px: "20px",
          mt: '1%',
          mb: '50px',
          mr: '0',
          ml: '0',
        }}>
        <Flex
          direction="row"
          margin="1%"
          flexWrap="wrap"
          justifyContent="space-around">
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
          <BrowseCard />
        </Flex>
        <Divider />
        <Box textAlign="center" height={0.1 * h}>
          <Text color="gray.300" size="xl" ml="30%">
            没有更多啦！w(ﾟДﾟ)w
          </Text>
        </Box>
      </ScrollView>
      {/*<Footer />*/}
    </View>
  );
};

// TODO SwtichScreen 用于不同类别页面的渲染
function SwitchScreen1({navigation}) {
  return <RenderScreen props="1" />;
}

function SwitchScreen2({navigation}) {
  return <RenderScreen props="2" />;
}

function SwitchScreen3({navigation}) {
  return <RenderScreen props="3" />;
}

function SwitchScreen4({navigation}) {
  return <RenderScreen props="4" />;
}

function SwitchScreen5({navigation}) {
  return <RenderScreen props="5" />;
}

function SwitchScreen6({navigation}) {
  return <RenderScreen props="6" />;
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
