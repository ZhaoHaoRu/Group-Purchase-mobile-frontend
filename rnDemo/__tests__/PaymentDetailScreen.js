import {PayButton} from '../test_function/PaymentDetailScreen';
import React from 'react';
import renderer from 'react-test-renderer';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import {fireEvent, render, screen} from '@testing-library/react-native';

const request = {name: 'John', password: '123456'};
const data = {
  status: 1,
  message: '操作成功',
  data: {
    userId: 2,
    userName: 'John',
    password: '123456',
    email: 'xxx@xx.com',
    wallet: 680.4,
  },
};

it('PayButton renders correctly', () => {
  // const tree = renderer.create(<LoginButton data={data} request={request} />);
  const tree = renderer.create(<PayButton />);
  expect(tree).toMatchSnapshot();
});

test('PayButton react correctly', () => {
  let MockPay = jest.fn(data => {
    if (data.status == 1) {
      return data.message;
    } else {
      return data.message;
    }
  });
  render(
    <View>
      <TouchableOpacity onPress={() => MockPay(data)}>
        <Text>去付款</Text>
      </TouchableOpacity>
    </View>,
  );

  fireEvent.press(screen.getByText('去付款'));
  expect(MockPay).toHaveBeenCalled();
  expect(MockPay.mock.results[0].value).toBe('操作成功');
});
