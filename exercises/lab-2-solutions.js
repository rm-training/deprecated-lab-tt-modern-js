
// Exercise 7
//
// Convert the following to ES6
// use classes instead of object.prototype...
// class, constructor, super

class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  static checkType(shape) {
    if (shape.width === shape.height) {
      return 'square';
    }
    return 'shape';
  }
}

class Rectangle extends Shape {
  constructor(id, x, y, width) {
    super(id, x, y);
    this.width = width;
    this.height = width;
  }

  changeWidth(width) {
    this.width = width;
    this.height = width;
  }

}

const shapeThing = new Shape(4, 50, 50);
const squareThing = new Rectangle(5, 12, 15, 30);

console.assert(shapeThing instanceof Shape);
console.assert(squareThing instanceof Rectangle);

// Exercise 8
//
// There is an additional method on all shapes
// Make sure this is added into your class definition (above)
// And modify it so that it doesn't need to use 'bind', 'call' or retain context

Shape.prototype.moveLater = function (x, y, ms) {
  setTimeout(() => {
    this.move(x, y);
  }, ms);
}

console.assert(typeof shapeThing.moveLater === 'function');
shapeThing.moveLater(100, 100, 1);
setTimeout(function () {
  console.assert(shapeThing.x === 100 && shapeThing.y === 100);
}, 3);