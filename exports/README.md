# export

Types of exports

```
1 — Named exports (several per module) 
2 — Default exports (one per module)
3 — Mixed named & default exports 
4 — Cyclical Dependencies
```

export statement is used when creating JavaScript modules to export functions, objects, or primitive values from the modules so they can be used by other programs with the import statement.

### Named exports
```
// exports a function declared earlier

export { myFunction }
```

```
// export a constant
export const foo = Math.sqrt(2)
```

### Default exports (function)

```
export default function() {}
```

### Default exports (class)

```
export default class {}
```

## module.exports vs exports

`module.exports` as the variable that gets returned from require. It is an empty object by default

`exports` itself is never returned! it is just a reference to `module.expors`

```
exports.add = function () {}

vs

module.exports.add = function () {}
```

Reference: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f