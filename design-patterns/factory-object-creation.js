/**
 * Factory Object Creation Pattern
 */

 function makeRobot(name, job) {
     return {
         name,
         job,
         introduce: () => {
             console.log(`Hi I'm ${this.name} and My job is ${this.job}`)
         }
     }
 }

 const racer = makeRobot('Manjunath', 'Racing')
 console.log(racer.introduce())

 var wallE = makeRobot("Wall-E", "trash collection");
wallE.introduce(); 

/**
 * Although the factory pattern is useful for creating like objects, it has two major drawbacks. 
 * First, there isno way to check whether a given object was created by a certain factory. We cannot, for example, say something like bender instanceof makeRobot.
 * 
 * Secondly, the factory pattern does not share behaviours, rather, it simply creates a new versions of a behaviour everytime it is called and adds them to the object being created. 
 * As a result, methods are repeated a new on every object created by the factory function.
 */