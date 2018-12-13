/**
 * One way to address some of the weakness of the factory pattern is to use the Constructor Pattern.
 */
function Robot(name, job) {
    this.name = name
    this.job = job
    this.introduce = () => {
        console.log(`Hi I'm ${this.name} and My job is ${this.job}`)
    }
}

const bender = new Robot("Bender", "bending");
bender.introduce();   // Hi! I'm Bender. My job is bending.
console.log(bender instanceof Robot);  // true