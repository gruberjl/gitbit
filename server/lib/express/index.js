const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const secure = require('../env/secure')

const createApp = () => {
  const app = express()

  app.set('trust proxy', 1)
  app.set('x-powered-by', false)

  app.use((req, res, next) => {
    res.removeHeader('X-Powered-By')
    next()
  })

  if (process.env.NODE_ENV === 'production')
    app.use(compression())

  app.use(cookieParser(secure.SECRET))
  app.use(bodyParser.json({limit: '10mb', extended: true}))
  app.use(bodyParser.urlencoded({extended: true}))

  return app
}

module.exports = {createApp}
