// given a dummy asynchronous functionality
// ie: ajax()
function asyncCall(returnValue, delayMs) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(returnValue);
    }, delayMs);
  });
}

async function doStuff() {
  let result = await asyncCall(10, 100);
  result = await asyncCall(result + 10, 100);
  result = await asyncCall(result + 10, 100);
  result = await asyncCall(result + 10, 100);
  return result;
}

doStuff().then((result) => console.log(result));