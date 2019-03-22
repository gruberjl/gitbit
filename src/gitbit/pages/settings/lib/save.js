const {fetch} = require('whatwg-fetch')

const save = tenant => fetch('/api/tenants/update', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(tenant)
}).then(response => response.json())

module.exports = {save}
