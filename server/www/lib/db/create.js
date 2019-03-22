const dbs = require('./dbs')

const create = (dbName, doc) => new Promise((res) => {
  const db = dbs[dbName]
  db.put(doc, (error, response) => {
    if (error)
      res({error})
    else
      res(response)
  })
})

module.exports = {create}
