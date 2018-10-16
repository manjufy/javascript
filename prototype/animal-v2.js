// Functional Instantiation

function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
  
    animal.eat = function (amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
  
    animal.sleep = function (length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    }
  
    animal.play = function (length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
  
    return animal
}

const tiger = Animal('Tiger', 10)
const lion = Animal('Lion', 15)

console.log('Tiger', tiger.play(5))
const used = process.memoryUsage().heapUsed / 1024 / 1024
console.log('The Script uses approx. ', Math.round(used * 100) / 100 + ' MB')
