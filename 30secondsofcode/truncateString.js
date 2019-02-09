/**
 * Truncates a string up to a specified length.
 * Determine if the string's length is greater than num. Return the string truncated to the desired length, with '...' appended to the end or the original string.
 * @param {*} str 
 * @param {*} num 
 */
const truncateString = (str, num) => {
    return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
}

console.log(truncateString('Manjunath', 1));