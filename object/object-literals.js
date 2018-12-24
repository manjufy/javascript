const sales = 'Toyota'
function carTypes(name) {
    if (name === 'Honda') {
        return name
    } else {
        return `Sorry, we don't see ${name}.`
    }
}

const car = {
    myCar: 'Saturn',
    getCar: carTypes('Honda'),
    special: sales
}

console.log(car)

/**
 * Object property names can be any string, including the empty string.
 */

 const unusualPropertyNames = {
     '': 'An empty string',
     '!': 'Bang!...',
     1: 6,
     'string': 4,
 }

//  console.log(unusualPropertyNames.'') // SyntaxError: Unexpected string
 // If the property name would not be a valid JavaScript identifier or number, it must be encoded in quotes
 console.log(unusualPropertyNames);
 console.log(unusualPropertyNames['']);
 console.log(unusualPropertyNames['1']);