const robot = {
	id: 5,
	name: 'Robot',
	speak: function () {
		return `${this.name} says: beep boop beep`;
	},
};

// when left value is an array
// and right value is an array
// the right will be desctructured into the left
var { name: robotName } = robot;
console.log(robotName);

// you must use var/let/const
// or ()
// causes SyntaxError
// because JavaScript interprets the left as a block statement
//{ name: robotName } = robot; // SyntaxError

// solution: wrap the whole thing in parenthesis
// or use var/let/const
({ name: robotName } = robot);
console.log(robotName);

// you can use the same prop name/var names for convenience
var { name, id } = robot;
console.log(name, id);

// You can use defaults
var { otherThingy: robotThingy = "Default Robot" } = robot;
console.log(robotThingy);

var { x = 5 } = {};
console.log(x); // 5!

// Use them in function args to pass object params
// as named function arguments
function initConfig({ setupFn, afterSetupFn, loggerId }) {
	console.log(setupFn, afterSetupFn, loggerId);
}
initConfig({
	setupFn: () => { },
	afterSetupFn: () => { },
	loggerId: 'AFJF32fDFE9',
});

// Or destructure return params
// to selectively fetch results from a large object
// this is similar to how ES6 Modules (import) works
function returner() {
	return {
		id: 1,
		other: () => { },
	}
}

var { other } = returner();
console.log(other);