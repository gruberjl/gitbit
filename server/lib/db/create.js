const clone = require('clone-deep')
const dbs = require('./dbs')

const create = (dbName, data) => new Promise((res) => {
  const db = dbs[dbName]
  db.put(data, (error, response) => {
    if (error)
      res({error})
    else {
      const doc = clone(data)
      doc._id = response.id
      doc._rev = response.rev
      res(doc)
    }
  })
})

module.exports = {create}
