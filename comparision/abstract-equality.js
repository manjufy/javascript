/**
 * http://ecma-international.org/ecma-262/5.1/#sec-11.9.3
 * x == y
 */

 //If x is null and y is undefined, return true.
 console.log(null == undefined) // true

 // If x is undefined and y is null, return true.
 console.log(undefined == null) // true

 // If x is +0 and y is −0, return true.
 console.log(+0 == -0)          // true

 // If x is −0 and y is +0, return true.
 console.log(-0 == +0)          // true
 
 console.log({} == {})          // false

 // If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).
 console.log(1 == '1')          // true

 // If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y
 console.log('10' == 10)        // true

 // If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
 console.log(true == 1)         // true
 console.log(true == 'true')    // false
 
 console.log(true == '1')       // true

 console.log(+1 == ""+1)        // true

 console.log(String('manju') == 'manju') // true

 console.log(String('manju') == String('manju'))            // true
 console.log(new String('manju') == new String('manju'))    // false .toString() [toString]
 console.log(new String('manju') == 'manju')                // true

 console.log(-0 == +0) // true

 console.log([1, 2] == '1,2') // true

console.log(-0 == +0);
console.log(-0 === +0); // https://stackoverflow.com/questions/7223359/are-0-and-0-the-same

console.log("" == false)    // true

console.log("true" == true)    // false

console.log(typeof [], typeof '');
console.log([] == '');  // true
console.log([] == 0);   // true
console.log([''] == '') // true
console.log([0] == '0') // true
console.log([0] == ''); // true
console.log('' == [0]); // true
console.log([null] == '');
console.log([null] == null)
console.log(4 < 5 < 6); // true; In JavaScript, comparisons are done from left to right
console.log(6 > 5 > 4);  // false; first 6 > 5 evaluated and returns true. Then true > 4 which is 1 > 4, which is false