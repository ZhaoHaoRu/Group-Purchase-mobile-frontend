import React from 'react';
import renderer from 'react-test-renderer';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import LoginForm from '../test_function/LoginForm';
import {render, fireEvent, screen} from '@testing-library/react-native';

const request = {name: 'John', password: '123456'};
const data = {
  status: 1,
  message: '欢迎回来',
  data: {
    userId: 2,
    userName: 'John',
    password: '123456',
    email: 'xxx@xx.com',
    wallet: 680.4,
  },
};

it('renders correctly', () => {
  // const tree = renderer.create(<LoginButton data={data} request={request} />);
  const tree = renderer.create(<LoginForm />);
  expect(tree).toMatchSnapshot();
});

test('button react correctly', () => {
  let mockCallback = jest.fn(data => {
    // console.log('callback get:', data);
    if (data.status === 1) {
      /**
       * storage
       */
      // storage.save('userId', data.data.userId);
      // console.log('data.data.userId:', data.data.userId);
      // storage.load('userId', data => {
      //   console.log('userID: ', data);
      // });

      return data.message;
    } else {
      return data.message;
    }
  });

  let mockHandleLogin = jest.fn((request, data) => {
    // console.log('用户名');
    // console.log('name:', name);
    // console.log('password:', password);
    // console.log('login success!');
    // const data = {userName: name, password: password};
    return request;
  });

  render(
    <View>
      <TouchableOpacity
        // mt="2"
        // backgroundColor="danger.600"
        onPress={() => {
          mockHandleLogin(request);
          mockCallback(data);
        }}>
        <Text>登录</Text>
      </TouchableOpacity>
    </View>,
  );

  fireEvent.press(screen.getByText('登录'));
  expect(mockCallback).toHaveBeenCalled();
  expect(mockHandleLogin).toHaveBeenCalled();
  expect(mockCallback.mock.results[0].value).toBe('欢迎回来');
  expect(mockHandleLogin.mock.results[0].value).toStrictEqual({
    name: 'John',
    password: '123456',
  });
  // expect(mockCallback).mockReturnValue('欢迎回来');
  // expect(mockHandleLogin).toBe({name: 'John', password: '123456'});
});

test('form can be filled correctly', () => {
  let mockSetUsername = jest.fn(data => {
    // const [name, setName] = React.useState('');
    // setName(data);
    return data;
  });

  let mockSetPassWord = jest.fn(data => {
    // const [password, setPassword] = React.useState('');
    // setPassword(data);
    return data;
  });

  render(
    <View>
      <TextInput
        placeholder="用户名称"
        onChangeText={text => mockSetUsername(text)}
      />
      <TextInput
        placeholder="密码"
        onChangeText={text => mockSetPassWord(text)}
      />
    </View>,
  );

  fireEvent.changeText(screen.getByPlaceholderText('用户名称'), request.name);
  fireEvent.changeText(screen.getByPlaceholderText('密码'), request.password);
  expect(mockSetPassWord).toHaveBeenCalled();
  expect(mockSetUsername).toHaveBeenCalled();
  expect(mockSetUsername.mock.results[0].value).toBe(request.name);
  expect(mockSetPassWord.mock.results[0].value).toBe(request.password);
});
