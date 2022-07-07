// 进行顺序排序（？）
export function sortByKey(array, key) {
  return array.sort(function (a, b) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("key:", key);
    var x = a[key];
    var y = b[key];
    console.log('x: ', x);
    console.log('y: ', y);
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

export function sortByKeyReverse(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x > y ? -1 : x < y ? 1 : 0;
  });
}
