'use strict';

{
  function sum(a, b) {
    return a + b;
  }

  // console.log(sum(1, 2, 3, 4, 5));
}

// rest parameters
{
  function sumAll(...args) {
    // console.log('args :>> ', args);
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
  }

  // console.log(sumAll(1, 2, 3, 4, 5));
}

{
  function showName(firstName, lastName, ...titles) {
    console.log('titles :>> ', titles);
  }

  // showName('Julius', 'Caesar', 'Consul', 'Imperator');
}

{
  function showName() {
    // console.log(arguments);
    // console.log(arguments[0]);
    // console.log(Array.isArray(arguments));

    [...arguments].forEach((arg) => console.log(arg));
  }

  // showName('Julius', 'Caesar', 'Consul', 'Imperator');
}

// console.log(Math.max(3, 12, 5, 10, 15, 1));

const numbers = [3, 12, 5, 10, 15, 1];

// console.log(Math.max(...numbers));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedWithConcat = arr1.concat(arr2);
// console.log('mergedWithConcat :>> ', mergedWithConcat);

let mergedWithSpread = [...arr1, ...arr2];
// console.log('mergedWithSpread :>> ', mergedWithSpread);

let str = 'Hello';
// console.log([...str]);

let arr = [1, 2, 3];
let arrCopy = [...arr];

// console.log(arr === arrCopy);

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };

// console.log(obj === objCopy);

let obj2 = { a: 1, b: { x: 100, y: 200 }, c: 3 };
let objCopy2 = { ...obj2 };

// console.log(obj2.b === objCopy2.b);

// console.log('obj2 :>> ', obj2);
// console.log('objCopy2 :>> ', objCopy2);

let objCopy3 = { ...obj2, b: { ...obj2.b } };

console.log('objCopy3 :>> ', objCopy3);

// console.log(obj2.b === objCopy3.b);
