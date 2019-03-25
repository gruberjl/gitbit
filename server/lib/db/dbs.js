/* eslint global-require:0 */
const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))
const {DB_NAME, DB_PATH} = require('./consts')

const dbOptions = {}
if (process.env.NODE_ENV === 'test') {
  PouchDB.plugin(require('pouchdb-adapter-memory'))
  dbOptions.adapter = 'memory'
}

const dbs = Object.keys(DB_PATH).reduce((acc, key) => {
  const dbName = DB_NAME[key]
  const dbPath = DB_PATH[key]
  acc[dbName] = new PouchDB(dbPath, dbOptions)
  return acc
}, {})

module.exports = dbs
