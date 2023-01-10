const axios = require('axios')
const convert = require('xml-js')
const fs = require('fs')
const path = require('path')
const {addedDiff, deletedDiff} = require('deep-object-diff')
const flatten = require('flat')

const sitemapTest = async () => {
  const publicSitemapHtml = await axios.get('https://www.gitbit.org/sitemap/sitemap-index.xml')
  const publicSitemap = convert.xml2js(publicSitemapHtml.data) //sortobject(convert.xml2js(publicSitemapHtml.data))
  const newSitemapText = fs.readFileSync(path.resolve('docs/sitemap/sitemap-index.xml'), 'utf8')
  const newSitemap = convert.xml2js(newSitemapText) //sortobject(convert.xml2js(newSitemapText))
  const added = addedDiff(publicSitemap, newSitemap)
  const deleted = deletedDiff(publicSitemap, newSitemap)
  let error = false

  if (Object.keys(added).length > 0) {
    console.log(`Elements added to sitemap`)
    console.log(flatten(added))
    console.log('')
    error = true
  }

  if (Object.keys(deleted).length > 0) {
    console.log(`Elements removed from sitemap`)
    console.log(flatten(deleted))
    console.log('')
    error = true
  }

  if (!error)
    console.log('No changes to sitemap')
}

module.exports = {sitemapTest}