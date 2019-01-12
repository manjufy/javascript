/**
 * Object.assign
 */

 const person = {
     id: 1,
     name: 'Manjunath',
     age: 25
 }

 const newPerson = Object.assign(person, {
     address: 'Jalan 123'
 })

 const newPerson2 = {...newPerson, 
     postcode: 12344, age: 35
 }
 console.log(newPerson)
 console.log(person)
 console.log(newPerson2)