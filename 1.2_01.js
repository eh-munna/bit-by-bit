const arr = [
  ['key1', 'value1', 'value2'],
  ['key2', 'value2'],
  ['key3', 'value3'],
];

const map = new Map(arr);
console.log(map);

const user1 = {
  name: 'Alice',
  age: 30,
};

const user2 = {
  name: 'Bob',
  age: 25,
};

const userMap = new Map();
userMap.set(user1, 'Admin');
console.log(userMap);
console.log(userMap.get(user1));
