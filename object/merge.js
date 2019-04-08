const object1 = { 
    foo: 'Bar',
    x: 42,
}

const object2 = {
    foo: 'Baz',
    y: 13,
}

const merge = (...objects) => ({ ...objects});

const mergedObject = merge(object1, object2);
console.log(mergedObject);