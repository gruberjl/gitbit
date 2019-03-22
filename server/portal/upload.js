const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

const spacesEndpoint = new aws.Endpoint('sfo2.digitaloceanspaces.com')
const s3 = new aws.S3({endpoint: spacesEndpoint})
const storage = multerS3({
  s3,
  bucket: 'web-hosting-assets',
  acl: 'private',
  key(req, file, cb) {
    req.filename = `/${req.body.filename ? req.body.filename : file.originalname}`
    cb(null, `${req.user.tenant}${req.filename}`)
  }
})

const uploader = multer({storage}).array('file', 1)

const upload = async (request, response) => {
  uploader(request, response, (error) => {
    if (error)
      return response.status(400).json({error})

    return response.status(200).json({filename: request.filename, url: `/assets${request.filename}`})
  })
}

module.exports = {upload}
