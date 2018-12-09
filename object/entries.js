/**
 * Object.entries() is related to Object.keys, 
 * But instead of returning just keys, it returns both keys and values in the array fashion.
 */

 const cars = {
     BMW: 3,
     Tesla: 2,
     Toyota: 5
 }

 Object.keys(cars).forEach(key => {
     console.log(`Key ${key} ${cars[key]}`)
 })

 // use
 for(let [key, value] of Object.entries(cars)) {
    console.log(`Key ${key} ${value}`)
 }

// ES2017 and onwards

const map = new Map(Object.entries(cars))
console.log(map)