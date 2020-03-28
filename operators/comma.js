/**
 * Comma operator.
 * The comma is only a comma operator when it acts on two expressions;
 * lefthand expression; righthand expression.
 * <h3>What does it do</h3>
 * It is used to execute two expressions sequentially. It evaluates each of its operands from left to right first and then value of the last 
 * operand will be returned as the result.
 * 
 * https://medium.com/javascript-in-plain-english/comma-operator-in-javascript-cfe170f5b4d3
 * 
*/

let x = 10;
x = (x--, x);
console.log(x);
// expected output: 9
x = (20, 30);
console.log(x);
// expected output: 30

x = (20), 30; // 20. Here statement ends up storing 20 in x and throwing away the result of the right-hand expression
console.log(x);

const varr = (console.log(1),console.log(2), console.log(3), 5);
console.log(varr);

/**
 * Semicolons separate statements, where as commas seprate expressions.
 */

var var1, var2, var3;
var1 = var2 = 10, var3 = 20; // Returns  in console
console.log(var1); // 10 (left-most)
var1 = (var2 = 30, var3 = 40); // Returns 6 in console
console.log(var1); // 40 (right-most)


const map = {
    [1 << 0]: "Batman",
    [1 << 1]: "Superman",
    [1 << 2]: "Flash"
  };
  console.log(map);
  // { '1': 'Batman', '2': 'Superman', '4': 'Flash' }