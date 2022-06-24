import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import GroupDetailsForm from '../components/GroupDetailsForm';
import {Button, Heading, ScrollView, Stack, VStack} from 'native-base';
import GroupProductDetails from '../components/GroupProductDetails';
import GroupSetting from '../components/GroupSetting';
// import {LinearGradient} from 'react-native-svg';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CreateGroupScreen = () => {
  return (
    <ScrollView bg="muted.150">
      <View>
        <VStack>
          <Heading fontSize="md" alignSelf={'center'} style={styles.title}>
            创建团购
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
            <Button size="sm" colorScheme="danger" width={0.9 * w}>
              发布团购
            </Button>
          </Stack>
        </VStack>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    // marginBottom: 20,
  },
});

export default CreateGroupScreen;
