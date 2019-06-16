const person = {
    schema: {
        table: 'person',
        url: '/api/persons/',
        name: {
            type: 'string',
            label: 'Name',
        },
        age: {
            type: 'integer',
            label: 'Age',
        }
    }
}

const newPersonSchema = {
    ...person.schema
};
console.log(newPersonSchema);
newPersonSchema.name.label = 'First Name';
newPersonSchema.age = {
    type: 'integer',
    label: 'New Age',
}
newPersonSchema.url = '/api/new-items/'
console.log(person);