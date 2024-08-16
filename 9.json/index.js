'use strict';

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
};

let json = JSON.stringify(student);

// console.log('json :>> ', json);

{
  let user = {
    sayHi() {
      console.log('Hello');
    },
    something: undefined,
    name: 'John',
  };

  // console.log(JSON.stringify(user));
}

{
  let room = {
    number: 23,
  };

  let meetup = {
    title: 'Conference',
    participants: ['john', 'ann'],
    place: room,
  };

  room.occupiedBy = meetup;

  // console.log(
  //   JSON.stringify(meetup, ['title', 'participants', 'place', 'number'])
  // );
}

{
  let user = {
    name: 'John',
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true,
    },
  };

  // indentation
  // console.log(JSON.stringify(user, null, 2));
}

{
  let json =
    '{"name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3]}';

  let user = JSON.parse(json);

  console.log(user);
}
