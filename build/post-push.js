const fs = require('fs')
const https = require('https')
const convert = require('xml-js')
const axios = require('axios').default

const runIndexNow = async () => {
  console.log(__dirname)
  const SITEMAP = fs.readFileSync('./docs/sitemap/sitemap-index.xml', 'utf8')
  const sitemap = JSON.parse(convert.xml2json(SITEMAP, {compact: true}))

  const urlList = sitemap.urlset.url.map(urlset => urlset.loc._text)


  axios.post('https://www.bing.com/indexnow?url=https://www.gitbit.org&key=0d95a398ffb0445aae1e53fd4b4e6eb6', {
    host: 'https://www.gitbit.org',
    key: '0d95a398ffb0445aae1e53fd4b4e6eb6',
    keyLocation: 'https://www.gitbit.org/0d95a398ffb0445aae1e53fd4b4e6eb6.txt',
    urlList
  })
  .then(function (response) {
    console.log('hurray!')
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

runIndexNow()
