/**
 * What if we have similar property on the object and prototype
 */

 function Animal(name) {
    this.name = name;
    this.generation = '101';
  }
  
  // add `getName` function to the prototype
  Animal.prototype.getName = function () {
    return 'Animal name is => ' + this.name;
  }
  
  // add simple property on prototype
  Animal.prototype.generation = '100';
  
  var a = new Animal( 'Dog' );
  
  
  console.log( 'a.getName() ==> ', a.getName() );
  console.log( 'a.generation ==> ', a.generation );