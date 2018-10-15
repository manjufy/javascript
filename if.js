const a = 1;
const b = 2;
const c = 'Test'
if (a && b && c === 'Test') {
    console.log('Yes a and b')
} else {

}

// multiple ifs
const x = 1;
const y = '';
const z = 1;
const errors = {
    error: 'Invalid Input',
    details: []
}

errors.details.push(!x ? 'Invalid A' : '')
errors.details.push(!y ? 'Invalid B' : '')
errors.details.push(!z ? 'Invalid C' : '')

console.log(errors.details.filter(error => error))
