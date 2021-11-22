let Hedgehog = (function () {
    const speed = Symbol()
    console.log('SPEED', speed)
    class Hedgehog {
        constructor(name) {
            this.name = name
            this[speed] = 1000 // this is not directly accessible
        }

        zoom () {
            console.log(`${this.name} zooms with the speed of ${this[speed]} miles per second!`);
        }
    }

    return Hedgehog
})()

console.log(Hedgehog.toString())
let sonic = new Hedgehog('Sonic');
sonic.zoom();