const fileUpload = require('express-fileupload')
const generate = require('nanoid/generate')
const {processImage} = require('./process-image')
const {putObject} = require('./put-object')

const upload = async (req, res) => {
  const {file} = req.files
  const id = generate('1234567890abcdefghijklmnopqrstuvwxyz', 10)

  const images = await processImage(file)

  const image2500 = await putObject(req.user.tenant, `images/2500/${id}.jpg`, 'image/jpeg', images.image2500)
  if (image2500.error)
    return res.status(431).json({error: image2500.error})

  const image1200 = await putObject(req.user.tenant, `images/1200/${id}.jpg`, 'image/jpeg', images.image1200)
  if (image1200.error)
    return res.status(431).json({error: image1200.error})

  const image800 = await putObject(req.user.tenant, `images/800/${id}.jpg`, 'image/jpeg', images.image800)
  if (image800.error)
    return res.status(431).json({error: image800.error})

  const image400 = await putObject(req.user.tenant, `images/400/${id}.jpg`, 'image/jpeg', images.image400)
  if (image400.error)
    return res.status(431).json({error: image400.error})

  return res.status(200).json({image2500, image1200, image800, image400})
}

module.exports = {uploadImage: [fileUpload(), upload]}
