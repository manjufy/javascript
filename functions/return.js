function getName (name) {
    if (name) return name;

    return;
}

console.log(getName('Micheal Schumacher')); // Micheal Schumacher
console.log(getName()); // undefined

const emptyObj = {};