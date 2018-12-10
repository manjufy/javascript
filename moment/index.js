const moment = require('moment-timezone')
console.log('Moment')

const format = function (dt, fmt) {
	var locale = 'en-MY';
	moment.locale(locale);
	var tz = 'Asia/Kuala_Lumpur';
	fmt = (fmt || 'd').toLowerCase();
	var ret = moment(dt).tz(tz);
	if(!ret.isValid()) return '';
	switch(fmt){
		case 'd': return ret.format('L').replace(/\//g, '-');
		case 'l':ret.format('ll').replace(/\s+/g, '-').replace(/[,]+/g, '');
		case 'll': return ret.format('ll');
		case 'lll': return ret.format('lll');
		case 't': return ret.format('LT');
		case 'dt': return ret.format('L').replace(/\//g, '-') + ' ' + ret.format('LT');
	}
}


console.log(format(moment().format(), 'll')) // 10-DIS-2018