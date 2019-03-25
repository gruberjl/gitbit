const PouchDB = require('pouchdb')
const dbs = require('../dbs')

describe('server/lib/db/dbs.js', () => {
  test('returns databases', () => {
    expect(Object.keys(dbs)).toEqual(['hostnames', 'tenants', 'pages', 'templates', 'users', 'sessions', 'logs'])

    Object.values(dbs).forEach((db) => {
      expect(db).toBeInstanceOf(PouchDB)
    })
  })
})
