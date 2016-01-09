var lift = require('../index');

function promiseUnit(x) {
  return Promise.resolve(x);
}

function bindToPromise(func) {
  return function () {
    var promisedArgs = Array.prototype.slice.call(arguments, 0);

    return Promise.all(promisedArgs).then(function (args) {
        return func.apply(undefined, args);
    })
  };
}

var promisify = lift(promiseUnit, bindToPromise);

var multiply = promisify(function (number, multiplier) {
    return number * multiplier;
});

var log = promisify(console.log);

// Here we can treat existing and future values in exactly the same manner
log(multiply(100, 3));
log(multiply(Promise.resolve(200), 4));
log(multiply(300, Promise.resolve(10)));
log(multiply(Promise.resolve(400), Promise.resolve(5)));
