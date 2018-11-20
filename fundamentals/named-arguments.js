/**
 * JavaScript can take object literals as agruments and 
 * use destructuring assignment in the parameter signature
 * in order to achieve the equivalent of named arguments
 */ 

const createUser = ({
     name = 'Guest',
     city = undefined
 }) => {
    return {
        name, city
    }
 }

// OR

const createUserV2 = ({
    name = 'Guest',
    city = undefined
}) => ({
    name,
    city
})

 console.log(createUser.toString())

 const manju = createUser({
     name: 'Manjunath Reddy',
     city: 'KL'
 })

 console.log(manju)