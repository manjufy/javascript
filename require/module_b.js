var a = require('./module_a').a
console.log('A', a) // Here, module_a is not fully loaded yet, hence undefined
delete require.cache[require.resolve('./module_b')]
exports.b = 'Module b from module_b.js'
exports.a = a