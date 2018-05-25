// console.log(module)

const Logger = require('./logger')
const logger = new Logger()

logger.on('messageLogged', (arg) => {
	console.log('Listner called ',arg)
})

logger.log('message')