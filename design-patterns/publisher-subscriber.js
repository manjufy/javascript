/**
 * The Publisher/Subscriber Pattern in JS (Pub/Sub)
*/

function pubSub() {
    const subscribers = {}

    function publish(eventName, data) {
        // if (!Array.isArray(subscribers[eventName]))
    }

    function subscribe(eventName, callback) {
        if (Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = []
        }

        subscribers[eventName].push(callback)
    }

    return {
        subscribe,
    }
}