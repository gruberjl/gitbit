const { SitemapStream, streamToPromise } = require( 'sitemap' )
const { Readable } = require( 'stream' )
const fs = require('fs')
const glob = require('glob')
const debug = require('debug')('gitbit:build-sitemap')

const buildSitemap = async () => {
  debug(`building sitemap`)
  const pageFiles = glob.sync('./src/pages/**/*.js')
  const links = pageFiles.map(file => {
    const stats = fs.statSync(file)

    return {
      url: file.replace('./src/pages/', '/').replace('.js', '').replace('/index', ''),
      lastmod: stats.mtime.toISOString().split('T')[0]
    }
  })

  const stream = new SitemapStream( { hostname: 'https://www.gitbit.org', lastmodDateOnly:true } )

  // Return a promise that resolves with your XML string
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  )

  if (!fs.existsSync('./docs/sitemap/')){
    fs.mkdirSync('./docs/sitemap/');
  }

  fs.writeFileSync('./docs/sitemap/sitemap-index.xml', sitemap)
}

module.exports = buildSitemap
