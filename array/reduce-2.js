const users = [
    {
        firstName: 'Bob',
        lastName: 'Doe',
        age: 37,
    }, {
        firstName: 'Rita',
        lastName: 'Smith',
        age: 21,
    }, {
        firstName: 'Rick',
        lastName: 'Fish',
        age: 28,
    }, {
        firstName: 'Betty',
        lastName: 'Bird',
        age: 44,
    }, {
        firstName: 'Joe',
        lastName: 'Grover',
        age: 22,
    }, {
        firstName: 'Jill',
        lastName: 'Pill',
        age: 19,
    }, {
        firstName: 'Sam',
        lastName: 'Smith',
        age: 22,
    }
];

/**
 * Get 
 * - Users full name (first name + last name)
 * - Only if they are in their 20's
 * - Only if their full name is 10 characters or longers
 */

 const twentySomethingLongFullNames = users
                                            .filter(user => user.age >= 20 && user.age < 30)
                                            .map(user => `${user.firstName} ${user.lastName}`)
                                            .filter(fullName => fullName.length >=10)
console.log(twentySomethingLongFullNames)

// How to break them down
const isTwenties = user => user.age >= 20 && user.age < 30
const makeFullName = user => `${user.firstName} ${user.lastName}`
const isAtLeastTenChars = fullName => fullName.length >= 10

const twentySomethingLongFullNames2 = users
                                            .filter(isTwenties)
                                            .map(makeFullName)
                                            .filter(isAtLeastTenChars)
console.log(twentySomethingLongFullNames2)
                                            