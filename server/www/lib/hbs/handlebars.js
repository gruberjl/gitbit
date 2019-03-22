const pHbs = require('promised-handlebars')
const Handlebars = pHbs(require('handlebars'))
const helpers = require('./helpers')

Object.keys(helpers).forEach((helperName) => {
  Handlebars.registerHelper(helperName, helpers[helperName])
})

module.exports = {Handlebars}
