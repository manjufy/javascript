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

`const obj = {}`

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