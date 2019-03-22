const {Handlebars} = require('./handlebars')

const compile = template => Handlebars.compile(template)

module.exports = {compile}
