// 判断团购是否已经结束
// 参数：团购
// 返回结果 ：0:未开始 1：未结束 2:已结束 3:未开始，秒杀团购
export const judgeTime = data => {
  let now = new Date().getTime();
  // console.log("now judgeTime:", now);
  // console.log("starttime judgeTime:", data.startTime);
  let endTime = data.startTime + parseInt(data.duration) * 60 * 60 * 1000;
  // console.log("status judgeTime:", new Date().getTime(), endTime);
  if(new Date().getTime() < data.startTime && data.state === 1){
    console.log("return 0");
    return 0;
  }
  else if(new Date().getTime() < endTime && data.state === 1){
    console.log("return 1");
    return 1;
  }
  else if(new Date().getTime() < data.startTime && data.state === 2){
    console.log("return 3");
    return 3
  }
  else {
    console.log("return 2");
    return 2;
  }
};


