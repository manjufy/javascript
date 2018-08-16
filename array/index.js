/**
 * Arrays are list-like objects
 */
const drivers = ['Sabestian Vettel', 'Lewis Hamilton', 'Fernando Alonso']
console.log(drivers, drivers.length)
// [ 'Sabestian Vettel', 'Lewis Hamilton', 'Fernando Alonso' ] 3

// Loop over an array
drivers.forEach((driver) => {
    console.log('Driver: ', driver)
})

// Add element to an array
drivers.push('Daniel Ricciardo')
console.log(drivers, drivers.length)

// Remove from the ened of an array
drivers.pop()
console.log(drivers, drivers.length)

// Remove from the front of any array
drivers.shift()
console.log(drivers, drivers.length)

// Add to the front of an array
drivers.unshift('Sabestian Vettel')
console.log(drivers, drivers.length)

// Find the index of an item 
console.log(drivers.indexOf('Sabestian Vettel')) // 0

// Remove an item by index position and number of items to be remove from the position
drivers.splice(drivers.indexOf('Daniel Ricciardo'), 2)
console.log(drivers, drivers.length)

const driversCopy = drivers.slice()
console.log(driversCopy)

// TIPS
var promise = {
    'var': 'Var is reserved word',
    'array': 'array is also reserved word'
}

// Object properties which happen to be reserved words can only be accessed as string literals
console.log(promise['var'], promise['array'])
console.log(promise.var) // can access through dot notation only in firefox and chrome

/**
 * Arrays length and numerical properties
 * A JavaScript array's length property and numerical properties are connected
 */
console.log('Drivers length', drivers.length) // 2
drivers[4] = 'Daniel Ricciardo'
console.log('Drivers length', drivers.length) // Increasing the length 5 -> Surprised
drivers.length = 10
console.log('Drivers length', drivers.length) // 10?  Surprised
console.log(Object.keys(drivers)) // Look, we can access array through Object, ['0','1','4']

// Array length
// const names = new Array(4294967296);
// console.log('Names', names) // RangeError: Invalid array length
const names = new Array(4294967295);
console.log('Names', names) // Names [ <4294967295 empty items> ]

var newDrivers = []; 
newDrivers.length = Math.pow(2,32)-1; //set array length less than 2 to the 32nd power 
console.log(newDrivers.length); //4294967295

