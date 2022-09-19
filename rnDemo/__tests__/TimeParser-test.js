import {timeStamp2String} from '../src/utils/parseTime';
import {timeStampToDay} from '../src/utils/parseTime';

it('1：given current timestamp, should return readable time string', () => {
  expect(timeStamp2String(5952563077000)).toBe('2158-08-18 17:44:37');
});
it('2：given current timestamp, should return readable time string', () => {
    expect(timeStamp2String(595256307700)).toBe('1988-11-11 20:58:27');
});
it('1：given current timestamp, should return the current date', () => {
  expect(timeStampToDay(5952563077000)).toBe('2158年 08月18日');
});
it('2：given current timestamp, should return the current date', () => {
    expect(timeStampToDay(595256307700)).toBe('1988年 11月11日');
});
