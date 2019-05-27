function solution(A) {
    let nWays = 0
    
    if (A.length === 0) {
        throw Error('Empty Input')
    }

    for(i = 0; i < A.length; i++) {
        for (j = i + 1; j < A.length; j++) {
            if (A[i] < A[j]) {
                continue
            } else {
                if ()
                nWays++
            }
        }
    }

    return nWays
}
 
console.log(solution([4,5,2,3,4]))