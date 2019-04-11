/* eslint no-console: 0 */
const fs = require('fs')
const {join} = require('path')
require('../server/lib/env/secret.js')
const aws = require('aws-sdk')

const spacesEndpoint = new aws.Endpoint('sfo2.digitaloceanspaces.com')
const s3 = new aws.S3({endpoint: spacesEndpoint})
const Bucket = 'web-hosting-assets'
const assetsFldr = join(__dirname, 'assets')

const uploadStyles = async () => {
  const Body = fs.readFileSync(join(assetsFldr, 'styles.css'), 'utf8')

  const options = {
    Bucket,
    Key: 'gitbit/styles.css',
    ContentType: 'text/css',
    Body,
    ACL: 'private'
  }

  s3.putObject(options).promise()
    .catch((error) => {
      console.log('error uploading styles.css')
      console.log(error)
    })
}

uploadStyles()
