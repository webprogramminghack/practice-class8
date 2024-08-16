'use strict';

// Object.keys()
// Object.values()
// Object.entries()
{
  let user = {
    name: 'John',
    age: 30,
  };

  // console.log(Object.keys(user));
  // console.log(Object.values(user));
  // console.log(Object.entries(user));
}

{
  let user = {
    name: 'John',
    age: 30,
  };

  for (let value of Object.values(user)) {
    // console.log(value);
  }

  // Object.values(user).forEach((value) => console.log(value));
}

{
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  // kali 2 harga

  let transformedPrices = Object.entries(prices);
  let transformedDoublePrices = transformedPrices.map(([key, value]) => [
    key,
    value * 2,
  ]);

  let transformedBackPrices = Object.fromEntries(transformedDoublePrices);

  console.log('transformedBackPrices :>> ', transformedBackPrices);

  let doublePrices = Object.fromEntries(
    Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
  );

  console.log('doublePrices :>> ', doublePrices);
}
