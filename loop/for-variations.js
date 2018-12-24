/**
 * for in
 * forEach
 * for of
 * for
*/

// for

var str = "";

for (var i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);

// for in
var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 = string1 + object1[property1];
}

console.log(string1);

// for of
function* foo(){
    yield 1;
    yield 2;
}

for (let o of foo()) {
    console.log(o);
    // expected output: 1

    break; // closes iterator, triggers return
}

