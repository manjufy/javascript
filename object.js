// Wired Object experiments

const person = {
    name: ('Manjunath', 'Reddy'),
    addr: ('Kuala Lumpur')
};

console.log(JSON.stringify(person))
console.log(typeof person.name)
console.log((person.name).toString())
console.log(('Manjunath', 'Reddy'));

const me = ('Manjunth', 'Reddy');
console.log(me, typeof me)
const you = ('A', 'B').toString()
console.log(you) // B
console.log(String('AA', 'BBB')) // AA

const object = {
    a: 'somestring',
    b: 42,
    c: false,
    d: ('A', 'B', ('C', 'D'))
}

console.log(Object.values(object))


const myList = {
	a: (1, 2, 3)
}

console.log(myList); // 3 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator


// https://mathiasbynens.be/notes/javascript-properties
// https://blog.jayway.com/2013/04/01/three-undocumented-features-of-json-3/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator