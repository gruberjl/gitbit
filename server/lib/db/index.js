const consts = require('./consts')
const dbs = require('./dbs')
const {create} = require('./create')
const {find} = require('./find')
const {allDocs} = require('./all-docs')
const {update} = require('./update')
const {destroy} = require('./destroy')
const {put} = require('./put')

module.exports = {
  consts, db: dbs, dbs, create, find, allDocs, update, destroy, put
}
