function helloA() {
  return 'Hello';
}

// concise, implied return
const helloB = (...args) => {
  console.log(args);
}

helloB(1, 2, 3, 4, 5);

// a bit further

// no `arguments`

// no `this`

// they are primarily special
// because of lexically bound 'this' (context)
