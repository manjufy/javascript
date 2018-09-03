/**
 * Conver the query string to Object format
 */
// Example of query string
const queryStr = 'access_token=123534j343k4j3&scope=user:email&token_type=bearer'
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