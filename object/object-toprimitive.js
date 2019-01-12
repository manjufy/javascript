/**
 * https://javascript.info/object-toprimitive
 * http://www.adequatelygood.com/Object-to-Primitive-Conversions-in-JavaScript.html
 */

 const user = {
     name: "Manju",
     money: 1000,
     // for hint="string"
     toString() {
         return `name: ${this.name}`
     },
     // for hint="number" or "default"
     valueOf() {
         return this.money;
     }
 }

 console.log('User', user.toString())