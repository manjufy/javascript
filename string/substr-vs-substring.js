/**
 * Diff between substr vs substring
 */

alert("abc".substr(0, 2)); // from to length
alert("abc".substring(0, 2)); // start to end. Both start and end are indexes here.
/**
 * The difference is in the second argument. 
 * The second argument to substring is the index to stop at (but not include), 
 * but the second argument to substr is the maximum length to return.
 */