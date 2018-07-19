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
var dogs = animals.filter(function(animal) {
  return animals.species === 'dog'
})
