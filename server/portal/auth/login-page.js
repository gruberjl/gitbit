const fs = require('fs')
const {join} = require('path')
const {compile} = require('../../www/lib/hbs')

const source = fs.readFileSync(join(__dirname, 'login.hbs'), 'utf8')
const template = compile(source)

const loginPage = async (req, res) => {
  const html = await template({})
  res.send(html)
}

module.exports = {loginPage, template}
