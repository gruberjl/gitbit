const {join} = require('path')
const express = require('express')
const {app} = require('./app')
const api = require('./api')
const auth = require('./auth')
const {upload} = require('./upload')
const {createApp} = require('../lib/express')
const {getAssets} = require('./get-assets')

const portal = createApp()

portal.use('/files', express.static(join(__dirname, 'files')))

portal.get('/login', auth.loginPage)
portal.post('/login', auth.authenticate)

portal.get('/assets/:file', auth.authorize, getAssets)
portal.get('/assets/:fldr/:file', auth.authorize, getAssets)
portal.post('/api/assets/create', auth.authorize, upload)

portal.post('/api/:dbName/create', auth.authorize, api.create)
portal.get('/api/:dbName/find', auth.authorize, api.find)
portal.get('/api/:dbName/query', auth.authorize, api.query)
portal.post('/api/:dbName/update', auth.authorize, api.update)
portal.post('/api/:dbName/remove', auth.authorize, api.remove)
portal.all('/api/*', api.error404)

portal.get('/*', auth.authorize, app)

module.exports = {portal}
