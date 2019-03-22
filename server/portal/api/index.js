const {error404} = require('./error404')
const {create} = require('./create')
const {find} = require('./find')
const {query} = require('./query')
const {update} = require('./update')
const {remove} = require('./remove')

module.exports = {
  error404, create, find, query, update, remove
}
