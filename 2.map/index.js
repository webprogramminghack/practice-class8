'use strict';

// iterable
{
  let map = new Map();

  // key dalam map bisa berupa apapun
  // berbeda dari objek, key dari map tidak akan dikonversi menjadi string
  map.set('1', 'str1');
  map.set(1, 'num1');
  map.set(true, 'bool1');

  // console.log(map);
  // console.log(map.size);

  let john = { name: 'John' };

  let visits = new Map();

  visits.set(john, 123);

  // console.log(visits.get(john));

  // console.log(map.has('1'));

  // console.log('before:', map);

  map.delete('1');

  // console.log('after:', map);

  map.clear();

  // console.log('after clear:', map);
}

// map bisa dibuat menggunakan array of arrays
{
  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
  ]);

  // console.log(recipeMap.keys());

  for (let vegetable of recipeMap.keys()) {
    // console.log(vegetable);
  }

  for (let amount of recipeMap.values()) {
    // console.log(amount);
  }

  for (let entry of recipeMap) {
    // console.log(entry);
  }
}

{
  const map = new Map();
  map.set('1', 'str1').set(1, 'num1').set(true, 'bool1');
}

// conversion
{
  let obj = {
    name: 'John',
    age: 30,
  };

  // merubah object menjadi array 2 dimensi
  const arr = Object.entries(obj);

  let map = new Map(arr);
}

{
  const arr = [
    ['name', 'John'],
    ['age', 30],
  ];

  // merubah array 2 dimensi menjadi object
  let objFromArray = Object.fromEntries(arr);

  // console.log('objFromArray :>> ', objFromArray);
}

{
  // const items = [
  //   {
  //     id: 1,
  //     name: 'Test 1',
  //     description: 'Desc 1',
  //   },
  //   {
  //     id: 2,
  //     name: 'Test 2',
  //     description: 'Desc 2',
  //   },
  //   {
  //     id: 3,
  //     name: 'Test 3',
  //     description: 'Desc 3',
  //   },
  // ];

  const items = new Map([
    [1, { name: 'Test 1', description: 'Desc 1' }],
    [2, { name: 'Test 2', description: 'Desc 2' }],
    [3, { name: 'Test 3', description: 'Desc 3' }],
  ]);

  function getItem(id) {
    // return items.find((item) => item.id === id);
    return items.get(id);
  }

  // console.log(getItem(2));
}

// menggunakan map untuk extend object
// additional data1
{
  let user1 = { name: 'Alice' };
  let user2 = { name: 'Bob' };

  let userSettings = new Map();

  userSettings.set(user1, { theme: 'dark', language: 'en' });
  userSettings.set(user2, { theme: 'light', language: 'fr' });

  console.log(userSettings.get(user1));
}
