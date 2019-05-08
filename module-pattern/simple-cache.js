function SimpleCache() {
    const cache = Object.create(null)

    // Reveal the public API
    return ({
        get,
        has,
        remove,
        set
    })

    // public methods
    function get(key) {
        return cache[key]
    }

    function has(key) {
        return key in cache
    }

    function remove(key) {
        delete (cache[key])

        return this
    }

    function set(key, value) {
        cache[key] = value

        return this
    }
}

var cache = SimpleCache()
	.set( "foo", "Bar" )
	.set( "hello", "world" )
	.set( "beep", "boop" )
;

console.log(cache.has("beep"));
console.log(cache.get("beep"));
