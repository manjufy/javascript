const aTail = (head, ...tail) => tail
console.log(aTail(1,2,3,4)) // [2,3,4]

const shiftToLast = (head, ...tail) => ({...tail, head})
console.log(shiftToLast(1,2,3,4)) // [2,3,4,1]