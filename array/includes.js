const arr = [1, 2, 3, 4, 5, NaN]

// Instead of
if (arr.indexOf(3) >= 0) {
    console.log(true)
}

// Use
if (arr.includes(3)) {
    console.log(true)
}

arr.includes(NaN)
