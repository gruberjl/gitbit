const {fetch} = require('whatwg-fetch')

const upload = async (file) => {
  const data = new FormData()
  data.append('file', file)

  const response = await fetch('/api/assets/create-image', {
    method: 'POST',
    body: data
  })

  const r = await response.json()

  const images = {
    image400: r.image400.url,
    image800: r.image800.url,
    image1200: r.image1200.url,
    image2500: r.image2500.url
  }

  return images
}

module.exports = {upload}
