import {View, Text} from 'react-native';
import React from 'react';
import {
  Box,
  VStack,
} from 'native-base';
import ProfilePic from '../components/ProfilePic';
import ProfileFuncRow1 from '../components/ProfileFuncRow1';
import ProfileFuncRow2 from '../components/ProfileFuncRow2';
import ProfileFuncList from '../components/ProfileFuncList';

const MyProfileScreen = () => {
  return (
    <View>
      <ProfilePic />
      <VStack marginTop={180}>
        <ProfileFuncRow1 />
        <ProfileFuncRow2 />
        {/* //trick */}
        <Box height={1000} bg="#fff">
          <ProfileFuncList />
        </Box>
      </VStack>
    </View>
  );
};

export default MyProfileScreen;
