const secret = require('./secret')

if (!process.env.AWS_ACCESS_KEY_ID)
  throw new Error('env/secure.js requires env var AWS_ACCESS_KEY_ID to be set.')

if (!process.env.AWS_SECRET_ACCESS_KEY)
  throw new Error('env/secure.js requires env var AWS_SECRET_ACCESS_KEY to be set.')

if (!secret.SECRET)
  throw new Error('env/secure.js requires SECRET to be exported')

if (typeof secret.DB_URL === 'undefined')
  throw new Error('env/secure.js requires DB_URL to be exported')

module.exports = secret
