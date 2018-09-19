const today = new Date('2018-09-19')
console.log(today.getDate())            // 19
console.log(today.getDay())             // 3 - Its Wednesday
console.log(today.getMonth())           // 08 - zero-based value (where zero indicates the first mont of the year)
console.log(today.getFullYear())        // 2018

console.log(today.toDateString())       // Wed Sep 19 2018
console.log(today.toISOString())        // 2018-09-19T00:00:00.000Z
console.log(today.getTimezoneOffset())