const g = n => n + 1
const f = n => n * 1

const doStuffBetter = x => f(g(x))

console.log(doStuffBetter(20)) // 42