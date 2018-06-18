let axios = {  // mocks
  get: function(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({data: x})
    }, 2000)
  })
}}
let query = 'mangos'
async function fetchData(query) {
  try {
    const response = await axios.get(`/q?query=${query}`)
    const data = response.data
  	return data
  } catch (error) {
    console.log(error)
  }
}
fetchData(query).then(data => {
  console.log(data) // Got data 2s later... Can use data!
})

// reference https://node.university/blog/498412/es7-es8-post