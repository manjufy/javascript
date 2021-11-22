/**
 * A prototype is a kind of object which functions always have. This is saved inside the hidden prototype property of a fucntion.
 * This isn't much useful when we are using a function as a normal function to do or return something but its very useful
 * when a function is used as constructor.
 * Reference: https://medium.com/jspoint/prototype-based-inheritance-and-prototype-chain-in-javascript-es5-29c14f3972fa
 */

function Animal(name) {
    this.name = name;

    this.getName =  function () {
        return `Animal name is ${this.name}`;
    }
}

console.log(Animal.prototype); // {}
console.log(Animal.constructor); // [Function: Function]

/**
 * Let’s take a look at Animal constructor again. 
 * We have a property name which can be different because we are receiving name as an argument. 
 * Hence, every object created by Animal constructor can have a different name and we understand that. 
 * But do we really need getName function on every object? Can’t object reference a function with key getName. 
 * This function might be stored somewhere in the memory and object just reference it. 
 * This way, we can save so much space and object doesn’t have to carry so many functions with it which increases its size.
 * 
 * Refer to 02-prototype.js
 */
