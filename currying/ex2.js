function person(firstName) {
    return age => {
        return city => {
            return `${firstName}:${age}:${city}`
        }
    }
}

const me = person('Manjunath Reddy')(32)('Kuala Lumpur');
console.log('Person', me)
