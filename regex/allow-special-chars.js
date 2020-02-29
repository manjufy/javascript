// let allow = /[a-zA-Z0-9]/
//    const allow = /[A-Za-z0-9\#\,\)\(\^\s]+$/g
const allow = /^[A-Za-z0-9\#\,\)\(]$/g
const spaces = /\s/

const str = 'WWW3434'
console.log('Contains Special Characters:', allow.test(str))
console.log('Contains space:', spaces.test(str))

const dd = /^([a-zA-Z0-9#,)(])$/g



const newRegEx = /[^a-zA-Z0-9\#\,\)\(]+/
console.log('New checking', !dd.test(str))
console.log('Should only contain', newRegEx.test(str))