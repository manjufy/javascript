console.log('====== START JavaScript Arrow functions ======')
var a = [
   "Micheal Schumacher",
   "Sabestian Vettel",
   "Lewis Hamilton",
   "Fernando Alonso",
   "Nico Rosberg",
   "Mark Webber"
]

var aLength = a.map(function(s) {
   return s.length
})
// same as using Arrow
var aLength1 = a.map( s => s.length )
// we can also do this
var aLength2 = a.map( (s) => s.length )
console.log('[Without Arrow] Length of each element in a = ', aLength)
console.log('[With JS Arrow] Length of each element in a = ', aLength1)
console.log('[With JS Arrow] Length of each element in a = ', aLength2)

/*
function Person() {
   var that = this
   var that.age = 0

   setInterval(function growUp() {
      that.age++
   }, 1000)
}
*/

function Person() {
   this.age = 0
   setInterval(() => {
      this.age++
   }, 1000)
}

var p = new Person()

// Relationship with strict mode
var f = () => {
   'use strict'
   this.name = 'Manjunath Reddy'
   return this
}
console.log(f()) // { name: 'Manjunath Reddy' }

var m = () => {
   return 'Simply returning something.'
}
console.log(m())

// invovked throuh call or apply
//Since this is not bound in arrow functions, the call() or apply() methods can only pass in arguments; this is ignored:
var adder = {
   base: 1,

   add: function(a) {
      var f = v => v + this.base
      return f(a)
   },

   addThruCall: function(a) {
      var f = v => v + this.base
      var b = {
         base: 2
      }

      return f.call(b, a)
   }
}
console.log(adder.add(1))           // return 2
console.log(adder.addThruCall(1))   // return 2

// No biding of arguments
var arguments = 44
var arr = () => arguments
console.log(arr()) // 44

console.log('Arguments here = ', arguments) // 44

function foo() {
   var f = (i) => arguments[0] + i

   return f(2)
}
console.log(foo()) // NaN
console.log(foo(1)) // 3

// experimenting a function returns a functions

function manju() {
   console.log('manju(): arguments = ', [...arguments]) // [ 2, 3 ]
   /* var fun = (i) => {
      return 1+1+i
   } */
   // same as above
   var fun = (i) => 1 + 1 + i

   return fun(44)
}

console.log('Manju = ', manju())
console.log('Manju = ', manju(2, 3)) // 4

console.log('====== END JavaScript Arrow functions ======')
