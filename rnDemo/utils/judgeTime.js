// 判断团购是否已经结束
// 参数：团购

import { timeStamp2String, timeStamp4Countdown } from "./parseTime";

// 返回结果 ：0:未开始 1：未结束 2:已结束 3:未开始，秒杀团购
export const judgeTime = data => {
  console.log("judge time's data: ", data);

  let now = new Date().getTime();
  console.log('now judgeTime:', now);
  console.log('starttime judgeTime:', data.startTime);
  let endTime = data.startTime + parseInt(data.duration) * 60 * 60 * 1000;
  console.log('endTime:', endTime);
  if (new Date().getTime() < data.startTime && data.state === 1) {
    console.log('return 0');
    return 0;
  } else if (
    new Date().getTime() < endTime &&
    (data.state === 1 || data.state === 2)
  ) {
    console.log('return 1');
    return 1;
  } else if (new Date().getTime() < data.startTime && data.state === 2) {
    console.log('return 3');
    return 3;
  } else {
    console.log('return 2');
    return 2;
  }
};

export const calCountdownTime = data => {
  console.log("calCountdownTime's data: ", data);

  let now = new Date().getTime();
  console.log('now coutdowntime:', now);
  console.log('starttime coutdowntime:', data.startTime);
  let endTime = data.startTime + parseInt(data.duration) * 60 * 60 * 1000;
  console.log('endTime coutdowntime:', endTime);

  // on going, get time left
  if (
    new Date().getTime() < endTime &&
    (data.state === 1 || data.state === 2)
  ) {
    console.log(
      'get time left 1 : ',
      (endTime - new Date().getTime()),
    );
    let time = timeStamp4Countdown(endTime - new Date().getTime());
    console.log(
      'get time left 2 : ',
      timeStamp4Countdown(endTime - new Date().getTime()),
    );
    return time;
  }
};
