function Person(name) {}

Person.prototype.constructor // actually points to Person(name) {}

class Person {
    constructor() {}
}

// same as
Person.prototype.constructor

Person.constructor // points to f Function

/**
 * Side Note: In the case of the ES5-style functions, the function itself is the
 * constructor. But ES6 class keyword places constructor inside of its scope. This
 * is just a syntactic difference.
 */