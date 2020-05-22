const arr = [1,2,3,4,5]
for await (ele of arr) {
    console.log('Element =', ele)
}