const express = require('express')
const pages = require('./pages')
const templates = require('./templates')
const tenants = require('./tenants')
const users = require('./users')
const hostnames = require('./hostnames')
const {error404} = require('./error404')

const router = express.Router()

router.post('/pages/create', pages.save)
router.get('/pages/find', pages.find)
router.get('/pages/query', pages.query)
router.post('/pages/update', pages.save)
router.post('/pages/remove', pages.remove)

router.post('/templates/create', templates.save)
router.get('/templates/find', templates.find)
router.get('/templates/query', templates.query)
router.post('/templates/update', templates.save)
router.post('/templates/remove', templates.remove)

router.post('/tenants/update', tenants.save)
router.get('/tenants/find-me', tenants.findMe)

router.get('/hostnames/query', hostnames.query)

router.post('/users/update', users.save)
router.get('/users/find-me', users.findMe)
router.post('/users/update-password', users.updatePassword)

router.use(error404)

module.exports = {router}
