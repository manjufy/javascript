const foo = (...args) => {
    const [a,b,c,d] = args
    console.log(args, a,b,c,d)
}

foo(1,2,3)