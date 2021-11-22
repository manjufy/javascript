let Hedgehog = (function () {
    let privateProps = new WeakMap()

    class Hedgehog {
        constructor(name) {
            this.name = name // this is public here
            privateProps.set(this, { speed: 1000} ) // this is private
        }

        zoom() {
            console.log(`${this.name} zooms with the speed of ${privateProps.get(this).speed} miles per second!`);
        }
    }

    return Hedgehog
})()

console.log((Hedgehog.toString()))

let hHog = new Hedgehog('Sonic')
console.log(hHog.zoom())

let hHog2 = new Hedgehog('Sonic')
console.log(hHog2.zoom())