// Beware of References

var CarOption = {
	create: function(name, price) {
		var newOption = Object.create(this)
		newOption.name = name
		newOption.price = price

		return newOption
	}
}

var Car = {
	type: 'car',
	options: [],
	addOption: function(option) {
		this.options.push(option)
	}
}

var leatherOption = CarOption.create('leather', 200)
var metatlicOption = CarOption.create('metalic paint', 800)



// Reference: https://www.liip.ch/en/blog/why-i-dont-use-the-javascript-new-keyword