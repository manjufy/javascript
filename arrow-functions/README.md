# JavaScript arrow function
1. Arrow function does not bind its own `this, arguments, super, or new.target`
2. Arrow functions are always anonymous
3. Rest parameters ( ...rest) and default paramters are supported
4. Arrow functions cannot be used as constructors and will throw an error when used with `new`
5. The `yield` keyword may not be used in an arrow function's body (except when permitted within functions further nested within it). As a consequence, arrow functions cannot be used as generators.
6. No biding `arguments`: Arrow functions do not bind an arguments object Thus, arguments is simply a reference to the name in the enclosing scope.
