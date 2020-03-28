/**
 * Implicit coercion means that the JavaScript interpreter converts a piece of data from one type to another without explicity calling a method
 * https://delapouite.com/ramblings/javascript-coercion-rules.html
 */

 const value = 1 + '2';
 console.log(value) // 12 because 1 is converted to '1' implicitly.

 const trueFalse = true + false;
 console.log(trueFalse); // 1 because true is converted to 1 and false is converted to 0 and they're added together

 const truePlusNumber = true + 12;
 console.log(truePlusNumber); // 13 because true is converted to 1 and added to 12

 const multiple = 3 * '4';
 console.log(multiple) // 12 because 4 is implicitly converted to integer 4