function Animal(className) {
    this.className = className;
}

Animal.prototype.getClass = function () {
    return `Animal class is : ${this.className}`;
}

function Dog(name) {
    this.name = name;
}

// save Animal.prototype in Dog.prototype
Dog.prototype = Object.create(Animal.prototype);

// add constructor reference on Dog prototype
Dog.prototype.constructor = Dog; // otherwise, any object created from Dog.prototype will still say Animal

// add method to Dog prototype
Dog.prototype.getName = function () {
    return this.name;
}

// create dog object
const d = new Dog('Tommy');
console.log(d);
console.log(d.__proto__);

/**
 * At this point, Dog still does not inherit getClass.
 * 
 * Refer to 07-inheritence.js
 */