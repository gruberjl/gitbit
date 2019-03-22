const {fetch} = require('whatwg-fetch')

const remove = template => fetch('/gitbit/api/templates/remove', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(template)
}).then(response => response.json())

module.exports = {remove}
