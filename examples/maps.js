// given two objects
let userA = {
  id: 5,
  username: 'JimBob',
};

let userB = {
  id: 22,
  username: 'Destiny',
};

userA = userB;
const myMap = new Map();
myMap.set(userB, 0);
console.log(myMap.has(userA)); // ?
