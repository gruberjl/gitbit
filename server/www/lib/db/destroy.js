const dbs = require('./dbs')

const destroy = (dbName, doc) => new Promise((res) => {
  const db = dbs[dbName]

  db.remove(doc, (error, response) => {
    if (error)
      res({error})
    else
      res(response)
  })
})

module.exports = {destroy}
