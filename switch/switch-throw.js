const status = 'PENDING'

switch(status) {
    case 'DONE': 
        throw new Error('DONE');
    case 'PENDING':
        throw new Error('PENDING');
    case 'IN_PROGRESS':
        throw new Error('IN_PROGRESS');
    default:
        console.log('In Default')
}

// Note: when we throw an error, we do not need to use break