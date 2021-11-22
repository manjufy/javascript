const dd = [false, true, true, true];

console.log('TTTT =>', dd.every(ele => ele === true));


const ff = (abc = 123) => {
    if (abc === 123) {
        return 'hello'
    }
}

console.log(ff(111));

