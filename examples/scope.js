// Converted to ES6+

// these vars are globally scoped
let x = 5;
const y = 10;

x = 12;

function hello(y) {
	// this var is function scoped
	const z = 13;
	console.log('X is', x);
	console.log('Y is', y);

	if (y > x) {
		// this z is scoped to the if {} block
		const z = 12;
		console.log('Z is', z);
	}
	console.log('Z is now', z);
}

hello(33);

// in a browser... without 'strict mode'
// this would output...?
//console.log(window.x);

// arbitrary block
{
	const x = 10;
}