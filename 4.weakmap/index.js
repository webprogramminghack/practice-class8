'use strict';

// weakMap hanya menerima object sebagai key
{
  let weakMap = new WeakMap();

  let obj = {};

  // weakMap.set(obj, 'ok');
  // weakMap.set('hello', 'ok');
}

// normal map menyimpan reference ke key
// weak map tidak menyimpan reference ke key
{
  let john = { name: 'John' };

  let map = new WeakMap();
  map.set(john, 'hello');

  john = null;

  // console.log(map.keys());
}

{
  let cacheMap = new WeakMap();

  function processWithMap(person) {
    if (!cacheMap.has(person)) {
      let result = {
        processedName: person.name.toUpperCase(),
        yearBorn: new Date().getFullYear() - person.age,
        addressSummary: person.address.split(' ')[0],
      };

      console.log('diproses');

      cacheMap.set(person, result);
      return result;
    }

    return cacheMap.get(person);
  }

  let person1 = {
    name: 'John Doe',
    age: 30,
    address: '123 Main St',
  };

  // let result1 = processWithMap(person1);
  // console.log('result1 :>> ', result1);

  // panggilan kedua dengan objek yang sama akan mengambil hasil dari cache
  // let result2 = processWithMap(person1);

  // person1 = null;

  // console.log(cacheMap.size);
}
