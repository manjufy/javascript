const str = '2018-09-20'
console.log('Date => ', getDate(str)) // 20 September 2018

function getDate(date) {
    const newDate = new Date(date)

    return newDate.getDate() + ' ' + newDate.toLocaleString('en-us', { month: "long"}) + ' ' + newDate.getFullYear()
}
