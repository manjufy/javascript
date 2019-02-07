/**
 * Expression: Products a value
 * Statement: Performs an action
 * Expression statement: Produces a value and performs an action
 * 
 * At its simplest terms, expressions are evaluated to produce a value. On the other hand, statements are executed to make something happen.
 * 
 * If you can not print it or assign it to a variable, it's an expression. If you can't, its a statement
 */

 // Statements
 /**
  * Statements appear as instructions that do something but don't produce values
  */
 let x = 0
 function declaration() {}
 if (true) {}

// Assign `x` to the absolute value of `y`.
var x
if (y >= 0) {
  x = y
} else {
  x = -y
}


// Expressions
5 + 5 // => 10
lastCharacter("input") // => "t"
true === true // => true

// Expression statements
// Assign `x` as the absolute value of `y`.
var x = y >= 0 ? y : -y


// Function declarations vs function expressions

// https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression