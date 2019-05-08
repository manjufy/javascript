function printName(name, cb) {
    return cb(name)
}

printName('manju', function(name) {
    console.log(name)
})