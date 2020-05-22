/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */

 const handler = {
    get: function (obj, prop) {
        return prop in obj ? obj[prop] : 37
    }
 };

 const proxy = new Proxy({}, handler);
 proxy.a = 1;
 proxy.b = undefined;

 console.log(proxy.a, proxy.b);
 console.log('c' in proxy, proxy.c);

/**
  * No-op forwarding proxy
*/

const target = {};
const p = new Proxy(target, {})
p.a = 38;
console.log(target.a);