/**
 * A constructor function is like a normal function but it is invoked with new keyword.
 */

const fun = function () {
    return 'function constructor';
};

console.log(fun.constructor);

function Animal (name) {
    this.name = name;

    this.getName = function () {
        return `Animal Name is => ${this.name}`;
    }
}

console.log(Animal(), 'Constructor =>', Animal.constructor);

const anml = new Animal('Dog'); // When we create an object using a constructor function, the object carries a reference to this prototype
console.log('animal Object => ', anml);
console.log('animal name => ', anml.getName(), anml.name);
console.log('constructor name => ', anml.constructor === Animal);