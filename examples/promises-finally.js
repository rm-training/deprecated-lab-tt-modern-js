const myProm = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10);
	}, 1000);
});

myProm.then((val) => {
	console.log(`Resolved with ${val}`);
}).finally(() => {
	console.log('Totally resolved');
}).then((val) => {
	console.log(`Resolved with ${val}`);
});

