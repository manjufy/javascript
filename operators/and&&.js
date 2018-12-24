const result = 1 && 2 && 3
// result = 3
// In JavaScript, both || and && are logical short-circuit operators that return the first fully-determined “logical value” when evaluated from left to right.

/**
 * The || operator returns the first truthy value, and if none are truthy, it returns the last value (which is a falsy value).
 *
 * The && operator returns the first falsy value, and if none are falsy, it return the last value (which is a truthy value).
 *
 * It's really that simple. Experiment in your console to see for yourself.
 */

"" && "Dog"    // ""
"Cat" && "Dog" // "Dog"
"" || "Dog"    // "Dog"
"Cat" || "Dog" // "Cat"

// Reference