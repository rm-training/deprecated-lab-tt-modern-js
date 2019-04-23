// Exercises online
//
// https://repl.it/@mrmorris/EverlastingWorthwhileSyndrome
//

// Exercise 1
//
// Given two variables, swap their values in one line of code.
// => thing1 = 'banana'
// => thing2 = 'apple'

let thing1 = 'apple';
let thing2 = 'banana';

// ...solution goes here...
[thing1, thing2] = [thing2, thing1];

console.assert(thing2 === 'apple', 'Thing2 should now reference the original value of thing1');
console.assert(thing1 === 'banana', 'Thing1 should now reference the original value of thing2');

// Exercise 2
//
// Given an object, in one line, assign the keys as variables that reference their corresponding values within the object
// console.log(name) => 'elvis'
// console.log(title) => 'hip swinger'
const elvis = {
	name: 'elvis',
	title: 'hip swinger'
}

let { name, title } = elvis;

console.assert(name === elvis.name);
console.assert(title === elvis.title);

// Exercise 3
//
// Now, in one line, assign variables to the values of the object using DIFFERENT names than the keys already in the object.
// console.log(person) => 'elvis'
// console.log(job) => 'hip swinger'

let {
	name: person,
	title: job
} = elvis;

console.assert(person === elvis.name);
console.assert(job === elvis.title);

// Exercise 4
//
// Concatenate the following arrays into ONE array using es6:
// console.log(newArray) => [ 1, 2, 3, 'a', 'b', 'c', 'bacon', 'mango', 'pecan pie' ]

const numbers = [1, 2, 3]
const letters = ['a', 'b', 'c']
const foods = ['bacon', 'mango', 'pecan pie']

let newArray = [...numbers, ...letters, ...foods];

console.assert(newArray.length === 9);

// Exercise 5
//
// Split the following string into an array using es6:
// console.log(wordArray) => [ 'm', 'c', 'G', 'o', 'o' ]

const someWord = 'mcGoo'

let wordArray = [...someWord];

console.assert(JSON.stringify(wordArray) === JSON.stringify(['m', 'c', 'G', 'o', 'o']));

// Exercise 6
//
// Convert the following function into an arrow function:
const sayHello = (name) => {
	return 'Hello, ' + name;
}

// ...solution goes here...

console.assert(sayHello('natalie') === 'Hello, natalie');
