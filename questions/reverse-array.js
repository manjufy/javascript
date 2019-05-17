const numberArr = [1, 2, 3, 4, 5, 6]
const reversedArr = []
for (i = numberArr.length -1; i >= 0; i--) {
    reversedArr.push(numberArr[i])
}

console.log(reversedArr);
console.log(numberArr.reverse())