// Iterable Objects
// - implemenet the @@iterator method
//

const cat = {
	name: 'Felix',
	age: 10,
	*[Symbol.iterator]() {
		let age = this.age;
		while (age > 0) {
			yield age;
			age--;
		}
		yield 'dead';
	},
}

for (let age of cat) {
	console.log(cat.name + ' is ' + age);
}

// support for..of with objects
const dog = {
	name: 'Fido',
	legs: 4,
	*[Symbol.iterator]() {
		for (let prop in this) {
			yield this[prop];
		}
	}
}

for (let val of dog) {
	console.log(val);
}