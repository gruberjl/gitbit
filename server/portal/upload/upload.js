const fileUpload = require('express-fileupload')
const {putObject} = require('./put-object')

const upload = async (req, res) => {
  const {file} = req.files

  const fileName = req.body.filename ? req.body.filename : file.name
  const response = await putObject(req.user.tenant, fileName, file.mimetype, file.data)
  const status = response.error ? 400 : 200
  res.status(status).json(response)
}

module.exports = {upload: [fileUpload(), upload]}
