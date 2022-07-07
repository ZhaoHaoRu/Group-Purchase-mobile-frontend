// 进行顺序排序（？）
export function sortByKeyReverse(array, key) {
  return array.sort(function (a, b) {
    console.log('a:', a.groupId);
    console.log('b:', b.groupId);
    console.log('key:', key);
    const x = a[key];
    const y = b[key];
    console.log('x: ', x);
    console.log('y: ', y);
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

export function sortByKey(array, key) {
  return array.sort(function (a, b) {
    const x = a[key];
    const y = b[key];
    return x > y ? -1 : x < y ? 1 : 0;
  });
}
