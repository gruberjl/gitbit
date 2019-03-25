const {fetch} = require('whatwg-fetch')

const save = user => fetch('/api/users/update', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
}).then(response => response.json())

module.exports = {save}
