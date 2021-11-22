const error = new Error('Unable to throw up');
console.log(error instanceof Error)
console.log(JSON.stringify(error))
console.log(JSON.stringify(error, Object.getOwnPropertyNames(error)));