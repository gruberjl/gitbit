const {join} = require('path')
const express = require('express')
const {app} = require('./app')
const auth = require('./auth')
const {upload, uploadImage} = require('./upload')
const {createApp} = require('../lib/express')
const {getAssets} = require('./get-assets')
const api = require('./api')

const portal = createApp()

portal.use('/files', express.static(join(__dirname, 'files')))

portal.get('/login', auth.loginPage)
portal.post('/login', auth.authenticate)

portal.get('/assets/*', auth.authorize, getAssets)
portal.post('/api/assets/create', auth.authorize, upload)
portal.post('/api/assets/create-image', auth.authorize, uploadImage)

portal.use('/api', api.router)

portal.get('/*', auth.authorize, app)

module.exports = {portal}
