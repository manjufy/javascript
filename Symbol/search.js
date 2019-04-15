/**
 * Symbol.search
 */

 class Search {
     constructor(value) {
         this.value = value
     }
     [Symbol.search](search) {
         return string.indexOf(this.value);
     }
 }

 console.log('foobar'.search(new Search('bar')))