function Animal(className) {
    this.className = className;
}

Animal.prototype.getClass = function () {
    return `Animal class is ${this.className}`;
};

function Dog (name) {
    this.name = name;
}
// save Animal.prototype in Dog.prototype
Dog.prototype = Animal.prototype;

// add method Dog Prototype
Dog.prototype.getName = function () {
    return this.name;
}

// create a dog object
const d = new Dog('Tommy');
console.log(d);
console.log(d.__proto__, d.prototype, Animal.prototype);

/**
 * To avoid direct reference between these two prototypes, one might the copy (deep clone) 
 * Animal.prototype object and assign it to Dog.prototype. In that case, this won’t be an inheritance. 
 * We want Dog.prototype not to carry methods of Animal.prototype but only to reference them. 
 * This is where Object.create function is useful. Read more about it on MDN.
 * 
 * Refer 06-inherience.js
 */