function Animal(className) {
    this.className = className;
}

Animal.prototype.getClass = function () {
    return `Animal class is : ${this.className}`;
}

function Dog(name) {
    // execture parent constructor
    Animal.call(this, 'Animal');
    this.name = name;
}

// save Animal.prototype in Dog.prototype
Dog.prototype = Object.create(Animal.prototype);

// add constructor reference on Dog.prototype
Dog.prototype.constructor = Dog;

Dog.prototype.getName = function () {
    return this.name;
}

const d = new Dog('Tommy');
console.log(d);
console.log('d.getClass()', d.getClass());