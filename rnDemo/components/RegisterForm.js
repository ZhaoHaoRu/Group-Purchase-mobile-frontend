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
  useToast,
  Stack,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
import {storage} from '../utils/storage';
import {register} from '../service/userService';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const RegisterForm = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const toast = useToast();

  const callback = data => {
    console.log('register data:', data);
    if (data.status === 4) {
      navigation.replace('Welcome');
      // eslint-disable-next-line no-undef
      toast.show({
        description: data.message,
        variant: 'outline',
        colorScheme: 'danger',
        placement: 'top',
      });
    } else {
      toast.show({
        description: data.message,
        variant: 'outline',
        colorScheme: 'danger',
        placement: 'top',
      });
    }
  };

  const handleRegister = () => {
    console.log('name:', name);
    console.log('confirmPassword', confirmPassword);
    console.log('password:', password);
    if (confirmPassword != password) {
      toast.show({
        description: '两次输入的密码不同！',
        variant: 'outline',
        colorScheme: 'danger',
        placement: 'top',
      });
    } else {
      console.log('login success!');
      const data = {userName: name, password: password, email: email};
      console.log('data:', data); // data可以直接发送给后端
      register(data, callback);
    }
  };

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
            <FormControl.Label>邮箱</FormControl.Label>
            <Input onChangeText={text => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>用户名</FormControl.Label>
            <Input onChangeText={text => setName(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>密码</FormControl.Label>
            <Input type="password" onChangeText={text => setPassword(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>确认密码</FormControl.Label>
            <Input
              type="password"
              onChangeText={text => setConfirmPassword(text)}
            />
          </FormControl>
          <Button
            mt="2"
            backgroundColor="danger.600"
            onPress={() => handleRegister()}>
            注册
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default RegisterForm;
