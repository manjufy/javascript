/**
 * Object.values
 */

 const cars = {
     BMW: 3,
     Tesla: 2,
     Toyota: 3
 }

const vals = Object.keys(cars).map(key => cars[key])
console.log(vals)

//ES2017
const values = Object.values(cars)
console.log(values)