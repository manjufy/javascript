## Memoization

Is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result hen the same inputs occur again.

A cache is simply a temporary data store that holds data so that future requests for that data can be served faster.

In JS, Memoization is built majorly on two concepts
- Closures
- Higher Order Functions (returning functions from functions)

#### Closures

A closure is the combination of a function and the lexical environment within which that function was declared.
Lexical scope in JavaScript simply refers to the physical location of variables and blocks as specified by the programmer while writing code.

##### References

https://scotch.io/tutorials/understanding-memoization-in-javascript