/**
 * Difference between Object.
 */

const object1 = {
     id: 12345,
     name: 'Micheal Schemacher',
     team: 'Ferrari',
     country: 'Germany',
};

const object2 = {
    id: 123456,
    name: 'Sebastian Vettel',
    team: 'Ferrari',
    country: 'Germany',
};


function diff (baseArray, targetArray) {
    const changes = {};
    const entries = Object.entries(object1);

    for (const [key, value] of entries) {
        const val1 = value;
        const val2 = object2[key];
        if (val1 != val2) {
            changes[key] = {
                old: object2[key],
                new: value
            }
        }
    }

    return changes;
};

const difference = diff(object1, object2);

console.log(difference);