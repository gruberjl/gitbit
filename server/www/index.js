const {getPage} = require('./get-page')
const {getAssets} = require('./get-assets')
const {getTenant} = require('./lib/get-tenant')
const {getSitemap} = require('./sitemap')
const {getRss, getJsonFeed, getAtom} = require('./feeds')
const {createApp} = require('../lib/express')
const env = require('../lib/env')

const www = createApp()

www.use(getTenant)

www.use((req, res, next) => {
  if (req.hostname.toLowerCase() !== req.tenant.primaryHostname.toLowerCase()) {
    const url = env.isProd ? `https://${req.tenant.primaryHostname}${req.path}` : `http://${req.tenant.primaryHostname}:3000${req.path}`
    return res.redirect(301, url)
  }

  return next()
})

www.get('/robots.txt', (req, res) => {
  res.type('text/plain')
  res.send(
    `User-Agent: *
Disallow: /gitbit

Sitemap: ${req.protocol}://${req.hostname}/sitemap.xml`
  )
})

www.get('/sitemap.xml', getSitemap)
www.get('/rss.xml', getRss)
www.get('/feed.json', getJsonFeed)
www.get('/atom.xml', getAtom)
www.get('/assets/:file', getAssets)
www.get('/assets/:fldr/:file', getAssets)
www.get('/*', getPage)

module.exports = {www}
