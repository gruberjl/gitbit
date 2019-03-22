const {getPage} = require('./get-page')
const {getAssets} = require('./get-assets')
const {getTenant} = require('./lib/get-tenant')
const {getSitemap} = require('./sitemap')
const {getRss, getJsonFeed, getAtom} = require('./feeds')
const {createApp} = require('../lib/express')

const www = createApp()

www.get('/robots.txt', getTenant, (req, res) => {
  res.type('text/plain')
  res.send(
    `User-Agent: *
Disallow: /gitbit

Sitemap: ${req.protocol}://${req.hostname}/sitemap.xml`
  )
})

www.get('/sitemap.xml', getTenant, getSitemap)
www.get('/rss.xml', getTenant, getRss)
www.get('/feed.json', getTenant, getJsonFeed)
www.get('/atom.xml', getTenant, getAtom)
www.get('/assets/:file', getTenant, getAssets)
www.get('/assets/:fldr/:file', getTenant, getAssets)
www.get('/*', getTenant, getPage)

module.exports = {www}
