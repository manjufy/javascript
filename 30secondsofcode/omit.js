/**
 * Ex: omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }
 */

 const omit = (obj, arr) =>
    Object.keys(obj)
        .filter(key => !arr.includes(key))
        .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omit({ a: 1, b: '2', c: 3 }, ['b']));
