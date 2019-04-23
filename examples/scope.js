// Prior to ES6
// We only had Function Scope

// these vars are globally scoped
let x = 5;
let y = 10;

function hello(y) {
	// this var is function scoped
	const z = 13;
	console.log('X is', x);
	console.log('Y is', y);

	if (y > x) {
		const z = 12;
		console.log('Z is', z);
	}
	console.log('Z is now', z);
}

hello(33);

// in a browser... without 'strict mode'
// this would output...?
var x;
// warning: do not use this, buggy side-effect
// let & const do not do this
console.log(window.x); // only in the browser
console.log(x);