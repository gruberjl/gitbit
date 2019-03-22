const consts = require('./consts')
const dbs = require('./dbs')
const {create} = require('./create')
const {find} = require('./find')
const {allDocs} = require('./all-docs')
const {update} = require('./update')
const {destroy} = require('./destroy')
const {buildId} = require('./build-id')

module.exports = {
  consts, db: dbs, dbs, create, find, allDocs, update, destroy, buildId
}
