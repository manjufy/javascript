// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

Function.prototype.construct = function(aArgs) {
    var oNew = Object.create(this.prototype);
    console.log('Before', oNew)
    this.apply(oNew, aArgs);
    console.log('After', oNew)
    return oNew;
}

function MyConstructor() {
    console.log(arguments)
    for(var nProp = 0; nProp <arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp]
    }
}

var myArray= [4, 'Hello World!', false];
var myInstance = MyConstructor.construct(myArray)
console.log(myInstance)

// min/max number in an array
var numbers = [5, 6, 2, 3, 7];
// using Math.min/Math.max apply
var max = Math.max.apply(null, numbers);
console.log('MAX = ', max)
var min = Infinity
console.log('MIN = ', min)

var originalfoo = someobject.foo;
someobject.foo = function() {
  // Do stuff before calling function
  console.log(arguments);
  // Call the function as it would have been called normally:
  originalfoo.apply(this, arguments);
  // Run stuff after, here.
}
