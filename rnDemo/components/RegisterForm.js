import * as React from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  Icon,
  Stack,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const RegisterForm = ({navigation}) => {
  return (
    <Center w="100%" margin="auto">
      <Box safeArea p="2" w="90%" maxW="290" py="10">
        <Stack space={4}>
          <Icon
            as={AntDesign}
            name="smileo"
            size="5xl"
            color="danger.400"
            _dark={{
              color: 'danger.300',
            }}
            margin={'auto'}
          />
          <Stack space={1}>
            <Heading
              size="xl"
              color="danger.400"
              _dark={{
                color: 'warmGray.50',
              }}
              fontWeight="semibold"
              margin={'auto'}>
              欢迎来到交我团
            </Heading>
            <Heading
              mt="1"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="light"
              margin={'auto'}
              size="xs">
              有 温 度 的 社 区 团 购
            </Heading>
          </Stack>
        </Stack>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>用户名</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>邮箱</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>密码</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>确认密码</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button
            mt="2"
            backgroundColor="danger.600"
            onPress={() => navigation.replace('Welcome')}>
            注册
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default RegisterForm;
