const sm = require('sitemap')
const {db} = require('../lib/db')
const {isPublished} = require('../lib/active-record').models.pages

const getSitemap = async (req, res) => {
  const pageRows = await db.pages.query('view/for_sitemap', {key: req.tenant._id})

  if (pageRows.error)
    return res.status(500).send(pageRows.error)

  const urls = pageRows.rows.map(row => row.value)
    .filter(page => page.slug !== '/404')
    .filter(isPublished)
    .map(page => ({
      url: page.slug,
      changefreq: 'weekly'
    }))


  const sitemap = sm.createSitemap({
    hostname: req.hostname,
    urls
  }).toString()

  res.header('Content-Type', 'application/xml')
  return res.send(sitemap)
}

module.exports = {getSitemap}
