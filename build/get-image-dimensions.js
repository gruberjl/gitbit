const sizeOf = require('image-size')
const url = require('url')
const http = require('http')
const https = require('https')
const debug = require('debug')('gitbit:get-image-dimensions')

const getImageDimensions = async (imageUrl) => {
  debug(`Getting image dimensions for ${imageUrl}`)
  let dimensions
  if (imageUrl.startsWith('http')) {
    dimensions = await downloadImage(imageUrl)
  } else {
    imageUrl = `./docs/${imageUrl}`
    dimensions = sizeOf(imageUrl)
  }
  debug(`Returning dimensions ${JSON.stringify(dimensions)}`)
  return dimensions
}

const downloadImage = (imgUrl) => new Promise((res, rej) => {
  const options = url.parse(imgUrl)
  const getter = imgUrl.startsWith('https') ? https : http
  getter.get(options, function (response) {
    const chunks = []
    response.on('data', function (chunk) {
      chunks.push(chunk)
    }).on('end', function() {
      const buffer = Buffer.concat(chunks)
      res(sizeOf(buffer))
    })
  })
})

export default getImageDimensions
