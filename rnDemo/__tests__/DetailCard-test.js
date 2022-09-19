import React from 'react';
import renderer from 'react-test-renderer';
import {TouchableOpacity, Text, View, TextInput} from 'react-native';
import {collectButton} from '../test_function/DetailCard';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {addToCartButton} from '../test_function/DetailCard';
import {BuyButton} from '../test_function/DetailCard';
import {Icon, Pressable} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

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

it('collectButton renders correctly', () => {
  // const tree = renderer.create(<LoginButton data={data} request={request} />);
  const tree = renderer.create(<collectButton />);
  expect(tree).toMatchSnapshot();
});

it('addToCartButton renders correctly', () => {
  // const tree = renderer.create(<LoginButton data={data} request={request} />);
  const tree = renderer.create(<addToCartButton />);
  expect(tree).toMatchSnapshot();
});

it('BuyButton renders correctly', () => {
  // const tree = renderer.create(<LoginButton data={data} request={request} />);
  const tree = renderer.create(<BuyButton />);
  expect(tree).toMatchSnapshot();
});

test('collectButton react correctly', () => {
  let MockOnCollectGroup = jest.fn(data => {
    if (data.status == 1) {
      return data.message;
    } else {
      return data.message;
    }
  });
  render(
    <View>
      <TouchableOpacity onPress={() => MockOnCollectGroup(data)}>
        <Text>收藏</Text>
      </TouchableOpacity>
    </View>,
  );

  fireEvent.press(screen.getByText('收藏'));
  expect(MockOnCollectGroup).toHaveBeenCalled();
  expect(MockOnCollectGroup.mock.results[0].value).toBe('操作成功');
});

test('addToCartButton react correctly', () => {
  let MockAddToCart = jest.fn(data => {
    if (data.status == 1) {
      return data.message;
    } else {
      return data.message;
    }
  });
  render(
    <View>
      <TouchableOpacity onPress={() => MockAddToCart(data)}>
        <Text>加入购物车</Text>
      </TouchableOpacity>
    </View>,
  );

  fireEvent.press(screen.getByText('加入购物车'));
  expect(MockAddToCart).toHaveBeenCalled();
  expect(MockAddToCart.mock.results[0].value).toBe('操作成功');
});

test('BuyButton react correctly', () => {
  let MockBuy = jest.fn(data => {
    if (data.status == 1) {
      return data.message;
    } else {
      return data.message;
    }
  });
  render(
    <View>
      <TouchableOpacity onPress={() => MockBuy(data)}>
        <Text>一键购买</Text>
      </TouchableOpacity>
    </View>,
  );

  fireEvent.press(screen.getByText('一键购买'));
  expect(MockBuy).toHaveBeenCalled();
  expect(MockBuy.mock.results[0].value).toBe('操作成功');
});
