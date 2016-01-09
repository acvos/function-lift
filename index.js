var curry = require("curry");
var map = require("poly-map");

function lift(unit, bind, func) {
  var liftedFunc = bind(func);

  return function (x) {
    var args = Array.prototype.slice.call(arguments, 0)
        wrappedArgs = map(unit, args);

    return liftedFunc.apply(undefined, wrappedArgs);
  };
}

module.exports = curry(lift);
