const obj = {}
obj.me = obj

// Most JSON libraries cannot serialise such an object, and will generally in a stack overflow error.
