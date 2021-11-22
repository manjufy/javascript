const person = {
    name: 'Manjunath',
    age: 44,
}

const personDescriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(personDescriptor);