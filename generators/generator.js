/**
 * the function* declaration (function keyword followed by an asterisk) defines a generator function
 * which returns Generator object
 */

 function* generator(i) {
     yield i;
     yield i + 10;
 }

 const gen = generator(10);

 console.log(gen.next().value); // 10
 console.log(gen.next().value); // 20