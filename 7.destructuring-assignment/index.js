'use strict';
{
  let arr = ['John', 'Smith'];

  let [firstName, surName] = arr;

  // console.log(firstName);
  // console.log(surName);
}

{
  let [first, , third] = [
    'Julius',
    'Caesar',
    'Consul',
    'of the Roman Republic',
  ];

  // console.log(first);
  // console.log(third);
}

{
  let [a, b, c] = 'abc';
  let [one, two, three] = new Set([1, 2, 3]);
}

let guest = 'Jane';
let admin = 'Peter';

// tukar nilai
[guest, admin] = [admin, guest];
// console.log('guest :>> ', guest);
// console.log('admin :>> ', admin);

// default values

{
  let [name = 'Guest', surName = 'Anonymous'] = ['Julius'];
  // console.log('name :>> ', name);
  // console.log('surName :>> ', surName);
}

// object destructuring
{
  let options = {
    title: 'Menu',
    height: 200,
  };

  const width = 500;

  let { title, width: w = 100, height } = options;

  // console.log(title);
  // console.log(w);
  // console.log(height);
}

{
  let options = {
    title: 'Menu',
    height: 200,
    width: 100,
  };

  let { title, height, ...rest } = options;

  // console.log('width: ', rest.width);
}

{
  const object = {
    title: 'My menu',
    items: ['Item 1', 'Item 2'],
  };

  function showMenu({ title, items, height = 100 } = {}) {
    console.log([title, items, height]);
  }

  showMenu(object);
}
