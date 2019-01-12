/**
 * Primitive types in Javascript.
 * 
 * A primitive value, datatype is data that is not an object and has no methods to act on.
 * JS 6 primitives: string, number, boolean, null, undefined, symbol
 */

 null
 undefined
 // Primitive wrapper objects
 Number // 0, 3.14, NaN, Infinity
 Boolean
 String
 Symbol


console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number" (`typeof NaN` is also "number")
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof {}); // "object"
console.log(typeof function () {}); // "function"
console.log(typeof []); // "object"