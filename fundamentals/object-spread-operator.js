const person = {
    first_name: 'Manjunath',
    last_name : 'Reddy',
    age: 100
}

const person2 = {
    address: '223, Richmond Road, Bangalore',
    postal: 23323232
}

console.log({...person, ...person2})

/**
 * Object spread operator iterates over the properties and assigns them to the new object, overriding any keys that already exist.
 */

 // overrides if key already exists

 const person3 = {
     age: 50
 }

 console.log({
     ...person,
     ...person2,
     ...person3
 })