const {seoTest} = require('./seo-test')
const {sitemapTest} = require('./sitemap-test')

const start = () => {
  seoTest()
  sitemapTest()
}

start()