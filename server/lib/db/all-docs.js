const dbs = require('./dbs')

const allDocs = (dbName, options) => new Promise((res) => {
  const db = dbs[dbName]

  db.allDocs(options, (error, response) => {
    if (error)
      res({error})
    else
      res(response)
  })
})

module.exports = {allDocs}
