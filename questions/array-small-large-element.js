/**
 * Find the smallest and largest numbers in an array of integers
 */
 const smallBig = (arr) => {
    for(i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return [arr[0], arr[arr.length -1]]
 };

const numbers = [6, 8, 2, 3, 7, 5, 8, 99, 10, 50]
console.log(smallBig(numbers))

const numbers2 = [0, 78, 46, 43, 31, 89, 109]
console.log(smallBig(numbers2))