/**
 * The purpose of this pattern is to enhance the functionality of an object without modifying the object itself.
 * The wrapper that enhances the functionality is called a "proxy" while the target object is called "subject".
 * 
 * This pattern provides a lot of benefits, here are some of them:

Access control — proxy can verify that the client has an access to the subject
Argument validation — proxy can validate function arguments before passing them to the subject
Caching — proxy can cache the result of some heavy computing performed by the subject to avoid unnecessary recomputing.
*/

class Pet {
    constructor(name, species, noise) {
        this.name = name;
        this.species = species;
        this.noise = noise;
    }
 
    makeNoise() {
        console.log(this.noise);
    }
 
    eat() {
        console.log(`${this.name}: nom nom nom`);
    }
}

function createPetProxySimple(subject) {
    return {
        // enhanced method
        makeNoise: function () {
            console.log(`${subject.species} ${subject.name} says '${subject.makeNoise()}'`);
        },
 
        // deletegated method
        eat: function() {
            subject.eat()
        }
    }
}

function createPetProxy(subject) {
    // get the prototype of the subject and copy it
    const prototype = Object.getPrototypeOf(subject);
 
    function Proxy(subject) {
        this.subject = subject;
    }
 
    Proxy.prototype = Object.create(prototype);
    // enhanced method
    Proxy.prototype.makeNoise = function () {
        console.log(`${this.subject.species} ${this.subject.name} says '${this.subject.makeNoise()}'`);
    }
 
    // delegated method
    Proxy.prototype.eat = function () {
        this.subject.eat();
    }
 
    const newProxy = new Proxy(subject);
 
    return newProxy;
}

const emma = new Pet('emma', 'cat', 'huuur')
const enhancedEmma = createPetProxy(emma);
if (enhancedEmma instanceof Pet) {
    console.log(true);
}