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

Question: Essence of Software Development?

## Reference

https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea

https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c

