const person1 = {
    firstName: 'Micheal',
    lastName: 'Schumacher',
    address: {
        stree: '34, Main Street',
        postcode: 2232323,
        city: 'Kuala Lumpur',
        country: 'Malaysia'
    }
}

const person2 = {
    ...person1
}

person1.firstName = 'Micheal M',
person1.address.country = 'United Kingdom'

console.log(person1, person2) // person2 gets its own object and firstName should have changed.
/**
 * However, this is only effective for the top-level primitive properties. In this case, person2 gets its own name property. However, nestedObj is still copied shallowly.
 * Hence, person1.address.country is also applied to person2.address.country
 */