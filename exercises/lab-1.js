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

console.assert(thing2 === 'apple', 'Thing2 should now reference the original value of thing1');
console.assert(thing1 === 'banana', 'Thing1 should now reference the original value of thing2');

// Exercise 2
//
// Given an object, in one line, assign the keys as variables that reference their corresponding values within the object
// console.log(name) => 'elvis'
// console.log(title) => 'hip swinger'
const elvis = { name: 'elvis', title: 'hip swinger' }

// ...solution goes here...

console.assert(name === elvis.name);
console.assert(title === elvis.title);

// Exercise 3
//
// Now, in one line, assign variables to the values of the object using DIFFERENT names than the keys already in the object.
// console.log(person) => 'elvis'
// console.log(job) => 'hip swinger'

// ...solution goes here...

console.assert(person === elvis.name);
console.assert(job === elvis.title);

// Exercise 4
//
// Concatenate the following arrays into ONE array using es6:
// console.log(newArray) => [ 1, 2, 3, 'a', 'b', 'c', 'bacon', 'mango', 'pecan pie' ]

const numbers = [1, 2, 3]
const letters = ['a', 'b', 'c']
const foods = ['bacon', 'mango', 'pecan pie']

// ... solution goes here ...

console.assert(newArray.length === 9);

// Exercise 5
//
// Split the following string into an array using es6:
// console.log(wordArray) => [ 'm', 'c', 'G', 'o', 'o' ]

const someWord = 'mcGoo'

// ...solution goes here...

console.assert(JSON.stringify(wordArray) === JSON.stringify(['m', 'c', 'G', 'o', 'o']));

// Exercise 6
//
// Convert the following function into an arrow function:
function sayHello(name) {
	return 'Hello, ' + name;
}

// ...solution goes here...

console.assert(sayHello('natalie') === 'Hello, natalie');

// Exercise 7
//
// Convert the following class definition
// to use the class keyword instead of object.prototype...
// class, constructor, super

function Shape(id, x, y) {
	this.id = id;
	this.move(x, y);
}

Shape.prototype.move = function (x, y) {
	this.x = x;
	this.y = y;
}

Shape.checkType = function (shape) {
	if (shape.width === shape.height) {
		return 'square';
	}
	return 'shape';
}

function Rectangle(id, x, y, width) {
	Shape.call(this, id, x, y);
	this.width = width;
	this.height = width;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.changeWidth = function (width) {
	this.width = width;
	this.height = width;
}

// tests...
const shapeThing = new Shape(4, 50, 50);
const squareThing = new Rectangle(5, 12, 15, 30);
console.assert(shapeThing instanceof Shape);
console.assert(squareThing instanceof Rectangle);

// Exercise 8
//
// There is an additional method on all shapes
// Make sure this is added into your class definition (above)
// And modify it so that it doesn't need to use 'bind', 'call' or retain context
// hint: we're talking arrow functions

Shape.prototype.moveLater = function (x, y, ms) {
	// notice we're using bind() to maintain context
	setTimeout(function () {
		this.move(x, y);
	}.bind(this), ms);
}

// tests...
console.assert(typeof shapeThing.moveLater === 'function');
shapeThing.moveLater(100, 100, 1);
setTimeout(function () {
	console.assert(shapeThing.x === 100 && shapeThing.y === 100);
}, 3);
