const {fetch} = require('whatwg-fetch')

const getTenant = () => fetch('/api/tenants/find-me')
  .then(res => res.json())
  .then(res => res.doc)

module.exports = {getTenant}
