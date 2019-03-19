/**
 * MDN Promise example
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 */
const resolveAfter2Seconds = function () {
    console.log('Starting slow promise')
    return new Promise(resolve => {
        setTimeout(function() {
            resolve('slow')
            console.log('Slow promise is done')
        }, 2000)
    });
}