const moment = require('moment');
console.log('TODAY ==>', moment.utc());
const soldDate = moment('2020-09-12 02:17:38').format('YYYY-MM-DD');
console.log('TTTTTT =>', moment(soldDate).add(7, 'days'));
const soldDateT = moment(soldDate);
const dd = moment();
console.log('DDDDD =>', soldDate,soldDateT, dd);
console.log('DIFF =>', dd.diff(soldDate, 'days'));

console.log('------------------------------')
const mmNow = moment();
const mmPlain = moment(mmNow);
const mmWithUTC = moment.utc(mmNow);
console.log(mmNow, mmPlain, mmWithUTC);
console.log('------------------------------')
const mmDate = moment('2020-10-28T19:39:01Z');
const mmDateUtc = moment.utc('2020-10-28 11:39:01');
console.log('mmDate ', mmDate, mmDateUtc);

console.log(moment().subtract(10, 'd'));
const tenDaysAgo = moment().subtract(10, 'd');
console.log('tenddays ago', tenDaysAgo)
const today = moment().utc();
const days = today.diff(tenDaysAgo, 'days') - 7
console.log('Days ', days);