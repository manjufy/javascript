# Objects in JavaScript

JavaScript objects can be thought of as simple collections of name-value pairs. As such, they are similar to:

- Dictionaries in Python
- Hashes in Perl and Ruby
- Hash tables in C and C++
- HashMaps in Java
- Associate arrays in PHP

Two ways to create an object in JavaScript

`const obj = new Object()`

and

`const obj = {}` // literal notiation

```
var obj = {
  name: 'Carrot',
  for: 'Max', // 'for' is a reserved word, use '_for' instead.
  details: {
    color: 'orange',
    size: 12
  }
};
```

Anything that is not a primitive (null, undefined, strings, numbers, boolean) value is an `Object`.

*Computed Properties*

const personName = 'Manjunath'
const obj = {
  [personName.toUpperCase()]: 'Alex',
}

console.log(obj)

*To check for existance of property*

'personName' in obj //true

*Iteration*

- for-in loop

```
for (const property in obj) {
  console.log(obj[property])
}
```

- Object.keys(obj) - returns object's own keys in an array
- Object.values(obj) - returns array of values instead of keys
- Object.entries(obj) - returns array of key,values
```
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
```

*Copying*

const person1 = {
  firstName: 'Manjunath',
  lastName: 'Reddy',
}

const person2 = person1;

console.log(person1, person2)