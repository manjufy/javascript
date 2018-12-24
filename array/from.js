/**
 * Array.from
 */
// Creates a new, shallow-copied Array instance from an array-like or interable object

function generateInvoice(amt, tax, name) {
    console.log(JSON.stringify(Array.from(arguments)))
}

console.log(generateInvoice(10, 0.01, 'Manjunath'));