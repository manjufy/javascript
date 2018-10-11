// If we have a return statement in swtich, we do not need to have break
function getStatus (status) {
    switch (status) {
        case 'success':
            console.log('In Success')
            return `Status is ${status}`
        case 'failure':
            console.log('In Failure')
            return `Status is ${status}`
    }
}

console.log(getStatus('success'));