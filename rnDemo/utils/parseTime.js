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

//
// export function timeStamp4Countdown(time) {
//   const datetime = new Date();
//   datetime.setTime(time);
//   // const year = datetime.getFullYear();
//   // const month =
//   //   datetime.getMonth() + 1 < 10
//   //     ? '0' + (datetime.getMonth() + 1)
//   //     : datetime.getMonth() + 1;
//   const date =
//     datetime.getDate() < 10 ? '0' + (datetime.getDate() - 1)  : (datetime.getDate() - 1);
//   const hour =
//     datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
//   const minute =
//     datetime.getMinutes() < 10
//       ? '0' + datetime.getMinutes()
//       : datetime.getMinutes();
//   const second =
//     datetime.getSeconds() < 10
//       ? '0' + datetime.getSeconds()
//       : datetime.getSeconds();
//   // return (
//   //   date + ' ' + hour + ':' + minute + ':' + second
//   // );
//   return (
//     ((date *24 + hour)*60 + minute)*60 + second
//   );
// }

export function timeStamp4Countdown(time) {
  const datetime = new Date();
  datetime.setTime(time);
  console.log('time in timeStamp4Countdown: ', time);
  // const year = datetime.getFullYear();
  // const month =
  //   datetime.getMonth() + 1 < 10
  //     ? '0' + (datetime.getMonth() + 1)
  //     : datetime.getMonth() + 1;
  const date =
    datetime.getDate() < 10
      ? '0' + (datetime.getDate() - 1)
      : datetime.getDate() - 1;
  const hour =
    datetime.getHours() < 10
      ? '0' + (datetime.getHours() - 8)
      : datetime.getHours() - 8;
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
  console.log('date: ', date);
  console.log('hour: ', hour);
  /**
   * 这里要首先改成int类型！！！！
   */
  return (
    ((parseInt(date) * 24 + parseInt(hour)) * 60 + minute) * 60 +
    parseInt(second)
  );
}
