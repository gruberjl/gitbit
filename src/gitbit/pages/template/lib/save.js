const {fetch} = require('whatwg-fetch')

const save = (template) => {
  const url = template._rev ? '/api/templates/update' : '/api/templates/create'

  return fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(template)
  }).then(response => response.json())
}

module.exports = {save}
