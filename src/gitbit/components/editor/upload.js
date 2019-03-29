const {fetch} = require('whatwg-fetch')

const upload = async (file) => {
  const data = new FormData()
  data.append('file', file)

  const response = await fetch('/api/assets/create-image', {
    method: 'POST',
    body: data
  })
  const res = await response.json()

  return res.url
}

module.exports = {upload}
