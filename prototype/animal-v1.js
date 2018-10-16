let animal = {}
animal.name = 'Tiger'
animal.energy = 10

animal.eat = () => {
    console.log(`${animal.name} is eating.`)
    this.energy += 10
}

animal.sleep = length => {
    console.log(`${animal.name} is sleeping`)
    this.energy += length
}

animal.play = length => {
    console.log(`${animal.name} is playing.`)
    this.energy -= length
}

console.log('Animal', animal.name, animal.play())
const used = process.memoryUsage().heapUsed / 1024 / 1024
console.log('The Script uses approx. ', Math.round(used * 100) / 100 + ' MB')