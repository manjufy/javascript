 function Animal(name) {
    this.name = name;
  }
  
  // add simple property on prototype
  Animal.prototype.generation = '100';
  
  var a = new Animal( 'Dog' );
  
  
  console.log('Has own generation ==>', a.hasOwnProperty('generation'));