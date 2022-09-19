const groups = [
  {
    groupTitle: '小炒肉',
    groupId: 1,
    user: {
      userName: '小明',
    },
  },
  {
    groupTitle: '小炒菜',
    groupId: 2,
    user: {
      userName: '小王',
    },
  },
  {
    groupTitle: '小炒花',
    groupId: 3,
    user: {
      userName: '小李',
    },
  },
];

let searchInput;
let filteredData = [];
// 对于团购的内容进行搜索过滤,基于团长或者是团购名称
const searchItems = searchValue => {
  // console.log('searchValue:', searchValue);
  searchInput = searchValue;
  // console.log('searchInput:', searchInput);
  if (searchValue !== '') {
    groups.forEach(group => {
      // console.log(
      //   'debug: ',
      //   group.groupTitle.indexOf(searchInput),
      //   group.groupTitle,
      // );

      if (
        group.groupTitle.indexOf(searchValue) === -1 &&
        group.user.userName.indexOf(searchValue) === -1
      ) {
        // console.log('group.groupTitle:', group.groupTitle);
        return;
      }
      filteredData.push(group);
    });
  } else {
    // console.log('get here!');
    filteredData = groups;
  }
  return filteredData;
};

const result1 = [
  {
    groupTitle: '小炒肉',
    groupId: 1,
    user: {
      userName: '小明',
    },
  },
];

it('1: search by groupTitle', () => {
  filteredData = [];
  searchItems('菜');
  expect(filteredData[0].groupId).toBe(2);
});

it('2: search by userName', () => {
  filteredData = [];
  searchItems('明');
  expect(filteredData[0].groupId).toBe(1);
});

it('3: when search is null, return all groups', () => {
  filteredData = [];
  searchItems('');
  expect(filteredData[2].groupId).toBe(3);
});
