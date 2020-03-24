/**
 * Shallo clone vs deep clone.
*/

/**
 * Easiest way to deel clone is using JSON.parse. However it has drawbacks.
 * sucn as copy functions, circular references, and so on.
 */
const employees = [{name: 'manju', age: 32},{name: 'schumacher', age: 45}];
const newEmploees = JSON.parse(JSON.stringify(employees));

/**
 * Basic shallow clone
*/
function clone(target) {
    let cloneTarget = {};
    for (const key in target) {
        cloneTarget[key] = target[key];
    }

    return cloneTarget;
}

/**
 * if its a deep clone, we can use recursion to solve the problem and rewrite the code a little bit.
*/
