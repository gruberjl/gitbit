const https = require('https')
const SEOChecker = require('advanced-seo-checker')
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

parser.on('error', function(err) { console.log('Parser error', err); })

const testProd = async () => {
  await testLighthouse()
  const sitemap = await getSitemap()
}

const testLighthouse = async () => {
  let baseURL = 'https://www.gitbit.org'
  const sitemap = await getSitemap()
  const urls = sitemap.urlset.url.map(obj => obj.loc[0])

  let crawler = SEOChecker(baseURL, {});
  const summary = await crawler.analyze(urls)
  const page = summary.pages[0]
  const errors = Object.values(page.issues.errors).filter(err => err.score < 100)
  const warnings = Object.values(page.issues.warnings).filter(err => err.score < 100)
  const notices = Object.values(page.issues.notices).filter(err => err.score < 100)
}

const getSitemap = () => new Promise((respond, rej) => {
  let data = ''

  https.get('https://www.gitbit.org/sitemap/sitemap-index.xml', function(res) {
    if (res.statusCode >= 200 && res.statusCode < 400) {
      res.on('data', function(data_) { data += data_.toString(); });
      res.on('end', function() {
        parser.parseString(data, function(err, result) {
          if (err)
            return rej(err)

          respond(result)
        })
      })
    }
  })
})

testProd()
