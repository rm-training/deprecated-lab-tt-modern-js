function helloA() {
	return "Hello";
}
// becomes
const helloB = () => "Hello";

console.log(helloA());
console.log(helloB());

// larger function blocks are ok
const helloC = (name) => {
	if (typeof name !== "undefined") {
		return "Hello " + name;
	}
	return "Hello anon";
}

console.log(helloC());
console.log(helloC("Ryan"));

// But: no arguments!

function testFunctionPropertiesA() {
	console.log(arguments);
	console.log(this);
}
testFunctionPropertiesA();
const testFunctionPropertiesB = () => {
	//console.log(arguments); // ReferenceError!
	console.log(this);
}

testFunctionPropertiesB();

// they are mostly special because of lexically bound 'this' (context)
