const fileUpload = require('express-fileupload')
const generate = require('nanoid/generate')
const {processImage} = require('./process-image')
const {putObject} = require('./put-object')

const upload = async (req, res) => {
  const {file} = req.files
  const id = generate('1234567890abcdefghijklmnopqrstuvwxyz', 10)

  const original = await processImage(file)
  if (original.error)
    return res.status(430).json({error: original.error})

  const responseOrig = await putObject(req.user.tenant, `images/original/${id}.png`, 'image/png', original.buffer)

  if (responseOrig.error)
    return res.status(431).json({error: responseOrig.error})

  const image1200 = await processImage(file, 1200)

  if (image1200.error)
    return res.status(432).json({error: image1200.error})

  const response1200 = await putObject(req.user.tenant, `images/1200/${id}.png`, 'image/png', original.buffer)

  if (response1200.error)
    return res.status(431).json({error: response1200.error})

  const result = Object.assign({}, responseOrig, {1200: response1200})
  return res.status(200).json(result)
}

module.exports = {uploadImage: [fileUpload(), upload]}
