// console.log(__filename)
// console.log(__dirname)

// function log(message) {
// 	console.log(message)
// }

// // to export multiple methods
// module.exports.log = log

// // if we just want to export single method
// module.exports = log
const EventEmitter = require('events')

class Logger extends EventEmitter {
	log(message) {
		console.log(message)

		this.emit('messageLogged', { id: 1, data: 'data'})
	}
}

module.exports = Logger