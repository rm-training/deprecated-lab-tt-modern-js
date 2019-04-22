function adder() {
	// prior to es2015....
	var args = Array.prototype.slice.call(arguments);

	console.log(args);

	return args.reduce((acc, curr) => {
		return acc + curr;
	}, 0);
}

let sum = adder(1, 2, 3);
console.log(sum);