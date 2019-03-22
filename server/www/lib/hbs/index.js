const {Handlebars} = require('./handlebars')
const {compile} = require('./compile')
const {render} = require('./render')
const {buildPageContext} = require('./build-page-context')

module.exports = {Handlebars, compile, render, buildPageContext}
