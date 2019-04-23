// function helloA() {
//   return 'Hello';
// }

// concise, implied return
let helloA = () => 'Hello';

// a bit further
helloA = () => {
  return 'Hello';
}

// no `arguments`
helloA = () => {
  // Throws an error
  // console.log(arguments);

  // no own 'this', currently will be global context
  console.log(this);
}

const cat = {
  name: 'Felix',
}

cat.helloA = helloA;
cat.helloA(); // will still reference global context

// they are primarily special
// because of lexically bound 'this' (context)

helloA();
