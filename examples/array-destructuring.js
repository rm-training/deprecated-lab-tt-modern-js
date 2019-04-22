const arr1 = ['a', 2, () => 10, 'leftovers'];

// when left value is an array
// and right value is an array
// the right will be desctructured into the left
[a, num, fun, ...rest] = arr1;
console.log(a, num, fun(), rest);

// You can use defaults
[a = 0, b = 0] = [1];
console.log(a, b);

// You can ignore values
[a, , fun] = arr1;

// Neat: This can be used to swap a variable value
[a, b] = [b, a];