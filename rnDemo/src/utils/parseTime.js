// 时间戳转换为字符串
export function timeStamp2String(time) {
  const datetime = new Date();
  datetime.setTime(time);
  const year = datetime.getFullYear();
  const month =
    datetime.getMonth() + 1 < 10
      ? '0' + (datetime.getMonth() + 1)
      : datetime.getMonth() + 1;
  const date =
    datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
  const hour =
    datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
  const minute =
    datetime.getMinutes() < 10
      ? '0' + datetime.getMinutes()
      : datetime.getMinutes();
  const second =
    datetime.getSeconds() < 10
      ? '0' + datetime.getSeconds()
      : datetime.getSeconds();
  return (
    year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
  );
}

// 时间戳转换为日期
export function timeStampToDay(time) {
  const datetime = new Date();
  datetime.setTime(time);
  const year = datetime.getFullYear();
  const month =
    datetime.getMonth() + 1 < 10
      ? '0' + (datetime.getMonth() + 1)
      : datetime.getMonth() + 1;
  const date =
    datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
  return year + '年 ' + month + '月' + date + '日';
}


export function timeStamp4Countdown(time) {
  const datetime = new Date();
  datetime.setTime(time);
<<<<<<< HEAD:rnDemo/src/utils/parseTime.js
=======
  console.log('time: ', time)
>>>>>>> 5ee0a51599b9111ce811d8e7fc5b9391afee5a28:rnDemo/utils/parseTime.js
  // const year = datetime.getFullYear();
  // const month =
  //   datetime.getMonth() + 1 < 10
  //     ? '0' + (datetime.getMonth() + 1)
  //     : datetime.getMonth() + 1;
  const date =
<<<<<<< HEAD:rnDemo/src/utils/parseTime.js
=======
  datetime.getDate() < 10 ? '0' + (datetime.getDate() - 1)  : (datetime.getDate() - 1);
  const hour =
  datetime.getHours() < 10 ? '0' + (datetime.getHours() - 8) : (datetime.getHours() - 8);
  const minute =
  datetime.getMinutes() < 10
  ? '0' + datetime.getMinutes()
  : datetime.getMinutes();
  const second =
  datetime.getSeconds() < 10
  ? '0' + datetime.getSeconds()
  : datetime.getSeconds();
  // return (
    //   date + ' ' + hour + ':' + minute + ':' + second
    // );
    console.log('date: ', date)
    console.log('hour: ', hour)
    return (
    ((date *24 + hour)*60 + minute)*60 + second
  );
}


export function timeStamp4Countdown2(time) {
  const datetime = new Date();
  datetime.setTime(time);
  // const year = datetime.getFullYear();
  const month =
    datetime.getMonth() + 1 < 10
      ? '0' + (datetime.getMonth() + 1)
      : datetime.getMonth() + 1;
  const date =
>>>>>>> 5ee0a51599b9111ce811d8e7fc5b9391afee5a28:rnDemo/utils/parseTime.js
    datetime.getDate() < 10 ? '0' + (datetime.getDate() - 1)  : (datetime.getDate() - 1);
  const hour =
    datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
  const minute =
    datetime.getMinutes() < 10
      ? '0' + datetime.getMinutes()
      : datetime.getMinutes();
  const second =
    datetime.getSeconds() < 10
      ? '0' + datetime.getSeconds()
      : datetime.getSeconds();
  // return (
  //   date + ' ' + hour + ':' + minute + ':' + second
  // );
<<<<<<< HEAD:rnDemo/src/utils/parseTime.js
  return (
    ((date *24 + hour)*60 + minute)*60 + second
=======

  let leap = false;
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    // console.log(year + ' is a leap year');
    leap = true;
} else {
    // console.log(year + ' is not a leap year');
    leap = false;
}

  let days = 30;
  if (month === 2 && leap === false)
  days = 28;
  else if (month === 2 && leap === true)
  days = 29;
  else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)
  days = 30;
  else days = 31;
  return (
    (((month * days + date) *24 + hour)*60 + minute)*60 + second
>>>>>>> 5ee0a51599b9111ce811d8e7fc5b9391afee5a28:rnDemo/utils/parseTime.js
  );
}