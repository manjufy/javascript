const name = process.argv[2]
function printName(name, cb) {
    if (!name) {
        return cb('name is empty')
    }

    return cb(null, name)
}

printName(name, function(err, name) {
    if (err) {
        console.log(err)
        return
    }

    console.log('My name is ', name)
})

// How to run

/**
 * node callback Micheal => Should print My name is Micheal
 * node callback => show print `name is empty`
 */