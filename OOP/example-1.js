const hello = class {
    sayHi() {
        return 'Hello'
    }
}

console.log(new hello().sayHi());