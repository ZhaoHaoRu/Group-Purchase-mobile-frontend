import React from 'react';
import renderer from 'react-test-renderer';
import HomeCard from '../test_function/HomeCard';

const groupDemo = {
  groupId: 47,
  user: {
    userId: 2,
    userName: 'John',
    password: '123456',
    email: 'xxx@xx.com',
    wallet: 680.4,
  },
  groupTitle: '菠萝包团购',
  groupInfo: '刚出炉的菠萝包',
  delivery: '快递',
  startTime: 1662557947000,
  duration: 72,
  picture:
    'http://cp1.douguo.net/upload/caiku/1/e/5/yuan_1e4cf8b660b9d183a7f53400a7966405.jpg',
  state: 3,
  category: '乳品烘培',
  popularity: 0,
  goods: [
    {
      goodsId: 72,
      group: 47,
      goodsName: '菠萝包',
      goodsInfo: '新鲜菠萝包',
      price: 5,
      inventory: 3000,
      picture:
        'http://cp1.douguo.net/upload/caiku/1/e/5/yuan_1e4cf8b660b9d183a7f53400a7966405.jpg',
    },
  ],
};

const userId = 2;

it('homeCard renders correctly', () => {
  const tree = renderer.create(<HomeCard props={groupDemo} userId={userId} />);
  expect(tree).toMatchSnapshot();
});

// it('search perform correctly')
