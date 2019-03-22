const Jimp = require('jimp')
const aws = require('aws-sdk')
const {convertBase64} = require('./convert-base64')
const {flat} = require('../flat')

const spacesEndpoint = new aws.Endpoint('sfo2.digitaloceanspaces.com')
const s3 = new aws.S3({endpoint: spacesEndpoint})

const saveBase64 = async (tenant, base64) => {
  const rawImage = await convertBase64(base64)

  const image = await flat(Jimp.read(rawImage.buffer))
  if (image.error)
    return {error: image.error}

  const Body = await image.getBufferAsync('image/png')
  const uploadParams = {Bucket: 'web-hosting-assets', Key: `images/${image.hash()}.png`, Body}
  await s3.putObject(uploadParams).promise()

  return {
    versions: {
      original: {
        width: image.bitmap.width,
        height: image.bitmap.height,
        localPath: uploadParams.Key,
        url: `/assets/${uploadParams.Key}`
      }
    }
  }
}

// saveBase64({_id:'localhost'}, require('./tests/mock-base64')).then(r => console.log(r))

module.exports = {saveBase64}
