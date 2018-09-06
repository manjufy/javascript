const [a, b] = [10, 20]
console.log(a,b) // 10, 20

const [c, d, ...rest] = [10, 11, 12, 13, 14]
console.log(c, d, rest) //10 11 [12, 13, 14]

// default values

const [ amount = 0, total = 0] = [100]
console.log(amount, total) // 100 0