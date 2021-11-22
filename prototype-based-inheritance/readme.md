# Prototype Based Inherience

A function that is used, to create objects is called constructor function. In Javascript, almost everything is an object.

JavaScript has Primitive Data Types and Reference Data Types.

Primitive
----------
number, string, boolean, symbol, null, and undefined

Assigning one variable to another, only gets the copy of the value from the first variable

Reference data types
--------------------
array, object and function are reference data type.
When you create a variable A of reference data type, the value is stored in Heap and its memory reference is stored in the varaible (this happens internally and A is not a Pointer). When B=A, instead of copying the value of A in the variable B, the variable B only gets the memory reference of the value A points.



Reference: https://medium.com/jspoint/prototype-based-inheritance-and-prototype-chain-in-javascript-es5-29c14f3972fa