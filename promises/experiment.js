const getUser = () => {
    return new Promise((resolve, reject) => {
        resolve([
            {
                id: 1,
                name: 'Manju'
            },
            {
                id: 1,
                name: 'Vettel'
            },
        ])
    })
}

const start = async () => {
    console.log('Start')
    const user = await getUser()
    // const user = await getUser().then(data => data); // same as above statement
    console.log('User', user);
}

const start2 = async () => {
    return getUser()
}

setTimeout(start, 100); // execute immediately

// getUser is returned without being await so that we could `then` it here.
start2()
    .then(data => {
        console.log('User', data)
    })