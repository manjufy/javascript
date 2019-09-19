function food(a) {
    var b = a +2;

    function bar(c) {
        console.log(a,b,c)
    }

    bar(b * 2);
}

food(3);

/**
 * bar has access to the variable a and b by virtue of the fact that it is nested inside of foo. 
 * Notice that we successfully store the function bar along with its environment. 
 * Thus, we say that bar has a closure over the scope of foo.
 * 
 * Closures allow us to invoke an inner function outside its enclosing 
 * function while maintaining access to the enclosing function’s lexical scope(i.e identifiers in its enclosing function).
 */