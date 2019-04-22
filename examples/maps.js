const userA = {
	id: 5,
	username: "JimBob",
};

const userB = {
	id: 22,
	username: "Destiny",
};

const visitTracker = new Map();

visitTracker.set(userA, 0);
visitTracker.set(userB, 0);


console.log(visitTracker);
console.log(visitTracker.size);
console.log(visitTracker.has(userA));

// looping through with for..of
// notice: array destructuring for key/val pair
for (let [key, val] of visitTracker) {
	console.log(key, val);
}

// looping over values
// using the iterable
for (let val of visitTracker.values()) {
	console.log(val);
}

visitTracker.clear();