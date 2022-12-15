const axios = require('axios')
const convert = require('xml-js')
const fs = require('fs')
const path = require('path')
const diff = require('deep-diff').diff

const sitemapTest = async () => {
  const publicSitemapHtml = await axios.get('https://www.gitbit.org/sitemap/sitemap-index.xml')
  const publicSitemap = convert.xml2js(publicSitemapHtml.data)
  const newSitemapText = fs.readFileSync(path.resolve('docs/sitemap/sitemap-index.xml'), 'utf8')
  const newSitemap = convert.xml2js(newSitemapText)
  const differences = diff(newSitemap, publicSitemap)
  
  differences.forEach(difference => {
    if (difference.kind !== 'E') {
      console.error('Change is not an edit')
      console.error(difference)
    } else if (/\d\d\d\d-\d\d-\d\d/.test(difference.lhs) !== true) {
      console.error('new edited value is not a date')
      console.error(difference)
    } else if (/\d\d\d\d-\d\d-\d\d/.test(difference.rhs) !== true) {
      console.error('new edited value is not a date')
      console.error(difference)
    } else {
      
    }
  })
}

module.exports = {sitemapTest}