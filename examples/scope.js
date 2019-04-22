// globally scoped
var x = 5;
var y = 10;

function hello(y) {
	var z = 13;
	console.log('X is', x);
	console.log('Y is', y);

	// if (y > x) {
	// 	var z = 12;
	// 	console.log('Z is', z);
	// }
	// console.log('Z is now', z);
}

hello(33);