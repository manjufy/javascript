const substract = a => b => a - b;
const param1 = substract(5)
const param2 = param1(3)

console.log(param2)