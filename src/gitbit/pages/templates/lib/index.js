const {fetch} = require('whatwg-fetch')

const getTemplates = async () => fetch('/api/templates/query').then(res => res.json())

module.exports = {getTemplates}
