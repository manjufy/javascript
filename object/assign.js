/**
 * Object.assign
 */

 const person = {
     id: 1,
     name: 'Manjunath',
     age: 25,
     family: {
         name: 'Reddy'
     }
 }

 const newPerson = Object.assign(person, {
     address: 'Jalan 123'
 })

 const newPerson2 = {...newPerson, 
     postcode: 12344, age: 35
 }
 newPerson2.family = {name: 'New Reddy' };
 console.log(newPerson)
 console.log(person)
 console.log(newPerson2)
 console.log(newPerson)