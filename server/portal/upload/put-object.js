const aws = require('aws-sdk')

const spacesEndpoint = new aws.Endpoint('sfo2.digitaloceanspaces.com')
const s3 = new aws.S3({endpoint: spacesEndpoint})
const Bucket = 'web-hosting-assets'

const putObject = (tenant, fileName, ContentType, Body) => {
  const options = {
    Bucket,
    Key: `${tenant}/${fileName}`,
    ContentType,
    Body,
    ACL: 'private'
  }

  return s3.putObject(options).promise()
    .then(() => ({filename: `/${fileName}`, url: `/assets/${fileName}`}))
    .catch(error => ({error}))
}

module.exports = {putObject}
