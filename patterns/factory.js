// Ref: https://isamatov.com/essential-javascript-patterns-pt1/

const ALLOWED_SPECIES = [
    'cat',
    'dog'
];

class Pet {
    constructor(name, species, noise) {
        this.name = name;
        this.species = species;
        this.noise = noise;
    }
 
    makeNoise() {
        console.log(this.noise);
    }
 
    eat() {
        console.log(`${this.name}: nom nom nom`);
    }
}
 
export default function createPet(name, species, noise) {
    if (ALLOWED_SPECIES.indexOf(species) === -1) throw new Error(`Invalid species ${species}`);
    const pet = new Pet(name, species, noise);
 
    return pet;
}