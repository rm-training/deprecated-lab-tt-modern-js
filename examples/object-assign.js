const obj1 = {
	id: 5,
	name: 'Silly Object',
	get thingy() {
		return this.id + 'THINGY';
	}
};

// Example Usage
// cloning...
const clonedObj1 = Object.assign({}, obj1);
console.log(clonedObj1);

// Example usage
// merging...
Object.assign(obj1, {
	id: 10,
});
console.log(obj1);