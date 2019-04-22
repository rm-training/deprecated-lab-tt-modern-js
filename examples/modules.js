// import the default, assign to DefaultAnimal
import DefaultAnimal from './modules/Animal.js';

// import named export, Animal
import { Animal } from './modules/Animal.js';

// importing more than one thing
// import { Animal, otherFn } from './modules/Animal.js';

// aliasing
// import { Animal as MyOwnAnimal } from './modules/Animal.js';

// importing everything
// import * as AnimalModule from './modules/Animal.js';

const cat = new Animal('Felix', 'meow', true, 4);
console.log(cat);

const catFromDefault = new DefaultAnimal('Felix', 'meow', true, 4);
console.log(catFromDefault);
