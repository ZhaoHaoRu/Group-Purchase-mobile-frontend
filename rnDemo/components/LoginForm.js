import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  Stack,
  Icon,
  Pressable,
} from 'native-base';
import {Link} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';

const LoginForm = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    console.log('用户名');
    console.log('name:', name);
    console.log('password:', password);
    console.log('login success!');
    const data = {userName: name, password: password};
    console.log('data:', data); // data可以直接发送给后端
    navigation.replace('TabWrapper');
  };
  return (
    <Center w="100%" margin="auto">
      <Box safeArea p="2" py="8" w="90%">
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
              欢迎回到交我团
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
            <FormControl.Label>用户名称</FormControl.Label>
            <Input onChangeText={text => setName(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>密码</FormControl.Label>
            <Input type="password" onChangeText={text => setPassword(text)} />
            {/*<Link*/}
            {/*  _text={{*/}
            {/*    fontSize: 'xs',*/}
            {/*    fontWeight: '500',*/}
            {/*    color: 'danger.800',*/}
            {/*  }}*/}
            {/*  alignSelf="flex-end"*/}
            {/*  mt="1">*/}
            {/*  忘记密码？*/}
            {/*</Link>*/}
          </FormControl>
          <Button
            mt="2"
            backgroundColor="danger.600"
            onPress={
              () => {
                // navigation.dispatch(StackActions.popToTop());
                handleLogin();
              }
              // navigation.navigate("TabWrapper")}
            }>
            登录
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              我没有账号{' '}
            </Text>
            <Link to={{screen: 'Register', initial: false}}>
              <Text color="danger.800" fontWeight="medium" fontSize="sm">
                注册
              </Text>
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginForm;
