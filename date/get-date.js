const str = '2018-09-20T04:00:00.000Z'
console.log('Date => ', getDate(str))

function getDate(date) {
    const newDate = new Date(date)

    return newDate.getDay() + ' ' + newDate.toLocaleString('en-us', { month: "long"}) + ' ' + newDate.getFullYear()
}