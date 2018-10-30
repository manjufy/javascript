const deposit = 0

if (deposit == '') {
    console.log('Deposit is empty!')
}

if (0 == deposit) {
    console.log('We don\'t have money')
}

if ('0' == deposit) {
    console.log('We don\'t have money')
}

if (deposit == '0') {
    console.log('We don\'t have money')
}

if (deposit == null) {
    console.log('Bloody hell! wrong deposit value')
}


console.log('toString()', deposit.toString())
console.log('toString()', deposit.toString().length)

const balance = ''
console.log('balance toString()', balance.toString().length)