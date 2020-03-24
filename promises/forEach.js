const getDrivers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Hamilton'
                },
                {
                    id: 1,
                    name: 'Vettel'
                },
            ])
        }, 500);
    })
}


[1,2,3,4,5,6].forEach(async (item) => {
    console.log('In forEach');
    const driver = await getDrivers();
    console.log('after await....', driver);
});

console.log("DONE");