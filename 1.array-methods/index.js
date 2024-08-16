'use strict';

{
  let arr = ['I', 'study', 'javascript'];

  // mutate
  arr.splice(0, 3);
  // console.log('arr :>> ', arr);
}

{
  let arr = ['t', 'e', 's', 't'];

  // argument pertama adalah indexnya
  // argument ke 2 adalah index sebelum

  // not mutate
  // console.log(arr.slice(1, 3));

  // console.log(arr.slice(-2));

  // console.log('arr :>> ', arr);
}

{
  let arr = [1, 2];

  // console.log(arr.concat([3, 4]));

  // console.log(arr.concat([3, 4], [5, 6]));
}

// arr.forEach(function (item, index, array) {
//   // lakukan sesuatu dengan item
// });

const callback = (item, index, array) => {
  console.log(`${index}: ${item} dalam array ${array}`);
};

// ['Bilbo', 'Gandalf', 'Nazgul'].forEach(callback);

const someArr = ['Bilbo', 'Gandalf', 'Nazgul'];

// someArr.forEach(callback);

// Mencari dalam array
let arr = [1, 0, false, 'hello'];

// console.log(arr.indexOf('hello'));
// console.log(arr.indexOf('doesntexist'));
// console.log(arr.includes('hello'));

// if (arr.includes('hello')) {
//   console.log('exist');
// } else {
//   console.log("doesn't exist");
// }

{
  let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Pete' },
    { id: 3, name: 'Mary' },
    { id: 4, name: 'Mary' },
  ];

  // const find = (user) => user.name == 'John';

  function find(user) {
    return user.name == 'Mary';
  }

  // console.log(users.find(find));

  // console.log(users.findIndex(find));

  // last occurence
  // console.log(users.findLastIndex(find));
}

{
  const users = {
    arr: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Pete' },
      { id: 3, name: 'Mary' },
    ],
    find: function (callback) {
      for (let i = 0; i < this.arr.length; i++) {
        if (callback(this.arr[i], i, this.arr)) {
          return this.arr[i];
        }
      }
    },
  };

  let user = users.find((item) => item.id == 3);
  // console.log(user.name);
}

{
  let result = arr.map(function (item, index, array) {
    // kembalikan nilai baru sebagai pengganti item
  });

  const values = [100, 200, 300];

  let updatedValues = values.map((value) => value * 2);

  // console.log('updatedValues :>> ', updatedValues);
}

// sort
{
  let arr1 = [1, 2, 15, 5];
  arr1.sort((a, b) => a - b);
  // console.log(arr1);

  let arr2 = [1, 2, 15, 5];
  arr2.sort((a, b) => b - a);
  // console.log(arr2);
}

{
  let arr = ['I', 'am', 'Tony', 'Stark'];
  arr.reverse();
  // console.log(arr);
}

// split untuk merubah string menjadi array
{
  let names = 'Bilbo, Gandalf, Nazgul';
  let arr = names.split(', ');
  // console.log(arr);
}

// join untuk merubah array menjadi string
{
  let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
  let str = arr.join(';');
  // console.log(str);
}

// reduce
// cara kita untuk sum

{
  let arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((sum, current) => sum + current, 0);

  // 1. sum = 0, current = 1, new sum = 0 + 1 = 1;
  // 2. sum = 1, current = 2, new sum = 1 + 2 = 3;
  // 3. sum = 3, current = 3, new sum = 3 + 3 = 6;
  // 4. sum = 6, current = 4, new sum = 6 + 4 = 10;
  // 5. sum = 10, current = 5, new sum = 10 + 5 = 15;

  // console.log(result);
}

{
  let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Pete' },
    { id: 3, name: 'Mary' },
    { id: 4, name: 'Ann' },
  ];

  let someUsers = users.filter((user) => user.id < 3);

  console.log(someUsers);

  const usersObj = {
    arr: [
      { id: 1, name: 'John' },
      { id: 2, name: 'Pete' },
      { id: 3, name: 'Mary' },
      { id: 4, name: 'Ann' },
    ],
    filter: function (callback) {
      const result = [];
      for (let i = 0; i < this.arr.length; i++) {
        if (callback(this.arr[i], i, this.arr)) {
          result.push(this.arr[i]);
        }
      }
      return result;
    },
  };
}
