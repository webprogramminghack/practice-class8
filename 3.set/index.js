'use strict';

const uniqueList = [1, 2, 3, 4, 5];

function addItem(item) {
  if (!uniqueList.includes(item)) {
    uniqueList.push(item);
  }
}

addItem(6);
// console.log('uniqueList :>> ', uniqueList);

addItem(3);
// console.log('uniqueList :>> ', uniqueList);

// utilizing Set
const set = new Set([1, 2, 3, 4, 5]);
set.add(6);
// console.log('set :>> ', set);

set.add(5);
// console.log('set :>> ', set);

set.delete(4);
// console.log('set :>> ', set);

// console.log(set.has(2));

// set.clear();
// console.log(set);

for (const value of set) {
  // console.log(value);
}

// set.forEach((value) => console.log(value));

// remove duplicate items from array
function wrongRemoveDups(arr) {
  arr.forEach((item, index) => {
    if (arr.indexOf(item) !== index) {
      arr.splice(index, 1);
    }
  });

  return arr;
}

function removeDups(arr) {
  return [...new Set(arr)];
  // return Array.from(new Set(arr));
}

const arr = [1, 2, 2, 3, 4, 4, 5];

// console.log(wrongRemoveDups(arr));
console.log(removeDups(arr));
