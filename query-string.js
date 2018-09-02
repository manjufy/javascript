const queryStr = require('querystring')

const query = 'access_token=50d935da34d5bf48d0560e30d1f052ee56d030bc&scope=user%3Aemail&token_type=bearer'

console.log('Query => ', queryStr.parse(query))
// Output
/**
 * { 
 *    access_token: '50d935da34d5bf48d0560e30d1f052ee56d030bc',
 *    scope: 'user:email',
 *     token_type: 'bearer' 
 * }
 */