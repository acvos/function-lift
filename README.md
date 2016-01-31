# function-lift
Lifts functions into the given context: promise, list, maybe, etc.

## Motivation
This tool is heavily inspired by Haskell and the functional programming concept. The main idea of lifting is to abstract away the application control flow in some well-known patterns: .then() in case of promises, for example, or if (x !== undefined)). This ability makes code clean, pure and far more reusable.

## Features
- Allows functions to operate on monadic values
- Supports any function arity

## Installation

```
npm install function-lift
```

## Usage

```javascript
var lift = require('../index');

function promiseUnit(x) {
    ...
}

function bindToPromise(func) {
    ...
}

var promisify = lift(promiseUnit, bindToPromise);

var multiply = promisify(function (number, multiplier) {
    return number * multiplier;
});

var log = promisify(console.log);

// Now we can write asynchronous code in synchronous manner
log(multiply(Promise.resolve(400), Promise.resolve(5)));

// Or mix synchronous and asynchronous values without using any callbacks or .then()
log(multiply(100, 3));
log(multiply(Promise.resolve(200), 4));
log(multiply(300, Promise.resolve(10)));

// I always wanted to do this:
var myNumber = $.get('http://my.end.point/data');
var result = multiply(myNumber, 5);

log(result)

```


