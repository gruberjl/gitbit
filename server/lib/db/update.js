const clone = require('clone-deep')
const dbs = require('./dbs')

const update = (dbName, data) => new Promise((res) => {
  const db = dbs[dbName]

  db.put(data, (error, response) => {
    if (error)
      res({error})
    else {
      const doc = clone(data)
      doc._rev = response.rev
      res(response)
    }
  })
})

module.exports = {update}
