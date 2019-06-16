const person1 = {
    firstName: 'Manjunath',
    lastName: 'Reddy',
  }
  
  const person2 = person1;
  console.log(person1, person2)

  person2.firstName = 'Micheal'
  console.log(person1, person2)

  /**
   * When we do person1 = person2, person2 does not get another new object with its own key-value pairs. Rather, it starts pointing to the object pointed by person1.
   */