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
console.log('====== END JavaScript Arrow functions ======')
