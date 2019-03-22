const {fetch} = require('whatwg-fetch')

const getTemplates = async () => fetch('/api/templates/query')
  .then(res => res.json())
  .then(res => res.docs)

module.exports = {getTemplates}
