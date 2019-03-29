const Jimp = require('jimp')

const processImage = async (file) => {
  const jimp = await Jimp.read(file.data)

  const image2500 = await jimp.clone().resize(2500, Jimp.AUTO).quality(60).getBufferAsync('image/jpeg')
  const image1200 = await jimp.clone().resize(1200, Jimp.AUTO).quality(60).getBufferAsync('image/jpeg')
  const image800 = await jimp.clone().resize(800, Jimp.AUTO).quality(60).getBufferAsync('image/jpeg')
  const image400 = await jimp.clone().resize(400, Jimp.AUTO).quality(60).getBufferAsync('image/jpeg')

  return {image2500, image1200, image800, image400}
}

module.exports = {processImage}
