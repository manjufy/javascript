exports.add = (a, b) => a + b
exports.sum = (a, b) => a + b
console.log(module)

/**
 * Module {
  id: '.',
  exports: { add: [Function] },
  parent: null,
  filename: '...../exports.js',
  loaded: false,
  children: [],
  paths:
   [.....] }
 */


console.log(exports)
/**
 * { add: [Function] }
 */