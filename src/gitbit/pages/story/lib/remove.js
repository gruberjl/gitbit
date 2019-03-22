const {fetch} = require('whatwg-fetch')

const remove = story => fetch('/api/pages/remove', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(story)
}).then(response => response.json())

module.exports = {remove}
