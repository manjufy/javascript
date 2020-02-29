/**
 * Examples
 * **/

var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

// old way
var dogs = []
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
    dogs.push(animals[i])
}

// filter
// var isDog = function(animal) {
//   return animal.species === 'dog'
// }

// var dogs = animals.filter(isDog)
// var otherAnimals = animals.reject(isDog)


const getName = function (name) {
  return name
}

const getAge = function (age) {
  return age
}

function getNameAndAge() {
  const name = getName('Manjunath');
  const age = getAge(33)

  return `${name}:${age}`
}

console.log(getNameAndAge())
