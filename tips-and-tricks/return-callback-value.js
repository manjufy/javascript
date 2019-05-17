/**
 * How to return callback value
 */


 new Promise((resolve, reject) => {
    fn.method(a, (error, data) => {
        if (error)
            reject(error)

        resolve (data)
    })
 });