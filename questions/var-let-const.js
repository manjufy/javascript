// var vs let vs const
/**
 * A single identifier should only be used to represent a single concept
 * 
 * In Javascript, const means that the identifier can't be reassigned. However const object can have properties mutated
 */
const personObj = {
    name: 'Micheal Schumacher'
}

personObj.age = 50 // mutated property.
console.log(personObj) // { name: 'Micheal Schumacher', age: 50 }

// However we can not reassing personObj with another object
// const personObj = {
//     dob: '1970-01-01'
// }
// Above throws an error - SyntaxError: Identifier 'personObj' has already been declared

/**
 * Use let when we need to reassign a variable. Use one variable to represent one thing.
 */

/**
 * Do not use var
 */

 // In conclusion
 /**
  * const - Is a signal that the identifier won't be reassigned
  * let   - is a signal that the variable may be reassigned, such as a counter in a loop, value swap in an algorithm. used only in the block its defined in
  * var   - is now the weakest signal available.
  */
 // https://medium.com/javascript-sce      ne/javascript-es6-var-let-or-const-ba58b8dcde75