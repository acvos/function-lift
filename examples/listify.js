var lift = require('../index');
var map = require('poly-map');

function listUnit(x) {
    if (x instanceof Array) {
        return x;
    } else {
        return [x];
    }
}

var bindToList = map;

var listify = lift(listUnit, bindToList);

var uppercase = listify(function (string) {
    return string.toUpperCase();
});

var log = listify(function (data) {
    console.log(data);
});

log(uppercase('doge'));
log(uppercase(['wow', 'such', 'much']));
