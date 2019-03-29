const Jimp = require('jimp')

const processImage = async (file, width) => {
  const image = await Jimp.read(file.data)
  image.quality(90)

  if (width)
    image.resize(width, Jimp.AUTO)

  const buffer = await image.getBufferAsync('image/png')

  return {buffer}
}

module.exports = {processImage}
