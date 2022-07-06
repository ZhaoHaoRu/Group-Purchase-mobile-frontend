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
