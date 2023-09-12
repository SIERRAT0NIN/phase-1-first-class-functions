function callback() {
  console.log("hello world");
}
function receivesAFunction(callback) {
  callback();
}
receivesAFunction();

function returnsANamedFunction() {
  return callback;
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log("final test please work");
  };
}
