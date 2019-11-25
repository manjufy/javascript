const person = {
    id: 1234,
    name: 'Manjunath',
    age: 100,
    city: 'Kuala Lumpur',
    country: 'Malaysia',
}

// ['age', 'city'].forEach(item => {
//     console.log(item)
// })

// console.log(person)


const array1 = ['a', 'b', 'c'];

['age','city', 'test'].forEach(field => delete person[field])
console.log(person)