const skills = require('./skills.json')
const groups = []
const skillDirectory = []

function groupBy(list, groupByKey) {
    // console.log(keyGetter.toString())
    const map = new Map();
    list.forEach((item) => {
         const key = item[groupByKey];
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

console.log(groupBy(skills.data, 'Alphabet'))