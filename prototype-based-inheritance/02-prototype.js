/**
 * __proto__ property carries referenc tot he prototype object of constructor function
 */

function Animal(name) {
    this.name = name;
}

Animal.prototype.getName = function () {
    return `Animal name is ${this.name}`;
}

Animal.prototype.generation = '100';

const a = new Animal('DOG');

console.log('Animal Prototype =>', Animal.prototype);
console.log('a.__proto__ => ', a.__proto__);
console.log('Animal.prototype === a.__proto__', Animal.prototype === a.__proto__);
console.log('a.getName() ==>', a.getName());
console.log('a.generation ==>', a.generation);


