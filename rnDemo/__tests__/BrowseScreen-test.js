import React from 'react';
import renderer from 'react-test-renderer';
import RenderScreen from '../test_function/BrowseScreen';

const Id = 1;
const groups = [
  {
    groupId: 1,
    user: {
      userId: 1,
      userName: 'John',
      password: '123456',
      email: 'xxx@xx.com',
      wallet: 1321.0,
    },
    groupTitle: '新鲜',
    groupInfo: '新鲜',
    delivery: '同城配送',
    startTime: 1662171775000,
    duration: 72,
    picture:
      'https://st-cn.meishij.net/r/181/98/13899681/s13899681_159730313168615.jpg',
    state: 3,
    category: '肉禽蛋',
    popularity: 4011,
    goods: [
      {
        goodsId: 1,
        group: 1,
        goodsName: '油条',
        goodsInfo: '油条',
        price: 1.0,
        inventory: 0,
        picture:
          'https://st-cn.meishij.net/r/181/98/13899681/s13899681_159730313168615.jpg',
      },
    ],
  },
];

//测试BrowseScreen 的 FlatList渲染效果
it('homeCard renders correctly', () => {
  const tree = renderer.create(<RenderScreen props={groups} userId={Id} />);
  expect(tree).toMatchSnapshot();
});
