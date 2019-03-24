(async () => {
    try {
        return await new Promise((resolve, reject) => {
            resolve('First call')
            resolve('Second call')
            reject(new Error('foo'))
        })
    } catch {
        console.log('CAUGHT');
    }
})()