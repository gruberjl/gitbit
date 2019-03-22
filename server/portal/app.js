const fs = require('fs')
const {join} = require('path')
const {render} = require('../www/lib/hbs')

let html

(async () => {
  const source = fs.readFileSync(join(__dirname, 'gitbit.hbs'), 'utf8')
  html = await render(source, {})
})()

const app = (req, res) => {
  res.send(html)
}

module.exports = {app}
