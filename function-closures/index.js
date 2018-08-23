// a function can access all variables defined inside a function

function foo() {
    var a = 1

    return a * a
}

// but a fuction can also access variables defined outside the function

var a = 1

function bar() {
    return a * a
}

// in a web page global variables belong to window object

// Variables created without the keyword var, are always global, even if they are created inside a function.
// let i = 6

function aer() {
    console.log(i)
}

// aer() // 6

function ber() {
    let i = 7

    var a = function () {
        return i
    }

    return a
}

console.log(ber()()) // 7
