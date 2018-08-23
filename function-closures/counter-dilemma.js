var counter = 0;

function add() {
    counter += 1;
}

add();
add();
add();
console.log(counter) // The counter should now be 3

// There is a problem with the solution above: Any code on the page can change the counter, without calling add().


var counter = 0
function add () {
    var counter

    counter += 1
}

add()
add()
add()

console.log(counter) // 0 0
//  A JavaScript inner function can solve this.