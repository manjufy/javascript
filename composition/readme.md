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


What is object composition?



Question: Essence of Software Development?


## Reference

https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea
