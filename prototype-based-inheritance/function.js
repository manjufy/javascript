/**
 * Function without constructor property
 */

function add (a, b) {
    return a + b;
}

console.log('Without Constructor Function => ', add(4,5), add.name, add.constructor === add, add.prototype);

const addition = new add (4,5);
console.log('Constructor Function => ', addition, addition.constructor === add, add.prototype);