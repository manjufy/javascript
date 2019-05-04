// https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig
const drivers = ['Seb', 'Ham', 'Alo'];
const driversOf2019 = drivers;

driversOf2019[2] = 'Russel';

console.log(drivers)
console.log(driversOf2019);

console.log('----------------------------')
const newDrivers = [...drivers]
newDrivers[2] = 'Nando'
console.log(drivers)
console.log(newDrivers);

console.log('----------------------------')
const points = [1, [2], 3, 4]
const pointsCopy = [...points]
pointsCopy[0] = 5
pointsCopy[1][0] = 10
console.log(points)
console.log(pointsCopy)