const fs = require('fs')
const https = require('https')
const convert = require('xml-js')

const runIndexNow = async () => {
  console.log(__dirname)
  const SITEMAP = fs.readFileSync('./docs/sitemap/sitemap-index.xml', 'utf8')
  const sitemap = JSON.parse(convert.xml2json(SITEMAP, {compact: true}))

  const urlList = sitemap.urlset.url.map(urlset => urlset.loc._text)

  var options = {
    host: 'https://www.bing.com',
    path: '/indexnow?url=https://www.gitbit.org&key=0d95a398ffb0445aae1e53fd4b4e6eb6',
    headers: {'User-Agent': 'request', 'Content-Type': 'application/json; charset=utf-8'},
    method: 'POST'
  }

  https.get(options, function (res) {
      var json = {
        host: 'https://www.gitbit.org',
        key: '0d95a398ffb0445aae1e53fd4b4e6eb6',
        keyLocation: 'https://www.gitbit.org/0d95a398ffb0445aae1e53fd4b4e6eb6.txt',
        urlList
      };
      res.on('data', function (chunk) {
          json += chunk;
      });
      res.on('end', function () {
          if (res.statusCode === 200) {
              try {
                  var data = JSON.parse(json);
                  // data is available here:
                  console.log(data.html_url);
              } catch (e) {
                  console.log('Error parsing JSON!')
                  console.log(e)
              }
          } else {
              console.log('Status:', res.statusCode);
          }
      });
  }).on('error', function (err) {
        console.log('Error:', err);
  })
}

runIndexNow()
