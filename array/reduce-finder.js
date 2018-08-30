const fruits = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'bananas', quantity: 10 },
    { name: 'cherries', quantity: 5 }
  ];

  const arrayFind = arr => fn => arr.reduce((acc, item, index) => {
      if (fn(item, index)) return item

      return acc
  })

  // Create a finder function 
  const fruitFinder = arrayFind(fruits)
  console.log(fruitFinder.toString())

  const bananas = fruitFinder(fruit => fruit.name === 'bananas')
  console.log(bananas)

  // https://hackernoon.com/reduce-your-fears-about-array-reduce-629b334ab945