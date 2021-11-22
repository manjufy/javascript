var Rectangle = {
	width: 0,
	height: 0,
	area: function () {
		return this.width * this.height
	}
}

var rect1 = Object.create(Rectangle)
rect1.width = 5
rect1.height = 5
console.log('Area of rectangle =', rect1.area())