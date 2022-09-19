import {judgeTime} from '../src/utils/judgeTime';
import {calCountdownTime} from '../src/utils/judgeTime';

it('1: given a group purchase, judge its status is in progress', () => {
  const data = {
    groupId: 46,
    user: {},
    groupTitle: '新鲜农家小炒',
    groupInfo: '农家菜小炒',
    delivery: '同城配送',
    startTime: 1662487200000,
    duration: 1280,
    state: 1,
    category: '肉禽蛋',
    popularity: 0,
    goods: [],
  };
  expect(judgeTime(data)).toBe(1);
});

it('2: given a seckill group purchase, judge its status is in progress', () => {
  const data = {
    groupId: 46,
    user: {},
    groupTitle: '新鲜农家小炒',
    groupInfo: '农家菜小炒',
    delivery: '同城配送',
    startTime: 1662487200000,
    duration: 1280,
    state: 2,
    category: '肉禽蛋',
    popularity: 0,
    goods: [],
  };
  expect(judgeTime(data)).toBe(1);
});

it('3: given a group purchase, judge its status is not started', () => {
  const data = {
    groupId: 46,
    user: {},
    groupTitle: '新鲜农家小炒',
    groupInfo: '农家菜小炒',
    delivery: '同城配送',
    startTime: 1663869600000,
    duration: 1280,
    state: 1,
    category: '肉禽蛋',
    popularity: 0,
    goods: [],
  };
  expect(judgeTime(data)).toBe(0);
});

it('4: given a seckill group purchase, judge its status is not started', () => {
  const data = {
    groupId: 46,
    user: {},
    groupTitle: '新鲜农家小炒',
    groupInfo: '农家菜小炒',
    delivery: '同城配送',
    startTime: 1663869600000,
    duration: 1280,
    state: 2,
    category: '肉禽蛋',
    popularity: 0,
    goods: [],
  };
  expect(judgeTime(data)).toBe(3);
});

it('5: given a deleted group purchase, judge its status is invalid', () => {
  const data = {
    groupId: 46,
    user: {},
    groupTitle: '新鲜农家小炒',
    groupInfo: '农家菜小炒',
    delivery: '同城配送',
    startTime: 1662487200000,
    duration: 1280,
    state: 0,
    category: '肉禽蛋',
    popularity: 0,
    goods: [],
  };
  expect(judgeTime(data)).toBe(2);
});

it('6: given a expire seckill group purchase, judge its status is invalid', () => {
  const data = {
    groupId: 46,
    user: {},
    groupTitle: '新鲜农家小炒',
    groupInfo: '农家菜小炒',
    delivery: '同城配送',
    startTime: 1661968800000,
    duration: 1,
    state: 0,
    category: '肉禽蛋',
    popularity: 0,
    goods: [],
  };
  expect(judgeTime(data)).toBe(2);
});

/**
 * 对于calCountdownTime并没有进行测试，因为这是一个最后并没有用到的函数
 */
