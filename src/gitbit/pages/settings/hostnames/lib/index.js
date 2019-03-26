const {fetch} = require('whatwg-fetch')

const getHostnames = async () => fetch('/api/hostnames/query')
  .then(res => res.json())
  .then(res => res.docs)

module.exports = {getHostnames}
