/**
 * exports is little helper to module.exports.
 * 
 */

 // BUT

 // if there something attached to the module.exports already, everything on exports is ignored

 module.exports = {
     hi: function () {
         console.log('hii');
    }
 }

 // NOTE NOTE. Following won't be exported. Direct assignment to exports variable doesn’t work.
 exports.bye = function () {
    console.log('bye');
 }