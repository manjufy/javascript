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

setTimeout(start, 100);