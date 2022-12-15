const {seoTest} = require('./seo-test')
const {sitemapTest} = require('./sitemap-test')

const start = async () => {
  await sitemapTest()
  await seoTest()
}

start()