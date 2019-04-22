class Animal {
	constructor(name, sound, has_tail, num_legs) {
		this.name = name;
		this.sound = sound;
		this.has_tail = has_tail;
		this.num_legs = num_legs;
	}

	speak() {
		return `${this.name} says: ${this.sound}`;
	}

	get isSpry() {
		return this.has_tail && this.num_legs > 3;
	}

	static compare(animal1, animal2) {
		return animal1 === animal2;
	}
}

class Cat extends Animal {
	constructor(name, isMean) {
		super(name, 'Meow', true, 4);
		this.isMean = isMean;
	}

	scratch() {
		if (this.isMean) {
			return `${this.name} scratched you`;
		} else {
			this.speak();
			// could have also referenced super directly
			// super.speak();
		}
	}
}

var cat = new Cat('Felix', true);
console.log(cat.isSpry);
console.log(cat.speak());
console.log(cat.scratch());

console.log(Animal.compare(cat, cat));