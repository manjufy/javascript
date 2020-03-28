## Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top.

In JavaScript, Declearations are hoisted not initilisations

Ex:

var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y

Here `y` is undefined, thats because only the declaration (var y), not the initialisation (=7) is hoisted to the top.