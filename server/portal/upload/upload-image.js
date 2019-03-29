const fileUpload = require('express-fileupload')
const generate = require('nanoid/generate')
const {processImage} = require('./process-image')
const {putObject} = require('./put-object')

const upload = async (req, res) => {
  const {file} = req.files
  const id = generate('1234567890abcdefghijklmnopqrstuvwxyz', 10)

  const {image2500, image1200, image800, image400} = await processImage(file)

  const r2500 = await putObject(req.user.tenant, `images/2500/${id}.jpg`, 'image/jpeg', image2500)
  if (r2500.error)
    return res.status(431).json({error: r2500.error})

  const r1200 = await putObject(req.user.tenant, `images/1200/${id}.jpg`, 'image/jpeg', image1200)
  if (r1200.error)
    return res.status(431).json({error: r1200.error})

  const r800 = await putObject(req.user.tenant, `images/800/${id}.jpg`, 'image/jpeg', image800)
  if (r800.error)
    return res.status(431).json({error: r800.error})

  const r400 = await putObject(req.user.tenant, `images/400/${id}.jpg`, 'image/jpeg', image400)
  if (r400.error)
    return res.status(431).json({error: r400.error})

  return res.status(200).json({2500: r2500, 1200: r1200, 800: r800, 400: r400})
}

module.exports = {uploadImage: [fileUpload(), upload]}
