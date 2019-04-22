const name = 'Abe';
const age = 101;

console.log(
	`${name} is ${age} years old`
);

function convertStringAge(str, name, age) {
	let ageString = age > 100 ? 'super old' : age;
	return `${name}${str[1]}${ageString}`;
}

console.log(convertStringAge`${name} is ${age} years old`);