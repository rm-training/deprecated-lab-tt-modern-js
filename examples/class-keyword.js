function Animal(name, sound, has_tail, num_legs) {
	this.name = name;
	this.sound = sound;
	this.has_tail = has_tail;
	this.num_legs = num_legs;
}

Animal.prototype.speak = function () {
	return this.name + ' says: ' + this.sound;
}

var cat = new Animal('Felix', 'meow', true, 4);

console.log(cat.speak());

//
// When re-written to class keyword
//

// class AnimalAsAClass {
// 	constructor(name, sound, has_tail, num_legs) {
// 		this.name = name;
// 		this.sound = sound;
// 		this.has_tail = has_tail;
// 		this.num_legs = num_legs;
// 	}

// 	speak() {
// 		return this.name + ' says: ' + this.sound;
// 	}
// }

// var cat = new AnimalAsAClass('Felix', 'meow', true, 4);

// console.log(cat.speak());