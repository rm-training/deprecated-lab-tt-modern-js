// spread unwraps arguments for functions
function sum(a, b, c) {
	return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result);

// Example
// Spread unwraps any iterable, like strings

//console.log(sum(..."john"));

// Example
// Spread unwraps arrays

//console.log(...[1, 2, 3]);

// Example
// And spread can be used to combine arrays in place
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, "middle", ...arr2];
//console.log(combinedArr);

// And works with Objects as of ES2018
const obj1 = { name: 'Jim' };
const obj2 = { age: 50 };
const combinedObj = { ...obj1, ...obj2 };
//console.log(combinedObj);