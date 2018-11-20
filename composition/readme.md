# Composition In JavaScript

Definition: The act of combining parts or elements to form a whole - Dictionary.com

Software Development: Is The act of breaking a complex problem down into smaller problems, and composing simple solutions to form a complete solution to the complex problem.

We spend more time maintaining software than we do creating it from scratch, and our bugs impact billions of people all over the world.

What is function composition?

f(g(x)) => f of g of x

Example-1: 
```
const g = n => n + 1
const f = n => n * 2

const doStuff = x => {
    const afterG = g(x)
    const afterF = f(afterG)

    return afterF
}

doStuff(20) // 42
```

Example-2:

Promise Chain
```
const g = n => n + 1
const f = n => n * 2

const wait = time => new Promise((resolve, reject) => setTimeout(resolve, time))

wait(300)
.then(() => 20)
.then(g)
.then(f)
.then(value => console.log(value)) // 42
```

`if you are chaining, you're composing`

**Writing functions without mention of the arguments is called point-free style**

What is object composition?

"Favour object composition over class inheritance" -> the Gang of Four, Design Patterns: Elements of Reusable Object Oriented Software

*In computer science, a composite data type or compound data type is any data type which can be constructed in a program using the programming language's primitive data types and other composite types. The act of constructing a composite type is known as composition*

These are primitive:

```
const firstName = 'Manjunath'
const lastName = 'Reddy'
```

This is a composite

```
const fullName = {
    firstName,
    lastName
}
```

Likewise, all Arrays, Sets, Maps, WeakMaps, TypedArrays, etc are composite datatypes. Anytime you  build any non-primite data structure, you're performing some kind of object composition

**Favour object composition over class inheritance**

Well-known problems in object oriented design:
- The tight coupling problem
- The fragile base class problem
- The inflexible hierarchy problem
- The duplication by necessity problem
- The gorilla/banana problem: You wanted a banana but what you got was a gorilla holding the banana and the entire jungle

The most common form of object composition in JavaScript is known as **object concatenation** (aka mixin compsition). It works like ice-cream. You start with an object (like vanilla ice-cream), and then mix in the features you want.

Ex:

```
// Composites with class inheritance

class Foo {
    constructor () {
        this.a = 'a'
    }
}

class Bar extends Foo {
    constructor (options) {
        super(options)
        this.b = 'b'
    }
}

const myBar = new Bar() // {a: 'a', b: 'b'}

// Building composites with mixin composition
const a = {
    a: 'a'
}

const b = {
    b: 'b'
}

const c = {...a, ...b} // {a: 'a', b: 'b'}

```

##  Lambda Calculus

Lambda calculus is all about function composition.

- **Functions are always anonymous** 
    ```
        const sum = (x, y) => x + y
        // (x, y) => x + y is anonymous function
    ```

- **Functions in lambda calculus only accept a single input**. They're unary. If you need more than one parameter, the function will take one input and return a new function that takes the next.
    ```
        (x, y) => x + y => is x => y => x + y
    ```
- **Functions are first class**, meaning that functions can be used as inputs to other functions, and functions can return functions.

Together, these features form a simple, yet expressive vocabulary for composing software using functions as the primary building block.

The classic function composition takes the output from the one function and uses it as input for another function.

Example:

```
f . g
```
Can be written as:
```
compose2 = f => g => x => f(g(x))

double = n => n * 2
inc = n => n + 1
compose2(double)(inc)(3)

`f` is `double()`, `g` is `inc`, and `x` is `3`
```

1. The first passes double and returns a new function.
2. The returned function takes inc and returns a new function.
3. The next returned function takes 3 and evaluates f(g(x)), which is now double(inc(3)).
4. x evaluates to 3 and gets passed into inc().
5. inc(3) evaluates to 4.
6. double(4) evaluates to 8.
7. 8 gets returned from the function.

## Reference

https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea

https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c

