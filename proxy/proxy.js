console.log('------ Handler 1');
const target = {
    name: 'Manjunath',
    city: 'Hamburg'
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);

console.log(proxy1.name);
console.log('------ Handler 2. Trap all fields');
// To customise the proxy, we define functions on the handler object

const handler2 = {
    get(target, prop, receiver) {
        console.log('Prop is:', prop)
        return 'Micheal'
    },
};

const proxy2 = new Proxy(target, handler2);
console.log(proxy2.name); // Micheal
console.log(proxy2.city); // Micheal

console.log('------ Handler 3: Trap the city field');
const handler3 = {
    get(target, prop, receiver) {
        console.log('Prop is:', prop);
        // only trap the prop city
        if (prop === 'city') {
            return 'Berlin'
        }

        return 'Micheal'
    },
};

const proxy3 = new Proxy(target, handler2);
console.log(proxy3.name); // Manjunath
console.log(proxy3.city); // Berlin