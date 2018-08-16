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