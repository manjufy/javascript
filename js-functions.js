/**
 * JavaScript Functions 4 ways
 */

 // Function declaration
 function sqaure(x) {
     return x * x;
 }

 // Function expression
 const square1 = function (x) {
     return x * x;
 }

 // Arrow Function Expression
 const square2 = (x) => {
     return x * x;
 }

 // Concise Arrow Function Expression
 const square3 = x => x * x;

 // IIFE

 (function mul(x) {
    return x * x;
 })(3);