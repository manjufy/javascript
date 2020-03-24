setTimeout(function() {
    console.log('first')
    setTimeout(function() {
        console.log('second')
        setTimeout(function() {
            console.log('third')
            setTimeout(function() {
                console.log('fourth')
            }, 300)
        }, 500)
    }, 400)
}, 500);

const resolver = (msg, timeout) => new Promise((resolve) => {
    console.log(msg)
    setTimeout(resolve, timeout)
})

// with promise then callback
console.log(resolver().then(dd => console.log(dd)))
resolver('First', 500)
    .then(() => resolver('Second', 300))
    .then(() => resolver('Third', 300))
    .then(() => resolver('Forth', 300))

// with async await

async function run() {
    await resolver('Manju 1', 400);
    await resolver('Manju 2', 500);
    await resolver('Manju 3', 500);
    await resolver('Manju 4', 500);
    await resolver('Manju 5', 500);
}

run()