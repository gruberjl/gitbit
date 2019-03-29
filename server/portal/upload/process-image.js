const Jimp = require('jimp')

const processImage = async (file, height) => {
  const image = await Jimp.read(file.data)

  if (height)
    image.resize(Jimp.AUTO, height)

  const buffer = await image.getBufferAsync('image/png')
  return {buffer}
}

module.exports = {processImage}
