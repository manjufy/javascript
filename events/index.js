const EventEmitter = require('events')
const myEventEmitter = new EventEmitter()

myEventEmitter.on('hello', () => {
    console.log('First Hello')
})

myEventEmitter.on('hello', () => {
    console.log('Second Hello')
})


myEventEmitter.emit('hello')