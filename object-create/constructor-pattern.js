// Reference https://www.liip.ch/en/blog/why-i-dont-use-the-javascript-new-keyword
function Rectangle(width, height) {
	this.width = width
	this.height = height
}

Rectangle.prototype.area = function () {
	return this.width * this.height
}

var rect = new Rectangle(5, 10)
console.log('Rectangle Area = ', rect.area())
console.log(rect)

// Square
function Square(side) {
	return Rectangle.call(this, side, side)
}

// Square extends Rectangle
Square.prototype = new Rectangle() // yes, no arguments
Square.prototype.constructor = Square //fix, otherwise it will point to rectangle


var sq = new Square(5)

console.log('Area of Square = ', sq.area())