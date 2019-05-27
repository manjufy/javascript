function solution(A, B) {
    if (isNaN(A) || isNaN(B)) {
        throw Error("Input must of number")
    }

    const result = []
    
    const isValidPush = (val) => {
        return (result[result.length -1] !== val || result[result.length - 2] !== val)
    }

    const push = (val) => {
        if (A != 0 || B !=0) {
            result.push(val);
        }

        if (val === 'a') A--;
        else if (val === 'b') B--;
      }

      while (A >= 0 && B >= 0) {
        if (A >= B) {
            if(isValidPush('a')) 
                push('a');
            else push('b')
        } else if (B >= A) {
            if (isValidPush('b')) push('b')
            else push('a')
        }
      }

    return result.join('');
}

console.log(solution(5, 3))

// https://stackoverflow.com/questions/51905412/javascript-dynamic-array-of-characters-based-on-consecutive-letters-conditions