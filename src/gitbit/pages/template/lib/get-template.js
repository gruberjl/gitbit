const {fetch} = require('whatwg-fetch')

const getTemplate = async (id) => {
  if (id)
    return fetch(`/api/templates/find?id=${id}`)
      .then(res => res.json())
      .then(res => res.doc)

  return {
    content: '',
    name: ''
  }
}

module.exports = {getTemplate}
