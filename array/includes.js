const arr = [1, 2, 3, 4, 5, NaN]

// Instead of
if (arr.indexOf(3) >= 0) {
    console.log(true)
}

// Use
if (arr.includes(3)) {
    console.log(true)
}

arr.includes(NaN)


const morals = ["honor", "courage", "justice", "yourself"];
console.log(morals.includes("funny"));

const usStates = ["Texas", "New York", "California", "Nebraska"];
console.log(usStates.includes("Texas", 2));
// You try it!

const people = ["Mike", "Jebs", "Sarah", "Gary", "Phil", "Merilyn", "Macy", "Stacy", "Hacy", "Lacy"];
console.log(people.includes("Lacy", -2));
console.log(people.includes("Merilyn", -4));
// You try it!