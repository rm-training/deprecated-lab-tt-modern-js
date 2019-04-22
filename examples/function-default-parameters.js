function saySomething(name, words) {
	name = typeof name === 'undefined' ? 'Anon' : name;
	words = typeof words === 'undefined' ? 'nothing' : words;

	console.log(name + ' says: ' + words);
}

saySomething();
saySomething("Ryan", "Hello");

//
// You can use functions to set defaults, too
//
function getter() {
	return 25;
}
function testFunction(x = getter()) {
	console.log("X is", x);
}
testFunction();
testFunction(5);