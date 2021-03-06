require('../../lib/env/secure')
const aws = require('aws-sdk')
const {logError} = require('../lib/log')

const spacesEndpoint = new aws.Endpoint('sfo2.digitaloceanspaces.com')
const s3 = new aws.S3({endpoint: spacesEndpoint})

const getAssets = (req, res, next) => {
  const Key = `${req.tenant._id}/${req.params['0']}`

  s3.getObject({Bucket: 'web-hosting-assets', Key})
    .on('httpHeaders', function sendStream(statusCode, headers) {
      res.set('Cache-Control', 'max-age=2592000')
      res.set('Content-Length', headers['content-length'])
      res.set('Content-Type', headers['content-type'])
      this.response.httpResponse.createUnbufferedStream()
        .pipe(res)
    })
    .on('error', (error) => {
      logError({
        message: error.message,
        code: error.code,
        statusCode: error.statusCode,
        retryable: error.retryable,
        msg: 'Error creating readStream in server/get-assets/index.js.',
        req: {
          params: req.params,
          tenant: {
            _id: req.tenant._id,
            _rev: req.tenant._rev
          }
        }
      })
      next()
    })
    .send()
}

module.exports = {getAssets}
