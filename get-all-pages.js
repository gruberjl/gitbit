const fs = require('fs')
const convert = require('xml-js')

const getAllFromSitemap = async () => {
  const data = fs.readFileSync('./docs/sitemap/sitemap-index.xml', 'utf8')
  const result = convert.xml2js(data)
  result.elements[0].elements.map(el => {
    const loc = el.elements.find(element => element.name==='loc')
    console.log(`${loc.elements[0].text}?utm_source=email&utm_medium=email&utm_campaign=b&utm_id=2`)
  })
}

getAllFromSitemap()
