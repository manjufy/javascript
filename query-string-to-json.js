/**
 * Conver the query string to Object format
 */
// Example of query string
const queryStr = 'access_token=50d935da34d5bf48d0560e30d1f052ee56d030bc&scope=user%3Aemail&token_type=bearer'
const queryStrToObject = (queryStr) => {
  const pairs = queryStr.split('&')
  const response = {}

  pairs.forEach(pair => {
    pair = pair.split('=')

    response[pair[0]] = decodeURIComponent(pair[1] || '')
   })

  return response
}

console.log(queryStrToObject(queryStr))