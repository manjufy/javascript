var Rectangle = {
	// constructor
	create: function(width, height) {
		var newObj = Object.create(this)
		newObj.width = width
		newObj.height = height

		return newObj
	},

	area: function() {
		return this.width * this.height
	}
}

// create is kind of a factory (avoid the term constructor now), and what's nice is that it's integrated in the object itself.
var rect1 = Rectangle.create(10, 5)
console.log('Area of rectangle = ', rect1.area())

// Inheritance

var Square = Object.create(Rectangle) // extend Rectangle
Square.create = function(side) {
	return Rectangle.create(side, side)
}

var sq = Square.create(10)
console.log('Area of square =', sq.area())

// we didn't have to use prototype to achieve inheritance here

