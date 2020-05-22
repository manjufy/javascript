const user = {
    id: 1234,
    age: 30,
    department: [{
        name: 'CS'
    }]
};

const newUser = {...user}

newUser.department[0].name = 'NEW CS'
console.log(user)
console.log(newUser)