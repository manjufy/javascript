// JavaScript Hoisting
// Behaviour of moving declarations to the top
x = 5;
console.log('Where am I', x)
var x;
console.log(x) // 5


// JavaScript only hoists declarations, not initialisations

var l = 10
console.log('l + m = ', l, m) // 10 undefined; Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.
var m = 11

