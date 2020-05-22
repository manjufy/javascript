// exports.test = () => 'test';
// module.exports.test2 = () => 'test2';
// module.exports.test3 = () => {
//    return 'test3'
// };

// exports = function () {};

module.exports = {
   get: () => 'test' 
};
exports.getById = function(){};

console.log(module.exports);