const dbs = require('./dbs')

const find = (dbName, id) => new Promise((res) => {
  const db = dbs[dbName]

  db.get(id, (error, response) => {
    if (error)
      res({error})
    else
      res(response)
  })
})

module.exports = {find}
