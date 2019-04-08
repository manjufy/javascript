(() => {
    try {
        return new Promise((resolve, reject) => {
            return Promise.reject(' --- Promise Rejection ----')
            console.log('Continuing after the project rejection.')
        })
    } catch (error) {
        console.log('CAUGHT', error)
    }
})()