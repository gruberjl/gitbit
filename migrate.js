const SERVER = 'http://localhost:5984'
const {DB} = require('./server/secret')
const nano = require('nano')(`http://${DB.USERNAME}:${DB.PASSWORD}@localhost:5984`)

const createDb = async (dbName) => {
  try {
    return await nano.db.create(dbName)
  } catch(e) {
    if (e.error == 'file_exists') {
      return {ok:'success', error:'file_exists'}
    } else {
      console.log(e)
      return e
    }
  }
}

const start = async () => {
  await createDb('users')
}

start()